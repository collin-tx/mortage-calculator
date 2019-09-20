import React, { Component } from 'react'

export class Calculator extends Component {
    
    state = {
        homeValue: '',
        downPayment: '',
        downPaymentpercent: '',
        loanTerm: '',
        interest: ''
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Home Value:</label>
                    $<input type="text" value={this.state.homeValue} />
                    <label>Down Payment:</label>
                    $<input type="text" value={this.state.downPayment} />
                    <label>Down Payment Percentage:</label>
                    %<input type="text" value={this.state.downPayment} />
                    <label>Loan Term:</label>
                    <select value={this.state.loanTerm} onChange="" className='term_length'>
                        <option value={10}>10 Year Fixed</option>
                        <option value={15}>15 Year Fixed</option>
                        <option value={20}>20 Year Fixed</option>
                        <option  value={30}>30 Year Fixed</option>
                    </select>
                    <label>Interest Percentage</label>
                    <input type="text" value={this.state.interest} />
                </form>
            </div>
        )
    }
}

export default Calculator
