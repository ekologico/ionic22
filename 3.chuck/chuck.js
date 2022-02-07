



let url_destino = "https://api.chucknorris.io/jokes/random"


fetch(url_destino)
    .then(response => response.json()) //desserializa: pasa de texto a json
    .then(frase_chuck => {
        let frase = frase_chuck.value
        let icono = frase_chuck.icon_url
        pintar_frase(frase)
        pintar_icono(icono)
        traducir(frase)
    
    });



function pintar_icono(icono) {
    document.getElementById("icono").innerHTML = "<img src='" + icono + "'> "

}

function pintar_frase(frase) {
    document.getElementById("frase").innerHTML = frase

}


    async function traducir(frase) {
        const res = await fetch("https://libretranslate.com/translate", {
            method: "POST",
            body: JSON.stringify({
                q: frase,
                source: "en",
                target: "es",
                format: "text"
            
            }),
            headers: { "Content-Type": "application/json" }
        });

        console.log(await res.json());
    }

/*
let  url ="https://api.mymemory.translated.net/get?q="+frase+"&langpair=en|es"

fetch(url)
.then(response => response.json()) //desserializa: pasa de texto a json
.then(frase_chuck_traducida => {
    console.log(frase_chuck_traducida)
    let frase = frase_chuck_traducida.responseData.translatedText
    
    pintar(frase, "")
});
}
*/

