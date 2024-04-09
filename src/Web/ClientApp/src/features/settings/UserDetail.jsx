import Card from "../../ui/Card"
import styled, { css } from 'styled-components';

const flexstyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexdirection || "row"};
  align-items: ${(props) => props.alignitems || "start"};
  justify-content: ${(props) => props.justifycontent || "start"};
`;

const UserDetailDiv = styled.div`
display: flex;
flex-wrap: nowrap;
flex:1;
`;

const UserProfile = styled.div`
margin-bottom: 1rem !important;
margin-right: 1.75rem !important;
`;

const UserInfo = styled.div`
flex-grow: 1 !important;
`;

const UserPic = styled.div`
    display: inline-block;
    border-radius: 0.475rem;
    flex-shrink:0;
    position: relative !important;

    & img{
    width: 160px;
    height: 160px;
    max-width: none;
    }
`;

const ActiveSymbol = styled.div`
    border-radius: 50% !important;
    border-color: #ffffff !important;
    background-color: #17C653 !important;
    margin-bottom: 1.5rem !important;
    height: 20px !important;
    width: 20px !important;
    border-width: 4px !important;
    transform: translate(-50%, -50%) !important;
    left: 100% !important;
    bottom: 0 !important;
    position: absolute !important;
`;

function UserDetail() {
    return (
        <Card
            flexdirection="row"
            justifycontent="start"
            alignitems="center"
            background="var(--bs-card-background-color);"
            width="100%"
            height="100%"
            border="1px solid var(--bs-card-border-color)"
            borderradius=".5rem"
            color="var(--bs-body-color)"
            padding="1rem"
            flexstyles={flexstyles}
        >
            <UserDetailDiv>
                <UserProfile>
                    <UserPic>
                        <img src="user-image.jpg" alt=""></img>
                        <ActiveSymbol></ActiveSymbol>
                    </UserPic>
                </UserProfile>
                <UserInfo>

                </UserInfo>
            </UserDetailDiv>

        </Card>
    )
}

export default UserDetail
