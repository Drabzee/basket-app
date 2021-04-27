import { connect } from 'react-redux'
import ItemsList from '../components/ItemsList'
import { toggleItemPurchase } from '../redux/actions';

const All = ({basketList, toggleItemPurchase}) => {
  return (
    <ItemsList
      title = "Basket"
      icon = "shopping-basket"
      list = {basketList}
      type = "remove"
      onClickHandler = {toggleItemPurchase} />
  )
}

const mapStateToProps = state => ({
  basketList: state.basketList
});

const mapDispatchToProps = dispatch => ({
  toggleItemPurchase: (id) => dispatch(toggleItemPurchase(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(All)
