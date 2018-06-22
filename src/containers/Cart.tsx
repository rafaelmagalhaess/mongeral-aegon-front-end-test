import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions';
import Cart from '../components/Cart';
import { IProduct, IStoreState } from '../types';

export function mapStateToProps({ items, total }: IStoreState) {
    return {
        items,
        total
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ShoppingAction>) {
    return {
        removeProduct: (product: IProduct) => dispatch(actions.removeProduct(product))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);