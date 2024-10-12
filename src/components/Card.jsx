import React from "react";

export default function Card({ time, date, hub, state }) {
	return (
		<div className="card-container">
			<div className="content">
				<span>Time: </span>
				<p>{time}</p>
			</div>
			<div className="content">
				<span>Date: </span>
				<p>{date}</p>
			</div>
			<div className="content">
				<span>Brach: </span>
				<p>{hub || "-"} </p>
			</div>
			<div className="content">
				<span>Details: </span>
				<p>{state}</p>
			</div>
		</div>
	);
}
