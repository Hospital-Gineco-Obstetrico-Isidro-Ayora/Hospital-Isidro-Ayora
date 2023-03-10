import view from '../views/servicios.html?raw';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    let preveiwContainer = divElement.querySelector('.servicio-preview');
    let previewBox = preveiwContainer.querySelectorAll('.preview');

    divElement.querySelectorAll('.servicio-container .servicio').forEach(servicio => {
        servicio.onclick = () => {
            preveiwContainer.style.display = 'flex';
            let name = servicio.getAttribute('data-name');
            previewBox.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active');
                }
            });
        };
    });

    previewBox.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            preveiwContainer.style.display = 'none';
        };
    });

    return divElement;

    
};
