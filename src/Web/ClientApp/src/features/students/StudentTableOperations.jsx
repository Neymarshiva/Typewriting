import Filter from "../../ui/Filter"
import SortBy from "../../ui/FilterBy"
import TableOperations from "../../ui/TableOperations"


function StudentTableOperations() {
    return (
        <TableOperations>
            {/* <Filter
                filterField="status"
                options={[
                    { value: "all", label: "All" },
                    { value: "checked-out", label: "Checked out" },
                    { value: "checked-in", label: "Checked in" },
                    { value: "unconfirmed", label: "Unconfirmed" },
                ]}
            /> */}
            <SortBy
                filterField="gender"
                options={[
                    { value: "0", label: "All" },
                    { value: "1", label: "Male" },
                    { value: "2", label: "Female" },
                    { value: "3", label: "Others" },
                ]}
            />
        </TableOperations>
    )
}

export default StudentTableOperations
