var drawCharacter = function(){  //Рисует выбранного персонажа
	stateMenu = false;
	ctx1.drawImage(character,0,0);
	ctx1.drawImage(choosed_wizard,18,120);
	stateCharacter = true;
}
var drawWizard = function(){   //Рисует Мага
	ctx3.drawImage(wizardRight,x_p,y_p);
}
var drawWizardLeft = function(){  //Рисует Мага влево
	x_p -= 5;
	ctx3.clearRect(0,0,800,600);
	ctx3.drawImage(wizardLeft,x_p,y_p);
	if(x_p <= 0){
		x_p += 5;
	}
	if(level == level1_1){
		if(x_p <= 345){
			if(y_p >= 255){
				x_p += 5;
				alert("Пути назад нет!");
			}
		}
	}
}
var drawWizardRight = function(){  //Рисует Мага вправо
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
		}else if(level = level1_2){
			level = level1_3;
			drawLevel(level1_3);
		}
	}
}
var checkHeroDamage = function(skill){   //Проверяет урон нанесённый умением
	for (i = 0; i < enemyListX.length; i++){
		if(x_p + x_b >= enemyListX[i]){
			if(x_p + x_b <= enemyListX[i] + 5){
				enemyDamaged(skill,enemyListX[i] - 15,enemyListY[i] - 25,i);
			}
		}
	}
}
var drawFireBall = function(){  //Рисует огненный шар
	ctx3.clearRect(0,0,800,600);
	ctx3.drawImage(fireBall,x_p + x_b,y_p + y_b);
	drawWizard();
	checkHeroDamage(fireBall);
	x_b += 5;
	if(x_b > 750){
		ctx3.clearRect(0,0,800,600);
		drawWizard();
		x_b = 0;
		return;
	}else{
		requestAnimationFrame(drawFireBall);
	}
}
var drawHP = function(hp){  //Рисует шкалу здоровья
	hp_col = hp;
	hp_var = hp_col * 2.6;
	ctx1.fillStyle = ('Red');
	ctx1.fillRect(5,5,hp_var,16);
	ctx1.fillStyle = ("Black");
	ctx1.fillText((hp_col + '/100'),120,16);
}	
var drawXP = function(xp){//Рисует шкалу опыта
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
var drawMana = function(mana){  //Рисует шкалу маны
	mana_col = mana;
	mana_var = mana_col * 2.6;
	ctx1.fillStyle = ('Blue');
	ctx1.fillRect(535,5,mana_var,16);
	ctx1.fillStyle = ("Black");
	ctx1.fillText((mana_col + '/100'),650,16);
}
var manaReg = function(manaRegCol){
	if(mana < 100){
		mana += 5;
	}
}