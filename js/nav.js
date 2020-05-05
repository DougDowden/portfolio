//Used to close the navigation menu on click

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('nav>.navbar-brand').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});