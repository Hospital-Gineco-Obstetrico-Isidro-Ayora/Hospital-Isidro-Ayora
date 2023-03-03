import view from '../views/home.html?raw';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    return divElement;
};
