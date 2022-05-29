export interface QueueBadge {
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

export type Queue = {
  id: number
  name: string
  images: string[]
  description: string
  peopleCount: number
  badges: QueueBadge[]
  stars: string
  price: {
    count: string
    currency: string
  }
}

export default Queue
