System.register(['../../app/js/core/core.module'], function(exports_1) {
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            describe('phoneFactory', function () {
                beforeEach(angular.mock.module('phonecat.core'));
                it('check the existence of Phone factory', inject(function (Phone) {
                    expect(Phone).toBeDefined();
                }));
            });
        }
    }
});
//# sourceMappingURL=phone.factory.spec.js.map