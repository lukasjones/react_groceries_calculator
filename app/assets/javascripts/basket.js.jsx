var Basket = React.createClass({
	getInitialState: function(){
		return {data: []};
	},
	render: function(){
		return (
			<div className="basket">
			<h1>Your Basket</h1>
				<ItemList  data={[]}/>
			</div>
		);
	}

});

