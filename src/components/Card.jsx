import React from "react";
import { useTranslation } from "react-i18next";

export default function Card({ time, date, hub, state }) {
	const { t } = useTranslation();
	return (
		<div className="card-container">
			<div className="content">
				<span>{t('time')}: </span>
				<p>{time}</p>
			</div>
			<div className="content">
				<span>{t('date')}: </span>
				<p>{date}</p>
			</div>
			<div className="content">
				<span>{t('brach')}: </span>
				<p>{hub || "-"} </p>
			</div>
			<div className="content">
				<span>{t('details')}: </span>
				<p>{t(`${state}`)}</p>
			</div>
		</div>
	);
}
