import view from '../views/posts.html?raw';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    return divElement;
};
