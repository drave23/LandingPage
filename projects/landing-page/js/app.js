

// build dynamic nav
function createNavBasedOnSections() {
    const nav = document.querySelector("#navbar__list");
    const sections = document.querySelectorAll("section");

    for (let section of sections) {
        const sectionList = document.createElement('li');
        sectionList.innerHTML =
            `<a href="#${section.id}" class="menu__link ${section.id}" >
                    ${section.dataset.nav}</a>`
        nav.appendChild(sectionList);
    }

}

function inViewPoint(element) {
    const bounding = element.getBoundingClientRect();

    return bounding.top < 300 && bounding.top > 0;

}

function hideNav() {
    const nav = document.getElementsByClassName("page__header")
    nav[0].style.display = 'none';
}

// add event handler to manage active state
function manageActiveState() {
    const sections = document.querySelectorAll("section");
    window.addEventListener('scroll', function () {


        for (let section of sections) {
            let currLi = document.getElementsByClassName(section.id);
            if (inViewPoint(section)) {
                currLi[0].classList.add("active");
            } else {
                currLi[0].classList.remove("active");

            }


        }
    })

}


// main
createNavBasedOnSections();
manageActiveState();





