System.register(['./phone.factory', './checkmark.filter'], function(exports_1) {
    var phone_factory_1, checkmark_filter_1;
    return {
        setters:[
            function (phone_factory_1_1) {
                phone_factory_1 = phone_factory_1_1;
            },
            function (checkmark_filter_1_1) {
                checkmark_filter_1 = checkmark_filter_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.core', ['ngResource'])
                .factory('Phone', phone_factory_1.default)
                .filter('checkmark', checkmark_filter_1.default));
            ;
        }
    }
});
//# sourceMappingURL=core.module.js.map