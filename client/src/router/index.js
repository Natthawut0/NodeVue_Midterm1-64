import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import SpecIndex from '@/components/Index'
import SpecCreate from '@/components/CreateSpec'
import SpecEdit from '@/components/EditSpec'
import SpecShow from '@/components/ShowSpec'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/specs',
      name: 'specs',
      component: SpecIndex
    },
    {
      path: '/spec/Create',
      name: 'Spec-Create',
      component: SpecCreate
    },
    {
      path: '/spec/edit/:specId',
      name: 'Spec-Edit',
      component: SpecEdit
    },
    {
      path: '/spec/:specId',
      name: 'spec',
      component: SpecShow
    }
  ]
})
