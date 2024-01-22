import Button from "../../ui/Button";

function AddMachine(props) {

    return (
        <div>
            <input  onClick={clickButtonFn()} type="button" value="Add shiva machines" />
            {/* <Button onClick={clickButtonFn()}>Add test machines</Button> */}
        </div>
    );
}


function clickButtonFn() {
    console.log("button")
};


export default AddMachine;