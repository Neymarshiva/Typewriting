import styled from "styled-components";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal.jsx";
import Menus from "../../ui/Menus.jsx";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import CreateMachines from "./CreateMachines.jsx";

const MachineNumber = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const LanguageType = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;


function MachineRow({ machine }) {
    const {
        id: machineId,
        machineNumber,
        languagesId,
        lanuagesType
    } = machine;

    return (

        <Table.Row>
            <MachineNumber>
                {machineNumber}
            </MachineNumber>
            <LanguageType>
                {lanuagesType}
            </LanguageType>
            <div>
                <Modal>
                    <Menus.Menu>
                        <Menus.Toggle id={machineId} />
                        <Menus.List id={machineId}>
                            <Menus.Button
                                icon={<HiSquare2Stack />}  >
                                Duplicate
                            </Menus.Button>

                            <Modal.Open opens="edit">
                                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                            </Modal.Open>

                            <Modal.Open opens="delete">
                                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                            </Modal.Open>
                        </Menus.List>
                        <Modal.Window name="edit">
                            <CreateMachines/>
                        </Modal.Window>

                    </Menus.Menu>
                </Modal>
            </div>
        </Table.Row>
    );
}

export default MachineRow;