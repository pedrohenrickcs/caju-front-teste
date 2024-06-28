import { useState, useCallback, useEffect } from 'react';
import { RegistrationData } from '~/types/RegistrationCard';

export const useSearch = (registrations: RegistrationData[], setFilteredRegistrations: (registrations: RegistrationData[]) => void) => {
  const [cpf, setCpf] = useState('');

  const handleSearch = useCallback((searchCpf: string) => {
    setCpf(searchCpf);
  }, []);

  useEffect(() => {
    if (cpf) {
      const filtered = registrations.filter(reg => reg.cpf.replace(/\D/g, '').includes(cpf.replace(/\D/g, '')));
      setFilteredRegistrations(filtered);
    } else {
      setFilteredRegistrations(registrations);
    }
  }, [cpf, registrations, setFilteredRegistrations]);

  return { handleSearch };
};
