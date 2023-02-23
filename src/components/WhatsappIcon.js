import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import p1 from "../assets/dp.png";

/**
 * Repo: https://github.com/awran5/react-floating-whatsapp
 */

export default function WhatsappIcon() {
  return (
    <div className="container">
      <FloatingWhatsApp
        phoneNumber="+260973186816"
        accountName="John Chisowa"
        allowEsc
        allowClickAway
        notification
        avatar={p1}
        statusMessage="Typically replies within minutes"
        chatMessage="Hello! 🤝 I'm John, Frontend web developer"
        // notificationSound
      />
    </div>
  );
}
