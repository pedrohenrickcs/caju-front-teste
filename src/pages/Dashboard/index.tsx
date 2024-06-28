import * as S from './styles';
import Collumns from './components/Columns';
import Loading from './components/Loading';
import useRegistrationActions from '~/hooks/useRegistration';
import { SearchBar } from './components/Searchbar';
import { useEffect, useState } from 'react';
import { useSearch } from '~/hooks/useSearch';

const DashboardPage = () => {
  const { registrations, isLoading, updateRegistrations } = useRegistrationActions();
  const [filteredRegistrations, setFilteredRegistrations] = useState(registrations);
  const { handleSearch } = useSearch(registrations, setFilteredRegistrations);

  useEffect(() => {
    setFilteredRegistrations(registrations);
  }, [registrations]);

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <SearchBar onSearch={handleSearch} />
      <Collumns updateData={updateRegistrations} filteredRegistrations={filteredRegistrations} />
    </S.Container>
  );
};

export default DashboardPage;
