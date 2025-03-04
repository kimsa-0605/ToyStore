import { generateHeader } from '/asserts/js/components/header.js';
import { generateFooter } from '/asserts/js/components/footer.js';
import { generateInstagramSection } from '/asserts/js/components/instagramSection.js';
import { generateSubscribeSection } from '/asserts/js/components/subscribeSection.js';
import { generateBreadcrumb } from '/asserts/js/components/breadcrumbNav.js'
import { generateVideoSection } from '/asserts/js/components/videoSection.js';
import { generateEcommerceTemplate } from '/asserts/js/components/ecommerceTemplate.js';

document.addEventListener("DOMContentLoaded", () => {
    generateHeader();
    generateFooter();
    generateInstagramSection();
    generateSubscribeSection();
    generateBreadcrumb([
        { name: "Home", url: "/pages/index.html" },
        { name: "About", url: "/pages/about.html" }
    ]);
    generateVideoSection();
    generateEcommerceTemplate('Beautifully Designed', 'Get It for FREE!');
});