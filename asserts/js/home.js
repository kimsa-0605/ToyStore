import { header } from '/asserts/js/components/header.js';
import { footer } from '/asserts/js/components/footer.js';
import { instagramSection } from '/asserts/js/components/instagramSection.js';
import { subscribeSection } from '/asserts/js/components/subscribeSection.js';
import { ecommerceTemplate } from '/asserts/js/components/ecommerceTemplate.js';
import { videoSection } from '/asserts/js/components/videoSection.js';

document.addEventListener("DOMContentLoaded", () => {
    header();
    footer();
    instagramSection();
    subscribeSection();
    ecommerceTemplate('Available for FREE!', 'GET IT NOW!');
    videoSection();

});
