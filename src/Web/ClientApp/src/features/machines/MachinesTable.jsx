import Table from "../../ui/Table.jsx";
import { useMachines } from "./useMachines.js";
import MachineRow from "./MachineRow.jsx";
import Menus from "../../ui/Menus.jsx";
import Spinner from "../../ui/Spinner.jsx";
function MachineTable() {
    const { isLoading, machines } = useMachines();
    if (isLoading) return <Spinner />;

    return (
        <>
            <Menus>
                <Table columns="2fr 2fr 2fr">
                    <Table.Header>
                        <div>Machine Number</div>
                        <div>Language</div>
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