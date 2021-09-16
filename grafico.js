
let chart = new Chart(document.getElementById("lineChart"),{
    type: 'bar',
    data:{
        labels:["Jan" , "Fev", "Mar" , "Abr" , "Mai" , "Jun"],
        dataset:[{
            label: '# of Sales',
            data:[10,20,15,42,32,10]
        }]
    }
})