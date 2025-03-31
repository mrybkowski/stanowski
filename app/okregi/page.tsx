"use client";

import Button from "@/components/Button";
import ZeroKonkretow from "@/components/ZeroKonkretow";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, "Imię jest wymagane"),
  lastName: z.string().min(1, "Nazwisko jest wymagane"),
  email: z.string().email("Nieprawidłowy adres e-mail"),
  phone: z.string().min(6, "Numer telefonu jest wymagany"),
  region: z.string().min(1, "Wybór powiatu jest wymagany"),
  isAdult: z.boolean().refine((val) => val, "Musisz być pełnoletni"),
  consent: z.boolean().refine((val) => val, "Musisz wyrazić zgodę"),
});

export default function Okregi() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    console.log("data: ", data);
    reset();
    alert("Brak obsługi formularza");
  };

  return (
    <section
      id="content"
      className="xl:mx-32 md:mx-10 mx-0 bg-white xl:p-16 p-10 -mt-10 relative md:rounded-xl rounded-none grid md:grid-cols-2 grid-cols-1 gap-10"
    >
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-bold">Komitet wyborczy</h2>
        <p>
          Chcesz reprezentować&nbsp;
          <span className="text-accent font-bold">
            Komitet Krzysztofa Jakuba Stanowskiego
          </span>
          &nbsp;w komisjach? Wypełnij formularz, a na pewno się z Tobą
          skontaktujemy.
        </p>
        <div className="hidden sm:block">
          <ZeroKonkretow />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label>Imię*</label>
        <input
          {...register("firstName")}
          placeholder="Jan"
          className="border p-4 mt-1 rounded-lg w-full"
          required
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}

        <label>Nazwisko*</label>
        <input
          {...register("lastName")}
          placeholder="Kowalski"
          className="border p-4 mt-1 rounded-lg w-full"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}

        <label>Adres e-mail*</label>
        <input
          {...register("email")}
          type="email"
          placeholder="jan.kowalski@example.pl"
          className="border p-4 mt-1 rounded-lg w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <label>Numer telefonu*</label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="333 222 111"
          className="border p-4 mt-1 rounded-lg w-full"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}

        <label>Powiat*</label>
        <select
          {...register("region")}
          className="border p-4 mt-1 rounded-lg w-full"
        >
          <option value="">Wybierz powiat</option>
          <option value="Warszawa">Warszawa</option>
          <option value="Kraków">Kraków</option>
        </select>
        {errors.region && (
          <p className="text-red-500 text-sm">{errors.region.message}</p>
        )}

        <label className="flex items-center">
          <input type="checkbox" {...register("isAdult")} className="mr-2" />
          Oświadczam, że jestem osobą pełnoletnią
        </label>
        {errors.isAdult && (
          <p className="text-red-500 text-sm">{errors.isAdult.message}</p>
        )}

        <label className="flex items-center">
          <input type="checkbox" {...register("consent")} className="mr-2" />{" "}
          Zgadzam się na przetwarzanie danych
        </label>
        {errors.consent && (
          <p className="text-red-500 text-sm">{errors.consent.message}</p>
        )}

        <Button>
          wyślij
          <ArrowRight />
        </Button>
      </form>
    </section>
  );
}
