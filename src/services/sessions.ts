import { api } from "./";

export const getListingContacts = async () => {
  const response = await api.get("/bots");
  return response;
};

export const getDetailsContact = async (shortName: any) => {
  const response = await api.get(`${shortName}/details`);
  return response;
};
