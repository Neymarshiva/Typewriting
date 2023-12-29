import styled from "styled-components";
import Table from "../../ui/Table";


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
    debugger;
    const {
        machineNumber,
        languagesId
    } = machine;

    return (

        <Table.Row>
            <div>1</div>
            <MachineNumber>
                {machineNumber}
            </MachineNumber>
            <LanguageId>
                {languagesId}
            </LanguageId>
        </Table.Row>
    );
}

export default MachineRow;