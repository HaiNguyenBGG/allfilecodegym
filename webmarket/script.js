fetch('/products')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        data.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-info">
                            <h4>${product.name}</h4>
                            <p>Giá: ${product.price}</p>
                        </div>
                    `;
            productList.appendChild(productItem);
        });
    })
    .catch(error => console.error('Error fetching products:', error));