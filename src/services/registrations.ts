import { api } from "./api"

export const getRegistrations = async () => {
  try {
    const response = await api.get(
      'http://localhost:3000/registrations',
    )
    
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter os dados da API')
  }
}

export const updateRegistration = async (registrationId: number, updatedData: any) => {
  try {
    const response = await api.put(
      `http://localhost:3000/registrations/${registrationId}`,
      updatedData,
    )

    return response.data
  } catch (error) {
    throw new Error('Erro ao atualizar os dados da API')
  }
}

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