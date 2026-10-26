
const filterLinks = document.querySelectorAll('.filter-link');
const products = document.querySelectorAll('.product');
const noProducts = document.getElementById('no-products');

let activeCategory = 'all';
let activeBrand = 'all';

function applyFilters() {
  let visibleCount = 0;

  products.forEach(product => {
    const category = product.dataset.category;
    const brand = product.dataset.brand;

    const matchesCategory =
      activeCategory === 'all' || category === activeCategory;

    const matchesBrand =
      activeBrand === 'all' || brand === activeBrand;

    const visible = matchesCategory && matchesBrand;

    product.classList.toggle('hidden', !visible);

    if (visible) visibleCount++;
  });

  if (noProducts) {
    noProducts.hidden = visibleCount > 0;
  }
}

filterLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const isCategory = link.classList.contains('category-filter');
    const id = link.id;

    if (isCategory) {
      activeCategory = id.replace('filter-', '');
      document.querySelectorAll('.category-filter').forEach(item => {
        item.classList.remove('active');
      });
    } else {
      activeBrand = id.replace('brand-', '');
      document.querySelectorAll('.brand-filter').forEach(item => {
        item.classList.remove('active');
      });
    }

    link.classList.add('active');
    applyFilters();
  });
});

applyFilters();
