import { LessonsRepository } from "../repositories/LessonsRepository";

interface CreateLessonRequest {
  title: string;
  description?: string;
}

export class CreateLesson {
  constructor(private lessonsRepository: LessonsRepository) {}
  async execute({ title, description }: CreateLessonRequest) {
    // verificar se já existe uma lesson

    if (!title) {
      throw new Error("Title is required");
    }
    await this.lessonsRepository.create({
      title,
      description,
    });
  }
}
