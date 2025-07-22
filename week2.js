document.addEventListener('DOMContentLoaded', function() {
  const categoryCards = document.querySelectorAll('.category-card');
  const productCards = document.querySelectorAll('.product-card');

  categoryCards.forEach(card => {
    card.addEventListener('click', function() {
      const selectedCategory = card.getAttribute('data-category');
      productCards.forEach(product => {
        if (selectedCategory === null) {
          product.style.display = 'block';
        } else if (product.getAttribute('data-category') === selectedCategory) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });
});

document.getElementById('loadMore')?.addEventListener('click', () => {
  alert('Load more products coming soon...');
});
