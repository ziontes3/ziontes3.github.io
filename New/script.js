
var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};
$('form').submit(function() {
      var text = $('#todo').val();
    	var html = template(text);
    $(html).appendTo('.list');
    $('#todo').val("");
    
    
    return false;  
  });
   $('.list').on('click', '.glyphicon-star',function(event){
    $(event.target).toggleClass("active");
    
  });
  $('.list').on('click', '.glyphicon-remove',function(event){
    $(this).parent().remove();
    
  });

	$('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
    
  });
  

$(document).ready(function(){
  $('.cart').hover(function(){
    $('.cart ').toggleClass('dropdown-menu');
     
  });
  $('.account').click(function(){
  	$('#account').toggleClass('active').toggle('.account');
  	
  });
  $('.help').click(function(){
    $('.help .dropdown-menu').show();
    $('#help').css('background-color', 'red');
    $('#account').css('background-color', 'brown');
  	$('#cart').css('background-color', 'brown');
	$('#sign-up').css('background-color', 'brown');
    
  	$('.cart .dropdown-menu').hide();
  	 $('.account .dropdown-menu').hide();
  	 $('.Sign-Up .dropdown-menu').hide();
  });
  $('.Sign-Up').click(function(){
  	$('.Sign-Up .dropdown-menu').show();
  	$('.help .dropdown-menu').hide();
  	$('.cart .dropdown-menu').hide();
  	 $('.account .dropdown-menu').hide();
  	 
  	 
  	 
  	 
  	 
  	 $('#sign-up').css('background-color', 'red');
  	 $('#account').css('background-color', '#660000');
  	$('#cart').css('background-color', '#660000');
	$('#help').css('background-color', '#660000');

  	 
  });
  $('dropdown-menu').hover(function(){
  	$('li a').css('background-color', 'red');
  });
  
  $('.log').click(function(){
  	$('.collapse').collapse('sign in');
  	});
  	  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');
    


    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    }); 
    var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click',function(){
  var node;
  for (var i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
})

window.onclick = function(e) {
  console.log(e.target.tagName)
  console.log('dropdown');
  console.log(activeDropdown)
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}

	
});

