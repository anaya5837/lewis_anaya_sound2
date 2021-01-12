while True:
    print("Light Level: " + input.light_level())
    if input.light_level() < 10:
        music.set_volume(100)
        music.ba_ding.play()
