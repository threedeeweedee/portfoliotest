document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed'); // Log when the DOM is ready

    // Select the modal and the modal image
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal img');

    console.log('Modal:', modal); // Log to confirm the modal exists
    console.log('Modal Image:', modalImg); // Log to confirm the modal image exists

    // Select all "after" images
    const portfolioImages = document.querySelectorAll('.portfolio-image-after');
    console.log('Portfolio Images:', portfolioImages); // Log the NodeList of images

    // Check if images are found
    if (portfolioImages.length === 0) {
        console.warn('No .portfolio-image-after elements found!');
        return; // Exit the function if no images are found
    }

    // Add click event listener to each "after" image
    portfolioImages.forEach((image) => {
        console.log('Adding click event to image:', image.src); // Log each image src

        image.addEventListener('click', () => {
            console.log('Image clicked:', image.src); // Log the clicked image src
            modal.style.display = 'flex'; // Show the modal
            modalImg.src = image.src; // Set the clicked image as the modal image
            console.log('Modal is now visible');
        });
    });

    // Close the modal when clicking outside the image
    modal.addEventListener('click', () => {
        console.log('Modal clicked, closing modal'); // Log when the modal is clicked
        modal.style.display = 'none'; // Hide the modal
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal img');
    const body = document.body;

    const portfolioImages = document.querySelectorAll('.portfolio-image-after');

    if (portfolioImages.length === 0) {
        console.warn('No .portfolio-image-after elements found!');
        return;
    }

    portfolioImages.forEach((image) => {
        image.addEventListener('click', () => {
            modal.style.display = 'flex'; // Show the modal
            modalImg.src = image.src; // Set the clicked image as the modal image
            body.classList.add('no-scroll'); // Disable scrolling
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
        body.classList.remove('no-scroll'); // Enable scrolling
    });
});

const boxContainer = document.getElementById('box-effect');

// Add a mousemove event listener to the box container
boxContainer.addEventListener('mousemove', (event) => {
  const { width, height, left, top } = boxContainer.getBoundingClientRect();

  // Calculate the position of the mouse relative to the center of the box container
  const mouseX = event.clientX - left - width / 2; // X position relative to box center
  const mouseY = event.clientY - top - height / 2;  // Y position relative to box center

  // Calculate rotation angles (scaling for sensitivity)
  const rotateX = -(mouseY / height) * 30; // Rotate up/down
  const rotateY = (mouseX / width) * 30;  // Rotate left/right

  // Apply the rotation to the box container
  boxContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});


