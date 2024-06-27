import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useCallback, useEffect, useState } from "react";
import Loading from "./components/Loading";
import { api } from "~/services";
import { RegistrationData } from "~/types/RegistrationCard";

const DashboardPage = () => {
  const [registrations, setRegistrations] = useState([])
  const [filteredRegistrations, setFilteredRegistrations] = useState<RegistrationData[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setFilteredRegistrations(registrations);
  }, [registrations]);

  const getData = useCallback( async () => {
    try {
      const response = await api.getRegistrations()
      setRegistrations(response)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }, []);

  const handleSearch = useCallback(async (cpf: string) => {
    if (cpf) {
      const filtered = registrations.filter((reg: any) =>
        reg.cpf.replace(/\D/g, '').includes(cpf.replace(/\D/g, ''))
      );
      setFilteredRegistrations(filtered);
    } else {
      setFilteredRegistrations(registrations);
    }
  }, [registrations])

  useEffect(() => {
    getData()
  }, [getData])


  if (isLoading) return <Loading />

  return (
    <S.Container>
      <SearchBar onSearch={handleSearch} />
      <Collumns updateData={getData} filteredRegistrations={filteredRegistrations} />
    </S.Container>
  );
};
export default DashboardPage;
