import { api } from "./api"

export const getRegistrations = async (cpf?: string) => {
  
  try {
    const response = await api.get(
      `http://localhost:3000/registrations?cpf=${cpf ? cpf : ''}`,
    )

    const registrations = response.data;

    if (cpf) {
      const filteredRegistrations = registrations.filter((registration: any) => {
        return registration.cpf === cpf
      } );
      
      return filteredRegistrations;
    }

    return registrations;
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

export const refetchRegistrations = async () => {
  try {
    const registrations = await getRegistrations()
    console.log('refetched registrations: ', registrations);
    
    return registrations
  } catch (error) {
    throw new Error('Erro ao refetch os dados da API')
  }
}