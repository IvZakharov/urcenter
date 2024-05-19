import { MainLayout } from "../../layouts/MainLayout";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import { Box } from "@mui/material";

import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

const Page = ({ story, info }) => {
  console.log(story);

  return (
    <MainLayout
      menus={info?.content?.menus}
      info={info?.content}
      metaTitle={story?.name}
      metaDescription={"Юридический центр города Москвы"}
    >
      <Box mb={{ xs: 6, md: 20, lg: 0 }}>
        <ServicesHero title={story?.name} />
      </Box>

      <StoryblokComponent blok={story?.content} />
    </MainLayout>
  );
};

export async function getStaticPaths() {
  let sbParams = {
    version: "draft",
    starts_with: "services",
    per_page: 100,
  };
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories`, sbParams);

  return {
    paths: data.stories.map((story) => ({
      params: {
        slug: story.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let { slug } = params;

  let sbParams = {
    version: "draft",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(
    `cdn/stories/services/${slug}`,
    sbParams
  );
  let global = await storyblokApi.get(`cdn/stories/global`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      info: global?.data ? global.data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 1800,
  };
}

export default Page;
