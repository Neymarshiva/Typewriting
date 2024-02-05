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


function CreateStudent({ onCloseModal }) {

    const { isLoading, batchTimmings } = useBatchTimmings();
    const { isMachineLoading, machines } = useMachines();

    const { isCreating, createStudents } = useCreateStudents();

    const { register, handleSubmit, watch, reset, formState } = useForm({
        // defaultValues: isEditSession ? editValues : {},
    });


    const { errors } = formState;

    function onSubmit(data) {
        debugger;
       
        data.gender = parseInt(data.gender);
        

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
                        {...register("firstName", {
                            required: "This field is required",
                        })}
                    />
                </FormRow>
                <FormRow label="Last Name" error={errors?.lastName?.message}>
                    <Input
                        type="text"
                        id="lastName"
                        {...register("lastName", {
                            required: "This field is required",
                        })}
                    />
                </FormRow>
                <FormRow label="Email" error={errors?.email?.message}>
                    <Input
                        type="text"
                        id="email"
                        {...register("email", {
                            required: "This field is required",
                        })}
                    />
                </FormRow>
                <FormRow label="Mobile Number" error={errors?.mobileNumber?.message}>
                    <Input
                        type="number"
                        id="mobileNumber"
                        {...register("mobileNumber", {
                            required: "This field is required",
                        })}
                    />
                </FormRow>
                <FormRow label="Gender" error={errors?.gender?.message}>
                    <StyledSelect
                        defaultValue="0"
                        {...register("gender", { validate: (value) => value !== "0" || "This field is required" })}
                    >
                        <option value="0">---Select---</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </StyledSelect>
                </FormRow>
                <FormRow label="Address" error={errors?.address?.message}>
                    <Textarea
                        type="number"
                        id="address"
                        defaultValue=""
                        {...register("address", {
                            required: "This field is required",
                        })}
                    />
                </FormRow>
                <FormRow label="Machine Number" error={errors?.machinesId?.message}>
                    <StyledSelect
                        defaultValue="0"
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
                    <Button
                        variation="secondary"
                        type="reset"
                        onClick={() => onCloseModal?.()}
                    >
                        Cancel
                    </Button>
                    <Button>
                        Create Student
                    </Button>
                </FormRow>
            </Form>
        </div>


    )
}

export default CreateStudent;