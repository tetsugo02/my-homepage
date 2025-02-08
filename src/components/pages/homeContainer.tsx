import NameArea from "../organism/nameArea";
import ArticleBlock from "../organism/articleBlock";

const HomeContainer = () => {
	return (
		<div className="container mx-auto px-4 py-20 max-w-3xl rounded-lg justify-items-center ">
			<NameArea />
			<ArticleBlock
				title="Works"
				content="I'm a web developer. I'm currently learning React and TypeScript.I'm a web developer. I'm currently learning React and TypeScript.I'm a web developer. I'm currently learning React and TypeScript.I'm a web developer. I'm currently learning React and TypeScript.I'm a web developer. I'm currently learning React and TypeScript.I'm a web developer. I'm currently learning React and TypeScript.I'm a web developer. I'm currently learning React and TypeScript.I'm a web developer. I'm currently learning React and TypeScript."
			/>
		</div>
	);
};

export default HomeContainer;
