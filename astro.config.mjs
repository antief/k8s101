// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	server: { host: true},
	integrations: [
		starlight({
			title: 'Kubernetes 101',
			customCss: [
				'./src/styles/custom.css',
			],

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
					autogenerate: { directory: 'komponentit' },
					collapsed: true,
				},

				
				{
					label: 'Objektit',
					autogenerate: { directory: 'objektit' },
					collapsed: true,
				},

				{
					label: 'Koodi esimerkit',
					autogenerate: { directory: 'koodi-esimerkit' },
					collapsed: true,
				},

				{
					label: 'Lähteet',
					autogenerate: { directory: 'reference' },
					collapsed: true,
				},
			],
		}),
	],
});
