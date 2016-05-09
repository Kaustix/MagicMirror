setInterval(function () {
    document.getElementById('date').innerHTML = moment().format('dddd MMMM Do');
    document.getElementById('time').innerHTML = moment().format('h:mm A');
}, 1000);

