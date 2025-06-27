import { Question } from '@/domain/forum/enterprise/entities/question'

export interface QuestionsRepository {
  save(question: Question): Promise<void>
  findById(questionId: string): Promise<Question | null>
  findBySlug(slug: string): Promise<Question | null>
  delete(question: Question): Promise<void>
  create(question: Question): Promise<void>
}
