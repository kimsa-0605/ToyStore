export function subscribeSection() {
    const subscribeSection = document.getElementById('contact-container');
    if (!subscribeSection) return; 
    subscribeSection.innerHTML = `
        <div class="contact-content">
            <div class="contact-left-content">
                <div class="fly-button">
                    <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf56dcace69cfd39b34f7a_paperplane-icon-white.svg" alt="">
                </div>
                <p class="contact-left-text">
                    Subscribe to our newsletter
                    <br>& get <span>10% discount!</span>
                </p>
            </div>
            <div class="contact-right-content">
                <input type="text" placeholder="Enter your email address">
                <div class="contact-right-button">Subcribe</div>
            </div>
        </div>
    `;
}
