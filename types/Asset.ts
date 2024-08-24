export interface Asset {
  savingAsset: SavingAsset[]
  stockAsset: StockAsset[]
}

export interface StockAsset {
  amount: number
  name: string
}

export interface SavingAsset {
  balance: number
  name: string
}
