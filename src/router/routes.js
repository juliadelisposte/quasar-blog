
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/posts/PostsList'), name: 'PostsList' },
      { path: 'posts/new', component: () => import('pages/posts/PostsForm'), name: 'PostsCreate' },
      { path: 'authors/new', component: () => import('pages/authors/AuthorsForm'), name: 'AuthorsCreate' },
      { path: 'authors/:id/edit', component: () => import('pages/authors/AuthorsForm'), name: 'AuthorsEdit' },
      { path: 'authors', component: () => import('pages/authors/AuthorsList'), name: 'AuthorsList' }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
