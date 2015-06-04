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
    return (
      <div className="shelfDisplay">
      	<h1>The Shelf</h1>
            <ItemList data={this.state.data} storeSelf={this.props.storeSelf} />
      
      </div>
    );
  }
});

var ItemList = React.createClass({
  render: function(){
  	var storeSelf = this.props.storeSelf;
    var itemNodes = this.props.data.map(function (item){
      return (
          <Item itemName={item.name} itemPrice={item.price} active={item.active} calculateTotal={storeSelf.checkout}/>
        );
    });
    return (
        <div className="itemList">
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
		this.props.calculateTotal(this.props.itemPrice);
		this.props.addToBasket();
	},
	subtractClick: function(){
		this.props.calculateTotal(-this.props.itemPrice);
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







