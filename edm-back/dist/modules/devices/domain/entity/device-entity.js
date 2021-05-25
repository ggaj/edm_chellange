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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Device_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const category_entity_1 = __importDefault(require("./../../../categories/domain/entity/category-entity"));
let Device = Device_1 = class Device {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Device.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 16 }),
    __metadata("design:type", String)
], Device.prototype, "color", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Device.prototype, "partNumber", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Device.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Device.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(type => category_entity_1.default, devices => Device_1),
    typeorm_1.JoinColumn(),
    __metadata("design:type", category_entity_1.default)
], Device.prototype, "category", void 0);
Device = Device_1 = __decorate([
    typeorm_1.Entity('devices')
], Device);
exports.default = Device;
//# sourceMappingURL=device-entity.js.map