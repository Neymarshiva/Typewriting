import Button from "../../ui/Button";
import React, { Component } from 'react';
import Modal from "../../ui/Modal";
import CreateMachines from '../../features/machines/CreateMachines';
export class AddMachine extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpenModal: false };
        this.addNewMachinePopupFn = this.addNewMachinePopupFn.bind(this);
    }

    addNewMachinePopupFn = () => {
        console.log("button clicked");
        this.setState({
            isOpenModal: !this.state.isOpenModal
        });

    };

    render() {

        return (
            <div>
                <Modal>
                    <Modal.Open opens="machine-form">
                        <Button>Add new machines</Button>
                    </Modal.Open>
                    <Modal.Window name="machine-form">
                        <CreateMachines />
                    </Modal.Window>
                </Modal>
            </div>
        )

        // return (
        //     <div>
        //         <Button onClick={this.addNewMachinePopupFn}>Add  machines</Button>

        //         {this.state.isOpenModal && <Modal><CreateMachines /></Modal>}
        //     </div>
        // );
    }
}

export default AddMachine;