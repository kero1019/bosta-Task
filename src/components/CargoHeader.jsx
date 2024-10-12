import React from "react";
import { useContext } from "react";
import { MyContext } from "../App";
import moment from "moment/moment";
import { useTranslation } from "react-i18next";

export default function CargoHeader() {
	const { t } = useTranslation();
	const {  data } = useContext(MyContext);
		const lastUpdate = moment(data.CurrentStatus.timestamp).format("dddd DD/M/YYYY [at] h:mm a");
		const promisedDate = moment(data.promisedDate).format("D MMM YYYY");

	return (
		<div className="cargo-header">
			<div className="">
				<p>{t('deliverTime')} </p>
				<p>{promisedDate}</p>
			</div>

			<div className="">
				<p>{t('tagerName')}</p>
				<p>{data.provider}</p>
			</div>

			<div className="">
				<p>{t('lastUpdate')} </p>
				<p>{lastUpdate}</p>
			</div>

			<div className="">
				<p>{t('cargoId')} {data.TrackingNumber} </p>
				<p>{t(`${data.CurrentStatus.state}`)}</p>
			</div>
		</div>
	);
}
