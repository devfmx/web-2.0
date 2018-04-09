import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Becas extends Component {
    constructor( props ){
        super();
        this.state = { ...props };
    }
    componentWillMount(){
        window.location = this.state.loc;
    }
    render(){
        return (<section>Redirecting...</section>);
    }
}

Becas.propTypes = {};
Becas.defaultProps = {};

export default Becas;
