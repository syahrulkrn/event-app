import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../../../redux/features/event/eventSlice";

const useGetEvent = () => {
  const dispatch = useDispatch();
  const { event, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.event
  );
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchText, setSearchText] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  useEffect(() => {
    dispatch(
      getEvent({
        page: pagination.current,
        limit: pagination.pageSize,
        sortBy: sortedInfo.order === "descend" ? 1 : 0,
        search: searchText,
      })
    );
  }, [dispatch, sortedInfo, searchText, pagination]);

  const handleTableChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
    setPagination({
      ...pagination,
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  return {
    event,
    isLoading,
    isError,
    isSuccess,
    message,
    handleTableChange,
    searchText,
    setSearchText,
    pagination: {
      ...pagination,
      total: isSuccess ? event.total : 0,
    },
    setPagination,
  };
};

export default useGetEvent;
