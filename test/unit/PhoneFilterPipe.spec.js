System.register(['angular2/testing', '../../app/js/phone_list/PhoneFilterPipe'], function(exports_1) {
    var testing_1, PhoneFilterPipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (PhoneFilterPipe_1_1) {
                PhoneFilterPipe_1 = PhoneFilterPipe_1_1;
            }],
        execute: function() {
            testing_1.describe('PhoneFilterPipe', function () {
                var phones = [
                    { name: 'Nexus S', snippet: 'The Nexus S Phone', images: [] },
                    { name: 'Motorola DROID', snippet: 'an Android-for-business smartphone', images: [] }
                ];
                testing_1.beforeEachProviders(function () { return [PhoneFilterPipe_1.default]; });
                testing_1.it('should return input when no query', testing_1.inject([PhoneFilterPipe_1.default], function (phoneFilterPipe) {
                    expect(phoneFilterPipe.transform(phones, [])).toEqual(phones);
                }));
                testing_1.it('should match based on name', testing_1.inject([PhoneFilterPipe_1.default], function (phoneFilterPipe) {
                    expect(phoneFilterPipe.transform(phones, ['nexus'])).toEqual([phones[0]]);
                }));
                testing_1.it('should match based on snippet', testing_1.inject([PhoneFilterPipe_1.default], function (phoneFilterPipe) {
                    expect(phoneFilterPipe.transform(phones, ['android'])).toEqual([phones[1]]);
                }));
            });
        }
    }
});
//# sourceMappingURL=PhoneFilterPipe.spec.js.map