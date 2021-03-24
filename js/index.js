function modalRegister() {
  const main = document.getElementById("modal");
  if (main) {
    const modal = document.createElement("div");
    modal.onclick = function (e) {
      if (e.target.closest(".auth-form__controls-back")) {
        main.removeChild(modal);
      }
      if (e.target.closest(".auth-form__switch-btn")) {
        modalLogin();
        main.removeChild(modal);
      }
    };
    modal.classList.add("modal");
    modal.innerHTML = `
  <div class="modal__overlay"></div>
  <div class="modal__body"> 
    <!-- Register form -->
    <div class="auth-form">
      <div class="auth-form__container">
      <div class="auth-form__header">
      <h3 class="auth-form__heading">Đăng ký</h3>
      <span class="auth-form__switch-btn">Đăng nhập</span>
      </div>
    <div class="auth-form__form">
      <div class="auth-form__group">
        <input type="text" class="auth-form__input" placeholder="Nhập Email">
      </div>
      <div class="auth-form__group">
        <input type="password" class="auth-form__input" placeholder="Nhập Password">
      </div>
      <div class="auth-form__group">
        <input type="password" class="auth-form__input" placeholder="Nhập lại password">
      </div>
    </div>
    <div class="auth-form__aside">
      <p class="auth-form__policy-text">
        Bằng việc đăng kí, bạn đã đồng ý với Shopee về
      <a class="auth-form__policy-link">Điều khoản dịch vụ </a>&
      <a class="auth-form__policy-link">Chính sách bảo mật </a>
      </p>
      </div>
    <div class="auth-form__controls">
      <button class="btn btn--normal auth-form__controls-back">TRỞ LẠI</button>
      <button class="btn btn--primary">ĐĂNG KÝ</button>
    </div>
      </div>
    <div class="auth-form__socials">
      <a href="" class="btn btn--size-s btn--with-icon">
        <em class="fab fa-facebook-square"></em>
        Kết nối với Facebook
      </a>
      <a href="" class="btn btn--size-s btn--with-icon">
        <em class="fab fa-google-plus-g"></em>
        Kết nối với Google
      </a>
    </div> 
  </div> 
      `;
    main.appendChild(modal);
  }
}

function modalLogin() {
  const main = document.getElementById("modal");
  if (main) {
    const modal = document.createElement("div");
    modal.onclick = function (e) {
      if (e.target.closest(".auth-form__controls-back")) {
        main.removeChild(modal);
      }
      if (e.target.closest(".auth-form__switch-btn")) {
        modalRegister();
        main.removeChild(modal);
      }
    };
    modal.classList.add("modal");
    modal.innerHTML = `
     <div class="modal__overlay"></div>
        <div class="modal__body"> 
        <div class="auth-form">
      <div class="auth-form__container">
      <div class="auth-form__header">
      <h3 class="auth-form__heading">Đăng nhập</h3>
      <span class="auth-form__switch-btn">Đăng ký</span>
      </div>
    <div class="auth-form__form">
      <div class="auth-form__group">
        <input type="text" class="auth-form__input" placeholder="Nhập Email">
      </div>
      <div class="auth-form__group">
        <input type="password" class="auth-form__input" placeholder="Nhập Password">
      </div>
    </div>
    <div class="auth-form__aside">
     <div class="auth-form__help">
       <a href="" class="auth-form__help-link auth-form__link--separate">Quên mật khẩu</a>
       <span class="auth-form__help-separate"></span>
       <a href="" class="auth-form__help-link">Cần trợ giúp</a>
     </div>
      </div>
    <div class="auth-form__controls">
      <button class="btn btn--normal auth-form__controls-back">TRỞ LẠI</button>
      <button class="btn btn--primary">ĐĂNG NHẬP</button>
    </div>
      </div>
    <div class="auth-form__socials">
      <a href="" class="btn btn--size-s btn--with-icon">
        <em class="fab fa-facebook-square"></em>
        Kết nối với Facebook
      </a>
      <a href="" class="btn btn--size-s btn--with-icon">
        <em class="fab fa-google-plus-g"></em>
        Kết nối với Google
      </a>
    </div> 
  </div> 
`;
    main.appendChild(modal);
  }
}

function addProduct(obj) {
  const mainProduct = document.getElementById("home-product");
  if (mainProduct) {
    const containerProduct = document.createElement("div");
    obj.map((item) => {
      console.log(item);
      containerProduct.classList.add("grid__row");
      containerProduct.innerHTML += `
                <div class="grid__col-5">
                  <a href="" class="home-product-item">
                    <div class="home-product-item__img" style="background-image: url(${item.img})"></div>
                    <h4 class="home-product-item__name">${item.name}</h4>
                    <div class="home-product-item__pricce">
                      <span class="home-product-item__price-old">${item.priceOld}đ</span>
                      <span class="home-product-item__price-current">${item.priceCurrent}đ</span>
                    </div>
                    <div class="home-product-item__action">
                      <span class="home-product-item__like home-product-item__like--liked">
                        <em class="home-product-item__like--empty far fa-heart"></em>
                        <em class="home-product-item__like--fill fas fa-heart"></em>
                      </span>
                      <div class="home-product-item__rating">
                        <em class="home-product-item__rating--selected fas fa-star "></em>
                        <em class="home-product-item__rating--selected fas fa-star"></em>
                        <em class="home-product-item__rating--selected fas fa-star"></em>
                        <em class="home-product-item__rating--selected fas fa-star"></em>
                        <em class="fas fa-star"></em>
                      </div>
                      <span class="home-product-item__sold"> ${item.sold} đã bán</span>
                    </div>
                    <div class="home-product-item__origin">
                      <span class="home-product-item__brand">${item.brand}</span>
                      <span class="home-product-item__origin-name">${item.origin}</span>
                    </div>
                    <div class="home-product-item__favouite">
                      <span>
                      <em class="fas fa-check"></em>
                      Yêu thích</span>
                    </div>
                    <div class="home-product-item__sale-off">
                      <span class="home-product-item__porcent">${item.discount}%</span>
                      <span class="home-product-item__lable">GIẢM</span>
                    </div>
                  </a>
                </div>
        `;
      return mainProduct.appendChild(containerProduct);
    });
  }
}

var product = [
  {
    id: 1,
    name: "Nike Jordan 1 Mid Satin 'Grey Toe' 852542-011",
    priceOld: "6.000.000",
    priceCurrent: "5,900,000",
    img:
      "https://product.hstatic.net/1000282067/product/568989_01.jpg_688c374e6bd9461cbc7fdbfd5cc9001b_master.jpeg",
    origin: "Pháp",
    brand: "Nike",
    discount: 6,
    sold: 10,
  },
  {
    id: 5,
    name: "Gucci Túi Clutch 2 Zippy Mono Màu Đen",
    priceOld: "15.500.000",
    priceCurrent: "14.500.0000",
    img:
      "https://p.ipricegroup.com/b149327d2067f4122947cefa70ced5736f8a59fe_0.jpg?position=3",
    origin: "Pháp",
    brand: "Gucci",
    discount: 6,
    sold: 3,
  },
  {
    id: 2,
    name: "GIÀY ULTRABOOST DNA X DISNEY",
    priceOld: "4.200.000",
    priceCurrent: "2.100.000",
    img:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/3b08c0bf07214183acaeabb100a9c5f3_9366/Giay_Ultraboost_DNA_x_Disney_DJen_FV6050_01_standard.jpg",
    origin: "Pháp",
    brand: "Adidas",
    discount: 50,
    sold: 100,
  },
  {
    id: 3,
    name: "Balenciaga Speed Trainer Mid 'Black' 458653-W05G0-1000",
    priceOld: " 22,000,000",
    priceCurrent: "21,500,000",
    img:
      "https://product.hstatic.net/1000282067/product/458653w05g01000_d4c8b6bc6e0f4d60980e59ee9a62b711_master.png",
    origin: "Pháp",
    brand: "Balenciaga",
    discount: 5,
    sold: 2,
  },
  {
    id: 4,
    name: "Giày GUCCI Flashtrek Sneaker with Removable crystals",
    priceOld: "35.600.000",
    priceCurrent: "32.000.000",
    img:
      "https://cdn-images.farfetch-contents.com/14/02/40/93/14024093_21713979_1000.jpg",
    origin: "Pháp",
    brand: "Gucci",
    discount: 10,
    sold: 1,
  },
];
addProduct(product);
