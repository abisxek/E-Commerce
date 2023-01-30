$(document).ready(function () {

    // banner owl carousel
    $("#bannerArea .owl-carousel").owlCarousel({
        dots: true,
        items: 1
    });

    // top sale owl carousel
    $("#topSale .owl-carousel").owlCarousel({
        dots: false,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    //isotope filters
    let $grid = $(".grid").isotope({
        itemSelector: '.gridItem',
        layoutMode: 'fitRows'
    });
    // filter items on button click
    $(".button-group").on("click", "button", function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


    //New Products Owl Carousel
    $("#newProducts .owl-carousel").owlCarousel({
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    //Blogs Owl Carousel
    $("#blogs .owl-carousel").owlCarousel({
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });


    //product quantity section on product page
    let $quantityUp = $(".qty .qtyUp");
    let $quantityDown = $(".qty .qtyDown");
    let $dealPrice = $("#dealPrice");

    // let $quantityInput = $(".qty .qtyInput");



    $quantityUp.click(function () {

        let dataId = $(this).attr("data-id");

        let $input = $(`.qtyInput[data-id='${$(this).data("id")}']`);
        let $price2 = $(`.productPrice[data-id='${$(this).data("id")}']`);

        console.log($input)
        let x = parseFloat($price.textContent) / parseFloat($input.val());

        if ($input.val() >= 1 && $input.val() <= 9) {
            $input.val(function (i, oldval) {
                return ++oldval;
            });

            $price2.innerHTML = parseFloat($input.val()) * x + ".00";

        }

    }); // closing qty up button

    $quantityDown.click(function () {

        let $input = $(`.qtyInput[data-id='${$(this).data("id")}']`);
        let $price = $(`.productPrice[data-id='${$(this).data("id")}']`);

        if ($input.val() > 1 && $input.val() <= 10) {
            $input.val(function (i, oldval) {
                return --oldval;
            });
        }
    });
});
