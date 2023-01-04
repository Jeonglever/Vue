import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 페이지 하나로 router를 이용해 웹서비스를 컨트롤하기 때문에 SPA(싱글 페이지 애플리케이션)
// route는 전체 페이지의 성능을 좌우하기 때문에 route 설계가 중요하다.
// router 연결하는 방법
// 1. 위에서 import하고 routes할때 삽입
// 2. 화살표함수 이용
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue'
      )
  }
]
// 페이지 사이즈가 가벼워 서버로부터 즉시 받아와도 되거나 접속률이 낮은 페이지일 경우 webpackPrefetch 같은걸 쓰지 않아도 괜찮다.
// ESlint + standard Config의 문법 규칙 준수(따옴표, 스페이스 등) => 협업에 있어서 강점적

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
