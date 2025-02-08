import React from "react";

interface pageContainerProps {
	children: React.ReactNode;
}

const PageContainer = (props: pageContainerProps) => {
	return <div className="container mx-auto px-4 py-20 max-w-3xl rounded-lg ">{props.children}</div>;
};

export default PageContainer;
