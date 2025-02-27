// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	experimental: {
		responsiveImages: true,
	},
	server: { host: true },
	integrations: [
		starlight({
			title: 'Kubernetes 101',
			logo: {
				src: './src/assets/kubernetes-horizontal-all-blue-color.png',
				replacesTitle: true,
			},
			customCss: [
				'./src/styles/custom.css',
			],

			social: {
				facebook: 'https://www.facebook.com/',
				github: 'https://github.com/',
				rss: 'https://rss.com',
				'x.com': 'https://www.x.com/'

			},


			components: {
				SiteTitle: './src/starlightOverrides/SiteTitle.astro',
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
