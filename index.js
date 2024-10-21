fetch('share/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})
.catch(error => console.error('Error loading the footer:', error));

fetch('share/header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
})

fetch('share/home.html')
.then(response => response.text())
.then(data => {
    document.getElementById('home').innerHTML = data;
})

fetch('share/sidebar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('sidebar').innerHTML = data;
})

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {

    data.products.forEach(product => {

        document.getElementById('productCard').innerHTML += `
    
            <div  class="col-12 col-md-6 col-lg-3">
                <div class="card  text-center " style="width: 16rem; min-height:350px;max-height:380px; margin:10px;">
                  <div class="new-tag">New</div>
                    <img class="mx-auto" src="${product.thumbnail}"alt="${product.title}" style="width: 200px;">
                    <div class="card-body">
                    <h6 class="card-title">${product.title}</h6>
                    <p class="card-text" style="white-space: nowrap;width: 200px;overflow: hidden;text-overflow:ellipsis;"  >${product.description}</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>









        `;
    });
});





fetch('share/productCard.html')
.then(response => response.text())
.then(data => {
    document.getElementById('productCard').innerHTML = data;
})