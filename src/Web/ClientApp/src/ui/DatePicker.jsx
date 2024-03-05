import React, { forwardRef } from 'react';
import { createContext, useContext, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatepickerContext = createContext();


function CompoundDatePicker({ children }) {
  const [openId, setOpenId] = useState("");

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <DatepickerContext.Provider
      value={{ openId, close, open }}
    >
      {children}
    </DatepickerContext.Provider>
  );
}
 

export default CompoundDatePicker;