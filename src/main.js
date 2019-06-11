import Vue from 'vue';
import router from './router';
import 'bootstrapCSS';
import 'jquery';
import 'bootstrapJS';
import './assets/reset/reset';
import App from './app';
import HeaderNavbar from './components/headerNavbar/headerNavbar';
import Footer from './components/footer/footer';
Vue.component('HeaderNavbar',HeaderNavbar);
Vue.component('Footer',Footer);
new Vue({
    el:'#app',
    components:{
        App
    },
    router,
    template:'<App />'
})
