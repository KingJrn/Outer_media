import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../pages/Customer/HomeView.vue';
import AdminLogin from '../pages/admin/AdminLogin.vue';
import Organizations from '../pages/admin/Organizations.vue';
import AddOrganization from '../pages/admin/AddOrganization.vue';
import Images from '../pages/admin/Images.vue';
import AddImage from '../pages/admin/AddImages.vue';
import Libraries from '../pages/admin/Libraries.vue';
import AddLibrary from '../pages/admin/AddLibrary.vue';
import Preset from '../pages/admin/Preset.vue';
import AddPreset from '../pages/admin/AddPreset.vue';
import SiteSettings from '../pages/admin/SiteSettings.vue';
import Dashboard from '../pages/Customer/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/organizations',
      name: 'Organizations',
      component: Organizations
    },
    {
      path: '/addorganization',
      name: 'AddOrganization',
      component: AddOrganization
    },
    {
      path: '/images',
      name: 'Images',
      component: Images
    },
    {
      path: '/addimage',
      name: 'AddImage',
      component: AddImage
    },
    {
      path: '/libraries',
      name: 'Libraries',
      component: Libraries
    },
    {
      path: '/addlibrary',
      name: 'AddLibrary',
      component: AddLibrary
    },
    {
      path: '/preset',
      name: 'Preset',
      component: Preset
    },
    {
      path: '/addpreset',
      name: 'AddPreset',
      component: AddPreset
    },
    {
      path: '/site-settings',
      name: 'SiteSettings',
      component: SiteSettings
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../pages/AboutView.vue')
    // }
    {
      path: '/liveview',
      name: 'live-view',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Customer/LiveView.vue')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('../pages/Customer/Users.vue')
    },
    {
      path: '/mydisplays',
      name: 'MyDisplays',
      component: () => import('../pages/Customer/MyDisplays.vue')
    },
    {
      path: '/packages',
      name: 'Packages',
      component: () => import('../pages/Customer/Packages.vue')
    }
  ]
})

export default router
