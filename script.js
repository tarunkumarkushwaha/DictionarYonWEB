let title = document.getElementById('title')
let discription = document.getElementById("discription")
let searchbtn = document.getElementById('searchbtn')
let searchbar = document.getElementById("searchbar")

let worddata = async () => {
    if (searchbar.value) {
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
        let qwery = url + searchbar.value
        const response = await fetch(qwery);
        var data = await response.json();
        console.table(data);
        title.innerText = data[0].word
        console.log(discription)
        discription.innerText = "Noun - " + data[0].meanings[0].definitions[0].definition
    }
    else {
        alert("enter any text")
    }
}
searchbtn.addEventListener('click', worddata)

