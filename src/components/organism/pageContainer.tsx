import React from "react";

interface pageContainerProps {
	children?: React.ReactNode;
}

const PageContainer = (props: pageContainerProps) => {
	return (
		<div className="container mx-auto px-4 py-20 min-w-full md:min-w-[40rem] lg:min-w-[48rem] sm:min-w-xl max-w-3xl w-full rounded-lg ">
			{props.children}
		</div>
	);
};

export default PageContainer;
