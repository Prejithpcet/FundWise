import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import DisplayCampaigns from "../components/DisplayCampaigns";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaign = async () => {
    setIsLoading(true);
    {
      isLoading && <Loader />;
    }
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
    console.log(campaigns);
  };

  useEffect(() => {
    if (contract) fetchCampaign(); //Cannot be called directly as its an async function
  }, [address, contract]);
  return (
    <>
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </>
  );
}
