import _ from 'lodash';
import printMe from './print';
import './styles.css';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack', '例zz'], ' ');
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console.';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
};
let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component();// 重新渲染component来更新点击事件
        document.body.appendChild(element);
    })
}