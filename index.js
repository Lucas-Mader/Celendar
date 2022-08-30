for (let i = 1; i < 38; i++) {
    localStorage.setItem(i, document.getElementById(i).textContent);
}

function enviar() {
    let button = document.getElementById('enviar');
    let start_date = document.querySelector("#start_date").value;
    let end_date = document.querySelector("#end_date").value;
    let [yearS, monthS, day_start] = start_date.split('-');
    let [yearE, monthE, day_end] = end_date.split('-');
    if (day_start <= day_end) {
        for (let i = 0; i < 37; i++) {
            let td = document.getElementsByTagName('td')[i];
            if (i >= day_start && i <= day_end) {
                td.style.backgroundColor = "rgb(10, 20, 125)";
            } else if (localStorage.getItem(i + 1) != '') {
                td.style.background = "rgb(200, 120, 30)";
            }
        }
        document.getElementById("qty_days").innerText = 'Quantidade de dias = ' + (day_end - day_start + 1);
    } else {
        alert("Datas inválidas :(");
    }
}