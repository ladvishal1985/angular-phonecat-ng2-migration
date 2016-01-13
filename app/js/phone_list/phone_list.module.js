System.register(['./PhoneList', '../core/upgrade_adapter'], function(exports_1) {
    var PhoneList_1, upgrade_adapter_1;
    return {
        setters:[
            function (PhoneList_1_1) {
                PhoneList_1 = PhoneList_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.list', ['phonecat.core'])
                .directive('pcPhoneList', upgrade_adapter_1.default.downgradeNg2Component(PhoneList_1.default)));
        }
    }
});
//# sourceMappingURL=phone_list.module.js.map