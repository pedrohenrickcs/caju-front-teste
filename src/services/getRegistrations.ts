import { api } from "./api"

export const getRegistrations = async () => {
  try {
    const response = await api.get(
      `http://localhost:3000/registrations`,
    )

    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter os dados da API')
  }
}

export const getSearchRegistrations = async (cpf?: string) => {
  try {
    const response = await api.get(
      `http://localhost:3000/registrations?cpf=${cpf}`,
    )

    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter os dados da API')
  }
}