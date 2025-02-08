interface AvatarProps {
	src: string;
	alt?: string;
}

const Avatar = (props: AvatarProps) => {
	return (
		<img src={props.src} className="inline-block h-20 w-20 rounded-full ring-2 ring-cyan-100"></img>
	);
};

export default Avatar;
