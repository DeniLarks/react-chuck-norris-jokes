export interface IActionDefault {
  type: string
}

export interface IActionSagaRandomFact extends IActionDefault {
  category: string
}

export interface IActionRandomFact extends IActionDefault {
  payload: IFact
}

export interface IActionCategories extends IActionDefault {
  payload: string[]
} 

export interface IFact {
  icon: string
  id: string
  url?: string
  value: string
  translateValue?: string
}


export interface IStateFacts {
  facts: IFact[] | null,
  randomFact: IFact | null
  categories: string[]
}

export interface IState {
  facts: IStateFacts
}