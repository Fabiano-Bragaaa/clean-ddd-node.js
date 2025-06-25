import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"

interface AnswerQuestionUseCaseRequest {
  intructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {

  constructor (private answersRepository: AnswersRepository) {}

  async execute({intructorId, questionId, content}:AnswerQuestionUseCaseRequest){
    const answer = new Answer({content, authorId: intructorId, questionId})

    await this.answersRepository.create(answer)

    return answer
  }
}