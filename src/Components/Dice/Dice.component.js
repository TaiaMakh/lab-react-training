import React from 'react';

class Dice extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: '3'
        }
    }
    getRandomDice = () => {
        let random = Math.floor(Math.random() * 6) + 1;
        this.setState({value: '-empty'});
        setTimeout(() => {
            this.setState({value: random})
        }, 1000);
    }
    render(){
        return (
            <img onClick={() => this.getRandomDice()} src={`/img/dice${this.state.value}.png`} alt="dice-img"/>            
        );
    }
}

export default Dice;