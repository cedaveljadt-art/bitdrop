const listapesama=["DADADUM","ENTERTAINER","PRELUDE","ODE","NYAN","RINGTONE","FUNK","BLUES"]
let i=0
let didnotstart=true
basic.forever(function () {
    if(didnotstart){
        basic.showString(listapesama[i])
    }
    input.onButtonPressed(Button.A,function(){
        if(i<1){
            i=listapesama.length-1
        }
        else{
            i--
        }
    })
    input.onButtonPressed(Button.B, function () {
        if(i>listapesama.length-2){
            i=0
        }
        else{
            i++
        }
    })
    input.onButtonPressed(Button.AB, function () {
        basic.clearScreen()
        didnotstart=false
        switch(i){
            case 0:
                music.startMelodyInternal(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.ForeverInBackground)
                break
            case 1:
                music.startMelodyInternal(music.builtInMelody(Melodies.Entertainer), MelodyOptions.ForeverInBackground)
                break
            case 2:
                music.startMelodyInternal(music.builtInMelody(Melodies.Prelude), MelodyOptions.ForeverInBackground)
                break
            case 3:
                music.startMelodyInternal(music.builtInMelody(Melodies.Ode), MelodyOptions.ForeverInBackground)
                break
            case 4:
                music.startMelodyInternal(music.builtInMelody(Melodies.Nyan), MelodyOptions.ForeverInBackground)
                break
            case 5:
                music.startMelodyInternal(music.builtInMelody(Melodies.Ringtone), MelodyOptions.ForeverInBackground)
                break
            case 6:
                music.startMelodyInternal(music.builtInMelody(Melodies.Funk), MelodyOptions.ForeverInBackground)
                break
            case 7:
                music.startMelodyInternal(music.builtInMelody(Melodies.Blues), MelodyOptions.ForeverInBackground)
                break
        }
    })
})

