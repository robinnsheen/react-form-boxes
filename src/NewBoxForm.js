import React, { useState } from "react";

function NewBoxForm({ addBox }) {
  const initialState = { width: 0, height: 0, backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);



  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width" >Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      ></input>

      <label htmlFor="height" >Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      ></input>

      <label htmlFor="backgroundColor" >Background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      ></input>

      <button>Add a new box!</button>
    </form>
  );


}

export default NewBoxForm;