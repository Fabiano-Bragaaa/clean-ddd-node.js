import { Either, right } from '@/core/either'
import { QuestionComment } from '../../enterprise/entities/question-comment'
import { QuestionsCommentRepository } from '../repositories/question-comment-repository'

interface FetchQuestionCommentUseCaseRequest {
  page: number
  questionId: string
}

type FetchQuestionCommentUseCaseResponse = Either<
  null,
  {
    questionComment: QuestionComment[]
  }
>

export class FetchQuestionCommentUseCase {
  constructor(private questionCommentRepository: QuestionsCommentRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionCommentUseCaseRequest): Promise<FetchQuestionCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentRepository.findManyByQuestionId(questionId, {
        page,
      })

    return right({
      questionComment,
    })
  }
}
