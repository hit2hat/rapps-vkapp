import React, { useState, useEffect } from "react";
import FireEvent from "../utils/FireEvent";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";

import ArticleCard from "../components/ArticleCard";
import {getArticles} from "../utils/api";
import Spinner from "@vkontakte/vkui/dist/components/Spinner/Spinner";

const Articles = ({ id }) => {
	const [ loaded, setLoaded ] = useState(false);
	const [ articles, setArticles ] = useState([]);

	useEffect(() => {
		getArticles().then((result) => {
			setArticles(result);
			setLoaded(true);
		});
	}, []);

	return (
		<Panel id={id}>
			<PanelHeader>Статьи</PanelHeader>
			<Placeholder
				title="Наши статьи"
				children="Здесь вы найдете самые свежие статьи и руководства по разработке сервисов от нашей команды"
			/>
			{loaded ?
				<div style={{ display: "grid", gridRowGap: 12, padding: "12px 0" }}>
					{[...articles].reverse().map((article) => (
						<ArticleCard
							key={article.id}
							title={article.title.length > 40 ? article.title.slice(0, 37) + "..." : article.title}
							image={article.image}
							action={() => FireEvent(article.url)}
						/>
					))}
				</div>
			: <div style={{ padding: "12px" }}><Spinner/></div>}
		</Panel>
	);
};

export default Articles;