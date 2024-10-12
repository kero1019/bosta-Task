import "./App.scss";
import Address from "./components/Address";
import Cargo from "./components/Cargo";
import CargoDetails from "./components/CargoDetails";
import Navbar from "./components/Navbar";
import React, { createContext } from "react";
export const MyContext = createContext();

function App() {
	const [data, setData] = React.useState({
		provider: "Bosta",
		CurrentStatus: {
			state: "DELIVERED",
			timestamp: "2024-05-19T13:58:44.866Z",
		},
		PromisedDate: "2024-05-21T20:59:59.999Z",
		TrackingNumber: "84043113",
		TrackingURL: "bosta.co/tracking-shipment/?track_num=84043113",
		SupportPhoneNumbers: ["19043"],
		TransitEvents: [
			{
				state: "TICKET_CREATED",
				timestamp: "2024-05-19T12:39:17.729Z",
			},
			{
				state: "PACKAGE_RECEIVED",
				timestamp: "2024-05-19T12:42:34.477Z",
				hub: "El-Mansoura Hub",
			},
			{
				state: "OUT_FOR_DELIVERY",
				timestamp: "2024-05-19T12:42:57.625Z",
			},
			{
				state: "DELIVERED",
				timestamp: "2024-05-19T13:58:44.866Z",
			},
		],
		CreateDate: "2024-05-19T12:39:17.828Z",
		isEditableShipment: false,
		nextWorkingDay: [
			{
				dayDate: "2024-05-22",
				dayName: "Wednesday",
			},
		],
	});
	return (
		<MyContext.Provider value={{ data, setData }}>
			<div className="App">
				<Navbar />
				<main>
					<div className="cargo-container">
						<Cargo />
					</div>

					<div className="container-of-two-parts">
						<Address />
						<CargoDetails />
					</div>
				</main>
			</div>
		</MyContext.Provider>
	);
}

export default App;
