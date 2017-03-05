import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './components/App.vue'
import store from './store'

import * as filters from './filters'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
    primary: 'deep-purple',
    accent: 'cyan',
    warn: 'red',
    background: 'white'
})

// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })

new Vue({
    store,
    ...App
}).$mount('#app')
