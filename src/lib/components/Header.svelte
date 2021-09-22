<script lang="ts">
	import type { InterviewDefinition } from 'src/routes/index.json';
	import { base } from '$app/paths';
	import { component_subscribe } from 'svelte/internal';

	export let Interviews: InterviewDefinition[];
</script>

<div class="px-12 lg:px-32 pt-6 lg:pt-24 pb-3 lg:pb-12">
	<div class="max-w-screen-xl flex flex-col">
		<div class="flex flex-col lg:flex-row">
			<div class="flex flex-col">
				<h1 class="pb-3 lg:pb-12">Purple Interviews</h1>
				<p class="max-w-prose">
					We're pleased to invite you to the testing stage of our Consultant roles at Telstra
					Purple. On this page you'll find instructions on how to complete the technical interview
					pre-requisites for the desired role you're looking to apply for.
					<br /><br />
					Once you have completed the prescribed test, please send back your workings as instructed below.
					One of our consultants will then review and make a decision on whether you will progress to
					the next stage. Rest assured, we'll of course give you feedback either way.
					<br /><br />
					If you're interested to see more roles at Telstra Purple, make sure to check out
					<a href="http://purple.telstra.com/careers" class="text-red">Telstra Purple Careers</a>.
					<br /><br />
					To understand more about our role levels, check out our
					<a href="http://personas.purple.telstra.com/" class="text-red">Career Frameworks</a> page.
				</p>
			</div>
			<img
				src={`${base}/interview.svg`}
				alt="A person sitting at a desk with a laptop"
				class="max-h-300"
			/>
		</div>
		{#if Interviews.length > 1}
			<h2 class="py-3 lg:pt-12 lg:pb-2">Interview for</h2>
			<div class="flex flex-col lg:flex-row justify-start flex-wrap">
				{#each Interviews as Interview}
					<a href={`${base}/${Interview.slug}`}>
						<div class="rounded-lg px-5 py-2 bg-red text-white text-lg mr-4 mb-2 hover:bg-black">
							{Interview.metadata.title}
						</div>
					</a>
				{/each}
			</div>
		{:else}
			<div class="hidden">
				{#each Interviews as Interview}
					<a href={`${base}/${Interview.slug}`}>
						<div>{Interview.metadata.title}</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
