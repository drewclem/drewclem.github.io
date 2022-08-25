<script>
  /**
* @type {any[]}
*/
  let articles = []
  async function fetchArticles() {
    const res = await fetch('https://dev.to/api/articles?username=drewclem&state=all', {
      method: 'GET'
    })

    const data = await res.json()

    articles = data
  }

  fetchArticles()
</script>

<div class="relative">
	<div class="w-4 h-4 lg:w-6 lg:h-6 bg-red-500 absolute" />
	<h1 class="text-4xl lg:text-4xl font-display font-bold ml-4 pt-1 lg:ml-6 lg:pt-3 mb-8">Blog</h1>
</div>

<section class="md:w-3/4">
	{#each articles as article}
		<article class="pb-8 mb-8 border-b border-gray-100">
			<p class="text-red-600 text-sm mb-1">{article.readable_publish_date}</p>
			<h2 class="text-lg font-bold font-display mb-4">{article.title}</h2>

			<div class="mb-2 opacity-75 ">{article.description}</div>

			<a href={`blog/${article.slug}`} class="text-red-600 text-sm underline font-display">
				Read More
			</a>
		</article>
	{/each}
</section>
