<script>
	export let href;
</script>

<a
	sveltekit:prefetch
	class="block transition duration-150 ease-in-out opacity-75 hover:opacity-100 mb-6 text-lg tracking-wider md:text-2xl"
	{href}
>
	<slot />
</a>
