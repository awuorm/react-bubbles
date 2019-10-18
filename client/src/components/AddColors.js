import React,{useState} from "react";
import uuid from 'uuid';
import axiosWithAuth from "../axios/axiosWithAuth";

const AddColors = (props) => {
    const {updateColors} = props;
    const initialColor = {
        id: uuid(),
        color: "",
        code:  ""
    }
  const[addedColor,setAddedColor] = useState(initialColor);
  const valueChange = e => {
    setAddedColor({ ...addedColor, [e.target.name]: e.target.value });
  };
  const submitUserDetails = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/colors",{
        id: addedColor.id,
        color: addedColor.color,
        code: {hex: addedColor.code}
    })
      .then(res => {
       console.log("response from add color", res)
       updateColors(res.data);
    
      })
      .catch(err => {
        console.log("error from server", err);
      });
  };

  return (
    <>
      <form>
        <label>Color Name</label>
        <input onChange={valueChange} name="color" type="text"/>
        <label>Color Hex Code</label>
        <input onChange={valueChange} name="code" type="text"/>
        <button onClick={submitUserDetails}>Submit</button>
      </form>
    </>
  );
};

export default AddColors;
