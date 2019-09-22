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
                    <h1 className="text-center mt-5">Mortgage Calculator</h1>

                    <div className="form-main">                    
                    
                        <div className="col labels">
                            <label>Home Value:</label>
                            <label>Down Payment:</label>
                            <label>Down Payment Percentage:</label>
                            <label className="loan-label">Loan Term:</label>
                            <label className="interest-label">Interest Percentage:</label>
                        </div>

                        <div className="col">
                            <div>
                                <input type="text" className="input" 
                                value={this.state.homeValue} 
                                onChange={this.handleValueChange}
                                placeholder="$ Home Value"
                                />
                            </div>

                            <div>
                                <input type="text" className="input" 
                                value={this.state.downPayment} 
                                onChange={this.handlePaymentChange}
                                placeholder="$ Down Payment"
                                 />
                            </div>

                            <div>
                                <input type="text" className="input"
                                value={this.state.downPaymentpercent}
                                onChange={this.handlePaymentPercentChange}
                                placeholder="% Down Payment"
                                />
    
                            </div>

                            <div id="select">
                                <select value={this.state.loanTerm} className="input" onChange={this.handleTermChange}>
                                    <option value={10}>10 Year Fixed</option>
                                    <option value={15}>15 Year Fixed</option>
                                    <option value={20}>20 Year Fixed</option>
                                    <option value={30}>30 Year Fixed</option>
                                </select>   
                            </div>

                            <div>
                                <input type="text" className="input"
                                 value={this.state.interest} 
                                 onChange={this.handleInterestChange}
                                 placeholder="% Interest"
                                 />
                            </div>
                            
                        </div>
                    </div>
                   
                    <div id="btn-div">
                       <button className="btn btn-large btn-primary">Calculate Mortgage</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Calculator
