import initialState from '../../state/initialState';

describe('Product tests', () => {
    it('products are defined', () => {
        const productList = initialState.availableGroceryList !=undefined && initialState.availableGroceryList !=null;
        expect(productList).toBe(true);
      });
    it('initially there should be few products available', () => {
        const productsCount = initialState.availableGroceryList.length;
        expect(productsCount).toBeGreaterThanOrEqual(1);
      });
});