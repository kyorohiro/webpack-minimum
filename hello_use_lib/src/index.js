import lodash from 'lodash';
import './index.css';

function hello() {
	console.log(lodash.join(['Hello', 'webpack'], ' '));
}

hello();


function component() {
	var element = document.createElement('div');

	// Lodash, now imported by this script
	element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	return element;
}

document.body.appendChild(component());