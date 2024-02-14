import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import BatchTimingRow from "./BatchTimingRow";
import { useBatchTimmings } from "./useBatchTimmings";



function BatchTimingTable() {
    const { isLoading, batchTimmings } = useBatchTimmings();
    if (isLoading) return <Spinner />;

    return (
        <>
            <Menus>
                <Table columns="2fr 2fr">
                    <Table.Header>
                        <div>Id</div>
                        <div>Timings</div> 
                    </Table.Header>
                    <Table.Body
                        data={batchTimmings}
                        render={(batchTiming) => <BatchTimingRow batchTiming={batchTiming} key={batchTiming.id} />}
                    />
                </Table >
            </Menus>
        </>

    )
}


export default BatchTimingTable;