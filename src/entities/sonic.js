export function makeSonic(pos) {
    const sonic = k.add([
        k.sprite("sonic", {anim: "run"}),
        k.scale(4),
        k.area(), //area helps add a hitbox
        k.anchor(""), //anchor allows to change the origin point, the deafult is usually top left
    ])
}