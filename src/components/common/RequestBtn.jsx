import React, { useState } from "react";
import RequestForm from "./RequestForm";
import Button from "./Button";

const RequestBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button title={"Request Quotation"} onClick={() => setOpen(true)} color={"blue"} />
      <RequestForm open={open} setOpen={setOpen} />
    </>
  );
};

export default RequestBtn;
