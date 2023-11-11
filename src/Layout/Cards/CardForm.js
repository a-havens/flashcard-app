import React from "react";

function CardForm({ formData, handleChange, handleSubmit }) {
  const inputProps = {
    className: "form-control",
    style: { width: "100%" },
    rows: "4",
    required: true,
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="front">
        Front
        <br />
        <textarea
          id="front"
          name="front"
          value={formData.front}
          onChange={handleChange}
          placeholder="Enter the front of the card"
          {...inputProps}
        />
      </label>
      <br />
      <label htmlFor="back">
        Back
        <br />
        <textarea
          id="back"
          name="back"
          value={formData.back}
          onChange={handleChange}
          placeholder="Enter the back of the card"
          {...inputProps}
        />
      </label>
    </form>
  );
}

export default CardForm;