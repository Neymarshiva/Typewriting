import { useTranslation } from "react-i18next";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import StudentRow from "./StudentRow";
import { useStudents } from "./useStudents";





function StudentTable() {
    const { isLoading, students } = useStudents();
    const { t } = useTranslation();
    if (isLoading) return <Spinner />;
    return (
        <>
            <Menus>
                <Table columns="5fr 4fr 2fr 4fr 3fr  3fr 1fr">
                    <Table.Header>
                        <div>{t("Student")}</div>
                        <div>{t("JoinedDate")}</div>
                        <div>{t("Gender")}</div>
                        <div>{t("Address")}</div>
                        <div>{t("MachineNo")}</div>
                        <div>{t("BatchTimming")} </div>
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