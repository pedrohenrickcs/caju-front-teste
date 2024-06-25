import { StatusEnum } from "~/enums/StatusEnum";

export type RegistrationData = {
  id: number;
  employeeName: string;
  email: string;
  admissionDate: string;
  status: StatusEnum;
};

export type ContentRegistrationsCrad = {
  data: RegistrationData
};