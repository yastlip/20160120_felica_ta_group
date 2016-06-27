// JavaScript Document

$(function(){
  $("dl dt").click(function(){
    if($('+dd',this).css( 'display' ) === 'block' ){
      $("+dd",this).slideUp( 700 );
    }else{
      $("+dd",this).slideDown( 700 );
    }
  });
});

$(function(){
	var topBtn = $('#to-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
$('#to-top').on('click touchstart', function () {
	    $('html,body').animate({ scrollTop: 0 }, 'swing');
	    return false;
});
});