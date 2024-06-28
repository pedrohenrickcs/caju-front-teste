import { api } from "./api"

export const updateRegistration = async (registrationId: number, updatedData: any) => {
  try {
    const response = await api.put(
      `/registrations/${registrationId}`,
      updatedData,
    )

    return response.data
  } catch (error) {
    throw new Error('Erro ao atualizar os dados da API')
  }
}