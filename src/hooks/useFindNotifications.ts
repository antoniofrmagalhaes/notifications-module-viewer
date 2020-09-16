/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface INotification {
  _id: string;
  content: string;
  read: boolean;
  createdAt: string;
}

interface IData {
  total_unread: number;
  result: INotification[];
}

export default function useFindNotifications(
  pageNumber: number,
  unread: string
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalUnread, setTotalUnread] = useState(0);
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [hasMore, setHasMore] = useState(false);
  let cancel: () => void;

  useEffect(() => {
    setNotifications([]);
  }, [unread]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      axios({
        method: "GET",
        url: "http://localhost:4000/notifications",
        params: { page: pageNumber, unread },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then(({ data }: AxiosResponse<IData>) => {
          setTotalUnread(data.total_unread);
          setNotifications((prevData) => {
            if (prevData) {
              return [...prevData, ...data.result];
            }
            return [...data.result];
          });
          setHasMore(data.result.length > 0);
          setLoading(false);
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
          setError(true);
        });
      return () => cancel();
    }
    fetchData();
  }, [pageNumber, unread]);
  return { loading, result: notifications, error, hasMore, totalUnread };
}
