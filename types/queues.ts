export default interface QueueBadge {
  emoji: string
  description: string
}

export interface QueueCard {
  id: number
  name: string
  imagePath: string
  description: string
  peopleCount: number
  badges: QueueBadge[]
}
