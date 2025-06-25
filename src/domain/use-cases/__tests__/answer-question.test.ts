import {expect, it} from 'vitest'
import { AnswerQuestionUseCase } from '../answer-question'

it('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    intructorId: '1',
    questionId: '1',
    content: 'some response'
  })

  expect(answer.content).toEqual('some response')
})