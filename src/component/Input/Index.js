import React, { Component } from 'react';


class Index extends Component {
    render() {
        return (
            <div>
                <input name={this.props.name} placeholder={this.props.placeholder} onChange={this.props.onChange}/>
            </div>
        );
    }
}

export default Index;