import { API } from "aws-amplify";
import { graphqlOperation } from "@aws-amplify/api";
import { createAdClick, createAdvert } from "../graphql/mutations";
import { getAdvert } from "../graphql/queries";

export const createAdvertCampaign = async (
  input,
  setSubmitting,
  success,
  error
) => {
  try {
    API.configure({
      aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS"
    });
    const { id } = await API.graphql(graphqlOperation(createAdvert, { input }));
    console.log(`Created advert with ID: ${id}`);
    success(
      "Ad campaign has been saved",
      `<p>Successfully saved the ad campaign with title ${input.title}</p>`
    );
    return id;
  } catch (e) {
    console.error(e.errors);
    const errorList =
      "<ul>" + e.errors.map(e => `<li>${e.path}: ${e.message}</li>`) + "</ul>";
    error(
      "Advert campaign creation has failed",
      `<p>There was a problem saving the Ad campaign</p>${errorList}`
    );
  }
  setSubmitting(false);
};

export const getAdvertCampaign = async id => {
  try {
    API.configure({ aws_appsync_authenticationType: "API_KEY" });
    const response = await API.graphql(graphqlOperation(getAdvert, { id }));
    console.log("Response from GraphQL:", response);
    return response.data.getAdvert;
  } catch (e) {
    console.error("Error getting campaign", e);
    return null;
  }
};

export const createAdvertClick = async advert => {
  try {
    API.configure({ aws_appsync_authenticationType: "API_KEY" });
    await API.graphql(
      graphqlOperation(createAdClick, { input: { adClickAdvertId: advert.id } })
    );
  } catch (e) {
    console.error("Error getting campaign", e);
    return null;
  }
};
