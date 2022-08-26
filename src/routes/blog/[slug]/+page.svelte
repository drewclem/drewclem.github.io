<script>
	import PageTitle from '$lib/page-title.svelte';

	/**
	 * @type {any}
	 */
	export let data;
</script>

<div class="flex justify-between items-baseline mb-6">
	<PageTitle>Blog</PageTitle>

	<a class="text-red-600 opacity-75 hover:opacity-100" href="/blog">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6 inline -mt-1 mr-3"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
			/>
		</svg>
		Back to articles
	</a>
</div>

<section>
	<h2 class="text-3xl font-bold mb-12">{data.title}</h2>
	<div class="article-wrapper">
		{@html data.body_html}
	</div>

	<a class="text-red-600 opacity-75 hover:opacity-100" href="/blog"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6 inline -mt-1 mr-3"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
			/>
		</svg>Back to articles</a
	>
</section>

<style scoped>
	.article-wrapper h1,
	.article-wrapper h2,
	.article-wrapper h3,
	.article-wrapper h4,
	.article-wrapper h5,
	.article-wrapper h6 {
		@apply font-display font-bold mt-6 mb-3 text-red-500;
	}

	.article-wrapper h1 {
		@apply text-3xl;
	}

	.article-wrapper h2 {
		@apply text-2xl;
	}

	.article-wrapper h3 {
		@apply text-xl;
	}

	.article-wrapper h4 {
		@apply text-lg;
	}

	.article-wrapper p {
		@apply mb-8;
	}

	.article-wrapper pre {
		@apply bg-gray-200 text-red-800 p-6 mb-8 text-sm overflow-auto;
	}

	.article-wrapper ul,
	ol {
		@apply list-disc ml-6 mb-6;
	}

	.article-wrapper p a {
		@apply underline;
	}
	.article-wrapper p em {
		@apply mt-2 text-sm;
	}

	section .article-wrapper .highlight .highlight__panel .highlight__panel-action {
		display: none;
	}

	p code,
	li code {
		@apply bg-gray-200 text-red-700 p-1;
	}

	blockquote {
		@apply border-l-2 border-red-500 pl-8;
	}

	code .c1,
	code .c {
		@apply text-gray-700;
	}
</style>
