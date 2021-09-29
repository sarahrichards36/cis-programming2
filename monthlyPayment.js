function $(id)
{
    return document.getElementById(id);
}//function closed



 var calculate_click = function()
 {
    
    var fullName = $("full_name").value;
    var initialLoanAmount = $("initial_loan").value;
    var numMonths = $("num_months").value;
    var annualInterest = $("annual_interest").value;
    var monthlyPayment = $("monthly_payment").value;
    
     //called the minions
    annualInterest = (annualInterest/12)/100;
    //turns annual interest into monthly interest and into a decimal
    //monthlyPayment = initialLoanAmount* (annualInterest/(1-(Math.pow((1+annualInterest),- numMonths))));
    monthlyPayment = initialLoanAmount*(annualInterest/(1-((1+annualInterest)**-numMonths))); 
    //caluclates monthly payment 
    $("monthly_payment").value = "$" + monthlyPayment.toFixed(2);
    //return value back to html
    
    return false;
    // makes form return false so calculations go on labels instead of submitting to another form
 }//function closed 
 
 window.onload = function () 
{
    $("full_name").value = "";
    $("initial_loan").value = "";
    $("num_months").value = "";
    $("annual_interest").value = "";
    $("monthly_payment").value ="";
    //clears fields when refreshed 
    $("full_name").focus();
    //put arrow at fullName 
}; 