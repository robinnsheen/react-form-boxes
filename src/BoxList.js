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
  function removeBox(evt){
    setBoxes(boxes=>
      boxes.filter((box)=> box.id!==evt.target.id));
  }

  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      <div>
        {boxes.map(box =>
          <Box
            key = {box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            removeBox={removeBox}/>)}

      </div>
    </div>
  )
}

export default BoxList;
