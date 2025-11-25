export const getMenu = (t) => [
  {
    name: t("home"),
    to: "/"
  },
  {
    name: t("product"),
    to: "/product"
  },
  {
    name: t("news"),
    to: "/news"
  },
  {
    name: t("contact_us"),
    to: "/contact"
  }
]

export const getProductTypes = (t) => [
  {
    name: t("green_resin"),
    model: '1-1',
    type: 'green_resin',
    subType: []
  },
  {
    name: t("red_resin"),
    model: '1-2',
    type: 'red_resin',
    subType: []
  },
  {
    name: t("white_resin"),
    model: '1-3',
    type: 'white_resin',
    subType: []
  },
  {
    name: t("orange_resin"),
    model: '1-4',
    type: 'orange_resin',
    subType: []
  }
]

export const contactInfoList = [
  {
    type: "email",
    icon: "i-lucide-mail",
    label: "EMAIL",
    value: "melamine_resin@gmail.com",
  },
  {
    type: "phone",
    icon: "i-lucide-smartphone",
    label: "PHONE NUMBER",
    value: "+86-18561632796",
  },
  {
    icon: "i-lucide-map-pin",
    label: "ADDRESS",
    value: "No.16 Street, Industrial Park, Shannxi Province, China",
  }
]