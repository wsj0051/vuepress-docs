module.exports = {
	title: 'VuePress-docs',
	locales: {
		'/': {
		  lang: '简体中文',
		  title: 'VuePress文档',
		  description: '中文描述'
		},
		 '/en/': {
		  lang: 'English',
		  title: 'Docs',
		  description: 'English description'
		}
	},
	themeConfig: {
		repo: 'wsj0051/vuepress-docs',
		docsRepo: 'wsj0051/vuepress-docs',
		docsDir: 'docs',
		editLinks: true,
		docsBranch: 'main',
		locales: {
		  '/': {
			sidebar: {
			  '/zh/guide/': getGuideSidebar('VuePress文档'),
			}
		  },
		 
		  '/en/': {
			sidebar: {
			  '/en/guide/': getGuideSidebar('VuePress'),
			}
		  }
		}
			
	},
	
    base:'/vuepress-docs/'
  
}

function getGuideSidebar (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}
