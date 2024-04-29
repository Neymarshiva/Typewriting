import { useForm } from "react-hook-form";
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useTranslation } from "react-i18next";
import CountrySelector from "../../ui/CountrySelector";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import styled from "styled-components";
import { useEditUser } from "./useEditUser";
import { useState } from "react";
import * as Yup from 'yup';



const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
        props.type === "white"
            ? "var(--color-grey-100)"
            : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;


function UpdateProfileDetail({ onCloseModal }) {

    const { t } = useTranslation();
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;
    const { isEditing, editUser } = useEditUser();
    const [selectedCountry, setSelectedCountry] = useState('');
    const [customErrors, setErrors] = useState({});

    function onSubmit(data) { 
        const newData = { ...data, countryCulture: selectedCountry };

        // Perform validation using Yup schema or custom logic
        const schema = Yup.object().shape({
            countryCulture: Yup.string().required('Country is required'),
        });

         
        schema.validate(newData, { abortEarly: false })
            .then(() => {
                // Validation passed, proceed with form submission or other actions
                editUser({ newUserDetailsData: newData, userName: 'Neymarshiva@yopmail.com' });
                setErrors({});
            })
            .catch((validationErrors) => {
                // Validation failed, update error state with error messages
                const newErrors = {};
                validationErrors.inner.forEach((error) => {
                    newErrors[error.path] = error.message;
                });
                setErrors(newErrors);
            });

        
    }


    function handleChange() {

    }

    function handleCountryChange(selected) {
        if(selected){
            setErrors({});
        }
        setSelectedCountry(selected);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormRow label={t("UserName")} error={errors?.userName?.message}>
                    <Input
                        type="text"
                        id="userName"
                        {...register("userName", {
                            required: t("ThisFieldIsRequired"),
                        })}
                    />
                </FormRow>
                <FormRow label={t("CompanyName")} error={errors?.companyName?.message}>
                    <Input
                        type="text"
                        id="companyName"
                        {...register("companyName", {
                            required: t("ThisFieldIsRequired"),
                        })}
                    />
                </FormRow>

                <FormRow label={t("Country")} error={errors.country}>
                    <CountrySelector selected={selectedCountry} onChange={handleCountryChange} error={customErrors.country} />                     
                </FormRow>

                <FormRow label={t("State")} error={errors?.State?.message}>
                    <Input
                        type="text"
                        id="State"
                        {...register("State", {
                            required: t("ThisFieldIsRequired"),
                        })}
                    />
                </FormRow>

                <FormRow label={t("MobileNumber")} error={errors?.phoneNumber?.message}>
                    <Input
                        type="tel"
                        id="phoneNumber"
                        {...register("phoneNumber", {
                            required: t("ThisFieldIsRequired"),
                            pattern: {
                                value: /^[0-9]{10}$/, // Validating 10 digit number
                                message: t("InvalidMobileNumberFormat"),
                            },
                        })}
                    />
                </FormRow>

                <FormRow label={t("Email")} error={errors?.email?.message}>
                    <Input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: t("ThisFieldIsRequired"),
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: t("InvalidEmailFormat"),
                            },
                        })}
                    />
                </FormRow>

                <FormRow label={t("Role")} error={errors?.role?.message}>
                    <StyledSelect
                        defaultValue={"Admin"}
                        {...register("role", {
                            required: t("ThisFieldIsRequired"),
                        })}
                        onChange={handleChange}
                    >
                        <option value="">{t("Select")}</option>
                        <option value="Admin">{t("Admin")}</option>
                        <option value="Manager">{t("Manager")}</option>

                    </StyledSelect>
                </FormRow>

                <Button type="submit">{t("Submit")}</Button>
            </Form>

        </div>
    )
}

export default UpdateProfileDetail
