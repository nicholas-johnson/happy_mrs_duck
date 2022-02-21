const ducks = []

const makeDuck = () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = 100;
    return { x, y, size }
}

for (i = 0; i < 100; i++) {
    ducks.push(makeDuck());
}

const drawDuck = (duck) => {
    const { x, y, size } = duck;
    const div =
        $(`
            <div class="duck" style="top: ${y}%; left: ${x}%">
                <img src="./duck.png" style="width: ${size}px" />
                Hello I am duck
            </div>
        `);
    div.click(() => {
        duck.size += 100;
        console.log(duck);
        drawDuck(duck);
    });
    $('body').append(div);
}

ducks.forEach(duck => drawDuck(duck));