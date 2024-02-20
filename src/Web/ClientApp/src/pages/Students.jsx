import React, { Component } from 'react';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import StudentTable from '../features/students/StudentTable';
import AddStudent from '../features/students/AddStudent';
import StudentTableOperations from '../features/students/StudentTableOperations';
import styled from "styled-components";

const StyledFilterRow = styled.div`
    border: 1px solid var(--color-grey-300);
    font-size: 1.4rem;
    background-color: var(--color-grey-50);
    border-radius: 7px;
    overflow: hidden;
    padding: 1rem;
    justify-content: space-between;
      align-items: center;
      display: flex;
`;


export class Students extends Component {
    render() {
        return (
            <>
                <Row type="horizontal">
                    <Heading as="h1">Students</Heading>
                    <AddStudent />
                </Row>

                <StyledFilterRow>

                    <StudentTableOperations />
                </StyledFilterRow>

                <Row>
                    <StudentTable />
                </Row>
            </>
        );
    }
}
