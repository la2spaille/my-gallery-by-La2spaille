const load = document.querySelector('#loader')
window.addEventListener('load', (e) => {
    loader.classList.add('load')
    e.stopPropagation()
})
const ratio = .01
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const handleIntersect = function (entries, observer) {
    entries.forEach(function(entry){
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('is-active')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect,options)
window.addEventListener('load', () => {
        observer.observe(document.querySelector('.w-gallery'))
  
})