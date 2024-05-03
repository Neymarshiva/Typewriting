import Input from "./Input";


function RadioGroup({ name, items, value, onChange }) {   
    return (
        <>

            {items.map((item) => (
                <div key={item.value}>
                    <Input
                        name={name}
                        type="radio"
                        value={item.value}
                        checked={value === item.value}
                        onChange={e => onChange(e.target.value)}
                    />
                    <label htmlFor={name + item.value}>{item.label}</label>
                </div>
            ))} 
            
        </>
    )
}


export default RadioGroup;