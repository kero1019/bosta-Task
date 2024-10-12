import React from "react";
import CargoHeader from "./CargoHeader";
import CargoBar from "./CargoBar";

export default function Cargo() {
	return (
		<div className="cargo-container">
			<CargoHeader />
            <CargoBar />
		</div>
	);
}
