import React, { useContext } from "react";

import { NotificationContext } from "../../contexts/NotificationContext";

import { Container, NotificationsIcon } from "./styles";

const OpenNotificationListButton: React.FC = () => {
  const { toggleNotificationsList, totalUnread } = useContext(
    NotificationContext
  );
  return (
    <Container onClick={toggleNotificationsList}>
      <NotificationsIcon />
      {totalUnread !== 0 && (
        <div>
          <span>{totalUnread}</span>
        </div>
      )}
    </Container>
  );
};

export default OpenNotificationListButton;
