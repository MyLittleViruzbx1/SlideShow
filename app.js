window.addEventListener('load', ()=>{


    let imagenes = [];

    imagenes[0] = './comi.jpg';
    imagenes[1] = './for.jpg';
    imagenes[2] = './sor.jpg';
    imagenes[3] = './splash.png';

    let tiempo = 1000;
    let indice = 0;

    const changeImg = () =>{

        document.slider.src = imagenes[indice];

        if(indice <3){
            indice++;
        }else{
            indice = 0
        }
    }

changeImg();            

    setInterval(changeImg, tiempo);

});
