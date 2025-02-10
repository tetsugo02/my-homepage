import Avatar from "../atom/avatar";

const linksItems = [
	{
		contents: (
			<a href="https://github.com/tetsugo02" className="flex ">
				<Avatar src="/GrommetIconsGithub.svg" size="small" />
				<span className="ml-1">GitHub</span>
			</a>
		),
	},
	{
		contents: (
			<a href="https://lab.github.com" className="flex">
				<Avatar src="https://api.iconify.design/ri:robot-2-line.svg?color=%23ababab" size="small" />
				<span className="ml-1">Lab</span>
			</a>
		),
	},
];

export default linksItems;
