<script>
	import PageTitle from '$lib/page-title.svelte';

	const projects = [
		{
			id: 0,
			title: 'Protege.dev',
			description:
				'Protege.dev is a job board tailored for junior developers looking for remote opportunities. This project has end-to-end testing with Cypress.io, form validation React Hook Forms, Form schema with Yup, and wired up to a Firebase database for the back-end.',
			url: 'https://protege.dev',
			tech: ['React', 'Firebase', 'Tailwind', 'Cypress.io'],
			github: 'https://github.com/drewclem/protege'
		},
		{
			id: 1,
			title: 'ColtXP',
			description:
				"Colt is a place where beginners looking to gain real-world experience can pair with seasoned developers to work through github issues on live projects. Everyone starts at the bottom, but not everyone has someone to help them along the way. ColtXP's aim is to change that by giving juniors a place to find senior dev's willing to pay it forward.",
			url: 'https://coltxp.netlify.app/',
			tech: ['Vue', 'Firebase', 'Tailwind'],
			github: 'https://github.com/drewclem/colt'
		},
		{
			id: 2,
			title: 'FnF App',
			description:
				'The FNF app is a full-stack project with a Node API hosted on heroku and a Gatsby front-end hosted on Netlify. The goal of this project was to build a read-only API and display the data on a separately hosted front-end.',
			url: 'https://sad-heisenberg-dd2c9d.netlify.app/',
			tech: ['Gatsby', 'Node', 'Tailwind'],
			github: 'https://github.com/drewclem/colt'
		}
	];
</script>

<PageTitle>Projects</PageTitle>

<section>
	<ul>
		{#each projects as project}
			<li v-for="project in projects" class="mb-20">
				<h2 class="mb-4 text-xl font-bold text-red-500 lg:text-2xl font-display">
					{project.title}
				</h2>

				<p class="mb-4 text-sm opacity-75 lg:text-base">
					{project.description}
				</p>

				<ul class="mb-6 ml-5 text-sm list-disc opacity-75 lg:text-base">
					{#each project.tech as item}
						<li v-for="item in project.tech">{item}</li>
					{/each}
				</ul>

				<div class="flex items-center">
					<button class="mr-6 btn">
						<a href={project.url} target="_blank" rel="noopener noreferrer"> View </a>
					</button>
					<a href={project.github} target="_blank" rel="noopener noreferrer">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fab"
							data-icon="github"
							class="svg-inline--fa fa-github fa-w-16"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 496 512"
							><path
								fill="currentColor"
								d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
							/></svg
						>
					</a>
				</div>
			</li>
		{/each}
	</ul>
</section>

<style scoped>
	a svg {
		width: 24px;
		height: 24px;
		@apply opacity-75 transition ease-in-out duration-150;
	}

	a:hover svg {
		@apply opacity-100;
	}
</style>
