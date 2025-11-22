function playSound(key){
    let file = "";

    if(key === "q") file ="28.mp3";
    else if(key === "w") file ="29.mp3";
    else if(key === "e") file ="30.mp3";
    else if(key === "r") file ="31.mp3";
    else if(key === "t") file ="32.mp3";
    else if(key === "y") file ="33.mp3";
    else if(key === "u") file ="34.mp3";
    else if(key === "i") file ="35.mp3";
    else if(key === "o") file ="36.mp3";
    else if(key === "p") file ="37.mp3";
    else if(key === "a") file ="38.mp3";
    else if(key === "s") file ="39.mp3";
    else if(key === "d") file ="40.mp3";
    else if(key === "f") file ="41.mp3";
    else if(key === "g") file ="42.mp3";
    else if(key === "h") file ="43.mp3";
    else if(key === "j") file ="44.mp3";
    else if(key === "k") file ="45.mp3";
    else if(key === "l") file ="46.mp3";
    else if(key === "z") file ="47.mp3";
    else if(key === "x") file ="48.mp3";
    else if(key === "c") file ="49.mp3";
    else if(key === "v") file ="50.mp3";
    else if(key === "b") file ="51.mp3";
    else if(key === "n") file ="52.mp3";
    else if(key === "m") file ="53.mp3";
    else if(key === "1") file ="54.mp3";
    else if(key === "2") file ="55.mp3";
    else if(key === "3") file ="56.mp3";
    else if(key === "4") file ="57.mp3";
    else if(key === "5") file ="58.mp3";
    else if(key === "6") file ="59.mp3";
    else if(key === "7") file ="60.mp3";
    else if(key === "8") file ="61.mp3";
    else if(key === "9") file ="62.mp3";
    else if(key === "10") file ="63.mp3";

    if(!file) return;

    new Audio(file).play();
}

function activeKey(elem){
    elem.classList.add("active");
    setTimeout(() => elem.classList.remove("active"),120);
}

document.querySelectorAll(".key, .key-black").forEach(k => {
    k.addEventListener('click', function(){
        playSound(k.textContent.trim().toLowerCase());
    });
});

document.addEventListener('keydown', (e)=>{
    const key = e.key.toLowerCase();

    const elem = [...document.querySelectorAll('.key, .key-black')].find(x => x.textContent.trim().toLowerCase() === key);

    if(elem){
        playSound(key);
        activeKey(elem);
    }
});