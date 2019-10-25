import React from "react";
import FireEvent from "../utils/FireEvent";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import List from "@vkontakte/vkui/dist/components/List/List";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";

const Staff = ({ id }) => {
	return (
		<Panel id={id}>
			<PanelHeader>Сотрудники</PanelHeader>
			<List>
				<Cell
					expandable
					before={<Avatar src="https://sun9-9.userapi.com/c855028/v855028221/a513b/kOOsa6GlyL0.jpg"/>}
					children="Степан Новожилов"
					description="Разработчик"
					onClick={() => FireEvent("https://vk.com/this.state.user")}
				/>
			</List>
		</Panel>
	);
};

export default Staff;