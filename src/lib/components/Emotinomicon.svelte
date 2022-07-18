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
				showList = true;
				break;
		}
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

<div class="wrapper">
	<label for="emotinomicon-input">The Emotinomicon</label>
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
					<li role="option" id="emotion-{emotion}" class:selected={selectedIndex === i}>
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
	.wrapper {
		padding-top: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 500px;
		max-width: 500px;
		min-width: 500px;
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
		border: 1px solid black;
		border-radius: 4px;
	}

	input,
	.listbox {
		width: 100%;
		margin: 10px;
		padding: 10px;
		font-family: monospace;
		font-size: 2rem;
		text-align: center;
		border: 1px solid black;
		border-radius: 4px;
	}

	.listbox {
		max-height: 30rem;
		overflow: auto;
	}

	.selected {
		background-color: aqua;
	}

	ul,
	li {
		list-style-type: none;
		text-align: center;
		margin: 0;
		padding: 0;
	}
</style>
