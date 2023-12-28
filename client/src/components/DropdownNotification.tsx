import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Types
type NotificationType = {
  id: string;
  title: string;
  body: string;
  date: string;
};
const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsQueue, setNotificationsQueue] = useState<
    NotificationType[]
  >([]);
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // DEMO notifications
  // const demoNotifications = [
  //   {
  //     id: String(Math.random()).slice(7, 12),
  //     title: "Tip #1",
  //     body: "The Dashboard shows all usage stats.",
  //     date: getFormattedDate(),
  //   },
  //   {
  //     id: String(Math.random()).slice(7, 12),
  //     title: "Tip #2",
  //     body: "See more specific metrics from the sidebar.",
  //     date: getFormattedDate(),
  //   },
  //   {
  //     id: String(Math.random()).slice(7, 12),
  //     title: "Tip #3",
  //     body: "Make sure you try out light and dark mode from the Settings page.",
  //     date: getFormattedDate(),
  //   },
  // ];
  // function getFormattedDate() {
  //   const months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];

  //   const currentDate = new Date();
  //   const day = currentDate.getDate();
  //   const month = months[currentDate.getMonth()];
  //   const year = currentDate.getFullYear();

  //   const formattedDate = `${day} ${month} ${year}`;

  //   return formattedDate;
  // }
  // useEffect(() => {
  //   // Function to add an item to the state after a specified delay
  //   const addItemWithDelay = (item: NotificationType, delay: number) => {
  //     console.log(notificationsQueue);
  //     setTimeout(() => {
  //       setNotificationsQueue((prevData) => [...prevData, item]);
  //     }, delay);
  //   };

  //   // Adding items with delays
  //   addItemWithDelay(demoNotifications[0], 10000); // 10 seconds
  //   addItemWithDelay(demoNotifications[1], 40000); // 40 seconds
  //   addItemWithDelay(demoNotifications[2], 80000); // 1 minute 20 seconds
  // }, []);
  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        to="#"
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
      >
        {notificationsQueue.length ? (
          <span className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1">
            <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
          </span>
        ) : null}

        <svg
          className="fill-current duration-300 ease-in-out"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1999 14.9343L15.6374 14.0624C15.5249 13.8937 15.4687 13.7249 15.4687 13.528V7.67803C15.4687 6.01865 14.7655 4.47178 13.4718 3.31865C12.4312 2.39053 11.0812 1.7999 9.64678 1.6874V1.1249C9.64678 0.787402 9.36553 0.478027 8.9999 0.478027C8.6624 0.478027 8.35303 0.759277 8.35303 1.1249V1.65928C8.29678 1.65928 8.24053 1.65928 8.18428 1.6874C4.92178 2.05303 2.4749 4.66865 2.4749 7.79053V13.528C2.44678 13.8093 2.39053 13.9499 2.33428 14.0343L1.7999 14.9343C1.63115 15.2155 1.63115 15.553 1.7999 15.8343C1.96865 16.0874 2.2499 16.2562 2.55928 16.2562H8.38115V16.8749C8.38115 17.2124 8.6624 17.5218 9.02803 17.5218C9.36553 17.5218 9.6749 17.2405 9.6749 16.8749V16.2562H15.4687C15.778 16.2562 16.0593 16.0874 16.228 15.8343C16.3968 15.553 16.3968 15.2155 16.1999 14.9343ZM3.23428 14.9905L3.43115 14.653C3.5999 14.3718 3.68428 14.0343 3.74053 13.6405V7.79053C3.74053 5.31553 5.70928 3.23428 8.3249 2.95303C9.92803 2.78428 11.503 3.2624 12.6562 4.2749C13.6687 5.1749 14.2312 6.38428 14.2312 7.67803V13.528C14.2312 13.9499 14.3437 14.3437 14.5968 14.7374L14.7655 14.9905H3.23428Z"
            fill=""
          />
        </svg>
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          {notificationsQueue.map((notification: NotificationType) => (
            <li key={notification.id}>
              <Link
                className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                to="#"
              >
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm">
                      <span className="text-black dark:text-white">
                        {notification.title}
                      </span>{" "}
                      {notification.body}
                    </p>

                    <p className="text-xs">{notification.date}</p>
                  </div>

                  <button
                    // ref={trigger}
                    onClick={() =>
                      setNotificationsQueue(
                        notificationsQueue.filter(
                          (x) => x.id !== notification.id
                        )
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke bg-white text-primary dark:border-strokedark dark:bg-[#4f5e77] dark:text-white"
                  >
                    <svg
                      className="h-3.5 w-3.5 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/* 12 May 2025 */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DropdownNotification;
