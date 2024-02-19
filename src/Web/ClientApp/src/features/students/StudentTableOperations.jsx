import { useSearchParams } from "react-router-dom";
import FilterBy from "../../ui/FilterBy";
import Input from "../../ui/Input";
import TableOperations from "../../ui/TableOperations";
import { useBatchTimmings } from "../batchtimmings/useBatchTimmings";
import { useMachines } from "../machines/useMachines";


function StudentTableOperations() {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTermVal = searchParams.get("searchTerm") || "";
    const { isLoading, batchTimmings } = useBatchTimmings();
    const { isMachineLoading, machines } = useMachines();


    var machineOption = [{ value: 0, label: "All" }];
    machines?.map((machine) => (
        machineOption.push({ value: machine?.id, label: machine?.machineNumber })
    ));

    var batchTimmingsOption = [{ value: 0, label: "All" }];
    batchTimmings?.map((batchtime) => (
        batchTimmingsOption.push({ value: batchtime?.id, label: batchtime?.timings })
    ));

    function handleChange(e) {
        debugger;
        searchParams.set("searchTerm", e.target.value); 
        if (searchParams.get("page")) searchParams.set("page", 1);
        if (!e.target.value) {
            searchParams.delete("searchTerm");
        }
        setSearchParams(searchParams);


    }

    return (
        <TableOperations>

            <Input
                type="text"
                id="searcTerm"
                onChange={handleChange}
                value={searchTermVal}
            />

            <FilterBy
                filterField="gender"
                options={[
                    { value: "0", label: "All" },
                    { value: "1", label: "Male" },
                    { value: "2", label: "Female" },
                    { value: "3", label: "Others" },
                ]}
            />
            <FilterBy
                filterField="machineNumber"
                options={machineOption}
            />
            <FilterBy
                filterField="batchTiming"
                options={batchTimmingsOption}
            />
        </TableOperations>
    )
}

export default StudentTableOperations
