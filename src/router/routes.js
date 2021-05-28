
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/posts/postsList.vue'), name: 'RoutePostsList' },
      { path: 'create-posts', component: () => import('pages/posts/postsCreate.vue'), name: 'RoutePostsCreate' },
      { path: 'authors-list', component: () => import('pages/authors/authorsList'), name: 'RouteAuthorsList' },
      { path: 'create-authors', component: () => import('pages/authors/authorsCreate'), name: 'RouteAuthorsCreate' }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
