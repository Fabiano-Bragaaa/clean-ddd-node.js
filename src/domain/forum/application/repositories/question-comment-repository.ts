import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionsCommentRepository {
  findById(id: string): Promise<QuestionComment | null>
  create(question: QuestionComment): Promise<void>
  delete(question: QuestionComment): Promise<void>
}
