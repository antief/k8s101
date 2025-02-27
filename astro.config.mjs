// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	server: { host: true},
	integrations: [
		starlight({
			title: 'Kubernetes 101',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [

				{
					label: 'Johdanto',
					autogenerate: { directory: 'johdanto' },
				},

				{
					label: 'Arkkitehtuuri',
					autogenerate: { directory: 'arkkitehtuuri' },
				},

				{
					label: 'Komponentit',
					collapsed: false,
					autogenerate: { directory: 'komponentit' },
					
				},

				{
					label: 'Objektit',
					autogenerate: { directory: 'objektit' },
				},

				{
					label: 'Koodi esimerkit',
					autogenerate: { directory: 'koodi-esimerkit' },
				},

				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],

				},
				{
					label: 'Lähteet',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
