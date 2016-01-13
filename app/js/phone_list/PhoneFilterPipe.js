System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PhoneFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PhoneFilterPipe = (function () {
                function PhoneFilterPipe() {
                }
                PhoneFilterPipe.prototype.transform = function (input, args) {
                    var query = args[0];
                    if (query) {
                        return input.filter(function (phone) {
                            var name = phone.name.toLowerCase();
                            var snippet = phone.snippet.toLowerCase();
                            return name.indexOf(query) >= 0 || snippet.indexOf(query) >= 0;
                        });
                    }
                    else {
                        return input;
                    }
                };
                PhoneFilterPipe = __decorate([
                    core_1.Pipe({ name: 'phoneFilter' }), 
                    __metadata('design:paramtypes', [])
                ], PhoneFilterPipe);
                return PhoneFilterPipe;
            })();
            exports_1("default", PhoneFilterPipe);
        }
    }
});
//# sourceMappingURL=PhoneFilterPipe.js.map