import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Form from '../../ui/Form';

const Security = () => {
    const { register, control, handleSubmit, errors, watch } = useForm();

    const newPassword = watch('newPassword'); // Get the value of the newPassword field

    const onSubmit = (data) => {
        // Submit logic here
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Old Password" error={errors?.oldPassword?.message}>
                <Input
                    type="password"
                    id="oldPassword"
                    {...register("oldPassword", {
                        required: "Old password is required",
                    })}
                />
            </FormRow>
            <FormRow label="New Password" error={errors?.newPassword?.message}>
                <Input
                    type="password"
                    id="newPassword"
                    {...register("newPassword", {
                        required: "New password is required",
                    })}
                />
            </FormRow>
            <FormRow label="Confirm Password" error={errors?.confirmPassword?.message}>
                <Input
                    type="password"
                    id="confirmPassword"
                    {...register("confirmPassword", {
                        required: "Confirm password is required",
                        validate: (value) => value === newPassword || "Passwords do not match",
                    })}
                />
            </FormRow>
            <FormRow>
                <Button type="submit">Update Password</Button>
            </FormRow>

        </Form>
    );
};

export default Security;