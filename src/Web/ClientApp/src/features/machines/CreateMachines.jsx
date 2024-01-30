import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { useEffect } from "react";
import { useCreateMachines } from "./useCreateMachines"; 

function CreateMachines({ onCloseModal }) {

    const { register, handleSubmit, watch, reset, formState } = useForm();
    const { isCreating, createMachines } = useCreateMachines();

    const watchMysel = watch("languageId");
    const { errors } = formState;

    useEffect(() => {
        const filtraPavimento = () => {
            console.log('mysel value', watchMysel);
        }
        filtraPavimento()
    }, [watchMysel]);



    function onSubmit(data) {
         
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
                        disabled={isCreating}
                        {...register("machineNumber", {
                            required: "This field is required",
                        })}
                    />
                </FormRow>

                <FormRow label="Language" error={errors?.languageId?.message}>

                    <select
                        defaultValue="0"
                        disabled={isCreating}
                        {...register("languageId", { validate: (value) => value !== "0" || "This field is required" })}
                    >
                        <option value="0">---Select---</option>
                        <option value="1">English</option>
                        <option value="2">Tamil</option>
                    </select>

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
                    <Button
                        variation="secondary"
                        type="reset"
                        onClick={() => onCloseModal?.()}
                    >
                        Cancel
                    </Button>
                    <Button>
                        Create new cabin
                    </Button>
                </FormRow>

            </Form>
        </div>
    );
}

export default CreateMachines;