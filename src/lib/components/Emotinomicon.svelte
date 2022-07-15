<script lang="ts">
	import Fuse from 'fuse.js';

	// List

	type Item = {
		name: string;
	};

	const list: Item[] = [
		{ name: 'abhorrence' },
		{ name: 'adoration' },
		{ name: 'affection' },
		{ name: 'aggravation' },
		{ name: 'agitation' },
		{ name: 'agony' },
		{ name: 'alienation' },
		{ name: 'amusement' },
		{ name: 'anger' },
		{ name: 'anguish' },
		{ name: 'annoyance' },
		{ name: 'antipathy' },
		{ name: 'anxiety' },
		{ name: 'apologetic' },
		{ name: 'apprehension' },
		{ name: 'arousal' },
		{ name: 'attraction' },
		{ name: 'aversion' },
		{ name: 'bitterness' },
		{ name: 'bliss' },
		{ name: 'caring' },
		{ name: 'cautious' },
		{ name: 'charmed' },
		{ name: 'cheerfulness' },
		{ name: 'clinging' },
		{ name: 'clutching' },
		{ name: 'compassion' },
		{ name: 'condescension' },
		{ name: 'contempt' },
		{ name: 'contentment' },
		{ name: 'contrition' },
		{ name: 'covetous' },
		{ name: 'craving' },
		{ name: 'crushed' },
		{ name: 'culpability' },
		{ name: 'defeat' },
		{ name: 'defensive' },
		{ name: 'dejection' },
		{ name: 'delight' },
		{ name: 'depression' },
		{ name: 'derision' },
		{ name: 'desire' },
		{ name: 'despair' },
		{ name: 'disappointment' },
		{ name: 'discomposure' },
		{ name: 'discontentment' },
		{ name: 'disdain' },
		{ name: 'disgruntled' },
		{ name: 'disgust' },
		{ name: 'dislike' },
		{ name: 'dismay' },
		{ name: 'displeasure' },
		{ name: 'dissatisfaction' },
		{ name: 'distaste' },
		{ name: 'distraught' },
		{ name: 'down-hearted' },
		{ name: 'dread' },
		{ name: 'eagerness' },
		{ name: 'ecstacy' },
		{ name: 'edginess' },
		{ name: 'elation' },
		{ name: 'embarassment' },
		{ name: 'enchantment' },
		{ name: 'enjoyment' },
		{ name: 'enthrallment' },
		{ name: 'enthusiasm' },
		{ name: 'envy' },
		{ name: 'euphoria' },
		{ name: 'exasperation' },
		{ name: 'excitement' },
		{ name: 'exhilaration' },
		{ name: 'fear' },
		{ name: 'ferocity' },
		{ name: 'fondness' },
		{ name: 'fright' },
		{ name: 'frustration' },
		{ name: 'fury' },
		{ name: 'gaiety' },
		{ name: 'gladness' },
		{ name: 'glee' },
		{ name: 'gloom' },
		{ name: 'glumness' },
		{ name: 'greed' },
		{ name: 'grief' },
		{ name: 'grouchiness' },
		{ name: 'grumpiness' },
		{ name: 'guilt' },
		{ name: 'happiness' },
		{ name: 'hate' },
		{ name: 'homesickness' },
		{ name: 'hope' },
		{ name: 'horror' },
		{ name: 'hostility' },
		{ name: 'humiliation' },
		{ name: 'hurt' },
		{ name: 'hysteria' },
		{ name: 'indignation' },
		{ name: 'infatuation' },
		{ name: 'insecurity' },
		{ name: 'irritation' },
		{ name: 'jealous' },
		{ name: 'jolliness' },
		{ name: 'joviality' },
		{ name: 'joy' },
		{ name: 'jubilation' },
		{ name: 'jumpiness' },
		{ name: 'kindness' },
		{ name: 'liking' },
		{ name: 'limerence' },
		{ name: 'loathing' },
		{ name: 'loneliness' },
		{ name: 'longing' },
		{ name: 'love' },
		{ name: 'lust' },
		{ name: 'melancholy' },
		{ name: 'misery' },
		{ name: 'mistrustful' },
		{ name: 'mortification' },
		{ name: 'neglect' },
		{ name: 'nervousness' },
		{ name: 'optimism' },
		{ name: 'outrage' },
		{ name: 'overwhelmed' },
		{ name: 'panic' },
		{ name: 'passion' },
		{ name: 'pettiness' },
		{ name: 'pity' },
		{ name: 'pleasure' },
		{ name: 'possessive' },
		{ name: 'pride' },
		{ name: 'rage' },
		{ name: 'rapture' },
		{ name: 'regret' },
		{ name: 'rejection' },
		{ name: 'relief' },
		{ name: 'remorse' },
		{ name: 'repelled' },
		{ name: 'repugnance' },
		{ name: 'repulsion' },
		{ name: 'resentment' },
		{ name: 'revolted' },
		{ name: 'rivalrous' },
		{ name: 'sadness' },
		{ name: 'satisfaction' },
		{ name: 'scorn' },
		{ name: 'self-conscious' },
		{ name: 'self-protective' },
		{ name: 'sentimentality' },
		{ name: 'shame' },
		{ name: 'shock' },
		{ name: 'shyness' },
		{ name: 'sickened' },
		{ name: 'sorrow' },
		{ name: 'sorry' },
		{ name: 'spite' },
		{ name: 'suffering' },
		{ name: 'suspicious' },
		{ name: 'sympathy' },
		{ name: 'tenderness' },
		{ name: 'tenseness' },
		{ name: 'terror' },
		{ name: 'thrill' },
		{ name: 'triumph' },
		{ name: 'uneasiness' },
		{ name: 'unhappiness' },
		{ name: 'vengefulness' },
		{ name: 'vile' },
		{ name: 'warmth' },
		{ name: 'wary' },
		{ name: 'watchful' },
		{ name: 'wishful' },
		{ name: 'woe' },
		{ name: 'worry' },
		{ name: 'wrath' },
		{ name: 'zaniness' },
		{ name: 'zeal' },
		{ name: 'zest' }
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
