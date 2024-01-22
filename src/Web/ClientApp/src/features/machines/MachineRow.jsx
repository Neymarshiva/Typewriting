import styled from "styled-components";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal.jsx";
import Menus from "../../ui/Menus.jsx";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

const MachineNumber = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const LanguageId = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;


function MachineRow({ machine }) {    
    const {
        id: machineId,
        machineNumber,
        languagesId
    } = machine;

    return (

        <Table.Row>
            <MachineNumber>
                {machineNumber} 
            </MachineNumber>
            <LanguageId>
                {languagesId}
            </LanguageId>
            <div>
                <Modal>
                    {/* <Menus.Menu>
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
                    </Menus.Menu> */}
                </Modal>
            </div>
        </Table.Row>
    );
}

export default MachineRow;