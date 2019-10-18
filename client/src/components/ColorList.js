import React, { useState } from "react";
import axiosWithAuth from "../axios/axiosWithAuth";
import { withRouter } from "react-router-dom";

import AddColors from "./AddColors";


const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = props => {
  const { colors, updateColors } = props;
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  console.log("colors from colorlist", colors);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const addColor = e => {
    e.preventDefault();
    setAdding(true);
  };

  const saveEdit = color => e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${color.id}`, color)
      .then(res => {
        const editedColor = colors.filter(item => item.id !== color.id);
        updateColors([...editedColor, res.data]);
      })
      .catch(err => {
        console.log("error from edited color", err);
      });
  };

  const deleteColor = color => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${color.id}`)
      .then(res => {
        const deletedColor = colors.filter(item => item.id !== color.id);
        updateColors(deletedColor);
      })
      .catch(err => {
        console.log("error from delted color", err);
      });
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button onClick={saveEdit(colorToEdit)} type="submit">
              save
            </button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      {adding ? <AddColors  updateColors={updateColors} /> :
      <button onClick={addColor}> + add Color</button>
           }
      <div className="spacer" />
    </div>
  );
};

export default withRouter(ColorList);
