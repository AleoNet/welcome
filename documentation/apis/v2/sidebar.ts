import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/v2/provable-api",
    },
    {
      type: "category",
      label: "Auth",
      link: {
        type: "doc",
        id: "apis/v2/auth",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/register-a-new-user-and-issues-them-an-api-key",
          label: "Register a new user and issues them an api key",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Block",
      link: {
        type: "doc",
        id: "apis/v2/blocks",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/get-latest-block",
          label: "Get latest block",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-blocks-in-range",
          label: "Get blocks in range",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-latest-height",
          label: "Get latest block height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-latest-hash",
          label: "Get latest block hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-block-by-height",
          label: "Get block by height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-block-by-hash",
          label: "Get block by hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-block-hash-by-transaction-id",
          label: "Get block hash by transaction ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-latest-state-root",
          label: "Get latest state root",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-latest-state-root-alt",
          label: "Get latest state root (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-state-root-at-height",
          label: "Get state root at specified height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-state-root-at-height-alt",
          label: "Get state root at specified height (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-block-height-by-state-root",
          label: "Get block height by state root",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/find-block-height-by-state-root-alt",
          label: "Find block height by state root (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-state-path-by-commitment",
          label: "Get state path by commitment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-state-path-by-commitment-alt",
          label: "Get state path by commitment (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-height-by-block-hash",
          label: "Get height by block hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-height-by-block-hash-alt",
          label: "Get height by block hash (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-block-history",
          label: "Get block history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-latest-block-summary",
          label: "Get latest block summary",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-state-paths-for-commitments",
          label: "Get state paths for commitments",
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
          label: "Get latest committee",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-committee-by-height",
          label: "Get committee by height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-delegators-by-validator",
          label: "Get delegators by validator",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-consensus-version",
          label: "Get consensus version",
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
          id: "apis/v2/get-latest-defi-total-value-locked-tvl",
          label: "Get latest defi total value locked (TVL)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Delegated Proving",
      link: {
        type: "doc",
        id: "apis/v2/delegated-proving",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/submit-delegated-proving-request",
          label: "Submit delegated proving request",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Delegators",
      link: {
        type: "doc",
        id: "apis/v2/delegators",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/get-latest-delegators",
          label: "Get latest delegators",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Earnings",
      link: {
        type: "doc",
        id: "apis/v2/earnings",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/get-earnings-by-address",
          label: "Get earnings by address",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Metrics",
      link: {
        type: "doc",
        id: "apis/v2/metrics",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/get-node-address",
          label: "Get node address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/create-database-backup",
          label: "Create database backup",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/v2/get-daily-puzzle-rewards",
          label: "Get daily puzzle rewards",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-monthly-puzzle-rewards",
          label: "Get monthly puzzle rewards",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-apy-last-24-hours",
          label: "Get apy last 24 hours",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-monthly-apy-breakdown",
          label: "Get monthly apy breakdown",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-program-metrics-last-30-days",
          label: "Get program metrics (last 30 days)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-program-metrics-last-7-days",
          label: "Get program metrics (last 7 days)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-program-metrics-all-time",
          label: "Get program metrics (all time)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-program-metrics-in-range",
          label: "Get program metrics in range",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-total-prover-rewards",
          label: "Get total prover rewards",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-transaction-count-history",
          label: "Get transaction count history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-peer-count",
          label: "Get peer count",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-all-peers",
          label: "Get all peers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-all-peer-metrics",
          label: "Get all peer metrics",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Program",
      link: {
        type: "doc",
        id: "apis/v2/programs",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/get-program",
          label: "Get program by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-latest-edition-of-program",
          label: "Get latest edition of program",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-program-by-edition",
          label: "Get program by edition",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-program-mappings",
          label: "Get program mappings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-mapping-value",
          label: "Get mapping value",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-all-mapping-values-for-a-program-mapping",
          label: "Get all mapping values for a program mapping",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-transition-id-by-input-output-id",
          label: "Get transition ID by input/output ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-all-programs-summary",
          label: "Get all programs summary",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Provers",
      link: {
        type: "doc",
        id: "apis/v2/provers",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/get-all-provers",
          label: "Get all provers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-prover-solutions-by-address",
          label: "Get prover solutions by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-total-prover-rewards-by-address",
          label: "Get total prover rewards by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/broadcast-solution",
          label: "Broadcast solution",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/v2/broadcast-solution-alternative",
          label: "Broadcast solution (alternative)",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Record Scanner",
      link: {
        type: "doc",
        id: "apis/v2/record-scanner",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/register-a-view-key-with-the-record-scanner",
          label: "Register a view key with the record scanner",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/v2/get-the-status-of-a-record-scanner-job",
          label: "Get the status of a record scanner job",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/v2/check-if-record-serial-numbers-exist",
          label: "Check if record serial numbers exist",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/v2/check-if-record-tags-exist",
          label: "Check if record tags exist",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/v2/get-encrypted-records",
          label: "Get encrypted records",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-owned-records",
          label: "Get owned records",
          className: "api-method post",
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
          id: "apis/v2/get-memory-pool-solutions",
          label: "Get memory pool solutions",
          className: "api-method get",
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
          id: "apis/v2/get-total-supply",
          label: "Get total supply",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-total-supply-alt",
          label: "Get total supply (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-circulating-supply",
          label: "Get circulating supply",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-circulating-supply-alt",
          label: "Get circulating supply (alternative)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Transaction",
      link: {
        type: "doc",
        id: "apis/v2/transactions",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/get-transaction",
          label: "Get transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-transaction-by-transition-id",
          label: "Get transaction by transition ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/find-transaction-id-by-transition-alt",
          label: "Find transaction ID by transition ID (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-transaction-confirmed",
          label: "Get transaction confirmation status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-unconfirmed-transaction",
          label: "Get unconfirmed transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-transactions-by-block-identifier",
          label: "Get transactions by block identifier",
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
          id: "apis/v2/get-latest-transaction-summary",
          label: "Get latest transaction summary",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-transactions-by-address",
          label: "Get transactions by address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-memory-pool-transmissions",
          label: "Get memory pool transmissions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-memory-pool-transactions",
          label: "Get memory pool transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-program-deployment-transaction",
          label: "Get program deployment transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/find-program-deployment-tx-id",
          label: "Get program deployment transaction (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-program-deployment-by-edition",
          label: "Get program deployment by edition",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-program-deployment-by-edition-alternative",
          label: "Get program deployment by edition (alternative)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Transitions",
      link: {
        type: "doc",
        id: "apis/v2/transitions",
      },
      items: [
        {
          type: "doc",
          id: "apis/v2/find-transition-id-alt",
          label: "Find transition ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v2/get-transitions-by-address",
          label: "Get transitions by address",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
