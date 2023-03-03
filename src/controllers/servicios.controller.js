import view from '../views/servicios.html?raw';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    return divElement;
};
