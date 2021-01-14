while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() < 50) {
        light.setAll(light.rgb(100, 100, 100))
        music.setVolume(100)
        music.baDing.play()
    } else {
        light.setAll(light.rgb(100, 0, 0))
    }
    
}
