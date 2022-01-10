let startBt = document.querySelector('#start');
let stopBt = document.querySelector('#stop');
let back1 = document.querySelector('#fon1');
let back2 = document.querySelector('#fon2');
let back3 = document.querySelector('#fon3');
let cloudBack = document.querySelector('#cloud1');
let cloudBack2 = document.querySelector('#cloud2');
let cloudBack3 = document.querySelector('#cloud3');
let leftBt = document.querySelector('#butLeft');
let rightBt = document.querySelector('#butRight');
let aircraft = document.querySelector('#air');
let rocketR = document.querySelector('#rocket1');

let rocketL = document.querySelector('#rocket2');
let rocketRF = document.querySelector('#rocket1f');

let rocketLF = document.querySelector('#rocket2f');
let launchR = document.querySelector('#fireR');
let launchL = document.querySelector('#fireL');
let enemyPlane = document.querySelector('#enemy');

let curse = 150;
let r1 = 200;
let r2 = 140;
let r1f = 200;
let r2f = 140;
let h2 = 2260;
let h1 = 0;
let cl1 = 2200;
let cl2 = 4500;
let cl3 =0;
let launcherR = 80;
let launcherL = 80;
let enemyCurse = 1900;
let min =0;
let max = 200;
let op = 0;
let op2 = 100;
let exp = 0;
let x=1;
let y=0;
let rr = 0;
let lr=0;
let z=2.5;
let trigerL=0, trigerR=0;
let b=15;


let boomDiv = document.querySelector('#boom1');
let boomImage = document.querySelector('#boomImg');

startBt.addEventListener('click', startFn);

function startFn(){
	let ran = Math.floor(Math.random() * (max - min + 1)) + min;
	
	enemyPlane.style.left = ran + 'px';
	launchR.style.display ='block';
	launchL.style.display ='block';
	startBt.style.display = 'none';
	stopBt.style.display = 'block';
	leftBt.style.display = 'block';
	rightBt.style.display = 'block';
	
	let runGame = setInterval(function fly(){
		
		document.querySelector('#dCLs').innerHTML = y;
		
		
		let targetEnL = document.querySelector('#targetZoneL').getBoundingClientRect();
let targetIamL = document.querySelector('#targetZoneL1').getBoundingClientRect();
let targetEnR = document.querySelector('#targetZoneR').getBoundingClientRect();
let targetIamR = document.querySelector('#targetZoneR1').getBoundingClientRect();
let targetEnC = document.querySelector('#targetZoneC').getBoundingClientRect();
let targetIamC = document.querySelector('#targetZoneC1').getBoundingClientRect();
let rockRC = rocketR.getBoundingClientRect();
let enPlane = enemyPlane.getBoundingClientRect();
let myPlane = aircraft.getBoundingClientRect();
let rockLC = rocketL.getBoundingClientRect();
	
	let targetL = Math.abs(targetEnL.left - targetIamL.left); //90,110
	let targetR = Math.abs(targetEnR.left - targetIamR.left); //110,90
	let targetCL = Math.abs(targetEnC.left - targetIamC.left); //20,4
	let targetCR = Math.abs(targetEnC.right - targetIamC.right); //4,16
		h1--;
		h2--;
		cl1--;
		cl2--;
		cl3--;
		enemyCurse= enemyCurse-z;
	back1.style.bottom = h1+'px';
  cloudBack.style.bottom = cl1 +'px';
	cloudBack2.style.bottom = cl2 +'px';
	cloudBack3.style.bottom = cl3 +'px';
	back2.style.bottom = h2+'px';
	enemyPlane.style.bottom = enemyCurse +'px';
	if(h1==0){
	h2 = 2260;
	cl1=2200;
	}
	if(h2==0){
		h1=2260;
		cl3=2200;
	}
	//Появление вражеского самолёта
	if(enemyCurse<-300){
	  	ran =Math.floor(Math.random() * (max - min + 1)) + min;
	  enemyCurse = 1900;
	 enemyPlane.style.left = ran+'px'; 
	 enemyPlane.style.display = 'block'

 
	}
	
	//Крушение
	if(targetL<=90 && targetR<=110 && enemyCurse <=80 && enPlane.bottom <775 ){
		op = op+20;
		op2 = op2-20;
		boomDiv.style.bottom = '135px';
		boomDiv.style.left = ran + 'px';
		boomDiv.style.display = 'block';
		boomDiv.style.opacity = op +'%';
		boomImage.style.width = op + 'px';
		enemyPlane.style.display = 'none';
		aircraft.style.display = 'none';
		rocketR.style.display = 'none';
		rocketL.style.display = 'none';
		rocketRF.style.display = 'none';
		rocketLF.style.display = 'none';
	}
	else if (targetL <= 110 && targetR <= 90 && enemyCurse <= 80 && enPlane.bottom <775) {
			op = op + 20;
			op2 = op2 - 20;
			boomDiv.style.bottom = '135px';
			boomDiv.style.left = ran + 'px';
			boomDiv.style.display = 'block';
			boomDiv.style.opacity = op + '%';
			boomImage.style.width = op + 'px';
			enemyPlane.style.display = 'none';
			aircraft.style.display = 'none';
			rocketR.style.display = 'none';
			rocketL.style.display = 'none';
			rocketRF.style.display = 'none';
			rocketLF.style.display = 'none';
		}
		
	else if (targetCL <= 30 /*&& targetCR <= 8*/ && enemyCurse <= 245 && enPlane.bottom <775) {
			op = op + 20;
			op2 = op2 - 20;
			boomDiv.style.bottom = '135px';
			boomDiv.style.left = ran + 'px';
			boomDiv.style.display = 'block';
			boomDiv.style.opacity = op + '%';
			boomImage.style.width = op + 'px';
			enemyPlane.style.display = 'none';
			aircraft.style.display = 'none';
			rocketR.style.display = 'none';
			rocketL.style.display = 'none';
			rocketRF.style.display = 'none';
			rocketLF.style.display = 'none';
			
		}
	
	else if (/*targetCL <= 5 &&*/ targetCR <= 30 && enemyCurse <= 245 && enPlane.bottom <775) {
		op = op + 20;
		op2 = op2 - 20;
		boomDiv.style.bottom = '135px';
		boomDiv.style.left = ran + 'px';
		boomDiv.style.display = 'block';
		boomDiv.style.opacity = op + '%';
		boomDiv.style.width = op + 'px';
		enemyPlane.style.display = 'none';
		aircraft.style.display = 'none';
		rocketR.style.display = 'none';
		rocketL.style.display = 'none';
		rocketRF.style.display = 'none';
		rocketLF.style.display = 'none';
	}
	
		//Взаимодействие с правой ракетой
	
	
	if(Math.abs(targetEnC.right - rockRC.right)<=22  && enPlane.bottom - rockRC.bottom >= -60 && enPlane.bottom - rockRC.bottom <=130 && enemyCurse>=100){
		hitTargetR()
	}
	else if (Math.abs(targetEnC.left - rockRC.left) <= 22  && enPlane.bottom - rockRC.bottom >= -60 && enPlane.bottom - rockRC.bottom <=130 && enemyCurse>=100) {
		hitTargetR()
	}
	else if (Math.abs(targetEnL.left - rockRC.left) <= 25 && Math.abs(targetEnR.left - rockRC.left) <= 130  && enPlane.bottom - rockRC.bottom >= 0 && enPlane.bottom - rockRC.bottom <=130  && enemyCurse>=100) {
		hitTargetR()
	}
else	if (Math.abs(targetEnR.left - rockRC.left) <= 25 && Math.abs(targetEnL.left - rockRC.left) <= 130 && enPlane.bottom - rockRC.bottom >= 0 && enPlane.bottom - rockRC.bottom <=130 && enemyCurse>=100) {
		hitTargetR()
	}
	
	//Взаимодействие с левой ракетой.
	
		if(Math.abs(targetEnC.right - rockLC.right)<=22  && enPlane.bottom - rockLC.bottom >= -60 && enPlane.bottom - rockLC.bottom <=130 && enemyCurse>=100){
		hitTargetL()
	}
	else if (Math.abs(targetEnC.left - rockLC.left) <= 22  && enPlane.bottom - rockLC.bottom >= -60 && enPlane.bottom - rockLC.bottom <=130 && enemyCurse>=100) {
		hitTargetL()
	}
	else if (Math.abs(targetEnL.left - rockLC.left) <= 25 && Math.abs(targetEnR.left - rockLC.left) <= 134  && enPlane.bottom - rockLC.bottom >= 0 && enPlane.bottom - rockLC.bottom <=130  && enemyCurse>=100) {
		hitTargetL()
	}
else	if (Math.abs(targetEnR.left - rockLC.left) <= 25 && Math.abs(targetEnL.left - rockLC.left) <= 130 && enPlane.bottom - rockLC.bottom >= 0 && enPlane.bottom - rockLC.bottom <=134 && enemyCurse>=100) {
		hitTargetL()
	}
	
	
	
	
	
	
	if(op>500){
		finish2();
	}
		function finish2(){
	document.querySelector('#over').style.display = 'block';
	setTimeout(function Fly() {
				clearInterval(runGame);
	},10);
	startBt.style.display = 'none'
		}
		if(y==6){ 
			setTimeout(()=>{
		finishWin();
			},200)
	}
		function finishWin(){
	document.querySelector('#over2').style.display = 'block';
	setTimeout(function Fly() {
				clearInterval(runGame);
	},10);
	startBt.style.display = 'none'
		}
		
		
	},10);
	

stopBt.addEventListener('click', finish)

function finish(){
setTimeout(function Fly(){
	clearInterval(runGame);
	stopBt.style.display = 'none';
	startBt.style.display = 'block';
	leftBt.style.display = 'none';
	rightBt.style.display = 'none';
	launchR.style.display = 'none';
	launchL.style.display = 'none';
	rocketRF.style.display = 'none';
	rocketLF.style.display = 'none';
},12)

}
function hitTargetR() {
rr++;
		boomDiv.style.bottom = enemyCurse-80 + 'px';
		if(rr>0){
			lr--;
		}
		boomDiv.style.left = ran +10 + 'px';
			exp= exp+20;
			if (exp >= 300 && exp < 301 && rr>1) {
				y++;
				z=z+0.2;
				
			}
		rocketR.style.display='none';
		
		boomDiv.style.display = 'block';
		
		boomDiv.style.opacity = exp + '%';
		boomImage.style.width = exp + 'px';
		enemyPlane.style.display = 'none';
	
		setTimeout(()=>{
		exp=0;
		rr=0;
		lr=0;
		
			funck2R()
		
	},700)
	}
	function funck2R(){
		boomDiv.style.display = 'none';
		boomDiv.style.left = '50px';
		boomDiv.style.bottom = '0';
		boomImage.style.width='100px';
		enemyCurse = -300;
	

	 
	}
	
	
	
	function hitTargetL() {
	
		lr++;
		if(lr>0){
			rr--;
		}
		boomDiv.style.bottom = enemyCurse-80 + 'px';
		boomDiv.style.left = ran +10 + 'px';
			exp= exp+20;
			if (exp >= 300 && exp < 301 && lr>1) {
				y++;
				z =z+0.2;
				
			
			}
		rocketL.style.display='none';
		
		boomDiv.style.display = 'block';
		
		boomDiv.style.opacity = exp + '%';
		boomImage.style.width = exp + 'px';
		enemyPlane.style.display = 'none';
		setTimeout(()=>{
		exp=0;
		lr=0
		rr=0
			funck2L()
	
	},700)
	}
	function funck2L(){
		boomDiv.style.display = 'none';
		boomDiv.style.left = '50px';
		boomDiv.style.bottom = '0';
		boomImage.style.width='100px';
		enemyCurse = -300;
		
	}
	
	
		
	

 
//Управление
// Влево
	leftBt.addEventListener('click', ()=>{
		if(curse>=0 && launcherR==80 && launcherL==80){
			curse=curse-15;
			r1 = r1-15;
			r2 = r2-15;
			r1f = r1f-15;
			r2f = r2f-15;
	aircraft.style.left = curse +'px';
	rocketRF.style.left = r1f + 'px';
	rocketLF.style.left = r2f + 'px';
	
	rocketR.style.left = r1 + 'px';
	rocketL.style.left = r2 + 'px';
}
else if (curse >= 0 && launcherR==80 & launcherL!==80) {
	curse = curse - 15;
	r1 = r1 - 15;
	r1f = r1f - 15;
	r2f = r2f - 15;
	rocketRF.style.left = r1f + 'px';
	rocketLF.style.left = r2f + 'px';
	aircraft.style.left = curse + 'px';
	rocketR.style.left = r1 + 'px';
}
else if (curse >= 0  && launcherL==80 && launcherR!==80) {
	curse = curse - 15;
	r2 = r2 - 15;
	r1f = r1f - 15;
	r2f = r2f - 15;
	rocketRF.style.left = r1f + 'px';
	rocketLF.style.left = r2f + 'px';
	aircraft.style.left = curse + 'px';
	rocketL.style.left = r2 + 'px';
}
else if (curse >= 0 && launcherL!== 80 && launcherR!== 80) {
	curse = curse - 15;
	r1f = r1f - 15;
	r2f = r2f - 15;
	rocketRF.style.left = r1f + 'px';
	rocketLF.style.left = r2f + 'px';
	aircraft.style.left = curse + 'px';
}
})

//Вправо
rightBt.addEventListener('click', () => {
if(curse<=300 && launcherR==80 && launcherL==80){
	curse = +curse + 15;
	r1 = +r1+15;
	r2 = +r2+15;
	r1f = +r1f + 15;
	r2f = +r2f + 15;
	rocketRF.style.left = r1f + 'px';
	rocketLF.style.left = r2f + 'px';
	aircraft.style.left = curse + 'px';
	rocketR.style.left = r1+'px';
	rocketL.style.left = r2+'px';
}
else if (curse <= 300 && launcherR==80 && launcherL!==80) {
	curse = +curse + 15;
	r1 = +r1 + 15;
	r1f = +r1f + 15;
	r2f = +r2f + 15;
	rocketRF.style.left = r1f + 'px';
	rocketLF.style.left = r2f + 'px';
	aircraft.style.left = curse + 'px';
	rocketR.style.left = r1 + 'px';
}
else if (curse <= 300  && launcherL==80 && launcherR!==80) {
	curse = +curse + 15;
	r2 = +r2 + 15;
	r1f = +r1f + 15;
	r2f = +r2f + 15;
	rocketRF.style.left = r1f + 'px';
	rocketLF.style.left = r2f + 'px';
	aircraft.style.left = curse + 'px';
	rocketL.style.left = r2 + 'px';
}
else if (curse <= 300 && launcherL!== 80 && launcherR !== 80) {
	curse = +curse + 15;
	r1f = +r1f + 15;
	r2f = +r2f + 15;
	rocketRF.style.left = r1f + 'px';
	rocketLF.style.left = r2f + 'px';
	aircraft.style.left = curse + 'px';
}
})
// Пуск ракет
// Правая

launchR.onclick = openFireR;
 function openFireR(){
 
	let launchRocketRight = setInterval(function rockR() {
		
	rocketRF.style.display='none';
		launcherR = launcherR + 7;
		rocketR.style.bottom = launcherR + 'px';

	}, 1)
	setTimeout(() => {

		rocketR.style.display = 'none';

	}, 500)
	setTimeout(() => {
		clearInterval(launchRocketRight);
		launcherR = 80;
		r1 = +curse + 50;
		funck3R()
	}, 5000)
	launchR.style.display = 'none';
		
	
}

function funck3R() {
	
	launcherR = 80;
	r1 = +curse + 50;
	//let rockRC = rocketR.getBoundingClientRect();
	//let myPlane = aircraft.getBoundingClientRect();
 //rockRC.left = myPlane.left + 50 +'px';
 
	launchR.style.display = 'block';
	rocketR.style.display = 'block';
	rocketRF.style.display = 'block';
	//rocketR.style.bottom = '80px';
}

//Левая
launchL.onclick= openFireL;
function openFireL(){
	let launchRocketLeft = setInterval(function rockL() {
		rocketLF.style.display ='none';
		launcherL = launcherL + 7;
		rocketL.style.bottom = launcherL + 'px';

	}, 1)
	setTimeout(() => {

		rocketL.style.display = 'none';

	}, 500)
	setTimeout(() => {
		clearInterval(launchRocketLeft);
		launcherL = 80;
		r2 = curse - 10;
		funck3L()
	}, 5000)
	launchL.style.display = 'none';
}

function funck3L() {

	launcherL = 80;
	r2 = curse - 10;
	launchL.style.display = 'block';
	rocketL.style.display = 'block';
	rocketLF.style.display = 'block';
	//rocketL.style.bottom = '80px';
}

//Кнопка "Начать заново"
document.querySelector('#again').addEventListener('click', ()=>{
	parent.location.reload();
	return false;
	
})
//Кнопка "Начать заново"
document.querySelector('#again2').addEventListener('click', () => {
	parent.location.reload();
	return false;

})

}
