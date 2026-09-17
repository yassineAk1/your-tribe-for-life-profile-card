import { readItems } from '@directus/sdk';
import { directus } from '$lib/directus';

export async function load() {
	const persons = await directus.request(
		readItems('person', {
			fields: ['name', 'bio'],
			filter: {
				squads: { squad_id: { cohort: { _eq: 2627 } } },
				id: { _eq: 278 }
			}
		})
	);

	return { person: persons[0] };
}
