import React, { Component } from 'react';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import StudentTable from '../features/students/StudentTable';


export class Students extends Component {
    render() {
        return (
            <>
                <Row type="horizontal">
                    <Heading as="h1">Students</Heading>
                </Row>

                <Row>
                    <StudentTable />
                </Row>
            </>
        );
    }
}
