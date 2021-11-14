import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { compare } from "bcryptjs";
import { MongoClient } from "mongodb";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      name: "Crypto Portal",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        //Connect to DB
        const client = await MongoClient.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        //Get all the users
        const users = await client.db().collection("users");

        //Find user with the email
        const result = await users.findOne({
          email: credentials.email,
        });

        //Not found - send error res
        if (!result) {
          client.close();
          throw new Error("No user found with the email");
        }

        //Check hased password with DB password
        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        //Incorrect password - send response
        if (!checkPassword) {
          client.close();
          throw new Error("Password doesnt match");
        }

        //Else send success response
        client.close();
        return { email: result.email };
      },
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Providers.Email({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  // SQL or MongoDB database (or leave empty)
  database: {
    type: "mongodb",
    url: process.env.MONGO_URI,
    synchronize: true,
  },
});
