import React, { useState, useEffect } from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Spinner from "@vkontakte/vkui/dist/components/Spinner/Spinner";

import LibraryCard from "../components/LibraryCard";

import { getLibraries } from "../utils/api";

const Libs = ({ id, navigator }) => {
	const [ loaded, setLoaded ] = useState(false);
	const [ libraries, setLibraries ] = useState([]);

	useEffect(() => {
		getLibraries().then((result) => {
			setLibraries(result);
			setLoaded(true);
		});
	}, []);

	return (
		<Panel id={id}>
			<PanelHeader>Библиотеки</PanelHeader>
			<Placeholder
				title="Наши библиотеки"
				children="В этом разделе вы сможете найти полезные модули, написанные нашей командой для сторонних разработчиков"
			/>
			{loaded ?
				<div style={{ display: "grid", gridRowGap: 12, padding: "12px 0" }}>
					{[...libraries].reverse().map((lib) => (
						<LibraryCard
							key={lib.id}
							name={lib.name}
							npm_package={lib.npm_package}
							description={lib.description}
							popular={lib.popular}
							action={(stat) => navigator.showModal("library", { ...lib, ...stat })}
						/>
					))}
				</div>
			: <div style={{ padding: "12px" }}><Spinner/></div>}
		</Panel>
	);
};

export default Libs;