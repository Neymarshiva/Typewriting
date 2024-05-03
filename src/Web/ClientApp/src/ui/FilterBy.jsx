import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterBy({ filterField, options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const ddValue = searchParams.get(filterField) || "";

    function handleChange(e) {
        searchParams.set(filterField, e.target.value);
        if (searchParams.get("page")) searchParams.set("page", 1);

        if (e.target.value <= 0 || !e.target.value) searchParams.delete(filterField);
        setSearchParams(searchParams);
    }

    return (
        <Select
            options={options}
            type="white"
            value={ddValue}
            onChange={handleChange}
        />
    );
}

export default FilterBy;
