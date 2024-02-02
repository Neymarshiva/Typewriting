import styled from "styled-components";
import Table from "../../ui/Table";


const Student = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;



function StudentRow({ student }) {
debugger;
    const {
        id,
        machinesId,
        batchTimingsId,
        firstName,
        lastName,
        email,
        mobileNumber,
        gender,
        address
    } = student;


    return (
        <Table.Row>
            <Student>{firstName + " " + lastName}</Student>
            <Stacked> {email}</Stacked>
            <Stacked> {mobileNumber}</Stacked>
            <Stacked> {gender}</Stacked>
            <Stacked> {address}</Stacked>
            <Stacked> {machinesId}</Stacked>
            <Stacked> {batchTimingsId}</Stacked>
            <div></div>
        </Table.Row>


    )

}


export default StudentRow;