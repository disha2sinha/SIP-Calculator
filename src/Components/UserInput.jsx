export default function UserInput({placeholder, userInput, handleFocus, handleChange}){   
    return(
        <section id = "form">
            <div>
            <label className = "label">Monthly Investment Amount (in Rs.) </label>
            <input placeholder = {placeholder.Monthly_Investment} type="number" value = {userInput.Monthly_Investment} onFocus={() => handleFocus('Monthly_Investment')} onChange={(event) => handleChange('Monthly_Investment',event.target.value)} required></input>
            </div>
            <div>
            <label className = "label">Annual Investment Amount (in Rs.) </label>
            <input placeholder = {placeholder.Annual_Investment} type="number" value = {userInput.Annual_Investment} onFocus={() => handleFocus('Annual_Investment')} onChange={(event) => handleChange('Annual_Investment',event.target.value)} required></input>
            </div>
            <div>
            <label className = "label">Expected Annual Returns (in %) </label>
            <input placeholder = {placeholder.Returns_Rate} type="number" value = {userInput.Returns_Rate} onFocus={() => handleFocus('Returns_Rate')} onChange={(event) => handleChange('Returns_Rate',event.target.value)} required></input>
            </div>
            <div>
            <label className = "label">Investment Period (in years) </label>
            <input placeholder = {placeholder.Period} type="number" value = {userInput.Period} onFocus={() => handleFocus('Period')} onChange={(event) => handleChange('Period',event.target.value)} required></input>
            </div>
        </section>
    )
}