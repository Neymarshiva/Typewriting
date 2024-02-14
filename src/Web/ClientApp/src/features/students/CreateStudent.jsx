import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import RadioGroup from "../../ui/RadioGroup";
import { useState } from "react";
import styled from "styled-components";
import Textarea from "../../ui/Textarea";
import Button from "../../ui/Button";
import { useBatchTimmings } from "../batchtimmings/useBatchTimmings";
import { useMachines } from "../machines/useMachines";
import { useCreateStudents } from "./useCreateStudents";
import { useEditStudents } from "./useEditStudents";

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

    const { id: editId, ...editValues } = studentToEdit;
    const isEditSession = Boolean(editId);

    const { isLoading, batchTimmings } = useBatchTimmings();
    const { isMachineLoading, machines } = useMachines();

    const { isCreating, createStudents } = useCreateStudents();
    const { isEditing, editStudents } = useEditStudents();

    const isWorking = isCreating || isEditing;

    const { register, handleSubmit, watch, reset, formState } = useForm({
        defaultValues: isEditSession ? editValues : {},
    });


    const { errors } = formState;

    function onSubmit(data) {
        data.gender = parseInt(data.gender);

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

    function onError() {

    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? "modal" : "regular"}>
                <FormRow label="First Name" error={errors?.firstName?.message}>
                    <Input
                        type="text"
                        id="firstName"
                        disabled={isWorking}
                        {...register("firstName", {
                            required: "This field is required",
                        })}
                    />
                </FormRow>
                <FormRow label="Last Name" error={errors?.lastName?.message}>
                    <Input
                        type="text"
                        id="lastName"
                        disabled={isWorking}
                        {...register("lastName", {
                            required: "This field is required",
                        })}
                    />
                </FormRow>
                <FormRow label="Email" error={errors?.email?.message}>
                    <Input
                        type="text"
                        id="email"
                        disabled={isWorking}
                        {...register('email', {
                            required: 'This field is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                </FormRow>
                <FormRow label="Mobile Number" error={errors?.mobileNumber?.message}>
                    <Input
                        type="number"
                        id="mobileNumber"
                        disabled={isWorking}
                        {...register('mobileNumber', {
                            required: 'Mobile number is required',
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: 'Mobile number must be 10 digits'
                            }
                          })}
                    />
                </FormRow>
                <FormRow label="Gender" error={errors?.gender?.message}>
                    <StyledSelect
                        defaultValue="0"
                        disabled={isWorking}
                        {...register("gender", { validate: (value) => value !== "0" || "This field is required" })}
                    >
                        <option value="0">---Select---</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Others</option>
                    </StyledSelect>
                </FormRow>
                <FormRow label="Address" error={errors?.address?.message}>
                    <Textarea
                        type="number"
                        id="address"
                        defaultValue=""
                        disabled={isWorking}
                        {...register("address", {
                            required: "This field is required",
                        })}
                    />
                </FormRow>
                <FormRow label="Machine Number" error={errors?.machinesId?.message}>
                    <StyledSelect
                        defaultValue="0"
                        disabled={isWorking}
                        {...register("machinesId", { validate: (value) => value !== "0" || "This field is required" })}
                    >
                        {machines?.map((machine) => (
                            <option value={machine.id} key={machine.id}>
                                {machine.machineNumber}
                            </option>
                        ))}
                    </StyledSelect>
                </FormRow>
                <FormRow label="Batch Timming" error={errors?.batchTimingsId?.message}>
                    <StyledSelect
                        defaultValue="0"
                        disabled={isWorking}
                        {...register("batchTimingsId", { validate: (value) => value !== "0" || "This field is required" })}
                    >
                        {batchTimmings?.map((batchtime) => (
                            <option value={batchtime.id} key={batchtime.id}>
                                {batchtime.timings}
                            </option>
                        ))}
                    </StyledSelect>
                </FormRow>
                <FormRow>
                    <Button disabled={isWorking}
                        variation="secondary"
                        type="reset"
                        onClick={() => onCloseModal?.()}
                    >
                        Cancel
                    </Button>
                    <Button disabled={isWorking}>
                        {isEditSession ? "Edit student" : "Create student"}
                    </Button>
                </FormRow>
            </Form>
        </div>


    )
}

export default CreateStudent;