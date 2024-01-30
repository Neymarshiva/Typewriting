import styled from "styled-components";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal.jsx";
import Menus from "../../ui/Menus.jsx";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import CreateMachines from "./CreateMachines.jsx";
import { useDeleteMachines } from "./useDeleteMachines.js";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";

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
    const { isDeleting, deleteMachine } = useDeleteMachines();
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

                            <Modal.Open opens="edit">
                                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                            </Modal.Open>

                            <Modal.Open opens="delete">
                                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                            </Modal.Open>
                        </Menus.List>
                        <Modal.Window name="edit">
                            <CreateMachines machineToEdit={machine} />
                        </Modal.Window>

                        <Modal.Window name="delete">
                            <ConfirmDelete
                                resourceName={"machine number  " + machineNumber}
                                disabled={isDeleting}
                                onConfirm={() => deleteMachine(machineId)}
                            />
                        </Modal.Window>

                    </Menus.Menu>
                </Modal>
            </div>
        </Table.Row>
    );
}

export default MachineRow;