/*
 * @Author: yueqiang.zhou
 * @Date: 2020-05-14 17:09:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-12 11:54:21
 * @Description: file contentex
 */
module.exports = {
  title: "一个厨子的自我修养",
  description: 'study programs and record life',
  head: [
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }]
  ],
  markdown: {
    lineNumbers: true,
  },
  theme: 'reco',
  themeConfig: {
    // 博客配置
    type: 'blog',
    authorAvatar: '/avatar.jpeg',
    logo: '/avatar.jpeg',
    huawei: true,
    blogConfig: {
      category: {
        icon: 'reco-category',
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认文案 “标签”
      },
    },
    displayAllHeaders: true, // 默认值：false
    sidebar: {
      '/notes/': [{
          title: 'NodeJs', // 必要的
          children: [
            '/notes/nodejs/01/',
            '/notes/nodejs/02/',
            '/notes/nodejs/03/',
          ]
        },
        {
          title: 'Deno',
          children: [
            '/notes/deno/'
          ]
        },
        {
          title: 'Webpack',
          children: [ /* ... */ ]
        },
        {
          title: '常用的设计模式',
          children: [
            '/notes/design/'
          ]
        },
        {
          title: '微前端',
          children: [ /* ... */ ]
        }
      ]
    },
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'KK',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2017',
    nav: [{
        text: 'Home',
        link: '/',
        icon: 'reco-home '
      },
      {
        text: 'Notes',
        link: '/notes/',
        icon: 'reco-suggestion'
      },
      {
        text: 'About',
        link: '/view/about',
        icon: 'reco-account'
      },

    ],
    locales: {
      '/': {
        recoLocales: {
          pagation: {
            prev: '上壹頁',
            next: '下壹頁',
            go: '前往',
            jump: '跳轉至'
          }
        }
      }
    }
  },
  plugins: [
    [
      "ribbon"
    ],
    ['@vuepress-reco/vuepress-plugin-bgm-player', {
      audios: [
        // 网络文件示例
        {
          name: 'City',
          artist: '羽肿',
          url: 'http://m8.music.126.net/20200608001610/ed6d5df4e8112520255ba0449e1ebbdb/ymusic/0120/2740/25a6/cbc668057d6e39d0c78a8138dd16964a.mp3',
          cover: 'http://p2.music.126.net/XQlI-cyn4ip07RGt1Fqqcw==/109951162837149540.jpg'
        },
        {
          name: '用胳膊当枕头',
          artist: '최낙타',
          url: 'https://assets.smallsunnyfox.com/music/3.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        }
      ]
    }],
    ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
      theme: ['haru2']
    }],
    [
      "cursor-effects",
      {
        size: 2, // size of the particle, default: 2
        shape: ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ],
    ["vuepress-plugin-boxx"],
    ['go-top']
  ]


};