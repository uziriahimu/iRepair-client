import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const queryClient = useQueryClient();

  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries;
      ({ queryClient: ["services"] });
    },
  });

  const handleSubmit = async (e: FormDataEvent) => {
    e.preventDefault();

    const serviceData = {
      name: serviceName,
      description: "Description",
      devices: ["ipad", "phone"],
      price: 500,
    };
    await mutateAsync(serviceData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setServiceName(e.target.value)} />
        <Button type="submit"> Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
