---
id: quick_start
title: Quick Start
sidebar_label: Quick Start
---
Welcome to the Aleo Quickstart. This quickstart will guide you through the core concepts of building on Aleo. You will be guided through the process of deploying and interacting with your own Aleo program directly on the web via the [Leo Playground](https://play.leo-lang.org). 

## What You'll Learn
1. **Aleo Accounts:** Learn how to create an Aleo account and create private and public data.
2. **Aleo Programs:** Learn how to interact with the Aleo network by deploying and executing your own program.
3. **Private and Public State:** Learn how to manage both private and public data on Aleo in order to create privacy preserving apps.

## 1. Generate a New Aleo Account

The first step in building on Aleo is to create an Aleo account. An Aleo account is a unique identifier that allows you 
to interact with the Aleo network. With it you can execute program functions, create your own private and public data, 
and deploy new programs. You can create an account using the Leo Playground or by using one of the ecosystem wallets.

### 1.1 Using the Leo Playground Widget

Click on the Account Widget to generate a new Aleo Account.

<img src={require('./images/new_account.png').default} width="400"/>

:::note
Save your **Address**, **View Key**, and **Private Key** in a safe place, you'll need them later.
:::

### 1.2 Using an Ecosystem Wallet

An account can be created using one of the wallets below. After installing any of the wallets below, you will be 
prompted to create an Aleo account.

* [Puzzle Wallet](https://puzzle.online/wallet)
* [Fox Wallet](https://foxwallet.com/)
* [Leo Wallet](https://www.leo.app/)
* [Soter Wallet](https://sotertech.io/)

## 2. Seed Your Wallet With Testnet Credits

### 2.1 Get Credits from an Ecosystem Faucet

To seed your wallet, you'll need to request credits from the faucet provided by the ecosystem wallets at:
* [Puzzle Wallet Faucet](https://dev.puzzle.online/faucet)
* [Leo Wallet Discord](https://www.leo.app/) (Scroll to bottom of the landing page to find Discord invite)

The credits received from the faucet will be public credits, which means they are publicly visible on the Aleo network.

### 2.2 Verify Receipt of Your Testnet Credits

After receiving a successful confirmation from one of the faucets above, you can check your account balance by selecting
 `Get Account Balance` from the list of options in the query widget. Simply paste your wallet address in and press 
`Get`. Don't worry if they don't appear right away as your testnet credits may take a few minutes to arrive.

<img src={require('./images/account_balance.png').default} width="400"/>

When the credits arrive, you should see the following output in the query widget after pressing `Get`.

<img src={require('./images/provable_explorer.png').default} width="400"/>

Alternatively you can search for the transaction ID provided by the faucets on any one of the ecosystem's block explorers.

<!-- markdown-link-check-disable -->
- [Provable Explorer](https://testnet.explorer.provable.com/)
- [Aleoscan](https://testnet.aleoscan.io/)
- [Aleo123](https://testnet.aleo123.io/)
- [Aleo.Info](https://testnet.aleo.info/)
<!-- markdown-link-check-enable -->

:::tip
While waiting for the credits to be sent to your wallet, you can proceed to the next step.
:::

## 3. Deploy Your First Aleo program

### 3.1 The Token Program

In this section, you'll learn how to deploy a sample `Token` program to the Aleo Testnet from the Leo Playground. 
By the end of this section you'll be familiar with how to deploy your own privacy preserving program to Aleo.

:::info
The `Token` program provides a simple example how to build a program with both public and private features by creating a
token that allows users to hold both public and private balances. This program will show you how to use encrypted data 
structures called Records to represent private data and public on-chain datastores called mappings to represent public 
data.
:::

### 3.2 Customize the Name of Your Program

To begin deploying, select the `Token` program from the Examples dropdown menu on the Leo Playground. 

<img src={require('./images/select_token.png').default} width="800"/>

Next, customize the the name of the program in line 1 of `src/main.leo` to use a unique identifier and then update the 
`program` field in the `program.json` file to match the new name. 

<img src={require('./images/program_name_.png').default} width="800"/>

<img src={require('./images/program_json_.png').default} width="800"/>

:::tip
The length of the application name should be at least 10 characters. Deployment costs are higher for names shorter than 10 characters.
:::

You are now ready to deploy your first Aleo program to the Testnet! Before proceeding, make sure that your account is 
funded with sufficient Testnet credits to deploy to the network.

### 3.3 Deploy Your Program to Testnet

Click on the deploy widget to bring up the deployment window. Enter your program name in the `Program ID` field and then 
enter your Private Key. You can view an estimate for the deployment cost by clicking `Estimate Fee`.  When you are 
ready to deploy, click `Deploy`.

<img src={require('./images/deploy.png').default} width="400"/>



When you click `Deploy`, the Leo Playground will build a `Deployment Transaction` and submit to the Aleo Network. 
This process may take a while. When it is finished, you should see a confirmation that your Aleo application was 
deployed in a pop-up containing the transaction ID. 

<img src={require('./images/deployment.png').default} width="800"/>

Copy the transaction ID to view the details of your deployment transaction on any of the Aleo block explorers:

<!-- markdown-link-check-disable -->
- [Provable Explorer](https://testnet.explorer.provable.com/)
- [Aleoscan](https://testnet.aleoscan.io/)
- [Aleo123](https://testnet.aleo123.io/)
- [Aleo.Info](https://testnet.aleo.info/)
<!-- markdown-link-check-enable -->

:::info
Depending on the size of your program, you may not have sufficient credits to deploy your program if you are using an account funded with only one faucet transaction.  If that's the case, you can still interact with a program already deployed to the Testnet.
:::

## 4. Execute Public and Private Program Functions

You can now use your deployed token program by executing its functions!

:::tip
If you did not have enough funds to deploy a program, you can use the [`token_quickstart.aleo`](https://play.leo-lang.org/?gistId=b6730338a24169308348d5e38243665d&revision=3339199a4ac60976dc5ce6c0c35c5eefb0488ee0) program to test the execution of the token program methods.
:::

### 4.1 Building Execution Transactions

When you call one of your program's functions, the logic is executed locally and a zero-knowledge proof is built. This proof attests to the correctness of the program execution and its corresponding outputs while keeping hidden inputs or outputs encrypted. After a function is executed, an Execution Transaction is submitted to the Aleo Network that contains a summary of the execution and a proof of its correctness. This transaction will be accepted when a network validator validates the proof and that the proper fee was paid. 

### 4.2 Mint a Token Privately

Below we will mint a private token using the `mint_private` function. This function will create an Aleo `Record` which represents the new token.  Records are encrypted data structures stored on-chain as ciphertexts that can only be decrypted by the owner of the record (using the owner's View key). This ensures that only the owner of the record knows its content, thus keeping the token private.

To mint a private token, navigate to the Execute widget in the Leo Playground and enter the name of your program in the Program ID tab.  Alternatively, you can use the deployed token program 'token_quickstart.aleo`.  

:::tip
Click the magnifying glass icon to confirm that the Program ID corresponds to a deployed program.
:::

<img src={require('./images/execute.png').default} width="400"/>

Next, enter your Private Key and select the `mint_private` method from the Function drop-down menu.  In the Inputs tab, enter your Account Address and a `u64` integer.

```
["ALEO_ADDRESS_HERE", "50u64"]
```
Click Estimate Fee followed by Execute.  As before with the deploy transaction, you can copy and past your transaction ID in a block explorer.  You should see something resembling the following:

<img src={require('./images/mint_private.png').default} width="1000"/>

:::info
The output of the transaction is a Record.  In order to decrypt the Record, you need to copy and past the ciphertext, navigate to the Records widget in the Leo Playground, enter the Record ciphertext along with the View Key that corresponds to your Account's Private Key, and click Decrypt.  The decrypted Record should resemble the following:
```
{
  owner: aleo1kypwp5m7qtk9mwazgcpg0tq8aal23mnrvwfvug65qgcg9xvsrqgspyjm6n.private,
  amount: 50u64.private,
  _nonce: 3175255370513411091535466147458245312227668453916963245036391157478647265587group.public
}
```
To learn more about Records, click [here](../../concepts/fundamentals/02_records.md)
:::

### 4.3 Mint a Token Publicly

In the Token program, public balances are stored in program mappings. Mappings are public key-value stores on Aleo Network nodes which store long term persistent public state onchain.

Below we will mint a public token using the `mint_public` function. When this function is run, it will update the balance in the `account` mapping corresponding to the specified Aleo `address`. 

Navigate back to the Execute widget and repeat the steps in the previous section for minting a public token.  The transaction summary from the block explorer should resemble the following:

<img src={require('./images/mint_public.png').default} width="1000"/>

Unlike the `mint_private` function, the `mint_public` function creates an execution transaction that contains a `Future` instead of a `Record`.  A `Future`  contains a set of instructions for validators to execute on-chain which can read or update mappings.  If the `mint_public` execution transaction is valid, it will be accepted by the validators which will run the instructions in the `mint_public` `Future` that update the `account` mapping.

This account mapping can then be queried publicly by anyone.

:::info
Awesome! You have successfully deployed a Leo program and executed transactions on the Testnet 🎉
:::

To get started with local development, navigate to the [installation guide](./02_installation.md) to install the necessary tools to deploy your Leo programs locally.
