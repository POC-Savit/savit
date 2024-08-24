export interface Asset {
    stockAsset: StockAsset[],
    savingAsset: SavingAsset[],
}

export interface StockAsset {
    name: string,
    amount: number
    

}

export interface SavingAsset {
    name: string,
    balance: number
}