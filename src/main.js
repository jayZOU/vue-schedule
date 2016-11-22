import Vue from 'vue';
import Schedule from './Schedule.vue';



Vue.config.debug = true;
Vue.config.silent = false;
Vue.config.async = false;
Vue.config.devtools = true;


new Vue({
    el: '#app',
    components: {
        Schedule: Schedule,
    }
})