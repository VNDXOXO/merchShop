export default function Marquee() {
  const text = "FREE WORLDWIDE SHIPPING ON ORDERS OVER $150 • NEW DROP AVAILABLE NOW • ";
  return (
    <div className="w-full bg-black text-white py-3 overflow-hidden z-50">
      <div className="whitespace-nowrap flex animate-marquee">
        <span className="text-sm font-semibold tracking-widest px-4">{text}</span>
        <span className="text-sm font-semibold tracking-widest px-4">{text}</span>
        <span className="text-sm font-semibold tracking-widest px-4">{text}</span>
        <span className="text-sm font-semibold tracking-widest px-4">{text}</span>
        <span className="text-sm font-semibold tracking-widest px-4">{text}</span>
        <span className="text-sm font-semibold tracking-widest px-4">{text}</span>
      </div>
    </div>
  );
}
