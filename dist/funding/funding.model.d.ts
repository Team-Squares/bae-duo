export interface Funding {
    id: string;
    funding_stater: string;
    funding_brand: string;
    funding_total_price: string;
    funding_price_ing: Int16Array;
    funding_deadtime: Date;
    funding_min_member: Int16Array;
    funding_status: FundingStatus;
    created_at: string;
    updated_at: string;
}
export declare enum FundingStatus {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}
