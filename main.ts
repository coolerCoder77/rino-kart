namespace SpriteKind {
    export const Racer = SpriteKind.create()
    export const Player_1 = SpriteKind.create()
    export const PLayer_2 = SpriteKind.create()
    export const Player_3 = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player_1, function (sprite, location) {
    game.showLongText("Player 1 Wins", DialogLayout.Bottom)
    game.over(true)
    console.log("win by 1")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onHitWall(SpriteKind.PLayer_2, function (sprite, location) {
    game.showLongText("Player 2 Wins", DialogLayout.Bottom)
    game.over(true)
})
tiles.setTilemap(tilemap`Road 1`)
console.log("Map Loaded")
console.log("Loading Players")
let Player_1 = sprites.create(assets.image`Player_1`, SpriteKind.Player_1)
let Player_2 = sprites.create(assets.image`Player_2`, SpriteKind.PLayer_2)
let Player_3 = sprites.create(assets.image`Player_3`, SpriteKind.Player_3)
console.log("Players Ready")
controller.moveSprite(Player_1, 100, 0)
controller.player2.moveSprite(Player_2, 100, 0)
controller.player3.moveSprite(Player_3, 100, 0)
console.log("Ready To play")
music.baDing.play()
forever(function () {
    scene.cameraFollowSprite(Player_1)
    music.playMelody("C5 B - A G F E C ", 250)
})
