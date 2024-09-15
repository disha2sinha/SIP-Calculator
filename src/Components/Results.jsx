import calculateInvestmentResults from "../utils/investment";

export default function Results({input}){
    const results = calculateInvestmentResults(input);
    console.log(results)
    const initialInvestment = results[0].valueEndofYear - results[0].interest - results[0].annualinvestment;
    return(
        <table id='results'>
            <thead>
            <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {results.map((yeardata)=>
                {
                const totalInterest = yeardata.valueEndofYear - yeardata.annualinvestment * yeardata.year - initialInvestment;
                const capitalinvested = yeardata.valueEndofYear - totalInterest;
                return(
                <tr key={yeardata.year}>
                    <td className="data">{yeardata.year}</td>
                    <td className="data">{yeardata.valueEndofYear}</td>
                    <td className="data">{yeardata.interest}</td>
                    <td className="data">{totalInterest}</td>
                    <td className="data">{capitalinvested}</td>
                </tr>)
                }
            )}
            </tbody>
        </table>
    )
}