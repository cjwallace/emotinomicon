<script lang="ts">
	export let nEmotions: number;
</script>

<div class="intro">
	<p>Hello, human.</p>
	<p>I am a strange... book?</p>
	<p>Of sorts.</p>
	<p>
		If you tell me the name of the emotion you are experiencing, I will tell you what I understand
		it to mean. My index currently includes <b>{nEmotions}</b> emotional states.
	</p>
	<p>
		Naming things is difficult for humans, so I will also tell you the names of some emotions that
		are nearby in my high-dimensional vector space.
	</p>
	<p>I hope you find this useful.</p>
</div>

<style>
	.intro {
		align-self: flex-start;
		font-size: 1rem;
		padding: 10px;
	}

	p {
		margin: 0;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
</style>
