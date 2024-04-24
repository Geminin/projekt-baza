export interface Opony {
  Klient: {
    Nazwa: string;
    Nr_Klienta: string;
  };
  Auto: {
    Nr_rejestracyjny: string;
    Nr_nadwozia: string;
    Marka: string;
    Model: string;
  };

  Marka: string;
  Model: string;
  Sezon: string;
  Ilosc: string;
  Felgi: string;
  DOT: string;

  Bieznik: {
    PL: string;
    PP: string;
    TL: string;
    TP: string;
  };
  Uwagi: string;
}
