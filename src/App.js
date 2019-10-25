import React from "react";
import { Stack, Tabbar, Page } from "vkui-navigator/dist";

// Panels
import Services from "./containers/Services";
import Libs from "./containers/Libs";
import Staff from "./containers/Staff";
import About from "./containers/About";
import Articles from "./containers/Articles";

// Modals
import Library from "./modals/Library";

// Icons
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';

const App = () => (
	<Stack
		activePage="main"
		modals={[
			<Library id="library" title="Библиотека"/>
		]}
	>
		<Tabbar
			id="main"
			activeStory="about"
		>
			<Page
				id="about"
				activePanel="about"
				title="О нас"
				icon={<Icon28InfoOutline/>}
			>
				<About id="about"/>
			</Page>
			<Page
				id="libs"
				activePanel="libs"
				title="Библиотеки"
				icon={<Icon28FavoriteOutline/>}
			>
				<Libs id="libs"/>
			</Page>
			<Page
				id="services"
				activePanel="services"
				title="Сервисы"
				icon={<Icon28ServicesOutline/>}
			>
				<Services id="services"/>
			</Page>
			<Page
				id="articles"
				activePanel="articles"
				title="Статьи"
				icon={<Icon28ArticleOutline/>}
			>
				<Articles id="articles"/>
			</Page>
			<Page
				id="staff"
				activePanel="staff"
				title="Сотрудники"
				icon={<Icon28UsersOutline/>}
			>
				<Staff id="staff"/>
			</Page>
		</Tabbar>
	</Stack>
);

export default App;

