import React, { useState } from 'react';
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateMachines from '../../features/machines/CreateMachines';
import { useTranslation } from 'react-i18next';

const AddMachine = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const{t}=useTranslation();
    const addNewMachinePopupFn = () => {
        setIsOpenModal(!isOpenModal);
    };

    return (
        <div>
            <Modal>
                <Modal.Open opens="machine-form">
                    <Button onClick={addNewMachinePopupFn}>{t("AddNewMachine")}</Button>
                </Modal.Open>
                <Modal.Window name="machine-form">
                    <CreateMachines />
                </Modal.Window>
            </Modal>
        </div>
    );
};

export default AddMachine;
