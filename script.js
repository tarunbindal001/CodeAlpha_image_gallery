let currentImageIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.gallery-image');
    const totalImages = images.length;

    if (index >= totalImages) {
        currentImageIndex = 0;
    } else if (index < 0) {
        currentImageIndex = totalImages - 1;
    } else {
        currentImageIndex = index;
    }

    images.forEach((image, i) => {
        image.style.transform = `translateX(-${currentImageIndex * 100}%)`;
    });
}

function nextImage() {
    showImage(currentImageIndex + 1);
}

function prevImage() {
    showImage(currentImageIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentImageIndex);
});
