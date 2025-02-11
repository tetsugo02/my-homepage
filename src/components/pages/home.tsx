import PageContainer from "../organism/pageContainer";
import NameArea from "../organism/nameArea";
import ArticleBlock from "../atom/articleBlock";
import * as airticleData_Eng from "../../assets/articles_eng.json";
import * as airticleData_Ja from "../../assets/articles_jp.json";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";

const Home = () => {
	const { languageStateValue } = useChangeLanguage();
	const airticleData = languageStateValue === "ja" ? airticleData_Ja : airticleData_Eng;
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
