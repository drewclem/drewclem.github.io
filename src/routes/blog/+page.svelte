<script>
	import PageTitle from '$lib/page-title.svelte';

	let articles = [];
	async function fetchArticles() {
		const res = await fetch('https://dev.to/api/articles?username=drewclem&state=all', {
			method: 'GET'
		});

		const data = await res.json();

		articles = data;
	}

	fetchArticles();
</script>

<PageTitle>Blog</PageTitle>

<section class="md:w-3/4">
	{#each articles as article}
		<article class="pb-8 mb-8 border-b border-gray-100">
			<p class="text-red-600 text-sm mb-1">{article.readable_publish_date}</p>
			<h2 class="text-lg font-bold font-display mb-4">{article.title}</h2>

			<div class="mb-2 opacity-75 ">{article.description}</div>

			<a sveltekit:prefetch href={`blog/${article.slug}`} class="text-red-600 text-sm underline font-display">
				Read More
			</a>
		</article>
	{/each}
</section>
