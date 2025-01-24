---
id: tutorial
title: Create Leo App - React + JS + Leo Tutorial
sidebar_label: React + JS + Leo Tutorial
---

<a href="https://www.npmjs.com/package/create-leo-app"> <img alt="Create Leo App" src="https://img.shields.io/npm/l/create-leo-app?label=NPM%20-%20Create-Leo-App&labelColor=green&color=blue" /></a>


## 1. Installation

Please see [the installation page](00_app_installation.md) to setup the React + Javascript + Leo template.

## 2. Navigation

Navigate to the project you just installed. 

```bash
cd aleo-project
npm install
npm run install-leo
npm run dev
```


This installs all the required modules and also Leo, our statically-typed programming language built for writing private applications. Lastly, we've initialized a local instance of your React application at http://localhost:5173.

`src/App.jsx` contains the main body of your React application.

The `helloworld` folder is your Leo program. This is where you’ll use Leo.

`src/workers/worker.js` is the WebAssembly (WASM) module that we'll be initializing for deployment and execution of Leo programs.

## 3. Execute `helloworld.aleo`

Navigate to http://localhost:5173 and open up the developer console in your browser



Hit “execute helloworld.aleo”. 

Execution should happen locally and you should see an output pop up.

![execution-console](./images/execution-console.png)

![execution-success](./images/execution-success.png)

## 4. Deploying your Program

Let’s deploy the `helloworld` program. Deployment requires an account with Aleo credits.

### Account Generation

```bash
leo account new 
```

Write down your private key, view key, and public address in a safe place. Treat your private and view keys as keys you should never share with anyone else. 

### Faucet

Once you have your account, use our faucet to get some Aleo credits! Our ecosystem wallets have faucets that you can use to get credits.

* [Leo Wallet Discord](https://www.leo.app/) (Scroll to bottom of the landing page to find Discord invite)
* [Puzzle Wallet Faucet](https://dev.puzzle.online/faucet)
* [Soter Wallet Faucet](https://faucetbeta.sotertech.io/)


### Leo & `helloworld`

If we try to deploy right now, deployment will fail because `helloworld` has already been deployed before. It's as simple as changing the program name, but let's use Leo to create and build an entirely new program.

```bash
leo new helloworld_[randomsuffix]
cd helloworld_[randomsuffix]
```

After you've generated your new `helloworld` project, you can delete the original `helloworld` folder.

You'll notice the React App now errors out. Navigate to the home directory of your React application and open `App.jsx`. Change the folder name on line 5 from `helloworld` to the name of your new Leo project to get rid of the error:

```bash
import helloworld_program from "../helloworld_[randomsuffix]/build/main.aleo?raw";
```

Let's dig in a little more. Navigate back to your Leo project and Add your private key to the `.env` in your new Aleo project. Replace the example private key with the one you saved above.

```bash
NETWORK=testnet
PRIVATE_KEY=APrivateKey1zkp2FCZZ7ucNVx5hoofizpq18mvCZNKTpqKMTt1wTahmxSf
```

Once you've done this, within the root of your new Leo project, you can locally execute your Leo program while developing it:

```bash
leo run  ## compiles leo to aleo instructions and executes program functions with input variables

leo execute  ## compiles leo to aleo instructions, executes a program with input variables, synthesizes the program circuit, and generates proving and verifying keys

leo help  ## you know what this does
```

You can try it yourself and observe the outputs in the terminal.

```bash
leo run main 1u32 2u32
leo execute main 1u32 2u32
```

Let's get back to deploying!

When you deploy a program, the fees that you requested from the faucet is the one that will be used in order to pay for deployment. Looking in `App.jsx`, the web worker is called in order to start the deployment. Following that to `src/workers/worker.js` we see that the WASM is initalized, which allows for computation to run efficiently in the browser, and that the program manager contains methods for authoring, deploying, and interacting with Aleo programs. 

Hit the deploy button!

![deployment-console](./images/deployment-console.png)

![deployment-success](./images/deployment-success.png)

Success, you’ve deployed an Aleo program and can how create a decentralized, private application!

### Pushing your Leo Application to Github

1. Let's get to your project's directory, initialize, and commit your application.

```bash
cd aleo-project
git init -b main
git add .
git commit -m "first commit, new aleo app"
```

2. Create a new repository on your [github.com](https://github.com/new) account by hitting "new repository" in the top right. Set the repo to public, and don't worry about adding a README, license, or .gitignore files. You can add these files after your project has been pushed to GitHub. 

3. At the top of the page your new repository, click to copy the remote repository URL and go back to your terminal to link your local project to this repository.

![ ](https://docs.github.com/assets/cb-48149/mw-1440/images/help/repository/copy-remote-repository-url-quick-setup.webp)

```bash
git remote add origin <REMOTE_URL>
git remote -v
git push -u origin main
```

## Recap & Additional Resources

1. We packaged a React template for you with Leo.

2. You also installed [Leo](https://docs.leo-lang.org/getting_started), our statically-typed programming language built for writing private applications. Using Leo, you can write, build, compile, and execute Leo programs locally.

3. We provided the `helloworld` Leo program already pre-compiled into Aleo instructions and then executed it locally using WASM + web workers, which was an abstraction on snarkVM’s capabilities. [snarkVM](https://developer.aleo.org/concepts/network/zkcloud/snarkvm) is the data execution layer. It is used to compile Leo programs and execute them locally off-chain. All Leo programs eventually become Aleo instructions via Aleo’s compiler during the execution phase of snarkVM. 

4. Similarly, we deployed the `helloworld` program, again using the WASM + web workers abstraction layer but you can also deploy programs on-chain using [snarkOS](https://developer.aleo.org/concepts/network/zkcloud/snarkos), the data availability layer or blockchain / distributed ledger.

5. During the tutorial you navigated to [provable.tools](https://provable.tools), which is the graphical interface to our SDK, which serves as an abstraction layer of snarkOS and snarkVM. You’ll find you can perform similar actions (compiling, executing, deploying) on provable.tools. 


6. The entire React template along with the WASM and web workers can also be considered an abstraction layer of snarkOS and snarkVM.
