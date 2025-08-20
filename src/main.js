import k from "./kaplayCtx";
import game from "./scenes/game";
import mainMenu from "./scenes/mainMenu";

//Loading the sprites
k.loadSprite("chemical-bg", "graphics/chemical-bg.png");
k.loadSprite("platforms", "graphics/platforms.png");
k.loadSprite("sonic", "graphics/sonic.png", {
    sliceX: 8,
    sliceY: 2,
    anims: {
        run: {from: 0, to: 7, loop: true, speed: 30 },
        jump: {from: 8, to: 15, loop: true, speed: 100 },
    },
});
k.loadSprite("ring ", "graphics/ring.png", {
    sliceX: 16,
    sliceY: 1,
    anims: {
        spin: {from: 0, to: 16, loop: true, speed: 30 },
    },
});
k.loadSprite("motobug", "graphics/motobug.png", {
    sliceX: 5,
    sliceY: 1,
    anims: {
        run: {from: 0, to: 4, loop: true, speed: 8 },
    },
});
k.loadSprite("eggbot", "graphics/eggbot.png", {
    sliceX: 3,
    sliceY: 3,
    anims: {
        fly: {from: 0, to: 5, loop:true, speed: 8 },
    }
})

//Loading the font
k.loadFont("mania","fonts/mania.ttf");

//Loading the sound effects including the background music
k.loadSound("destroy", "sounds/Destroy.wav");
k.loadSound("hurt", "sounds/Hurt.wav");
k.loadSound("hyper-ring", "sounds/HyperRing.wav");
k.loadSound("jump", "sounds/Jump.wav");
k.loadSound("ring", "sounds/Ring.wav");
k.loadSound("city", "sounds/city.mp3");

k.scene("main-menu",mainMenu);

k.scene("game", game);

k.scene("gameover", () => {});

k.go("main-menu");