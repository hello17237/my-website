let target;

function intersectionHandler(entries, observer) {
    entries.forEach(
        (entry) => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.ProjectsElem')[0].classList.add('fadeInRight');
                document.querySelectorAll('.ProjectsElem')[1].classList.add('fadeInRight');
                document.querySelectorAll('.ProjectsElem')[2].classList.add('fadeInRight');
            }
        }
    )
}

function createObserver() {
    let observer;

    let options = {
        threshold: 0.5
    }

    observer = new IntersectionObserver(intersectionHandler, options);
    observer.observe(target)
}

window.addEventListener('load', (e) => {
    target = document.querySelector('.ProjectsList')
    createObserver();
})