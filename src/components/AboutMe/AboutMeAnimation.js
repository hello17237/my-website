let options = {
    threshold: 0.5
}

let target;

function intersectionHandler(entries, observer) {
    entries.forEach(
        (entry) => {
            if(entry.isIntersecting) {
                document.querySelector('.AboutMeText').classList.add('fadeInBot')
            }
        }
    )
}

window.addEventListener('load', (e) => {
    target = document.querySelector('.AboutMePage');
    const observer = new IntersectionObserver(intersectionHandler, options);
    observer.observe(target);
})