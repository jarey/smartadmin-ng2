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
var core_1 = require('@angular/core');
var ActivitiesNotificationComponent = (function () {
    function ActivitiesNotificationComponent() {
    }
    ActivitiesNotificationComponent.prototype.ngOnInit = function () {
    };
    ActivitiesNotificationComponent.prototype.setClasses = function () {
        var classes = {
            'fa fa-fw fa-2x': true
        };
        classes[this.item.icon] = true;
        return classes;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ActivitiesNotificationComponent.prototype, "item", void 0);
    ActivitiesNotificationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sa-activities-notification',
            templateUrl: 'activities-notification.component.html',
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], ActivitiesNotificationComponent);
    return ActivitiesNotificationComponent;
}());
exports.ActivitiesNotificationComponent = ActivitiesNotificationComponent;
//# sourceMappingURL=activities-notification.component.js.map