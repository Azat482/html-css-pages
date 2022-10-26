(function() {
    "use strict";

    //hamburger menu
    var toggle = document.querySelector(".header__top-hamburger-btn");
    toggleHandler(toggle);
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        console.log("header button clicked");
        e.preventDefault();
        (this.classList.contains("header__top-hambtn-active") === true) ? this.classList.remove("header__top-hambtn-active") : this.classList.add("header__top-hambtn-active");
        document.querySelector(".header__top-nav").classList.toggle("header__top-hamburger-list-active");
    });
    }

    //accordion panel
  var accordion_elements = Object.values(document.getElementsByClassName("block-3__accordion-btn"));
  accordion_elements.forEach(accordion_element => {
    accordion_element.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle("accordion__btn-active");
      var panel = this.querySelector(".block-3__accordion-panel");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }
      else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
      console.log("accordion clicked", panel);
    });
  });


    //block-4 slider
    const block_4_next_btn = document.querySelector('.block-4__next-slide-btn');
    const block_4_prev_btn = document.querySelector('.block-4__prev-slide-btn');
    const block_4_slider_track = document.querySelector('.block-4__slider-items-box');
    const block_4_slider_item = document.querySelector('.block-4__slide-item');
    const block_4_slider_items_count = document.querySelectorAll('.block-4__slide-item').length;

    let block_4_slide_position = 0;
    let block_4_slide_position_index = 0;
    const block_4_show_slide_items = 2;
    const block_4_slider_item_height = block_4_slider_item.clientHeight;
    //const block_4_slider_track_gap = (document.querySelector('.block-4__slider-items-box-container').clientHeight - 30) * 0.18;
    const block_4_slider_track_gap = Number((getComputedStyle(block_4_slider_track).gap).replace('px','')); //getting flex-gap property from element
    const block_4_slider_track_shift = block_4_slider_item_height + block_4_slider_track_gap; 

    console.log('item count: ', block_4_slider_items_count);
    console.log(
      'gap: ',
      getComputedStyle(block_4_slider_track).gap,
      block_4_slider_track_gap,
    );

    block_4_next_btn.addEventListener('click', function(e){
      e.preventDefault();
      if(block_4_slide_position_index < block_4_slider_items_count - block_4_show_slide_items){
        block_4_slide_position -= block_4_slider_track_shift;
        block_4_slide_position_index++;
      }
      block_4_set_slide_position(block_4_slide_position);
      console.log('next slide');
    });

    block_4_prev_btn.addEventListener('click', function(e){
      e.preventDefault();
      if(block_4_slide_position_index){
        block_4_slide_position_index--;
        block_4_slide_position += block_4_slider_track_shift;
      }
      block_4_set_slide_position(block_4_slide_position);
      console.log('previous slide');      
    });

    const block_4_set_slide_position = (pos)=>{
      block_4_slider_track.style.transform = `translateY(${pos}px)`;
    }


    //block-5 slider
    let block_5_slider_items_arr = Object.values(document.getElementsByClassName('block-5__slider-img-box'));
    const block_5_slider_items_count = document.querySelectorAll('.block-5__slider-img-box').length;
    const block_5_slider_track = document.querySelector('.block-5__slider-img-elems-track');
    const block_5_slider_shift = document.querySelector('.block-5__slider-img-box').clientWidth + Number((getComputedStyle(block_5_slider_track).gap).replace('px', ''))
    let block_5_slider_position = 0;
    let left_elem_index = 0;
    let center_elem_index = 1;
    let right_elem_index = 2;
    block_5_slider_items_arr[left_elem_index].classList.add('block-5__slider-img-box__is_prev_btn', 'block-5__slider-img-box__is_btn');
    block_5_slider_items_arr[right_elem_index].classList.add('block-5__slider-img-box__is_next_btn', 'block-5__slider-img-box__is_btn');

    let block_5_slider_texts_arr = Object.values(document.getElementsByClassName('block-5__slider-text-box'));
    const block_5_slider_texts_count = block_5_slider_items_count;
    const block_5_slider_texts_track = document.querySelector('.block-5__slider-text-elems-track');
    const block_5_slider_texts_track_shift = document.querySelector('.block-5__slider-text-box').clientWidth;
    let block_5_texsts_slider_position = -block_5_slider_texts_track_shift;
    let block_5_text_index = 1;
    block_5_slider_texst_track_set_position(block_5_texsts_slider_position);


    function block_5_next_btn_handler(e){
      if(right_elem_index < block_5_slider_items_count){
        if(right_elem_index == block_5_slider_items_count - 1){
          for(let i = 0; i < left_elem_index; i++){
            block_5_slider_track.append(block_5_slider_items_arr[i].cloneNode(true));
            block_5_slider_items_arr[i].remove();
          }
          block_5_slider_items_arr = Object.values(document.getElementsByClassName('block-5__slider-img-box'));
          block_5_slider_position = 0;
          left_elem_index = 0;
          center_elem_index = 1;
          right_elem_index = 2;
        }
        block_5_slider_items_arr[left_elem_index].removeEventListener('click', block_5_prev_btn_handler);
        this.removeEventListener('click', block_5_next_btn_handler);
        block_5_slider_items_arr[left_elem_index].classList.remove('block-5__slider-img-box__is_prev_btn', 'block-5__slider-img-box__is_btn');
        this.classList.remove('block-5__slider-img-box__is_next_btn', 'block-5__slider-img-box__is_btn');
        right_elem_index++;
        left_elem_index++;
        block_5_slider_items_arr[left_elem_index].addEventListener('click', block_5_prev_btn_handler);
        block_5_slider_items_arr[right_elem_index].addEventListener('click', block_5_next_btn_handler);
        block_5_slider_items_arr[left_elem_index].classList.add('block-5__slider-img-box__is_prev_btn', 'block-5__slider-img-box__is_btn');
        block_5_slider_items_arr[right_elem_index].classList.add('block-5__slider-img-box__is_next_btn', 'block-5__slider-img-box__is_btn');
        block_5_slider_position -= block_5_slider_shift;
        block_5_set_slide_position(block_5_slider_position);

        console.log('text index: ' ,block_5_text_index, block_5_slider_texts_count);
        if(block_5_text_index == block_5_slider_texts_count - 1){
          for(let i = 0; i < block_5_text_index; i++){
            block_5_slider_texts_track.append(block_5_slider_texts_arr[i].cloneNode(true));
            block_5_slider_texts_arr[i].remove();
          }
          block_5_slider_texts_arr = Object.values(document.getElementsByClassName('block-5__slider-text-box'));
          block_5_texsts_slider_position = 0;  
          block_5_text_index = 0;        
        }

        block_5_texsts_slider_position -= block_5_slider_texts_track_shift;
        block_5_slider_texst_track_set_position(block_5_texsts_slider_position);
        block_5_text_index++;
        console.log('text index: ' ,block_5_text_index);

      }
      console.log('next button', left_elem_index, right_elem_index);  
    }

    function block_5_prev_btn_handler(e){
      if(left_elem_index >= 0){
        if(left_elem_index == 0){
          for(let i = block_5_slider_items_count - 1; i > right_elem_index; i--){
            block_5_slider_track.prepend(block_5_slider_items_arr[i].cloneNode(true));
            block_5_slider_items_arr[i].remove();
          }
          block_5_slider_items_arr = Object.values(document.getElementsByClassName('block-5__slider-img-box'));
          block_5_slider_position = (block_5_slider_items_count - 3) * (-block_5_slider_shift); //3 elems is show in slide
          right_elem_index = block_5_slider_items_count - 1;
          center_elem_index = right_elem_index - 1;
          left_elem_index = center_elem_index - 1;
          block_5_set_slide_position(-block_5_slider_position); 
        }
        this.removeEventListener('click', block_5_prev_btn_handler);
        block_5_slider_items_arr[right_elem_index].removeEventListener('click', block_5_next_btn_handler);
        block_5_slider_items_arr[right_elem_index].classList.remove('block-5__slider-img-box__is_next_btn', 'block-5__slider-img-box__is_btn');
        this.classList.remove('block-5__slider-img-box__is_prev_btn', 'block-5__slider-img-box__is_btn');
        left_elem_index--;
        right_elem_index--;
        block_5_slider_items_arr[left_elem_index].addEventListener('click', block_5_prev_btn_handler);
        block_5_slider_items_arr[right_elem_index].addEventListener('click', block_5_next_btn_handler);
        block_5_slider_items_arr[left_elem_index].classList.add('block-5__slider-img-box__is_prev_btn', 'block-5__slider-img-box__is_btn');
        block_5_slider_items_arr[right_elem_index].classList.add('block-5__slider-img-box__is_next_btn', 'block-5__slider-img-box__is_btn');
        block_5_slider_position += block_5_slider_shift;
        block_5_set_slide_position(block_5_slider_position);
        
        console.log('text index: ' ,block_5_text_index, block_5_slider_texts_count);
        if(block_5_text_index == 0){
          for(let i = block_5_slider_texts_count - 1; i > 0; i--){
            block_5_slider_texts_track.prepend(block_5_slider_texts_arr[i].cloneNode(true));
            block_5_slider_texts_arr[i].remove();
          }
          block_5_slider_texts_arr = Object.values(document.getElementsByClassName('block-5__slider-text-box'));
          block_5_texsts_slider_position = (block_5_slider_texts_count - 1) * -block_5_slider_texts_track_shift;  
          block_5_text_index = block_5_slider_texts_count - 1;        
        }

        block_5_texsts_slider_position += block_5_slider_texts_track_shift;
        block_5_slider_texst_track_set_position(block_5_texsts_slider_position);
        block_5_text_index--;
        console.log('text index: ' ,block_5_text_index);
      }
      console.log('previous button');
    }

    function block_5_set_slide_position(pos){
      block_5_slider_track.style.transform = `translateX(${pos}px)`;
    }

    function block_5_slider_texst_track_set_position(pos){
      block_5_slider_texts_track.style.transform = `translateX(${pos}px)`;
    }

    block_5_slider_items_arr[left_elem_index].addEventListener('click', block_5_prev_btn_handler);
    block_5_slider_items_arr[right_elem_index].addEventListener('click', block_5_next_btn_handler);


  })();