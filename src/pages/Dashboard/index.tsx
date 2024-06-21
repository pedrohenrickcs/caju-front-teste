import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { getRegistrations } from "~/services/registrations";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [registrations, setRegistrations] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      const getData = async () => {
        try {
          const response = await getRegistrations()
          setRegistrations(response)

          // setIsLoading(false)
        } catch (error) {
          console.error(error)
          // setIsLoading(false)
        }
      }
      getData()
  }, [])

  // if (isLoading) return <Loading />

  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={registrations} />
    </S.Container>
  );
};
export default DashboardPage;
