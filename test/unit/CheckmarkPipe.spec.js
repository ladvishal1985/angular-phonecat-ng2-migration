System.register(['angular2/testing', '../../app/js/core/CheckmarkPipe'], function(exports_1) {
    var testing_1, CheckmarkPipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (CheckmarkPipe_1_1) {
                CheckmarkPipe_1 = CheckmarkPipe_1_1;
            }],
        execute: function() {
            testing_1.describe('CheckmarkPipe', function () {
                testing_1.beforeEachProviders(function () { return [CheckmarkPipe_1.CheckmarkPipe]; });
                testing_1.it('should convert boolean values to unicode checkmark or cross', testing_1.inject([CheckmarkPipe_1.CheckmarkPipe], function (checkmarkPipe) {
                    testing_1.expect(checkmarkPipe.transform(true)).toBe('\u2713');
                    testing_1.expect(checkmarkPipe.transform(false)).toBe('\u2718');
                }));
            });
        }
    }
});
//# sourceMappingURL=CheckmarkPipe.spec.js.map