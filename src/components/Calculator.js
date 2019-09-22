import React, { Component } from 'react'

export class Calculator extends Component {
    
    state = {
        homeValue: '',
        downPayment: '',
        downPaymentpercent: '',
        loanTerm: '',
        interest: ''
    }

    handleValueChange = (e) => {
        this.setState({ homeValue : e.target.value })
    }

    handlePaymentChange = (e) => {
        this.setState({ downPayment : e.target.value })
    }

    handlePaymentPercentChange = (e) => {
        this.setState({ downPaymentpercent : e.target.value })
    }

    handleTermChange = (e) => {
        this.setState({ loanTerm : e.target.value })
    }

    handleInterestChange = (e) => {
        this.setState({ interest : e.target.value })
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Home Value:</label>
                    $<input type="text" value={this.state.homeValue} onChange={this.handleValueChange} />
                    <label>Down Payment:</label>
                    $<input type="text" value={this.state.downPayment} onChange={this.handlePaymentChange} />
                    <label>Down Payment Percentage:</label>
                    %<input type="text" value={this.state.downPaymentpercent} onChange={this.handlePaymentPercentChange} />
                    <label>Loan Term:</label>
                    <select value={this.state.loanTerm} className='term_length' onChange={this.handleTermChange}>
                        <option value={10}>10 Year Fixed</option>
                        <option value={15}>15 Year Fixed</option>
                        <option value={20}>20 Year Fixed</option>
                        <option  value={30}>30 Year Fixed</option>
                    </select>
                    <label>Interest Percentage</label>
                    <input type="text" value={this.state.interest} onChange={this.handleInterestChange} />
                </form>
            </div>
        )
    }
}

export default Calculator
