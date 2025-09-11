import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/v1/provable-api",
    },
    {
      type: "category",
      label: "Block",
      link: {
        type: "doc",
        id: "apis/v1/blocks",
      },
      items: [
        {
          type: "doc",
          id: "apis/v1/get-latest-block",
          label: "Get latest block",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-latest-block-alt",
          label: "Get latest block (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-blocks-in-range",
          label: "Get blocks in range",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-latest-height",
          label: "Get latest block height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-latest-height-alt",
          label: "Get latest block height (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-latest-hash",
          label: "Get latest block hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-latest-hash-alt",
          label: "Get latest block hash (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-height-by-block-hash",
          label: "Get height by block hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/find-block-hash",
          label: "Find block hash by transaction ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-block",
          label: "Get block by height or hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-block-transactions",
          label: "Get block transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-block-history",
          label: "Get block history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-latest-state-root",
          label: "Get latest state root",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-latest-state-root-alt",
          label: "Get latest state root (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-state-root-at-height",
          label: "Get state root at specified height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/find-block-height-by-state-root",
          label: "Get block height by state root",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-state-path-by-commitment",
          label: "Get state path by commitment",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Committee",
      link: {
        type: "doc",
        id: "apis/v1/committee",
      },
      items: [
        {
          type: "doc",
          id: "apis/v1/get-latest-committee",
          label: "Get latest committee",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-latest-committee-alt",
          label: "Get latest committee (alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-committee-by-height",
          label: "Get committee by height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-delegators-by-validator",
          label: "Get delegators by validator",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Program",
      link: {
        type: "doc",
        id: "apis/v1/programs",
      },
      items: [
        {
          type: "doc",
          id: "apis/v1/find-program-deployment-tx-id",
          label: "Find transaction ID for program deployment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-program",
          label: "Get program",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-latest-edition-of-program",
          label: "Get latest edition of program",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-program-by-edition",
          label: "Get program by edition",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-program-mappings",
          label: "Get program mappings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-mapping-value",
          label: "Get mapping value",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Solution",
      link: {
        type: "doc",
        id: "apis/v1/solutions",
      },
      items: [
        {
          type: "doc",
          id: "apis/v1/broadcast-solution",
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
        id: "apis/v1/supply",
      },
      items: [
        {
          type: "doc",
          id: "apis/v1/get-total-supply",
          label: "Get total supply",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-latest-total-supply",
          label: "Get latest total supply",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-circulating-supply",
          label: "Get circulating supply",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-latest-circulating-supply",
          label: "Get latest circulating supply",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Transaction",
      link: {
        type: "doc",
        id: "apis/v1/transactions",
      },
      items: [
        {
          type: "doc",
          id: "apis/v1/get-program-deployment-by-edition",
          label: "Get program deployment by edition",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/find-transaction-id-by-transition",
          label: "Find transaction ID by transition ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/find-transition-id",
          label: "Find transition ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-transaction",
          label: "Get transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-transaction-confirmed",
          label: "Get transaction confirmation status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/get-unconfirmed-transaction",
          label: "Get unconfirmed transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/v1/broadcast-transaction",
          label: "Broadcast transaction",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
