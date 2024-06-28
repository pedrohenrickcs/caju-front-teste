export type Registration = {
  id: number;
  status: string;
};

export type ContentRegistrations = {
  updateData?: any;
  filteredRegistrations?: Registration[]
};