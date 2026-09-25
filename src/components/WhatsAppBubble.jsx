import { whatsappNumber } from "../constants";

const WhatsAppBubble = () => (
  <a
    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi James, I found your portfolio and would like to chat.")}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with James on WhatsApp"
    className="fixed bottom-5 right-5 z-[100] size-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-white"
  >
    <svg viewBox="0 0 32 32" className="size-8" fill="white" aria-hidden="true">
      <path d="M16.04 3C9.4 3 4 8.4 4 15.03c0 2.12.55 4.19 1.6 6.01L4 29l8.12-1.57a12 12 0 0 0 3.92.66C22.68 28.09 28 22.7 28 16.06 28 9.4 22.68 3 16.04 3Zm0 22.03c-1.2 0-2.38-.32-3.4-.93l-.5-.29-4.82.93.96-4.7-.32-.5a9.9 9.9 0 0 1-1.5-5.3c0-5.5 4.47-9.97 9.98-9.97 5.5 0 9.96 4.47 9.96 9.97 0 5.5-4.46 10.79-9.96 10.79Zm5.47-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  </a>
);

export default WhatsAppBubble;
