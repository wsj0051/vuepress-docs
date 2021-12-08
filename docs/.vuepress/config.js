module.exports = {
	title: 'VuePress-docs',
	locales: {
		'/': {
		  lang: 'zh-CN',
		  title: '个人笔记',
		  description: '个人学习记录'
		},
		 '/en/': {
		  lang: 'en-US',
		  title: 'Docs',
		  description: 'English docs'
		}
	},
	base:'/vuepress-docs/',
	head: [
	    ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/wsj0051/files@main/img/favicon.ico' }]
	],
	themeConfig: {
		repo: 'wsj0051/vuepress-docs',
		docsRepo: 'https://github.com/wsj0051/vuepress-docs',
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
				  '/notes/': [
					'',
					'adb',
					'git'
				  ]
				},
				nav: [
				  { text: '主页', link: '/' },
				  { text: '笔记', link: '/notes/' }
				],
				editLinkText: '在 GitHub 上编辑此页'
		  },
		  '/en/': {
				selectText: 'Languages',
				label: 'English',
				lastUpdated: 'Last Updated',
				sidebar: {
				  '/en/notes/': [
					'',
					'adb',
					'git'
				  ]
				},
				nav: [
				  { text: 'Home', link: '/en/' },
				  { text: 'notes', link: '/en/notes/' }
				],
				editLinkText: 'Edit this page on GitHub'
	
			}
		}
	}
	  
}
