import { useQuery } from "@tanstack/react-query";
import { getServices } from "./servicesApi";

export const useGetServices = () => {
  const serviceData = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    select: (data) => {
      const services = data?.data.data.map((item) => ({
        id: item._id,
        name: item.name,
        description: item.description,
        price: item.price,
      }));
      return services;
    },
  });
  return serviceData;
};
