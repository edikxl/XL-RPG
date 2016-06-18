var canvas_bg = document.getElementById('canvas_bg');
var ctx1 = canvas_bg.getContext('2d');

var canvas_enemy = document.getElementById('canvas_enemy');
var ctx2 = canvas_enemy.getContext('2d');

var canvas_player = document.getElementById('canvas_player');
var ctx3 = canvas_player.getContext('2d');

var loadImage = function(){
	//Менюшки
	menu_bg = new Image();
	menu_bg.src = "image/menu/menu.png";

	menu_game = new Image();
	menu_game.src = "image/menu/game.png";

	menu_settings = new Image();
	menu_settings.src = "image/menu/menu_settings.png";

	menu_help = new Image();
	menu_help.src = "image/menu/menu_help.png";

	help = new Image();
	help.src = "image/help/help.png";

	settings = new Image();
	settings.src = "image/settings/settings.png";

	character = new Image();
	character.src = "image/game/character/choose/choose.png";

	choosed_wizard = new Image();
	choosed_wizard.src = "image/game/character/wizard/choosed_wizard.png";

	interface = new Image();
	interface.src = "image/game/interface/base.png";

	//Уровни
	map1_1 = new Image();
	map1_1.src = "image/game/map/1_1.png";

	level1_1 = new Image();
	level1_1.src = "image/game/map/level1_1.png";

	level1_2 = new Image();
	level1_2.src = "image/game/map/level1_2.png";

	//Персонаж
	wizardRight = new Image();
	wizardRight.src = "image/game/character/wizard/wizard_right.png";

	wizardLeft = new Image();
	wizardLeft.src = "image/game/character/wizard/wizard_left.png";
	//Умения
	fireBall = new Image();
	fireBall.src = "image/game/character/skills/wizard/fireBall.png";
	//Враги
	greenBooRight = new Image();
	greenBooRight.src = "image/game/enemy/GreenBoo_Right.png";

	greenBooLeft = new Image();
	greenBooLeft.src = "image/game/enemy/GreenBoo_Left.png";
}
var stateMenu = false,
	stateSettings = false,
	stateHelp = false,
	stateGame = false,
	stateCharacter = false,
	stateEnemy = false;

var positionMenu = 0;

var level = 0;

var x_p = 25,
	y_p = 250;

var x_m = 1200,
	y_m = 750;

var x_e = 300,
	y_e = 365;

var x_b = 90,
	y_b = 45;

var hp_col = 100,
	hp_var = hp_col * 2.6;

var enemy_hp = 100;

var xp_col = 0,
	xp_var = xp_col * 2.6;

var mana_col = 100,
	mana_var = mana_col * 2.6;

var nowLvl = 0,
	xpToUp = 100;

var drawMenu = function(){
	ctx1.drawImage(menu_bg,0,0);
	stateMenu = true;
}
var drawMenuGame = function(){
	drawMenu();
	ctx1.drawImage(menu_game,261,126);
	positionMenu = 1;
	stateMenu = true;
}
var drawMenuSettings = function(){
	drawMenu();
	ctx1.drawImage(menu_settings,261,245);
	positionMenu = 2;
	stateMenu = true;
}
var drawMenuHelp = function(){
	drawMenu();
	ctx1.drawImage(menu_help,261,358);
	positionMenu = 3;
	stateMenu = true;
}
var drawHelp = function(){
	stateMenu = false;
	ctx1.drawImage(help,0,0);
	stateHelp = true;
}
var drawSettings = function(){
	stateMenu = false;
	ctx1.drawImage(settings,0,0);
	stateSettings = true;
}
var drawCharacter = function(){
	stateMenu = false;
	ctx1.drawImage(character,0,0);
	ctx1.drawImage(choosed_wizard,18,120);
	stateCharacter = true;
}
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
}
var drawWizard = function(){
	ctx3.drawImage(wizardRight,x_p,y_p);
}
var drawWizardLeft = function(){
	x_p -= 5;
	ctx3.clearRect(0,0,800,600);
	ctx3.drawImage(wizardLeft,x_p,y_p);
	if(x_p <= 0){
		x_p += 5;
	}
}
var drawWizardRight = function(){
	x_p += 5;
	ctx3.clearRect(0,0,800,600);
	ctx3.drawImage(wizardRight,x_p,y_p);
	if(level == level1_1){
		if(x_p >= 250){
			if(y_p < 365){
				y_p += 5;
			}
		}
	}
	if(x_p >= 800){
		if(level == level1_1){
			level = level1_2;
			drawLevel(level1_2);
			drawEnemy(level1_2);
		}else if(level = level1_2){
			level = level1_3;
			drawLevel(level1_3);
			drawEnemy(level1_3);
		}
	}
}
var drawEnemy = function(levelNow){
	if(levelNow == level1_2){
		ctx2.drawImage(greenBooLeft,x_e,y_e);
		enemy_hp = 100;
		stateEnemy = true;
	}
}
var drawFireBall = function(){
	ctx3.clearRect(0,0,800,600);
	ctx3.drawImage(fireBall,x_p + x_b,y_p + y_b);
	drawWizard();
	x_b += 5;
	if(level == level1_1){
		if(x_b > 750){
			ctx3.clearRect(0,0,800,600);
			drawWizard();
			x_b = 0;
			return;
		}else{
			requestAnimationFrame(drawFireBall);
		}
	}else if(level == level1_2){
		if(x_b > 750){
			ctx3.clearRect(0,0,800,600);
			drawWizard();
			x_b = 0;
			return;
		}else if(x_b + x_p >= x_e){
			if((x_b + x_p) < 370){
				ctx3.clearRect(0,0,800,600);
				drawWizard();
				x_b = 0;
				enemy_hp -= 20;
				return;
			}else{
				requestAnimationFrame(drawFireBall);
			}
		}else{
			requestAnimationFrame(drawFireBall);
		}
	}else{
		alert("Wrong!");
	}
}
var drawHP = function(hp){
	hp_col = hp;
	hp_var = hp_col * 2.6;
	ctx1.fillStyle = ('Red');
	ctx1.fillRect(5,5,hp_var,16);
	ctx1.fillStyle = ("Black");
	ctx1.fillText((hp_col + '/100'),120,16);
}	
var drawXP = function(xp){
	xp_col = xp;
	if(nowLvl == 0){
		xp_var = xp_col * 2.6;
	}else if(nowLvl == 1){
		xp_var = xp_col * 1.3;
	}
	ctx1.fillStyle = ('Yellow');
	ctx1.fillRect(270,5,xp_var,16);
	ctx1.fillStyle = ("Black");
	ctx1.fillText(("Level " + nowLvl + "  (" + xp_col + '/' + xpToUp + ")"),370,16);
}
var drawMana = function(mana){
	mana_col = mana;
	mana_var = mana_col * 2.6;
	ctx1.fillStyle = ('Blue');
	ctx1.fillRect(535,5,mana_var,16);
	ctx1.fillStyle = ("Black");
	ctx1.fillText((mana_col + '/100'),650,16);
}
var drawEnemyHP = function(hp){
	if(level == level1_2){
		if(enemy_hp <= 0){
			stateEnemy = false;
		}else{
			ctx2.clearRect(x_e - 10,y_e - 25,100,16);
			ctx2.fillStyle = ('Red');
			ctx2.fillRect(x_e - 10,y_e - 25,hp,16);
			ctx2.fillStyle = ("Black");
			ctx2.fillText(hp +"/100",x_e + 20,y_e - 15);
		}
	}
}
var checkEnemy = function(){
	if(stateGame){
		if(stateEnemy == false){
			ctx2.clearRect(0,0,800,600);
		}
	}
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
		drawEnemyHP(enemy_hp);
		checkEnemy();
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