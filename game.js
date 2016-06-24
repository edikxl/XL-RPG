//P.S Одноразовые функции-это такие ф-ции которые используются раз за всю игру,или те которые нельзя использовать больше

var canvas_bg = document.getElementById('canvas_bg');
var ctx1 = canvas_bg.getContext('2d');//Создаём переменную для доступа к Канвасу с задним фоном и интерфейсом

var canvas_enemy = document.getElementById('canvas_enemy');
var ctx2 = canvas_enemy.getContext('2d');//,,--,, с врагами и всеми их анимациями

var canvas_player = document.getElementById('canvas_player');
var ctx3 = canvas_player.getContext('2d');//,,--,, с героем и всеми его анимациями

var game = function(){    //Функция(одноразовая) запускает игру
	stateCharacter = false;
	ctx1.drawImage(interface,0,0);
	ctx1.drawImage(level1_1,0,25);
	level = level1_1;
	stateGame = true;
}
var drawLevel = function(levelNow){   //Рисует уровень и принимает значение текущего уровня
	ctx1.drawImage(levelNow,0,25);
	x_p = 5,
	y_p = 365;
	drawWizard();
	spawnEnemy(4,greenBooLeft,100,20);
}
var startGame = function(){     //Одноразовая,рисует главное меню
	drawMenu();
	drawMenuGame();
	setInterval(manaReg,1000);
}
var gameLoop = function(){     //Игровой цикл,обновляет параметры героя
	if(stateGame){
		drawHP(hp);
		drawXP(xp);
		drawMana(mana);
		checkXP();
	}
}
var startGameLoop = function(){   //Запускает игровой цикл
	setInterval(gameLoop,1000/60);
}
//Клавиатура
var keys = {   //Массив с клавишами и их цифровыми значениями
	W : '87',
	A : '65',
	S : '83',
	D : '68',
	Space : '32',
	Enter : '13'
}

var nowKey = 0; //Переменная текущей клавиши

window.onkeydown = function (e) {
	nowKey = e.keyCode;
	if(nowKey == keys.W){  //События при нажатии клавиши W
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
		}
	}else if(nowKey == keys.A){  //,,--,, клавиши A
		if(stateGame){
			drawWizardLeft();
		}
	}else if(nowKey == keys.S){  //,,--,, клавиши S
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
	}else if(nowKey == keys.D){  //,,--,, клавиши D
		if(stateGame){
			drawWizardRight();
		}
	}else if(nowKey == keys.Space){   //,,--,, клавиши Пробел
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
	}else if(nowKey == keys.Enter){  //,,--,, клавиши Enter
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
}