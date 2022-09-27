const next_button = document.querySelector('.gr6-sloder-next-button');
const prev_button = document.querySelector('.gr6-slider-prev-button');
const slider_track = document.querySelector('.group-6-items-box');
const slider_item = document.querySelector('.gr6-slider-item');
const slider_items_count = document.querySelectorAll('.gr6-slider-item').length;

const show_slider_item = 3;
const slider_item_border = 4;
const slider_item_width = slider_item.clientWidth + slider_item_border * 2;
const slider_item_gap = 20;
const slider_item_shift = slider_item_width + slider_item_gap;
let position = 0;
let position_index = 0;

prev_button.addEventListener('click', ()=>{
    console.log('previous slide', slider_items_count);
    if(position_index){
        position += slider_item_shift;
        position_index--;
    }
    set_position(position);
});

next_button.addEventListener('click', ()=>{
    console.log('next slide');
    if(position_index < slider_items_count - show_slider_item){
        position -= slider_item_shift;
        position_index++;
    }
    console.log(position_index, slider_items_count)
    set_position(position);
});

const set_position = (position) => {
    slider_track.style.transform = `translateX(${position}px)`;
};