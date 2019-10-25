import React from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";

const Articles = ({ id }) => {
	return (
		<Panel id={id}>
			<PanelHeader>Статьи</PanelHeader>
			<Placeholder
				title="Наши статьи"
				children="Здесь вы найдете самые свежие статьи и руководства по разработке сервисов от нашей команды"
			/>
		</Panel>
	);
};

export default Articles;