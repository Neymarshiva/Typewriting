import styled, { css } from "styled-components";
import Card from "../../ui/Card";
import Separator from "../../ui/Separator";
import { FaAngleDown } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useStudents } from "../students/useStudents";
import Spinner from "../../ui/Spinner";
import { useStudentDetails } from "./useStudentDetails";
import { GenderEnum } from "../../enums/globalEnum";
import Empty from "../../ui/Empty";


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
padding-bottom: 1.25rem!important;`

const Avatar = styled.div` 
    display: inline-block;
    flex-shrink: 0;
    position: relative;
    margin-bottom: 1.75rem!important; 
     
`
const DetailToggle = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.75rem!important;
    padding-top: 0.75rem!important;
    padding-bottom: 0.75rem!important;
    padding-left:2rem;
    width:100%;
`
const DetailDiv = styled.div`
    display: inline-flex;
    align-items: center;
    font-weight:600 !important;   
    color:var(--bs-text-gray-900);
`
const DetailItemDiv = styled.div`
    font-weight: 600!important;
    margin-top: 1.25rem!important;
    width:100%; 
    color:var(--bs-text-gray-900);
`
const DetailValueDiv = styled.div`
    color: var(--bs-text-gray-600);
    margin-top:0.5rem;
`
const StudentName = styled.div`
  font-weight:600 !important;   
    color:var(--bs-text-gray-900);
    text-align: center;
`;

function StudentDetail() {
    const { isLoading, firstStudent } = useStudentDetails();
    if (isLoading) return <Spinner />;
    if (!firstStudent) return <Empty resourceName="student" />;

    const formattedDate = firstStudent.joiningDate ? new Date(firstStudent.joiningDate).toLocaleDateString() : '';
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
                    <img className="rounded-full mb-4" src="default-user.jpg" alt="" />
                    <StudentName className="text-hover-primary mb-3">
                        {`${firstStudent?.firstName}  ${firstStudent?.lastName}`}
                    </StudentName>
                </Avatar>
            </UserInfo>
            <DetailToggle>
                <DetailDiv>Details  <FaAngleDown /> </DetailDiv>
            </DetailToggle>
            <Separator></Separator>
            <div className="w-full">
                <div className="p-8 text-2xl">

                    <DetailItemDiv>Email </DetailItemDiv>
                    <DetailValueDiv>{firstStudent?.email}</DetailValueDiv>

                    <DetailItemDiv>Mobile Number </DetailItemDiv>
                    <DetailValueDiv>{firstStudent?.mobileNumber}</DetailValueDiv>

                    <DetailItemDiv>Address </DetailItemDiv>
                    <DetailValueDiv>{firstStudent?.address}</DetailValueDiv>

                    <DetailItemDiv>Gender </DetailItemDiv>
                    <DetailValueDiv>{GenderEnum(firstStudent?.gender)}</DetailValueDiv>

                    <DetailItemDiv>Joining Date </DetailItemDiv>
                    <DetailValueDiv>{formattedDate}</DetailValueDiv>

                    <DetailItemDiv>Machine Number</DetailItemDiv>
                    <DetailValueDiv>{firstStudent?.machinesNumber}</DetailValueDiv>

                    <DetailItemDiv>Batch Timmings</DetailItemDiv>
                    <DetailValueDiv>{firstStudent?.timings}</DetailValueDiv>

                </div>

            </div>


        </Card >
    );
}

export default StudentDetail
