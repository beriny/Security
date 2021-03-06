import React, { Component } from 'react';
import * from 'react-bootstrap';

class Monkey extends Component {
    constructor(props) {
        super(props);
    }

    render () {
            let textAreaStyle = {
                height: 480
            };
            return (
                <bootstrap.Panel header="Monkey Compiler" bsStyle="success">
                    <bootstrap.FormGroup>
                        <bootstrap.FormControl componentClass="textarea"
                            style={textAreaStyle}
                            placeholder="Enter your code" />
                    </bootstrap.FormGroup>
                    <bootstrap.Button bsStyle="danger">
                        Lexing
                    </bootstrap.Button>
                </bootstrap.Panel>
            )
        };

};

export default Monkey;
