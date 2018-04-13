"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var network_service_1 = require("../../services/network.service");
var NetworkComponent = /** @class */ (function () {
    function NetworkComponent(networkService) {
        var _this = this;
        this.networkService = networkService;
        this.networks = [];
        //facts = []
        this.dev = {};
        this.networkService.getNetworkTasks()
            .subscribe(function (netTasks) {
            //console.log(netTasks);
            _this.networks = netTasks;
        });
        this.networkService.getNetworkTasks()
            .subscribe(function (add_tab) {
            var facts_infos = Object.values(add_tab);
            for (var _i = 0, facts_infos_1 = facts_infos; _i < facts_infos_1.length; _i++) {
                var fact_info = facts_infos_1[_i];
                //console.log(fact_info)
                var fact_categories = fact_info;
                for (var _a = 0, _b = Object.values(fact_categories); _a < _b.length; _a++) {
                    var fact_category = _b[_a];
                    //console.log(fact_category)
                    var categories_info = fact_category;
                    for (var _c = 0, _d = Object.values(categories_info); _c < _d.length; _c++) {
                        var category_info = _d[_c];
                        console.log(category_info.address_class);
                        console.log(category_info.certificate);
                        console.log(category_info.client_ssl_profile);
                        console.log(category_info.device);
                        _this.dev = category_info.device;
                        //this.dv = Object.values(category_info.device);
                        //console.log(this.dv);
                        console.log(category_info.device_group);
                        console.log(category_info.interface);
                        console.log(category_info.key);
                    }
                }
            }
        });
    }
    NetworkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'network',
            templateUrl: 'network.component.html'
        }),
        __metadata("design:paramtypes", [network_service_1.NetworkService])
    ], NetworkComponent);
    return NetworkComponent;
}());
exports.NetworkComponent = NetworkComponent;
//# sourceMappingURL=network.component.js.map