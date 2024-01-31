import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { useEffect } from "react";
import { useCreateMachines } from "./useCreateMachines";
import { useEditMachines } from "./useEditMachines";
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

function CreateMachines({ machineToEdit = {}, onCloseModal }) {


    const { id: editId, ...editValues } = machineToEdit;
    const isEditSession = Boolean(editId);
    const { register, handleSubmit, watch, reset, formState } = useForm({
        defaultValues: isEditSession ? editValues : {},
    });
    const { isCreating, createMachines } = useCreateMachines();
    const { isEditing, editMachines } = useEditMachines();

    const isWorking = isCreating || isEditing;

    const watchMysel = watch("languageId");
    const { errors } = formState;

    useEffect(() => {
        const filtraPavimento = () => {
            console.log('mysel value', watchMysel);
        }
        filtraPavimento()
    }, [watchMysel]);



    function onSubmit(data) {

        if (isEditSession)
            editMachines(
                { newMachineData: data, id: editId },
                {
                    onSuccess: (data) => {
                        reset();
                        onCloseModal?.();
                    },
                }
            );
        else
            createMachines(data,
                {
                    onSuccess: (data) => {
                        reset();
                        onCloseModal?.();
                    },
                });
    }
    function onError(errors) {
        console.log(errors);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? "modal" : "regular"}>
                <FormRow label="Machine Number" error={errors?.machineNumber?.message}>
                    <Input
                        type="number"
                        id="machineNumber"
                        disabled={isWorking}
                        {...register("machineNumber", {
                            required: "This field is required",
                        })}
                    />
                </FormRow>

                <FormRow label="Language" error={errors?.languageId?.message}>

                    <StyledSelect
                        defaultValue="0"
                        disabled={isWorking}
                        {...register("languageId", { validate: (value) => value !== "0" || "This field is required" })}
                    >
                        <option value="0">---Select---</option>
                        <option value="1">English</option>
                        <option value="2">Tamil</option>
                    </StyledSelect>

                    {/* <Select
                        defaultValue="0"
                        options={[
                            { value: 0, label: "--Select Languag--" },
                            { value: 1, label: "English" },
                            { value: 2, label: "Tamil" },
                        ]} 
                        {...register("languageId", { validate: (value) => value !== "0" })}
                    /> */}

                </FormRow>
                <FormRow>
                    {/* type is an HTML attribute! */}
                    <Button disabled={isWorking}
                        variation="secondary"
                        type="reset"
                        onClick={() => onCloseModal?.()}
                    >
                        Cancel
                    </Button>
                    <Button disabled={isWorking}>
                        {isEditSession ? "Edit machine" : "Create new machine"}
                    </Button>
                </FormRow>

            </Form>
        </div>
    );
}

export default CreateMachines;