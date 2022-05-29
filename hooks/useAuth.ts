import Request from '@/request/Request'

const useAuth = () => {
  const logIn = () => {
    Request.auth.logInUser({ login: 'Aksimka', password: 'qwe' })
  }

  return { logIn }
}

export default useAuth
