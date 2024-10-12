import React from "react";
import { LiaSave } from "react-icons/lia";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Steps } from "antd";
import { TbTruckDelivery } from "react-icons/tb";
import { useContext } from "react";
import { MyContext } from "../App";
import moment from "moment/moment";

export default function CargoBar() {
	const {  data } = useContext(MyContext);
	let currentStep = data.TransitEvents.length - 1;
	let  myStatus = data.CurrentStatus.state;
	if (myStatus === "DELIVERED") {
		myStatus = "green";
	} else if (myStatus === "DELIVERED_TO_SENDER") {
		myStatus = "yellow";
	} else {
		myStatus = "red";
	}

	return (
		<div
			className={`cargo-bar ${myStatus}`}>
			<div className="">
				<Steps
					size="small"
					current={currentStep}
					labelPlacement="vertical"
					items={data.TransitEvents.map((item, index) => {
						const statuses = ["in-progress", "finished", "waiting"];
						const status =
							currentStep === index
								? statuses[0]
								: currentStep > index
								? statuses[1]
								: statuses[2];

						let icon;
						switch (status) {
							case "in-progress":
								icon = <div>
									<TbTruckDelivery />
									<TbTruckDelivery className="icon truck" />
								</div>;
								break;
							case "finished":
								icon = <div className="div-icon" style={{backgroundColor:"white"}}><IoMdCheckmarkCircle className="icon" /></div>;
								break;
								case "waiting":
									icon = <IoMdCheckmarkCircle className="icon" color="white" />;
								break;
						}
						if (index === data.TransitEvents.length - 1 && currentStep < data.TransitEvents.length - 1)
							icon = <LiaSave className="icon save" />;
						return {
							icon: icon,
							title: item.state
						};
					})}
				/>
			</div>

			{/* <div className="cargo-test">
				<p>Cargo Created</p>
				<p>Cargo Delivered From Merchant</p>
				<p>Cargo on way</p>
				<p>Delivered</p>
				{
					data.TransitEvents.map((item)=>{
						return <p>{item.state}</p>
					})
				}
			</div> */}
		</div>
	);
}
