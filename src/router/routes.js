
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), name: 'home' },
      { path: 'about', component: () => import('pages/AboutPage.vue'), name: 'about' },
      { path: 'service', component: () => import('pages/ServicePage.vue'), name: 'service' },
      { path: 'contact', component: () => import('pages/ContactPage.vue'), name: 'contact' },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
