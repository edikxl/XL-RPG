var variable = function(){
	playerName = "Чувак без ника";
	//Игровые статусы
	stateMenu = false;
	stateSettings = false;
	stateHelp = false;
	stateGame = false;
	stateCutscene = false;
	stateCharacter = false;
	stateFly = false;
	stateMove = false;
	stateEnemy = false;
    //Позиция в меню
	positionMenu = 0;
    //Уровень карты(Ват?)
	level = 0;
    //Корды перса
	x_p = 0;
	y_p = 0;
    //Корды врага
	x_e = 300;
	y_e = 365;
    //Корды шара
	x_b = 0;
	y_b = 45;
	//Уровень прыжка
	jLvl = 0;
	maxJLvl = 16;
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
	xpToUp = 0;
    //Адские массивы
	enemyInfo = {};
	enemyListX = [];
	enemyListY = [];
	colEnemy = 0;
	killInLvl = 0;
}