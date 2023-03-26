function convertTemperature() {
	var temp = parseFloat(document.getElementById("temp-input").value);
	var fromUnit = document.getElementById("from-unit").value;
	var toUnit = document.getElementById("to-unit").value;
	var result = document.getElementById("result");

	if (isNaN(temp)) {
		result.innerHTML = "Please enter a valid temperature.";
		return;
	}

	if (fromUnit === toUnit) {
		result.innerHTML = "The temperature is already in the selected unit.";
		return;
	}

	if (fromUnit === "celsius" && toUnit === "fahrenheit") {
		var fahrenheit = (temp * 9/5) + 32;
		result.innerHTML = temp + " °C = " + fahrenheit + " °F";
	} else if (fromUnit === "celsius" && toUnit === "kelvin") {
		var kelvin = temp + 273.15;
		result.innerHTML = temp + " °C = " + kelvin + " K";
	} else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
		var celsius = (temp - 32) * 5/9;
		result.innerHTML = temp + " °F = " + celsius + " °C";
	} else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
		var kelvin = (temp - 32) * 5/9 + 273.15;
		result.innerHTML = temp + " °F = " + kelvin + " K";
	} else if (fromUnit === "kelvin" && toUnit === "celsius") {
		var celsius = temp - 273.15;
		result.innerHTML = temp + " K = " + celsius + " °C";
	} else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
		var fahrenheit = (temp - 273.15) * 9/5 + 32;
		result.innerHTML = temp + " K = " + fahrenheit + " °F";
	}
}