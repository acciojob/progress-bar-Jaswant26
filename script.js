//your JS code here. If required.
 const circles = document.querySelectorAll('.circle');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentIndex = 0;

    // Add event listener to the "Next" button
    nextButton.addEventListener('click', () => {
      if (currentIndex < circles.length - 1) {
        circles[currentIndex].classList.remove('active');
        currentIndex++;
        circles[currentIndex].classList.add('active');
        prevButton.disabled = false;
        if (currentIndex === circles.length - 1) {
          nextButton.disabled = true;
        }
      }
    });

    // Add event listener to the "Previous" button
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        circles[currentIndex].classList.remove('active');
        currentIndex--;
        circles[currentIndex].classList.add('active');
        nextButton.disabled = false;
        if (currentIndex === 0) {
          prevButton.disabled = true;
        }
      }
    });