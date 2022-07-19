<script lang="ts">
	import Fuse from 'fuse.js';

	import emotions from '$lib/emotions';

	// List

	type Item = {
		name: string;
		description: string;
	};

	const list: Item[] = emotions;

	const items = list.map((item) => item.name);

	// Fuzzy search

	const fuse = new Fuse<Item>(list, { keys: ['name'] });

	let pattern: string = '';

	$: results = pattern === '' ? items : fuse.search(pattern).map((result) => result.item.name);

	// ARIA

	// Combobox interactions

	type ListboxState = 'open' | 'closed';

	let input: HTMLInputElement;
	let listbox: HTMLElement;
	let selectedIndex: number = -1;
	let selectedEmotionName: string = '';
	let selectedEmotion: Item;
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

	const clamp = (n: number): number => {
		if (n > results.length - 1) {
			return 0;
		} else if (n < 0) {
			return results.length - 1;
		} else {
			return n;
		}
	};

	function handleKeyDown(e: KeyboardEvent) {
		switch (e.key) {
			case 'Escape':
				selectedIndex = -1;
				closeListbox();
				unfocus();
				break;

			case 'ArrowDown':
				e.preventDefault();
				selectedIndex = clamp(selectedIndex + 1);
				openListbox();
				focusListbox();
				break;

			case 'ArrowUp':
				e.preventDefault();
				selectedIndex = clamp(selectedIndex - 1);
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

	$: if (selectedIndex !== -1) {
		listboxState = 'open';
	} else {
		listboxState = 'closed';
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
	<label for="emotinomicon-input">T H E &nbsp;&nbsp; E M O T I N O M I C O N</label>
	<input
		id="emotionomicon-input"
		type="text"
		role="combobox"
		aria-autocomplete="list"
		aria-expanded="false"
		aria-controls="emotinomicon-listbox"
		class={inputVisualFocus ? 'visual-focus' : ''}
		bind:value={pattern}
		bind:this={input}
		on:keydown={handleKeyDown}
		on:focus={focusInput}
	/>
	{#if listboxState === 'open'}
		<div class="listbox" bind:this={listbox} class:visual-focus={listboxVisualFocus}>
			<ul id="emotinomicon-listbox" role="listbox" aria-label="Emotions">
				{#each results as emotion, i}
					<li
						role="option"
						id="emotion-{emotion}"
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
</div>

<style>
	:root {
		--black: #211e20;
		--grey: #555568;
		--highlight: #a0a08b;
		--light: #e9efec;
	}

	.wrapper {
		padding: 10px;
		color: var(--black);
		background-color: var(--light);
		padding-top: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.hide {
		display: none;
	}

	label {
		font-family: monospace;
		font-size: 1rem;
	}

	.entry {
		width: 100%;
		margin: 10px;
		padding: 10px;
		font-family: monospace;
		font-size: 1rem;
		text-align: center;
		border: 2px solid var(--black);
		border-radius: 0px;
	}

	input,
	.listbox {
		width: 100%;
		margin: 10px;
		padding: 10px;
		font-family: monospace;
		font-size: 2rem;
		text-align: center;
		border: 2px solid var(--black);
		border-radius: 0px;
	}

	input[type='text'] {
		background-color: var(--light);
	}

	input:focus {
		outline: none;
	}

	input:hover {
		outline-offset: 2px;
		outline: 2px solid var(--grey);
	}

	input.visual-focus {
		outline-offset: 2px;
		outline: 2px solid var(--grey);
	}

	.listbox.visual-focus,
	.listbox:hover {
		outline-offset: 2px;
		outline: 2px solid var(--grey);
	}

	[role='listbox'] {
		max-height: 30rem;
		overflow: auto;
	}

	::-webkit-scrollbar-track {
		background: var(--highlight);
	}

	::-webkit-scrollbar-thumb {
		background: var(--grey);
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

	li:hover {
		background-color: var(--highlight);
	}
</style>
