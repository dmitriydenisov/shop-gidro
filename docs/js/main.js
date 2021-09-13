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

const rangeSlider = document.querySelector('.aside-filter__slider');

if(rangeSlider){
  noUiSlider.create(rangeSlider, {
    start: [100000, 500000],
    connect: true,
    step: 1,
    range: {
        'min': [100000],
        'max': [500000]
    }
  });

  const input0 = document.getElementById('input0');
  const input1 = document.getElementById('input1');
  const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function(values, handle){
      inputs[handle].value = Math.round(values[handle]);
      
    });
    const setRangeSlider =  (i, value) => {
      let arr = [null, null];
      arr[i] = value;
      rangeSlider.noUiSlider.set(arr);
      
    };

      inputs.forEach((el, index) => {
        el.addEventListener('change', (e) =>{
          setRangeSlider(index, e.currentTarget.value)
          
        });
    });
}

const element = document.querySelectorAll('.filter__item-select, .catalog__filter-select');
element.forEach(el => {
  const choices = new Choices(el, {
    searchEnabled: false,
  });
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

//скрипт добавления в избранное
const favorite = document.querySelectorAll('.product-item__favorite');
favorite.forEach(el => {
  el.addEventListener('click', function(){
    el.classList.toggle('product-item__favorite--active')
  });
});

//скрипт фильтра
const drop = document.querySelectorAll('.filter__item-drop, .filter__extra');
drop.forEach(el => {
  el.addEventListener('click', function(){
    el.classList.toggle('filter__item-drop--active')
  });
})
//скрипт изменения вида
const select = document.querySelectorAll('.catalog__filter-button');

select.forEach(onView);

function onView(el){
  el.addEventListener('click', function(){
    if(!el.classList.contains('catalog__filter-button--active')){
      select.forEach(function(el){
        el.classList.remove('catalog__filter-button--active');
      });

    let line = document.querySelector('.catalog__filter-btnline');
    let lineActive = line.getElementsByClassName('catalog__filter-button--active');
    const filterBtn = document.querySelectorAll('.product-item__wrapper');

    function addActiveLine(item){
      if(line + 'catalog__filter-button--active'){
        item.classList.add('product-item__wrapper--list');
      }
      if(!(line + 'catalog__filter-button--active')){
        item.classList.remove('product-item__wrapper--list');
        console.log('done');
      }
    }
    filterBtn.forEach(addActiveLine);
  };
  el.classList.add('catalog__filter-button--active')
  });
}