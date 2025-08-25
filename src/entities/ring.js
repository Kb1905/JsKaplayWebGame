import k from "../kaplayCtx";

export function makeRing(pos) {
    return k.add([
        k.sprite("ring", {anim: "spin"}),
        k.area(),
        k.scale(4),
        k.anchor("center"), //anchor allows to change the origin point, the deafult is usually top left
        k.pos(pos),
        k.offscreen(),
        "ring",
    ]);
}