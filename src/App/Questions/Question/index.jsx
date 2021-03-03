import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

export const Question = ({ question }) => {
  const { options, title } = question;
  console.log({ question, options, title });

  return (
    <div style={{ marginTop: "5rem" }}>
      <h3 className="text-center">{title}</h3>
      <div className="row">
        {options.map(({ title = "", id = 0 }) => (
          <div className="col-md-6 gap-md" style={{ gap: "1rem" }}>
            <Button
              style={{ width: "100%", marginTop: "0.5rem" }}
              onClick={() => onOptionClick(id)}
              variant="contained"
            >
              {title}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
