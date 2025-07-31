import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { AnswerCommentRepository } from '../repositories/answer-comment-repository'

interface FetchAnswerCommentUseCaseRequest {
  page: number
  answerId: string
}

interface FetchAnswerCommentUseCaseResponse {
  answers: AnswerComment[]
}

export class FetchAnswersCommentUseCase {
  constructor(private answersRepository: AnswerCommentRepository) {}

  async execute({
    answerId,
    page,
  }: FetchAnswerCommentUseCaseRequest): Promise<FetchAnswerCommentUseCaseResponse> {
    const answers = await this.answersRepository.findManyByAnswerId(answerId, {
      page,
    })

    return {
      answers,
    }
  }
}
