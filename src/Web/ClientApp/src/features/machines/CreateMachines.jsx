import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

function CreateMachines() {

    function handleChange(e) {

    }

    return (
        <div>
            <Form>
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

            </Form>
        </div>
    );
}

export default CreateMachines;