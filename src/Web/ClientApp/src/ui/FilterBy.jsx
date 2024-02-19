import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ filterField, options }) {
    const [searchParams, setSearchParams] = useSearchParams(); 
    const sortBy = searchParams.get(filterField) || "";

    function handleChange(e) {
        searchParams.set(filterField, e.target.value);
        if (searchParams.get("page")) searchParams.set("page", 1);
        setSearchParams(searchParams);
    }

    return (
        <Select
            options={options}
            type="white"
            value={sortBy}
            onChange={handleChange}
        />
    );
}

export default SortBy;
