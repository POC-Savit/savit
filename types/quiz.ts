export type Quiz = {
  quizId: string
  question: string
  answerIdx: number // choices의 index
  choices: string[] // length 2일 때 OX
  description: string
}

export const MOCK_QUIZ: Record<string, Quiz> = {
  '1': {
    quizId: '1',
    question: '저축 배분을 할 때 가장 중요한 것은 목표를 설정하는 것이다.',
    answerIdx: 0,
    choices: ['O', 'X'],
    description:
      '저축을 배분할 때 가장 중요한 첫 단계는 목표를 설정하는 것입니다. 명확한 목표가 있어야 그에 맞는 전략을 세울 수 있습니다.',
  },
  '2': {
    quizId: '2',
    question:
      '단기 목표를 위해 저축할 때, 높은 수익률을 추구하는 것이 항상 더 좋은 선택이다.',
    answerIdx: 1,
    choices: ['O', 'X'],
    description:
      '단기 목표를 위해서는 높은 수익률보다 안정성이 더 중요합니다. 변동성이 적은 안전한 자산에 투자하는 것이 더 적합합니다.',
  },
  '3': {
    quizId: '3',
    question:
      '수익률을 계산할 때, 단순히 이익만 계산하면 정확한 수익을 알 수 있다.',
    answerIdx: 1,
    choices: ['O', 'X'],
    description:
      '수익률을 정확히 계산하기 위해서는 초기 투자 금액, 기간, 그리고 수익에 대한 다양한 요인을 고려해야 합니다. 단순한 이익만으로는 정확한 수익률을 알 수 없습니다.',
  },
  '4': {
    quizId: '4',
    question:
      '나의 총 수익은 수익률이 일정하다면 기간이 길수록 더 많이 쌓일 가능성이 크다.',
    answerIdx: 0,
    choices: ['O', 'X'],
    description:
      '수익률이 일정하다면 시간이 지남에 따라 복리 효과가 발생하여 총 수익이 증가할 가능성이 큽니다. 장기적으로 투자하면 수익이 더 많이 쌓일 수 있습니다.',
  },
  '5': {
    quizId: '5',
    question:
      '생애주기를 고려한 자산 배분의 원칙에 따르면 위험자산 투자비율은 (100 - 나이)이다.',
    answerIdx: 0,
    choices: ['0', '1'],
    description:
      '생애주기를 고려한 자산배분의 원칙에 따르면100에서 자신의 나이를 뺀 숫자만큼 위험자산에 투자하는걸 추천해요. 만약 내가 28살이라면, 100-28 = 72가 되므로 72% 정도를 위험자산에 투자하고 28% 정도를 안전자산에 투자하면 됩니다. 나이가 들어가면서 돈을 쓸 일이 많아지기 때문에 젊었을 때 적극적으로 투자하는 것이 좋습니다.',
  },
  '6': {
    quizId: '6',
    question: '투자자산의 종류에 따라 위험도가 다르다.',
    answerIdx: 1,
    choices: ['0', '1'],
    description:
      '투자자산의 종류에 따라 위험도가 다릅니다. 주식은 위험도가 높고, 채권은 위험도가 낮습니다.',
  },
  '7': {
    quizId: '7',
    question: '주식은 안전한 투자수단이다.',
    answerIdx: 0,
    choices: ['0', '1'],
    description:
      '주식은 안전한 투자수단이 아닙니다. 주식은 투자금액의 일부 또는 전부를 잃을 수 있으며, 투자자의 자산가치가 변동할 수 있습니다.',
  },
  '8': {
    quizId: '8',
    question: '주거래 은행을 선택할 때 가장 중요한 요소는 금리이다.',
    answerIdx: 1,
    choices: ['O', 'X'],
    description:
      '주거래 은행을 선택할 때는 금리뿐만 아니라 서비스 품질, 접근성, 수수료, 금융상품 혜택 등 다양한 요소를 고려해야 합니다.',
  },
  '9': {
    quizId: '9',
    question:
      '주거래 은행을 결정할 때는 본인의 생활 패턴과 금융 요구 사항을 잘 반영해야 한다.',
    answerIdx: 0,
    choices: ['O', 'X'],
    description:
      '주거래 은행을 선택할 때 본인의 생활 패턴, 금융 거래 빈도, 필요 서비스 등을 고려하면 더 효율적인 금융 생활을 할 수 있습니다.',
  },
}
