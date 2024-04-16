import React, { useState } from 'react';
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import CreateMachines from '../features/machines/CreateMachines';
import UserDetail from '../features/settings/UserDetail';

const Settings = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        console.log("setShowForm trigger");
        setShowForm(prevState => !prevState);
    };

    return (
        <>
            {showForm ? <SignupForm /> : <UserDetail />}
            <button onClick={toggleForm}>Toggle Form</button>
        </>
    );
};

export default Settings;
