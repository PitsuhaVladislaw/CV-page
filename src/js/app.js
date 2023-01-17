function slideOpen() {
    let screenImage = document.getElementById('src-image');
    
    let imgButn4 = document.getElementById('img-but4');
    let imgButn5 = document.getElementById('img-but5');

    function changeColorBut4() {
        let imgScr4 = document.createElement('img');
        let headImage = document.createElement('h2');
        let textImage = document.createTextNode('After viewing, click the image')
        
        headImage.appendChild(textImage);

        headImage.classList.add('text-image')
        imgScr4.classList.add('img-scr4');

        imgButn4.addEventListener('click', (e) => {
            e.preventDefault();
            imgButn4.classList.toggle('list-obj-img_changed');
            if(imgButn4.classList.contains('list-obj-img_changed')) {
                screenImage.appendChild(headImage);
                screenImage.appendChild(imgScr4);
            } else {
                screenImage.removeChild(headImage)
                screenImage.removeChild(imgScr4);
            }
        });
    }

    function changeColorBut5() {
        let imgScr5 = document.createElement('img');
        let headImage = document.createElement('h2');
        let textImage = document.createTextNode('After viewing, click the image')
        
        headImage.appendChild(textImage);

        headImage.classList.add('text-image')
        imgScr5.classList.add('img-scr5');

        imgButn5.addEventListener('click', (e) => {
            e.preventDefault();
            imgButn5.classList.toggle('list-obj-img_changed');
            if(imgButn5.classList.contains('list-obj-img_changed')) {
                screenImage.appendChild(headImage);
                screenImage.appendChild(imgScr5);
            } else {
                screenImage.removeChild(headImage);
                screenImage.removeChild(imgScr5);
            }
        });
    }

    changeColorBut4()
    changeColorBut5()
};

slideOpen();

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

workButton();