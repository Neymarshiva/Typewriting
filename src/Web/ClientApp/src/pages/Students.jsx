import React, { Component } from 'react';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import StudentTable from '../features/students/StudentTable';
import AddStudent from '../features/students/AddStudent';
import StudentTableOperations from '../features/students/StudentTableOperations';


export class Students extends Component {
    render() {
        return (
            <>
                <Row type="horizontal">
                    <Heading as="h1">Students</Heading>
                    <AddStudent />
                </Row>

                <Row type="horizontal">

                    <StudentTableOperations />
                </Row>

                <Row>
                    <StudentTable />
                </Row>
            </>
        );
    }
}
