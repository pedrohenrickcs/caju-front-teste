import { api } from "./api"

export const deleteRegistration = async (registrationId: number) => {
  try {
    const response = await api.put(
      `http://localhost:3000/registrations/${registrationId}`
    )
    
    return response.data
  } catch (error) {
    throw new Error('Erro ao atualizar os dados da API')
  }
}