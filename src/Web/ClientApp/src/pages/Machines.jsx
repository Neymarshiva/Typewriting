
import React, { Component, useState } from 'react';
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import MachineTable from '../features/machines/MachinesTable';
import AddMachines from '../features/machines/AddMachines';
import CreateMachines from '../features/machines/CreateMachines';
import Button from '../ui/Button';
export class Machines extends Component {

  constructor(props) {
    super(props);
    this.state = { showForm: false };
    this.setShowFrom = this.setShowFrom.bind(this);
  }

  setShowFrom() {
    console.log("setShowForm trigger")
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    return (
      <>
        <Row type="horizontal">
          <Heading as="h1">Machines</Heading>

        </Row>

        <Row>
          <MachineTable />

          <AddMachines  />
          <Button onClick={this.setShowFrom}>Add new machines</Button>
          {this.state.showForm && <CreateMachines />}



        </Row>
      </>
    );
  }
} 