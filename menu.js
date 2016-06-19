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