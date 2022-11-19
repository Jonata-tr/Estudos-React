const voos = [
   {
    id: "Av000",
    tittle: "Volta ter. 19 de julho",
		details: [
			{
			id:"details00",
			tittle:"Title 0 do detail 000"
			},

			{
			id:"details01",
			tittle:"Title 1 do detail 000"
			},

			{
			id:"details02",
			tittle:"Title 2 do detail 000"
			},

			{
			id:"details03",
			tittle:"Title 3 do detail 000"
			}
		]
  },

	{
    id: "Av001",
    tittle: "Volta as 19h do dia 22 de agosto",
		details: [
			{
			id:"details10",
			tittle:"Title 0 do detail 000"
			},

			{
			id:"details11",
			tittle:"Title 1 do detail 000"
			},

			{
			id:"details12",
			tittle:"Title 2 do detail 000"
			},

			{
			id:"details13",
			tittle:"Title 3 do detail 000"
			}
		]
	}
];

const ItemVoo =({tittle, children}) => {
	return (
		<div className="margin">
			<h2>{tittle}</h2>
			<div>
				{children}
			</div>
		</div>
	)
}

function VoosDetails({details}) {
	return (
		<ul>
			{details.map(detail => (
				<li key={detail.id}>{detail.tittle}</li>
				))}
		</ul>
	)
}

function Voo() {
  return (
		<div className="voos">
			{voos.map( voo => (
				<ItemVoo key={voo.id} tittle={voo.tittle}>
					<VoosDetails details={voo.details} />
				</ItemVoo>
			))}
		</div>
	)
}

export default Voo;
