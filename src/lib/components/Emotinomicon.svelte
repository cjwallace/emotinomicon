<script lang="ts">
	import Fuse from 'fuse.js';

	// List

	type Item = {
		name: string;
	};

	const list: Item[] = [
		{ name: 'foo' },
		{ name: 'bar' },
		{ name: 'baz' },
		{ name: 'qux' },
		{ name: 'quux' },
		{ name: 'quuz' },
		{ name: 'corge' },
		{ name: 'grault' },
		{ name: 'garply' },
		{ name: 'waldo' },
		{ name: 'fred' },
		{ name: 'plugh' },
		{ name: 'xyzzy' },
		{ name: 'thud' }
	];

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
		}
	};
</script>

<div class="wrapper">
	<!-- <label for="emotinomicon-input">Emotion</label> -->
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

	input,
	.listbox {
		padding: 10px;
		margin: 10px;
		font-family: monospace;
		font-size: 2rem;
		min-width: 400px;
		border: 1px solid black;
		border-radius: 4px;
	}

	.listbox {
		padding: 10;
	}

	ul,
	li {
		list-style-type: none;
		text-align: center;
		margin: 0;
		padding: 0;
	}
</style>
