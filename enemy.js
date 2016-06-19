var getRandom = function(min, max){
  return Math.random() * (max - min) + min;
}
var spawnEnemy = function(col,type,hp,damage){
	stateEnemy = true;
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
			xHP : xHP,
			yHP : yHP,
			hp : hp,
			damage : damage
		};
		window["enemy_x"+ num] = x;
		window["enemy_y"+ num] = y;
		num += 1;
		i -= 1;
	}
}
var enemyDamaged = function(skill){
	if(skill == fireBall){
		console.log("Фаер бол запущен блее...");//Разберись с этой шинимой
	}
}