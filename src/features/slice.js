import { createSlice } from "@reduxjs/toolkit";

// Slice

const initialState = {
	employees: [
		{
			city: "San Francisco",
			dateBirth: "10/02/1965",
			department: "Engineering",
			firstName: "Bruce",
			lastName: "Willis",
			startDate: "10/02/1965",
			state: "CO",
			street: "Square 1",
			zipCode: "102302",
		},
		{
			city: "Miami",
			dateBirth: "21/11/1972",
			department: "Human Resources",
			firstName: "Jason",
			lastName: "Statham",
			startDate: "21/11/1972",
			state: "FL",
			street: "Block 2",
			zipCode: "2310",
		},
		{
			city: "New York",
			dateBirth: "06/01/1968",
			department: "Engineering",
			firstName: "Tom",
			lastName: "Cruise",
			startDate: "06/01/1968",
			state: "GA",
			street: "Block 2",
			zipCode: "53002",
		},
	],
};

const Slice = createSlice({
	name: "employee",
	initialState,
	reducers: {
		addEmployee: (state, payload) => {
			state.employees.push(payload.payload);
		},
	},
});

export const { addEmployee } = Slice.actions;
export default Slice.reducer;
