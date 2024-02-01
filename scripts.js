const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-button")

function convertValues() {

    const inputcurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)

    const dollarToday = 4.95
    const euroToday = 5.36
    const libraToday = 6.26
    const bitcoinToday = 204.812


    if (currencySelect.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyValue / dollarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyValue / libraToday)

    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputcurrencyValue/bitcoinToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyValue)

}
function changeCurrency (){

    const currencyNameTo = document.getElementById("currency-name")
    const currencyimage = document.querySelector(".image-currency")

       if (currencySelect.value == "dolar") {
           currencyNameTo.innerHTML = "Dólar americano"
           currencyimage.src = "./img/dollar.png"
       }
       if (currencySelect.value == "euro") {
          currencyNameTo.innerHTML = "Euro"
          currencyimage.src = "./img/euro.png"
       }

       if (currencySelect.value == "libra") {
        currencyNameTo.innerHTML = "Libra"
        currencyimage.src = "./img/libra.png"
       }

       if (currencySelect.value == "bitcoin") {
        currencyNameTo.innerHTML = "Bitcoin"
        currencyimage.src = "./img/bitcoin.png"
     }

       convertValues()
    }
   

   



currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues)