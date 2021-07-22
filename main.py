@namespace
class SpriteKind:
    Racer = SpriteKind.create()
    Player_1 = SpriteKind.create()
    PLayer_2 = SpriteKind.create()

def on_hit_wall(sprite, location):
    print("winl")
    game.over(True)
scene.on_hit_wall(SpriteKind.Racer, on_hit_wall)

tiles.set_tilemap(tilemap("""
    Road 1
"""))
Player_12 = sprites.create(assets.image("""
    Player_1
"""), SpriteKind.Racer)
Player_2 = sprites.create(assets.image("""
    Player_2
"""), SpriteKind.Racer)
controller.move_sprite(Player_12)
controller.player2.move_sprite(Player_2, 100, 100)
print("Ready To play")

def on_forever():
    scene.camera_follow_sprite(Player_12)
    music.play_melody("D F - A F - E C ", 200)
forever(on_forever)
