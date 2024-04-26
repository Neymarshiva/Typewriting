import { useForm } from "react-hook-form";
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useTranslation } from "react-i18next";
import CountrySelector from "../../ui/CountrySelector";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import styled from "styled-components";


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

    function onSubmit(data) {

    }

    function handleChange() {

    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormRow label={t("UserName")} error={errors?.userName?.message}>
                    <Input
                        type="number"
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

                <FormRow label={t("Country")} error={errors?.country?.message}>
                    <CountrySelector />
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

                <FormRow label={t("MobileNumber")} error={errors?.mobileNumber?.message}>
                    <Input
                        type="tel"
                        id="mobileNumber"
                        {...register("mobileNumber", {
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
