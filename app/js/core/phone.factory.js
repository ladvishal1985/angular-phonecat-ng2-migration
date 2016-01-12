System.register([], function(exports_1) {
    function Phone($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
        });
    }
    exports_1("default", Phone);
    return {
        setters:[],
        execute: function() {
            Phone.$inject = ['$resource'];
        }
    }
});
//# sourceMappingURL=phone.factory.js.map