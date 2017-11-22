document.getElementById('volumeInput').addEventListener('input',function(e)
{
	var gallons = e.target.value;
	document.getElementById('litersOutput').innerHTML = gallons/0.264172; 
	document.getElementById('fluidOuncesOutput').innerHTML = gallons/0.0078125;
	document.getElementById('millilitersOutput').innerHTML = gallons/0.000264172;
});

document.getElementById('lengthInput').addEventListener('input',function(e)
{
	var miles = e.target.value;
	document.getElementById('kilometersOutput').innerHTML = miles/0.621371; 
	document.getElementById('yardsOutput').innerHTML = miles/0.000568182;
	document.getElementById('inchesOutput').innerHTML = miles/1.57828e-5;
});

document.getElementById('weightInput').addEventListener('input',function(e)
{
	var pounds = e.target.value;
	document.getElementById('kilogramsOutput').innerHTML = pounds/2.20462; 
	document.getElementById('ouncesOutput').innerHTML = pounds/0.0625;
	document.getElementById('gramsOutput').innerHTML = pounds/0.00220462;
});

document.getElementById('speedInput').addEventListener('input',function(e)
{
	var mph = e.target.value;
	document.getElementById('kmphOutput').innerHTML = mph/0.621371; 
	document.getElementById('mtrpsOutput').innerHTML = mph/2.23694;
	document.getElementById('knotsOutput').innerHTML = mph/1.15078;
});

document.getElementById('timeInput').addEventListener('input',function(e)
{
	var seconds = e.target.value;
	document.getElementById('minutesOutput').innerHTML = seconds/60; 
	document.getElementById('hoursOutput').innerHTML = seconds/3600;
	document.getElementById('daysOutput').innerHTML = seconds/86400;
});

document.getElementById('areaInput').addEventListener('input',function(e)
{
	var squareMiles = e.target.value;
	document.getElementById('acresOutput').innerHTML = squareMiles/0.0015625; 
	document.getElementById('squareFeetOutput').innerHTML = squareMiles/3.58701e-8;
	document.getElementById('hectaresOutput').innerHTML = squareMiles/0.00386102;
});