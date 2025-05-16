import kombiGif from './assets/welcome-kombi.mp4';
import { Button } from './shadcn/button';

function Welcome() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="w-full max-w-[50rem]">
        <video
          src={kombiGif}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto rounded-lg"
          aria-label="Welcome Kombi animation"
        />
      </div>
      <p className="p-4 text-center">
      The call is up for the Kombi nation
      </p>
      <button
        type="button"
        className="bg-green-400 text-primary font-mono font-semibold py-3 px-8 border-b-4 border-green-700 active:border-b-0 active:translate-y-0.5 hover:bg-green-600 transition-all cursor-pointer"
      >
        CONNECT WALLET
      </button>
    </div>
  );
}

export default Welcome; 