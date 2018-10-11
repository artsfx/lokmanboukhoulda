function aboutme(event) {
    let jumbotron = document.querySelector(".jumbotron-container");
    let aboutme = document.querySelector("#aboutme");
    let aboutmePos = aboutme.getBoundingClientRect().top;
    jumbotron.style.transitionProperty = "all";
    window.scrollBy(0, aboutmePos);
}



function portfolio(event) {
    // let jumbotron = document.querySelector(".jumbotron-container");
    let portfolio = document.querySelector(".portfolio-container");
    let portfolioPos = portfolio.getBoundingClientRect().top;
    // jumbotron.style.transitionProperty = "all";
    window.scrollBy(0, portfolioPos);
}

function contact(event) {
    // let jumbotron = document.querySelector(".jumbotron-container");
    let contact = document.querySelector(".contact-container");
    let contactPos = contact.getBoundingClientRect().top;
    // jumbotron.style.transitionProperty = "all";
    window.scrollBy(0, contactPos);
}