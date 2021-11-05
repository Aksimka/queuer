import QueueBadge from '@/types/queues'

type Queue = {
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
