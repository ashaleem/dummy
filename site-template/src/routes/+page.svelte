<script lang="ts">
  import { FrontBasic, SupportPrompt } from "@gonzo-engineering/dummy-ui";
  import { makePublicationSchema } from "@gonzo-engineering/libs";

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.publication.name}</title>
  <meta name="description" content={data.publication.description} />
  <script
    src="https://identity.netlify.com/v1/netlify-identity-widget.js"
  ></script>
  {@html `<script type="application/ld+json">${JSON.stringify(makePublicationSchema(data.publication))}</script>`}
  <script>
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  </script>
</svelte:head>

<FrontBasic articles={data.articles} />

<SupportPrompt
  message={"Power journalism by and for the people."}
  link={data.publication.supportLink}
  linkText={"Become a patron"}
  image={{
    src: data.publication.emblemUrl,
    alt: "A hand holding a pen, writing on a piece of paper.",
  }}
/>
