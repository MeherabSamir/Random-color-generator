// DOM Selection
const colorCode = document.querySelector('.color-code')
const generateBtn = document.querySelector('.btn')

const hex = ['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9,0]

function generateColor(){
    let hexCode = '#'
    for(let i=0;i<6;i++){
        hexCode += hex[generateRandomNum()]
    }
    colorCode.textContent = hexCode
    document.documentElement.style.setProperty(`--clr-bg`,`${hexCode}`)
}

generateBtn.addEventListener('click',generateColor)

function generateRandomNum(){
    return Math.floor(Math.random() * hex.length)
}

// Key Events
document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        generateColor()
    }
}