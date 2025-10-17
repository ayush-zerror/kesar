import React, { useState } from "react";
import RequestForm from "./RequestForm";

const RequestBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="request-btn" onClick={() => setOpen(true)}>
        <p>Request Quotation</p>
      </div>
      <RequestForm open={open} setOpen={setOpen} />
    </>
  );
};

export default RequestBtn;
