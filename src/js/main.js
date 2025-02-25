const thumbnailsSwiper = new Swiper('.thumbnails-swiper', {
    slidesPerView: 10,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
});

const gallerySwiper = new Swiper('.gallery-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    thumbs: {
        swiper: thumbnailsSwiper,
    },
});

const fullscreenSwiper = new Swiper('.fullscreen-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});

document.querySelectorAll('.open-modal').forEach(image => {
    image.addEventListener('click', () => {
        document.getElementById('fullscreenModal').style.display = 'flex';
    });
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('fullscreenModal').style.display = 'none';
});