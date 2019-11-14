import React from "react";
import Row from "./table_row";

function CartTable(props) {
	const { data = []} = props;

	return (
		<table
			className="table table-responsive"
			tabIndex="1"
			style={{overflow: "hidden", outline: "none"}}
		>
			<thead>
			<tr>
				<th></th>
				<th>Name</th>
				<th>Price</th>
				<th>Quantity</th>
			</tr>
			</thead>
			<tbody>
			{
				!!data.length && data.map((item, index) => <Row key={item.id} { ...item } />)
			}

			</tbody>
		</table>)

}

export default CartTable;
