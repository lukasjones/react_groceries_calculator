var Store = React.createClass({
	checkout: function(price){
		this.setState({total: this.state.total + price})
	},
	getInitialState: function(){
		return {total: 0, basketItems: []};
	},
	addToBasket: function(item){
		this.state.basketItems.push(item);
		// console.log(this.state.basketItems);
	},
	removeFromBasket: function(item){
		indexToRemove = this.state.basketItems.map(function(item) {
			return item.itemName; }).indexOf(item.itemName);
		if (indexToRemove >= 0)
			this.state.basketItems.splice(indexToRemove, 1);

		console.log(item);
		console.log(this.state.basketItems);
		console.log(indexToRemove)
	},
	render: function(){
		var self = this;
		return (
			<div className="store">
				<ShelfItems storeSelf={self}/>
				<Basket items={this.state.basketItems} total={this.state.total}/>
			</div>
			)
	}
})