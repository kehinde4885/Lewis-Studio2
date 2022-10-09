

tl = gsap.timeline({defaults: {duration: 2}, repeat: -1, yoyo: true})

tl.to('.section1' , {y:'-100vh',delay: 3, onStart: increment , onReverseComplete: decrement})
tl.set('html', {'--defcolor':' #000'}, '<5%')
tl.to('.section2' , {y:'-100vh', onStart: increment , onReverseComplete: decrement})
tl.set('html', {'--defcolor':' #fff'},'<5%')
tl.to('.section3' , {y:'-100vh', onStart: increment , onReverseComplete: decrement})
tl.set('html', {'--defcolor':' #000'}, '<5%')
tl.to('.section4' , {y:'-100vh', onStart: increment , onReverseComplete: decrement})
tl.set('html', {'--defcolor':' #fff'}, '<5%')
tl.to('.section5' , {y:'-100vh', onStart: increment , onReverseComplete: decrement})
tl.set('html', {'--defcolor':' #000'}, '<5%')


// colortl = gsap.timeline({defaults: {duration: 1.5}})

// colortl.to('html', {'--defcolor':' #567967'})

// Indicator Logic
let slide = 0

function increment(){

    slide++
    indicate(slide)
}

function decrement(){
    slide--
    indicate(slide)
}

let inds = Array.from(document.querySelector('.ind').children)

function indicate(x){

    inds.forEach(element => {
        element.classList.remove('indicate')
    });
    console.log(x)

    if(x < inds.length){
        inds[x].classList.add('indicate')
    }

}


let scrT = ScrollTrigger.create({animation: tl})

console.log(scrT)