google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // pode editar essa parada aq
    var titulo = 'Divisão de investimentos';
    var tam = {
        altura: 800,
        largura: window.innerWidth
    };

    var datas = [
        { label: 'Salário', value: 10 },
        { label: 'Comida', value: 15 },
        { label: 'Atendimento odontológico', value: 20 },
        { label: 'Infraestrutura', value: 25 },
        { label: 'Internet', value: 30 }
    ];
    var colors = ['purple', 'red', 'blue', 'green', 'orange'];
    // só até a aqui pfvr !!!!!!!!!!
    //'#e0440e'
    // https://developers.google.com/chart/interactive/docs/gallery/piechart#Configuration_Options
    // estuda essa documentação se quiser

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');

    for (var i = 0; i < datas.length; i++) {
        data.addRow([datas[i].label, datas[i].value]);
    }

    var options = {
        title: titulo,
        width: tam.largura,
        height: tam.altura,
        fontName: 'BankGothic Md BT',
        backgroundColor: 'white',
        legend: {
            position: 'left',
            alignment: 'center',
            textStyle: {
                fontSize: 16
            }
        },
        titleTextStyle: {
            fontSize: 30
        },
        is3D: true,
    };
    options.colors = colors;

    var chart = new google.visualization.PieChart(document.getElementById('pie'));
    chart.draw(data, options);
    
}
