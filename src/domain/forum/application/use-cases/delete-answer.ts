import { AnswersRepository } from '../repositories/answers-repository'

interface DeleteAnswerUseCaseRequest {
  answerId: string
  authorId: string
}

interface DeleteAnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private AnswerRepository: AnswersRepository) {}

  async execute({
    answerId,
    authorId,
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const Answer = await this.AnswerRepository.findById(answerId)

    if (!Answer) {
      throw new Error('Answer not found.')
    }

    if (authorId !== Answer.authorId.toString()) {
      throw new Error('Not allowed')
    }

    await this.AnswerRepository.delete(Answer)

    return {}
  }
}
