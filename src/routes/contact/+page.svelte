<script>
	import { goto } from '$app/navigation';
	import PageTitle from '$lib/page-title.svelte';

	let form = {
		name: '',
		email: '',
		message: ''
	};

	function encode(data) {
		return Object.keys(data)
			.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
			.join('&');
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log('here');
		fetch('/', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'contact',
				...form
			})
		})
			.then((res, err) => {
				if (res.status === 200) {
					goto('/thanks');
					console.log('success');
				} else {
					console.log(err);
				}
			})
			.catch((e) => console.error(e));
	}
</script>

<PageTitle>Contact</PageTitle>

<form
	method="post"
	on:submit={handleSubmit}
	class="flex flex-col"
	name="contact"
	data-netlify="true"
	data-netlify-honeypot="bot-field"
>
	<input type="hidden" name="form-name" value="contact" />

	<div class="grid md:grid-cols-2 gap-6 mb-8">
		<div class="flex flex-col">
			<label class="text-lg font-bold mb-3" for="name">Name</label>
			<input
				id="name"
				type="text"
				class="border border-gray-300 p-2"
				bind:value={form.name}
				required
			/>
		</div>

		<div class="flex flex-col">
			<label class="text-lg font-bold mb-3" for="email">Email</label>
			<input
				id="email"
				type="email"
				class="border border-gray-300 p-2"
				bind:value={form.email}
				required
			/>
		</div>
	</div>

	<div class="flex flex-col mb-12">
		<label class="text-lg font-bold mb-3" for="comment">Comment</label>
		<textarea
			id="comment"
			class="border border-gray-300 p-2"
			rows="8"
			bind:value={form.message}
			required
		/>
	</div>

	<p class="hidden">
		<label>
			Don’t fill this out if you're human:
			<input name="bot-field" />
		</label>
	</p>

	<button class="btn w-32">Send</button>
</form>
