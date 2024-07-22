document.getElementById('formulario').addEventListener('submit', function(event) {
event.preventDefault();
const cidade = document.getElementById('cidadeInput').value;
const apyKey = 'd7a8d944e376f6e9e6fd3af2bb39f6d9'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apyKey}&units=metric&lang=pt_br`

// verificar se o input não esta vazio
if (cidade !== ''){
    fetch (url)
    //primeiro carregar o arquivo
        .then(response => response.json())
        .then(data => {
            //cod= 200 esta conectado
            if(data.cod == 200) {
                document.getElementById('descTitulo').innerHTML = 'Confira o a previsão para sua cidade:';
                document.getElementById('cidade').innerHTML = `${data.name}`;
                document.getElementById('temp').innerHTML = `${data.main.temp}°C`;
                document.getElementById('situacaoClima').innerHTML = `${data.weather[0].description}`;
                document.getElementById('tempMax').innerHTML = `Máx.:${data.main.temp_max}°C`;
                document.getElementById('tempMin').innerHTML = `Min.:${data.main.temp_min}°C`;
            } else {
                document.getElementById('descTitulo').innerHTML = 'Não encotramos essa informação'
            }
    });
} else {
    document.getElementById('descTitulo').innerHTML = 'Por favor insira uma cidade no campo abaixo.'
}

});
