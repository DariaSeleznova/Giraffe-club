require('./style.scss');

const burger = document.getElementById("burger");
const nav = document.querySelector(".navigation nav");
const closeBtn = document.getElementById("closeBtn");
const openForm = document.getElementById("openForm");
const modalForm = document.getElementById("modalForm");
const closeForm = document.getElementById("closeForm");
const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");
const openDirectionsForm = document.getElementById("directions_btn");
const modalFormdirections = document.getElementById("modalDirections");
const closeDirectionsForm = document.getElementById("closeDirectionsForm");
const directionsForm = document.getElementById("directionsForm");
const directionsSuccess = document.getElementById("directionsSuccess");

burger.addEventListener("click", () => {
    nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
});
document.querySelectorAll(".navigation nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
const buttons = document.querySelectorAll(".contact-btn");
const infos = document.querySelectorAll(".contact-info");

buttons.forEach((button, index) => {
    button.addEventListener("click", (e) => {

        e.stopPropagation();

        const isActive = infos[index].classList.contains("active");

        infos.forEach(info => info.classList.remove("active"));

        if (!isActive) {
            infos[index].classList.add("active");
        }

    });
});
document.addEventListener("click", (e) => {
    if (!e.target.closest(".contacts")) {
        infos.forEach(info => info.classList.remove("active"));
    }
});


openForm.addEventListener("click", () => {
    modalForm.classList.add("active");
});

closeForm.addEventListener("click", () => {
    modalForm.classList.remove("active");
});
modalForm.addEventListener("click", (e) => {
    if (e.target === modalForm) {
        modalForm.classList.remove("active");
    }
});
form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.classList.add("hidden");
    success.classList.add("active");
});

openDirectionsForm.addEventListener("click", () => {
    modalFormdirections.classList.add("active");
})

closeDirectionsForm.addEventListener("click", () => {
    modalFormdirections.classList.remove("active");
})

modalFormdirections.addEventListener("click", (e) => {
    if (e.target === modalFormdirections) {
        modalFormdirections.classList.remove("active");
    }
})

directionsForm.addEventListener("submit", (e) => {
    e.preventDefault();

    directionsForm.classList.add("hidden");
    directionsSuccess.classList.add("active");
})
// const cardsContainer = document.querySelector(".team_cards");

// const leftBtn = document.querySelector(".team_left_btn");
// const rightBtn = document.querySelector(".team_rihgt_btn");

// function updateActive() {

//     const cards = document.querySelectorAll(".team_cards .personal_card");

//     cards.forEach(card => card.classList.remove("active"));

//     if (cards[1]) {
//         cards[1].classList.add("active");
//     }
// }
// rightBtn.addEventListener("click", () => {

//     const cards = document.querySelectorAll(".team_cards .card");

//     const lastCard = cards[cards.length - 1];

//     cardsContainer.prepend(lastCard);

//     updateActive();

// });
// leftBtn.addEventListener("click", () => {

//     const cards = document.querySelectorAll(".team_cards .card");

//     const firstCard = cards[0];

//     cardsContainer.append(firstCard);

//     updateActive();

// });


document.querySelectorAll(".carousel").forEach(carousel => {

    const cardsContainer = carousel.querySelector(".carousel_cards");
    const leftBtn = carousel.querySelector(".carousel_left_btn");
    const rightBtn = carousel.querySelector(".carousel_right_btn");

    function updateActive() {
        const cards = carousel.querySelectorAll(".card");

        cards.forEach(card => card.classList.remove("active"));

        if (cards[1]) {
            cards[1].classList.add("active");
        }
    }

    rightBtn.addEventListener("click", () => {

        const cards = carousel.querySelectorAll(".card");
        const lastCard = cards[cards.length - 1];

        cardsContainer.prepend(lastCard);

        updateActive();

    });

    leftBtn.addEventListener("click", () => {

        const cards = carousel.querySelectorAll(".card");
        const firstCard = cards[0];

        cardsContainer.append(firstCard);

        updateActive();

    });

    updateActive();

});
