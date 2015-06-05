var Basket = React.createClass({
	getInitialState: function(){
		return {basket: {}, total: 0};
	},
	countItems: function(){
		basket = {};
		this.props.items.map(function(item){
			if (!basket[item.itemName])
				basket[item.itemName] = 1;
			else
				basket[item.itemName] += 1;
		});
		return basket;
	},
	render: function(){
		var basket = this.countItems();
		var basketItems = [];
		for (var item in basket) {
			basketItems.push(<BasketItem itemName={item} quantity={basket[item]} />)
		}
		console.log(basketItems);
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
				<span className="basketItemName">{this.props.itemName}</span>
				<span className="quantity">{this.props.quantity}</span>
			</div>
		);
	}
});