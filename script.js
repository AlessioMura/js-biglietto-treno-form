//milestone 1
//prep

const age_field = document.getElementById('age');
const km_field = document.getElementById('km');
const btn = document.getElementById('confirm_btn');
const price_for_km = 0.21;
const disc_underage = 0.2;
const disc_over65 = 0.4;

//process

btn.addEventListener('click', calc_price => {

    let age = age_field.value;
    let km = km_field.value;

    let total_price = (km * price_for_km);

    if (age < 18) {
        total_price = total_price - (total_price * disc_underage);
        console.log(total_price.toFixed(2) + "€");
    } else if (age >= 65) {
        total_price = total_price - (total_price *disc_over65);
        console.log(total_price.toFixed(2) + "€");
    } else {
        console.log(total_price.toFixed(2) + "€");
    }
})