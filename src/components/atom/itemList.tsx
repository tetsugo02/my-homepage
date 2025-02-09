type ItemListType = "Number" | "Disk";

interface ItemListProps {
	type?: ItemListType;
	data: string[][];
}

const ItemList = (props: ItemListProps) => {
	return (
		<div>
			<table className="table-auto mt-3 mb-3">
				<tbody className=" list-disc">
					{props.data.map((item, index) => {
						return (
							<tr key={index}>
								<td className=" mr-2">{item[0]}</td>
								<td className=" mx-5">{item[1]}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default ItemList;
