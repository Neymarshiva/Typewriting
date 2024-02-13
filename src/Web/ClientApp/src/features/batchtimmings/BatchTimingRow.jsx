import Table from "../../ui/Table";
import styled from "styled-components";




const BatchTimingId = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Timings = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;



function BatchTimingRow({ batchTiming }) {

    const {
        id,
        timings,
    } = batchTiming;

    return (
        <Table.Row>
            <BatchTimingId>
                {id}
            </BatchTimingId>
            <Timings>
                {timings}
            </Timings> 
        </Table.Row>
    )

}

export default BatchTimingRow;