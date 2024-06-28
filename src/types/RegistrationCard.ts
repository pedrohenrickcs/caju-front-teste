import { StatusEnum } from "~/enums/StatusEnum";

export type RegistrationData = {
  id: number;
  employeeName: string;
  email: string;
  admissionDate: string;
  cpf: string;
  status: StatusEnum;
};

export type ContentRegistrationsCrad = {
  data: any
  updateData?: () => void;
};

export type ColumnProps = {
  status: StatusEnum;
  title: string;
}

export type CollumnsProps = {
  updateData: () => void;
  filteredRegistrations: RegistrationData[];
}
