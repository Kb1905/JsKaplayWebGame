import k from "../kaplayCtx";

export function makeEggBot(pos) {
    return k.add([
        k.sprite("eggbot", {anim: "fly"}),
        k.scale(3),
        k.area({shape: new k.Rect(k.vec2(-5,0), 32, 32 )}), //area helps add a hitbox
        k.anchor("center"), //anchor allows to change the origin point, the deafult is usually top left
        k.pos(pos),
        k.offscreen(),
        "enemy",
    ]);
}