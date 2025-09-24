import { useEffect } from 'react';

const CRISP_WEBSITE_ID = 'b1db5fec-2104-4c63-a771-59dcdcd17215';

export default function Crisp() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ((window as any).$crisp) return;
    (window as any).$crisp = [];
    (window as any).CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;
    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}


