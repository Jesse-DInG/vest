import Vue from 'vue';
import App from './components/App.vue';
import store from './store';
import './common.less';

// class AppClass extends Vue implements 
new Vue({
    store,
    el: '#app',
    render: h => h(App),
});
