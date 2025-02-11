import PageContainer from "../organism/pageContainer";
import NameArea from "../organism/nameArea";
import ArticleBlock from "../atom/articleBlock";
import * as airticleData_Eng from "../../assets/articles_eng.json";
const Home = () => {
	return (
		<div className="flex justify-center transform translate-y-20">
			<PageContainer>
				<NameArea />
				<ArticleBlock title="About Me" content={airticleData_Eng.aboutMe} />
			</PageContainer>
		</div>
	);
};

export default Home;
