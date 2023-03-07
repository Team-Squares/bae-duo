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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundingController = void 0;
const common_1 = require("@nestjs/common");
const funding_service_1 = require("./funding.service");
const create_funding_dto_1 = require("./dto/create-funding.dto");
let FundingController = class FundingController {
    constructor(fundingService) {
        this.fundingService = fundingService;
    }
    getAllFunding() {
        return this.fundingService.getAllFundings();
    }
    createFunding(createFundingDto) {
        return this.fundingService.createFunding(createFundingDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], FundingController.prototype, "getAllFunding", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_funding_dto_1.CreateFundingDto]),
    __metadata("design:returntype", Object)
], FundingController.prototype, "createFunding", null);
FundingController = __decorate([
    (0, common_1.Controller)('funding'),
    __metadata("design:paramtypes", [funding_service_1.FundingService])
], FundingController);
exports.FundingController = FundingController;
//# sourceMappingURL=funding.controller.js.map