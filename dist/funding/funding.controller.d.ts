import { Funding } from './funding.model';
import { FundingService } from './funding.service';
import { CreateFundingDto } from './dto/create-funding.dto';
export declare class FundingController {
    private fundingService;
    constructor(fundingService: FundingService);
    getAllFunding(): Funding[];
    createFunding(createFundingDto: CreateFundingDto): Funding;
}
