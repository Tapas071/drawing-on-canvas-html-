const canvas = document.getElementById('canvas1');
const c = canvas.getContext('2d');
console.log(c);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//     c.fillStyle = 'blue';
// c.fillRect(10,20,150,50);
    
})

// c.fillStyle = 'blue';
// c.fillRect(10,20,150,50);

//-----------------------

// creating particle Array 

const particleArray =[];
let hue=0;

//---------------------------------------



// generate particles 


function generate(n)
{

    for( let i=0; i< n ; i++)
    {
        particleArray.push( new Particle());
    }

}

//--------------------------------


const mouse = {
    x : undefined,
    y: undefined 
}

canvas.addEventListener('click',function(e){
    mouse.x= e.x;
    mouse.y= e.y;
    // animate();
    // generate(100);
    // drawCircle();



});

// mouse moving function call 

canvas.addEventListener('mousemove', function(e){
    mouse.x= e.x;
    mouse.y= e.y;
    generate(10);
    // animate();


    // drawCircle(); // calling drawing circile function to draw a circle
});


//---------------------------------------
// drawing a circle

// function drawCircle()
// {

// c.fillStyle = 'blue';
// c.strokeStyle = 'red';
// c.lineWidth=5;
// c.beginPath();
// c.arc(mouse.x,mouse.y,50, 0, Math.PI*2);
// c.fill();
// c.stroke();
// }

//-------------------------


class Particle{

    constructor(){

        this.x = mouse.x;
        this.y = mouse.y;

        // random position 
        // this.x =Math.random()*canvas.width;
        // this.y = Math.random()*canvas.height;
        this.size= Math.random() * 15 +1;
        this.speedX = Math.random() * 3 -1.5;
        this.speedY = Math.random() * 3 -1.5;
        this.color = 'hsl(' + hue +',100%,50%)';
    }

    update(){
        this.x +=this.speedX;
        this.y += this.speedY;
        if( this.size>0.2)this.size-=0.1;
    }
    draw(){
        // c.fillStyle = 'blue';
        // hsl color decrelaration
        c.fillStyle = this.color;
        // c.strokeStyle = 'red';
        // c.lineWidth=5;
        c.beginPath();

        c.arc(this.x,this.y,this.size, 0, Math.PI*2);
        c.fill();
        // c.stroke();
    }
}
//------------------------

// function init()
// {
//     for( let i =0; i< 100; i++)
//     {
//         particleArray.push(new Particle());
//     }
// }

// init();
//-------------------------
// console.log(particleArray);

function handleParticles(){

    for( let i=0; i< particleArray.length; i++)
    {
        particleArray[i].update();
        particleArray[i].draw();
        // for( let j=i; j< particleArray.length;j++)
        // {
        //     const dx= particleArray[i].x - particleArray[j].x;
        //     const dy = particleArray[i].y - particleArray[j].y;
        //     const distance = Math.sqrt(dx*ds + dy*dy);
        //     if(distance<100){
        //         c.beginPath();
        //         c.strokeStyle =particleArray[i].color;
        //         c.lineWidth =1;
        //         c.moveTo(particleArray[i].x,particleArray[i].y);
        //         c.lineTo(particleArray[j].x,particleArray[j].y);
        //         c.stroke();
        //         c.closePath();
        //     }

     // hey
        // }


        // removing element if the size is less than 0.3
        if( particleArray[i].size <=0.2){
            particleArray.splice(i,1);
            i--;
        }
    }


}

// -------------------------------------------

function animate(){
    // c.clearRect(0,0,canvas.width, canvas.height);
    c.fillStyle='rgba(0,0,0,0.3)';
    c.fillRect(0,0,canvas.width, canvas.height);
    // drawCircle();
    handleParticles();
    hue++;
    requestAnimationFrame(animate);
}
animate();
//------------------------

