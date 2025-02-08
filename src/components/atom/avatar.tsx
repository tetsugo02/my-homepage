interface AvatarProps {
	src: string;
	alt?: string;
	size?: "small" | "medium" | "large";
}

const Avatar = (props: AvatarProps) => {
	let iconSize = "h-20 w-20";
	switch (props.size) {
		case "small":
			iconSize = "h-5 w-5";
			break;
		case "medium":
			iconSize = "h-10 w-10";
			break;
		case "large":
			iconSize = "h-20 w-20";
			break;
		default:
			break;
	}
	return (
		<img
			src={props.src}
			alt={props.alt}
			className={`inline-block rounded-full ring-2 ring-cyan-100 ${iconSize} mx-1`}
		></img>
		//<img src={props.src} className="inline-block h-20 w-20 rounded-full ring-2 ring-cyan-100"></img>
	);
};

export default Avatar;
