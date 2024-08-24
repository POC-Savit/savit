/* eslint-disable */
import { SavitMission } from './SavitMission'

export type SavitLevel = {
  level: number
  name: string
  missions: SavitMission[]
  group: LevelGroup
}

export type LevelGroupKey =
    | 'MyAsset' // 나의 자산 파헤치기
    | 'ShortTermGoal' // 단기 목표 설정하기 - 적금
    | 'MidTermGoal' // 중기 목표 설정하기 - 청약 투자
    | 'LongTermGoal' // 장기 목표 설정하기 - 연금

export type LevelGroup = {
  key: LevelGroupKey
  title: string
}

export const MockLevelGroup: Record<LevelGroupKey, LevelGroup> = {
  MyAsset: {
    key: 'MyAsset',
    title: '나의 자산 파헤치기',
  },
  ShortTermGoal: {
    key: 'ShortTermGoal',
    title: '단기 목표 설정하기 - 적금',
  },
  MidTermGoal: {
    key: 'MidTermGoal',
    title: '중기 목표 설정하기 - 청약 투자',
  },
  LongTermGoal: {
    key: 'LongTermGoal',
    title: '장기 목표 설정하기 - 연금',
  },
}

export const MockSavitLevels: SavitLevel[] = [
  {
    level: 1,
    name: 'Savit 시작하기',
    missions: [
      {
        type: 'mission',
        text: '저축 배분 목표 정하기',
        isComplete: false,
        missionId: '1',
      }
    ],
    group: MockLevelGroup.MyAsset
  },
  {
    level: 2,
    name: '나의 수익 알아보기',
    missions: [
      {
        type: 'mission',
        text: '나의 수익 알아보기',
        isComplete: false,
        missionId: 'none',
      }
    ],
    group: MockLevelGroup.MyAsset
  },
  {
    level: 3,
    name: '나의 소비 알아보기',
    missions: [
      {
        type: 'mission',
        text: '저축 배분 목표 정하기',
        isComplete: false,
        missionId: 'none',
      },
      {
        type: 'quiz',
        text: '금융지식 퀴즈',
        currentQuizCount: 1,
        totalQuizCount: 3,
        quizsIds: ['1', '2', '3'],
      },
    ],
    group: MockLevelGroup.MyAsset
  },
  {
    level: 4,
    name: '나의 저축 배분 목표 설정하기',
    missions: [],
    group: MockLevelGroup.MyAsset
  },
  {
    level: 5,
    name: '나의 주거래 은행 정하기',
    missions: [],
    group: MockLevelGroup.MyAsset
  },
  {
    level: 6,
    name: '적금 계좌 만들기',
    missions: [],
    group: MockLevelGroup.ShortTermGoal
  },
  {
    level: 7,
    name: '저축 단기목표 설정하기',
    missions: [],
    group: MockLevelGroup.ShortTermGoal
  },
  {
    level: 8,
    name: '적금 시작하기',
    missions: [],
    group: MockLevelGroup.ShortTermGoal
  },
  {
    level: 9,
    name: '자동이체 계좌 설정하기',
    missions: [],
    group: MockLevelGroup.ShortTermGoal
  },
  {
    level: 10,
    name: '적금 추가하기',
    missions: [],
    group: MockLevelGroup.ShortTermGoal
  },
  {
    level: 11,
    name: '증권 계좌 만들기 (CMA)',
    missions: [],
    group: MockLevelGroup.MidTermGoal
  },
  {
    level: 12,
    name: '주택 청약 계좌 만들기',
    missions: [],
    group: MockLevelGroup.MidTermGoal
  },
  {
    level: 13,
    name: '연금 펀드 만들기',
    missions: [],
    group: MockLevelGroup.LongTermGoal
  },
  {
    level: 14,
    name: 'IRP 계좌 만들기',
    missions: [],
    group: MockLevelGroup.LongTermGoal
  },
]