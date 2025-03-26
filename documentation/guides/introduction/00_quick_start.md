---
id: quick_start
title: Quick Start
sidebar_label: Quick Start
---
Learn how to deploy and execute a basic "hello world!" program on Aleo's network using Leo and snarkOS. 



## 1. Prerequisites

Make sure you have both `Leo` and `snarkOS` installed on your machine. If you have not installed these yet, you can do so by following the instructions [here](./00_getting_started.md).



## 2. Generate your test keys and wallet address

### 2.1 Using Provable Tools (Provable SDK / Aleo SDK)

* Go to [provable.tools](https://www.provable.tools/), click **Try now** and click the **Generate** button under **Create a New Account**.

### 2.2 Using Leo CLI

* In your terminal, run `leo account new`.  

### 2.3 Using the Ecosystem Wallets

* [Leo Wallet](https://www.leo.app/)
* [Puzzle Wallet](https://puzzle.online/)
* [Soter Wallet](https://sotertech.io/)

:::note
Save your **Address**, **View Key**, and **Private Key** in a safe place, you'll need them later.
:::

## 3. Seeding your wallet with credits


To seed your wallet, you'll need to request credits from faucet provided by the ecosystem wallets at:
* [Leo Wallet Discord](https://www.leo.app/) (Scroll to bottom of the landing page to find Discord invite)
* [Puzzle Wallet Faucet](https://dev.puzzle.online/faucet)
* [Soter Wallet Faucet](https://faucetbeta.sotertech.io/)

The credits received from faucet will be public credits, which means they are publicly visible on the Aleo network before converting to private credits.



:::tip
While waiting for the credits to be sent to your wallet, you can proceed to the next step of creating a Leo application.
:::

## 4. Create a Leo application

We'll need something to deploy, so let's create a simple test Leo application.

Open your terminal and enter the following commands consecutively:

* Create a directory to store your Leo application - feel free to use a different name for this directory or location

```
cd $HOME/Desktop
```

* Assign `$WALLETADDRESS` to the wallet address you saved

```
WALLETADDRESS=""
```

* Generate a unique application name randomly

```
APPNAME=helloworld_$RANDOM
```
:::tip
The length of the application name should be at least 10 characters to optimize deployment costs. Deployment fees increase exponentially (base^10) for each character fewer than 10, so shorter names lead to significantly higher costs. Using a name with 10 or more characters helps keep deployment costs reasonable.
:::

:::info
The reason for using a random application name is that the Aleo network identifies each program with its unique Program ID, and no two programs can have the same ID in the program registry. By generating a random name, we ensure that our application's Program ID will be unique when deployed.
:::

* Create a new test Leo application

```
leo new ${APPNAME}
```

* Run your Leo application to make sure things are working

```
cd ${APPNAME} && leo run
```

## 5. Deploy your test application

* Set your private key in `.env` file at root of your Leo application

```
PRIVATEKEY=""
```

* Deploy your Leo application to Aleo Testnet
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

## 6. Execute your test application

Finally, it is time to execute the application you just deployed!



Make sure you are in the root of your Leo application and paste the following command in your terminal

```
leo execute "${APPNAME}.aleo" "main" "1u32" "2u32" --broadcast
```

You should see a confirmation that your Aleo application was executed with its transaction ID. Again, you can copy your transaction ID to view the details of your execution transaction on the Aleo block explorers.

:::info
Awesome! You have successfully deployed and executed a Leo application to Testnet, how exciting 🎉
:::

