const next_button = document.querySelector('.gr6-sloder-next-button');
const prev_button = document.querySelector('.gr6-slider-prev-button');
const slider_track = document.querySelector('.group-6-items-box');
const slider_item = document.querySelector('.gr6-slider-item');
const slider_items_count = document.querySelectorAll('.gr6-slider-item').length;

let show_slider_item = 3;
let slider_item_border = 4;
let slider_item_width = slider_item.clientWidth + slider_item_border * 2;
let slider_item_gap = 20;
let slider_item_shift = slider_item_width + slider_item_gap;
let position = 0;
let position_index = 0;

window.addEventListener('resize', function(e){
    set_slides_num();
}, true)

prev_button.addEventListener('click', ()=>{
    console.log('previous slide', slider_items_count);
    if(position_index) {
        position += slider_item_shift;
        position_index--;
    }
    set_position(position);
});

next_button.addEventListener('click', ()=>{
    console.log('next slide');
    if(position_index < slider_items_count - show_slider_item ){
        position -= slider_item_shift;
        position_index++;
    }
    console.log(position_index, slider_items_count, show_slider_item)
    set_position(position);
});

const set_position = (position) => {
    slider_track.style.transform = `translateX(${position}px)`;
};

const set_slides_num = ()=>{
    if(this.window.innerWidth >= 992 && this.window.innerWidth < 1400){
        show_slider_item = 2;
    }
    else if(this.window.innerWidth < 992){
        show_slider_item = 1;
    }
    else
    {
        show_slider_item = 3;
    }
    while(position_index > slider_items_count - show_slider_item){
        position_index -= 1;
    }
    slider_item_width = slider_item.clientWidth + slider_item_border * 2;
    slider_item_shift = slider_item_width + slider_item_gap;
    position = -(slider_item_shift * position_index);
    set_position(position);
    console.log(slider_item_width, show_slider_item);
}

set_slides_num();
