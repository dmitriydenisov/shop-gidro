const banner = new Swiper(".banner-section__slider", {
    loop: true,
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 1,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});
const productSlider = new Swiper('.product-slider',{
  loop: true,
  speed: 900,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
})

// табы
const tabsBtn = document.querySelectorAll('.tab');
const tabsItems = document.querySelectorAll('.tabs-content');

tabsBtn.forEach(onTabCkick);

function onTabCkick(item){  
  item.addEventListener('click', function(){

    let tabId = item.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if(!item.classList.contains('tab--active')){
      tabsBtn.forEach(function(item){
        item.classList.remove('tab--active');
      });

      tabsItems.forEach(function(item){
        item.classList.remove('tabs-content--active');
      });
  
      item.classList.add('tab--active');
      
      currentTab.classList.add('tabs-content--active');
    }
  });
}
// document.querySelector('.search__tabs-item').click();

// const favorite = document.querySelector('.product-item__favorite');

// favorite.forEach(onFavorite);

// function onFavorite(item){
//   item.addEventListener('click', function(){ 
//       currentTab.classList.toggle('product-item__favorite--active');
//     })
//   };




// favorite.addEventListener('click', function(){
//   favorite.classList.toggle('product-item__favorite--active');
// });

