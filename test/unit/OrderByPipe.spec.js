System.register(['angular2/testing', '../../app/js/phone_list/OrderByPipe'], function(exports_1) {
    var testing_1, OrderByPipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (OrderByPipe_1_1) {
                OrderByPipe_1 = OrderByPipe_1_1;
            }],
        execute: function() {
            testing_1.describe('OrderByPipe', function () {
                var input = [
                    { name: 'Nexus S', snippet: 'The Nexus S Phone', images: [] },
                    { name: 'Motorola DROID', snippet: 'An Android-for-business smartphone', images: [] }
                ];
                testing_1.beforeEachProviders(function () { return [OrderByPipe_1.default]; });
                testing_1.it('should order by the given property', testing_1.inject([OrderByPipe_1.default], function (orderByPipe) {
                    expect(orderByPipe.transform(input, ['name'])).toEqual([input[1], input[0]]);
                }));
            });
        }
    }
});
//# sourceMappingURL=OrderByPipe.spec.js.map