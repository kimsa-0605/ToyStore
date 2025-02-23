import { header } from '/asserts/js/components/header.js';
import { footer } from '/asserts/js/components/footer.js';
import { instagramSection } from '/asserts/js/components/instagramSection.js';
import { subscribeSection } from '/asserts/js/components/subscribeSection.js';

document.addEventListener("DOMContentLoaded", () => {
    header();
    footer();
    instagramSection();
    subscribeSection();
});