window.addEventListener('load', (e) => {
    document.querySelector('#loader').classList.add('load')
    document.querySelector('.w-gallery').classList.add('is-active')
    e.stopPropagation()
})
