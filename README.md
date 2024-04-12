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

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>


# 🚀 Getting started with Azure and Supabase

### Step 1: Create Azure Resources
- Log in to the Azure Portal and create a new Resource Group to contain your Strapi resources.
- Create an App Service to host the Strapi web application:
- Choose Code publish, Node 18 LTS runtime stack, Linux OS
- Select an appropriate region and App Service Plan
- Link to Github repo for deployment

### Step 2: Set Up Supabase
- Go to supabase.com and sign up for a new project.
- In your Supabase project, go to the SQL Editor and create a new table called "devices" with columns:
    ```sql
    id (int8, primary key)
    name (text)
    price (float8)
    description (text)
    created_at (timestamp)
    updated_at (timestamp)
    ```
- In the Authentication section, enable email/password sign-in.
- Note down your Supabase project URL and anon/service_role API keys for the next steps.

### Step 3: Configure App Service
- In the Configuration section of the App Service, set WEBSITE_NODE_DEFAULT_VERSION to "~18".
- On the General Settings tab, update the platform to "64 bit" to allow the "sharp" package used by Strapi to run.
- Configure Application Settings with the required environment variables:
    ```plaintext
    HOST: 0.0.0.0
    PORT: 1337
    DATABASE_URL: your Supabase DB connection string
    SUPABASE_URL: your Supabase project URL
    SUPABASE_KEY: your Supabase anon API key
    ```
