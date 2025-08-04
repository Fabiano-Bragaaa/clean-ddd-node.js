import { makeQuestionComment } from 'test/factories/make-question-comment'
import { FetchQuestionCommentUseCase } from '../fetch-question-comment'
import { InMemoryQuestionCommentRepository } from 'test/repositories/in-memery-question-comment-repository'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryQuestionCommentRepository: InMemoryQuestionCommentRepository
let sut: FetchQuestionCommentUseCase
describe('Fetch Questions Comment Use Case', () => {
  beforeEach(() => {
    inMemoryQuestionCommentRepository = new InMemoryQuestionCommentRepository()
    sut = new FetchQuestionCommentUseCase(inMemoryQuestionCommentRepository)
  })
  it('should be able to fetch questions comments ', async () => {
    await inMemoryQuestionCommentRepository.create(
      makeQuestionComment({
        questionId: new UniqueEntityId('question-1'),
      }),
    )
    await inMemoryQuestionCommentRepository.create(
      makeQuestionComment({
        questionId: new UniqueEntityId('question-1'),
      }),
    )
    await inMemoryQuestionCommentRepository.create(
      makeQuestionComment({
        questionId: new UniqueEntityId('question-1'),
      }),
    )

    const result = await sut.execute({
      questionId: 'question-1',
      page: 1,
    })

    expect(result.value?.questionComment).toHaveLength(3)
  })
  it('should be able to fetch paginated question question comment', async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryQuestionCommentRepository.create(
        makeQuestionComment({
          questionId: new UniqueEntityId('question-1'),
        }),
      )
    }

    const result = await sut.execute({
      questionId: 'question-1',
      page: 2,
    })

    expect(result.value?.questionComment).toHaveLength(2)
  })
})
