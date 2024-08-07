mainSlide();

function mainSlide() {
    const mainVisualSlide = new Swiper('.main-visual-slide', {
        loop: true,
        pagination: {
            el: '.main-visual-slide .page',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-visual-slide .arrows .prev',
            prevEl: '.main-visual-slide .arrows .next',
        },
    })
}

const mainProductSlide = new Swiper('.main-product-slide', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
})