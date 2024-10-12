import React from "react";
import { useContext } from "react";
import { MyContext } from "../App";
import moment from "moment";
import { useMediaQuery } from "react-responsive";
import Card from "./Card";
import { useTranslation } from "react-i18next";


export default function CargoDetails() {
	const { t } = useTranslation();
	const { data } = useContext(MyContext);
	const isSmallScreen = useMediaQuery({ query: "(max-width: 922px)" });

	return (
		<>
			{isSmallScreen ? (
				<>
					<p style={{ fontWeight: "bold" }}>{t('cargoDetails')}</p>
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
					<p>{t('cargoDetails')}</p>
					<table>
						<thead>
							<tr>
								<th>{t('branch')}</th>
								<th>{t('date')}</th>
								<th>{t('time')}</th>
								<th>{t('details')}</th>
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
										<td>{t(`${item.state}`)}</td>
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
