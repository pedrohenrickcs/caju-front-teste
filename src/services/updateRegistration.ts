import { api } from "./api"

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