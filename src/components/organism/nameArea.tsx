import Avatar from "../atom/avatar";

function NameArea() {
	return (
		<div className="grid grid-cols-2 mx-auto">
			<div className=" text-white">
				<h1 className="font-medium text-4xl mt-3">Tesugo To 董哲豪</h1>
				<h2 className="font-normal text-xl ml-2">University Student</h2>
			</div>
			<div className="flex justify-end mr-5">
				<Avatar src="/avatar.JPG"></Avatar>
			</div>
		</div>
	);
}

export default NameArea;
