import React from "react";
import FireEvent from "../utils/FireEvent";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import CellButton from "@vkontakte/vkui/dist/components/CellButton/CellButton";

import Logo from "../assets/Logo";

const About = ({ id }) => {
	return (
		<Panel id={id}>
			<PanelHeader>О нас</PanelHeader>
			<Div align="center" style={{ background: "var(--background_content)" }}>
				<div style={{ width: "75%" }}>
					<Logo/>
				</div>
				<h1 style={{ margin: 0, marginTop: 5 }}>Reactive Apps</h1>
			</Div>

			<Div style={{ background: "var(--background_content)" }}>
				<b>Reactive Apps</b> (сокр. RAPPS) - это команда разработчиков, которая создает сервисы VK Mini Apps. Большая часть приложений - это инструменты для других разработчиков.
			</Div>

			<Group title="Связаться с нами">
				<CellButton onClick={() => FireEvent("https://vk.me/club182920740")}>
					Открыть диалог
				</CellButton>
			</Group>
		</Panel>
	);
};

export default About;