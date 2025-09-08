function openNewPage() {
    window.open('new-page.html', '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    const triggerElement = document.getElementById('open-page');
    if (triggerElement) {
        triggerElement.addEventListener('click', openNewPage);
    }
});