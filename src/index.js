
import printMe from './print.js';
import { cube } from './math.js';
async function getComponent() {


    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');


    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

}

getComponent().then(component => {
    document.body.appendChild(component);
})

/*
function component() {
    var element = document.createElement('div');

    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!' + cube(5);
    btn.onclick = printMe;

    element.appendChild(btn);


    return element;
}

document.body.appendChild(component());
*/

