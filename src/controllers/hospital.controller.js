import view from '../views/hospital.html?raw';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    
    
    /*Para desplegar infromación de botones */
    var btn1 = divElement.getElementById("btn1");
    var btn2 = divElement.getElementById("btn2");
    var btn3 = divElement.getElementById("btn3");
    var info = divElement.getElementById("info");

    btn1.addEventListener("click", function() {
    info.innerHTML = "Información del botón 1";
    info.style.display = "block";
    });

    btn2.addEventListener("click", function() {
    info.innerHTML = "Información del botón 2";
    info.style.display = "block";
    });

    btn3.addEventListener("click", function() {
    info.innerHTML = "Información del botón 3";
    info.style.display = "block";
    });

    divElement.addEventListener("resize", function() {
    if (divElement.innerWidth < 768) {
        btn1.style.width = "100%";
        btn2.style.width = "100%";
        btn3.style.width = "100%";
    } else {
        btn1.style.width = "auto";
        btn2.style.width = "auto";
        btn3.style.width = "auto";
    }
    });


    return divElement;
};
