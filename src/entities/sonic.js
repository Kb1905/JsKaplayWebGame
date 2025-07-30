import k from "../kaplayCtx";

export function makeSonic(pos) {
    const sonic = k.add([
        k.sprite("sonic", {anim: "run"}),
        k.scale(4),
        k.area(), //area helps add a hitbox
        k.anchor("center"), //anchor allows to change the origin point, the deafult is usually top left
        k.pos(pos),
        k.body({jumpForce : 1850 }),
        {
            setControls(){
                k.onButtonPress("jump", () => {
                    if (this.isGrounded()){
                        this.play("jump");
                        this.jump();
                        k.play("jump", {volume: 0.5});
                    }
                });
            },
            setEvents(){
                this.onGround(() => {
                    this.play("run");
                });
            },
        },
    ]);
}