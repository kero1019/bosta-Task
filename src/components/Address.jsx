import React from "react";

export default function Address() {
	return (
		<div className="address-last-part">
			<p>Delivery Address </p>
			<p className="address">
				امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك ٢٢,,,Cairo
			</p>
			<div className="address-container">
				<div className="two-parts">
					<p>There is problem with cargo ?!</p>
					<button>Report for a Problem </button>
				</div>
				<img src="/second.png" alt="Photo" />
			</div>
		</div>
	);
}
