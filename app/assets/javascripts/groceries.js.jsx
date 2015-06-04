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
	addTotal: function(price) {
		this.setState({ total: this.state.total + price })
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
            <ItemList data={this.state.data} self={this} />
            <p id="total">
              Total 
              <b>
                ${this.state.total.toFixed(2)}
              </b>
            </p>
      </div>
    );
  }
});

var ItemList = React.createClass({
  render: function(){
  	var shelf = this.props.self;
    var itemNodes = this.props.data.map(function (item){
      return (
          <Item itemName={item.name} itemPrice={item.price} active={item.active} addTotal={shelf.addTotal}/>
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
	clickHandler: function() {
		var active = !this.state.active;

		this.setState({ active: active });

		console.log(this.props.itemPrice);

		this.props.addTotal( active ? this.props.itemPrice : -this.props.itemPrice );
	},
	render: function() {
		return (
			<div className="item" onClick={this.clickHandler}>
				<span className="itemName">{this.props.itemName}</span>
				<span className="itemPrice">${this.props.itemPrice}</span>
			</div>
		)
	}
})







