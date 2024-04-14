import { useSearchParams } from "react-router-dom";
import FilterBy from "../../ui/FilterBy";
import Input from "../../ui/Input";
import TableOperations from "../../ui/TableOperations";
import { useBatchTimmings } from "../batchtimmings/useBatchTimmings";
import { useMachines } from "../machines/useMachines";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
  width: 100%;
`;

const StyledLabel = styled.label`
    color:var(--color-grey-600);
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: 700;
`;


function StudentTableOperations() {
    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTermVal = searchParams.get("searchTerm") || "";
    const { isLoading, batchTimmings } = useBatchTimmings();
    const { isMachineLoading, machines } = useMachines();


    var machineOption = [{ value: 0, label: t("All") }];
    machines?.map((machine) => (
        machineOption.push({ value: machine?.id, label: machine?.machineNumber })
    ));

    var batchTimmingsOption = [{ value: 0, label: t("All") }];
    batchTimmings?.map((batchtime) => (
        batchTimmingsOption.push({ value: batchtime?.id, label: batchtime?.timings })
    ));

    function handleChange(e) {
        searchParams.set("searchTerm", e.target.value);
        if (searchParams.get("page")) searchParams.set("page", 1);
        if (!e.target.value) {
            searchParams.delete("searchTerm");
        }
        setSearchParams(searchParams);


    }


    return (
        <TableOperations>
            <StyledFormRow>
                <StyledLabel>{t("Search")}</StyledLabel>
                <Input
                    type="text"
                    id="searchTerm"
                    onChange={handleChange}
                    value={searchTermVal}
                    placeholder="Search students..."
                />
            </StyledFormRow>

            <StyledFormRow>
                <StyledLabel>{t("Gender")} </StyledLabel>
                <FilterBy
                    filterField="gender"
                    options={[
                        { value: "0", label: t("All") },
                        { value: "1", label: t("Male") },
                        { value: "2", label: t("Female") },
                        { value: "3", label: t("Others") },
                    ]}
                />
            </StyledFormRow>

            <StyledFormRow>
                <StyledLabel>{t("MachineNumber")} </StyledLabel>
                <FilterBy
                    filterField="machineNumber"
                    options={machineOption}
                />
            </StyledFormRow>

            <StyledFormRow>
                <StyledLabel>{t("BatchTimming")}</StyledLabel>
                <FilterBy
                    filterField="batchTiming"
                    options={batchTimmingsOption}
                />
            </StyledFormRow>


        </TableOperations>
    )
}

export default StudentTableOperations
