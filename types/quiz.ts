export type Quiz = {
  quizId: string
  question: string
  answer: number // 객관식 or OX일 경우 0,1 로 표현
  choices: string[] // length 2일 때 OX
  description: string
}

export const MOCK_QUIZ: Record<string, Quiz> = {
  '1': {
    quizId: '1',
    question:
      '생애주기를 고려한 자산 배분의 원칙에 따르면 위험자산 투자비율은 (100 - 나이)이다.',
    answer: 0,
    choices: ['0', '1'],
    description:
      '생애주기를 고려한 자산배분의 원칙에 따르면100에서 자신의 나이를 뺀 숫자만큼 위험자산에 투자하는걸 추천해요. 만약 내가 28살이라면, 100-28 = 72가 되므로 72% 정도를 위험자산에 투자하고 28% 정도를 안전자산에 투자하면 됩니다. 나이가 들어가면서 돈을 쓸 일이 많아지기 때문에 젊었을 때 적극적으로 투자하는 것이 좋습니다.',
  },
  '2': {
    quizId: '2',
    question: '투자자산의 종류에 따라 위험도가 다르다.',
    answer: 1,
    choices: ['0', '1'],
    description:
      '투자자산의 종류에 따라 위험도가 다릅니다. 주식은 위험도가 높고, 채권은 위험도가 낮습니다.',
  },
  '3': {
    quizId: '3',
    question: '주식은 안전한 투자수단이다.',
    answer: 0,
    choices: ['0', '1'],
    description:
      '주식은 안전한 투자수단이 아닙니다. 주식은 투자금액의 일부 또는 전부를 잃을 수 있으며, 투자자의 자산가치가 변동할 수 있습니다.',
  },
}
