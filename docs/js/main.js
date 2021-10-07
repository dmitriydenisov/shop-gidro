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
function slider() {
  const slider = this.closest('.swiper');
    if (!slider) {
      return;
    }
}
const productSlider = new Swiper('.product-slider',{
  loop: true,
  speed: 900,
  slidesPerView: 1,
  spaceBetween: 1,
  navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    pagination:{
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1138: {
        slidesPerView: 4,
        spaceBetween: 1,
      },
      1200: {
          slidesPerView: 4,
          spaceBetween: 29,
        },
    }
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

//скрипт мобильного меню
const mobileBtn = document.querySelector('.menu__btn');
const mobileMenu = document.querySelector('.menu-mobile__list');
if(mobileBtn){
  mobileBtn.addEventListener('click', function(){
    mobileMenu.classList.toggle('menu-mobile__list--active')
  })
}

// табы
const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => tab.addEventListener('click', labelClickHandler));

function labelClickHandler (){
  if (this.classList.contains('tab--active')) {
		return;
	}
  const segment = this.closest('.panel__tabs');
  if (!segment) {
		return;
	}
  const tabsBtn = segment.querySelectorAll('.tab');
  tabsBtn.forEach((tab) => tab.classList.remove('tab--active'));
  this.classList.add('tab--active');

  const items = segment.querySelectorAll(".tabs-content");
	items.forEach((label) => label.classList.remove("tabs-content--active"));

  const item = segment.querySelector(
		`.tabs-content[data-tab="${this.dataset.tab}"]`
	);


	if (item) {
		item.classList.add("tabs-content--active");
	}
}


//скрипт добавления в избранное
const favorite = document.querySelectorAll('.product-item__favorite');
favorite.forEach(el => {
  el.addEventListener('click', function(){
    el.classList.toggle('product-item__favorite--active')
  });
});

//скрипт добавления в избранное в карточке товара
const favoriteCard = document.querySelector('.product-card__icon--favorite');
if(favoriteCard){
favoriteCard.addEventListener('click', function(){
  favoriteCard.classList.toggle('product-card__icon--favorite--active');
});}

//скрипт добавления товара к сравнинию
const compresion = document.querySelector('.product-card__icon--compresion')
if(compresion){
compresion.addEventListener('click', function(){
  compresion.classList.toggle('product-card__icon--compresion--active')
});}

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
  };
  el.classList.add('catalog__filter-button--active');

  const line = document.querySelector('.catalog__filter-btnline');
  const filterBtn = document.querySelectorAll('.product-item__wrapper');

  function addActiveLine(item){
    if(line.classList.contains('catalog__filter-button--active')){
      item.classList.add('product-item__wrapper--list');
    }else{
      item.classList.remove('product-item__wrapper--list');
    }
  }
  filterBtn.forEach(addActiveLine);
  });
}
//скрипт рейтинга
const ratings = document.querySelectorAll('.rating');

if(ratings.length > 0){
  initRatings();
  
}

function initRatings() {

  let ratingActive, ratingValue;
  //обходим все рейтинги на странице
  for(let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    initRatings(rating);
  }
  //инициализируем конкретный рейтинг
  function initRatings(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();

    if(rating.classList.contains('rating__set')) {
      setRating(rating);
    }
  }

  //инициализация переменных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }
  //изменение ширины активных звезд
  function setRatingActiveWidth(i = ratingValue.innerHTML) {
    const ratingActiveWidth = i / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`
  }
  //указваем оценку
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item');
    
    for (let i = 0; i < ratingItems.length; i++) {
      const ratingItem = ratingItems[i];
      ratingItem.addEventListener('mouseenter', function (e) {
        //Обновление данных
        initRatingVars(rating);
        //обновление активной звезды
        setRatingActiveWidth(ratingItem.value);
      });
      
      ratingItem.addEventListener('mouseleave', function (e) {
        //обновление активной звезды
        setRatingActiveWidth();
      });

      ratingItem.addEventListener('click', function (e) {
        //Обновление данных
        initRatingVars(rating);
        if(rating.dataset.ajax) {
          //"Отправить" на сервер
          setRatingValue(ratingItem.value, rating);
        } else {
          //Отобразить указаную оценку
          ratingValue.innerHTML = i + 1;
          setRatingActiveWidth();
        }
        //обновление активной звезды
        setRatingActiveWidth(ratingItem.value);
      });
    }
  }
  async function setRatingValue(value, rating) {
    if(!rating.classList.contains('rating__sending')) {
      rating.classList.add('rating__sending');

      //отправка данных (value) на сервер
      let response = await fetch('json/rating.json', {
        method: 'GET',
        //body: JSON.stringify({
        //userRating: value
        //}),
        //headers: {
        //'content-type': 'application/json'
        //}        
      });
      if (response.ok) {
        //Получаем новый рейтинг
        const result = await response.json();
        //вывод нового среднего результата
        ratingValue.innerHTML = result.newRating;
        //обновление активных звезд
        setRatingActiveWidth();
        rating.classList.remove('rating__sending');
      } else {
        alert('Error send');
        rating.classList.remove('rating__sending');
      }
    }
  }
}
//аккардион в подвале приразрешении экрана меньше 540px
if(document.documentElement.clientWidth < 540){
  const dropFooter = document.querySelectorAll('.footer__top-title');
    dropFooter.forEach(el => {
      el.addEventListener('click', function(){
        el.classList.toggle('footer__top-title--active')
      });
  });
}
//показ фильтра в мобильной версии
const mobileFilter = document.querySelector('.aside__btn')
if(mobileFilter){
  mobileFilter.addEventListener('click', function(){
    mobileFilter.classList.toggle('aside__btn--active')
  })
}

//скрипт отображения магазинов в карточке товаров
const mobBtn = document.querySelector('li.card__list-mobileBtn')
if(mobBtn){
  mobBtn.addEventListener('click', function() {
    mobBtn.classList.toggle('card__list-mobileBtn--active')
  })
}