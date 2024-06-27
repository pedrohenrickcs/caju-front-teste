import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Collumns from "./index";
import { StatusEnum } from "~/enums/StatusEnum";
import { RegistrationData } from "~/types/RegistrationCard";

const mockUpdateData = jest.fn();

const mockRegistrations: RegistrationData[] = [
  {
    id: 1,
    employeeName: "José Leão",
    email: "jose@caju.com.br",
    cpf: "123.456.789-10",
    admissionDate: "2023-01-01",
    status: StatusEnum.Review,
  },
  {
    id: 3,
    employeeName: "Pedro Henrick",
    email: "pedro.henrickcs@gmail.com",
    cpf: "111.222.333-44",
    admissionDate: "2023-03-01",
    status: StatusEnum.Approved,
  },
  {
    id: 2,
    employeeName: "Luiz Filho",
    email: "luiz@caju.com.br",
    cpf: "109.876.543-21",
    admissionDate: "2023-02-01",
    status: StatusEnum.Reproved,
  },
];

describe("Collumns", () => {
  test("renders columns with registrations", async () => {
    render(<Collumns updateData={mockUpdateData} filteredRegistrations={mockRegistrations} />);

    const reviewColumn = screen.getByText("Pronto para revisar");
    const approvedColumn = screen.getByText("Aprovado");
    const reprovedColumn = screen.getByText("Reprovado");

    expect(reviewColumn).toBeInTheDocument();
    expect(approvedColumn).toBeInTheDocument();
    expect(reprovedColumn).toBeInTheDocument();

    const joseLeao = screen.getByText("José Leão");
    const luizFilho = screen.getByText("Luiz Filho");
    const pedroHenrick = screen.getByText("Pedro Henrick");

    expect(joseLeao).toBeInTheDocument();
    expect(luizFilho).toBeInTheDocument();
    expect(pedroHenrick).toBeInTheDocument();
  });
});
