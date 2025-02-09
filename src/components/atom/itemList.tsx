type ItemListType = "Number" | "Disk";

interface ItemListProps {
	type?: ItemListType;
	data: string[][];
}

const ItemList = (props: ItemListProps) => {
	return (
		<div>
			<table className="table-auto mt-3 mb-3">
				{props.data.map((item, index) => {
					console.log(item);
					return (
						<tbody key={index} className="flex list-disc">
							<td className=" mr-2">{item[0]}</td>
							<td className=" mx-2">{item[1]}</td>
						</tbody>
					);
				})}
			</table>
		</div>
	);
};

export default ItemList;
