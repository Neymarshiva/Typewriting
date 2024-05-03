import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useForm, Controller } from "react-hook-form";
import Input from "../../ui/Input";
import RadioGroup from "../../ui/RadioGroup";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Textarea from "../../ui/Textarea";
import Button from "../../ui/Button";
import { useBatchTimmings } from "../batchtimmings/useBatchTimmings";
import { useMachines } from "../machines/useMachines";
import { useCreateStudents } from "./useCreateStudents";
import { useEditStudents } from "./useEditStudents";
import Datepicker from "react-tailwindcss-datepicker";
import CompoundDatePicker from "../../ui/DatePicker";
import { useTranslation } from "react-i18next";

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

function CreateStudent({ studentToEdit = {}, onCloseModal }) {
    const { t } = useTranslation();

    const { id: editId, ...editValues } = studentToEdit;
    const isEditSession = Boolean(editId);

    const { isLoading, batchTimmings } = useBatchTimmings();
    const { isMachineLoading, machines } = useMachines();

    const { isCreating, createStudents } = useCreateStudents();
    const { isEditing, editStudents } = useEditStudents();

    const isWorking = isCreating || isEditing;

    const { register, handleSubmit, watch, reset, formState, control } = useForm({
        defaultValues: isEditSession ? editValues : {},
    });

    const { errors } = formState;

    const [showCalendar, setShowCalendar] = useState(false);

    function onSubmit(data) {
        data.gender = parseInt(data.gender);
        data.joiningDate = data.joiningDate.startDate;

        if (isEditSession)
            editStudents(
                { newStudentData: data, id: editId },
                {
                    onSuccess: (data) => {
                        reset();
                        onCloseModal?.();
                    },
                }
            );
        else
            createStudents(data,
                {
                    onSuccess: (data) => {
                        reset();
                        onCloseModal?.();
                    },
                });
    }

    function onError() {}

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? "modal" : "regular"}>
                <FormRow label={t("FirstName")} error={errors?.firstName?.message}>
                    <Input
                        type="text"
                        id="firstName"
                        disabled={isWorking}
                        {...register("firstName", {
                            required: t("Required"),
                        })}
                    />
                </FormRow>
                <FormRow label={t("LastName")} error={errors?.lastName?.message}>
                    <Input
                        type="text"
                        id="lastName"
                        disabled={isWorking}
                        {...register("lastName", {
                            required: t("Required"),
                        })}
                    />
                </FormRow>
                <FormRow label={t("Email")} error={errors?.email?.message}>
                    <Input
                        type="text"
                        id="email"
                        disabled={isWorking}
                        {...register('email', {
                            required: t("Required"),
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: t("InvalidEmail"),
                            }
                        })}
                    />
                </FormRow>
                <FormRow label={t("MobileNumber")} error={errors?.mobileNumber?.message}>
                    <Input
                        type="number"
                        id="mobileNumber"
                        disabled={isWorking}
                        {...register('mobileNumber', {
                            required: t("MobileNumberRequired"),
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: t("InvalidMobileNumber"),
                            }
                        })}
                    />
                </FormRow>
                <FormRow label={t("Gender")} error={errors?.gender?.message}>
                    <StyledSelect
                        defaultValue="0"
                        disabled={isWorking}
                        {...register("gender", { validate: (value) => value !== "0" || t("GenderRequired") })}
                    >
                        <option value="0">{t("Select")}</option>
                        <option value="1">{t("Male")}</option>
                        <option value="2">{t("Female")}</option>
                        <option value="3">{t("Others")}</option>
                    </StyledSelect>
                </FormRow>
                <FormRow label={t("Address")} error={errors?.address?.message}>
                    <Textarea
                        type="number"
                        id="address"
                        defaultValue=""
                        disabled={isWorking}
                        {...register("address", {
                            required: t("Required"),
                        })}
                    />
                </FormRow>
                <FormRow label={t("MachineNumber")} error={errors?.machinesId?.message}>
                    <StyledSelect
                        defaultValue="0"
                        disabled={isWorking}
                        {...register("machinesId", { validate: (value) => value !== "0" || t("MachineNumberRequired") })}
                    >
                        {machines?.map((machine) => (
                            <option value={machine.id} key={machine.id}>
                                {machine.machineNumber}
                            </option>
                        ))}
                    </StyledSelect>
                </FormRow>
                <FormRow label={t("BatchTimming")} error={errors?.batchTimingsId?.message}>
                    <StyledSelect
                        defaultValue="0"
                        disabled={isWorking}
                        {...register("batchTimingsId", { validate: (value) => value !== "0" || t("BatchTimmingRequired") })}
                    >
                        {batchTimmings?.map((batchtime) => (
                            <option value={batchtime.id} key={batchtime.id}>
                                {batchtime.timings}
                            </option>
                        ))}
                    </StyledSelect>
                </FormRow>
                <FormRow label={t("JoiningDate")} error={errors?.joiningDate?.message}>
                    <CompoundDatePicker>
                        <Controller
                            name="joiningDate"
                            control={control}
                            rules={{ required: t("DateRequired") }}
                            render={({ field }) => (
                                <Datepicker
                                    value={field.value}
                                    onChange={(date) => field.onChange(date)}
                                    disabled={isWorking}
                                    useRange={false}
                                    asSingle={true}
                                    onFocus={() => setShowCalendar(true)}
                                    displayFormat={"DD/MM/YYYY"}
                                    readOnly={true}
                                    inputClassName="text-xl datepicker"
                                />
                            )}
                        />
                    </CompoundDatePicker>
                </FormRow>

                <FormRow>
                    <Button disabled={isWorking} variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
                        {t("Cancel")}
                    </Button>
                    <Button disabled={isWorking}>
                        {isEditSession ? t("EditStudent") : t("CreateStudent")}
                    </Button>
                </FormRow>
            </Form>
        </div >
    )
}

export default CreateStudent;
