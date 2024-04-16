import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Card from "../../ui/Card";
import Separator from "../../ui/Separator";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useStudents } from "../students/useStudents";
import Spinner from "../../ui/Spinner";
import { useStudentDetails } from "./useStudentDetails";
import { GenderEnum } from "../../enums/globalEnum";
import Empty from "../../ui/Empty";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateStudent from "../students/CreateStudent";
import { useTranslation } from "react-i18next";

// Define styled components
const flexstyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexdirection || "row"};
  align-items: ${(props) => props.alignitems || "start"};
  justify-content: ${(props) => props.justifycontent || "start"};
`;

const UserInfo = styled.div`
  display:flex;
  flex-direction: column!important;
  justify-content:center;
  align-items:center;
  padding-top: 1.25rem!important;
  padding-bottom: 1.25rem!important;
`;

const Avatar = styled.div` 
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  margin-bottom: 1.75rem!important; 
`;

const DetailToggle = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.75rem!important;
  padding-top: 0.75rem!important;
  padding-bottom: 0.75rem!important;
  padding-left:2rem;
  width:100%;
  cursor: pointer; /* Add cursor pointer */
`;

const DetailDiv = styled.div`
  display: inline-flex;
  align-items: center;
  font-weight:600 !important;   
  color:var(--bs-text-gray-900);
`;

const DetailItemDiv = styled.div`
  font-weight: 600!important;
  margin-top: 1.25rem!important;
  width:100%; 
  color:var(--bs-text-gray-900); 
`;

const DetailValueDiv = styled.div`
  color: var(--bs-text-gray-600);
  margin-top:0.5rem; 
`;

const DetailToggleDiv = styled.div`
  color: var(--bs-text-gray-600);
  margin-top:0.5rem;
  transition: max-height 0.3s ease; /* Add transition for max-height */
  overflow: hidden;
  max-height: ${({ isopen }) => (isopen == "true" ? "1500px" : "0px")}; /* Set max-height based on isOpen state */
  width:100%;
`;


const StudentName = styled.div`
  font-weight:600 !important;   
  color:var(--bs-text-gray-900);
  text-align: center;
`;

function StudentDetail() {
  const { isLoading, firstStudent } = useStudentDetails();
  const [isopen, setIsOpen] = useState(true); // State to manage the visibility of the detail section
  const { t } = useTranslation();

  if (isLoading) return <Spinner />;
  if (!firstStudent) return <Empty resourceName={t("student")} />;


  // Create a shallow copy of the student object
  const clonedFirstStudent = { ...firstStudent }; 

  clonedFirstStudent.joiningDate = {
    startDate: clonedFirstStudent?.joiningDate,
    endDate: clonedFirstStudent?.joiningDate,
  }

  const toggleDetail = () => {
    setIsOpen((prev) => !prev); // Toggle the isOpen state
  };

  return (
    <Card
      flexdirection="column"
      justifycontent="start"
      alignitems="center"
      background="var(--bs-card-background-color);"
      width="30%"
      height="100%"
      border="1px solid var(--bs-card-border-color)"
      borderradius=".5rem"
      color="var(--bs-body-color)"
      padding="1rem"
      flexstyles={flexstyles}
    >
      <UserInfo>
        <Avatar>
          <img className="rounded-full mb-4" src="user-image.jpg" alt="" />
          <StudentName className="text-hover-primary mb-3">
            {`${clonedFirstStudent?.firstName}  ${clonedFirstStudent?.lastName}`}
          </StudentName>
        </Avatar>
      </UserInfo>
      <DetailToggle>
        <DetailDiv onClick={toggleDetail} >{t("Details")} {isopen ? <FaAngleUp /> : <FaAngleDown />}
        </DetailDiv>
        <DetailDiv>
          <Modal>
            <Modal.Open opens="edit">
              <Button size="small">
                {t("Edit")} {t("Student")}
              </Button>
            </Modal.Open>
            <Modal.Window name="edit">
              <CreateStudent studentToEdit={clonedFirstStudent} />
            </Modal.Window>
          </Modal>
        </DetailDiv>
      </DetailToggle>
      <Separator></Separator>
      <DetailToggleDiv isopen={isopen.toString()}> {/* Pass isOpen state to control the visibility */}
        <div className="w-full">
          <div className="p-8 text-2xl">
            <DetailItemDiv>{t("Email")}</DetailItemDiv>
            <DetailValueDiv>{clonedFirstStudent?.email}</DetailValueDiv>
            <DetailItemDiv>{t("MobileNumber")}</DetailItemDiv>
            <DetailValueDiv>{clonedFirstStudent?.mobileNumber}</DetailValueDiv>
            <DetailItemDiv>{t("Address")}</DetailItemDiv>
            <DetailValueDiv>{clonedFirstStudent?.address}</DetailValueDiv>
            <DetailItemDiv>{t("Gender")}</DetailItemDiv>
            <DetailValueDiv>{GenderEnum(clonedFirstStudent?.gender)}</DetailValueDiv>
            <DetailItemDiv>{t("JoiningDate")}</DetailItemDiv>
            <DetailValueDiv>{t('DateFormat', {value: clonedFirstStudent.joiningDate.startDate})} </DetailValueDiv>
            <DetailItemDiv>{t("MachineNumber")}</DetailItemDiv>
            <DetailValueDiv>{clonedFirstStudent?.machinesNumber}</DetailValueDiv>
            <DetailItemDiv>{t("BatchTimming")}</DetailItemDiv>
            <DetailValueDiv>{clonedFirstStudent?.timings}</DetailValueDiv>
          </div>
        </div>
      </DetailToggleDiv>
    </Card >
  );
}

export default StudentDetail;
