import { AnswersRepository } from '../repositories/answers-repository'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { AnswerCommentRepository } from '../repositories/answer-comment-repository'

interface CommentOnAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

interface CommentOnAnswerUseCaseResponse {
  answerComment: AnswerComment
}

export class CommentOnAnswerUseCase {
  constructor(
    private answerRepository: AnswersRepository,
    private answerCommentRepository: AnswerCommentRepository,
  ) {}

  async execute({
    authorId,
    content,
    answerId,
  }: CommentOnAnswerUseCaseRequest): Promise<CommentOnAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found')
    }

    const answerComment = AnswerComment.create({
      authorId: new UniqueEntityId(authorId),
      answerId: new UniqueEntityId(answerId),
      content,
    })
    await this.answerCommentRepository.create(answerComment)

    return {
      answerComment,
    }
  }
}
