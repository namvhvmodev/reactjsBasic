import React from 'react'

export class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        return this.setState({value: this.state.value + 1});
    }

    decrement() {
        return this.setState({value: this.state.value - 1});
    }

    render() {
        return (
            <section>
                <div class="counter">
                    <h3 className='value'>{this.state.value}</h3>
                    <button className='btn' onClick={this.increment}>+</button>
                    <button className='btn' onClick={this.decrement}>-</button>
                </div>
            </section>
        )      
    }
}