import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import StudentRow from "./StudentRow";
import { useStudents } from "./useStudents";





function StudentTable() {
    const { isLoading, students } = useStudents();
    if (isLoading) return <Spinner />;
    return (
        <>
            <Menus>
                <Table columns="5fr 4fr 2fr 4fr 3fr  3fr 1fr">
                    <Table.Header>
                        <div>Student</div> 
                        <div>Mobile Number</div> 
                        <div>Gender</div>
                        <div>Address</div>
                        <div>Machine Number</div>
                        <div>Batch Timing </div>
                        <div></div>
                    </Table.Header>
                    <Table.Body
                        data={students.items}
                        render={(student) => <StudentRow student={student} key={student.id} />}
                    />
                    <Table.Footer>
                        <Pagination count={students?.totalCount} />
                    </Table.Footer>
                </Table >
            </Menus>
        </>

    )

}


export default StudentTable;