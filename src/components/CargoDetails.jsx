import React from "react";
import { useContext } from "react";
import { MyContext } from "../App";
import moment from "moment";

export default function CargoDetails() {
	const {  data } = useContext(MyContext);

	return (
		<div className="cargo-details">
			<p>Cargo Details</p>
			<table>
				<thead>
					<tr>
						<th>Branch</th>
						<th>Date</th>
						<th>Time</th>
						<th>Details</th>
					</tr>
				</thead>
				<tbody>
					{
						data.TransitEvents.map((item)=>{
							const date = moment(item.timestamp).format("DD/MM/YYYY")
							const time = moment(item.timestamp).format("hh:mm a")
							return (<tr>
							<td>{item.hub || "-"}</td>
							<td>{date}</td>
							<td>{time}</td>
							<td>{item.state}</td>
						</tr>)
						}
						)
					}
					{/* <tr>
						<td>6th October</td>
						<td>5/4/2020</td>
						<td>12:30 pm</td>
						<td>Cargo Created</td>
					</tr> */}
				</tbody>
			</table>
		</div>
	);
}
