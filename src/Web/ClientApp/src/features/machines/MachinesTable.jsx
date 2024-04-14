import Table from "../../ui/Table.jsx";
import { useMachines } from "./useMachines.js";
import MachineRow from "./MachineRow.jsx";
import Menus from "../../ui/Menus.jsx";
import Spinner from "../../ui/Spinner.jsx";
import { useTranslation } from "react-i18next";
function MachineTable() {
    const { isLoading, machines } = useMachines();
    const{t}=useTranslation();

    if (isLoading) return <Spinner />;

    return (
        <>
            <Menus>
                <Table columns="2fr 2fr 2fr">
                    <Table.Header>
                        <div>{t("MachineNumber")}</div>
                        <div>{t("Language")}</div>
                        <div></div>
                    </Table.Header>
                    <Table.Body
                        data={machines}
                        render={(machine) => <MachineRow machine={machine} key={machine.id} />}
                    />
                </Table >
            </Menus>
        </>

    )
}


export default MachineTable;