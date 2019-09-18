var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

let moveLeft = false;
let moveRight = false;

// шар
let shar = {
		speed: 80,
		rad: 10,
		pos:{x: canvas.width/2, y: canvas.height-200},
		moveLeft: function(){this.pos.x += this.speed},
		moveRight: function(){this.pos.x -= this.speed}

}; 
let arr = [];
//выстрел
function Farr(x,y){
	let proj = {
			speed: 10,
			pos: {x:x, y:y},
			shot: function(){ this.pos.y -= this.speed}
	}
	return proj;
}
// враг
let arrBot = enemySpawn(1);


window.addEventListener('keydown', function(e){
	if(e.keyCode == 39 ) moveLeft = true;
	if(e.keyCode == 37 ) moveRight = true;
	if(e.keyCode == 32){
		arr.push(Farr(shar.pos.x, shar.pos.y) );
	}
});



requestAnimationFrame(draw);

function draw(){
	ctx.clearRect(0,0,canvas.width, canvas.height);

//фон
	let imgg = new Image();
	imgg.src = '285q6XVCPLo.jpg';
	ctx.drawImage(imgg, 0,10);

// лево-право
	if(moveLeft) shar.moveLeft();
	if(moveRight) shar.moveRight();

// корабль
	var img = new Image(); 
	img.src = 'kspaceduel.png'; 
	ctx.drawImage(img, shar.pos.x, shar.pos.y, 80, 86); 
		
// выстрелы
	for(var i = 0; i < arr.length; i++){
		arr[i].shot();

		ctx.beginPath(); 
			ctx.rect(arr[i].pos.x +38, arr[i].pos.y,5,10); 
			ctx.fillStyle = 'red'; 
			ctx.fill(); 
		ctx.closePath(); 
	}


	//счетчик отрисовки врагов
for(var i = 0; i < arrBot.length; i++){

	var img = new Image(); 
	img.src = 'kspaceduel.png'; 
	ctx.drawImage(img, arrBot[i].position.x, arrBot[i].position.y, 50,50); 
	
	arrBot[i].moveDown();

	
	if(arrBot[i].position.y > canvas.height) {
		delete arrBot[i]; 
		break;
	}


}

console.log(canvas.height);

	requestAnimationFrame(draw);

	moveLeft = false;
	moveRight = false;
}
	

function rand(min,max){
	return Math.random() * (max-min) + min
}
 




function enemySpawn(count){
	let mas = [];
	
	for(var i = 0; i < count; i++){
		let one = {
			speed:2,
			position:{x:  rand(10, canvas.width), y:  rand(-50, 0)},
			moveDown: function(){this.position.y += this.speed}
	}

			mas.push(one);

	}
	return mas;
}













// //Рисуем квадрат
// ctx.beginPath(); //нов путь
// 	ctx.rect(20,40,50,50); //( x,y,ширина,высота)
// 	ctx.fillStyle = 'FF0000'; //значение цвета
// 	ctx.fill(); //закрашеваем
// ctx.closePath(); //закр путь


// ////Рисуем круг
// ctx.beginPath();
// 	ctx.arc(340,260,50,0, Math.PI*2);//(x,y, радиус, угол для рис , круг а не дуга)
// 	ctx.fillStyle = 'green';
// 	ctx.fill();
// ctx.closePath();


// //Прямоугол с закр контура
// ctx.beginPath();
// 	ctx.rect(160,30,100,40);
// 	ctx.strokeStyle = 'rgba(0,0,255,0.5)';
// 	ctx.stroke(); //закрашиваем контур прямоугольника
// ctx.closePath(); 






