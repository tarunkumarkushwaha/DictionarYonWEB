let title = document.getElementById('title')
let image = document.getElementById('image')
let noun = document.getElementById("noun")
let verb = document.getElementById("verb")
let searchbtn = document.getElementById('searchbtn')
let searchbar = document.getElementById("searchbar")
let synonyms = document.getElementById("synonyms")
let displayboard = document.getElementById("displayboard")
let soundicon = document.createElement('img')

var data
let worddata = async () => {
    if (searchbar.value) {
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
        let imageurl = "https://source.unsplash.com/featured/200x200?"
        let imagequery = imageurl + searchbar.value
        let qwery = url + searchbar.value
        const response = await fetch(qwery);
        data = await response.json();
        console.table(data);
        let arr = data[0].word.split(" ")
        let arr2 = arr.map((n) => n.slice(0, 1).toUpperCase().concat(n.slice(1).toLowerCase()))
        soundicon.setAttribute("src", "download.png")
        soundicon.setAttribute("class", "soundicon")
        soundicon.setAttribute("alt", "pronounciation")
        soundicon.setAttribute("title", "pronounciation")
        soundicon.setAttribute("onclick", "pronounciation()")
        title.innerHTML = arr2
        title.append(soundicon)
        noun.innerText = data[0].meanings[0].definitions[0].definition + "," +
            data[1].meanings[0].definitions[0].definition
        verb.innerText = data[0].meanings[0].definitions[0].definition
        let synofiller = data[0].meanings[0].synonyms.toString()
        synonyms.innerText = synofiller.split(",").map((e) => { return e.concat(" ") })
        image.setAttribute("src", imagequery)
        image.removeAttribute("class")
        displayboard.removeAttribute("class")
        displayboard.setAttribute("class", "flex")
    }
    else {
        alert("enter any text")
    }
}

const pronounciation = () => {
    let sound = new Audio(data[0].phonetics[0].audio)
    sound.play()
}

searchbtn.addEventListener('click', worddata)

