var Basket = React.createClass({
	getInitialState: function(){
		return {data: [], total: 0};
	},
	render: function(){
		var basketItems = this.props.items.map(function(item){
			return (
					<BasketItem itemName={item.name} />
				);
		});
		return (
			<div className="basket">
			<h1>Your Basket</h1>
				{basketItems}
				<p>Total: ${this.props.total.toFixed(2)}</p>
			</div>
		);
	}

});

var BasketItem = React.createClass({
	render: function(){
		return(
			<div className="item">
				<span className="itemName">{this.props.itemName}</span>
			</div>
			)
	}
})