
function redirectToSignInPage() {

    window.location.href = "sigin.html";
}


document.addEventListener("DOMContentLoaded", function () {
    const signInLink = document.querySelector(".navItem2");
    signInLink.addEventListener("click", redirectToSignInPage);
    

    const aboutUsLink = document.querySelector(".navItem");
    aboutUsLink.addEventListener("click", function () {

        window.location.href = "index.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {



    const featuresLink = document.querySelector(".navItem3");
    featuresLink.addEventListener("click", function () {
        window.location.href = "features.html";
    });


    const helpLink = document.querySelector(".navItem"); 
    helpLink.addEventListener("click", function () {
        window.location.href = "help.html";
    });
});
