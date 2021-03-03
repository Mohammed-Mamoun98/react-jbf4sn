import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

export const Question = ({ question, onOptionClick = () => {} }) => {
  const { options, title, isSubmitted = false, id, selected } = question;
  console.log({ question, options, title });

  return (
    <div style={{ marginTop: "5rem" }}>
      <h3 className="text-center">{title}</h3>
      <div className="row">
        {options.map(({ title = "", id: optionId = 0 }) => (
          <div className="col-md-6">
            <Button
              disabled={isSubmitted && selected !== optionId}
              style={{ width: "100%", marginTop: "0.5rem" }}
              onClick={() => onOptionClick(id, optionId)}
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
