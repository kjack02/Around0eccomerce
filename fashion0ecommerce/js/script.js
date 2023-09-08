//Toggle Reset Button
function toggleResetBtn() {
    const resetBtn = document.querySelector('.reset');
    resetBtn.classList.toggle('active')
}

//Switch Left, Middle, and Right part of Banner
function switchBanner(name) {
    const banner = document.querySelector('#banner');
    if (!banner.classList.contains(name)) {
        banner.className = 'banner';
        banner.classList.add(name)
        // the banner will switch, once the button is toggled.
        toggleResetBtn();
    }
    return;
}

// Reset Button
function resetBanner() {
    const banner = document.querySelector('#banner');
    banner.className = 'banner';
    toggleResetBtn();
}
/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
const selectHeader = document.querySelector('#header');
const backToTop = document.querySelector('.back-to-top');
if(selectHeader) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled');
            backToTop.classList.add('active');
        } else {
            selectHeader.classList.remove('header-scrolled');
            backToTop.classList.remove('active');
        }
    };
    window.addEventListener('load', headerScrolled);
    document.addEventListener('scroll', headerScrolled);
};

//Scroll back to top of the page
function scrollToTop() {
    window.scrollTo(0, 0);
}

// toggle menu on mobile view
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
    menu.classList.toggle('.active');
    navMobile.classList.toggle('active');
}