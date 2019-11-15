// JS - ./js/index.js
import './js/'

// SCSS
import './assets/sass/main.sass'

// CSS (example)
import './assets/css/main.css'

// Bootstrap (example)
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// Vue.js
window.Vue = require('vue')
import store from './store'
// import example from '~/components/Example.vue'

// Vue components (for use in html)
// Vue.component('example-component', require('~/components/Example.vue').default)

// Vue init
const app = new Vue({
  data () {
    return {
      showExampleComponent: false,
    }
  },
  store,
  el: '#app',
  // components: {
  //   example
  // }
})
