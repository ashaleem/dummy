# Content mangagement

The site template uses [Decap](https://decapcms.org/) for content management, allowing you to add articles, images, and author information via Git. Once wired up (documentation pending there) you simply log in at yoursite.com/admin and use the dashboard.

## Running locally

Get the site running locally (`npm run dev`) then in a separate terminal run `npx decap-server`. Go to [https://localhost:5173/admin] to add, edit, and delete content. Changes made there should appear in the local site straight away.