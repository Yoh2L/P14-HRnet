import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import states from "../mocked/states";
import departments from "../mocked/departments";
import { useDispatch } from "react-redux";
import { addEmployee } from "../features/slice";
import { formatDate } from "../utils/format";
import { Modal } from "p14-modal-component-library";

const CreateEmployee = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [dateBirth, setDateBirth] = useState("");
	const [startDate, setStartDate] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [department, setDepartment] = useState("");
	const [isModalVisible, setIsModalVisible] = useState(false);

	const dispatch = useDispatch();

	const handleSave = (e) => {
		e.preventDefault();
		const employee = {
			firstName,
			lastName,
			dateBirth: formatDate(dateBirth),
			startDate: formatDate(startDate),
			street,
			city,
			state,
			zipCode,
			department,
		};

		dispatch(addEmployee(employee));
		setIsModalVisible(true);
	};

	const handleClosing = (e) => {
		setIsModalVisible(false);
	};

	return (
		<div className="createEmployee-card">
			<section>
				<h1>HRnet</h1>
				<NavLink to="/employees">View Current Employees</NavLink>
			</section>

			<form>
				<h2>Create Employee</h2>
				<div className="form-nameArea">
					<label>
						First Name :
						<input type="text" onChange={(e) => setFirstName(e.target.value)} />
					</label>
					<label>
						Last Name :
						<input type="text" onChange={(e) => setLastName(e.target.value)} />
					</label>
					<label>
						Date of Birth :
						<DatePicker
							dateFormat="dd/MM/yyyy"
							selected={dateBirth}
							onChange={(date) => setDateBirth(date)}
						/>
					</label>
					<label>
						Start Date :
						<DatePicker
							dateFormat="dd/MM/yyyy"
							selected={startDate}
							onChange={(date) => setStartDate(date)}
						/>
					</label>
				</div>

				<fieldset className="form-adressArea">
					<legend>Address</legend>
					<label>
						Street :
						<input type="text" onChange={(e) => setStreet(e.target.value)} />
					</label>
					<label>
						City :
						<input type="text" onChange={(e) => setCity(e.target.value)} />
					</label>
					<label>
						State:
						<Dropdown
							options={states.map((el) => ({
								label: el.name,
								value: el.abbreviation,
							}))}
							onChange={(e) => setState(e.value)}
							placeholder="Select a State"
						/>
					</label>

					<label>
						Zip Code :
						<input type="number" onChange={(e) => setZipCode(e.target.value)} />
					</label>
				</fieldset>
				<label>
					Department:
					<Dropdown
						options={departments}
						onChange={(e) => setDepartment(e.value)}
						placeholder="Select a Department"
					/>
				</label>
				<div className="form-submitBtn">
					<input type="submit" onClick={handleSave} />
				</div>
			</form>
			{isModalVisible && (
				<Modal message={"Employee Created !"} onClose={handleClosing} />
			)}
		</div>
	);
};

export default CreateEmployee;
