import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				black: {
					css: {
						'--tw-prose-headings': theme('colors.black'),
						'--tw-prose-lead': theme('colors.black'),
						'--tw-prose-links': theme('colors.black'),
						'--tw-prose-bold': theme('colors.black'),
						'--tw-prose-counters': theme('colors.black'),
						'--tw-prose-bullets': theme('colors.black'),
						'--tw-prose-hr': theme('colors.black'),
						'--tw-prose-quotes': theme('colors.black'),
						'--tw-prose-quote-borders': theme('colors.black'),
						'--tw-prose-captions': theme('colors.black'),
						'--tw-prose-code': theme('colors.black'),
						'--tw-prose-pre-code': theme('colors.black'),
						'--tw-prose-pre-bg': theme('colors.transparent'),
						'--tw-prose-th-borders': theme('colors.black'),
						'--tw-prose-td-borders': theme('colors.black'),
						'--tw-prose-invert-body': theme('colors.white'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.white'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.white'),
						'--tw-prose-invert-bullets': theme('colors.white'),
						'--tw-prose-invert-hr': theme('colors.white'),
						'--tw-prose-invert-quotes': theme('colors.white'),
						'--tw-prose-invert-quote-borders': theme('colors.white'),
						'--tw-prose-invert-captions': theme('colors.white'),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.white'),
						'--tw-prose-invert-pre-bg': theme('colors.transparent'),
						'--tw-prose-invert-th-borders': theme('colors.white'),
						'--tw-prose-invert-td-borders': theme('colors.white')
					}
				}
			})
		}
	},
	plugins: [typography]
};
