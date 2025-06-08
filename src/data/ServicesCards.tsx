import {
  MdAcUnit,
  MdBusinessCenter,
  MdLandscape,
  MdLocalFlorist,
  MdOpacity,
} from "react-icons/md";
import { CompanyService } from "@src/types/services";
import services from "./company-services.json";

const companyServicesCards: CompanyService[] = [
  {
    text: services.UTRZYMANIE_TERENOW_ZEWNETRZNYCH,
    icon: MdLandscape,
    imageId: "3",
  },
  {
    text: services.ZAKLADANIE_TERENOW_ZIELONYCH_DLA_FIRM,
    icon: MdBusinessCenter,
    imageId: "5",
  },
  {
    text: services.MYCIE_CISNIENIOWE,
    icon: MdOpacity,
    imageId: "12",
  },
  {
    text: services.ODSNIEZANIE,
    icon: MdAcUnit,
    imageId: "7",
  },
  {
    text: services.ROSLINY_DO_BIURA,
    icon: MdLocalFlorist,
    imageId: "8",
  },
];

// const companyServicesCards: CompanyService[] = [
//   {
//     text: services.UTRZYMANIE_TERENOW_ZEWNETRZNYCH,
//     icon: MdLandscape,
//     imageId: "3",
//   },
//   {
//     text: services.ZAKLADANIE_TERENOW_ZIELONYCH_DLA_FIRM,
//     icon: MdBusinessCenter,
//     imageId: "5",
//   },
//   {
//     text: services.MYCIE_CISNIENIOWE,
//     icon: MdOpacity,
//     imageId: "12",
//   },
//   {
//     text: services.ODSNIEZANIE,
//     icon: MdAcUnit,
//     imageId: "7",
//   },
//   {
//     text: services.ROSLINY_DO_BIURA,
//     icon: MdLocalFlorist,
//     imageId: "8",
//   },
// ];

export { companyServicesCards };
