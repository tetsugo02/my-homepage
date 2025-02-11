import NameArea from "../organism/nameArea";
import ArticleBlock from "../atom/articleBlock";
import * as airticleData_Eng from "../../assets/articles_eng.json";
import * as airticleData_Ja from "../../assets/articles_jp.json";

import ItemList from "../atom/itemList";
import PageContainer from "../organism/pageContainer";
import useChangeLanguage from "../../hooks/useChangeLanguage";

const Experience = () => {
	const { languageStateValue } = useChangeLanguage();
	const airticleData = languageStateValue === "ja" ? airticleData_Ja : airticleData_Eng;

	return (
		<PageContainer>
			<NameArea />
			<ArticleBlock title="Bio" content={<ItemList data={airticleData.Bio}></ItemList>} />
			<ArticleBlock
				title="Certification"
				content={<ItemList data={airticleData.Certifications}></ItemList>}
			/>
		</PageContainer>
	);
};

export default Experience;
