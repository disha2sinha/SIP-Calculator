export default function calculateInvestmentResults(input){
    console.log(input)
    const {Monthly_Investment, Annual_Investment, Returns_Rate, Period} =  input;
    let annualData = []
    let investment_value = Monthly_Investment;
    for(let i=0;i<Period;i++){
        const interestEarnedInYears = Monthly_Investment * (Returns_Rate);
        investment_value += interestEarnedInYears + Annual_Investment;
        annualData.push({
            year : +i+1,
            interest : +interestEarnedInYears,
            valueEndofYear : +investment_value,
            annualinvestment : +Annual_Investment
        })
    }
    return annualData
}