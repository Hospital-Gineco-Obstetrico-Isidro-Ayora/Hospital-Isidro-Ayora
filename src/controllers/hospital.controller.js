import view from '../views/hospital.html?raw';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    return divElement;
};
