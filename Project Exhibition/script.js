const images = document.querySelectorAll('.slide-image');
let currentImageIndex = 0;
const slideInterval = 3000; 

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}
function nextImage() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);
}
showImage(currentImageIndex);
setInterval(nextImage, slideInterval);