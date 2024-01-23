import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

function CreateMachines({ onCloseModal }) {

    function handleChange(e) {

    }

    return (
        <div>
            <Form type={onCloseModal ? "modal" : "regular"}>
                <FormRow label="Machine Number">
                    <Input
                        type="number"
                        id="machineNumber"
                    />
                </FormRow>
                <FormRow label="Language">
                    <Select
                        options={[
                            { value: "1", label: "English" },
                            { value: "2", label: "Tamil" },
                        ]}
                        type="white"
                        value=""
                        onChange={handleChange}
                    />
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