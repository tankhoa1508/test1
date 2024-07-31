import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteChemical, addChemical } from "../redux/chemicalSlice";
import Add from "./AddChemical";
import {Container} from 'reactstrap'

export default function ToDoList() {
  const [flag, setFlag] = useState();
  const chemicals = useSelector((state) => state.chemicals.chemicals);
  const dispatch = useDispatch();
  const handle_add = (name) => {
    dispatch(addChemical(name));
  };
  const filterChemical = (list, flag) => {
    if (flag === "checked") {
      return list.filter((che) => che.checked);
    } else if (flag === "nochecked") {
      return list.filter((che) => !che.checked);
    } else {
      return list;
    }
  };
    return (
    <div>
        <Container>
      <Add handle_add={handle_add} />
      {filterChemical(chemicals, flag).map((che, index) => (
        <div key={index}>
          <p>{che.name}</p>
          <button onClick={() => dispatch(deleteChemical(che.id))}>X</button>
        </div>
      ))}
      <button onClick={() => setFlag("checked")}>checked</button>
      <button onClick={() => setFlag("nochecked")}>nochecked</button>
      <button onClick={() => setFlag("clear")}>clear</button>
      </Container>
    </div>
  );
}
