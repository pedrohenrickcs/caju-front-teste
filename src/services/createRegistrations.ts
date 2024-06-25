import { api } from "./api";

export const createRegistrations = async (formData: any) => {
  console.log('form data: ', formData);
  
  try {
    const response = await api.post('http://localhost:3000/registrations', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao enviar o formulário');
  }
};