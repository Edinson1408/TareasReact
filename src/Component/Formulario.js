import React, { Component } from 'react';

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            title:          '',
            responsible:    '',
            description:    '',
            priority:       'low'
        }
        this.handleInput=this.handleInput.bind(this)
        this.HandleSubmit=this.HandleSubmit.bind(this)
    }
    handleInput(e){
        console.log(e.target.value, e.target.name)
        const {value,name} =e.target;
        this.setState({
            [name]:value
        })
        //console.log(this.state)
    }
    HandleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log(this.state)
        console.log('set an date');
    
    }
    render(){
        return(
            <div className='card'>
                <form className='card-body' onSubmit={this.HandleSubmit}>
                    <div className='form-group'>
                        <input 
                            type='text'
                            name='title'
                            onChange={this.handleInput}
                            className='form-control'
                            placeholder='title'
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='text'
                            name='responsible'
                            onChange={this.handleInput}
                            className='form-control'
                            placeholder='Responsable'
                        />   
                    </div>
                    <div className='form-group'>
                        <input 
                            type='text'
                            name='description'
                            onChange={this.handleInput}
                            className='form-control'
                            placeholder='description'
                        />   
                    </div>

                    <div className="form-group">
                    <select
                        name="priority"
                        className="form-control"
                        onChange={this.handleInput}
                        value={this.state.priority}
                    >
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                    </select>
                 </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>

                </form>
            </div>
        );
    }

}

export default Formulario;