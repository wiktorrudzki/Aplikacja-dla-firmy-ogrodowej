import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdMail, MdPhoneIphone } from "react-icons/md";

import { t } from "@i18n";
import NavContactBarItem from "./NavContactBarItem";

const NavContactBar = () => (
  <motion.div
    transition={{ type: "keyframes", duration: 0.5 }}
    variants={{
      hidden: { y: -100 },
      visible: { y: 0 },
    }}
    initial="hidden"
    animate="visible"
  >
    <Flex
      bgColor="primary.500"
      color="white"
      px="10"
      py="2"
      gap={[2, 6]}
      justifyContent="end"
      flexWrap="wrap"
    >
      <Link
        aria-label={t("email-address")}
        href={`mailto:${t("email-address")}`}
        color="white"
      >
        <NavContactBarItem icon={MdMail}>
          {t("email-address")}
        </NavContactBarItem>
      </Link>

      <Link
        aria-label={t("Zadzwoń")}
        href={`tel:${t("telephone-number")}`}
        color="white"
      >
        <NavContactBarItem icon={MdPhoneIphone}>
          {t("telephone-number")}
        </NavContactBarItem>
      </Link>
    </Flex>
  </motion.div>
);

export default NavContactBar;
