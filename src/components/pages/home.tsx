import PageContainer from "../organism/pageContainer";
import NameArea from "../organism/nameArea";
import ArticleBlock from "../atom/articleBlock";
import * as airticleData from "../../assets/articles.json";
const Home = () => {
	return (
		<div className="flex justify-center transform translate-y-20">
			<PageContainer>
				<NameArea />
				<ArticleBlock title="About Me" content={airticleData.aboutMe} />
			</PageContainer>
		</div>
	);
};

export default Home;
