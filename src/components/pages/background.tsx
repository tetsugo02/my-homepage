import React from "react";

interface backgroundProps {
	children: React.ReactNode;
}

const Background = (props: backgroundProps) => {
	return (
		<div className="min-h-screen w-full bg-gray-800 justify-items-center">{props.children}</div>
	);
};

export default Background;
