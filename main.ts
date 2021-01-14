while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() < 25) {
        music.setVolume(100)
        music.baDing.play()
    }
    
}
