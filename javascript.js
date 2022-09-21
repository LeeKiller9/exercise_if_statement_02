function exercise1() {
    let c = +(prompt("Enter C degree"));
    let f = c * 9 / 5 + 32;
    document.getElementById("ex1Result").innerHTML = "C degree: " + c + "<br>F degree: " + f;
}

function exercise2() {
    let m = +(prompt("Enter meter"));
    let ft = m * 3.2808;
    document.getElementById("ex2Result").innerHTML = "Meter: " + m + "<br>Ft: " + ft;
}

function exercise3() {
    let a = +(prompt("Enter length of edge"));
    let area = a * a;
    document.getElementById("ex3Result").innerHTML = "Edge of square: " + a + "<br>Area: " + area;
}

function exercise4() {
    let a = +(prompt("Enter length of long edge"));
    let b = +(prompt("Enter length of short edge"));
    let area = a * b;
    document.getElementById("ex4Result").innerHTML = "Long edge of rectangle: " + a + "<br>Short edge of rectangle: " + b + "<br>Area: " + area;
}

function exercise5() {
    let a = +(prompt("Enter length of edge 1st"));
    let b = +(prompt("Enter length of edge 2nd"));
    let area = a * b / 2;
    document.getElementById("ex5Result").innerHTML = "Edge 1st of square triangle: " + a + "<br>Edge 2nd of square triangle: " + b + "<br>Area: " + area;
}

function exercise6() {
    alert("1st degree equations: ax + b = 0")
    let a = +(prompt("Enter a"));
    let b = +(prompt("Enter b"));
    let result = "";
    let x = 0;
    if (a === 0 && b === 0) {
        result = "Equations have many solution";
    } else if (a === 0 && b !== 0) {
        result = "No solution"
    } else {
        x = -b / a;
        result = x;
    }
    document.getElementById("ex6Result").innerHTML = "1st degree equations: " + a + "x + " + b + " = 0<br>Solution: " + result;
}

function exercise7() {
    alert("2nd degree equations: ax^2 + bx + c = 0")
    let a = +(prompt("Enter a"));
    let b = +(prompt("Enter b"));
    let c = +(prompt("Enter c"));
    let x1 = null;
    let x2 = null;
    let result = "";
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        result = "No solution";
    } else if (delta === 0) {
        x1 = -b / (2 * a);
        result = "x1 = x2 = " + x1;
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        result = "x1 = " + x1 + " vs x2 = " + x2;
    }
    document.getElementById("ex7Result").innerHTML = "2nd degree equations: " + a + "x^2 + " + b + "x + " + c + " = 0<br>Solution: " + result;
}

function exercise8() {
    let age = +(prompt("Enter age"));
    let result = "";
    if (age > 0 && age < 120) {
        result = "Hello guy";
    } else {
        result = "Damn it!! What the hell are you?";
    }
    document.getElementById("ex8Result").innerHTML = result;
}

function exercise9() {
    let a = +(prompt("Enter length of edge 1st"));
    let b = +(prompt("Enter length of edge 2nd"));
    let c = +(prompt("Enter length of edge 3rd"));
    let result = "";
    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c && b + c > a && c + a > b) {
            result = "These are three edge of triangle";
        } else {
            result = "These are not three edge of triangle";
        }
    } else {
        result = "These are not three edge of triangle";
    }
    document.getElementById("ex9Result").innerHTML = "Edge 1st: " + a + "<br>Edge 2nd: " + b + "<br>Edge 3rd: " + c + "<br>" + result;
}

function exercise10() {
    let amount = +(prompt("Enter amount used (kWh)"));
    let cost = +(prompt("Enter cost for 1 kWh ($)"));
    let result = amount * cost;
    document.getElementById("ex10Result").innerHTML = "Used: " + amount + "<br>Cost 1 kWh: " + cost + "$<br>Total: " + result + "$";
}

function exercise11() {
    let income = +(prompt("Enter your income (x1000)"))
    let tax = 25;
    if (income > 18000 && income <= 32000) {
        tax = 20;
    } else if (income > 10000 && income <= 18000) {
        tax = 15;
    } else if (income > 5000 && income <= 10000) {
        tax = 10;
    } else {
        tax = 5;
    }
    document.getElementById("ex11Result").innerHTML = "Rate of tax: " + tax + "<br>Tax: " + (income * tax / 100);
}

function exercise12() {
    let loan = +(prompt("Enter the loan:"))
    let month = +(prompt("Enter month:"))
    let rate = +(prompt("Enter rate per month:"))
    let loanMonth = null;
    let result = "";
    for (let i = 1; i <= month; i++) {
        loanMonth = loan * rate / 100
        loan = loan + loanMonth
        result += "Rate of loan in month " + i + "th is: " + loanMonth + "<br>"
    }
    result += "Sum of loan: " + loan
    document.getElementById("ex12Result").innerHTML = result;
}