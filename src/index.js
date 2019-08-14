
import * as math from './math.js'

async function getComponent() {


    // const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');


    console.log(math);
    const { cube: test } = await import('./math.js');

    var element = document.createElement('div');

    var btn2 = document.createElement('button');
    btn2.innerHTML = 'loadash';
    btn2.onclick = e => import(/* webpackChunkName: "lodash"  */'lodash').then(module => {
        console.log(_.join(['Hello', ' i am lodash'], ' '));
    });

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!' + test(5);
    btn.onclick = e => import(/* webpackChunkName: "print"  */'./print').then(module => {
        const print = module.default;
        print();
    });
    element.appendChild(btn2);
    element.appendChild(btn);
    return element;

}
console.log("index........");
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

