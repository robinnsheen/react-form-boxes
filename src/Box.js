function Box({width, height, backgroundColor,id,removeBox}) {
  const styles = {width:width+"px", height:height+"px", backgroundColor};


  return  (
  <div>
    <div  style={styles}></div>
    <button id={id} onClick={removeBox}>Delete box</button>
  </div>
    )
}

export default Box;
