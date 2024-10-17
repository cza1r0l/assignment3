/*function calc() {
    let start = 100;
    console.log('Initial value:', start);
    start = edu(start); 
    console.log('After edu adjustment:', start);
    start = netWorthAdjustment(start); 
    console.log('After net worth adjustment:', start);
    start = casteAdjustment(start); 
    console.log('After caste adjustment:', start);
    start = skillAdjustment(start); 
    console.log('After skill adjustment:', start);
    start = age(start);
    console.log('After age adjustment:', start);
    start = gossipAdjustment(start); 
    console.log('After gossip adjustment:', start);
    document.getElementById('priceValue').textContent = `${start}`;
    document.getElementById('calculatedPrice').style.display = 'block';
}

function edu(start) {
    const select = document.getElementById("education");
    const value = select.value;
    switch (value) {
        case "blank":
            return start;
        case "bachelor":
            return start * 1.5;
        case "college":
            return start * 1.2;
        case "high_school":
            return start * 1.05;
        case "middle_school":
            return start * 0.9;
        default:
            return start;
    }
}

function netWorthAdjustment(start) {
    const select = document.getElementById("networth");
    const value = select.value;
    switch (value) {
        case "upper_class":
            return start * 2;
        case "middle_class":
            return start * 1.5;
        case "lower_class":
            return start * 1.2;
        default:
            return start;
    }
}

function casteAdjustment(start) {
    const select = document.getElementById("caste");
    const value = select.value;
    switch (value) {
        case "brahmin":
            return start + 100;
        case "kshatriya":
            return start + 50;
        case "vaishya":
            return start + 20;
        case "shudra":
            return start + 10;
        case "varna":
            return start - 50;
        default:
            return start;
    }
}

function skillAdjustment(start) {
    let addition = 0;
    if (document.querySelector('input[value="musi"]').checked) { 
        addition += 10;
    }
    if (document.querySelector('input[value="cook"]').checked) { 
        addition += 20;
    }
    if (document.querySelector('input[value="ea"]').checked) { 
        addition  += 15;
    }
    if (document.querySelector('input[value="sw"]').checked) {
        addition += 10;
    }
    return start + addition;
}

function age(start) {
    const selectedAge = document.querySelector('input[name="agge"]:checked');
    switch (selectedAge.value){
        case "eig":
            return start * 1.5;
        case "twe":
            return start * 1.2;
        case "tweig":
            return start * 0.95;
        default:
            return start;
    }
}

function gossipAdjustment(start) {
    let multiplier = 1;
    if (document.querySelector('input[value="parr"]').checked) { 
        multiplier -= 0.1;
    }
    if (document.querySelector('input[value="gchr"]').checked) { 
        multiplier -= 0.2;
    }
    if (document.querySelector('input[value="gper"]').checked) { 
        start -= 20;
    }
    return start * multiplier;
}

document.getElementById('submit').addEventListener('click', calc);*/