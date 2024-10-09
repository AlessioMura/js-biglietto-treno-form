//milestone 1
//prep

let age_field = document.getElementById('age_select');
let km_field = document.getElementById('km');
let btn = document.getElementById('confirm_btn');
const price_for_km = 0.21;
const disc_underage = 0.2;
const disc_over65 = 0.4;

//process

btn.addEventListener('click', calc_price => {

    let age = age_field.value;
    let km = km_field.value;
    let full_ticket_price = (km * price_for_km);
    let price_disc_under = full_ticket_price - (full_ticket_price * disc_underage);
    let price_disc_over = full_ticket_price - (full_ticket_price *disc_over65);


    if (age === '1') {
        console.log(price_disc_under.toFixed(2) + "€");
    } else if (age === '3') {
        console.log(price_disc_over.toFixed(2) + "€");
    } else {
        console.log(full_ticket_price.toFixed(2) + "€");
    }
})