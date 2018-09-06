import lodash from 'lodash';
import './index.css';
import icon from './1310669.jpeg';

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function hello() {
	console.log(lodash.join(['Hello', 'webpack'], ' '));
}

hello();

/*
function component() {
	console.log("comp AA");
	var element = document.createElement('div');

	// Lodash, now imported by this script
	element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	var myIcon = new Image();
	myIcon.src = icon;
	element.appendChild(myIcon);
	return element;
}

document.body.appendChild(component());
*/

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})


const app = new Vue({
  router
}).$mount('#app')
