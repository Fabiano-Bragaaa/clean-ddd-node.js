import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface QuestionProps {
  authorId :UniqueEntityId
  slug: Slug
  bestAnswerId?: UniqueEntityId
  title: string 
  content: string
  createdAt: Date
  updatedAt?: Date

}

export class Quetion  extends Entity<QuestionProps>{

}