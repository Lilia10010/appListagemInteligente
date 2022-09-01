import { api } from "./";

export const getListingContacts = async (value: string) => {
  const response = await api.get(`/bots?&Filters[orderBy]=${value}`);
  return response;
};

export const getDetailsContact = async (shortName: any) => {
  const response = await api.get(`${shortName}/details`);
  return response;
};
