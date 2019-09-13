$(document).ready(function () {
  var $burgerBtn = $('.burger');
      $mainMenu = $('.nav__list');
  $burgerBtn.click(function () {
    console.log('tttt');
		$(".burger-open").toggleClass('hide');
    $(".burger-close").toggleClass('show');
    $mainMenu.slideToggle(700);
	});

  var $modalBlock = $('.modal');
  var $btn = $('.js-order__button');
  var $cover = $('.overlay');
  var $modalBtn = $('.js-modal__button');
  var $sizeBtn = $('.js-size__button');
  $btn.click(function(e){
    $modalBlock.show();
    $cover.show();
  })

  $modalBtn.click(function(e){
    $modalBlock.hide();
    $cover.hide();
  })

  $sizeBtn.click(function(e){
    e.preventDefault();
    $(this).toggleClass('selected');
  })

  $cover.click(function(e){
    $modalBlock.hide();
    $cover.hide();
  })

  // $(document).mouseup(function (e){ // событие клика по веб-документу
  //   if (!$modalBlock.is(e.target)) { // и не по его дочерним элементам
  //     $modalBlock.hide();
  //     $cover.hide(); // скрываем его
  //   }
  // });

});
