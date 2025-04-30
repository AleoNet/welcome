---
id: quick_start
title: Quick Start
sidebar_label: Quick Start
---
Deploy and a token program program on the Aleo testnet.


## 1. Generate your test keys and wallet address

### 1.1 Using Provable Tools (Provable SDK / Aleo SDK)

* Go to [provable.tools](https://www.provable.tools/), click **Try now** and click the **Generate** button under **Create a New Account**.

### 1.2 Using the Ecosystem Wallets

* [Leo Wallet](https://www.leo.app/)
* [Puzzle Wallet](https://puzzle.online/)
* [Soter Wallet](https://sotertech.io/)

:::note
Save your **Address**, **View Key**, and **Private Key** in a safe place, you'll need them later.
:::

## 2. Seeding your wallet with credits


To seed your wallet, you'll need to request credits from faucet provided by the ecosystem wallets at:
* [Leo Wallet Discord](https://www.leo.app/) (Scroll to bottom of the landing page to find Discord invite)
* [Puzzle Wallet Faucet](https://dev.puzzle.online/faucet)
* [Soter Wallet Faucet](https://faucetbeta.sotertech.io/)

The credits received from faucet will be public credits, which means they are publicly visible on the Aleo network before converting to private credits.


:::tip
While waiting for the credits to be sent to your wallet, you can proceed to the next step of creating a Leo application.
:::

## 3. Deploy a token program from the Leo Playground

Navigate to the [Leo Playground](https://play.leo-lang.org/) and select the Token example.

in `src/main.leo`, change the name of the program from `token.aleo` to include a unique identifier.  Be sure to copy and paste the new program name in the first field of the `program.json` file.

:::tip
The length of the application name should be at least 10 characters to optimize deployment costs. Deployment fees increase exponentially (base^10) for each character fewer than 10, so shorter names lead to significantly higher costs. Using a name with 10 or more characters helps keep deployment costs reasonable.
:::

:::info
The reason for using a random application name is that the Aleo network identifies each program with its unique Program ID, and no two programs can have the same ID in the program registry. By generating a random name, we ensure that our application's Program ID will be unique when deployed.
:::

* Update your `.env` with your private key and ensure that the endpoint uses the Provable Explorer endpoint:
```
NETWORK=testnet
PRIVATE_KEY=APrivateKey1...
ENDPOINT=https://api.explorer.provable.com/v1
```

You are now ready to deploy your first Aleo program to the Testnet!

## 5. Deploy your test application

:::tip Make sure that your account has sufficient Testnet credits to deploy to the network.

* Deploy your Leo application to Aleo Testnet using the command below:
```
leo deploy
```

You should have seen a confirmation that your Aleo application was deployed in the form of a transaction ID that looks like the following `at1rkkpqu5k4rt86zzccczw6cxeyvrl7hxydvvv7dhl7zr7p9w40c8s70kwm8`. Copy your transaction ID to view the details of your deployment transaction on the Aleo block explorers:

<!-- markdown-link-check-disable -->
- [Provable Explorer](https://testnet.explorer.provable.com/)
- [Aleoscan](https://testnet.aleoscan.io/)
- [Aleo123](https://testnet.aleo123.io/)
- [Aleo.Info](https://testnet.aleo.info/)
<!-- markdown-link-check-enable -->

## 6. Execute a transaction

You can now use your deployed token program!  

* Mint a private token

Make sure you are in the root of your Leo application and paste the following command in your terminal

```
leo execute "mint_private" "10u64" --program YOUR_PROGRAM_NAME.aleo --broadcast
```

You should see a confirmation that your Aleo application was executed with its transaction ID. Again, you can copy your transaction ID to view the details of your execution transaction on the Aleo block explorers.

:::info
Awesome! You have successfully deployed and executed a Leo application to Testnet 🎉
:::

