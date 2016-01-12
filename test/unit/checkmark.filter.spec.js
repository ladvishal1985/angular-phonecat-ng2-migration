System.register(['../../app/js/core/core.module'], function(exports_1) {
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            /* jasmine specs for filters go here */
            describe('checkmarkFilter', function () {
                beforeEach(angular.mock.module('phonecat.core'));
                it('should convert boolean values to unicode checkmark or cross', inject(function (checkmarkFilter) {
                    expect(checkmarkFilter(true)).toBe('\u2713');
                    expect(checkmarkFilter(false)).toBe('\u2718');
                }));
            });
        }
    }
});
//# sourceMappingURL=checkmark.filter.spec.js.map