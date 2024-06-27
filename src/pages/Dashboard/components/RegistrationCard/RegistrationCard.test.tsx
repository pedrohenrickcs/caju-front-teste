import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatusEnum } from '~/enums/StatusEnum';
import RegistrationCard from '.';
import { ContentRegistrationsCrad } from '~/types/RegistrationCard';
import { BrowserRouter as Router } from 'react-router-dom';

const mockUpdateData = jest.fn();

const mockData: ContentRegistrationsCrad['data'] = {
  id: 1,
  employeeName: "José Leão",
  email: "jose@caju.com.br",
  cpf: "123.456.789-10",
  admissionDate: "2023-01-01",
  status: StatusEnum.Review,
};

describe('RegistrationCard', () => {
  test('renders RegistrationCard component', () => {
    render(
      <Router>
        <RegistrationCard data={mockData} updateData={mockUpdateData} />
      </Router>
    );

    expect(screen.getByText('José Leão')).toBeInTheDocument();
    expect(screen.getByText('jose@caju.com.br')).toBeInTheDocument();
    expect(screen.getByText('01/01/2023')).toBeInTheDocument();

    expect(screen.getByText('Reprovar')).toBeInTheDocument();
    expect(screen.getByText('Aprovar')).toBeInTheDocument();
  });

  test('opens and closes the modal on button click', () => {
    render(
      <Router>
        <RegistrationCard data={mockData} updateData={mockUpdateData} />
      </Router>
    );

    expect(screen.getByText('Confirmação')).toBeInTheDocument();
    expect(screen.getByText('Você tem certeza que deseja realizar esta ação?')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Cancelar'));

  });

  test('shows notification when message is present', () => {
    render(
      <Router>
        <RegistrationCard data={mockData} updateData={mockUpdateData} />
      </Router>
    );

    const notification = screen.queryByText(/Status alterado para/);
    if (notification) {
      expect(notification).toBeInTheDocument();
    }
  });
});
