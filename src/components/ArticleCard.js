import React from "react";

import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import Icon12OnlineVkmobile from '@vkontakte/icons/dist/12/online_vkmobile';

const ArticleCard = ({ title, image, action }) => (
	<Div style={{ paddingTop: 0, paddingBottom: 0 }}>
		<div style={{
			height: 200,
			position: "relative",
			color: "white",
			overflow: "hidden",
			borderRadius: 4,
			textAlign: "center"
		}}>
			<div style={{
				width: "100%",
				height: "100%",
				pointerEvents: "none",
				position: "absolute"
			}}>
				<div
					style={{
						backgroundImage: `url(${image})`,
						backgroundSize: "cover",
						backgroundPosition: "50%",
						width: "100%",
						height: "100%",
						position: "absolute",
						pointerEvents: "none"
					}}
				/>
			</div>
			<div
				style={{
					width: "100%",
					height: "100%",
					position: "absolute",
					background: "rgba(0, 0, 0, .4)"
				}}
			/>
			<div style={{
				width: "100%",
				height: "100%",
				position: "absolute",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center"
			}}>
				<h1 style={{ margin: 0, padding: "0 20px" }}>{title}</h1>
				<div>
					<Button
						style={{ marginTop: 11 }}
						size="l"
						before={<Icon12OnlineVkmobile style={{ marginRight: 5 }}/>}
						level="overlay_primary"
						onClick={action}
					>
						Читать
					</Button>
				</div>
			</div>
		</div>
	</Div>
);

export default ArticleCard;