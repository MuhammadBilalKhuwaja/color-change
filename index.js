var div = document.getElementById('box')
var color = document.getElementById('box-2')

var colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Black", "Azure", 
"Beige", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", 
"Chartreuse", "Chocolate", "CornflowerBlue", "DarkGoldenRod", "DarkGreen",
"DarkOrange", "DarkKhaki", "DarkSeaGreen", "DarkSalmon"]

function onmouseonover() {

    var randumNumber = Math.floor(Math.random() * 20)
   
    div.style.backgroundColor = colors[randumNumber]

    color.innerText = "Color:" + " " + colors[randumNumber]

    // document.write("Color:", colors[randumNumber])

}

// var div = document.getElementById('box').style.width = '600px'

// console.log(div)

// function question4() {
//     var dice = Math.floor(Math.random() * 6 + 1);
//     document.getElementById("q4OP").innerHTML = dice;
//     return dice
// }

