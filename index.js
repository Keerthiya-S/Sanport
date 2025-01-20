// JavaScript to handle the toggle
document.querySelectorAll('.topic-image').forEach((image) => {
  image.addEventListener('click', function () {
    const targetId = this.getAttribute('data-target');
    const additionalImages = document.getElementById(targetId);

    // Toggle visibility of the additional images
    if (additionalImages.classList.contains('d-none')) {
      additionalImages.classList.remove('d-none');
    } else {
      additionalImages.classList.add('d-none');
    }
  });
});

  