import { InMemoryQuestionCommentRepository } from 'test/repositories/in-memery-question-comment-repository'
import { DeleteQuestionCommentUseCase } from '../delete-question-comment'
import { makeQuestionComment } from 'test/factories/make-question-comment'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryQuestionCommentRepository: InMemoryQuestionCommentRepository
let sut: DeleteQuestionCommentUseCase

describe('Delete question comment Use Case', () => {
  beforeEach(() => {
    inMemoryQuestionCommentRepository = new InMemoryQuestionCommentRepository()
    sut = new DeleteQuestionCommentUseCase(inMemoryQuestionCommentRepository)
  })

  it('should be able to delete question comment', async () => {
    const question = makeQuestionComment()

    await inMemoryQuestionCommentRepository.create(question)

    await sut.execute({
      questionCommentId: question.id.toString(),
      authorId: question.authorId.toString(),
    })

    expect(inMemoryQuestionCommentRepository.items).toHaveLength(0)
  })
  it('should not be able to delete another user question comment', async () => {
    const question = makeQuestionComment({
      authorId: new UniqueEntityId('author-1'),
    })

    await inMemoryQuestionCommentRepository.create(question)

    expect(() => {
      return sut.execute({
        questionCommentId: question.id.toString(),
        authorId: 'author-2',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
