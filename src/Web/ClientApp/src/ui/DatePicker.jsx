import styled from "styled-components";

const CompoundDatePicker = styled.div`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  & input {
    background-color: var(--color-grey-0);
    color: var(--color-grey-700);
  }

  & .bg-white{
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  font-size: 1.2rem;
  }

  & input:focus, button:focus, textarea:focus, select:focus {
    outline: none;
    outline-offset: 0;
}
`;


export default CompoundDatePicker;