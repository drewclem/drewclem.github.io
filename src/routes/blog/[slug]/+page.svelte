<script>
   /**
  * @type {any}
  */
  export let data
</script>

<div class="flex justify-between items-baseline">
	<div class="relative">
		<div class="w-4 h-4 lg:w-6 lg:h-6 bg-red-500 absolute" />
		<h1 class="text-4xl lg:text-4xl font-display font-bold ml-4 pt-1 lg:ml-6 lg:pt-3 mb-8">Blog</h1>
	</div>

	<a class="text-red-600 opacity-75 hover:opacity-100" href="/blog">Back to articles</a>
</div>

<section>
	<h2>{data.title}</h2>
	<div class="article-wrapper">
		{@html data.body_html}
	</div>

	<a class="text-red-600 opacity-75 hover:opacity-100" href="/blog">Back to articles</a>
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
