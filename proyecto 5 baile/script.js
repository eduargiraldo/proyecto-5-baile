let esqueleto = "off"
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonSonido  = new Audio ('../proyecto 5 baile/sound/botonbailar.mp3');
let botonAudio = new Audio ('../proyecto 5 baile/sound/audio.mp3');

function bailar(){
    if (esqueleto == "off"){
        esqueleto= "on";
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click',()=>{
            
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.play();
        })
        console.log("On");
    }else{
        esqueleto="off"
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.pause();
        })
        console.log("Off");

    }
    
}