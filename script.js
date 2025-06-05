const exchangeRates = {
  "USD": 1.0,          // US Dollar
  "EUR": 0.93,         // Euro
  "INR": 83.27,        // Indian Rupee
  "GBP": 0.79,         // British Pound
  "JPY": 156.3,        // Japanese Yen
  "AUD": 1.49,         // Australian Dollar
  "CAD": 1.36,         // Canadian Dollar
  "CHF": 0.90,         // Swiss Franc
  "CNY": 7.24,         // Chinese Yuan
  "ZAR": 18.29         // South African Rand
};


const arr = new Array();

function conversion() {

  const inputField = document.querySelector('#input-field')

  if (inputField.value === "") {

    alert('input field is required')
  }

  else {
    // console.log('You have pressed the conversion button')

    const inputCurrencyType = document.querySelectorAll('.input-currency-type');

    // console.log(inputCurrencyType)

    inputCurrencyType.forEach(function (item) {

    const options = item.querySelectorAll('option');

      options.forEach(function(option){

        console.log(typeof(option.value))

        arr.push(option.value)

        
      })
    })
  }


  console.log(arr)
}
