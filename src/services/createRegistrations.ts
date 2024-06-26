import { api } from "./api";

export const createRegistrations = async (formData: any) => {
  try {
    const response = await api.post('/registrations', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao enviar o formulário');
  }
};