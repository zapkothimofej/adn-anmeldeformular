import type { Metadata } from "next";
import BookingPage from "@/components/BookingPage";

export const metadata: Metadata = {
  title: "ADN KI-Transformation | Digitales Training buchen",
  description:
    "Termine buchen für das digitale ADN KI-Training mit yesterday.",
};

export default function DigitalPage() {
  return <BookingPage variant="digital" />;
}
