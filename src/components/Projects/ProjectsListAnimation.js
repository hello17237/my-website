function intersectionHandler(entries, observer) {
    entries.forEach(
        (entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInRight')
            }
        }
    )
}

function createObserver(target) {
    let observer;

    let options = {
        threshold: 0.3
    }

    observer = new IntersectionObserver(intersectionHandler, options);
    observer.observe(target)
}

window.addEventListener('load', (e) => {
    for (let i = 0; i < 3; i++) {
        let target = document.querySelectorAll('.ProjectsElem')[i];
        createObserver(target);
    }
})