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

	// enter to select
	//
	let input: HTMLInputElement;
	let selectedIndex: number = -1;
	let selectedEmotionName: string = '';
	let selectedEmotion: Item;
	let showList = false;

	const clamp = (n: number): number => {
		if (n > results.length - 1) {
			return 0;
		} else if (n < 0) {
			return results.length - 1;
		} else {
			return n;
		}
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'Escape':
				input.blur();
				showList = false;
				selectedIndex = -1;
				break;

			case 'ArrowDown':
				selectedIndex = clamp(selectedIndex + 1);
				break;

			case 'ArrowUp':
				selectedIndex = clamp(selectedIndex - 1);
				break;

			case 'Enter':
				if (selectedIndex !== -1) {
					selectedEmotionName = results[selectedIndex];
					pattern = selectedEmotionName;
					input.blur();
					showList = false;
					selectedIndex = -1;
				}
				break;

			case 'Tab':
				showList = false;
				break;

			default:
				// TODO: this is a hack to open it on typing alpha characters,
				// but results in weird behaviour like opening on 'alt'
				showList = true;
				break;
		}
	};

	const handleClick = (e: MouseEvent, i: number) => {
		selectedIndex = i;
		selectedEmotionName = results[selectedIndex];
		pattern = selectedEmotionName;
		input.blur();
		showList = false;
		selectedIndex = -1;
	};

	$: if (selectedIndex !== -1) {
		showList = true;
	} else {
		showList = false;
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

<div class="wrapper">
	<label for="emotinomicon-input">T H E &nbsp;&nbsp; E M O T I N O M I C O N</label>
	<input
		id="emotionomicon-input"
		type="text"
		role="combobox"
		aria-autocomplete="list"
		aria-expanded="false"
		aria-controls="emotinomicon-listbox"
		bind:value={pattern}
		bind:this={input}
		on:keydown={handleKeyDown}
	/>
	{#if showList}
		<div class="listbox">
			<ul id="emotinomicon-listbox" role="listbox" aria-label="Emotions">
				{#each results as emotion, i}
					<li
						role="option"
						id="emotion-{emotion}"
						class:selected={selectedIndex === i}
						on:click={(e) => handleClick(e, i)}
					>
						{emotion}
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<div class="entry" class:hide={selectedEmotionName === '' || showList}>
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

	.entry:hover {
		border-color: var(--highlight);
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

	input:hover {
		border-color: var(--highlight);
	}

	input:focus {
		outline: var(--highlight);
		border-color: var(--highlight);
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
