const formFieldsMetadata = [
  {
    id: "Email Address",
    name: "Email Address",
    type: "email",
    required: true,
    icon: "envelope-at-fill",
    placeholder: "Enter a value...",
    disabled: true,
  },
  {
    id: "Address",
    name: "Address",
    type: "text",
    required: true,
    icon: "geo-alt-fill",
    placeholder: "Enter a value...",
    disabled: true,
  },
  {
    id: "Source of Enquiry",
    name: "Source of Enquiry",
    type: "select",
    required: true,
    icon: "person-fill",
    placeholder: "Enter a value...",
    disabled: true,
  },
  {
    id: "Model",
    name: "Model",
    type: "select",
    required: true,
    icon: "car-front-fill",
    placeholder: "Enter a value...",
    disabled: true,
  },
  {
    id: "Sales Person Name",
    name: "Sales Person Name",
    type: "select",
    required: true,
    icon: "person-fill",
    placeholder: "Enter a value...",
    disabled: true,
  },
  {
    id: "Customer Type",
    name: "Customer Type",
    type: "select",
    required: true,
    icon: "patch-question",
    placeholder: "Enter a value...",
  },
  {
    id: "Visit Type",
    name: "Visit Type",
    type: "select",
    required: true,
    icon: "patch-question",
    placeholder: "Enter a value...",
  },
  {
    id: "CRM ID",
    name: "CRM ID",
    type: "text",
    required: true,
    icon: "hash",
    placeholder: "Enter a value...",
  },
  {
    id: "Enquiry Status",
    name: "Enquiry Status",
    type: "select",
    required: true,
    icon: "sticky-fill",
    placeholder: "Enter a value...",
  },
  {
    id: "Next Follow Up Date",
    name: "Next Follow Up Date",
    type: "date",
    required: true,
    icon: "sticky-fill",
    placeholder: "Enter a value...",
  },
  {
    id: "Priority",
    name: "Priority",
    type: "select",
    required: true,
    icon: "sticky-fill",
    placeholder: "Enter a value...",
  },
  {
    id: "Customer Remarks",
    name: "Customer Remarks",
    type: "text",
    required: true,
    icon: "sticky-fill",
    placeholder: "Enter a value...",
    as: "textarea",
  },
];

const searchFieldsMeta = [
  {
    id: "Enquiry Number",
    name: "Enquiry Number",
    icon: "person-fill",
    required: true,
    placeholder: "Pick a number...",
  },
  {
    id: "Customer Name",
    name: "Customer Name",
    required: true,
    icon: "person-fill",
    placeholder: "Enter a value...",
  },
  {
    id: "Contact Number",
    name: "Contact Number",
    required: true,
    icon: "telephone-fill",
    placeholder: "Enter a value...",
  },
];

export default formFieldsMetadata;
export { searchFieldsMeta };
