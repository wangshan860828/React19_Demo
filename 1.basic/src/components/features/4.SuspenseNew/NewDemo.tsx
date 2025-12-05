import { Suspense, use } from "react";

const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time))
const fetchMessage = async () => {
  await delay(1000) 
  return Promise.resolve({ message: 'NewDemo-Hello, world!', time: Date.now()})
}
const Message = ({ messagePromise }: { messagePromise: Promise<{ message: string }> }) => {
  const message = use(messagePromise)
  console.log('message:', message)

  return <div>{message.message}</div>;
};

export const NewDemo = () => {
  const messagePromise = fetchMessage()
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Message messagePromise={messagePromise}/>
      </Suspense>
    </div>
  );
};