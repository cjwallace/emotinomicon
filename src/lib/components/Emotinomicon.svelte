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
	let input: HTMLInputElement;

	$: results =
		pattern === ''
			? list.map((item) => item.name)
			: fuse.search(pattern).map((result) => result.item.name);

	// ARIA

	// Combobox interactions

	const handleKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'Escape':
				input.blur();
				break;
		}
	};
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
	{#if pattern !== ''}
		<di class="listbox">
			<ul id="emotinomicon-listbox" role="listbox" aria-label="Emotions">
				{#each results as emotion}
					<li role="option" id="emotion-{emotion}">{emotion}</li>
				{/each}
			</ul>
		</di>
	{/if}
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

	ul,
	li {
		list-style-type: none;
		text-align: center;
		margin: 0;
		padding: 0;
	}
</style>
