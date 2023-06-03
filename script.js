document.getElementById("convert-btn").addEventListener("click", function() {
    var temperatureInput = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var convertedTemperature;
    
    if (unit === "celsius") {
      convertedTemperature = convertToFahrenheit(temperatureInput);
      document.getElementById("result").textContent = convertedTemperature + " °F";
    } else if (unit === "fahrenheit") {
      convertedTemperature = convertToCelsius(temperatureInput);
      document.getElementById("result").textContent = convertedTemperature + " °C";
    } else if (unit === "kelvin") {
      convertedTemperature = convertToKelvin(temperatureInput, "celsius");
      document.getElementById("result").textContent = convertedTemperature + " K";
    }
  });
  
  function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function convertToKelvin(temperature, unit) {
    if (unit === "celsius") {
      return parseFloat(temperature) + 273.15;
    } else if (unit === "fahrenheit") {
      return (parseFloat(temperature) + 459.67) * 5/9;
    }
  }
  