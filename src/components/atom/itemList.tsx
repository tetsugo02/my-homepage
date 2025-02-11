type ItemListType = "Number" | "Disk";

interface ItemListProps {
	type?: ItemListType;
	data: string[][];
}

const ItemList = (props: ItemListProps) => {
	return (
		<div>
			<table className="table-auto mt-3 mb-3">
				<tbody>
					{props.data.map((item, index) => {
						return (
							<tr key={index} className="flex">
								{item[0] ? <th className=" mr-3">{item[0]}</th> : null}
								<td className="">{item[1]}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default ItemList;
