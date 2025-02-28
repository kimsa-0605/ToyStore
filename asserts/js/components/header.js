export function generateHeader() {
    const header = document.getElementById('header-container');
    if (!header) return; 
    header.innerHTML = `
        <div class="header-content">
            <div class="header-contact">
                <div class="header-contact-content">
                    <div class="header-contact-phonenumber-email">
                        <span class="header-contact-phonenumber">
                            Call Us: +1 213 974-5898
                        </span>
                        <span class="header-contact-email">
                            Email: <u>toystore@template.com</u>
                        </span>
                    </div>
                    <div class="header-contact-icons">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-pinterest"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div class="header-nav-bar">
                <div class="header-nav-content">
                    <a href="/pages/home.html" class="header-logo">ToyStore</a>
                    <div class="header-nav-cart">
                        <div class="header-nav-title">
                            <a class="header-nav-title-hover" href="/pages/catalog.html">Catalog</a>
                            <a class="header-nav-title-hover" href="/pages/delivery.html">Delivery</a>
                            <a class="header-nav-title-hover" href="/pages/about.html">About</a>
                            <a class="header-nav-title-hover" href="/pages/contacts.html">Contacts</a>
                        </div>
                        <div class="header-cart-icon">
                            <span>Cart</span>
                            <i class="bi bi-cart"></i>
                            <span class="quantity-items-cart"><p>0</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
