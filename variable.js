var variable = function(){
	//Игровые статусы
	stateMenu = false;
	stateSettings = false;
	stateHelp = false;
	stateGame = false;
	stateCharacter = false;
	stateEnemy = false;
    //Позиция в меню
	positionMenu = 0;
    //Уровень карты(Ват?)
	level = 0;
    //Корды перса
	x_p = 25;
	y_p = 250;
    //Корды хз чего
	x_m = 1200;
	y_m = 750;
    //Корды врага
	x_e = 300;
	y_e = 365;
    //Корды шара
	x_b = 0;
	y_b = 45;
    //Количество хп
    hp = 100;
	hp_col = 100;
	hp_var = 0;
    //Кол опыта
    xp = 0;
	xp_col = 0;
	xp_var = 0;
    //Кол маны
    mana = 100;
	mana_col = 100;
	mana_var = 0;
	manaRegCol = 5;
    //Текущий уровень перса походу,и опыт до след
	nowLvl = 0;
	xpToUp = 100;
    //Адские массивы
	enemyInfo = {};
	enemyListX = [];
	enemyListY = [];
	colEnemy = 0;
}