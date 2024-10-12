import React from "react";
import { useTranslation } from "react-i18next";
import image from '../../public/second.png'
export default function Address() {
const { t } = useTranslation();

	return (
		<div className="address-last-part">
			<p>{t('addressTitle')} </p>
			<p className="address">
				امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك ٢٢,,,Cairo
			</p>
			<div className="address-container">
				<div className="two-parts">
					<p>{t('report')}</p>
					<button>{t('buttonReport')} </button>
				</div>
				<img src={image} alt="Photo" />
			</div>
		</div>
	);
}
