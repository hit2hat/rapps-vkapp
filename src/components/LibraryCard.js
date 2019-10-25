import React, { useState, useEffect } from "react";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import {getStatisticForNpmPackage, getLatestVersion, getLicense} from "../utils/api";

import Icon24Poll from '@vkontakte/icons/dist/24/poll';
import Icon24PlaySpeed from '@vkontakte/icons/dist/24/play_speed';
import Icon24Education from '@vkontakte/icons/dist/24/education';

const StatIcon = ({ Icon, text }) => (
	<div style={{ display: "flex", alignItems: "center" }}>
		<Icon/>
		<span style={{ marginLeft: 3 }}>{text}</span>
	</div>
);

const LibraryCard = ({ name, npm_package, description, popular, action }) => {
	const [ downloads, setDownloads ] = useState(null);
	const [ version, setVersion ] = useState(null);
	const [ license, setLicense ] = useState(null);

	useEffect(() => {
		getStatisticForNpmPackage(npm_package)
			.then(setDownloads);

		getLatestVersion(npm_package)
			.then(setVersion);

		getLicense(npm_package)
			.then(setLicense);
	}, []);

	return (
		<Div style={{ paddingTop: 0, paddingBottom: 0 }} onClick={() => action({ downloads, version, license })}>
			<div style={{
				backgroundImage: "linear-gradient(135deg, #FF773D 0%, #FF4700 100%)",
				height: 200,
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-end",
				flexDirection: "column",
				padding: "10px 10px",
				borderRadius: 12,
				color: "white",
				position: "relative"
			}}>
				<div style={{
					position: "absolute",
					top: "calc(50% - 40px)",
					bottom: "calc(50% + 40px)",
					textAlign: "center",
					padding: "0 20px"
				}}>
					<h1 style={{ margin: 0, marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
						<span>{name}</span>
						{popular && <span style={{ background: "white", color: "#FF4700", padding: "3px 10px", marginLeft: 5, fontSize: 14, borderRadius: 5 }}>
							  HOT
						</span>}
					</h1>
					<p style={{ margin: 0 }}>{description}</p>
				</div>
				{downloads && version && license &&
					<div style={{ display: "flex", justifyContent: "space-around", width: "80%" }}>
						<StatIcon Icon={Icon24Poll} text={downloads} />
						<StatIcon Icon={Icon24PlaySpeed} text={version} />
						<StatIcon Icon={Icon24Education} text={license} />
					</div>
				}
			</div>
		</Div>
	);
};

export default LibraryCard;