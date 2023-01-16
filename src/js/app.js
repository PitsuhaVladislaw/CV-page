setTimeout(function workButton() {
    const button = document.getElementById('menu-btn');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        button.classList.toggle('menu-btn_active');
        setTimeout(openMenu(), 1000);   
    })

    function openMenu() {
        const menu = document.getElementById('head-menu');
        
        menu.classList.toggle('head-menu_open');
    }
}, 500);

workButton()