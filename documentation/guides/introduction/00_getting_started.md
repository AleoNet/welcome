---
id: getting_started
title: Getting Started
sidebar_label: Getting Started
---

import FeatureCard from '@site/src/components/FeatureCard/FeatureCard';

### Start Developing on Aleo

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '1.5rem',
  width: '100%',
  margin: '2rem 0'
}}>

<FeatureCard
  title="🚀 Quick Start"
  description="Build a Leo program and deploy it to Aleo."
  link="/guides/introduction/quick_start"
/>

<FeatureCard
  title="🦁 Local Setup"
  description="Setup a local development environment."
  link="/guides/introduction/installation"
/>

</div>

### Create a Private Web App

Follow hands-on tutorials to build and deploy private web apps directly in the browser.

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '1.5rem',
  width: '100%',
  margin: '2rem 0'
}}>

<FeatureCard
  title="Make a Private Web App"
  description="Build a private full stack app."
  link="https://github.com/ProvableHQ/zk-auction-example?tab=readme-ov-file#private-auctions-with-aleo"
/>

<FeatureCard
  title="Try Privacy on the Web"
  description="Try a live privacy preserving web app."
  link="https://stackblitz.com/github/ProvableHQ/zk-auction-example"
/>

</div>

<div style={{
  width: '100%',
  margin: '2rem 0'
}}>
  <details style={{
    background: '#1a1f2e',
    borderRadius: '8px',
    border: '1px solid #2d3748',
    overflow: 'hidden'
  }}>
    <summary style={{
      padding: '1.25rem',
      color: '#e2e8f0',
      fontSize: '1.125rem',
      fontWeight: '600',
      listStyle: 'none',
      cursor: 'pointer',
    }}>
      Private Application Demo
    </summary>

    <div style={{ padding: '1.25rem', background: '#151922' }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src="https://player.vimeo.com/video/1080014879?h=b4e53cd085&badge=0&autopause=0&player_id=0&app_id=58479"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Zero Knowledge Auctions"
        />
      </div>
    </div>
  </details>
</div>


## Learn Aleo

Learn the key concepts behind privacy preserving development with Aleo.

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '1.5rem',
  width: '100%',
  margin: '2rem 0'
}}>

<div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
  <FeatureCard
    title="Accounts"
    description="Learn about Aleo accounts and how they work."
    link="/concepts/fundamentals/accounts"
  />
  <FeatureCard
    title="Transfers"
    description="Understand how private transfers work in Aleo."
    link="/concepts/fundamentals/credits"
  />
  <FeatureCard
    title="Fees"
    description="Learn about transaction fees and how they're calculated."
    link="/concepts/fundamentals/transaction_fees"
  />
</div>

<div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
  <FeatureCard
    title="Programs"
    description="Explore how to write and deploy Aleo programs."
    link="/concepts/fundamentals/programs"
  />
  <FeatureCard
    title="Transactions"
    description="Understand the structure and lifecycle of Aleo transactions."
    link="/concepts/fundamentals/transactions"
  />
  <FeatureCard
    title="Program State"
    description="Learn about managing program state in Aleo."
    link="/concepts/fundamentals/public_private"
  />
</div>

</div>

## Development Tools

### Authoring Aleo Programs

The tools below allow developers to author private programs for the Aleo Network.

<!-- markdown-link-check-disable -->
| Name                                         | Description                                                                                |
|----------------------------------------------|--------------------------------------------------------------------------------------------|
| [Aleo Instructions](/guides/aleo/aleo)     | Low-level assembly language supported by by the Aleo protocol for authoring Aleo programs. |
| [Leo](https://docs.leo-lang.org/leo)         | Developer friendly programming language for writing private programs on Aleo.              |
| [Leo Playground](https://play.leo-lang.org/) | A web-based IDE for writing and testing Leo programs.                                      |
<!-- markdown-link-check-enable -->

### SDKs for Creating Private Applications

The following SDKs exist for building private web and full stack applications on Aleo.

| Language        | SDK                                                                            | Use-Cases                                   |
|-----------------|--------------------------------------------------------------------------------|---------------------------------------------|
| Rust            | [snarkVM](https://github.com/ProvableHQ/snarkVM)                               | Rust-Based Aleo Apps
| TypeScript/Wasm | [Provable SDK](https://docs.explorer.provable.com/docs/sdk/92sd7hgph3ggt-overview) | Node.JS Aleo Apps & Aleo Browser Extensions |                      |  
| TypeScript      | [Puzzle SDK](https://docs.puzzle.online/)                                      | Aleo Browser Dapps                          |
| TypeScript      | [Leo Wallet Adapter](https://docs.leo.app/aleo-wallet-adapter)                 | Aleo Browser Dapps                          |


