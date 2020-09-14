//////////////////////////SLIDER////////////////////////

var OurSliderImages = ['slider images/hotel_accommodation_small.jpg', 'slider images/air_tix_reservation.jpg', './slider images/business_travel_small.jpg', 'slider images/destination_management.jpg','slider images/dining_small.jpg', 'slider images/KaZantip_2014_KaZantip-28_small.jpg', 'slider images/meetings-at-portland-oregon-hotel-top.jpg','slider images/merscedese320E_small.jpg','slider images/Food_Masterclasses_small.jpg','slider images/beer.jpg'];
  var OurSliderNotes = ['Розміщення в готелях', 'Бронювання авіа та залізничних квитків', 'Цілодобова клієнтська підтримка', 'Координування дестінаціями','Кетерінг', 'Організація дозвілля', 'Проведення зустрічей та семінарів','Транспортні послуги бізнес класу', 'Мастеркласи з приготування їжі','Організація корпоративних поїздок на спортивні заходи'];
  var currentPosition = 0;
  var sliderContainer = document.querySelector('.slideshow');

  var btnNext = document.querySelector('.prev');
  var btnPrev = document.querySelector('.next');

  function renderImage(index) {
    var slide = document.createElement('img');
    var note = document.createElement('div');
    slide.src = OurSliderImages[index];
    slide.className = 'mySlides';
    note.innerHTML = OurSliderNotes[index];
    slide.setAttribute('id','fade');
    note.setAttribute('class','sliderNote')
    sliderContainer.innerHTML = '';

    sliderContainer.appendChild(slide);
    sliderContainer.appendChild(note);

    // setTimeout(()=> slide.classList.add('animate'), 300);
  }

  function nextSlide() {
    if (currentPosition === OurSliderImages.length - 1) {
      currentPosition = 0;
    } else {
      currentPosition += 1;
    }
    
    renderImage(currentPosition);    
  }

  function prevSlide() {
    if (currentPosition === 0) {
      currentPosition = OurSliderImages.length - 1;
    } else {
      currentPosition -= 1;
    }
    renderImage(currentPosition);
  }

  window.addEventListener('load', function(){
    renderImage(currentPosition);
    let timerId = setTimeout(function repeat(){
      if (currentPosition === 0) {
      currentPosition = OurSliderImages.length - 1;
    } else {
      currentPosition -= 1;
    }
    renderImage(currentPosition);
    timerId = setTimeout(repeat, 3000);}, 3000);
    
    btnNext.addEventListener('click', function(){
      nextSlide(currentPosition);
    });

    btnPrev.addEventListener('click', function(){
      prevSlide(currentPosition);
    });
  })

// TEXTBLOCK FUNCTIONS //////////////////
/////////////////////////////////////////////
///////////////////////////////////////////


  var textBlock = document.querySelectorAll('.textBlock');
  var buttons = document.querySelectorAll('.button');

    console.log(textBlock);
    console.log(buttons);

var textArray = Array.prototype.slice.call(textBlock)

var buttonsArray = Array.prototype.slice.call(buttons)

buttonsArray.forEach(function(button, indexButton){
  button.addEventListener('click', function(e){
    if(e.target == button){
     e.target.classList.toggle('active');
      console.log(e.target)
      textArray.forEach(function(text,index){
        if(indexButton == index){
        text.style.display = 'block';
        text.scrollIntoView({block:'center',behavior:'smooth'})
        }
        else if(index !== indexButton){
          text.style.display = 'none';
          // button.classList.toggle('active')
          }
      })
      console.log(indexButton)
    }
    // else if(button.classList.contains('active')){
    //   button.classList.remove('active');
    // };
  })
})

//// SCROL TO TOP FUNCTIONS /////////
////////////////////////////
//////////////////////////////

var btnToTop=document.getElementById("toTop");
     
    function checkDistance(){ 
      if(document.documentElement.scrollTop>100||window.document.body.scrollTop>100){
         btnToTop.style.display="block";
      } else {
          btnToTop.style.display="none";
         }
      }

      window.onscroll=checkDistance;

      btnToTop.onclick=function(){
      window.scrollTo({top:0,behavior:"smooth"})
  }


  //////SCROLL DOWN FUNCTIONS///////////
//////////////////////////////////

