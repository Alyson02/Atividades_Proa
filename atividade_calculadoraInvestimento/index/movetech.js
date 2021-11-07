const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    colorHeader: getStyle(html, "--color-header"),
    colorText: getStyle(html, "--color-text"),
    label: getStyle(html,"--label"),
    input: getStyle(html,"--input"),
    textInput: getStyle(html,"--text-input"),
    botao: getStyle(html, "--botao"),
    botaoBorda: getStyle(html, "--botao-borda"),
}

const darkMode = {
    bg: "#333333",
    colorHeader: "#34af68",
    colorText: "#000000",
    label:"#909090",
    input:"#3a3b3c",
    textInput:"#bbbbbb",
    botao:"#073255",
    botaoBorda:"#021922",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

document.onreadystatechange = () =>{
    if (document.readyState === 'complete'){
        if (checkbox.checked){
            changeColors(darkMode);
        }
    }
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})