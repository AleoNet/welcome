import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/v2/provable-api",
    },
    {
      type: "category",
      label: "Blocks",
      link: {
        type: "doc",
        id: "apis/v2/blocks",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/get-latest-block",
          label: "Latest block",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-latest-height",
          label: "Latest block height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-latest-hash",
          label: "Latest block hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/block-by-height-or-hash",
          label: "Block by height or hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/find-block-hash-by-transaction-id",
          label: "Find block hash by transaction ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/transactions-by-block-height",
          label: "Transactions by block height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/blocks-in-range",
          label: "Blocks in range",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-latest-state-root",
          label: "Latest state root",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-state-root-at-height",
          label: "State root at specified height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/find-block-height-by-state-root",
          label: "Find block height by state root",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-state-path-by-commitment",
          label: "State path by commitment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/state-paths-for-commitments",
          label: "State paths for commitments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-height-by-block-hash",
          label: "Height by block hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/latest-block-summary",
          label: "Latest block summary",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Committee",
      link: {
        type: "doc",
        id: "apis/v2/committee",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/get-latest-committee",
          label: "Latest committee",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/committee-by-height",
          label: "Committee by height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/delegators-by-validator-address",
          label: "Delegators by validator address",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Programs",
      link: {
        type: "doc",
        id: "apis/v2/programs",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/get-program",
          label: "Program by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/find-transition-id-by-input-output-id",
          label: "Find transition ID by input/output ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-program-mappings",
          label: "Program mappings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/latest-edition-of-program",
          label: "Latest edition of program",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-program-by-edition",
          label: "Program by edition",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-mapping-value",
          label: "Program mapping value",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/program-deployment-transaction",
          label: "Program deployment transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/program-deployment-by-edition",
          label: "Program deployment by edition",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/historical-values-for-credits-aleo-mappings",
          label: "Historical values for `credits.aleo` mappings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/program-metrics",
          label: "Program metrics",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Solutions",
      link: {
        type: "doc",
        id: "apis/v2/solutions",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/broadcast-solution",
          label: "Broadcast solution",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Supply",
      link: {
        type: "doc",
        id: "apis/v2/supply",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/total-supply-credits",
          label: "Total supply - credits",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-total-supply",
          label: "Total supply - microcredits",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/latest-circulating-supply-credits",
          label: "Latest Circulating supply - credits",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/circulating-supply-microcredits",
          label: "Circulating supply - microcredits",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      link: {
        type: "doc",
        id: "apis/v2/transactions",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/find-transaction-by-transition-id",
          label: "Find transaction by transition ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-transaction-confirmed",
          label: "Confirmed transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-unconfirmed-transaction",
          label: "Unconfirmed transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/broadcast-transaction",
          label: "Broadcast transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/v2/transaction-metrics-daily",
          label: "Transaction metrics daily",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/latest-transaction-summary",
          label: "Latest transaction summary",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "DeFi",
      link: {
        type: "doc",
        id: "apis/v2/de-fi",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/latest-defi-total-value-locked-tvl",
          label: "Latest defi total value locked (TVL)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/token-price-history",
          label: "Token price history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-tokens",
          label: "Token Details",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Staking",
      link: {
        type: "doc",
        id: "apis/v2/staking",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/latest-delegators",
          label: "Latest delegators",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/earnings-by-address",
          label: "Earnings by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/apy-last-24-hours",
          label: "Apy last 24 hours",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Proving",
      link: {
        type: "doc",
        id: "apis/v2/proving",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/daily-puzzle-rewards",
          label: "Daily puzzle rewards",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/total-prover-metrics",
          label: "Total prover metrics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/all-provers",
          label: "All provers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/prover-solutions-by-prover-address",
          label: "Prover solutions by prover address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/total-prover-rewards-by-address",
          label: "Total prover rewards by address",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Address",
      link: {
        type: "doc",
        id: "apis/v2/address",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/transactions-by-address",
          label: "Transactions by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/transitions-by-address",
          label: "Transitions by address",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
