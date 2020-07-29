var sec=60;//ثانیه
var min=60;//دقیقه
var minute=0;
var value=0;
//شمارش معکوس
function timer(){
     BuildProgress();
    
  sec--;
  if(sec==0){
    min--;
    if(min==0 && sec==0){
        clearInterval(r);
    }else{
        sec=60;
    }
   BuildProgress();
 
  }

  
  setTimerAmount();
 
}
//------------------------------
//تدیل یک رقمی به دو رقمی
function ConvertToN2(number){
  if(number<10){
 	 return "0" + number;
  }else{
  return number;
  }
}
//-----------------------------
//قرار دادن مقدادیر در صفحه
function setTimerAmount(){
$("#sec").text(ConvertToN2(sec));
$("#min").text(ConvertToN2(min));
}
//--------------------------------------
var r=setInterval(timer, 1000);

$(function(){
    $(".progress").each(function() {
      min = $(this).attr('startMinute-value');
    });
      minute=min
       value=(min*100)/minute;
});
//متد ساختن پروگرس بار دایره ای
function BuildProgress() {
       value=(min*100)/minute;

  $(".progress").each(function() {

    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value >= 0) {
      if (value < 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

}
//----------------------------------------------------