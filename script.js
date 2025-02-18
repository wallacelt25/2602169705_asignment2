// Animate Menu
const menuItems = document.querySelectorAll('.menu li a');
menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.1)';
  });
  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});

// Dynamic Rating System
const stars = document.querySelectorAll('.stars span');
const ratingFeedback = document.getElementById('rating-feedback');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = star.getAttribute('data-value');
    ratingFeedback.textContent = `Your rating: ${value} stars`;

    stars.forEach(s => s.classList.remove('active'));
    for (let i = 0; i < value; i++) {
      stars[i].classList.add('active');
    }
  });
});