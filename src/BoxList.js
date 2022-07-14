import React, { useState } from "react";
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuid } from "uuid";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    let newBox = {...box, id: uuid()};
    setBoxes([...boxes, newBox]);
  }

  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      <div>
        {boxes.map(box =>
          <Box
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}/>)}
      </div>
    </div>
  )
}

export default BoxList;