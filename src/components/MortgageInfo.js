import React from 'react';
import numberFormat from '../utils/numberFormat';

class MortgageInfo extends React.Component{
    
    state = {
        showMore: false
    }

    toggle = () => this.setState({
        showMore: !this.state.showMore
    })
    
    render(){
    return (
        <div id="mortgage-info">
            <p className="estimate-display">your monthly estimate: </p>
            {this.props.mortgage[0] && <h5 className="monthly-amount">${numberFormat(this.props.mortgage[0])}</h5>}
            

            { this.state.showMore &&
                <div>
                    <p>Mortgage Insurance: ${this.props.mortgage[1]}</p>
                    <p>monthly taxes: ${numberFormat(this.props.mortgage[2].toFixed(2))}</p>
                </div>
            }

            {this.props.mortgage[0] && 
            <button className="btn btn-info info-btn" onClick={this.toggle}>
                {this.state.showMore ? "show less" : "show more"}
            </button>}
        </div>
    );
}
}

export default MortgageInfo;
