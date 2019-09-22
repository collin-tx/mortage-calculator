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
                    {/* <div className="row">
                        <label>Home Value:</label>
                        <div className="column">
                            $<input type="text" value={this.state.homeValue} onChange={this.handleValueChange} />
                        </div>
                    </div>


                    <div className="row">
                        <label>Down Payment:</label>
                        $<input type="text" value={this.state.downPayment} onChange={this.handlePaymentChange} />
                    </div>

                    <div className="row">
                        <label>Down Payment Percentage:</label>
                        %<input type="text" value={this.state.downPaymentpercent} onChange={this.handlePaymentPercentChange} />
                    </div>

                    <div className="row">
                         <label>Loan Term:</label>
                        <select value={this.state.loanTerm} className='term_length' onChange={this.handleTermChange}>
                            <option value={10}>10 Year Fixed</option>
                            <option value={15}>15 Year Fixed</option>
                            <option value={20}>20 Year Fixed</option>
                            <option  value={30}>30 Year Fixed</option>
                        </select>
                    </div>

                    <div className="row">
                        <label>Interest Percentage</label>
                        <input type="text" value={this.state.interest} onChange={this.handleInterestChange} />
                    </div> */}
                    <div className="form-main">                    
                    
                        <div className="col">
                            <label>Home Value:</label>
                            <label>Down Payment:</label>
                            <label>Down Payment Percentage:</label>
                            <label>Loan Term:</label>
                            <label>Interest Percentage</label>
                        </div>

                        <div className="col">
                            <div>
                                <input type="text" className="input" value={this.state.homeValue} onChange={this.handleValueChange} />
                            </div>

                            <div>
                                <input type="text" className="input" value={this.state.downPayment} onChange={this.handlePaymentChange} />
                            </div>

                            <div>
                                <input type="text" className="input" value={this.state.downPaymentpercent} onChange={this.handlePaymentPercentChange} />
    
                            </div>

                            <div id="select">
                                <select value={this.state.loanTerm} className="input" onChange={this.handleTermChange}>
                                    <option value={10}>10 Year Fixed</option>
                                    <option value={15}>15 Year Fixed</option>
                                    <option value={20}>20 Year Fixed</option>
                                    <option  value={30}>30 Year Fixed</option>
                                </select>   
                            </div>

                            <div>
                                <input type="text" className="input" value={this.state.interest} onChange={this.handleInterestChange} />
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
