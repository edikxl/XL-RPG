//P.S Одноразовые функции-это такие ф-ции которые используются раз за всю игру,или те которые нельзя использовать больше

var canvas_bg = document.getElementById('canvas_bg');
var ctx1 = canvas_bg.getContext('2d');//Создаём переменную для доступа к Канвасу с задним фоном и интерфейсом

var canvas_enemy = document.getElementById('canvas_enemy');
var ctx2 = canvas_enemy.getContext('2d');//,,--,, с врагами и всеми их анимациями

var canvas_player = document.getElementById('canvas_player');
var ctx3 = canvas_player.getContext('2d');//,,--,, с героем и всеми его анимациями

var game = function(){    //Функция(одноразовая) запускает игру
	stateCharacter = false;
	stateMove = false;
	stateCutscene = true;
	ctx1.drawImage(map1_2,0,0);
	level = map1;
	setTimeout(function(){
		ctx2.font = "20px Verdana, sans-serif";
		ctx2.fillStyle = ("White");
		ctx2.fillText("Давным-давно,одним жарким днём,в далёкой жопе очутился...",100,100);
		setTimeout((function(){
			playerName = prompt("Как тя зовут то?");ctx2.fillText("..."+playerName+".",100,120);
			setTimeout((function(){stopCutscene();}),2500);
		}),2000);
	},1000);
}
var drawLevel = function(levelNow){   //Рисует уровень и принимает значение текущего уровня
	ctx1.drawImage(levelNow,0,25);
	x_p = 5,
	y_p = 330;
	drawWizard();
}
var stopCutscene = function(){
	stateCutscene = false;
	stateGame = true;
	stateMove = true;
	ctx2.clearRect(0,0,800,600);
	ctx1.drawImage(interface,0,0);
	drawLevel(level);
}
var checkButton = function(){
	if(stateFly){
		if(nowKey[87]){
			if(nowKey[68]){
				x_p += 5;
			}
			if(nowKey[65]){
				x_p -= 10;
			}
		}
	}
}
var startGame = function(){     //Одноразовая,рисует главное меню
	drawMenu();
	drawMenuGame();
	setInterval(manaReg,1000);
}
var gameLoop = function(){     //Игровой цикл,обновляет параметры героя
	if(stateGame){
		checkButton();
		drawHP(hp);
		drawXP(xp);
		drawMana(mana);
		checkXP();
	}
}
var startGameLoop = function(){   //Запускает игровой цикл
	setInterval(gameLoop,1000/60);
}
//Клавиатура 2.0
var nowKey = {
	87 : false,
	65 : false,
	83 : false,
	68 : false,
	32 : false,
	13 : false,
	49 : false,
	50 : false,
	51 : false,
	52 : false
};
window.onkeydown = function (e) {
	if(e.keyCode == 87){                         //W
		nowKey[87] = true;
		if(stateMenu){
			if(positionMenu == 1){
				ctx1.clearRect(0,0,800,600);
				drawMenu();
				drawMenuHelp();
			}else if(positionMenu == 2){
				ctx1.clearRect(0,0,800,600);
				drawMenu();
				drawMenuGame();
			}else if(positionMenu == 3){
				ctx1.clearRect(0,0,800,600);
				drawMenu();
				drawMenuSettings();
			}
		}else if(stateGame){
			if(stateFly == false){
				drawWizardJumpUp();
			}
		}
	}
	if(e.keyCode == 65){                         //A
		nowKey[65] = true;
		if(stateGame){
			drawWizardLeft();
		}
	}                                           
	if(e.keyCode == 83){                         //S
		nowKey[83] = true;
		if(stateMenu){
			if(positionMenu == 1){
				ctx1.clearRect(0,0,800,600);
				drawMenu();
				drawMenuSettings();
			}else if(positionMenu == 2){
				ctx1.clearRect(0,0,800,600);
				drawMenu();
				drawMenuHelp();
			}else if(positionMenu == 3){
				ctx1.clearRect(0,0,800,600);
				drawMenu();
				drawMenuGame();
			}
		}
	}                                           
	if(e.keyCode == 68){                         //D
		nowKey[68] = true;
		if(stateGame){
			drawWizardRight();
		}
	}
	if(e.keyCode == 32){                         //Space
		nowKey[32] = true;
		if(stateGame){
			if(x_b == 0){
				if(mana >= 25){
					mana -= 25;
					ctx1.fillStyle = ("#1c2a1b");
					ctx1.fillRect(535,5,260,16);
					drawFireBall();
				}
			}
		}
	}
	if(e.keyCode == 13){                         //Enter
		nowKey[13] = true;
		if(stateMenu){
			if(positionMenu == 1){
				drawCharacter();
			}else if(positionMenu == 2){
				drawSettings();
			}else if(positionMenu == 3){
				drawHelp();
			}
		}else if(stateHelp){
			drawMenu();
			drawMenuGame();
			stateHelp = false;
		}else if(stateSettings){
			drawMenu();
			drawMenuGame();
			stateSettings = false;
		}else if(stateCharacter){
			game();
			drawWizardRight();
		}
	}
	if(e.keyCode == 49){                         //Цифра 1
		nowKey[49] = true;
	}
	if(e.keyCode == 50){                         //Цифра 2
		nowKey[50] = true;
	}
	if(e.keyCode == 51){                         //Цифра 3
		nowKey[51] = true;
	}
	if(e.keyCode == 52){                         //Цифра 4
		nowKey[52] = true;
	}
}
window.onkeyup = function (e){
	if(e.keyCode == 87){nowKey[87] = false;}
	if(e.keyCode == 65){nowKey[65] = false;}
	if(e.keyCode == 65){nowKey[65] = false;}
	if(e.keyCode == 65){nowKey[65] = false;}
	if(e.keyCode == 65){nowKey[65] = false;}
	if(e.keyCode == 65){nowKey[65] = false;}
	if(e.keyCode == 65){nowKey[65] = false;}
	if(e.keyCode == 65){nowKey[65] = false;}
	if(e.keyCode == 65){nowKey[65] = false;}
	if(e.keyCode == 65){nowKey[65] = false;}
}