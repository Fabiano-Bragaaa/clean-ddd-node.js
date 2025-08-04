import { InMemoryQuestionRepository } from 'test/repositories/in-memory-question-repository'
import { GetQuestionBySlugUseCase } from '../get-question-by-slug'
import { makeQuestion } from 'test/factories/make-question'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: GetQuestionBySlugUseCase
describe('Get Question by Slug Use Case', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionRepository)
  })
  it('should be able to get a question with slug param', async () => {
    const newQuestion = makeQuestion({ title: 'Example Question' })

    await inMemoryQuestionRepository.create(newQuestion)

    const result = await sut.execute({
      slug: 'example-question',
    })

    if (result.isRight()) {
      expect(result.value.question.title).toEqual('Example Question')
    }
  })
})
