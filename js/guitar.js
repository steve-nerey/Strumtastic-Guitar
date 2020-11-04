
// preventDefault for the transpose ancors and the downloadButton ancors
$ancors = $('.ancorKeys').add('#downloadButton1').add('#downloadButton2');
$($ancors).click(function(event) {
  event.preventDefault();
});

// Uses smooth scrolling when clicking on navigation
 $(function() {
  var topoffset = 70;
  
   $('.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') ===
    this.pathname.replace(/^\//,'') &&
    location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top-topoffset
      }, 600); // you can control speed here.
      return false;
    }
    }
  });
  
});

// checks to see if there is text in the name of the form and the email then welcomes new member.
$('#formButton').on('click', function(){
  var text1 = $('#ownerName').val();
  var text2 = $('#ownerEmail').val();
  if (text1.length < 3) {
    $('.modal-form-body').text('You must enter your name.').removeClass('styleModal2');
    $('.modal-form-content').removeClass('styleModal1').addClass('styleModal3');
  } else
  if (text2.length < 7){
    $('.modal-form-body').text('You must enter your email.').removeClass('styleModal2');
    $('.modal-form-content').removeClass('styleModal1').addClass('styleModal3');
  }
  else {
    $('.modal-form-body').text( text1 + ', you\'re a new member').addClass('styleModal2');
    $('.modal-form-content').addClass('styleModal1').removeClass('styleModal3');
  
  }
});

// modal in download videos section
$('#downloadButton1').on('click', function(){
    $('.modal-upload1-body').text('Thank you for downloading video.');
    $('.modal-upload1-content').addClass('styleModal3');
  
});

$('#downloadButton2').on('click', function(){
    $('.modal-upload2-body').text('Thank you for downloading video.');
    $('.modal-upload2-content').addClass('styleModal3');
  
});

// Makes the navbar-brand name enlarge when you mouseover then return to normal size when you mouseout
$('.navbar-brand').on('mouseover', function(){
    $(this).addClass('enlarge');
});

$('.navbar-brand').on('mouseout', function(){
    $(this).removeClass('enlarge');
});
