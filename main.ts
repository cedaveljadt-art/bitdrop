let i=0
let listapesama = [
"ZUTA KUCA",
"ODE",
"PRELUDE",
"ENTERTAINER",
"NYAN",
"RINGTONE",
"FUNK",
"BLUES"
]
let listamelodija = [
"C",
"D",
"E",
"E",
"C",
"D",
"E",
"E",
"C",
"D",
"E",
"C",
"D",
"E",
"E",
"C",
"D",
"E",
"E",
"D",
"D",
"C"
]
const ode = ["E E F G G F E D C C D E E D D E E F G G F E D C C D E D C C D D E C D E F E C D E F E D C D G E E F G G F E D C C D E D C C"]
let didnotstart = true
basic.forever(function () {
    if (didnotstart) {
        basic.showString("" + (listapesama[i]))
    }
    input.onButtonPressed(Button.A,function(){
        led.stopAnimation()
        if(i<1){
            i=listapesama.length-1
        }
        else{
            i--
        }
    })
input.onButtonPressed(Button.B, function () {
        led.stopAnimation()
        if(i>listapesama.length-2){
            i=0
        }
        else{
            i++
        }
    })
input.onButtonPressed(Button.AB, function () {
        basic.clearScreen()
        music.setTempo(120)
        led.stopAnimation()
        didnotstart=!didnotstart
        console.log("test")
        music.stopAllSounds()
        if(didnotstart==false){
            switch (i) {
                case 0:
                    music.setTempo(65)
                    music.beginMelody(listamelodija, 500), MelodyOptions.ForeverInBackground
                    control.inBackground(()=> {
                        basic.showString("NAKRAJSELAZUTAKUCATITITIZUTAKUCATATATAZUTAKUCICAAUKUCISTARAMAJKATITITISTARAMAJKATATATASTARAMAJCICA",63)
                    })
                    led.stopAnimation()
                    break
                case 1:
                    music.startMelodyInternal(music.builtInMelody(Melodies.Ode), MelodyOptions.ForeverInBackground)
                    control.inBackground(()=>{
                        basic.showString("JOYFULJOYFULWEADOREYOUGODOFGLORYLORDOFLOVEHEARTSUNFOLDLIKEFLOWRSBEFOREYOUOPNINGTOTHESUNABOVEMELTCLOUDSOFSINANDSADNESSDRIVETHEDARKOFDOUBTAWAYGIVEROFIMMORTALGLADNESSFILLUSWITHTHELIGHTOFDAY", 50)
                    })
                    led.stopAnimation()
                    break
                case 2:
                    basic.showLeds(`....#
                                ...##
                                ...#.
                                .##..
                                .##..`)
                    music.startMelodyInternal(music.builtInMelody(Melodies.Prelude), MelodyOptions.ForeverInBackground)
                    break
                case 3:
                    basic.showLeds(`....#
                                ...##
                                ...#.
                                .##..
                                .##..`)
                    music.startMelodyInternal(music.builtInMelody(Melodies.Entertainer), MelodyOptions.ForeverInBackground)
                    break
                case 4:
                    basic.showLeds(`....#
                                ...##
                                ...#.
                                .##..
                                .##..`)
                    music.startMelodyInternal(music.builtInMelody(Melodies.Nyan), MelodyOptions.ForeverInBackground)
                    break
                case 5:
                    basic.showLeds(`....#
                                ...##
                                ...#.
                                .##..
                                .##..`)
                    music.startMelodyInternal(music.builtInMelody(Melodies.Ringtone), MelodyOptions.ForeverInBackground)
                    break
                case 6:
                    basic.showLeds(`....#
                                ...##
                                ...#.
                                .##..
                                .##..`)
                    music.startMelodyInternal(music.builtInMelody(Melodies.Funk), MelodyOptions.ForeverInBackground)
                    break
                case 7:
                    basic.showLeds(`....#
                                ...##
                                ...#.
                                .##..
                                .##..`)
                    music.startMelodyInternal(music.builtInMelody(Melodies.Blues), MelodyOptions.ForeverInBackground)
                    break
            }
        }
    })
})
