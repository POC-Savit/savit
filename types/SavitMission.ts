export type SavitMission =
  | {
      type: 'mission'
      text: string
      isComplete: boolean
      missionId: string
    }
  | {
      type: 'quiz'
      text: string
      currentQuizCount: number
      totalQuizCount: number
      quizsIds: string[]
    }

export type Mission = {
  missionId: string
  missionName?: string
}
