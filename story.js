function goToByScroll(id){			$('html,body').animate({
  scrollTop: $("."+id).offset().top +0
  },400);
}
