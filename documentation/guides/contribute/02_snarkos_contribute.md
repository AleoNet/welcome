---
id: snarkos_contribute
title: SnarkOS Contribution
sidebar_label: SnarkOS Contribution
---
This checklist provides a step-by-step guide for restarting the Aleo network with new features merged. Follow these steps to ensure a smooth process.  

## Branches Overview
[**staging branch**](https://github.com/AleoNet/snarkOS)  
- This branch serves as a staging area for the integration and initial testing of changes before they are promoted to the mainnet branch. 

[**mainnet branch**](https://github.com/AleoNet/snarkOS/tree/mainnet)  
- The production branch where only stable and thoroughly tested changes are merged. It is used for creating production releases. It is always a direct mirror of a staging commit.

## Networks Overview
### DevNet(s)
- Initial proposed changes are implemented and tested on DevNets.
- Snarkops - aims to provide guides and scripts for managing SnarkOS and participating in ANF's CanaryNet. 

### CanaryNet (running staging branch)
- Changes are merged into CanaryNet from DevNet for testing and validation.
- CanaryNet is used to onboard additional validators before potentially bonding them to Testnet Beta/Mainnet.
- Validators are bonded by the ANF.
- snarkOS github tag standard: `canary-v*`. [Link to tags](https://github.com/AleoNet/snarkOS/tags).
- [Explorer for canary](https://vision.snarkos.net/?blocks) 

### Testnet Beta (running mainnet branch)
- Open, public network for testing applications in a production-like environment without incurring costs.
- Validators are bonded by the Aleo Network Foundation.
- ANF and Provable initially run the validators.
- Demox Labs and Puzzle run public faucets
- snarkOS github tag standard: `testnet-beta-v*` [Link to tags](https://github.com/AleoNet/snarkOS/tags).
- [Explorer for Testnet Beta](https://vision.snarkos.net/?blocks) 

### Mainnet (running mainnet branch)
- The final testing stage before full production deployment.
- Intended to be the “last stop” for new code and/or validator onboarding.
- Will run concurrently with Testnet Beta before becoming the canonical Mainnet.
- snarkOS github tag standard: `mainnet-v*` [Link to tags](https://github.com/AleoNet/snarkOS/tags).
- [Explorer for Mainnet](https://vision.snarkos.net/?blocks)

## Contribution Workflow [ snarkOS ]

<p align="center" width="100%">
<img src={require("./images/snarkos_contribute_flow.png").default} alt="SnarkOS Contribution Diagram"></img>
</p>

**1. Fork the Repository**
    - Fork the repository from the staging branch to your own GitHub account.
    - Clone your fork locally.

```sh
git clone git@github.com:AleoNet/snarkOS.git
git remote add upstream git@github.com:AleoNet/snarkOS.git
```

**2. Switch to the base branch**
```sh
git switch staging
```

**3. Create a Feature Branch**
- Create a feature branch from your fork's main branch.
```sh
git checkout -b feat/my-branch
```

**4.  Develop Your Feature/Fix and Test**
- Develop your feature or fix in your forked repository.
- Run `./snarkOS/devnet.sh` 
- Make sure to approve the option to re-install the snarkOS binary so you test with your current local snarkOS code.
- See that the network progresses blocks normally and send some transactions for further confirmation of network stability.
- Run any specific tests to your feature/fix.

**5. Push your code to Fix branch**
- Commit changes with meaningful commit messages that clearly describe the changes and their purpose.
- Push changes to your fork.
```sh
git add .
git commit -m "Add detailed description of the changes"
git push
```

**6. Submit a PR to Your Fork's Main Branch**
- Submit a pull request (PR) from your feature branch to your fork's main branch.
- This triggers the CI pipeline in your fork to run automated tests.

**7. Internal Code Review**
- Request an internal code review from your team within your forked repository.
- Team members review the code, suggest changes, and approve the PR if it meets the quality standards.
- The CI pipeline is run again to ensure no new issues have been introduced during the review process.

**8. Submit a PR to the Main AleoNet/snarkOS Repository**
- After internal approval, submit a PR from your fork's main branch to the main AleoNet/snarkOS repository's staging branch.
- This triggers the main CI pipeline to run all relevant tests and checks again to ensure the code's stability and compatibility.

**9. Review by Core Team**
- Core team members review the PR in the main AleoNet/snarkOS repository.
- If the CI pipeline passes and the review is successful, the PR is approved.
