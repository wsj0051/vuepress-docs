module.exports = {
	title: 'VuePress-docs',
	locales: {
		'/': {
		  lang: 'zh-CN',
		  title: 'VuePress文档',
		  description: 'Vuepress 中文文档'
		},
		 '/en/': {
		  lang: 'en-US',
		  title: 'Vuepress Docs',
		  description: 'Vuepress English docs'
		}
	},
	base:'/vuepress-docs/',
	head: [
	    ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/wsj0051/files@main/img/favicon.ico' }]
	],
	themeConfig: {
		repo: 'wsj0051/vuepress-docs',
		docsRepo: 'vuepress-docs',
		docsDir: 'docs',
		editLinks: true,
		docsBranch: 'main',
		sidebarDepth: 2,
		locales: {
		  '/': {
				selectText: '选择语言',
				label: '简体中文',
				lastUpdated: '上次更新',
				sidebar: {
				  '/guide/': [
					'',
					'getting_started',
					'feature',
				  ]
				},
				nav: [
				  { text: '主页', link: '/' },
				  { text: '指南', link: '/guide/' },
				  { text: 'github', link: 'https://github.com/wsj0051' },
				],
				editLinkText: '在 GitHub 上编辑此页'
		  },
		  '/en/': {
				selectText: 'Languages',
				label: 'English',
				lastUpdated: 'Last Updated',
				sidebar: {
				  '/en/guide/': [
					'',
					'getting_started',
					'feature',
				  ]
				},
				nav: [
				  { text: 'Home', link: '/en/' },
				  { text: 'Guide', link: '/en/guide/' },
				  { text: 'github', link: 'https://github.com/wsj0051' },
				],
				editLinkText: 'Edit this page on GitHub'
	
			}
		}
	}
	  
}