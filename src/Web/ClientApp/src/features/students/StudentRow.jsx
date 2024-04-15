import styled from "styled-components";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { HiPencil, HiTrash } from "react-icons/hi2";
import CreateStudent from "./CreateStudent";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteStudents } from "./useDeleteStudents";
import { GenderEnum } from "../../enums/globalEnum";
import { MdOutlineMail } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


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
    font-size: 1.5rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

const StackedIcon = styled.div`
  display:flex;
  margin-top:0.25rem;
  & span {
    margin-left:0.3rem;
  }
  & svg{
    margin-top:0.4rem;
  }
`;
const StyledNavLink = styled(NavLink)`
&:hover {
    transition: color .2s ease;
    color: var(--bs-text-gray-800);
}`;


function StudentRow({ student }) {

  const { t } = useTranslation();

  student.joiningDate = {
    startDate: student?.joiningDate,
    endDate: student?.joiningDate,
  }

  const {
    id,
    machinesId,
    machinesNumber,
    batchTimingsId,
    timings,
    firstName,
    lastName,
    email,
    mobileNumber,
    gender,
    address,
    joiningDate
  } = student;
  const { isDeleting, deleteStudents } = useDeleteStudents();

  console.log(joiningDate);

  const formattedDate = joiningDate ? new Date(joiningDate.startDate).toLocaleDateString() : '';

  console.log(new Date(joiningDate.startDate));

  return (
    <Table.Row>
      <Student>
        <StyledNavLink to={`/studentdetail/${id}`}>
          {firstName + " " + lastName}
        </StyledNavLink>

        <Stacked>
          <StackedIcon>
            <MdOutlineMail /> <span>{email}</span>
          </StackedIcon>
        </Stacked>
        <StackedIcon>
          <ImMobile /><span>{mobileNumber}</span>
        </StackedIcon>
      </Student>
      <StackedIcon>
        <span> {t('DateFormat', {
          value: joiningDate.startDate,
        })}</span>
      </StackedIcon>
      <Stacked> {GenderEnum(gender)}</Stacked>
      <Stacked> {address}</Stacked>
      <Stacked> {machinesNumber}</Stacked>
      <Stacked> {timings}</Stacked>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={id} />
            <Menus.List id={id}>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>{t('Edit')}</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>{t('Delete')}</Menus.Button>
              </Modal.Open>
            </Menus.List>
            <Modal.Window name="edit">
              <CreateStudent studentToEdit={student} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={firstName + " " + lastName}
                disabled={isDeleting}
                onConfirm={() => deleteStudents(id)}
              />
            </Modal.Window>

          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>


  )

}


export default StudentRow;