import { InMemoryAnswerRepository } from 'test/repositories/in-memory-answer-repository'
import { makeAnswer } from 'test/factories/make-answer'
import { CommentOnAnswerUseCase } from '../comment-on-answer'
import { InMemoryAnswerCommentRepository } from 'test/repositories/in-memory-answer-comment-repository'

let inMemoryAnswerRepository: InMemoryAnswerRepository
let inMemoryAnswerCommentRepository: InMemoryAnswerCommentRepository
let sut: CommentOnAnswerUseCase

describe('Comment on answer Use Case', () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswerRepository()
    inMemoryAnswerCommentRepository = new InMemoryAnswerCommentRepository()
    sut = new CommentOnAnswerUseCase(
      inMemoryAnswerRepository,
      inMemoryAnswerCommentRepository,
    )
  })

  it('should be able to comment on answer', async () => {
    const answer = makeAnswer()

    await inMemoryAnswerRepository.create(answer)

    await sut.execute({
      answerId: answer.id.toString(),
      authorId: answer.authorId.toString(),
      content: 'comentario teste',
    })

    expect(inMemoryAnswerCommentRepository.items[0].content).toEqual(
      'comentario teste',
    )
  })
})
