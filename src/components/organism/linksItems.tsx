import Avatar from "../atom/avatar";

const style = {
	a: "flex items-center w-full px-2 py-1 hover:bg-gray-700 rounded-lg",
};

const linksItems = [
	{
		contents: (
			<a href="https://github.com/tetsugo02" className={style.a} target="_blank">
				<Avatar
					src="https://api.iconify.design/grommet-icons:github.svg?color=%23ababab"
					size="small"
				/>
				<span className="ml-1">GitHub</span>
			</a>
		),
	},
	{
		contents: (
			<a href="https://murata-lab.jp/" className={style.a} target="_blank">
				<Avatar src="https://api.iconify.design/ri:robot-2-line.svg?color=%23ababab" size="small" />
				<span className="ml-1">Lab</span>
			</a>
		),
	},
];

export default linksItems;
