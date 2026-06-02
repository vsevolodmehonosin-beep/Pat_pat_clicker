let total = 0; //total patpats
let bonuss_clicks = 0; //bonus patpats per click
let bonuss_clicks_cost = 10;
let multiplier = 1; //multiplier for patpats per click

document.getElementById('auto_clicks').style.display = 'none'; //hide auto click upgrade until purchased
update_buttons_and_upgrades();

function pat_button() {
    total = total + (1 + bonuss_clicks) * multiplier;
    total = Math.round(total * 100) / 100;
    console.log(total);

    var pat_audio = new Audio('pat_sound.wav');
    pat_audio.play();

    update_buttons_and_upgrades();
}

function pat_button_auto() {
    total = total + (1 + bonuss_clicks) * multiplier;
    total = Math.round(total * 100) / 100;
    console.log(total);

    var pat_audio = new Audio('pat_sound.wav');
    pat_audio.play();

    update_buttons_and_upgrades();
}

function update_buttons_and_upgrades() {
    if (total >= bonuss_clicks_cost) { //double clicks upgrade
        document.getElementById("upgrade-button").disabled = false;
        document.getElementById("bonuss_clicks").style.display = 'block';
    } else {
        document.getElementById("upgrade-button").disabled = true;
    }
    if (total >= 1000) { //auto click upgrade
        document.getElementById("auto_click_button").disabled = false;
        document.getElementById("auto_clicks_count").disabled = false;
        document.getElementById('auto_clicks_count').style.display = 'block';
    } else {
        document.getElementById("auto_click_button").disabled = true;
        document.getElementById("auto_clicks_count").disabled = true;
    }
    if (total >= 400) { //multiplayer upgrade
        document.getElementById("upgrade_plus_1_2_clicks").disabled = false;
        document.getElementById("multiplier").style.display = 'block';
    } else {
        document.getElementById("upgrade_plus_1_2_clicks").disabled = true;
    }

    //Updating upgeades and total pats
    document.getElementById("patpat_count").textContent = Math.round(total);
    document.getElementById("bonuss_clicks").textContent = bonuss_clicks;
    document.getElementById("multiplier").textContent = multiplier;

}

function upgrade_double_clicks() {
    if (total < bonuss_clicks_cost) {
        alert("Not enough patpats to upgrade!");
        return;
    }
    else {    
        total = total - bonuss_clicks_cost;
        bonuss_clicks_cost = bonuss_clicks_cost * 2;
        document.getElementById("upgrade-cost").textContent = bonuss_clicks_cost;
        bonuss_clicks = bonuss_clicks + 1;
        console.log(bonuss_clicks);
        update_buttons_and_upgrades();
    }
}

function upgrade_plus_1_2_clicks() {
    if (total < 400) {
        alert("Not enough patpats to upgrade!");
        return;
    }
    else {
        total = total - 400;
        multiplier = 1.2;
        console.log(multiplier);
        document.getElementById('upgrade_plus_1_2_clicks').style.display = 'none';
        update_buttons_and_upgrades();
    }
}

function auto_click() {
    if (total < 1000) {
        alert("Not enough patpats to upgrade!");
        return;
    }
    else {
        total = total - 1000;
        document.getElementById("auto-click-cost").textContent = 1000;
        document.getElementById('auto_clicks').style.display = 'block';
        document.getElementById('auto_click_button').style.display = 'none';
        interval();
        update_buttons_and_upgrades();
    }
}

function interval() {
    setInterval(pat_button_auto, 1000);
}