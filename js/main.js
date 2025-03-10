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

const offerSwiper = new Swiper(".company-swiper", {
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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

function closeFullscreenModal() {
    document.getElementById('fullscreenModal').style.display = 'none';
}

function initCloseFullscreenModal() {
    document.querySelector('.close-btn')?.addEventListener('click', () => {
        closeFullscreenModal()
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeFullscreenModal()
        }
    });
}

document.querySelectorAll('.open-modal').forEach(image => {
    image?.addEventListener('click', () => {
        const modal = document.getElementById('fullscreenModal');
        if (modal) {
            document.getElementById('fullscreenModal').style.display = 'flex';
            initCloseFullscreenModal();
        }
    });
});

function collapseNavbar() {
    let navbar = document.getElementById('pagenav');
    if (navbar) {
        new bootstrap.Collapse(navbar, {
            toggle: true
        });
    }
}

document.querySelectorAll('.pagenav .nav-link').forEach(link => {
    link.addEventListener('click', () => collapseNavbar());
})

// function fetchOffers(catId) {
//     const url = `https://go.estatedata.cloud/api/catalog/category/${catId}/offers`;
//
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Ошибка HTTP: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             renderOffers(data);
//         })
//         .catch(error => {
//             console.error('Ошибка при получении данных:', error);
//         });
// }

// function renderOffers(data) {
//     const container = document.getElementById('offers-container');
//     if (!container) {
//         console.error('Контейнер для предложений не найден.');
//         return;
//     }
//
//     container.innerHTML = '';
//
//     data.offers.forEach(offer => {
//         const offerElement = document.createElement('div');
//         offerElement.classList.add('col-lg-4 col-md-6 col-sm-12');
//
//         offerElement.innerHTML = `
//             <h3>${offer.title}</h3>
//             <p>${offer.description}</p>
//             <strong>Цена: ${offer.price} ${offer.currency}</strong>
//         `;
//
//         container.appendChild(offerElement);
//     });
// }
//
// fetchOffers(10);

//https://go.estatedata.cloud/api/catalog/category/<int:cat_id>/offers
//https://go.estatedata.cloud/api/catalog/categories

//
// <div className="col-lg-4 col-md-6 col-sm-12">
//     <div className="card partner-offer">
//         <div className="partner-offer_header">
//             <img src="assets/offer1.jpg" className="card-img-top" alt="Offer Image"/>
//             <div className="partner-offer_title">
//                 <h5 className="card-title">OfferTitle25</h5>
//                 <p>Date | Company ABC</p>
//             </div>
//         </div>
//         <div className="card-body">
//             <p className="card-text">Some short description about the offer.</p>
//         </div>
//     </div>
// </div>