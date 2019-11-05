export default [
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/movie',
    component: () => import('views/Movie/index'),
    children: [
      {
        path: '',
        redirect: 'nowplaying'
      },
      {
        path: 'city',
        component: () => import('components/City/City')
      },
      {
        path: 'nowplaying',
        component: () => import('components/NowPlaying/NowPlaying')
      },
      {
        path: 'commingsoon',
        component: () => import('components/CommingSoon/CommingSoon')
      },
      {
        path: 'search',
        component: () => import('components/Search/Search')
      }
    ]
  },
  {
    path: '/cinema',
    // 懒加载这里不要加花括号 不然最好自己加一个return
    component: () => import('views/Cinema/index')
  },
  {
    path: '/mine',
    component: () => import('views/Mine/index')
  },
  {
    path: '/*',
    redirect: '/movie'
  }
]