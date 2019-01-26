import React, { Component } from 'react';


class Navegacion extends Component
{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a className="text-white">
                {this.props.title}
                <samp className='badge badge-pill badge-light ml-2'>
                        {this.props.numero}
                </samp>
                </a>
            </nav>
        )
    }
}

export default Navegacion;