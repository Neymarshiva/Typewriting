import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateStudent from "./CreateStudent";



function AddStudent() {
    return (
        <div>
            <Modal>
                <Modal.Open opens="student-form">
                    <Button>Add new student</Button>
                </Modal.Open>
                <Modal.Window name="student-form">
                    <CreateStudent />
                </Modal.Window>
            </Modal>
        </div>
    )
}


export default AddStudent;