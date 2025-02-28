export function generateBreadcrumb(pages) {
    let breadcrumbContainer = document.getElementById("breadcrumb-nav");
    if (!breadcrumbContainer) return;
    let breadcrumbHTML = `
        <div class="breadcrumb-nav-content">
            <div class="breadcrumb-nav-blog">
        `;
    pages.forEach((page, index) => {
        if (index > 0) {
            breadcrumbHTML += ` <i class="fa-solid fa-right-long"></i> `;
        }
        breadcrumbHTML += `<a href="${page.url}" class="breadcrumb-nav-link">${page.name}</a>`;
    });
    breadcrumbHTML += `</div></div></div>`;
    breadcrumbContainer.innerHTML = breadcrumbHTML;
}
