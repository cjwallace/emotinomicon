<script lang="ts">
	import Fuse from 'fuse.js';

	import emotions from '$lib/emotions';
	import type { Emotion } from '$lib/emotions';

	// List

	const list: Emotion[] = emotions;

	const items = list.map((item) => item.name);

	// Fuzzy search

	const fuse = new Fuse<Emotion>(list, { keys: ['name'] });

	let pattern: string = '';

	$: results = pattern === '' ? items : fuse.search(pattern).map((result) => result.item.name);

	// ARIA

	// Combobox interactions

	type ListboxState = 'open' | 'closed';

	let input: HTMLInputElement;
	let listbox: HTMLElement;
	let previousSelected: HTMLElement | null;
	let selected: HTMLElement | null;
	let selectedIndex: number = -1;
	let selectedEmotionName: string = '';
	let selectedEmotion: Emotion;
	let listboxState: ListboxState = 'closed';
	let inputVisualFocus = false;
	let listboxVisualFocus = false;

	function openListbox() {
		listboxState = 'open';
		input.ariaExpanded = 'true';
	}

	function closeListbox() {
		listboxState = 'closed';
		listboxVisualFocus = false;
		input.ariaExpanded = 'false';
		input.blur();
	}

	function focusListbox() {
		listboxVisualFocus = true;
		inputVisualFocus = false;
	}

	function focusInput() {
		listboxVisualFocus = false;
		inputVisualFocus = true;
	}

	function unfocus() {
		listboxVisualFocus = false;
		inputVisualFocus = false;
	}

	const wrap = (n: number): number => {
		if (n > results.length - 1) {
			return 0;
		} else if (n < 0) {
			return results.length - 1;
		} else {
			return n;
		}
	};

	function isInView(item: HTMLElement) {
		const bounding = item.getBoundingClientRect();
		return (
			// is not visually above visible scroll box
			item.offsetTop + item.clientHeight > listbox.scrollTop + listbox.clientHeight &&
			// is not visually below visible scroll box
			item.offsetTop < listbox.scrollTop
		);
	}

	function select() {
		previousSelected = selected;
		selected = document.getElementById(`emotion-${selectedIndex}`);
		if (selected) {
			if (previousSelected) {
				previousSelected.ariaSelected = 'false';
			}
			selected.ariaSelected = 'true';
			if (!isInView(selected)) {
				selected.scrollIntoView({ block: 'nearest' });
			}
		}
	}

	function selectNext() {
		selectedIndex = wrap(selectedIndex + 1);
		select();
	}

	function selectPrevious() {
		selectedIndex = wrap(selectedIndex - 1);
		select();
	}

	function handleKeyDown(e: KeyboardEvent) {
		switch (e.key) {
			case 'Escape':
				// TODO: perhaps selectedIndex should be reactive,
				// it would tidy this up
				selectedIndex = -1;
				if (pattern === '') {
					selectedEmotionName = '';
				}
				closeListbox();
				unfocus();
				break;

			case 'ArrowDown':
				e.preventDefault();
				selectNext();
				openListbox();
				focusListbox();
				break;

			case 'ArrowUp':
				e.preventDefault();
				selectPrevious();
				openListbox();
				focusListbox();
				break;

			case 'ArrowLeft':
				focusInput();
				break;

			case 'ArrowRight':
				focusInput();
				break;

			case 'Enter':
				if (selectedIndex !== -1) {
					selectedEmotionName = results[selectedIndex];
					pattern = selectedEmotionName;
					selectedIndex = -1;
					closeListbox();
					unfocus();
				}
				break;

			case 'Tab':
				closeListbox();
				unfocus();
				break;

			default:
				// TODO: this is a hack to open it on typing alpha characters,
				// but results in weird behaviour like opening on 'alt'
				openListbox();
				focusInput();
				break;
		}
	}

	function handleListClick(e: MouseEvent, i: number) {
		selectedIndex = i;
		selectedEmotionName = results[selectedIndex];
		pattern = selectedEmotionName;
		selectedIndex = -1;
		closeListbox();
	}

	function handleWindowClick(e: MouseEvent) {
		if (e.target !== input) {
			closeListbox();
			unfocus();
		}
	}

	function handleButtonClick(e: MouseEvent, closeEmotion: string) {
		pattern = closeEmotion;
		selectedEmotionName = closeEmotion;
	}

	$: {
		// TODO: filtering the list on each selection is inefficient, use a lookup
		selectedEmotion = list.filter((item) => item.name === selectedEmotionName)[0];
	}
</script>

<svelte:head>
	<style>
		body {
			background-color: #e9efec;
		}
	</style>
</svelte:head>

<svelte:window on:click={handleWindowClick} />

<div class="wrapper">
	<label for="emotinomicon-input"
		><span>T H E</span> &nbsp; <span>E M O T I N O M I C O N</span></label
	>
	<input
		id="emotionomicon-input"
		type="text"
		role="combobox"
		aria-autocomplete="list"
		aria-activedescendant={selectedIndex !== -1 ? `emotion-${selectedIndex}` : null}
		aria-expanded="false"
		aria-controls="emotinomicon-listbox"
		class:visual-focus={inputVisualFocus}
		bind:value={pattern}
		bind:this={input}
		on:keydown={handleKeyDown}
		on:focus={focusInput}
	/>

	{#if listboxState === 'open'}
		<div class="listbox" class:visual-focus={listboxVisualFocus}>
			<ul id="emotinomicon-listbox" role="listbox" aria-label="Emotions" bind:this={listbox}>
				{#each results as emotion, i}
					<li
						role="option"
						id="emotion-{i}"
						aria-selected="false"
						class:selected={selectedIndex === i}
						on:click={(e) => handleListClick(e, i)}
					>
						{emotion}
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<div class="entry" class:hide={selectedEmotionName === '' || listboxState === 'open'}>
		<p>{selectedEmotion?.description ?? ''}</p>
	</div>

	<div class="entry" class:hide={selectedEmotionName === '' || listboxState === 'open'}>
		<p>
			Perhaps that is not exactly what you are feeling. My navigation systems detect the following
			nearby emotional states.
		</p>
		<ul>
			{#each selectedEmotion?.closeEmotions ?? [] as closeEmotion}
				<li>
					<button
						aria-controls="emotionomicon-input"
						on:click={(e) => handleButtonClick(e, closeEmotion)}>{closeEmotion}</button
					>
				</li>
			{/each}
		</ul>
	</div>

	{#if listboxState === 'closed' && selectedEmotionName === ''}
		<div class="intro">
			<p>Hello, human.</p>
			<p>I am a strange... book?</p>
			<p>Of sorts.</p>
			<p>
				If you tell me the name of the emotion you are experiencing, I will tell you what I
				understand it to mean. My index currently includes <b>{list.length}</b> emotional states.
			</p>
			<p>
				Naming things is difficult for humans, so I will also tell you the names of some emotions
				that are nearby in my high-dimensional vector space.
			</p>
			<p>I hope you find this useful.</p>
		</div>
	{/if}
</div>

<style>
	:root {
		--black: #211e20;
		--grey: #555568;
		--highlight: #a0a08b;
		--light: #e9efec;
	}

	* {
		box-sizing: border-box;
	}

	.wrapper {
		margin: auto;
		padding: 1rem;
		color: var(--black);
		background-color: var(--light);
		padding-top: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		font-family: monospace;
	}

	.intro {
		align-self: flex-start;
		font-size: 1rem;
		padding: 10px;
	}

	span {
		display: inline-block;
	}

	label {
		text-align: center;
		padding-top: 2rem;
		font-size: 1rem;
		padding: 10px;
	}

	input,
	.listbox,
	.entry {
		width: 100%;
		margin-top: 10px;
		margin-bottom: 10px;
		padding: 10px;
		font-size: 2rem;
		text-align: center;
		font-family: inherit;
		border: 2px solid var(--black);
		border-radius: 0px;
	}

	.listbox {
		font-size: 1.5rem;
	}

	.hide {
		display: none;
	}

	.entry {
		font-size: 1rem;
	}

	p {
		margin: 0;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	input[type='text'] {
		background-color: var(--light);
	}

	input:focus {
		outline: none;
	}

	input:hover,
	input.visual-focus,
	.listbox:hover,
	.listbox.visual-focus {
		outline-offset: 2px;
		outline: 2px solid var(--grey);
	}

	ul[role='listbox'] {
		max-height: 30rem;
		overflow: auto;
	}

	.selected {
		background-color: var(--highlight);
	}

	ul,
	li {
		list-style-type: none;
		text-align: center;
		margin: 0;
		padding: 0;
	}

	.listbox li:hover {
		background-color: var(--highlight);
	}

	button {
		font-family: monospace;
		font-size: 1rem;
		border: 1px solid var(--grey);
		background-color: var(--light);
		width: 50%;
		padding: 2px;
		margin: 0.5rem;
	}

	button:focus,
	button:hover {
		outline-offset: 2px;
		outline: 2px solid var(--grey);
	}

	ul::-webkit-scrollbar {
		background: var(--light);
	}

	ul::-webkit-scrollbar-track {
		background: var(--light);
	}

	ul::-webkit-scrollbar-thumb {
		background: var(--grey);
	}
</style>
