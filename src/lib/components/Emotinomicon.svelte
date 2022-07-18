<script lang="ts">
	import Fuse from 'fuse.js';

	import emotions from '$lib/emotions';

	// List

	type Item = {
		name: string;
	};

	const list: Item[] = emotions;

	const items = list.map((item) => item.name);

	// Fuzzy search

	const fuse = new Fuse<Item>(list, { keys: ['name'] });

	let pattern: string = '';

	$: results =
		pattern === ''
			? list.map((item) => item.name)
			: fuse.search(pattern).map((result) => result.item.name);

	// ARIA

	// Combobox interactions

	// enter to select
	//
	let input: HTMLInputElement;
	let selectedIndex: number = -1;
	let selectedEmotion: string = '';

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
				selectedIndex = -1;
				break;

			case 'ArrowDown':
				selectedIndex = clamp(selectedIndex + 1);
				break;

			case 'ArrowUp':
				selectedIndex = clamp(selectedIndex - 1);
				break;

			case 'Enter':
				selectedEmotion = results[selectedIndex];
				input.blur();
				show = false;
		}
	};

	let show = false;
	$: if (pattern !== '') {
		show = true;
	} else if (selectedIndex !== -1) {
		show = true;
	} else {
		show = false;
	}
</script>

<div class="wrapper">
	<label for="emotinomicon-input">The Emotionomicon</label>
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
	{#if show}
		<di class="listbox">
			<ul id="emotinomicon-listbox" role="listbox" aria-label="Emotions">
				{#each results as emotion, i}
					<li role="option" id="emotion-{emotion}" class:selected={selectedIndex === i}>
						{emotion}
					</li>
				{/each}
			</ul>
		</di>
	{/if}

	<h1>{selectedEmotion}</h1>
</div>

<style>
	.wrapper {
		padding-top: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	label {
		font-family: monospace;
		font-size: 1rem;
	}

	input,
	.listbox {
		padding: 10px;
		margin: 10px;
		font-family: monospace;
		font-size: 2rem;
		min-width: 400px;
		border: 1px solid black;
		border-radius: 4px;
		text-align: center;
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
