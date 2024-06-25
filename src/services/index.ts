import { createRegistrations } from "./createRegistrations";
import { deleteRegistration } from "./deleteRegistration";
import { getRegistrations } from "./getRegistrations";
import { refetchRegistrations } from "./refetchRegistrations";
import { updateRegistration } from "./updateRegistration";

export const api = {
  getRegistrations,
  deleteRegistration,
  refetchRegistrations,
  updateRegistration,
  createRegistrations
}