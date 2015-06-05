var ShelfItems = React.createClass({
	loadShelf: function(){
		$.ajax({
			url: "/groceries/shelf",
			dataType: 'json',
			type: 'get',
			success: function(data)	{
				this.setState({data: data});
			}.bind(this),
			error: function(data){
				console.log('didn\'t work');
			}
		});
	},
	getInitialState: function(){
		return {data: [], total: 0};
	},
	componentDidMount: function(){
		this.loadShelf();
	},
  render: function() {
		var storeSelf = this.props.storeSelf;
  	var itemNodes = this.state.data.map(function(item){
  		return (
  			<Item itemName={item.name} itemPrice={item.price} active={item.active} calculateTotal={storeSelf.checkout} addToBasket={storeSelf.addToBasket} removeFromBasket={storeSelf.removeFromBasket}/>
  		)
  	})
    return (
      <div className="itemList">
      	<h1>The Shelf</h1>
      	{itemNodes}
      </div>
    );
  }
});



var Item = React.createClass({
	getInitialState: function(){
		return {active: false};
	},	
	addClick: function() {
		var item = {itemName: this.props.itemName};
		this.props.calculateTotal(this.props.itemPrice);
		this.props.addToBasket(item);
	},
	subtractClick: function(){
		var item = {itemName: this.props.itemName};
		this.props.calculateTotal(-this.props.itemPrice);
		this.props.removeFromBasket(item);
	},
	render: function() {
		return (
			<div className="item">
				<button onClick={this.addClick}>Add</button>
				<span className="itemName">{this.props.itemName}</span>
				<span className="itemPrice">${this.props.itemPrice}</span>
				<button onClick={this.subtractClick}>Subtract</button>
			</div>
		)
	}
})







