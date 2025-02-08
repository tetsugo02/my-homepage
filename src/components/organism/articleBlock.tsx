import React from "react";

interface ArticleBlockProps {
	title: string;
	content: string | React.ReactNode;
}

const ArticleBlock = (props: ArticleBlockProps) => {
	return (
		<div>
			<article className="text-white flow-root m-2 mt-5 justify-items-start">
				<h2 className="text-2xl font-bold underline underline-offset-[5px]">{props.title}</h2>
				{typeof props.content === "string" ? (
					<p className="text-lg mt-3 mb-3">{props.content}</p>
				) : (
					props.content
				)}
			</article>
		</div>
	);
};

export default ArticleBlock;
