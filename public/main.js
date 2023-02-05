const submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const city = document.getElementById('city');
const tempreal = document.getElementById('tempreal');
const tempmood = document.getElementById('tempstatus');
const datahide = document.getElementsByClassName('hide');


const getinfo = async (event) => {
    event.preventDefault()
    let cityval = cityname.value;
    if (cityval == "") {
        city.innerText = `Please write the name before you search`;
        datahide.classList.add('data');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=3172e27842bb7572675b7f8066c4c763`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];

            cityname.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            tempreal.innerText = arrdata[0].main.temp;

            const tempmood = arrdata[0].weather[0].main;
            if (tempmood == "Sunny") {
                weathercon.innerHTML = '<i class="fa-solid fa-sun" style="color: #f1c338"></i>'
            }
            else if (tempmood == "Clouds") {
                weathercon.innerHTML = '<i class="fa-solid fa-cloud" style="color: #f1f2f6;"></i>'
            }
            else if (tempmood == "Rainy") {
                weathercon.innerHTML = '<i class="fa-solid fa-rain" style="color: #a4b0be;"></i>'
            }
            else {
                weathercon.innerHTML = '<i class="fa-solid fa-cloud" style="color: #44c3de;"></i>'
            }
            datahide.classList.remove('data');

        } catch {
            city.innerText = `Please enter the city name properly`;
            datahide.classList.add('data');
        }
    }
}

submitbtn.addEventListener('click', getinfo);