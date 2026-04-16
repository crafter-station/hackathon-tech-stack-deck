import { Tweet as ReactTweet } from "react-tweet";

type TweetProps = {
  id: string;
};

export function Tweet({ id }: TweetProps) {
  return (
    <div className="tweet-shell max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.32)] sm:p-4">
      <ReactTweet id={id} />
    </div>
  );
}
