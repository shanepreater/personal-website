import React, { useEffect } from "react";
import { useParams } from "react-router";
import { createAdvertClick, getAdvertCampaign } from "../aws/awsAdverts";

const triggerClickAndRedirect = async id => {
  try {
    const advert = await getAdvertCampaign(id);
    console.log("Advert is: ", advert);
    if (advert) {
      await createAdvertClick(advert);
      window.location.href = advert.to;
    }
  } catch (e) {
    console.error("Dang lost this one on the way through.");
  }
};

const AdvertLandingPage = props => {
  const { id } = useParams();
  useEffect(() => {
    triggerClickAndRedirect(id);
  });
  return (
    <section>
      <h3>Please wait...</h3>
      <p>Redirecting to the selected resource please wait.</p>
    </section>
  );
};

export default AdvertLandingPage;
