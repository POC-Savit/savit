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
    }

// mock data
export const MockSavitMissions: SavitMission[] = [
  {
    type: 'mission',
    text: '저축 배분 목표 정하기',
    isComplete: true,
  },
  {
    type: 'quiz',
    text: '금융지식 퀴즈',
    currentQuizCount: 2,
    totalQuizCount: 3,
  },
]
