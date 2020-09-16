import React, { useRef, useCallback, useContext } from "react";
import { NotificationContext } from "../../contexts/NotificationContext";
import Loading from "../Loading";

import {
  Container,
  Header,
  Options,
  Scroll,
  Notification,
  InfoContainer,
  Footer,
  LoadingContainer,
} from "./styles";

const NotificationsList: React.FC = () => {
  const {
    notifications,
    markAsRead,
    setPageNumber,
    hasMore,
    listOpen,
    loading,
    selectAll,
    selectAllUnread,
  } = useContext(NotificationContext);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber();
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, setPageNumber]
  );
  return (
    <Container open={listOpen}>
      <Header>
        <p>Notifications</p>
        <Options>
          <button onClick={selectAll}>All</button>
          <button onClick={selectAllUnread}>Unread</button>
        </Options>
      </Header>
      <Scroll>
        {notifications.map(({ _id, content, read, timeDistance }) => (
          <Notification key={_id} ref={lastElementRef}>
            <p>{content}</p>
            <InfoContainer>
              <time>{timeDistance}</time>
              {!read && (
                <button onClick={() => markAsRead(_id)}>Mark as read</button>
              )}
            </InfoContainer>
          </Notification>
        ))}
      </Scroll>
      <Footer>
        {loading && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}
        <p>View All</p>
      </Footer>
    </Container>
  );
};

export default NotificationsList;
