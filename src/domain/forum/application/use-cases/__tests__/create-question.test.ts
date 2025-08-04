import { CreateQuestionUseCase } from '../create-question'
import { InMemoryQuestionRepository } from 'test/repositories/in-memory-question-repository'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: CreateQuestionUseCase
describe('Create Question Use Case', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionRepository)
  })
  it('create an answer', async () => {
    const result = await sut.execute({
      authorId: '1',
      title: 'some title',
      content: 'some response',
    })

    expect(result.isRight()).toBeTruthy()
  })
})
