export type SavitMission =
  | {
      type: 'mission'
      text: string
      isComplete: boolean
    }
  | {
      type: 'quiz'
      text: string
      currentQuizCount: number
      totalQuizCount: number
      quizsIds: string[]
    }
