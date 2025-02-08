import NameArea from "../organism/nameArea";
import ArticleBlock from "../organism/articleBlock";
import * as airticleData from "../../assets/articles.json";
import ItemList from "../organism/itemList";

const HomeContainer = () => {
	return (
		<div className="container mx-auto px-4 py-20 max-w-3xl rounded-lg ">
			<NameArea />
			<ArticleBlock title="About Me" content={airticleData.aboutMe} />
			<ArticleBlock title="Bio" content={<ItemList data={airticleData.Bio}></ItemList>} />
		</div>
	);
};

export default HomeContainer;
