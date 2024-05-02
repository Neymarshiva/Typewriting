import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'; // Import eye icons
import { useTranslation } from 'react-i18next';

const Security = () => {
    const { register, control, handleSubmit, formState, watch } = useForm();
    const { t } = useTranslation();
    const { errors } = formState;

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const oldPassword = watch('oldPassword');
    const newPassword = watch('newPassword');
    const confirmPassword = watch('confirmPassword');

    const onSubmit = (data) => {
        // Submit logic here
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Old Password" error={errors?.oldPassword?.message}>
                <div className="relative">
                    <Input
                    className='w-full'
                        type={showOldPassword ? "text" : "password"}
                        id="oldPassword"
                        {...register("oldPassword", {
                            required: t("Old password is required"),
                        })}
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none exceptcss"
                        onClick={() => setShowOldPassword(!showOldPassword)}
                    >
                        {showOldPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                    </button>
                </div>
            </FormRow>
            <FormRow label="New Password" error={errors?.newPassword?.message}>
                <div className="relative">
                    <Input
                        type={showNewPassword ? "text" : "password"}
                        className='w-full'
                        id="newPassword"
                        {...register("newPassword", {
                            required: t("New password is required"),
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: t("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
                            },
                        })}
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none exceptcss"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                        {showNewPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                    </button>
                </div>
            </FormRow>

            <FormRow label="Confirm Password" error={errors?.confirmPassword?.message}>
                <div className="relative">
                    <Input
                        type={showConfirmPassword ? "text" : "password"}
                        className='w-full'
                        id="confirmPassword"
                        {...register("confirmPassword", {
                            required: t("Confirm password is required"),
                            validate: (value) => value === newPassword || t("Passwords do not match"),
                        })}
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none exceptcss"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                    </button>
                </div>
            </FormRow>
            <FormRow>
                <Button type="submit">Update Password</Button>
            </FormRow>
        </Form>
    );
};

export default Security;
