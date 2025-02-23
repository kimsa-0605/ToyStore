import { generateHeader } from '/asserts/js/components/header.js';
import { generateFooter } from '/asserts/js/components/footer.js';
import { generateInstagramSection } from '/asserts/js/components/instagramSection.js';
import { generateSubscribeSection } from '/asserts/js/components/subscribeSection.js';
import { generateBreadcrumb } from '/asserts/js/components/breadcrumbNav.js'

document.addEventListener("DOMContentLoaded", () => {
    generateHeader();
    generateFooter();
    generateInstagramSection();
    generateSubscribeSection();
    generateBreadcrumb([
        { name: "Home", url: "/pages/home.html" },
        { name: "Catalog", url: "/pages/catalog.html" }
    ]);
});