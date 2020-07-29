var ShowQuestionNumber = 0;
var count=0
$(document).ready(function () {
    count = $('.ExamSlider').children('#question').length;

    $('.ExamSlider').children('#question').eq(ShowQuestionNumber).css('display', 'block');
    console.log(count);
});
$("#exam_previous").click(function () {
    if (ShowQuestionNumber > 0) {
        ShowQuestionNumber--;
        $('.ExamSlider').children('#question').css('display', 'none');
        $('.ExamSlider').children('#question').eq(ShowQuestionNumber).fadeIn();
        $('.ExamSlider').children('#question').eq(ShowQuestionNumber).fadeIn("slow");
        $('.ExamSlider').children('#question').eq(ShowQuestionNumber).fadeIn(3000);
    }
});
$("#exam_next").click(function () {
    if (ShowQuestionNumber < count -1) {
        ShowQuestionNumber++;
        $('.ExamSlider').children('#question').css('display', 'none');
        $('.ExamSlider').children('#question').eq(ShowQuestionNumber).fadeIn();
        $('.ExamSlider').children('#question').eq(ShowQuestionNumber).fadeIn("slow");
        $('.ExamSlider').children('#question').eq(ShowQuestionNumber).fadeIn(3000);
    }
});