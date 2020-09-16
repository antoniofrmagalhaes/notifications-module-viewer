import React, { useState, useCallback, createContext, useEffect } from "react";
import axios from "axios";
import { parseISO, formatDistance } from "date-fns";

import useFindNotifications from "../hooks/useFindNotifications";

interface INotification {
  _id: string;
  content: string;
  read: boolean;
  timeDistance?: string;
  createdAt: string;
}

interface INotificationContextProps {
  listOpen: boolean;
  loading: boolean;
  totalUnread: number;
  notifications: INotification[];
  error: boolean;
  hasMore: boolean;
  markAsRead: (_id: string) => Promise<void>;
  setPageNumber: () => void;
  toggleNotificationsList: () => void;
  selectAll: () => void;
  selectAllUnread: () => void;
}

export const NotificationContext = createContext<INotificationContextProps>(
  {} as INotificationContextProps
);

export const NotificationProvider: React.FC = ({ children }) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [page, setPage] = useState(1);
  const [unread, setUnread] = useState("");
  const {
    loading,
    result,
    totalUnread: unreadNumber,
    error,
    hasMore,
  } = useFindNotifications(page, unread);
  const [open, setOpen] = useState(false);
  const [totalUnread, setTotalUnread] = useState(unreadNumber);
  const markAsRead = useCallback(
    async (_id: string) => {
      await axios({
        method: "PATCH",
        url: `http://localhost:4000/notifications/${_id}`,
      });
      setNotifications(
        notifications.map((notification) =>
          notification._id === _id
            ? { ...notification, read: true }
            : notification
        )
      );
      setTotalUnread((prevTotalUnread) => prevTotalUnread - 1);
    },
    [notifications]
  );

  const setPageNumber = useCallback(() => {
    setPage((prevPageNumber) => prevPageNumber + 1);
  }, []);

  const toggleNotificationsList = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const selectAll = useCallback(() => {
    setUnread("");
    setPage(1);
  }, []);

  const selectAllUnread = useCallback(() => {
    setUnread("true");
    setPage(1);
  }, []);

  useEffect(() => {
    /* Format time distance */
    const notifications = result.map((notification) => ({
      ...notification,
      timeDistance: formatDistance(
        parseISO(notification.createdAt),
        new Date(),
        { addSuffix: true }
      ),
    }));
    setNotifications(notifications);
    setTotalUnread(unreadNumber);
  }, [result, unreadNumber]);

  return (
    <NotificationContext.Provider
      value={{
        loading,
        notifications,
        totalUnread,
        markAsRead,
        error,
        hasMore,
        setPageNumber,
        listOpen: open,
        toggleNotificationsList,
        selectAll,
        selectAllUnread,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
