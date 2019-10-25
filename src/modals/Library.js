import React from "react";
import vkConnect from "@vkontakte/vk-connect";

import ModalPage from "@vkontakte/vkui/dist/components/ModalPage/ModalPage";
import List from "@vkontakte/vkui/dist/components/List/List";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Group from "@vkontakte/vkui/dist/components/Group/Group";

import Icon24Share from "@vkontakte/icons/dist/24/share";
import Icon24Play from "@vkontakte/icons/dist/24/play";

const Library = ({ id, onClose, header, navigator }) => {
	const lib = navigator.params;
	return (
		<ModalPage
			id={id}
			onClose={onClose}
			header={React.cloneElement(header, { children: lib.name })}
		>
			<Div>
				<div style={{ display: "flex", marginBottom: 25 }}>
					<Button
						before={<Icon24Share/>}
						size="l"
						stretched
						onClick={() => vkConnect.send("VKWebAppShare", { "link": "https://vk.com/therapps" })}
						style={{ cursor: "pointer", marginRight: 10 }}
					>
						Поделиться
					</Button>
					{lib.showcase !== -1 &&
						<Button
							before={<Icon24Play/>}
							size="l"
							stretched
							onClick={() => vkConnect.send("VKWebAppOpenApp", { "app_id": lib.showcase })}
							style={{cursor: "pointer"}}
						>
							Демонстрация
						</Button>
					}
				</div>
				<Group title="Информация">
					<List>
						<Cell
							children="Пакет"
							indicator={lib.npm_package}
						/>
						<Cell
							children="Актуальная версия"
							indicator={lib.version}
						/>
						<Cell
							children="Скачиваний за месяц"
							indicator={lib.downloads}
						/>
						<Cell
							children="Лицензция"
							indicator={lib.license}
						/>
					</List>
				</Group>
				<Group title="Добавить в проект">
					<List>
						<Cell
							children="Npm"
							indicator={
								<Input
									value={"npm i " + lib.npm_package}
									readOnly
								/>
							}
						/>
						<Cell
							children="Yarn"
							indicator={
								<Input
									value={"yarn add " + lib.npm_package}
									readOnly
								/>
							}
						/>
					</List>
				</Group>
			</Div>
		</ModalPage>
	);
};

export default Library;