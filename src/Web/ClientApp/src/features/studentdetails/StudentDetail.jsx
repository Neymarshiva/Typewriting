import styled, { css } from "styled-components";
import Card from "../../ui/Card";
import Separator from "../../ui/Separator";
import { FaAngleDown } from "react-icons/fa";

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

function StudentDetail() {
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
                    <img className="rounded-full" src="default-user.jpg" alt="" />
                </Avatar>
            </UserInfo>
            <DetailToggle>
                <DetailDiv>Details  <FaAngleDown /> </DetailDiv>
            </DetailToggle>
            <Separator></Separator>
            <div className="w-full">
                <div className="pb-5 text-2xl">
                    <DetailItemDiv>Account ID</DetailItemDiv>
                    <DetailValueDiv>123455666</DetailValueDiv>

                    <DetailItemDiv>Email </DetailItemDiv>
                    <DetailValueDiv>Shiva@yopmail.com</DetailValueDiv>

                   
                </div>

            </div>


        </Card >
    );
}

export default StudentDetail
