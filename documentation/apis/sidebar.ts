import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/provable-api",
    },
    {
      type: "category",
      label: "Block Data",
      link: {
        type: "doc",
        id: "apis/blocks",
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "apis/get-latest-block",
          label: "Get Latest Block",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-latest-block-alt",
          label: "Get Latest Block (Alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-latest-height",
          label: "Get Latest Block Height",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-latest-height-alt",
          label: "Get Latest Block Height (Alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-latest-hash",
          label: "Get Latest Block Hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-latest-hash-alt",
          label: "Get Latest Block Hash (Alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/find-block-hash",
          label: "Find Block Hash by Transaction ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-block",
          label: "Get Block by Height or Hash",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-block-transactions",
          label: "Get Block Transactions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Network Data",
      link: {
        type: "doc",
        id: "apis/network",
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "apis/get-latest-committee",
          label: "Get Latest Committee",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-latest-committee-alt",
          label: "Get Latest Committee (Alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-latest-state-root",
          label: "Get Latest State Root",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-latest-state-root-alt",
          label: "Get Latest State Root (Alternative)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-total-supply",
          label: "Get Total Supply",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-circulating-supply",
          label: "Get Circulating Supply",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Program Data",
      link: {
        type: "doc",
        id: "apis/programs",
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "apis/find-program-deployment-tx-id",
          label: "Find Transaction ID for Program Deployment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-program",
          label: "Get Program",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-program-by-edition",
          label: "Get Program by Edition",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-program-mappings",
          label: "Get Program Mappings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-mapping-value",
          label: "Get Mapping Value",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Transaction Data",
      link: {
        type: "doc",
        id: "apis/transactions",
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "apis/find-transaction-id-by-transition",
          label: "Find Transaction ID by Transition ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/find-transition-id",
          label: "Find Transition ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-transaction",
          label: "Get Transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-transaction-confirmed",
          label: "Get Transaction Confirmation Status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-unconfirmed-transaction",
          label: "Get Unconfirmed Transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/broadcast-transaction",
          label: "Broadcast Transaction",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
