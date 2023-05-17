import Customer from "../dev-data/customer.json";

export const getCustomer = (res) => {
  res.status(200).json({ Customer });
};
