import React from "react";

interface ArticleBlockProps {
	title: string;
	content: string | React.ReactNode;
}

const ArticleBlock = (props: ArticleBlockProps) => {
	return (
		<div>
			<article>
				<h2 className="text-2xl font-bold">{props.title}</h2>
				<p className="text-lg">{props.content}</p>
			</article>
		</div>
	);
};

export default ArticleBlock;
