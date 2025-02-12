---
id: universal_wallet_adapter
title: Universal Wallet Adapter
sidebar_label: Universal Wallet Adapter
---

While different wallets provide their own adapter SDKs, applications typically want to support multiple wallets to give users flexibility in choosing their preferred wallet. The Aleo community has developed an universal wallet adapter that is hosted [here](https://github.com/arcane-finance-defi/aleo-wallet-adapters), which is largely based on [Demox Labs' Leo Wallet Adapter](https://docs.leo.app/aleo-wallet-adapter).

This guide demonstrates how to implement the universal wallet adapter in React applications.

## Installation

First, install the required packages:

```bash
npm install --save \
    @demox-labs/aleo-wallet-adapter-base \
    @demox-labs/aleo-wallet-adapter-react \
    @demox-labs/aleo-wallet-adapter-reactui \
    aleo-adapters
```

## Setup

To use the wallet adapter, wrap your app with both `WalletProvider` and `WalletModalProvider` components. These provide the wallet functionality and UI context respectively.

The `WalletProvider` accepts the following [properties](https://docs.leo.app/aleo-wallet-adapter/packages/core/react/docs/interfaces/walletproviderprops) (`wallets` is required):

```tsx
export interface WalletProviderProps {
    children: ReactNode;
    wallets: Adapter[];             // Required
    decryptPermission?: DecryptPermission;
    programs?: string[];
    network?: WalletAdapterNetwork;
    autoConnect?: boolean;
    onError?: (error: WalletError) => void;
    localStorageKey?: string;
}
```

You can import `DecryptPermission` and `WalletAdapterNetwork` types from `@demox-labs/aleo-wallet-adapter-base`.

## Wallet Configuration

When creating wallet adapters, you can configure them with the following options:

```tsx
export interface LeoWalletAdapterConfig {
    appName?: string;
    isMobile?: boolean;
    mobileWebviewUrl?: string;
}

export interface FoxWalletAdapterConfig {
    appName?: string;
    isMobile?: boolean;
    mobileWebviewUrl?: string;
}

export interface SoterWalletAdapterConfig {
    appName?: string;
}

export interface PuzzleWalletAdapterConfig {
    appName?: string;
    appIconUrl?: string;
    appDescription?: string;
    programIdPermissions: Partial<Record<WalletAdapterNetwork, string[]>>;
}
```

## Implementation Example

Here's a complete example showing how to set up the wallet adapter:

```tsx
import { WalletModalProvider } from "@demox-labs/aleo-wallet-adapter-reactui";
import { WalletProvider } from "@demox-labs/aleo-wallet-adapter-react";
import { DecryptPermission, WalletAdapterNetwork } from "@demox-labs/aleo-wallet-adapter-base";
import { useMemo } from "react";
import { 
  PuzzleWalletAdapter, 
  LeoWalletAdapter, 
  FoxWalletAdapter,
  SoterWalletAdapter 
} from 'aleo-adapters';

export default function Providers({ children }: { children: React.ReactNode }) {
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: 'Aleo app',
      }),
      new PuzzleWalletAdapter({
        programIdPermissions: {
          [WalletAdapterNetwork.MainnetBeta]: ['dApp_1.aleo', 'dApp_1_import.aleo', 'dApp_1_import_2.aleo'],
          [WalletAdapterNetwork.TestnetBeta]: ['dApp_1_test.aleo', 'dApp_1_test_import.aleo', 'dApp_1_test_import_2.aleo']
        },
        appName: 'Aleo app',
        appDescription: 'A privacy-focused DeFi app',
        appIconUrl: ''
      }),
      new FoxWalletAdapter({
        appName: 'Aleo app',
      }),
      new SoterWalletAdapter({
        appName: 'Aleo app',
      })
    ],
    []
  );

  return (
    <WalletProvider
      wallets={wallets}
      decryptPermission={DecryptPermission.UponRequest}
      network={WalletAdapterNetwork.MainnetBeta}
      autoConnect
    >
      <WalletModalProvider>
        {children}
      </WalletModalProvider>
    </WalletProvider>
  );
} 
```

## Using the Wallet Hook

After setup, you can use the `useWallet` hook from `@demox-labs/aleo-wallet-adapter-react` to access available functions that helps connect to and interact with the Aleo network. The hook provides the following interface:

```tsx
export interface WalletContextState {
    autoConnect: boolean;
    wallets: Wallet[];
    wallet: Wallet | null;
    publicKey: string | null;
    connecting: boolean;
    connected: boolean;
    disconnecting: boolean;
    select(walletName: WalletName): void;
    connect(decryptPermission: DecryptPermission, network: WalletAdapterNetwork, programs?: string[]): Promise<void>;
    disconnect(): Promise<void>;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
    decrypt(cipherText: string, tpk?: string, programId?: string, functionName?: string, index?: number): Promise<string>;
    requestRecords(program: string): Promise<any[]>;
    requestTransaction(transaction: AleoTransaction): Promise<string>;
    requestExecution(transaction: AleoTransaction): Promise<string>;
    requestBulkTransactions(transactions: AleoTransaction[]): Promise<string[]>;
    requestDeploy(deployment: AleoDeployment): Promise<string>;
    transactionStatus(transactionId: string): Promise<string>;
    getExecution(transactionId: string): Promise<string>;
    requestRecordPlaintexts(program: string): Promise<any[]>;
}
```

For detailed examples of using these methods, please refer to the [Demox Labs Leo Wallet documentation](https://docs.leo.app/aleo-wallet-adapter).
