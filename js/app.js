const load = document.querySelector('#loader')
window.addEventListener('load', (e) => {
    loader.classList.add('load')
    e.stopPropagation()
})
window.addEventListener('load', (e) => {
       document.querySelector('.w-gallery').classList.add('is-active')
       e.stopPropagation
  
})
