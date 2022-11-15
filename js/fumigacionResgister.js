var productTable = document.getElementById("productTable");
var formulario = document.getElementById("formulario");
var graphButtom = document.getElementById("graficar");
var counter = 0;
var firstNameValues = ["Walbertho", "Juan", "Karla", "Genaro", "Kevin"];
var numberValues = ["89", "56", "45", "56", "34"];
var handleNameValues = ["Rol", "Master", "Chef", "Lic", "Doc"];
const ctx = document.getElementById('myChart');

var myChart;

if (firstNameValues.length != 0) {
    for (let i=0; i<firstNameValues.length ; i++) {
        counter ++;
        productTable.innerHTML += `
              <tr>
                <th scope="row">${counter}</th>
                <td>${firstNameValues[i]}</td>
                <td>${numberValues[i]}</td>
                <td>${handleNameValues[i]}</td>
              </tr>`;
    }
}

formulario.onsubmit = (e) => {
    counter ++;
    e.preventDefault(); //Previene recargue de la pagina.
    const firstName = document.getElementById("firstName");
    const numberValue = document.getElementById("numberValue");
    const handleName = document.getElementById("handleName");

    firstNameValues.push(firstName.value);
    numberValues.push(numberValue.value);
    handleNameValues.push(handleName.value);

    firstName.value = "";
    numberValue.value = "";
    handleName.value = "";

    productTable.innerHTML += `
              <tr>
                <th scope="row">${counter}</th>
                <td>${firstNameValues[firstNameValues.length-1]}</td>
                <td>${numberValues[numberValues.length-1]}</td>
                <td>${handleNameValues[handleNameValues.length-1]}</td>
              </tr>`;
}

graphButtom.addEventListener("click", () =>{
    if (myChart){
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: firstNameValues,
        datasets: [{
            label: 'Valores',
            data: numberValues.map((a) => parseInt(a)),
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 4
            }]
        }   
    
    });
    

});

