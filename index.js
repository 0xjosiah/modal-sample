const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const ctaVideo = 'https://www.youtube.com/embed/lSkiUA6WCAE'
const ctaVideo2 = 'https://www.youtube.com/embed/71FDrI4DJfM'

const videoPlayer = document.getElementById('video-player')


openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
        videoPlayer.getAttribute('src', 'https://www.youtube.com/embed/lSkiUA6WCAE')
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

window.addEventListener('keydown', (event) => {
    if(event.key == 'Escape') {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    }
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function addVidSrc () {

}

// ENDED AT 14:13