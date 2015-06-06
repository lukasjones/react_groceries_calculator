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
  			<Item itemName={item.name} itemPrice={item.price} active={item.active} currentStore={storeSelf} basketTotal={storeSelf.state.total} calculateTotal={storeSelf.checkout} addToBasket={storeSelf.addToBasket} removeFromBasket={storeSelf.removeFromBasket}/>
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
            var basket = this.props.currentStore.state.basketItems;
            var inBasketChecker = function(itemName){
              var inBasket = false;
              for (var i = 0; i< basket.length; i++){
                if (basket[i].itemName == itemName){
                  inBasket = true;
                }
              }
              return inBasket;
            };
            console.log(inBasketChecker(item.itemName));
            if (this.props.basketTotal > 0 && inBasketChecker(item.itemName)) {
                  this.props.calculateTotal(-this.props.itemPrice);
      		this.props.removeFromBasket(item);
            }
	},
	render: function() {
		return (
			<div className="item">
				<span className="itemName">
					{this.props.itemName}
					<div className="shelf-add" onClick={this.addClick}>
						<img src="/assets/plus.png" />
					</div>
					<div className="shelf-delete" onClick={this.subtractClick}>
						<img src="/assets/minus.png" />
					</div>
				</span>
				<span className="itemPrice">${this.props.itemPrice.toFixed(2)}</span>
			</div>
		);
	}
})







