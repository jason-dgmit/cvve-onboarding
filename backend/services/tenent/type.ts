export type CreateTenentRequest = {
    id : string;
    businessName : string;
    businessType : string;
    status : string;
    brn : string;
    ceo : string;
    cpo : string;
    address1 : string;
    address2 : string;
    postal : string;
    phone : string;
    createdAt : string;
    updatedAt : string;
}

export type DeleteTenentRequest = {
    sk: string;
}
