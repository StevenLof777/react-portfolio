import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    // projectId: process.env.PROJECT_ID,
    projectId: "wv4ahz8e",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);