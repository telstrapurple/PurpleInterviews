<script context="module">
	import { base } from '$app/paths';

	export async function load({ fetch }) {
		const Interviews = await fetch(`${base}/index.json`).then((r) => r.json());
		return {
			props: { Interviews }
		};
	}
</script>

<script lang="ts">
	import '../app.postcss';
	import Nav from '$lib/components/Nav.svelte';
	import type { InterviewDefinition } from './index.json';
	import Header from '$lib/components/Header.svelte';

	export let Interviews: InterviewDefinition[];
</script>

<div>
	<Nav />
	<Header {Interviews} />
	<slot />
</div>
