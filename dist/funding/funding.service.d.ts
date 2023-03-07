import { Funding } from './funding.model';
import { CreateFundingDto } from './dto/create-funding.dto';
export declare class FundingService {
    private funding;
    getAllFundings(): Funding[];
    createFunding(createFundingDto: CreateFundingDto): Funding;
}
