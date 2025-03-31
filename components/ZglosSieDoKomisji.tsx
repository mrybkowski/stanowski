import Link from "next/link";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function ZglosSieDoKomisji() {
  return (
    <Link href="/okregi">
      <Button>
        zgłoś się do komisji
        <ArrowRight />
      </Button>
    </Link>
  );
}
