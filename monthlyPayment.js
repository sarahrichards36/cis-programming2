var $ = function (id) { //functionName(parameter)
    return document.getElementById(id); //return ends function
};

var calculate = function () {
    var name = $("full_name").value;
    var loan = $("initial_loan_amount").value;
    var months = $("months").value;
    var interest = $("interest").value;
    var monthlyPayment = loan;
    //DEBUG alert("name: "+name+ " loan: " +loan+ " months: "+months+ "  interest: "+interest);

    var monthlyInterestTop = interest / 12;
    monthlyInterestTop /= 100;
    var monthlyInterestBot = monthlyInterestTop;
    //DEBUG alert(+monthlyInterestTop);
    monthlyInterestBot += 1;
    months *= -1;
    //DEBUG  alert(+months);
    monthlyInterestBot = monthlyInterestBot ** months;
    var bottomCalc = 1 - monthlyInterestBot;
    var f = monthlyInterestTop / bottomCalc;
    monthlyPayment *= f;
    //DEBUG alert(+monthlyPayment);
    $("monthly_payment").value = "$" + monthlyPayment.toFixed(2);
    return false;
};

window.onload = function () {
    $("full_name").focus();
};
