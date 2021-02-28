import React ,{useState}from 'react'

function Counter(props) {
    const  state = {
                        count :3,
                    };
 
const {count}= state


const increment = (state,props)=>{
    const {max,step} = props
    if (state.count >= max) return 
    return { count : state.count + step}
}

class Counter extends Comment {
    constructor(props){
        super(props);
        this .state = {
            count:0
        }


        this.increment= this.increment.bind(this)
        this.decrement= this.decrement.bind(this)
        this.reset=this.reset.bind(this)
    }
}


function decrement(){
    this.setState({count:state.count-1}) 
};

function reset(){
    this.setState({count:0}) 
};

    return (
        <div className= "Counter">
            <p className="count">{count}</p>
            <section className= "controls">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                </section>            
        </div>
    )
}

export default Counter
