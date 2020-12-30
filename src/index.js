import Game from './game'; 

let $ = new Game();

$.addObject("Player", "player", {
    x: 100,
    y: 100,
    width: 42,
    height: 60,
});

$.addObject("Platform", "", {
    x: -200,
    y: 250,
    width: 500,
    height: 30,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "", {
    x: -200,
    y: 0,
    width: 30,
    height: 500,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "disappearPl1", { //Disappear
    x: 400,
    y: 250,
    width: 450,
    height: 30,
    color: '#ff9f43',
    colliding: false
});

$.addObject("Platform", "", {
    x: 450,
    y: 550,
    width: 150,
    height: 30,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "", {
    x: 700,
    y: 480,
    width: 100,
    height: 20,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "", {
    x: 870,
    y: 400,
    width: 100,
    height: 20,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "", {
    x: 1050,
    y: 330,
    width: 100,
    height: 20,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "", {
    x: 1200,
    y: 400,
    width: 80,
    height: 20,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "", {
    x: 1500,
    y: 350,
    width: 100,
    height: 20,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "", {
    x: 1750,
    y: 500,
    width: 100,
    height: 20,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 1900,
    y: 450,
    width: 50,
    height: 50,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "", {
    x: 1950,
    y: 400,
    width: 50,
    height: 50,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 2000,
    y: 350,
    width: 50,
    height: 50,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 2050,
    y: 300,
    width: 50,
    height: 50,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 2100,
    y: 250,
    width: 50,
    height: 50,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 2300,
    y: 250,
    width: 500,
    height: 1000,
    color: '#ff9f43',
    colliding: true
});

$.addObject("ActivePlatform", "deadPl1", { // Dead
    x: 2450,
    y: -150,
    width: 25,
    height: 250,
    color: '#ee5253',
    colliding: false,
    dx: 0,
    dy: 3,
    lx: 0,
    ly: 150
});

$.addObject("ActivePlatform", "deadPl2", { // Dead
    x: 2600,
    y: -150,
    width: 25,
    height: 250,
    color: '#ee5253',
    colliding: false,
    dx: 0,
    dy: 4,
    lx: 0,
    ly: 150
});
$.addObject("ActivePlatform", "", { 
    x: 2800,
    y: 250,
    width: 170,
    height: 20,
    color: '#ff9f43',
    colliding: true,
    dx: 3,
    dy: 0,
    lx: 500,
    ly: 0
});
$.addObject("Platform", "", {
    x: 3470,
    y: 250,
    width: 400,
    height: 1000,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 3890,
    y: 250,
    width: 20,
    height: 600,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 4000,
    y: 100,
    width: 20,
    height: 750,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 3870,
    y: 1000,
    width: 500,
    height: 25,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 3870,
    y: 1000,
    width: 500,
    height: 25,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 4550,
    y: 1000,
    width: 150,
    height: 25,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "", {
    x: 4850,
    y: 900,
    width: 100,
    height: 20,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 5050,
    y: 925,
    width: 100,
    height: 20,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "", {
    x: 5250,
    y: 950,
    width: 100,
    height: 20,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "", {
    x: 5500,
    y: 950,
    width: 100,
    height: 20,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 5750,
    y: 950,
    width: 100,
    height: 20,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 6000,
    y: 950,
    width: 100,
    height: 20,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 6250,
    y: 950,
    width: 100,
    height: 20,
    color: '#ff9f43',
    colliding: true
});
$.addObject("ActivePlatform", "deadPl3", { // Dead
    x: 5250,
    y: 900,
    width: 70,
    height: 20,
    color: '#ee5253',
    colliding: false,
    dx: 6,
    dy: 0,
    lx: 1030,
    ly: 0
});
$.addObject("Platform", "", {
    x: 6500,
    y: 950,
    width: 800,
    height: 700,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 6900,
    y: 860,
    width: 25,
    height: 90,
    color: '#ff9f43',
    colliding: true
});

$.addObject("Platform", "", {
    x: 6900,
    y: 615,
    width: 25,
    height: 130,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 6925,
    y: 615,
    width: 300,
    height: 25,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Platform", "", {
    x: 7275,
    y: 615,
    width: 25,
    height: 336,
    color: '#ff9f43',
    colliding: true
});
$.addObject("Chest", "gold", {
    x: 7195,
    y: 900,
    width: 50,
    height: 50,
    colliding: false
});
$.start();