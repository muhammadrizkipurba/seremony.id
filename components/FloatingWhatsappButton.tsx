"use client"
import { ContactInfo } from "@/constant";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const FloatingWhatsappButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber={ContactInfo.whatsapp.value.slice(1)}
      accountName={"Seremony Assistant"}
      avatar="/logo/logo-color.svg"
      statusMessage="Online"
      chatMessage="Hi, Ada yang bisa kami bantu?"
      allowClickAway={false}
      allowEsc={true}
      notification={true}
      notificationDelay={60000}
      notificationSound={true}
      className="z-40"
      chatboxClassName="rounded-md! right-8.5!"
    />
  )
}

export default FloatingWhatsappButton