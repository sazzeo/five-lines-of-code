const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

enum RawTile {
    AIR,
    FLUX,
    UNBREAKABLE,
    PLAYER,
    STONE, FALLING_STONE,
    BOX, FALLING_BOX,
    KEY1, LOCK1,
    KEY2, LOCK2
}

interface Tile {
    isAir: () => boolean;
    isFlux: () => boolean;
    isUnbreakable: () => boolean;
    isPlayer: () => boolean;
    isStone: () => boolean;
    isFallingStone: () => boolean;
    isBox: () => boolean;
    isFallingBox: () => boolean;
    isKey1: () => boolean;
    isKey2: () => boolean;
    isLock1: () => boolean;
    isLock2: () => boolean;

    color: (g: CanvasRenderingContext2D) => void;
}

class Air implements Tile {
    isAir = () => true;
    isFlux = () => false;
    isUnbreakable = () => false;
    isPlayer = () => false;
    isStone = () => false;
    isFallingStone = () => false;
    isBox = () => false;
    isFallingBox = () => false;
    isKey1 = () => false;
    isKey2 = () => false;
    isLock1 = () => false;
    isLock2 = () => false;

    color = (g: CanvasRenderingContext2D) => {
    };
}

class Flux implements Tile {
    isAir = () => false;
    isFlux = () => true;
    isUnbreakable = () => false;
    isPlayer = () => false;
    isStone = () => false;
    isFallingStone = () => false;
    isBox = () => false;
    isFallingBox = () => false;
    isKey1 = () => false;
    isKey2 = () => false;
    isLock1 = () => false;
    isLock2 = () => false;
    color = (g: CanvasRenderingContext2D) => {
        g.fillStyle = "#ccffcc"
    };
}

class Unbreakable implements Tile {
    isAir = () => false;
    isFlux = () => false;
    isUnbreakable = () => true;
    isPlayer = () => false;
    isStone = () => false;
    isFallingStone = () => false;
    isBox = () => false;
    isFallingBox = () => false;
    isKey1 = () => false;
    isKey2 = () => false;
    isLock1 = () => false;
    isLock2 = () => false;
    color = (g: CanvasRenderingContext2D) => {
        g.fillStyle = "#999999"
    };
}

class Player implements Tile {
    isAir = () => false;
    isFlux = () => false;
    isUnbreakable = () => false;
    isPlayer = () => true;
    isStone = () => false;
    isFallingStone = () => false;
    isBox = () => false;
    isFallingBox = () => false;
    isKey1 = () => false;
    isKey2 = () => false;
    isLock1 = () => false;
    isLock2 = () => false;
    color = (g: CanvasRenderingContext2D) => {
    };
}


class Stone implements Tile {
    isAir = () => false;
    isFlux = () => false;
    isUnbreakable = () => false;
    isPlayer = () => false;
    isStone = () => true;
    isFallingStone = () => false;
    isBox = () => false;
    isFallingBox = () => false;
    isKey1 = () => false;
    isKey2 = () => false;
    isLock1 = () => false;
    isLock2 = () => false;
    color = (g: CanvasRenderingContext2D) => {
        g.fillStyle = "#0000cc"
    };
}

class FallingStone implements Tile {
    isAir = () => false;
    isFlux = () => false;
    isUnbreakable = () => false;
    isPlayer = () => false;
    isStone = () => false;
    isFallingStone = () => true;
    isBox = () => false;
    isFallingBox = () => false;
    isKey1 = () => false;
    isKey2 = () => false;
    isLock1 = () => false;
    isLock2 = () => false;
    color = (g: CanvasRenderingContext2D) => {
        g.fillStyle = "#0000cc"
    };
}

class Box implements Tile {
    isAir = () => false;
    isFlux = () => false;
    isUnbreakable = () => false;
    isPlayer = () => false;
    isStone = () => false;
    isFallingStone = () => false;
    isBox = () => true;
    isFallingBox = () => false;
    isKey1 = () => false;
    isKey2 = () => false;
    isLock1 = () => false;
    isLock2 = () => false;
    color = (g: CanvasRenderingContext2D) => {
        g.fillStyle = "#8b4513"
    };
}

class FallingBox implements Tile {
    isAir = () => false;
    isFlux = () => false;
    isUnbreakable = () => false;
    isPlayer = () => false;
    isStone = () => false;
    isFallingStone = () => false;
    isBox = () => false;
    isFallingBox = () => true;
    isKey1 = () => false;
    isKey2 = () => false;
    isLock1 = () => false;
    isLock2 = () => false;
    color = (g: CanvasRenderingContext2D) => {
        g.fillStyle = "#8b4513"
    };
}

class Key1 implements Tile {
    isAir = () => false;
    isFlux = () => false;
    isUnbreakable = () => false;
    isPlayer = () => false;
    isStone = () => false;
    isFallingStone = () => false;
    isBox = () => false;
    isFallingBox = () => false;
    isKey1 = () => true;
    isKey2 = () => false;
    isLock1 = () => false;
    isLock2 = () => false;
    color = (g: CanvasRenderingContext2D) => {
        g.fillStyle = "#ffcc00"
    };
}


class Key2 implements Tile {
    isAir = () => false;
    isFlux = () => false;
    isUnbreakable = () => false;
    isPlayer = () => false;
    isStone = () => false;
    isFallingStone = () => false;
    isBox = () => false;
    isFallingBox = () => false;
    isKey1 = () => false;
    isKey2 = () => true;
    isLock1 = () => false;
    isLock2 = () => false;
    color = (g: CanvasRenderingContext2D) => {
        g.fillStyle = "#ffcc00"
    };
}

class Lock1 implements Tile {
    isAir = () => false;
    isFlux = () => false;
    isUnbreakable = () => false;
    isPlayer = () => false;
    isStone = () => false;
    isFallingStone = () => false;
    isBox = () => false;
    isFallingBox = () => false;
    isKey1 = () => false;
    isKey2 = () => false;
    isLock1 = () => true;
    isLock2 = () => false;
    color = (g: CanvasRenderingContext2D) => {
        g.fillStyle = "#00ccff"
    };
}

class Lock2 implements Tile {
    isAir = () => false;
    isFlux = () => false;
    isUnbreakable = () => false;
    isPlayer = () => false;
    isStone = () => false;
    isFallingStone = () => false;
    isBox = () => false;
    isFallingBox = () => false;
    isKey1 = () => false;
    isKey2 = () => false;
    isLock1 = () => false;
    isLock2 = () => true;
    color = (g: CanvasRenderingContext2D) => {
        g.fillStyle = "#00ccff"
    };
}

enum RawInput {
    UP, DOWN, LEFT, RIGHT
}

interface Input {
    handle: () => void;
    isRight: () => boolean;
    isLeft: () => boolean;
    isUp: () => boolean;
    isDown: () => boolean;
}

class Right implements Input {
    handle = () => moveHorizontal(1)
    isRight = () => true;
    isLeft = () => false;
    isUp = () => false;
    isDown = () => false;
}

class Left implements Input {
    handle = () => moveHorizontal(-1)
    isRight = () => false;
    isLeft = () => true;
    isUp = () => false;
    isDown = () => false;
}

class Up implements Input {
    handle = () => moveVertical(-1)
    isRight = () => false;
    isLeft = () => false;
    isUp = () => true;
    isDown = () => false;
}

class Down implements Input {
    handle = () => moveVertical(1)
    isRight = () => false;
    isLeft = () => false;
    isUp = () => false;
    isDown = () => true;
}

let playerx = 1;
let playery = 1;

let rawMap: RawTile[][] = [
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 3, 0, 1, 1, 2, 0, 2],
    [2, 4, 2, 6, 1, 2, 0, 2],
    [2, 8, 4, 1, 1, 2, 0, 2],
    [2, 4, 1, 1, 1, 9, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
];

let map: Tile[][];

const assertExhausted = (x: never): never => {
    throw new Error("Unexpected object");
}

const transformTile = (tile: RawTile) => {
    switch (tile) {
        case RawTile.AIR:
            return new Air();
        case RawTile.FLUX:
            return new Flux();
        case RawTile.UNBREAKABLE:
            return new Unbreakable();
        case RawTile.PLAYER:
            return new Player();
        case RawTile.STONE:
            return new Stone();
        case RawTile.FALLING_STONE:
            return new FallingStone();
        case RawTile.BOX:
            return new Box();
        case RawTile.FALLING_BOX:
            return new FallingBox();
        case RawTile.KEY1:
            return new Key1();
        case RawTile.KEY2:
            return new Key2();
        case RawTile.LOCK1:
            return new Lock1();
        case RawTile.LOCK2:
            return new Lock2();
        default:
            assertExhausted(tile);
    }
}

const transformMap = () => {
    map = new Array(rawMap.length);
    for (let y = 0; y < rawMap.length; y++) {
        map[y] = new Array(rawMap[y].length);
        for (let x = 0; x < rawMap[y].length; x++) {
            map[y][x] = transformTile(rawMap[y][x]);
        }
    }
}

let inputs: Input[] = [];


//remove 함수 전문화
function removeLock1() {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x].isLock1()) {
                map[y][x] = new Air();
            }
        }
    }
}

function removeLock2() {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x].isLock2()) {
                map[y][x] = new Air();
            }
        }
    }
}

function moveToTile(newx: number, newy: number) {
    map[playery][playerx] = new Air();
    map[newy][newx] = new Player();
    playerx = newx;
    playery = newy;
}

function moveHorizontal(dx: number) {
    if (map[playery][playerx + dx].isFlux()
        || map[playery][playerx + dx].isAir()) {
        moveToTile(playerx + dx, playery);
    } else if ((map[playery][playerx + dx].isStone()
            || map[playery][playerx + dx].isBox())
        && map[playery][playerx + dx + dx].isAir()
        && !map[playery + 1][playerx + dx].isAir()) {
        map[playery][playerx + dx + dx] = map[playery][playerx + dx];
        moveToTile(playerx + dx, playery);
    } else if (map[playery][playerx + dx].isKey1()) {
        removeLock1();
        moveToTile(playerx + dx, playery);
    } else if (map[playery][playerx + dx].isKey2()) {
        removeLock2();
        moveToTile(playerx + dx, playery);
    }
}

function moveVertical(dy: number) {
    if (map[playery + dy][playerx].isFlux()
        || map[playery + dy][playerx].isAir()) {
        moveToTile(playerx, playery + dy);
    } else if (map[playery + dy][playerx].isKey1()) {
        removeLock1();
        moveToTile(playerx, playery + dy);
    } else if (map[playery + dy][playerx].isKey2()) {
        removeLock2();
        moveToTile(playerx, playery + dy);
    }
}


function update() {
    handleInputs();
    updateMap();
}

const handleInputs = () => {
    while (inputs.length > 0) {
        let current = inputs.pop();
        handleInput(current);
    }
}


function handleInput(input: Input) {
    input.handle();
}

const updateMap = () => {
    for (let y = map.length - 1; y >= 0; y--) {
        for (let x = 0; x < map[y].length; x++) {
            updateTile(y, x);
        }
    }
}

function updateTile(y: number, x: number) {
    if ((map[y][x].isStone() || map[y][x].isFallingStone())
        && map[y + 1][x].isAir()) {
        map[y + 1][x] = new FallingStone();
        map[y][x] = new Air();
    } else if ((map[y][x].isBox() || map[y][x].isFallingBox())
        && map[y + 1][x].isAir()) {
        map[y + 1][x] = new FallingBox();
        map[y][x] = new Air();
    } else if (map[y][x].isFallingStone()) {
        map[y][x] = new Stone();
    } else if (map[y][x].isFallingBox()) {
        map[y][x] = new Box();
    }
}


function draw() {
    const g = createGraphics();
    drawMap(g);
    drawPlayer(g);
}

const createGraphics = () => {
    let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
    let g = canvas.getContext("2d");
    g.clearRect(0, 0, canvas.width, canvas.height);
    return g;
}


//메소드 추출 -> 5줄 규칙 만족
const drawMap = (g: CanvasRenderingContext2D) => {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            map[y][x].color(g);
            if (!map[y][x].isAir() && !map[y][x].isPlayer())
                g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }
}

//클래스로 코드 이관으로 else if 문제 해결
function colorOfTile(y: number, x: number, g: CanvasRenderingContext2D) {
    map[y][x].color(g);
}

const drawPlayer = (g: CanvasRenderingContext2D) => {
    g.fillStyle = "#ff0000";
    g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function gameLoop() {
    let before = Date.now();
    update();
    draw();
    let after = Date.now();
    let frameTime = after - before;
    let sleep = SLEEP - frameTime;
    setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
    transformMap();
    gameLoop();
}


const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";


window.addEventListener("keydown", e => {
    if (e.key === LEFT_KEY || e.key === "a") inputs.push(new Left());
    else if (e.key === UP_KEY || e.key === "w") inputs.push(new Up());
    else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(new Right());
    else if (e.key === DOWN_KEY || e.key === "s") inputs.push(new Down());
});
