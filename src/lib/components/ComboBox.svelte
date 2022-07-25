<script lang="ts">
	import Fuse from 'fuse.js';

	export let ariaLabel: string;
	export let list: Array<string>;
	export let pattern: string = '';
	export let selectedItem: string = '';
	export let comboboxActive = false;
	export let placeholder: string = '';

	let input: HTMLInputElement;
	let listbox: HTMLElement;
	let previousSelected: HTMLElement | null;
	let selected: HTMLElement | null;
	let selectedIndex: number = -1;
	let inputVisualFocus = false;
	let listboxVisualFocus = false;

	const fuse = new Fuse<string>(list);
	$: results = pattern === '' ? list : fuse.search(pattern).map((result) => result.item);

	function openListbox() {
		comboboxActive = true;
		input.ariaExpanded = 'true';
	}

	function closeListbox() {
		comboboxActive = false;
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
					selectedItem = '';
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
					selectedItem = results[selectedIndex];
					pattern = selectedItem;
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
		selectedItem = results[selectedIndex];
		pattern = selectedItem;
		selectedIndex = -1;
		closeListbox();
	}

	function handleWindowClick(e: MouseEvent) {
		if (e.target !== input) {
			closeListbox();
			unfocus();
		}
	}
</script>

<svelte:window on:click={handleWindowClick} />

<label for="combobox-input"><span>T H E</span> &nbsp; <span>E M O T I N O M I C O N</span></label>
<input
	id="combobox-input"
	type="text"
	role="combobox"
	aria-autocomplete="list"
	aria-activedescendant={selectedIndex !== -1 ? `emotion-${selectedIndex}` : null}
	aria-expanded="false"
	aria-controls="combobox-listbox"
	{placeholder}
	class:visual-focus={inputVisualFocus}
	bind:value={pattern}
	bind:this={input}
	on:keydown={handleKeyDown}
	on:focus={focusInput}
/>

{#if comboboxActive}
	<div class="listbox" class:visual-focus={listboxVisualFocus}>
		<ul id="combobox-listbox" role="listbox" aria-label={ariaLabel} bind:this={listbox}>
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

<style>
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
	.listbox {
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

	input[type='text'] {
		background-color: var(--light);
	}

	input::placeholder,
	input::ms-input-placeholder {
		color: var(--highlight);
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
