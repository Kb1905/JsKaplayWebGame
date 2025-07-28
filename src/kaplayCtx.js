import kaplay from "kaplay";

const k = kaplay({
    width: 1920,
    heigh: 1080,
    letterbox: true,
    background:[0, 0, 0],
    global: false,
});

export default k;