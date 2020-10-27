export { default as AppHeader } from '../../components/AppHeader.vue'
export { default as HumMenu } from '../../components/HumMenu.vue'
export { default as Search } from '../../components/Search.vue'

export const LazyAppHeader = import('../../components/AppHeader.vue' /* webpackChunkName: "components/AppHeader" */).then(c => c.default || c)
export const LazyHumMenu = import('../../components/HumMenu.vue' /* webpackChunkName: "components/HumMenu" */).then(c => c.default || c)
export const LazySearch = import('../../components/Search.vue' /* webpackChunkName: "components/Search" */).then(c => c.default || c)
