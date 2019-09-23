export const mortgageCalculations = (homeValue, downPayment, loanTerm, interest) => {
  

    // let principal = homeValue - downPayment;
    // let monthlyInterest = (interest/100) / 12;
    // let lifetimePayments = loanTerm * 12;

    // const monthlyPayment = principal * ((Math.pow(monthlyInterest * (monthlyInterest + 1), lifetimePayments))/(Math.pow(monthlyInterest + 1, lifetimePayments) - 1));
    // console.log(principal, monthlyInterest, lifetimePayments);
    // return monthlyPayment;


        const interestInDecimal = interest / 100;
        const montlyInterest = interestInDecimal / 12;
        const term = loanTerm * 12;
        const interestTimesPayments = (Math.pow(1+montlyInterest,term)).toFixed(3);
        const dpPercent = (downPayment / homeValue) * 100;
        let principal = homeValue - downPayment;
        let propTaxes = homeValue * 0.02173;
        let monthlyTaxes = propTaxes / 12;
        const loanPayment = principal*((montlyInterest * interestTimesPayments)/(interestTimesPayments - 1));
        const PMI = dpPercent >= 20 ? 0 : (homeValue / 50000) * 25;
        const payment = (loanPayment + monthlyTaxes + PMI).toFixed(2);
        console.log(loanPayment, monthlyTaxes, dpPercent, PMI)
        return [payment, PMI, monthlyTaxes]
}


