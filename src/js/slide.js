function slideOpen() {
    let massive = []

    function massiveBorder() {
        const imagesBorder = document.querySelectorAll('list-obj-img');

        for (let imgBorder of imagesBorder) {
            massive.push(imgBorder);
        }

        const object = new Object(massive)

        console.log(object.ke);
    }

    massiveBorder();

    /*function changeColor() {
        const imgBorder1 = 

        const imagesButton = document.getElementById('img-but');

        for (let imageButton of imagesButton) {
            imageButton.addEventListener('click', (e) => {
            e.preventDefault();
            for (let imageBorder of imagesBorder) {
                
            }

            imagesBorder.classList.remove('list-obj-img_changed');
        })
        }
    }; 

    changeColor() */
}

slideOpen();