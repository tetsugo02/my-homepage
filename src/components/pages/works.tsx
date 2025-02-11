import PageContainer from "../organism/pageContainer";
import ArticleBlock from "../atom/articleBlock";
import useChangeLanguage from "../../hooks/useChangeLanguage";

const Works = () => {
	const { languageStateValue } = useChangeLanguage();
	const worksData = {
		ja: {
			title: "Works",
			content: "未実装です。",
		},
		en: {
			title: "Works",
			content: "Not yet implemented.",
		},
	};

	let content;
	if (languageStateValue === "ja") {
		content = worksData.ja;
	}
	if (languageStateValue === "en") {
		content = worksData.en;
	}

	return (
		<div className="w-full min-w-full">
			<PageContainer>
				<ArticleBlock title="Works" content={content?.content} />
			</PageContainer>
		</div>
	);
};

export default Works;
