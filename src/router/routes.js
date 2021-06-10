
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/posts/postsList.vue'), name: 'PostsList' },
      { path: 'posts/create-posts', component: () => import('pages/posts/PostsForm.vue'), name: 'PostsForm' },
      { path: 'posts/:id/posts-edit', component: () => import('src/pages/posts/PostsForm.vue'), name: 'PostsFormEdit' },
      { path: 'authors-list', component: () => import('pages/authors/authorsList'), name: 'AuthorsList' },
      { path: 'authors-form', component: () => import('pages/authors/authorsForm'), name: 'AuthorsForm' },
      { path: 'posts/:id', component: () => import('pages/posts/postsUnique.vue'), name: 'Posts' }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
