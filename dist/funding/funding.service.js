"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundingService = void 0;
const common_1 = require("@nestjs/common");
const funding_model_1 = require("./funding.model");
const uuid_1 = require("uuid");
let FundingService = class FundingService {
    constructor() {
        this.funding = [];
    }
    getAllFundings() {
        return this.funding;
    }
    createFunding(createFundingDto) {
        const { funding_brand, funding_deadtime, funding_min_member, funding_price_ing, funding_stater, funding_total_price, } = createFundingDto;
        const funding = {
            id: (0, uuid_1.v1)(),
            funding_stater,
            funding_brand,
            funding_total_price,
            funding_price_ing,
            funding_deadtime,
            funding_min_member,
            funding_status: funding_model_1.FundingStatus.PUBLIC,
            created_at: Date(),
            updated_at: Date(),
        };
        this.funding.push(funding);
        return funding;
    }
};
FundingService = __decorate([
    (0, common_1.Injectable)()
], FundingService);
exports.FundingService = FundingService;
//# sourceMappingURL=funding.service.js.map