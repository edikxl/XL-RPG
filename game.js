var canvas_bg = document.getElementById('canvas_bg');
var ctx1 = canvas_bg.getContext('2d');

var canvas_enemy = document.getElementById('canvas_enemy');
var ctx2 = canvas_enemy.getContext('2d');

var canvas_player = document.getElementById('canvas_player');
var ctx3 = canvas_player.getContext('2d');

var game = function(){
	stateCharacter = false;
	ctx1.drawImage(interface,0,0);
	ctx1.drawImage(level1_1,0,25);
	level = level1_1;
	stateGame = true;
}
var drawLevel = function(levelNow){
	ctx1.drawImage(levelNow,0,25);
	x_p = 5,
	y_p = 365;
	drawWizard();
	spawnEnemy(2,greenBooLeft,100,20);
}
var startGame = function(){
	drawMenu();
	drawMenuGame();
}
var gameLoop = function(){
	if(stateGame){
		drawHP(100);
		drawXP(0);
		drawMana(100);
	}
}
var startGameLoop = function(){
	setInterval(gameLoop,1000/60);
}
//Клавиатура
var keys = {
	W : '87',
	A : '65',
	S : '83',
	D : '68',
	Space : '32',
	Enter : '13'
}

var nowKey = 0;

window.onkeydown = function (e) {
	nowKey = e.keyCode;
	if(nowKey == keys.W){
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
	}else if(nowKey == keys.A){
		if(stateGame){
			drawWizardLeft();
		}
	}else if(nowKey == keys.S){
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
	}else if(nowKey == keys.D){
		if(stateGame){
			drawWizardRight();
		}
	}else if(nowKey == keys.Space){
		if(stateGame){
			drawFireBall();
		}
	}else if(nowKey == keys.Enter){
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