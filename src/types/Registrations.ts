export type Registration = {
  id: number;
  status: string;
};

export type ContentRegistrations = {
  registrations?: Registration[];
  updateData?: any;
};