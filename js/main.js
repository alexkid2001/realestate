const mockResponse = {
    "company": {
        "id": 2,
        "name": "Estate Data",
        "logo": "/web/image/res.company/2/logo",
        "street": "Նիկողայոս Ադոնց 4/3 Վերնահարկ, Երևան",
        "phone": "+374 94 62 80 07",
        "mobile": "+374 94 62 80 07",
        "email": "estate.data@gmail.com"
    },
    "offers": [
        {
            "id": 15,
            "company_name": "Estate Data",
            "company_id": 2,
            "qr_code": "/web/image/loyalty.rule/15/qr_code_image?download=true",
            "products": [
                {
                    "id": 52,
                    "name": "Some Renovation Things",
                    "img": "assets/offer1.jpg"
                }
            ],
            "discount_code": false,
            "loyalty_program": "Discount Coupon 20%",
            "loyalty_program_type": "coupons",
            "loyalty_program_date_from": "2025-02-15",
            "loyalty_program_date_to": "2025-08-31"
        },
        {
            "id": 16,
            "company_name": "Estate Data",
            "company_id": 2,
            "qr_code": "/web/image/loyalty.rule/16/qr_code_image?download=true",
            "products": [
                {
                    "id": 52,
                    "name": "Some Renovation Things",
                    "img": "assets/offer2.png"
                }
            ],
            "discount_code": "PROMO_CODE_3330",
            "loyalty_program": "Discount Code to Renovation",
            "loyalty_program_type": "promo_code",
            "loyalty_program_date_from": "2025-02-17",
            "loyalty_program_date_to": "2025-05-20"
        },
        {
            "id": 17,
            "company_name": "Estate Data",
            "company_id": 2,
            "qr_code": "/web/image/loyalty.rule/17/qr_code_image?download=true",
            "products": [
                {
                    "id": 59,
                    "name": "testProduct1 for EstateData",
                    "img": "assets/offer3.webp"
                }
            ],
            "discount_code": "PROMO_CODE_9eab",
            "loyalty_program": "new discount 13% furniture for EstateData",
            "loyalty_program_type": "promo_code",
            "loyalty_program_date_from": "2025-03-04",
            "loyalty_program_date_to": "2025-05-29"
        }
    ]
}


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
    breakpoints: {
        768: { slidesPerView: 2 },
        480: {
            slidesPerView: 1,
            grid: {
                rows: 1,
            }
        },
    }
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


const scrollTopButton = document.querySelector(".scroll-top");

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function toggleScrollButton() {
    if (window.scrollY > window.innerHeight) {
        scrollTopButton.classList.add("show");
        scrollTopButton.classList.remove("hide");
    } else {
        scrollTopButton.classList.add("hide");
        setTimeout(() => scrollTopButton.classList.remove("show"), 300); // Дождаться исчезновения перед скрытием
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const debouncedToggle = debounce(toggleScrollButton, 100);

window.addEventListener("scroll", debouncedToggle);
scrollTopButton.addEventListener("click", scrollToTop);
scrollTopButton?.addEventListener("click", scrollToTop);


const companyCards = document.querySelectorAll('.company-card');

console.log(companyCards);

function removeActiveClass() {
    companyCards.forEach(card => card.classList.remove('active'));
}

function addActiveClass(card) {
    card.classList.add('active');
}

function toggleActiveClass(card) {
    removeActiveClass();
    addActiveClass(card);
}
companyCards.forEach(card => card.addEventListener('click', (event) => {
    const cardElement = event.target.closest('.company-card');
    if (cardElement) {
        toggleActiveClass(cardElement);
        const slug = cardElement.dataset.slug;
        if (slug) {
            fetchOffers(cardElement.dataset.slug);
        }
    }
}));

function fetchOffers(companySlug) {
    renderOffers(mockResponse);
    // const url = `https://go.estatedata.cloud/api/company/estate-data/${companySlug}`;
    //
    // fetch(url)
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(`Error HTTP: ${response.status}`);
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         renderOffers(data);
    //     })
    //     .catch(error => {
    //         console.error('Error during receiving data:', error);
    //     });
}
function renderOffers(data) {
    const container = document.getElementById('offers-container');
    if (!container) {
        return;
    }

    container.innerHTML = ''; // Очищаем контейнер перед добавлением новых данных

    // Создаем секцию
    const section = document.createElement('section');
    section.classList.add('container', 'py-5');

    const title = document.createElement('h2');
    title.classList.add('text-center', 'mb-4');
    title.textContent = `All offers by this Partner (${data.company.id}):`;
    section.appendChild(title);

    const row = document.createElement('div');
    row.classList.add('row', 'g-3');

    data.offers.forEach(offer => {
        const col = document.createElement('div');
        col.classList.add('col-xl-4', 'col-md-6', 'col-sm-12');

        const card = document.createElement('div');
        card.classList.add('card', 'partner-offer');

        const header = document.createElement('div');
        header.classList.add('partner-offer_header');

        const img = document.createElement('img');
        img.src = offer.products[0]?.img || 'default-image.jpg'; // Фолбэк, если картинки нет
        img.classList.add('card-img-top');
        img.alt = 'Offer Image';

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('partner-offer_title', 'text-center');

        const offerTitle = document.createElement('h5');
        offerTitle.classList.add('card-title');
        offerTitle.textContent = offer.loyalty_program;

        const offerDetails = document.createElement('p');
        offerDetails.textContent = `${offer.loyalty_program_date_to} | ${offer.company_name}`;

        titleDiv.appendChild(offerTitle);
        titleDiv.appendChild(offerDetails);

        header.appendChild(img);
        header.appendChild(titleDiv);

        const body = document.createElement('div');
        body.classList.add('card-body');

        const type = document.createElement('p');
        type.classList.add('card-text');
        type.textContent = `Program type: ${offer.loyalty_program_type}`;
        body.appendChild(type);

        if (offer.loyalty_program_type === 'promo_code') {
            const discount = document.createElement('p');
            discount.classList.add('card-text');
            discount.textContent = `Discount Code: ${offer.discount_code || 'N/A'}`;
            body.appendChild(discount);
        }

        card.appendChild(header);
        card.appendChild(body);
        col.appendChild(card);
        row.appendChild(col);
    });

    section.appendChild(row);
    container.appendChild(section);
}

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