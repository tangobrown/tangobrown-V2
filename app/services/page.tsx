import { redirect } from "next/navigation";

// Bare /services URL redirects to the first service (matches the
// prototype's Services nav click).
export default function ServicesIndex() {
  redirect("/services/websites");
}
