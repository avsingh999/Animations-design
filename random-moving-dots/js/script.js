function random() {
    q = Math.floor(Math.random() * 100);
    fontsize = Math.floor(Math.random() * 20) + 4;
    speed = Math.floor(Math.random() * 8) + 2;
    $("div").eq(q).css("font-size", fontsize + "vmin");
    $("div").eq(q).css("animation-duration", speed + "s");
    setTimeout(random, 666);
}

random();