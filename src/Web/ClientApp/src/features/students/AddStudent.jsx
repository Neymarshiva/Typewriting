import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateStudent from "./CreateStudent";



function AddStudent() {
    const {t}=useTranslation();
    return (
        <div>
            <Modal>
                <Modal.Open opens="student-form">
                    <Button>{t('AddNewStudent')}</Button>
                </Modal.Open>
                <Modal.Window name="student-form">
                    <CreateStudent />
                </Modal.Window>
            </Modal>
        </div>
    )
}


export default AddStudent;