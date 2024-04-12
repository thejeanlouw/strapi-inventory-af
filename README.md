# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```


# 🚀 Getting started with Azure and Supabase

### Step 1: Create Azure Resources
- Log in to the Azure Portal and create a new Resource Group to contain your Strapi resources.
- Create an App Service to host the Strapi web application:
- Choose Code publish, Node 18 LTS runtime stack, Linux OS
- Select an appropriate region and App Service Plan
- Link to Github repo for deployment

### Step 2: Configure App 
- In the Configuration section of the App Service, set WEBSITE_NODE_DEFAULT_VERSION to "~18".
- On the General Settings tab, update the platform to "64 bit" to allow the "sharp" package used by Strapi to run.
- Configure Application Settings with the required environment variables (database.ts)

### Step 3: Setup and Deploy Strapi
- Clone the Strapi repository to your local machine.
- Run `npm install` to install the required dependencies.
- Run `npm run build` to build the admin panel.
- Run `npm run dev` to start the Strapi server.
- Open a browser and navigate to http://localhost:1337/admin to access the Strapi admin panel.
- Create a new user and configure the required content types.
- Commit your changes and push to the main branch of your Github repository.
- In the Azure Portal, navigate to the Deployment Center of your App Service and select Github as the source.
- Choose the repository and branch to deploy from and click Save.
- The deployment process will start automatically, and you can monitor the progress in the Deployment Center.
- Once the deployment is complete, you can access your Strapi application by navigating to the URL of your App Service.

### Step 4: Test the API
curl --location 'http://localhost:1337/api/products' \
--header 'Authorization: Bearer facf255edf60059742a6d26510ab6f510785d03374924a5592efc2871e4a2b0485bda6fef8efd9855c96c9f09d84a14608fde0ef023f130780ce84cb2f663833109f6ec9a4e44f9bfd6e612eef7d1e35e1549abe0d3493c2f2b7b0be3b5cc79bafa08f551cc3ac1b02a175309b70e7b20f92e21235c021849b629eef4b2b258a'

# 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

