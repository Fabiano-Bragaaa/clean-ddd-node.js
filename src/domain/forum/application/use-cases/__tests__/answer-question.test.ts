import { AnswerQuestionUseCase } from '../answer-question'
import { InMemoryAnswerRepository } from 'test/repositories/in-memory-answer-repository'

let inMemoryAnswersRepository: InMemoryAnswerRepository
let sut: AnswerQuestionUseCase

describe('Create Question Use Case', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswerRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('create an answer', async () => {
    const { answer } = await sut.execute({
      intructorId: '1',
      questionId: '1',
      content: 'some response',
    })

    expect(answer.id).toBeTruthy()
  })
})
