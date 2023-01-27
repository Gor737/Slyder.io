let left = document.querySelector("#left")
let right = document.querySelector("#right")
let pause = document.querySelector("#pause")
let play = document.querySelector("#play")

let page = document.querySelector(".pageBox")
let nestedPage = document.querySelector(".page")

let position = 0
let replay = null



right.addEventListener('click', () => {
    position += 500
   if(position >= 3000){
      position = 0
   }
   document.querySelector(".slider").style.left = -position + 'px'
   createPage()
})


left.addEventListener('click', () => {
    position -= 500
    if(position < 0){
       position = 2500
    }
    document.querySelector(".slider").style.left = -position + 'px'
    createPage()
})


pause.addEventListener('click', () => {
  clearInterval(replay)
  createPage()
})


play.addEventListener('click', () => {
    replay = setInterval(() => {
        position += 500
    
        if(position >= 3000){
            position = 0
        }
    
        document.querySelector(".slider").style.left = -position + 'px'
        createPage()
    }, 3000)
})


function createPage (){
    if(position === 0){
        addPage(1)
    } else if(position  === 500){
        addPage(2)
    } else if(position  === 1000){
        addPage(3)
    } else if(position  === 1500){
        addPage(4)
    } else if(position  === 2000){
        addPage(5)
    } else if(position  === 2500){
        addPage(6)
    }
}


function addPage(n){

        let newDiv = document.createElement('div')
        newDiv.classList.add(`page`)
        newDiv.append(`Page ${n}`)
        nestedPage.remove()
        nestedPage = newDiv
        page.append(nestedPage)

}





