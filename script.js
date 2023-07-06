function func(){
    let img1 = document.querySelector("header")
    let btn1 = document.querySelector(".next")
    let btn2 = document.querySelector(".prev")

    let i = 0
    btn1.addEventListener("click" , function(){
        if(i == 2){
            i = -1
        }
        let arr = ["./img/mockup-2752026_1920.png","./img/senyak2.jpg","./img/senyak3.jpeg"]
        img1.style.backgroundImage = `url(${arr[++i]})`
        if(i == 2){
            i = -1
        } 
    })

    btn2.addEventListener("click" , function(){
        if(i == -1){
            i = 0
        }
        let arr = ["./img/mockup-2752026_1920.png","./img/senyak2.jpg","./img/senyak3.jpeg"]
        img1.style.backgroundImage = `url(${arr[i--]})`
        if(i == -1){
            i = 2
        } 
    })
}

func()

function func2(){
    let img1 = document.querySelector(".img1")
    let img2 = document.querySelector(".img2")
    let img3 = document.querySelector(".img3")
    let img4 = document.querySelector(".img4")
    let img5 = document.querySelector(".img5")
    let btn1 = document.querySelector(".next2")
    let btn2 = document.querySelector(".prev2")

    let i = -1
    btn1.addEventListener("click" , function(){
        if(i == 4){
            i = -1
        } 
        let arr = [img1.src,img2.src,img3.src,img4.src,img5.src]
        img2.src = arr[++i]
        img3.src = arr[++i]
        img4.src = arr[++i]
        img5.src = arr[++i]
        img1.src = arr[++i]
        if(i == 4){
            i = -1
        } 
    })

    btn2.addEventListener("click" , function(){
        if(i == -1){
            i = 4
        } 
        let arr = [img1.src,img2.src,img3.src,img4.src,img5.src]
        img4.src = arr[i--]
        img3.src = arr[i--]
        img2.src = arr[i--]
        img1.src = arr[i--]
        img5.src = arr[i--]
        if(i == -1){
            i = 4
        } 
    })
}

func2()

