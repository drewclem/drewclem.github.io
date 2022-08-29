<script>
	import '../app.css';
	import Header from '$lib/header.svelte';
	import 'wicg-inert';

	import { isMobileNavOpen } from './../store.js';

	let isNavOpen;

	const unsubscribe = isMobileNavOpen.subscribe((value) => {
		isNavOpen = value;
	});

	const name = 'Drew Clements | Frontend Engineer';
	const description = 'The portfolio and blog for front-end engineer Drew Clements';
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={description} />
	<meta name="og:title" content={name} />
	<meta name="og:description" content={description} />
	<meta name="og:image" content="https://drewclem.com/images/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@drewclemcr8" />
	<meta name="twitter:title" content={name} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://drewclem.com/images/og-image.png" />
</svelte:head>

<div class={`${isNavOpen ? 'h-screen' : ''} text-blue-900 font-body overflow-x-hidden`}>
	<Header {isNavOpen} />
	<main id="main" class="md:ml-48 px-4 mt-24 lg:mt-20 lg:px-0 pb-32">
		<div class="w-full max-w-3xl mx-auto">
			<slot />
		</div>
	</main>
</div>
