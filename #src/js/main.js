const swiper = new Swiper(".banner-section__slider", {
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

// табы поиска
const tabsBtn = document.querySelectorAll('.search__tabs-item');
const tabsItems = document.querySelectorAll('.search__content-item');

tabsBtn.forEach(onTabCkick);

function onTabCkick(item){  
  item.addEventListener('click', function(){

    let tabId = item.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if(!item.classList.contains('search__tabs-item--active')){
      tabsBtn.forEach(function(item){
        item.classList.remove('search__tabs-item--active');
      });
  
      tabsItems.forEach(function(item){
        item.classList.remove('search__content-item--active');
      });
  
      item.classList.add('search__tabs-item--active');
      
      currentTab.classList.add('search__content-item--active');
    }
  });
}
document.querySelector('.search__tabs-item').click();