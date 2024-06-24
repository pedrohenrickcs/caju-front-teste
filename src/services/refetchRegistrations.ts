import { getRegistrations } from "./getRegistrations"

export const refetchRegistrations = async () => {
  try {
    const registrations = await getRegistrations()
    
    return registrations
  } catch (error) {
    throw new Error('Erro ao refetch os dados da API')
  }
}