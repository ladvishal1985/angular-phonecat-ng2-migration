System.register(['./PhoneDetail', '../core/upgrade_adapter'], function(exports_1) {
    var PhoneDetail_1, upgrade_adapter_1;
    return {
        setters:[
            function (PhoneDetail_1_1) {
                PhoneDetail_1 = PhoneDetail_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.detail', ['ngRoute', 'phonecat.core'])
                .directive('pcPhoneDetail', upgrade_adapter_1.default.downgradeNg2Component(PhoneDetail_1.default)));
        }
    }
});
//# sourceMappingURL=phone_detail.module.js.map