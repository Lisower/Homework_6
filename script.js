function cost(){
    type = document.querySelector('input[name="services"]:checked').value;
    switch(type){
        case "service-1":
            price = 10;
            break;
        case "service-2":
            price = 20;
            break;
        case "service-3":
            price = 30;
            break;
        default:
            price = 0;
            break;
    }
    number = parseFloat(document.getElementById("service-number").value);
    if (isNaN(number))
        if (document.getElementById("service-number").value == "") document.getElementById("result").innerHTML = "";
        else document.getElementById("result").innerHTML = "Некорректный ввод количества услуг!";
    else
        if (number < 0) document.getElementById("result").innerHTML = "Количество товара не может быть отрицательным!";
        else if (number != parseInt(document.getElementById("service-number").value)) document.getElementById("result").innerHTML = "Количество услуг не может быть дробным!"
            else document.getElementById("result").innerHTML = "Стоимость заказа: " + (price*number+additional_price) + " р. ";
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("service-number").addEventListener("input", cost);
    options = document.getElementById("options");
    properties = document.getElementById("properties");
    options.style.display = "none";
    properties.style.display = "none";
    additional_price = 0;
    additional_price_r = 0;
    additional_price_k = 0;
    document.getElementById("service-type").addEventListener("change", function(event){
        select = event.target;
        if (select.value == "service-1") {
            additional_price = 0;
            options.style.display = "none";
            properties.style.display = "none";
        }
        if (select.value == "service-2") {
            additional_price = additional_price_r;
            options.style.display = "block";
            properties.style.display = "none";
        }
        if (select.value == "service-3") {
            additional_price = additional_price_k;
            options.style.display = "none";
            properties.style.display = "block";
        }
        cost(event);
    });
    options.addEventListener("change", function(event) {
        switch (options.value) {
          case "option-1":
            additional_price = 0;
            break;
          case "option-2":
            additional_price = 100;
            break;
          case "option-3":
            additional_price = 200;
            break;
          default:
            additional_price = 0;
            break;
        }
        cost(event);
        additional_price_r = additional_price;
      });
    properties_=document.querySelectorAll("#properties input[type='checkbox']");
    properties_.forEach(function(property){
        property.addEventListener("change", function(event){
            if (property.checked){
                switch(property.name){
                    case "property-1":
                        additional_price_k += 50;
                        break;
                    case "property-2":
                        additional_price_k += 250;
                        break;
                    default:
                        additional_price_k += 0;
                        break;
                }
            }
            else{
                switch(property.name){
                    case "property-1":
                        additional_price_k -= 50;
                        break;
                    case "property-2":
                        additional_price_k -= 250;
                        break;
                    default:
                        additional_price_k -= 0;
                        break;
                }
            }
            additional_price = additional_price_k;
            cost(event);
        })
    })
});