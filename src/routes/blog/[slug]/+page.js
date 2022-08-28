import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const res = await fetch(`https://dev.to/api/articles/drewclem/${params.slug}`, {
			method: 'GET'
		});
		const data = await res.json();

		return data;
	} catch {
		alert('Oops! Something went wrong');
		throw error(404, 'Not Found');
	}
}
