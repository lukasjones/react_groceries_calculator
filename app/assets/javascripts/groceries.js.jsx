var ShelfItems = React.createClass({
	loadShelf: function(){
		$.ajax({
			url: "/groceries/shelf",
			dataType: 'json',
			type: 'get',
			success: function(items)	{
				this.setState({items: items});
			}.bind(this),
			error: function(items){
				console.log('didn\'t work');
			}
		});
	},
	getInitialState: function(){
		return {items: []};
	},
	componentDidMount: function(){
		this.loadShelf();
	},
  render: function() {
    return (
      <div className="shelfDisplay">
      	<h1>The Shelf</h1>
      	<ul>
	        <Item itemName="Pasta" itemPrice="22.95" />
	        <Item itemName="Pasta" itemPrice="22.95" />
        </ul>
      </div>
    );
  }
});

var Item = React.createClass({
	render: function() {
		return (
			<li className="item">
				<span className="itemName">{this.props.itemName}</span>
				<span className="itemPrice">{this.props.itemPrice}</span>
			</li>	
		)
	}
})







