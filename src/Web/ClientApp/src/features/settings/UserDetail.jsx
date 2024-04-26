import Card from "../../ui/Card"
import styled, { css } from 'styled-components';
import { MdOutlineVerified } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Tabs from "../../ui/Tabs";
import ProfileDetail from "./ProfileDetail";
import UpdateProfileDetail from "./UpdateProfileDetail";
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
    width: 100px;
    height: 100px;
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

const Title = styled.div`
    display:flex;
    margin-bottom: 0.5rem !important;
    align-items: flex-start !important;
    justify-content: space-between !important;
    justify-content: space-between !important;
`;



function UserDetail() {
    return (
        <>
            <Card
                flexdirection="column"
                justifycontent="start"
                alignitems="start"
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
                        <Title>
                            <div className="flex flex-col">
                                <div className="flex items-center mb-3">
                                    <span className="text-gray-900 text-hover-primary fs-2 fw-bold me-1 text-3xl">Neymar Shiva</span>
                                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-3xl font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"><MdOutlineVerified /></span>

                                </div>
                                <div className="flex flex-wrap font-medium text-2xl mb-4 pe-2">
                                    <span className="flex  items-center text-gray-500 text-hover-primary me-5 mb-2">

                                        <span className="mr-2"><FaUserCircle /> </span>
                                        Admin
                                    </span>
                                    <span className="flex  items-center text-gray-500 text-hover-primary me-5 mb-2">

                                        <span className="mr-2"><CiLocationOn /> </span>
                                        SF, Bay Area
                                    </span>
                                    <span className="flex  items-center text-gray-500 text-hover-primary me-5 mb-2">

                                        <span className="mr-2"><MdOutlineMarkEmailRead /> </span>
                                        Neymarshiva@yopmail.com
                                    </span>
                                </div>
                            </div>
                        </Title>
                    </UserInfo>
                </UserDetailDiv>
            </Card>
            <div>
                <Tabs id="overview">
                    <div className="w-1/2 mb-8">
                        <Tabs.TabMenu>
                            <Tabs.TabMenuItem id="overview">OverView</Tabs.TabMenuItem>
                            <Tabs.TabMenuItem id="settings">Settings</Tabs.TabMenuItem>
                            <Tabs.TabMenuItem id="security">Security</Tabs.TabMenuItem>
                        </Tabs.TabMenu>
                    </div>
                    <div>
                        <Tabs.TabPane id="overview">
                            <ProfileDetail />
                        </Tabs.TabPane>
                        <Tabs.TabPane id="settings">
                            <UpdateProfileDetail />
                        </Tabs.TabPane>
                        <Tabs.TabPane id="security">
                            treding tab
                        </Tabs.TabPane>
                    </div>


                </Tabs>
            </div>


        </>
    )
}

export default UserDetail
