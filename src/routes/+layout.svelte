<script>
	import '../app.css';
	import Header from '$lib/header.svelte';
	import 'wicg-inert';

	import { isMobileNavOpen } from './../store.js';
	import { navigating } from '$app/stores';

	$: if ($navigating) closeMobileMenu();

	/**
	 * @type {boolean}
	 */
	let isNavOpen;

	const unsubscribe = isMobileNavOpen.subscribe((value) => {
		isNavOpen = value;
	});

	const handleKeydown = (/** @type {{ key: string; }} */ e) => {
		if (e.key === 'Escape' && isNavOpen) {
			isMobileNavOpen.update((value) => false);
		}
	};

	function closeMobileMenu() {
		const mainEl = document.querySelector('#main');

		mainEl?.removeAttribute('inert');
		isMobileNavOpen.update((value) => false);
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class={`${isNavOpen ? 'h-screen' : ''} text-blue-900 font-body overflow-x-hidden`}>
	<Header {isNavOpen} />
	<main id="main" class="md:ml-48 px-4 mt-24 lg:mt-20 lg:px-0 pb-32">
		<div class="w-full max-w-3xl mx-auto">
			<slot />
		</div>
	</main>
</div>
