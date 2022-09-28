import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url;";

export const client = sanityClient({
    projectId: process.SANITY_ID,
    dataset: 'dataset',
    apiVersion: '2022-27-09',
    useCdn: true,
    token: process.SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);