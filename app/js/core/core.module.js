System.register(['./Phones', './checkmark.filter', './upgrade_adapter'], function(exports_1) {
    var Phones_1, checkmark_filter_1, upgrade_adapter_1;
    return {
        setters:[
            function (Phones_1_1) {
                Phones_1 = Phones_1_1;
            },
            function (checkmark_filter_1_1) {
                checkmark_filter_1 = checkmark_filter_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            }],
        execute: function() {
            upgrade_adapter_1.default.addProvider(Phones_1.Phones);
            exports_1("default",angular.module('phonecat.core', [])
                .factory('phones', upgrade_adapter_1.default.downgradeNg2Provider(Phones_1.Phones))
                .filter('checkmark', checkmark_filter_1.default));
        }
    }
});
//# sourceMappingURL=core.module.js.map