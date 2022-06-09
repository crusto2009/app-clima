
function consultar(e) {
    e.preventDefault();
    let ciudad = document.querySelector('#ciudad').value

    const options = {
        method: "GET"
    };

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=1ca8226738417526279a944e76c8aaa4`, options)
        .then(response => response.text())
        .then(data => {
            /* const { results } = data */
            /*     const { temp } = main */
            let infoClima = JSON.parse(data)

            console.log(infoClima)

            const { main } = infoClima
            const { humidity } = infoClima.main

            const { temp } = infoClima.main
            const { speed } = infoClima.wind
            const { icon, description } = infoClima.weather[0]
            let celcius = parseFloat(temp).toFixed(2) - 273.15

            console.log(humidity)

            document.querySelector('.informacion').style.visibility = 'visible'

            document.getElementById('temperatura').innerHTML = `<strong>Temperatura:<span>${Math.round(celcius, 2) + ' C°'}</span></strong>`
            document.getElementById('humedad').innerHTML = `<strong>Humedad:<span>${humidity}</span></strong>`
            document.getElementById('viento').innerHTML = `<strong>Viento:<span>${speed}</span></strong>`

            document.getElementById("descripcion").innerHTML = description

            document.getElementById("icono").setAttribute('src', `http://openweathermap.org/img/wn/${icon}@4x.png`)
            console.log(Math.round(celcius))

            switch (description) {
                case 'clear sky':
                    document.querySelector('body').classList.add('soleado')
                    document.querySelector('body').classList.remove('lluvioso')
                    break
                case 'few clouds':
                    break
                case 'scattered clouds':
                    document.querySelector('body').classList.remove('soleado')
                    document.querySelector('body').classList.add('lluvioso')
                    break
                case 'broken clouds':
                    document.querySelector('body').classList.remove('soleado')
                    document.querySelector('body').classList.add('lluvioso')
                    break
                case 'shower rain':
                    break
                case 'rain':
                    document.querySelector('body').classList.remove('soleado')
                    document.querySelector('body').classList.add('llovisna')
                    break
                case 'thunderstorm':
                    break
                case 'snow':
                    break
                case '	mist':
                    break
            }



        });
}
