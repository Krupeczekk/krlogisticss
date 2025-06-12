const definitions = [
    {
        title: "Spedytor",
        description: "Osoba zajmująca się całą organizacją transportu towarów."
    },
    {
        title: "Spedycja",
        description: "Działania polegające na organizowaniu trasportu towarów."
    },
    {
        title: "TSL",
        description: "Transport-Spedycja-Logistyka."
    },
    {
        title: "Umowa",
        description: "Dokument potwierdzający ustalenie między co najmniej dwoma stronami."
    },
    {
        title: "Konwencja",
        description: "Oficjalne porozumienie między państawmi w określonej sprawie"
    },
    {
        title: "CMR",
        description: "Międzynarodowy list przewozowy - potwierdza zawarcie umowy między nadawcą a przewoźnikiem."
    },
    {
        title: "Faktura",
        description: "Dokument potwierdzający sprzedaż towaru lub usługi."
    },
    {
        title: "Zasada 7W",
        description: "Dostarczenie właściwego produktu o właściwej ilości, stanie, czasie, miejscu, odbiorcy i cenie."
    },
    {
        title: "Opakowanie",
        description: "Przedmiot służący do przechowywania, trasportowania oraz przede wszystki ochrony i zachowanie jakości towaru."
    },
    {
        title: "Znaki manipulacyjne",
        description: "Oznaczenia informujące o sposobie prawidłowego postępowania z danym ładunkiem."
    },
    {
        title: "Znaki informacyjne",
        description: "Oznaczenia pokazujące informujące o ładunku oraz jego właściwościach"
    },
]

const Tasks = [
    {
        categoryName: 'Formowanie ładunku',
        tasks: [
            {
                title: 'Wylicz ile paczek o wymiarach (200mm x 200mm x 200mm) zmieści się na palecie EUR (1200mm x 800mm x 144mm) w jednej warstwie',
                calcPlace: true,
                correctAnswer: 24
            },
            {
                title: 'Wylicz ile paczek o wymiarach (200mm x 200mm x 200mm) zmieści się na palecie EUR (1200mm x 800mm x 144mm), przy maksymalnej wysokości PJŁ 1500mm',
                calcPlace: true,
                correctAnswers: {
                    'Paczek na jednej warstwie': 24,
                    'Ilość warst': 6,
                    'Wszystkie paczki': 144
                }
            },
            {
                title: 'Wylicz ile paczek o wymiarach (150mm x 200mm x 250mm) oraz wadze 3kg/sztuka zmieści się na palecie EUR (1200mm x 800mm x 144mm) o wadze 25 kilo, przy maksymalnej wysokości PJŁ 1450mm.',
                calcPlace: true,
                correctAnswers: {
                    'Paczek na jednej warstwie': 30,
                    'Ilość warst': 5,
                    'Wszystkie paczki': 150,
                    'Waga wszystkich paczek': 450,
                    'Waga całej PJŁ': 475
                }
            },
        ]
    },
    {
        categoryName: 'Obliczenia związane z transportem',
        tasks: [
            {
                title: 'Przedstaw podane godziny w postaci ułamka dziesiętnego: <p>1. 1 godz. 10 min.</p> <p>2. 30 min.</p> <p>3. 5 godz. 48 min.</p> <p>4. 1 minuta</p> <p>5. 7 minut</p> <p>6. 13 minut</p> <p>7. 23 godz. 24 min.</p> <p>8. 10 godz. 3 min.</p>',
                calcPlace: false,
                correctAnswers: {
                    'Odpowiedź 1.': 1.1,
                    'Odpowiedź 2.': 0.5,
                    'Odpowiedź 3.': 5.8,
                    'Odpowiedź 4.': 0.02,
                    'Odpowiedź 5.': 0.12,
                    'Odpowiedź 6.': 0.22,
                    'Odpowiedź 7.': 23.4,
                    'Odpowiedź 8.': 10.05,
                }
            }
        ]
    },
    {
        categoryName: 'Czas pracy kierowcy',
        tasks: [
            {
                title: 'Kierowca porusza się prędkością 75km/h, ile kilometrów kierowca przejedzie w 3 godziny?',
                calcPlace: false,
                correctAnswer: 225
            },
            {
                title: 'Kierowca porusza się prędkością 81km/h, ile kilometrów kierowca przejedzie w 4.5 godziny?',
                calcPlace: false,
                correctAnswer: 364.5
            }
        ]
    }
]