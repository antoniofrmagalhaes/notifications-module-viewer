import React from "react";

import NotificationsList from "../NotificationsList";
import OpenNotificationListButton from "../OpenNotificationListButton";

import { NotificationProvider } from "../../contexts/NotificationContext";

import { Container } from "./styles";

const Notifications: React.FC = () => {
  return (
    <NotificationProvider>
      <Container>
        <OpenNotificationListButton />
        <NotificationsList />
      </Container>
    </NotificationProvider>
  );
};

export default Notifications;
