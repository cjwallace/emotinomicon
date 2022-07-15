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
	<label for="emotinomicon-input">Emotion</label>
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
		padding-top: 3rem;
	}

	input {
		border: 1px solid black;
	}

	.listbox {
		border: 1px solid black;
	}
</style>
