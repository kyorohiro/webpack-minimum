import lodash from 'lodash';
import './index.css';
import icon from './1310669.jpeg';

function hello() {
	console.log(lodash.join(['Hello', 'webpack'], ' '));
}

hello();


function component() {
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