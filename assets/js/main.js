$(document).ready(function(){

    $(".Back-Button").click(function(){
        window.history.back();
    });
    $('[data-pin]').pin({
        displayMessage: $('.message'),
        allowSequential: false,
        allowRepeat: false,
        count: 6
    });
});