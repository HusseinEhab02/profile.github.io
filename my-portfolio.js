let text = document.querySelector(".texttwo")

let arr = ["I am a webdeveloper"]
let charindex = 0

function updtext(){
    charindex++
    text.innerText = arr[0].slice(0,charindex)
    setTimeout(() => {
        updtext()
    }, 250);
    if (charindex == arr[0].length){
        charindex=0
    }
}
updtext()