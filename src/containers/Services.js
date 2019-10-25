import React, { useState, useEffect } from "react";
import vkConnect from "@vkontakte/vk-connect";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import List from "@vkontakte/vkui/dist/components/List/List";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";

import {getServices} from "../utils/api";
import Spinner from "@vkontakte/vkui/dist/components/Spinner/Spinner";

const Services = ({ id }) => {
	const [ loaded, setLoaded ] = useState(false);
	const [ services, setServices ] = useState([]);

	useEffect(() => {
		getServices().then((result) => {
			setServices(result);
			setLoaded(true);
		});
	}, []);

	return (
		<Panel id={id}>
			<PanelHeader>Сервисы</PanelHeader>
			<Placeholder
				title="Наши сервисы"
				children="Готовые продукты, разработанные нашей командой, которыми вы можете воспользоваться прямо сейчас"
			/>
			{loaded ?
				<List>
					{[...services].reverse().map((service) => (
						<Cell
							expandable
							before={<Avatar type="app" src={service.image}/>}
							key={service.id}
							children={service.name}
							description={service.description}
							indicator={service.special ? "Special" : ""}
							onClick={() => vkConnect.send("VKWebAppOpenApp", {app_id: service.app_id})}
						/>
					))}
				</List>
			: <div style={{ padding: "12px" }}><Spinner/></div>}
		</Panel>
	);
};

export default Services;