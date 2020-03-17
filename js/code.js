
$(document).ready(function(){
	$("#search").click(function() {
		$(".field").toggle();
	});
});




var slideIndex = 1;
showSlides(slideIndex);


function plus(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myCarousel");
  if (n > slides.length-2) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length-2}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }	
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex].style.display = "block";
  slides[slideIndex+1].style.display = "block";
  
}


var x = 1;
show(2);

function plusSlide(n) {
  show(x += n);
}


function show(n) {
  var i;
  var slide = document.getElementsByClassName("pic");
  var caption = document.getElementsByClassName("caption");
  x=n;

  if (n > slide.length-1) {x = 0}
  if (n < 0) {x = slide.length-1}


  for (i = 0; i < slide.length; i++) {
      slide[i].style.opacity = ".4";
      slide[i].className = "pic";
      caption[i].style.display = "none";
  }	

  slide[x].style.opacity="1";
  slide[x].className += " change";
  caption[x].style.display = "block";
  
}




$(document).ready(function(){
	$('.stats-title').each(function() {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		},{
			duration: 3500,
			easing: 'swing',
			step: function(now) {
				$(this).text(Math.ceil(now));
			}

		});
   
	});
});



class parallaxTiltEffect {
 
  constructor({element, tiltEffect}) {
 
    this.element = element;
    this.wrap = this.element.querySelector(".wrap");
    this.size = [300, 360];
    [this.w, this.h] = this.size;
 
    this.tiltEffect = tiltEffect;
 
    this.mouseOnComponent = false;
 
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.defaultStates = this.defaultStates.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.init = this.init.bind(this);
 
    this.init();
  }
 
  handleMouseMove(event) {
    const {offsetX, offsetY} = event;
 
    let X;
    let Y;
 
    if (this.tiltEffect === "reverse") {
      X = ((offsetX - (this.w/2)) / 3) / 3;
      Y = (-(offsetY - (this.h/2)) / 3) / 3;
    }
 
    else if (this.tiltEffect === "normal") {
      X = (-(offsetX - (this.w/2)) / 3) / 3;
      Y = ((offsetY - (this.h/2)) / 3) / 3;
    }
 
    this.setProperty('--rY', X.toFixed(2));
    this.setProperty('--rX', Y.toFixed(2));
 
    this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
    this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
  }
 
  handleMouseEnter() {
    this.mouseOnComponent = true;
    this.wrap.classList.add("wrap--active");
  }
 
  handleMouseLeave() {
    this.mouseOnComponent = false;
    this.defaultStates();
  }
 
  defaultStates() {
    this.wrap.classList.remove("wrap--active");
    this.setProperty('--rY', 0);
    this.setProperty('--rX', 0);
    this.setProperty('--bY', '80%');
    this.setProperty('--bX', '50%');
  }
 
  setProperty(p, v) {
    return this.wrap.style.setProperty(p, v);
  }
 
  init() {
    this.element.addEventListener('mousemove', this.handleMouseMove);
    this.element.addEventListener('mouseenter', this.handleMouseEnter);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
  }
 
}
 
const a = e => document.querySelector(e); 
 
const wrap1 = new parallaxTiltEffect({
  element: a('.section1'),
  tiltEffect: 'reverse'
});
 