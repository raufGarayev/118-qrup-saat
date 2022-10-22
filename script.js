const sec = document.getElementById('sec')
const min = document.getElementById('min')
const hour = document.getElementById('hour')
const digMin = document.querySelector('.dig-min')
let saniye = 0
let deqiqe = 0
let saat = 0




function Watch() {
    const theTimer = setInterval(timeStarter, 1000);
}


const digis = document.querySelectorAll('.dig')

function timeStarter() {
    saniye++
    for(let i=0;i<digis.length;i++) {
        if(digis[i].classList.contains('dig-sec')) {
            if(saniye < 10)
                digis[i].innerHTML = `0${saniye}`
            else 
                digis[i].innerHTML = `${saniye}`
        }
    }
    let degree = ((saniye/60)*360) + 90;
    sec.style.transform = `rotate(${degree}deg)`
    if(saniye == 60) {
        deqiqe++
        let newMin = Number(digMin.value) + deqiqe
        console.log(newMin)
        for(let i=0;i<digis.length;i++) {
            if(digis[i].classList.contains('dig-min')) {
                if(deqiqe < 10)
                    digis[i].value = `0${newMin}`
                else 
                    digis[i].value = `${newMin}`
            }
        }
        saniye = 0
        let degree = ((deqiqe/60)*360) + 90;
        min.style.transform = `rotate(${degree}deg)`
        if(digMin.value == 60) {
            saat++
            for(let i=0;i<digis.length;i++) {
                if(digis[i].classList.contains('dig-hour')) {
                    if(saat < 10)
                        digis[i].innerHTML = `0${saat}`
                    else 
                        digis[i].innerHTML = `${saat}`
                }
            }
            deqiqe = 0
            digMin.value = 0
            let degree = ((saat/12)*360)+90;
            hour.style.transform = `rotate(${degree}deg)`
            if(saat == 12) {
                saat = 0
            }
        }
    }
        
}

Watch()

