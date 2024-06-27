import React, { PropsWithChildren } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";

export interface ActionButton {
  buttonText: string | React.ElementType;
  onClickFunction: () => void;
}

interface OptxComplexCardProps extends PropsWithChildren {
  title: string;
  width: string;
  children: React.ReactNode;
  subTitle?: string;
  avatar?: string | null;
  avatarColor?: string;
  headerActionButtons?: ActionButton[];
  cardActionButtons?: ActionButton[];
}
const OptxComplexCard = ({
  title,
  width,
  children,
  subTitle = "",
  avatar = null,
  avatarColor = "blue",
  headerActionButtons,
  cardActionButtons,
}: OptxComplexCardProps) => {
  return (
    <Card sx={{ width: width, height: "auto" }}>
      <CardHeader
        avatar={
          avatar ? (
            <Avatar sx={{ bgcolor: avatarColor }} aria-label="recipe">
              {avatar}
            </Avatar>
          ) : null
        }
        action={
          headerActionButtons ? (
            <>
              {headerActionButtons.map(
                (headerAction: ActionButton, index: number) => (
                  <IconButton
                    onClick={headerAction.onClickFunction}
                    key={index}
                  >
                    {typeof headerAction.buttonText === "string" ? (
                      headerAction.buttonText
                    ) : (
                      <headerAction.buttonText />
                    )}
                  </IconButton>
                )
              )}
            </>
          ) : null
        }
        title={title}
        subheader={subTitle}
      />
      <CardContent>{children}</CardContent>
      {cardActionButtons && (
        <CardActions>
          {cardActionButtons.map((cardAction: any, index: number) => (
            <Button
              size="small"
              onClick={cardAction.onClickFunction}
              key={index}
            >
              {cardAction.buttonText}
            </Button>
          ))}
        </CardActions>
      )}
    </Card>
  );
};

export default OptxComplexCard;
