//var display = document.querySelector("#numberDisplay").innerText = 0;

const btn = document.querySelectorAll("button");

var cache = document.querySelector(".cache");
var displayNumber = document.querySelector("#numberDisplay");
var op;

btn.forEach((element, index) => {
    element.addEventListener("click", (e) => {

        if (displayNumber.innerText.length > 6)
            displayNumber.classList.add("displayFontSize10")
        else if (displayNumber.innerText.length <= 6)
            displayNumber.classList.remove("displayFontSize10")

        //console.log(e.target.innerText)

        switch (e.target.innerText) {
            case "C":
                deleteAll()
                break;
            case "CE":
                deleteCe()
                break;
            case "X":
                op = e.target.innerText;
                cache.innerText = `${displayNumber.innerText} x`;
                displayNumber.innerText = null;
                break;
            case "+":
                    op = e.target.innerText;
                    cache.innerText = `${displayNumber.innerText} +`;
                    displayNumber.innerText = null;
                    break;
            case "-":
                op = e.target.innerText;
                cache.innerText = `${displayNumber.innerText} -`;
                displayNumber.innerText = null;
                break;
            case "÷":
                op = e.target.innerText;
                cache.innerText = `${displayNumber.innerText} ÷`;
                displayNumber.innerText = null;
                break;
            case "=":
                displayNumber.innerText = Op(op, cache.innerText.split(" ")[0], displayNumber.innerText)
                cache.innerText = null;
                break;
            case ",":
                if(displayNumber.innerText.includes(","))
                    return null;
                else
                displayNumber.innerText += e.target.innerText;
                break;
            case "◄":
                displayNumber.innerText = displayNumber.innerText.slice(0, -1);
                break;

            case "%":
                displayNumber.innerText = Op(e.target.innerText, cache.innerText.split(" ")[0], displayNumber.innerText)
                break;
            

            default:
                if(displayNumber.innerText.length > 10){
                    return null;
                }else{
                    displayNumber.innerText += e.target.innerText;
                }
                break;
        }
    })
})

const deleteAll = () => {
    displayNumber.innerText = null;
    cache.innerText = null;
}

const deleteCe = () => {
    displayNumber.innerText = null;
}
const Op = (type,a,b) => {
    var value1 = a.replace(",",".")
    var value2 = b.replace(",",".")
    switch (type){
        case "X":
            return value1*value2;
        case "+":
            return parseInt(value1)+parseInt(value2);
        case "-":
            return value1-value2;
        case "÷":
            return (value1/value2).toFixed(2);
        case "%":
            return (value1*value2/100);
    }
}
/*document.querySelector("#percent").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#ce").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#c").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#back").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#seven").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#eight").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#nine").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#x").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#four").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#five").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#six").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#minus").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#one").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#two").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#tree").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#plus").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#division").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#zero").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#comma").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})

document.querySelector("#equal").addEventListener("click", (e) =>{
    console.log(e.target.innerText);
})*/