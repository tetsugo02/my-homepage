import NameArea from "../organism/nameArea";
import ArticleBlock from "../organism/articleBlock";
import * as airticleData from "../../assets/articles.json";
import ItemList from "../organism/itemList";
import PageContainer from "../organism/pageContainer";

const Experience = () => {
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
