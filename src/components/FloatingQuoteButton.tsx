import { ChatWidget } from "./ChatWidget";

// Floating chat bubble shown on every page (same widget as Air Time Mechanical).
// If a GoHighLevel chat-widget script is ever added to index.html, render null here instead so the two don't clash.
export const FloatingQuoteButton = () => <ChatWidget />;
export default FloatingQuoteButton;
