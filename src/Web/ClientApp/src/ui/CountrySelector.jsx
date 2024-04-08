import React, { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import styled from "styled-components";


const StyledCountryDiv = styled.div`
  width: 15%; 

  .menu-flags #rfs-btn span {
    overflow: visible !important;
  }

  & ul {
    margin-top:0.5rem !important;
    font-size: 16px;
    width: 240px;
    padding: 0;
    margin: 0;
    right: 0;
    left: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    scrollbar-width: thin;
    max-height: 450px;
    border-radius: 1rem !important;
    border: 1px solid rgba(0, 0, 0, 0.15);

    & li {
      font-size: 16px;
      padding: 0.4rem 1.5rem;
      border-bottom: 1px dashed #eee;
    }
  }

   
`;

function CountrySelector() {
    const [selected, setSelected] = useState("");




    return (
        <StyledCountryDiv>
            <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                searchable
                searchPlaceholder="Search countries"
                className="menu-flags"
            />
        </StyledCountryDiv>

    );
}

export default CountrySelector