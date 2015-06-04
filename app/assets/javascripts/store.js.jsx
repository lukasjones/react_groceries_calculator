var Store = React.createClass({
	checkout: function(price){
		this.setState({total: this.state.total + price})
	},
	getInitialState: function(){
		return {total: 0, basketItems: []};
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