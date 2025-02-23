import { generateHeader } from '/asserts/js/components/header.js';
import { generateFooter } from '/asserts/js/components/footer.js';
import { generateInstagramSection } from '/asserts/js/components/instagramSection.js';
import { generateSubscribeSection } from '/asserts/js/components/subscribeSection.js';
import { generateEcommerceTemplate } from '/asserts/js/components/ecommerceTemplate.js';
import { generateVideoSection } from '/asserts/js/components/videoSection.js';

document.addEventListener("DOMContentLoaded", () => {
    generateHeader();
    generateFooter();
    generateInstagramSection();
    generateSubscribeSection();
    generateEcommerceTemplate('Available for FREE!', 'GET IT NOW!');
    generateVideoSection();

});
