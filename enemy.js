var getRandom = function(min, max){   //Добавляет рандома,на время написания кода делает позицию спавна мобов случайной
  return Math.random() * (max - min) + min;  //Принимает минимальное и максимальное значение для рандомных чисел
}
var spawnEnemy = function(col,type,hp,damage){  //Спавнит моба,принимает количество,тип мобов,а так же их урон и уровень жизни
	stateEnemy = true,
	colEnemy = col;
	var i = col,
		num = 1;
	while(i != 0){
		var x = getRandom(200,400),
			y = getRandom(350,370),
			xHP = x - 15,
			yHP = y - 25,
			enemyName = "Enemy" + num;
		ctx2.drawImage(type,x,y);
		ctx2.drawImage(intEnemyHP,x - 17,y - 27);
		ctx2.fillStyle = ("Red");
		ctx2.fillRect(xHP,yHP,hp,15);
		ctx2.fillStyle = ("Black");
		ctx2.fillText(hp+ "/" +hp,xHP + 35,yHP + 12);
		enemyInfo[enemyName] = {
			type : type,
			xHP : xHP,
			yHP : yHP,
			hp : hp,
			damage : damage,
			x : x,
			y : y,
			status : true
		};
		enemyListX.push(x);
		enemyListY.push(y);
		num += 1;
		i -= 1;
	}
}
var enemyUpdate = function(dHP,iter){	//Обновляет количество хп врага,принимает его номер и количество нанесённого им урона,
	var name = "Enemy" + (iter + 1);
	var i = colEnemy;                   //В стадии разработки,так что одноразовая
	enemyInfo[name].hp -= dHP;
	if(enemyInfo[name].status){
		var xhp = enemyInfo[name].xHP,
			yhp = enemyInfo[name].yHP;
		ctx2.drawImage(greenBooLeft,enemyInfo[name].x,enemyInfo[name].y);
		ctx2.drawImage(intEnemyHP,enemyInfo[name].x - 17,enemyInfo[name].y - 27);
		ctx2.fillStyle = ("Red");
		ctx2.fillRect(xhp,yhp,enemyInfo[name].hp,15);
		ctx2.fillStyle = ("Black");
		ctx2.fillText(enemyInfo[name].hp+ "/100",xhp + 35,yhp + 12);
		i -= 1;
	}
    if(enemyInfo[name].hp == 0){
    	if(enemyInfo[name].type == greenBooLeft){
			xp += 25;
    	}
		enemyInfo[name].status = false;
		killInLvl += 1;
		ctx2.clearRect(enemyInfo[name].x,enemyInfo[name].y - 5,77,115);
		ctx2.clearRect(enemyInfo[name].xHP - 5,enemyInfo[name].yHP - 5,260,23);
	}
}
var enemyDamaged = function(skill,x,y,iter){  //Принимает название умения,номер врага которого бьют,и его координаты
	if(skill == fireBall){
		var name = "Enemy" + (iter + 1);
		enemyUpdate(20,iter); // 20 is damage
	}
}