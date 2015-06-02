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
		return {data: []};
	},
	componentDidMount: function(){
		this.loadShelf();
	},
  render: function() {
    return (
      <div className="shelfDisplay">
      	<h1>The Shelf</h1>
            <ItemList data={this.state.data} />
      </div>
    );
  }
});

var ItemList = React.createClass({
  render: function(){
    var itemNodes = this.props.data.map(function (item){
      return (
          <Item itemName={item.name} itemPrice={item.price}/>
        );
    });
    return (
        <ul className="itemList">
          {itemNodes}
        </ul>
      );
  }
});

var Item = React.createClass({
	render: function() {
		return (
			<li className="item">
				<span className="itemName">{this.props.itemName}</span>
				<span className="itemPrice">${this.props.itemPrice}</span>
			</li>
		)
	}
})







