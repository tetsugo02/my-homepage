import React from "react";

interface ArticleBlockProps {
	title: string;
	content: string | React.ReactNode;
}

const ArticleBlock = (props: ArticleBlockProps) => {
	return (
		<div>
			<article className="text-white flow-root m-2 mt-5">
				<h2 className="text-2xl font-bold underline">{props.title}</h2>
				<p className="text-lg indent-4">{props.content}</p>
			</article>
		</div>
	);
};

export default ArticleBlock;
