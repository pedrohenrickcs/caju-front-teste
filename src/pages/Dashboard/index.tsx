import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { api } from "~/services";
import { refetchRegistrations } from "~/services/refetchRegistrations";

const DashboardPage = () => {
  const [registrations, setRegistrations] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      const getData = async () => {
        try {
          const response = await api.getRegistrations()
          setRegistrations(response)
          setIsLoading(false)
        } catch (error) {
          console.error(error)
          setIsLoading(false)
        }
      }
      getData()
  }, [registrations])

  const updateData = async () => {
    await refetchRegistrations();
  };

  if (isLoading) return <Loading />

  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={registrations} updateData={updateData} />
    </S.Container>
  );
};
export default DashboardPage;
