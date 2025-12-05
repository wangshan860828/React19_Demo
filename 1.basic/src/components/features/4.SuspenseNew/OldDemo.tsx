import { useEffect, useState } from "react";

const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time))
const fetchMessage = async () => {
    await delay(1000)
    return 'OldDemo-Hello, world!'
}
const Message = () => {
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchMessage().then((res) => setMessage(res)).finally(() => setIsLoading(false))
    }, [])  

  return <div>{isLoading ? 'Loading...' : message}</div>;
};

export const OldDemo = () => {
  return (
    <div>
      <Message />
    </div>
  );
};