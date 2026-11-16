// =========================================================
// ELEMENTS
// =========================================================

const welcome =
    document.getElementById("welcome");

const cover =
    document.getElementById("cover");

const invitation =
    document.getElementById("invitation");


const enterBtn =
    document.getElementById("enterBtn");

const openBtn =
    document.getElementById("openBtn");


const bell =
    document.getElementById("bell");

const vakratunda =
    document.getElementById("vakratunda");

const flute =
    document.getElementById("flute");



// =========================================================
// AUDIO VOLUME
// =========================================================

bell.volume = 0.7;

vakratunda.volume = 0.4;

flute.volume = 0.15;



// =========================================================
// GANESHA → COVER
// =========================================================

enterBtn.addEventListener(
    "click",
    function () {

        console.log(
            "Ganesha button clicked"
        );


        // Bell

        bell.currentTime = 0;

        bell.play().catch(
            function (error) {

                console.log(
                    "Bell error:",
                    error
                );

            }
        );


        // Vakratunda music

        vakratunda.currentTime = 0;

        vakratunda.play().catch(
            function (error) {

                console.log(
                    "Vakratunda error:",
                    error
                );

            }
        );


        // Fade welcome

        welcome.style.opacity = "0";


        // Show cover

        setTimeout(
            function () {

                welcome.classList.remove(
                    "active"
                );

                welcome.style.display =
                    "none";


                cover.classList.add(
                    "active"
                );

                cover.style.display =
                    "flex";

                cover.style.opacity =
                    "1";

            },
            900
        );

    }
);



// =========================================================
// OPEN COVER → INVITATION
// =========================================================

openBtn.addEventListener(
    "click",
    function () {

        console.log(
            "Open button clicked"
        );


        // Start page-turn animation

        cover.classList.add(
            "opening"
        );


        // Stop Vakratunda

        setTimeout(
            function () {

                vakratunda.pause();

                vakratunda.currentTime =
                    0;

            },
            700
        );


        // Show invitation

        setTimeout(
            function () {

                cover.classList.remove(
                    "active"
                );

                cover.style.display =
                    "none";


                invitation.classList.add(
                    "active"
                );

                invitation.style.display =
                    "flex";

                invitation.style.opacity =
                    "1";


                // Start flute

                flute.currentTime = 0;

                flute.play().catch(
                    function (error) {

                        console.log(
                            "Flute error:",
                            error
                        );

                    }
                );

            },
            1500
        );

    }
);