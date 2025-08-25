import { makeEggBot } from "../entities/eggbot";
import { makeMotobug } from "../entities/motobug";
import { makeSonic } from "../entities/sonic";
import { makeRing } from "../entities/ring";
import k from "../kaplayCtx";

export default function game() {
    k.setGravity(3100);

    const bgPieceWidth = 1920; 
    const bgPieces = [
        k.add([k.sprite("chemical-bg"), k.pos(0, 0), k.scale(2), k.opacity(0.8)]),
        k.add([k.sprite("chemical-bg"), k.pos(bgPieceWidth * 2 , 0), k.scale(2), k.opacity(0.8)]),
    ];
    const platformWidth = 1280;
    const platforms = [
        k.add([k.sprite("platforms"), k.pos(0, 450), k.scale(4)]),
        k.add([k.sprite("platforms"), k.pos(platformWidth * 4, 450), k.scale(4)]),
    ];

    let gameSpeed = 300;
    k.loop(1, () => {
        gameSpeed += 50;
    });

    const sonic = makeSonic(k.vec2(200,745));
    sonic.setControls();
    sonic.setEvents();
    sonic.onCollide("enemy", (enemy) => {
        if(!sonic.isGrounded()){
            k.play("destroy");
            k.play("hyper-ring");
            k.destroy(enemy)
            sonic.play("jump")
            sonic.jump();
            return;
        }
        k.play("hurt");
        k.go("gameover");

    });

    // sonic.onCollide("airEnemy", (enemy) => {
    //     k.play("hurt");
    //     k.go("gameover");
    // })

    const spawnMotoBug = () => {
        const motobug = makeMotobug(k.vec2(1950, 773));
        motobug.onUpdate(() => {
            if (gameSpeed < 3000) {
                motobug.move(-(gameSpeed + 300), 0);
                return;
            }
            motobug.move(-gameSpeed, 0);
        });
        motobug.onExitScreen(() => {
            if (motobug.pos.x < 0) k.destroy(motobug);
        });
        const waitTime = k.rand(0.5,2);
        k.wait(waitTime, spawnMotoBug);
    };
    spawnMotoBug();

    const spawnEggBot = () => {
        const eggbot = makeEggBot(k.vec2(1950, 470));
        eggbot.onUpdate(() => {
            if (gameSpeed < 3000) {
                eggbot.move(-(gameSpeed + 300), 0);
                return;
            }
            eggbot.move(-gameSpeed, 0);
        });
        eggbot.onExitScreen(() => {
            if (eggbot.pos.x < 0) k.destroy(eggbot);
        });
        const waitTime = k.rand(2,8);
        k.wait(waitTime, spawnEggBot);
    };
    spawnEggBot();
    
    const spawnRing =() => {
        const ring = makeRing(k.vec2(1950,745))
        ring.onUpdate(() => {
            if (gameSpeed < 3000) {
                ring.move(-(gameSpeed + 300), 0);
                return;
            }
            ring.move(-gameSpeed, 0);
        });
        ring.onExitScreen(() => {
            if (ring.pos.x < 0) k.destroy(ring);
        });
        const waitTime = k.rand(0.5,3);
        k.wait(waitTime, spawnRing);
    };
    spawnRing;



    k.add([
        k.rect(1920,300),
        k.opacity(0),
        k.area(),
        k.pos(0,832),
        k.body({isStatic: true}),
    ]);

    k.onUpdate(() => {
        if (bgPieces[1].pos.x < 0){
            bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth * 2, 0);
            bgPieces.push(bgPieces.shift());
        }
        bgPieces[0].move(-100,0);
        bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth * 2, 0);

        if (platforms[1].pos.x < 0){
            platforms[0].moveTo(platforms[1].pos.x + platformWidth * 4, 450);
            platforms.push(platforms.shift());
        }
        platforms[0].move(-gameSpeed,0);
        platforms[1].moveTo(platforms[0].pos.x + platformWidth * 4, 450);

        bgPieces[0].moveTo(bgPieces[0].pos.x, -sonic.pos.y/ 10 - 50);
        bgPieces[1].moveTo(bgPieces[1].pos.x, -sonic.pos.y/ 10 - 50);
    }); 
}

