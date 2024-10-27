const canvasBoard = document.getElementById("CanvasBoard");
let ctx = canvasBoard.getContext('2d');

let X = 0
let Y = 0

let DX = 10;
let DY = 10;

let RADIUS = 10;

let drawball = () => {
    if(document.getElementById("playAnimation").checked){
        ctx.reset();

        ctx.beginPath();
        ctx.arc(X, Y, RADIUS, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();

        if(X < 0 || X > canvasBoard.width){
            DX = -DX;
        }

        if(Y < 0 || Y > canvasBoard.height){
            DY = -DY;

        }
        X += DX;
        Y += DY;
    }
    
    requestAnimationFrame(drawball);

};

window.onload = () => {

    drawball();

}

// let drawball = () => {
//     if(document.getElementById("playAnimation").checked){
//         ctx.reset();

//         ctx.beginPath();
//         ctx.arc(X, Y, RADIUS, 0, 2*Math.PI);
//         ctx.fill();
//         ctx.closePath();

//         if(X < 0 || X > canvasBoard.width){
//             DX = -DX;
//         }

//         if(Y < 0 || Y > canvasBoard.height){
//             DY = -DY;

            
//         }

//         X += DX;
//         Y += DY;
//     }
        
//     requestAnimationFrame(drawball);

// };

// drawball();





