
import React, { Component } from 'react';
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import MachineTable from '../features/machines/MachinesTable';
import AddMachines from '../features/machines/AddMachines';
export class Machines extends Component {

  render() {
    return (
      <>
        <Row type="horizontal">
          <Heading as="h1">Machines</Heading>
          <AddMachines />
        </Row>

        <Row>
          <MachineTable />


        </Row>
      </>
    );
  }
} 