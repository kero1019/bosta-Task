import React from "react";
import { useContext } from "react";
import { MyContext } from "../App";
import moment from "moment";
import { useMediaQuery } from "react-responsive";
import Card from "./Card";

export default function CargoDetails() {
	const { data } = useContext(MyContext);
	const isSmallScreen = useMediaQuery({ query: "(max-width: 922px)" });

	return (
		<>
			{isSmallScreen ? (
				<>
					<p style={{ fontWeight: "bold" }}>Cargo Details</p>
					{data.TransitEvents.map((item, index) => {
						const date = moment(item.timestamp).format("DD/MM/YYYY");
						const time = moment(item.timestamp).format("hh:mm a");
						return (
							<Card
								key={index}
								hub={item.hub}
								time={time}
								date={date}
								state={item.state}
							/>
						);
					})}
				</>
			) : (
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
							{data.TransitEvents.map((item, index) => {
								const date = moment(item.timestamp).format("DD/MM/YYYY");
								const time = moment(item.timestamp).format("hh:mm a");
								return (
									<tr key={index}>
										<td>{item.hub || "-"}</td>
										<td>{date}</td>
										<td>{time}</td>
										<td>{item.state}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
}
