import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Card from "../../ui/Card"
import styled, { css } from 'styled-components';

const flexstyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexdirection || "row"};
  align-items: ${(props) => props.alignitems || "start"};
  justify-content: ${(props) => props.justifycontent || "start"};
`;

const Profile = styled.div` 
`

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    min-height: 50px;
    padding: 0 2.25rem;     
    background-color: transparent;
    border-bottom: 1px solid var(  --bs-card-border-color);
    flex:1;
    cursor: pointer !important; 
    width:100%;
`

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 2.275rem;
    color: var(--bs-text-gray-900); 
`
const CardBody = styled.div`
    padding: 2.25rem !important;
    flex: 1 1 auto;
    width: 100%;
`

const CardRow = styled.div`
    margin-bottom: 1.75rem !important;
    display:grid; 
    grid-template-columns: repeat(2, minmax(0, 1fr));
`

function ProfileDetail({ user }) {
    const { t } = useTranslation();
    return (
        <Profile>
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
                <CardHeader>
                    <CardTitle>
                        {t("Profile Detail")}
                    </CardTitle>
                    <Button size="small" className="self-center">
                        {t("Edit")} {t("Profile")}
                    </Button>
                </CardHeader>
                <CardBody>
                    <CardRow>
                        <label className="font-semibold text-gray-400">{t("Full Name")}</label>
                        <div className="">
                            <span className="font-bold text-xl text-gray-800">{user?.userName}</span>
                        </div>
                    </CardRow>
                    <CardRow>
                        <label className="font-semibold text-gray-400">{t("Company")}</label>
                        <div className="">
                            <span className="font-bold text-xl text-gray-800">{user?.companyName}</span>
                        </div>
                    </CardRow>
                    <CardRow>
                        <label className="font-semibold text-gray-400">{t("Contact Phone")}</label>
                        <div className="">
                            <span className="font-bold text-xl text-gray-800 mr-4">{user?.phoneNumber}
                            </span>
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{t("Verified")}</span>
                        </div>
                    </CardRow>
                    <CardRow>
                        <label className="font-semibold text-gray-400">{t("Country")}</label>
                        <div className="">
                            <span className="font-bold text-xl text-gray-800">{user?.countryCulture}</span>
                        </div>
                    </CardRow>
                </CardBody>
            </Card>
        </Profile>

    )
}

export default ProfileDetail