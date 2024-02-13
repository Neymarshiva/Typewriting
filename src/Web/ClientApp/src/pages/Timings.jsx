import React, { Component } from 'react';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import BatchTimingTable from '../features/batchtimmings/BatchTimingTable';


export class Timings extends Component {
    render() {
        return (
            <>
                <Row type="horizontal">
                    <Heading as="h1">Batch Timmings</Heading> 
                </Row>

                <Row>
                    <BatchTimingTable /> 
                </Row>
            </>
        );
    }
}
