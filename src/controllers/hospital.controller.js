import view from '../views/hospital.html?raw';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    // Show or hide the button based on the user's scroll position
    $(document).ready(function(){
        $("h1, p").delay("1000").fadeIn();
        // hide #back-top first
        $("#back-top").hide();
        // fade in #back-top
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
          
                }
            });
    
            // scroll body to 0px on click
            $('a#back-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });
    });
     

    return divElement;
};
