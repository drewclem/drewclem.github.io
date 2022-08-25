<script>
  import NavItem from '$lib/nav-item.svelte'
</script>

<header
	class="w-full md:w-[200px] md:bg-gray-200 absolute h-full top-0 md:fixed flex md:items-center flex-col md:pt-24"
>
	<div class="p-4 flex flex-col justify-center">
		<a
			href="/"
			class="font-display font-black text-red-500 text-4xl md:text-6xl mx-auto mb-0 md:mb-8"
		>
			dC
		</a>

		<nav>
			<ul class="text-center uppercase font-display">
				<li>
					<NavItem href="/projects">Projects</NavItem>
				</li>
				<li>
					<NavItem href="/blog">Blog</NavItem>
				</li>
				<li>
					<NavItem href="/contact">Contact</NavItem>
				</li>
			</ul>
		</nav>
	</div>
</header>
