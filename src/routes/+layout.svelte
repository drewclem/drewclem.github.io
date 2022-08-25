<script>
  import '../app.css'
  import Header from '$lib/header.svelte'
</script>

<div class="text-blue-900 font-body">
	<Header />

	<main class="md:ml-48 px-4 mt-24 lg:mt-20 lg:px-0 pb-32">
		<div class="w-full max-w-3xl mx-auto">
			<slot />
		</div>
	</main>
</div>
