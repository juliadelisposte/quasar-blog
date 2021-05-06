
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/posts/postsList.vue') },
      { path: 'create-posts', component: () => import('pages/posts/postsForm.vue'), name: 'PostsForm' },
      { path: 'authors-list', component: () => import('pages/authors/authorsList.vue'), name: 'AuthorsList' }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
