"use strict";

const SLIDER_AUTOPLAY_SPEED = 1500;

window.addEventListener("load", () => {
    /* MOBILE MENU */
    const mobileMenuBtn = document.querySelector("#menu-btn");
    const mobileMenuContent = document.querySelector("#mobile-menu");

    const onMenuToggle = () => {
        mobileMenuContent.classList.toggle("hidden");

        const isScrollActive = window.getComputedStyle(document.body).overflowY === "visible";

        if (!mobileMenuContent.classList.contains("hidden") && isScrollActive) {
            document.body.style.overflowY = "hidden";
        }

        if (mobileMenuContent.classList.contains("hidden")) {
            document.body.style.overflowY = "visible";
        }
    };

    mobileMenuBtn.addEventListener("click", onMenuToggle);

    mobileMenuContent.addEventListener("click", e => {
        if (e.target === mobileMenuContent) onMenuToggle();
    });


    /* MOBILE SEARCH CONTENT */
    const searchBtn = document.querySelector("#search-btn");
    const searchContent = document.querySelector("#search-content");

    const onSearchToggle = () => {
        searchContent.classList.toggle("hidden");

        const isScrollActive = window.getComputedStyle(document.body).overflowY === "visible";

        if (!searchContent.classList.contains("hidden") && isScrollActive) {
            document.body.style.overflowY = "hidden";

        }

        if (searchContent.classList.contains("hidden")) {
            document.body.style.overflowY = "visible";
        }
    }

    searchBtn.addEventListener("click", onSearchToggle);

    searchContent.addEventListener("click", e => {
        if (e.target === searchContent) {
            onSearchToggle();
        }
    });


    /* CATALOG MENU */
    const catalogMenuBtn = document.querySelector("#catalog-btn");
    const catalogMenuBtnIcon = document.querySelector("#catalog-btn > i");
    const catalogMenuContent = document.querySelector("#catalog-menu-content");

    catalogMenuBtn?.addEventListener("click", () => {
        catalogMenuBtnIcon.classList.toggle("fa-times");
        catalogMenuBtnIcon.classList.toggle("fa-bars");

        catalogMenuContent.classList.toggle("hidden");
    });


    /* CATALOG TABS */
    const infoTabButtons = document.querySelectorAll("button.info-tab-button");
    const infoTabs = document.querySelectorAll("div.info-tab-content");

    const onInfoTabChange = index => {
        infoTabButtons[index].classList.add("text-secondary");
        infoTabButtons[index].classList.add("border-box");
        infoTabButtons[index].classList.add("border-t-4");
        infoTabButtons[index].classList.add("border-t-secondary");
        infoTabButtons[index].classList.add("bg-light");

        infoTabs[index].classList.remove("hidden");

        for (let i = 0; i < infoTabButtons.length; i++) {
            if (i === index) continue;

            infoTabButtons[i].classList.remove("text-secondary");
            infoTabButtons[i].classList.remove("border-box");
            infoTabButtons[i].classList.remove("border-t-4");
            infoTabButtons[i].classList.remove("border-t-secondary");
            infoTabButtons[i].classList.remove("bg-light");

            infoTabs[i].classList.add("hidden");
        }
    }

    for (let i = 0; i < infoTabButtons.length; i++) {
        infoTabButtons[i].addEventListener("click", () => {
            onInfoTabChange(i);
        });
    }

    /* PRODUCT PAGE TABS */
    const productTabButtons = document.querySelectorAll("button.pruduct-tab-btn");
    const productTabs = document.querySelectorAll("div.product-tab-content");

    const onProductTabChange = index => {
        productTabButtons[index].classList.add("text-black");
        productTabButtons[index].classList.add("md:border-b-2");
        productTabButtons[index].classList.add("md:border-secondary");

        productTabs[index].classList.remove("hidden");

        for (let i = 0; i < productTabButtons.length; i++) {
            if (i === index) continue;

            productTabButtons[i].classList.remove("text-black");
            productTabButtons[i].classList.remove("md:border-b-2");
            productTabButtons[i].classList.remove("md:border-secondary");

            productTabs[i].classList.add("hidden");
        }
    }

    for (let i = 0; i < productTabs.length; i++) {
        productTabButtons[i].addEventListener("click", () => {
            onProductTabChange(i);
        });
    }

    /* MAIN SLIDER */
    $("#main-slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: SLIDER_AUTOPLAY_SPEED,
    });

    /* INDEX PAGE GOODS LIST */
    $("#main-goods-list-slider").slick({
        autoplay: true,
        autoplaySpeed: SLIDER_AUTOPLAY_SPEED,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: document.querySelector("button#prev"),
        nextArrow: document.querySelector("button#next"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    /* PRODUCT PAGE SLIDERS */
    $("#product-first-slider").slick({
        autoplay: true,
        autoplaySpeed: SLIDER_AUTOPLAY_SPEED,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: document.querySelector("button#first-slider-prev"),
        nextArrow: document.querySelector("button#first-slider-next"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $("#product-second-slider").slick({
        autoplay: true,
        autoplaySpeed: SLIDER_AUTOPLAY_SPEED,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: document.querySelector("button#second-slider-prev"),
        nextArrow: document.querySelector("button#second-slider-next"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $("#product-third-slider").slick({
        autoplay: true,
        autoplaySpeed: SLIDER_AUTOPLAY_SPEED,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: document.querySelector("button#third-slider-prev"),
        nextArrow: document.querySelector("button#third-slider-next"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
