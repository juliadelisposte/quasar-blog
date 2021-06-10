
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'authors/new', component: () => import('pages/authors/AuthorsForm'), name: 'AuthorsCreate' },
      { path: 'authors', component: () => import('pages/authors/AuthorsList'), name: 'AuthorsList' }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
