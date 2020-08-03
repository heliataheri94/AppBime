var ShowQuestionNumber = 0;
var count=0
$(document).ready(function () {
    count = $('.ExamSlider').children('#question').length;

    $('.ExamSlider').children('#question').eq(ShowQuestionNumber).css({'display': 'block','right': '0%'});
    console.log(count);
});
$("#exam_previous").click(function () {
    if (ShowQuestionNumber > 0) {
        $('.ExamSlider').children('#question').eq(ShowQuestionNumber).css('display', 'block').animate({right: '100%'});

        ShowQuestionNumber--;

        $('.ExamSlider').children('#question').css({'display': 'none','right': '-100%'});
        $('.ExamSlider').children('#question').eq(ShowQuestionNumber).css('display', 'block');
        $('.ExamSlider').children('#question').eq(ShowQuestionNumber).animate({right: '0%'});
        // $('.ExamSlider').children('#question').eq(ShowQuestionNumber).fadeIn("slow");
        // $('.ExamSlider').children('#question').eq(ShowQuestionNumber).fadeIn(3000);
    }
});
$("#exam_next").click(function () {
    if (ShowQuestionNumber < count -1) {
        $('.ExamSlider').children('#question').eq(ShowQuestionNumber).css('display', 'block').animate({right: '-100%'});

        ShowQuestionNumber++;
        $('.ExamSlider').children('#question').css({'display': 'none','right': '100%'});
        $('.ExamSlider').children('#question').eq(ShowQuestionNumber).css('display', 'block');
        $('.ExamSlider').children('#question').eq(ShowQuestionNumber).animate({right: '0%'});
    }
});