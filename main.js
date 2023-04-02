const gameboard = document.querySelector('#gameboard')
const gameinfo = document.querySelector('#info')
const startcells = [ "", "", "",
                     "", "", "",
                     "", "", "",
                    ]  //cells of tic tac toe
function boardcreate() { //to create board
    startcells.forEach((cell,index)=>{
     const cellelement = document.createElement('div') //creating a div element
    cellelement.classList.add('square') //adding a class named square
    cellelement.id = index //giving id to each cellelement
    cellelement.addEventListener('click',addGo) //adding an event on click func
    gameboard.append(cellelement) // putting it into gamboard each time we loop
    })
}
boardcreate()

let go = "circle" //first circle.if circle then square in line no:26
gameinfo.textContent = "Circle goes first."

function addGo(e){
    // console.log(e.target); we can get the clicked div
    const goDisplay = document.createElement('div') //creating an element div
    goDisplay.classList.add(go) //adding the class 'circle' to it
    e.target.append(goDisplay) //and we append it to what we click on and we click on e.target (we grab e target and append it with the class we created ie class 'circle')
    go = go === "circle" ?"cross" : "circle" //if go is circle change to square else circle
    gameinfo.textContent = "it's now "+ go+"'s turn."
    e.target.removeEventListener('click',addGo)
    checkScore()
}
function checkScore(){
    const allsquares = document.querySelectorAll(".square")
    console.log(allsquares);
    const winningcombo = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7],[2,5,8], [3,6,9], [0,4,8],[2,4,6]
    ]

    winningcombo.forEach(array => {
       const circlewins = array.every(cell => allsquares[cell].firstChild?.classList.contains('circle'))
       if(circlewins){
        gameinfo.textContent = "Circle Wins!"
        allsquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        return
       }
    })

    winningcombo.forEach(array => {
        const crosswins = array.every(cell => allsquares[cell].firstChild?.classList.contains('cross'))
        if(crosswins){
         gameinfo.textContent = "Cross Wins!"
         allsquares.forEach(square => square.replaceWith(square.cloneNode(true)))
         return
        }
     })
}
