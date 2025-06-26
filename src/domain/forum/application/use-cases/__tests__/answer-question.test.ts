import { AnswerQuestionUseCase } from '../answer-question'
import { AnswersRepository } from '../../repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

const fakeAnswersRepository: AnswersRepository = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create: async (answer: Answer) => {},
}

it('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    intructorId: '1',
    questionId: '1',
    content: 'some response',
  })

  expect(answer.content).toEqual('some response')
})
