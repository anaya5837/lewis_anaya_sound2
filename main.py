while True:
    print("Light Level: " + input.light_level())
    if input.light_level() < 50:
        light.set_all(light.rgb(100, 100, 100))
        music.set_volume(100)
        music.ba_ding.play()
    else:
        light.set_all(light.rgb(100, 0, 0))