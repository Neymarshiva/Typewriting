import React from 'react';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import BatchTimingTable from '../features/batchtimmings/BatchTimingTable';

const Timings = () => {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Batch Timmings</Heading>
            </Row>

            <Row>
                <BatchTimingTable />
            </Row>
        </>
    );
};

export default Timings;
