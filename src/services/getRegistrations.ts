import { api } from "./api"

export const getRegistrations = async () => {
  try {
    const response = await api.get(
      `/registrations`,
    )

    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter os dados da API')
  }
}