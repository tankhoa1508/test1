import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    chemicals: [
        { id: 1, name: "Hydrochloric Acid",formula: "HCl", checked: false },
        { id: 2, name: "Sodium Chloride",formula: "NaCl", checked: true },
        { id: 3, name: "Sulfuric Acid",formula: "H2SO4", checked: true },
        { id: 4, name: "Ammonia",formula: "NH3", checked: true },
        { id: 5, name: "Ethanol",formula: "C2H5OH", checked: true }
    ],
    checkedAll: false
}
const chemicalSlice = createSlice({
    name: "chemicals",
    initialState,
    reducers: {
        addChemical(state, action){
            let idMax = state.chemicals.reduce((max_value, chemical) => Math.max(max_value, chemical.id), -Infinity)
            state.chemicals = [...state.chemicals, {id: state.chemicals.length===0?1:idMax+1, name: action.payload, checked:false }]
        },
        deleteChemical(state, action){
            state.chemical = state.chemical.filter(che=>che.id!==action.payload)
        }
    }
})

export const {addChemical, deleteChemical} = chemicalSlice.actions;
export default chemicalSlice.reducer