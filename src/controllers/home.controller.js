import view from "../views/home.html?raw";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  $(document).ready(function () {
    // Cambiar la imagen y los indicadores cada 2 segundos
    setInterval(function () {
      var $activeItem = $(".carousel-item.active");
      var $nextItem = $activeItem.next(".carousel-item").length
        ? $activeItem.next(".carousel-item")
        : $(".carousel-item").first();

      var $activeIndicator = $(".carousel-indicators li.active");
      var $nextIndicator = $activeIndicator.next("li").length
        ? $activeIndicator.next("li")
        : $(".carousel-indicators li").first();

      $activeItem.removeClass("active");
      $nextItem.addClass("active");

      $activeIndicator.removeClass("active");
      $nextIndicator.addClass("active");
    }, 4000);
  });

  return divElement;
};
