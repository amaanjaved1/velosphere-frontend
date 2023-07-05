import React from "react";
import { useMediaQuery } from "@mui/material";
import { Card } from "components/card/card";
import { BigCard } from "components/card/bigcard";

export const CardContainer = ({
  profileEmail,
  cardContent,
  isMyProfile,
  user,
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 518px)");

  return (
    <>
      {isSmallScreen ? (
        <Card
          profileEmail={profileEmail}
          cardContent={cardContent}
          isMyProfile={isMyProfile}
          user={user}
        />
      ) : (
        <BigCard
          profileEmail={profileEmail}
          cardContent={cardContent}
          isMyProfile={isMyProfile}
          user={user}
        />
      )}
    </>
  );
};
