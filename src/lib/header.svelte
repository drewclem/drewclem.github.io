<script>
	import NavItem from '$lib/nav-item.svelte';
	import { isMobileNavOpen } from './../store.js';
	import { navigating } from '$app/stores';

	$: if ($navigating) toggleNav(false);

	export /**
	 * @type {any}
	 */
	let isNavOpen;

	/**
	 * @param {boolean} data
	 */
	function toggleNav(data) {
		const mainEl = document.querySelector('#main');
		const mobileNav = document.querySelector('#mobileNav');
		const mobileHeaderLink = document.querySelector('#mobileHeaderLink');
		isMobileNavOpen.update((value) => data);

		if (data) {
			mainEl?.setAttribute('inert', 'true');
			mobileHeaderLink?.setAttribute('inert', 'true');
			mobileNav?.removeAttribute('inert');
		} else {
			mobileNav?.setAttribute('inert', 'true');
			mainEl?.removeAttribute('inert');
			mobileHeaderLink?.removeAttribute('inert');
		}
	}

	const handleKeydown = (/** @type {{ key: string; }} */ e) => {
		if (e.key === 'Escape') {
			toggleNav(false);
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<header
	class="lg:h-screen w-full md:w-[200px] md:bg-gray-200 absolute top-0 md:fixed flex md:items-center flex-col md:pt-24 overflow-x-hidden"
>
	<div class="hidden lg:flex p-4 flex-col justify-center">
		<a
			href="/"
			class="font-display font-black text-red-500 text-4xl md:text-6xl mx-auto mb-0 md:mb-8 tracking-tighter"
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

	<div class={`${isNavOpen ? 'h-screen' : ''} relative lg:hidden p-4`}>
		<div class="flex justify-between ">
			<a
				id="mobileHeaderLink"
				href="/"
				class="font-display font-black text-red-500 text-4xl md:text-6xl mb-0 md:mb-8 tracking-tighter"
				>dC</a
			>

			<button on:click={() => toggleNav(true)} type="button">
				<span class="sr-only">Open mobile menu</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-8 h-8"
				>
					<path
						fill-rule="evenodd"
						d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>

		<nav
			id="mobileNav"
			class={`${
				isNavOpen ? 'translate-x-0' : 'translate-x-full'
			} transition duration-150 ease-in-out absolute right-0 top-0 w-full h-screen z-50 flex`}
			inert={true}
		>
			<div on:click={() => toggleNav(false)}>
				<button
					class="bg-white drop-shadow-md mr-4 h-12 w-12 ml-4 mt-4 flex justify-center items-center rounded-full"
					on:click={() => toggleNav(false)}
					type="button"
				>
					<span class="sr-only">Close mobile menu</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m-15 0l15 15" />
					</svg>
				</button>
			</div>

			<ul class="w-full h-screen bg-white uppercase font-display p-4">
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
		<div
			class={`${
				isNavOpen ? 'opacity-50 inset-0' : 'opacity-0'
			} bg-black absolute h-screen pointer-events-none transition duration-150 ease-in-out z-10`}
		/>
	</div>
</header>
