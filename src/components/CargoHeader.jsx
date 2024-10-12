import React from "react";
import { useContext } from "react";
import { MyContext } from "../App";
import moment from "moment/moment";

export default function CargoHeader() {
	const {  data } = useContext(MyContext);
		const lastUpdate = moment(data.CurrentStatus.timestamp).format("dddd DD/M/YYYY [at] h:mm a");
		const promisedDate = moment(data.promisedDate).format("D MMM YYYY");

	return (
		<div className="cargo-header">
			<div className="">
				<p>Delivery date within </p>
				<p>{promisedDate}</p>
			</div>

			<div className="">
				<p>Merchant Name</p>
				<p>{data.provider}</p>
			</div>

			<div className="">
				<p>Last Update </p>
				<p>{lastUpdate}</p>
			</div>

			<div className="">
				<p>Cargo ID {data.TrackingNumber} </p>
				<p>{data.CurrentStatus.state}</p>
			</div>
		</div>
	);
}
