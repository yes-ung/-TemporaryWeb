function initStageSlider() {
  if (!$('.StageButtonSlider').hasClass('slick-initialized')) {
    $('.StageButtonSlider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      infinite: false
    });
  } else {
    $('.StageButtonSlider').slick('setPosition');
  }
}

// 예: Stage 화면을 보여줄 때
$('#GameStage').fadeIn(300, function () {
  initStageSlider();
});

$(document).ready(function () {
  $('.StageButtonSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    infinite: false
  });

  // 슬라이더 보일 때 다시 레이아웃 정렬
  $('#GameStage').on('shown', function () {
    $('.StageButtonSlider').slick('setPosition');
  });
});
