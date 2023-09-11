var Images = {
    0: "https://texty.github.io/russian_museums/img/scroll/01.jpg",
    1: "https://texty.github.io/russian_museums/img/scroll/02.jpg",
    2: "https://texty.github.io/russian_museums/img/scroll/03.jpg",
    3: "https://texty.github.io/russian_museums/img/scroll/04.jpg",
    4: "https://texty.github.io/russian_museums/img/scroll/05.jpg",
    5: "https://texty.github.io/russian_museums/img/scroll/06.jpg"
}
var container = document.querySelector('#scroll');
var graphic = document.querySelector('#scroll > .scroll__graphic');
var text = document.querySelector('#scroll > .scroll__text');
var step = document.querySelector('#scroll > .scroll__text > .step');
var scroller = scrollama();

function handleStepEnter(r) {
  
    $('#background-image').attr("src", Images[r.index])

}

function init() {
    scroller.setup({
        container: '#scroll',
        graphic: '.scroll__graphic',
        text: '.scroll__text',
        step: '.scroll__text .step',
        offset: 0.9,
        debug: false,
    })
        .onStepEnter(handleStepEnter);

}
init();