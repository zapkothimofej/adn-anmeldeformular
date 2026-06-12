import type { Metadata } from "next";
import BookingPage from "@/components/BookingPage";

export const metadata: Metadata = {
  title: "ADN KI-Transformation | Training vor Ort buchen",
  description:
    "Termine buchen für das ADN KI-Training vor Ort mit yesterday.",
};

export default function Home() {
  return <BookingPage variant="vor-ort" />;
}
