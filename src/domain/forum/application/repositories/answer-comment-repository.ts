import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentRepository {
  findById(id: string): Promise<AnswerComment | null>
  delete(answer: AnswerComment): Promise<void>
  create(answer: AnswerComment): Promise<void>
}
