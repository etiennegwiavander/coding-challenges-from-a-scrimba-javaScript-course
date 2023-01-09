// this is a list of challenges at the end of a scrimber javaScript course free.

//A MINI GAME challenge
const player = "Etienne"
const opponent = "Frank"
const game = "AmazingFighter"
let points = 0
let hasWon = false
// PLAYING THE GAME 
points += 100
hasWon = true
// ANNOUNCING THE WINNER
if (hasWon){
    console.log(`${player} got ${points} and won the ${game} game!`)
}else{
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

//ARRAY CHALLENGE

let names = ["Etienne", "Fausta", "Nailah"]

function getNames(arr){
   
    for(let i = 0; i < arr.length; i++){
      console.log( arr[i])
      
    }
}
// getNames(names)

// // LOCAL STORAGE CHALLENGE

// let name = "Etienne Gwiavander L"
// localStorage.setItem("names", name)
console.log(localStorage.getItem("names"))


//EVENT LISTENERS CHALLENGE

let data = [
    {
        player: "Van",
        score : 52
    },
    {
        player: "Mark",
        score: 41
    }
]

let logScore = document.getElementById("log-score")

logScore.addEventListener('click', logOutScore)

function logOutScore(){
console.log(`${data[0].player}'s score: ${data[0].score}`)
}

//GENERATE SENTENCE
let countries = `The three argest countries in the world are:`
let fruits = `My best fruits are:`
let largestCounntries = ["China", "India", "USA"]
let bestFruits = ["Banana", "Pineapple", "Oranges"]

function render(desc, arr){
    if(desc){
        for(i=0; i<arr.length; i++){
            console.log(`${desc} ${arr}`)
        }
    }
}
render(countries, largestCounntries)
render(fruits, bestFruits)


//RENDER IMAGE challenge
const imageBtn = document.getElementById("pic-btn")
let imageOut = document.getElementById("image-out") 

images = [
    "images/avatar1.jpg",
    "images/avatar2.png",
    "images/avatar3.png",
    "images/avatar4.png"
]

imageBtn.addEventListener("click", renderImage)

function renderImage(){
    imageRendered = " "
    for(let i = 0; i<images.length; i++){
        
        imageRendered += `<img alt="My avatar collection" src="${images[i]}" >`
    }
    imageOut.innerHTML  = imageRendered
    console.log("you clicked me!")
}
