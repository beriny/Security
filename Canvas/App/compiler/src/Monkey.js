import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import * as bootstrap from 'react-bootstrap';
import { Panel, FormGroup, FormControl, Button } from 'bootstrap';

class Monkey extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        let textAreaStyle = {
            height: 480
        };
        return (
            <Panel header="Monkey Compiler" bsStyle="success">
                <FormGroup>
                    <FormControl componentClass="textarea"
                        style={ textAreaStyle }
                        placeholder="Enter your code"
                    />
                </FormGroup>
                <Button bsStyle="danger">Lexing</Button>
            </Panel>
        );
    }
}

export default Monkey;
