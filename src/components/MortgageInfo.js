import React from 'react';

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
            <p className="estimate-display">monthly payment estimate: </p>
            <h5>${this.props.mortgage[0]}</h5>
            <button className="btn btn-info" onClick={this.toggle}>{this.state.showMore ? "show less" : "show more"}</button>
            { this.state.showMore &&
                <div>
                    <p>Mortgage Insurance: ${this.props.mortgage[1]}</p>
                    <p>monthly taxes: ${this.props.mortgage[2].toFixed(2)}</p>
                </div>
            }
        </div>
    );
}
}

export default MortgageInfo;
