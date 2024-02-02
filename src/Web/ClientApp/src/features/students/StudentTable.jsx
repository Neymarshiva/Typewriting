import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import StudentRow from "./StudentRow";
import { useStudents } from "./useStudents";





function StudentTable() {
    const { isLoading, students } = useStudents();
    if (isLoading) return "Loading";
    return (
        <>
            <Menus>
                <Table columns="2fr 2fr 3fr 2fr 3fr 3fr  3fr 1fr">
                    <Table.Header>
                        <div>Name</div>
                        <div>Email</div>
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
                </Table >
            </Menus>
        </>

    )

}


export default StudentTable;