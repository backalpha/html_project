


const swiperWatches = new Swiper('.home__swiper', {
   loop: true,
   spaceBetween: 32,
   grabCursor: true,
   effect: 'creative',
   creativeEffect: {
    prev:{
        translate:[-100, 0 , -500],
        rotate: [0, 0 ,15],
        opacity: 0

    },
    next:{
        translate:[100, 0 , -500],
        rotate: [0, 0 ,-15],
        opacity: 0

    },

   },
  
   
    pagination: {
      el: '.swiper-pagination',
      
    },
  
 
});