export default [
    {
        id: 'status-effects',
        name: 'Statuseffekte',
        icon: '🛡️',
        description: 'Kontrolle & DoT (Schaden über Zeit)',
        tacticalUse: 'Schwächt Boss-KP, immobilisiert schnelle Gegner.',
        subCategories: [
            {
                id: 'burn',
                name: 'Verbrennung',
                description: 'Kontinuierlicher KP-Verlust',
                pokemon: [
                    {
                        name: 'CHARIZARD',
                        power: 485,
                        recharge: 0.74,
                        range: 165,
                        shape: 'Circle',
                        ability: 'Die Angriffe verbrennen das Ziel 10 Sekunden lang, wodurch es jede Sekunde 0,5 % seiner Lebenspunkte verliert.',
                        abilityDesc: 'Verursacht Verbrennungsschaden (kontinuierlicher KP-Verlust)'
                    },
                    {
                        name: 'INFERNAPE',
                        power: 360,
                        recharge: 0.50,
                        range: 120,
                        shape: 'Circle',
                        ability: 'Die Angriffe verbrennen das Ziel 10 Sekunden lang, wodurch es jede Sekunde 0,5 % seiner Lebenspunkte verliert.',
                        abilityDesc: 'Verursacht Verbrennungsschaden (kontinuierlicher KP-Verlust)'
                    },
                    {
                        name: 'TORKOAL',
                        power: 607,
                        recharge: 3.00,
                        range: 160,
                        shape: 'Circle',
                        ability: 'Angriffe haben eine Chance von 50 %, das Ziel 10 Sekunden lang zu verbrennen, wodurch es 0,5 % KP pro Sekunde verliert.',
                        abilityDesc: '50 % Chance auf Verbrennung'
                    }
                ]
            },
            {
                id: 'poison',
                name: 'Gift',
                description: 'Prozentualer KP-Verlust',
                pokemon: [
                    {
                        name: 'WEEZING',
                        power: 860,
                        recharge: 1.82,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Feuert Projektile auf bis zu 2 Gegner gleichzeitig ab und verursacht 1 Stapel Gift. Das Ziel verliert 0,1 % Gesundheit pro Sekunde pro Stapel.',
                        abilityDesc: 'Greift 2 Gegner an + vergiftet sie'
                    },
                    {
                        name: 'ARBOK',
                        power: 670,
                        recharge: 1.50,
                        range: 120,
                        shape: 'Circle',
                        ability: 'Die Angriffe fügen 1 Stapel Gift zu. Das Ziel verliert 0,1 % Lebenskraft pro Sekunde für jeden Stapel.',
                        abilityDesc: 'Vergiftet das Ziel (KP-Verlust pro Stapel)'
                    },
                    {
                        name: 'ARIADOS',
                        power: 283,
                        recharge: 0.75,
                        range: 110,
                        shape: 'Circle',
                        ability: 'Die Angriffe fügen 1 Stapel Gift zu. Das Ziel verliert 0,1 % Lebenskraft pro Sekunde für jeden Stapel.',
                        abilityDesc: 'Vergiftet das Ziel (KP-Verlust pro Stapel)'
                    },
                    {
                        name: 'SWALOT',
                        power: 120,
                        recharge: 1.20,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Die Angriffe fügen 1 Stapel Gift zu. Das Ziel verliert 0,1 % Lebenskraft pro Sekunde für jeden Stapel.',
                        abilityDesc: 'Vergiftet das Ziel (KP-Verlust pro Stapel)'
                    }
                ]
            },
            {
                id: 'paralyze',
                name: 'Paralyse',
                description: 'Immobilisierung',
                pokemon: [
                    {
                        name: 'CRYOGONAL',
                        power: 1208,
                        recharge: 1.90,
                        range: 348,
                        shape: 'X Shape',
                        ability: 'Die Angriffe haben eine Chance von 30 %, das Ziel für 2 Sekunden zu paralysieren.',
                        abilityDesc: '30 % Chance zu paralysieren (hoher Schaden + Kontrolle)'
                    },
                    {
                        name: 'DEWGONG',
                        power: 810,
                        recharge: 1.15,
                        range: 400,
                        shape: 'Cross',
                        ability: 'Die Angriffe haben eine Chance von 30 %, das Ziel für 2 Sekunden zu paralysieren.',
                        abilityDesc: '30 % Chance zu paralysieren'
                    },
                    {
                        name: 'LAPRAS',
                        power: 670,
                        recharge: 5.72,
                        range: 200,
                        shape: 'Circle',
                        ability: 'Die Angriffe haben eine Chance von 30 %, das Ziel für 1,5 Sekunden zu paralysieren.',
                        abilityDesc: '30 % Chance zu paralysieren'
                    },
                    {
                        name: 'AMPHAROS',
                        power: 395,
                        recharge: 3.40,
                        range: 185,
                        shape: 'Circle',
                        ability: 'Die Angriffe haben eine Chance von 30 %, das Ziel für 1,5 Sekunden zu paralysieren.',
                        abilityDesc: '30 % Chance zu paralysieren'
                    },
                    {
                        name: 'ELECTRODE',
                        power: 140,
                        recharge: 0.35,
                        range: 115,
                        shape: 'Circle',
                        ability: 'Die Angriffe haben eine Chance von 5 %, das Ziel für 1,5 Sekunden zu paralysieren.',
                        abilityDesc: '5 % Chance zu paralysieren (extrem hohe Angriffsgeschwindigkeit)'
                    }
                ]
            },
            {
                id: 'slow',
                name: 'Verlangsamung',
                description: 'Reduzierung der Bewegungsgeschwindigkeit',
                pokemon: [
                    {
                        name: 'TANGROWTH',
                        power: 1010,
                        recharge: 1.55,
                        range: 150,
                        shape: 'Circle',
                        ability: 'Die Angriffe verlangsamen das Ziel für 2 Sekunden.',
                        abilityDesc: 'Angriffe verursachen Verlangsamung (hoher Basisschaden)'
                    },
                    {
                        name: 'WHISCASH',
                        power: 553,
                        recharge: 2.40,
                        range: 280,
                        shape: 'Circle',
                        ability: 'Projektile explodieren in einem Bereich, fügen nahen Gegnern halben Schaden zu und verlangsamen sie für 2 Sekunden.',
                        abilityDesc: 'Flächenexplosion + Verlangsamung'
                    },
                    {
                        name: 'FERROTHORN',
                        power: 312,
                        recharge: 2.17,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Die Angriffe verlangsamen das Ziel für 2 Sekunden.',
                        abilityDesc: 'Angriffe verursachen Verlangsamung'
                    },
                    {
                        name: 'SHUCKLE',
                        power: 150,
                        recharge: 2.00,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Die Angriffe verlangsamen das Ziel für 2 Sekunden.',
                        abilityDesc: 'Angriffe verursachen Verlangsamung'
                    }
                ]
            },
            {
                id: 'curse',
                name: 'Fluch/Albtraum',
                description: 'Spezieller DoT',
                pokemon: [
                    {
                        name: 'GENGAR',
                        power: 700,
                        recharge: 1.40,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Angriffe fügen 1 Albtraum-Stapel zu. Jeder Stapel verursacht pro Sekunde Schaden in Höhe von 20 % der Kraft dieses Pokémon.',
                        abilityDesc: 'Stapelbarer Albtraum-Schaden (für zähe Gegner)'
                    },
                    {
                        name: 'COFAGRIGUS',
                        power: 440,
                        recharge: 1.90,
                        range: 250,
                        shape: 'Cross',
                        ability: 'Verflucht einen Gegner und fügt allen verfluchten Gegnern Schaden zu.',
                        abilityDesc: 'Verflucht Gegner und verursacht Kettenschaden'
                    },
                    {
                        name: 'SABLEYE',
                        power: 165,
                        recharge: 0.75,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Verflucht einen Gegner und fügt allen verfluchten Gegnern Schaden zu.',
                        abilityDesc: 'Verflucht Gegner und verursacht Kettenschaden'
                    },
                    {
                        name: 'GIRAFARIG',
                        power: 103,
                        recharge: 2.00,
                        range: 135,
                        shape: 'Circle',
                        ability: 'Feuert Projektile auf bis zu 2 Gegner gleichzeitig ab und verflucht sie. Fügt allen verfluchten Gegnern Schaden zu.',
                        abilityDesc: 'Greift 2 Gegner an + Fluch-Kettenschaden'
                    }
                ]
            }
        ]
    },
    {
        id: 'aoe',
        name: 'Flächenangriff',
        icon: '💣',
        description: 'Experte für Massenkontrolle',
        tacticalUse: 'Ideal gegen große Gruppen von Gegnern mit wenig KP.',
        subCategories: [
            {
                id: 'ricochet',
                name: 'Abpraller',
                description: '',
                pokemon: [
                    {
                        name: 'MAROWAK',
                        power: 630,
                        recharge: 1.60,
                        range: 350,
                        shape: 'Cross',
                        ability: 'Die Angriffe prallen zwischen Gegnern ab bei reduziertem Schaden. (4 Abpraller)',
                        abilityDesc: 'Abprall-Angriff (4-mal) - stärkster physischer Abpraller'
                    },
                    {
                        name: 'ARMALDO',
                        power: 420,
                        recharge: 0.90,
                        range: 115,
                        shape: 'Circle',
                        ability: 'Kritische Projektile prallen zwischen Gegnern ab und prallen weiter, solange sie kritisch bleiben.',
                        abilityDesc: 'Unendliche Abpraller bei kritischen Treffern (hohe Krit-Rate)'
                    },
                    {
                        name: 'GRENINJA',
                        power: 165,
                        recharge: 0.30,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Die Angriffe prallen zwischen Gegnern ab bei reduziertem Schaden. (5 Abpraller)',
                        abilityDesc: 'Abprall-Angriff (5-mal) - extrem hohe Angriffsgeschwindigkeit'
                    }
                ]
            },
            {
                id: 'explode',
                name: 'Explosion/Flächenschaden',
                description: '',
                pokemon: [
                    {
                        name: 'GARDEVOIR',
                        power: 900,
                        recharge: 1.60,
                        range: 120,
                        shape: 'Circle',
                        ability: 'Projektile explodieren in einem Bereich, fügen nahen Gegnern halben Schaden zu und verbreiten die Vorurteile des Hauptziels.',
                        abilityDesc: 'Flächenexplosion + verbreitet Vorurteile'
                    },
                    {
                        name: 'DRUDDIGON',
                        power: 902,
                        recharge: 2.00,
                        range: 230,
                        shape: 'Circle',
                        ability: 'Die Projektile explodieren in einem Bereich und verursachen halben Schaden bei nahen Gegnern.',
                        abilityDesc: 'Explosionsschaden im Umkreis'
                    },
                    {
                        name: 'OCTILLERY',
                        power: 860,
                        recharge: 2.50,
                        range: 480,
                        shape: 'Ring',
                        ability: 'Die Projektile explodieren in einem Bereich und verursachen halben Schaden bei nahen Gegnern.',
                        abilityDesc: 'Explosionsschaden im Umkreis (riesige Reichweite)'
                    },
                    {
                        name: 'DUNSPARCE',
                        power: 715,
                        recharge: 1.70,
                        range: 500,
                        shape: 'Cross',
                        ability: 'Projektile explodieren in einem Bereich, fügen nahen Gegnern halben Schaden zu und verlangsamen sie für 2 Sekunden.',
                        abilityDesc: 'Flächenexplosion + Verlangsamung'
                    },
                    {
                        name: 'CORSOLA',
                        power: 460,
                        recharge: 1.30,
                        range: 300,
                        shape: 'Ring',
                        ability: 'Projektile explodieren in einem Bereich, fügen nahen Gegnern halben Schaden zu und verlangsamen sie für 2 Sekunden.',
                        abilityDesc: 'Flächenexplosion + Verlangsamung'
                    },
                    {
                        name: 'LUCARIO',
                        power: 400,
                        recharge: 0.70,
                        range: 160,
                        shape: 'Circle',
                        ability: 'Die Projektile explodieren in einem Bereich und verursachen halben Schaden bei nahen Gegnern.',
                        abilityDesc: 'Explosionsschaden im Umkreis'
                    }
                ]
            },
            {
                id: 'multi-target',
                name: 'Mehrfachziele',
                description: '',
                pokemon: [
                    {
                        name: 'LILLIGANT',
                        power: 655,
                        recharge: 1.70,
                        range: 250,
                        shape: 'Ring',
                        ability: 'Feuert Projektile auf bis zu 3 Gegner gleichzeitig ab.',
                        abilityDesc: 'Greift 3 Gegner simultan an'
                    },
                    {
                        name: 'SANDSLASH',
                        power: 600,
                        recharge: 0.95,
                        range: 145,
                        shape: 'Circle',
                        ability: 'Feuert Projektile auf bis zu 2 Gegner gleichzeitig ab.',
                        abilityDesc: 'Greift 2 Gegner simultan an'
                    },
                    {
                        name: 'BARBARACLE',
                        power: 460,
                        recharge: 1.73,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Feuert Projektile auf bis zu 4 Gegner gleichzeitig ab.',
                        abilityDesc: 'Greift 4 Gegner simultan an'
                    },
                    {
                        name: 'KABUTOPS',
                        power: 455,
                        recharge: 0.72,
                        range: 100,
                        shape: 'Circle',
                        ability: 'Feuert Projektile auf bis zu 2 Gegner gleichzeitig ab.',
                        abilityDesc: 'Greift 2 Gegner simultan an'
                    },
                    {
                        name: 'CRADILY',
                        power: 410,
                        recharge: 1.92,
                        range: 160,
                        shape: 'Circle',
                        ability: 'Feuert ein Projektil für jedes Fossil-Pokémon im Team ab. Angriffe verlangsamen das Ziel für 2 Sekunden.',
                        abilityDesc: 'Feuert Projektile basierend auf der Anzahl der Fossil-Teammitglieder'
                    },
                    {
                        name: 'STARAPTOR',
                        power: 250,
                        recharge: 0.70,
                        range: 280,
                        shape: 'Circle',
                        ability: 'Feuert Projektile auf bis zu 2 Gegner gleichzeitig ab.',
                        abilityDesc: 'Greift 2 Gegner simultan an'
                    }
                ]
            }
        ]
    },
    {
        id: 'burst',
        name: 'Explosiver Schaden (Burst)',
        icon: '⚔️',
        description: 'Boss-Killer',
        tacticalUse: 'Sofortige Eliminierung von Bossen oder Elite-Gegnern mit hohen KP und viel Rüstung.',
        subCategories: [
            {
                id: 'pure-damage',
                name: 'Reiner Schaden/Kritisch',
                description: '',
                pokemon: [
                    {
                        name: 'CLAWITZER',
                        power: 5100,
                        recharge: 6.00,
                        range: 300,
                        shape: 'Cross',
                        ability: 'Kritische Treffer verursachen doppelten Schaden.',
                        abilityDesc: 'Kritische Treffer verursachen doppelten Schaden – höchster Einzelschuss-Schaden'
                    },
                    {
                        name: 'RAMPARDOS',
                        power: 1150,
                        recharge: 1.90,
                        range: 110,
                        shape: 'Circle',
                        ability: 'Erhöht den Schaden um 5 % für jedes fehlende Herz.',
                        abilityDesc: 'Mehr Schaden, je mehr KP verloren gingen'
                    },
                    {
                        name: 'WEAVILE',
                        power: 425,
                        recharge: 0.40,
                        range: 115,
                        shape: 'Circle',
                        ability: 'Kritische Treffer verursachen doppelten Schaden.',
                        abilityDesc: 'Kritische Treffer verursachen doppelten Schaden (extrem hohe Krit-Rate)'
                    },
                    {
                        name: 'CLEFABLE',
                        power: 455,
                        recharge: 0.90,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Angriffe verursachen 1 zusätzlichen Schaden für jeden Stern.',
                        abilityDesc: 'Sternanzahl erhöht den Schaden'
                    }
                ]
            },
            {
                id: 'anti-armor',
                name: 'Anti-Rüstung',
                description: 'Rüstungsbrecher',
                pokemon: [
                    {
                        name: 'MACHAMP',
                        power: 1520,
                        recharge: 1.50,
                        range: 125,
                        shape: 'Circle',
                        ability: 'Verursacht doppelten Schaden an Rüstung.',
                        abilityDesc: 'Verursacht doppelten Rüstungsschaden – stärkster Rüstungsbrecher'
                    },
                    {
                        name: 'PRIMEAPE',
                        power: 705,
                        recharge: 0.85,
                        range: 100,
                        shape: 'Circle',
                        ability: 'Verursacht doppelten Schaden an Rüstung.',
                        abilityDesc: 'Verursacht doppelten Rüstungsschaden'
                    },
                    {
                        name: 'HAWLUCHA',
                        power: 642,
                        recharge: 0.83,
                        range: 235,
                        shape: 'Circle',
                        ability: 'Verursacht doppelten Schaden an Rüstung.',
                        abilityDesc: 'Verursacht doppelten Rüstungsschaden'
                    },
                    {
                        name: 'EXCADRILL',
                        power: 180,
                        recharge: 0.50,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Verursacht doppelten Schaden an Rüstung.',
                        abilityDesc: 'Verursacht doppelten Rüstungsschaden'
                    }
                ]
            },
            {
                id: 'stacking',
                name: 'Stapelbar (Stacking)',
                description: '',
                pokemon: [
                    {
                        name: 'NOIVERN',
                        power: 1210,
                        recharge: 1.42,
                        range: 400,
                        shape: 'Ring',
                        ability: 'Jeder Angriff auf dasselbe Ziel verursacht zusätzlichen Schaden.',
                        abilityDesc: 'Aufeinanderfolgende Angriffe auf dasselbe Ziel erhöhen den Schaden'
                    },
                    {
                        name: 'SAMUROTT',
                        power: 530,
                        recharge: 0.54,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Jeder Angriff auf dasselbe Ziel verursacht zusätzlichen Schaden.',
                        abilityDesc: 'Aufeinanderfolgende Angriffe auf dasselbe Ziel erhöhen den Schaden'
                    },
                    {
                        name: 'ALAKAZAM',
                        power: 430,
                        recharge: 0.70,
                        range: 110,
                        shape: 'Circle',
                        ability: 'Teleportiert sich periodisch, wann immer möglich. Jeder Teleport gewährt 100 % stapelbaren Schaden für den nächsten Angriff.',
                        abilityDesc: 'Teleportiert sich und erhöht den Schaden des nächsten Angriffs massiv'
                    },
                    {
                        name: 'ABSOL',
                        power: 335,
                        recharge: 0.37,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Jeder Angriff auf dasselbe Ziel verursacht zusätzlichen Schaden.',
                        abilityDesc: 'Aufeinanderfolgende Angriffe auf dasselbe Ziel erhöhen den Schaden'
                    }
                ]
            }
        ]
    },
    {
        id: 'terrain',
        name: 'Gelände-Anpassung',
        icon: '🏔️',
        description: 'Gelände-Spezialist',
        tacticalUse: 'Wähle basierend auf dem Kartentyp, um massive Boni zu erhalten.',
        subCategories: [
            {
                id: 'mountain',
                name: 'Gebirge (Reichweite x2)',
                description: '',
                pokemon: [
                    {
                        name: 'FLYGON',
                        power: 755,
                        recharge: 1.00,
                        range: 150,
                        shape: 'Circle',
                        ability: 'Verdoppelt seine Reichweite, wenn es sich im Gebirge befindet.',
                        abilityDesc: 'Gebirgs-Reichweite verdoppelt (300 Reichweite)'
                    },
                    {
                        name: 'PIDGEOT',
                        power: 440,
                        recharge: 0.70,
                        range: 180,
                        shape: 'Circle',
                        ability: 'Verdoppelt seine Reichweite, wenn es sich im Gebirge befindet.',
                        abilityDesc: 'Gebirgs-Reichweite verdoppelt (360 Reichweite)'
                    },
                    {
                        name: 'AGGRON',
                        power: 365,
                        recharge: 2.25,
                        range: 145,
                        shape: 'Circle',
                        ability: 'Verdoppelt seine Reichweite, wenn es sich im Gebirge befindet.',
                        abilityDesc: 'Gebirgs-Reichweite verdoppelt (290 Reichweite)'
                    }
                ]
            },
            {
                id: 'water',
                name: 'Wasser (Tempo x2)',
                description: '',
                pokemon: [
                    {
                        name: 'OMASTAR',
                        power: 890,
                        recharge: 3.00,
                        range: 155,
                        shape: 'Circle',
                        ability: 'Verdoppelt seine Geschwindigkeit, wenn es sich im Wasser befindet.',
                        abilityDesc: 'Wasser-Tempo verdoppelt (1,50s Intervall)'
                    },
                    {
                        name: 'GOLDUCK',
                        power: 402,
                        recharge: 0.85,
                        range: 155,
                        shape: 'Circle',
                        ability: 'Verdoppelt seine Geschwindigkeit, wenn es sich im Wasser befindet.',
                        abilityDesc: 'Wasser-Tempo verdoppelt (0,42s Intervall)'
                    },
                    {
                        name: 'STARMIE',
                        power: 355,
                        recharge: 0.50,
                        range: 240,
                        shape: 'X Shape',
                        ability: 'Verdoppelt seine Geschwindigkeit, wenn es sich im Wasser befindet.',
                        abilityDesc: 'Wasser-Tempo verdoppelt (0,25s Intervall)'
                    },
                    {
                        name: 'MASQUERAIN',
                        power: 190,
                        recharge: 0.37,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Verdoppelt seine Geschwindigkeit, wenn es sich im Wasser befindet.',
                        abilityDesc: 'Wasser-Tempo verdoppelt (0,18s Intervall)'
                    }
                ]
            },
            {
                id: 'grass',
                name: 'Gras (Kraft x2)',
                description: '',
                pokemon: [
                    {
                        name: 'SCEPTILE',
                        power: 540,
                        recharge: 0.85,
                        range: 145,
                        shape: 'Circle',
                        ability: 'Verdoppelt seine Kraft, wenn es sich in hohem Gras befindet.',
                        abilityDesc: 'Gras-Kraft verdoppelt (1080 Kraft)'
                    },
                    {
                        name: 'MARACTUS',
                        power: 306,
                        recharge: 1.15,
                        range: 170,
                        shape: 'Circle',
                        ability: 'Verdoppelt seine Kraft, wenn es sich in hohem Gras befindet.',
                        abilityDesc: 'Gras-Kraft verdoppelt (612 Kraft)'
                    },
                    {
                        name: 'JUMPLUFF',
                        power: 230,
                        recharge: 0.50,
                        range: 170,
                        shape: 'Circle',
                        ability: 'Verdoppelt seine Kraft, wenn es sich in hohem Gras befindet.',
                        abilityDesc: 'Gras-Kraft verdoppelt (460 Kraft)'
                    }
                ]
            },
            {
                id: 'all-terrain',
                name: 'All-Terrain',
                description: '',
                pokemon: [
                    {
                        name: 'CASTFORM',
                        power: 501,
                        recharge: 0.90,
                        range: 150,
                        shape: 'Circle',
                        ability: 'Multipliziert seinen Schaden mit 2 in hohem Gras, seine Geschwindigkeit mit 2 im Wasser und seine Reichweite mit 2 im Gebirge.',
                        abilityDesc: 'Gras/Wasser/Gebirge gewähren jeweils Boni'
                    }
                ]
            }
        ]
    },
    {
        id: 'support',
        name: 'Unterstützung & Nutzen',
        icon: '💊',
        description: '',
        tacticalUse: 'Bietet Heilung, Anti-Unsichtbarkeit, wirtschaftliche Unterstützung oder Team-Buffs.',
        subCategories: [
            {
                id: 'heal',
                name: 'Heilung',
                description: '',
                pokemon: [
                    {
                        name: 'MEGANIUM',
                        power: 920,
                        recharge: 1.70,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Angriffe haben eine geringe Chance, 1 Herz wiederherzustellen.',
                        abilityDesc: 'Angriffe können KP regenerieren (1 Herz)'
                    },
                    {
                        name: 'BRELOOM',
                        power: 825,
                        recharge: 1.55,
                        range: 110,
                        shape: 'Circle',
                        ability: 'Angriffe haben eine geringe Chance, 1 Herz wiederherzustellen.',
                        abilityDesc: 'Angriffe können KP regenerieren (1 Herz)'
                    },
                    {
                        name: 'WHIMSICOTT',
                        power: 225,
                        recharge: 0.59,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Angriffe haben eine geringe Chance, 1 Herz wiederherzustellen.',
                        abilityDesc: 'Angriffe können KP regenerieren (1 Herz)'
                    }
                ]
            },
            {
                id: 'anti-invisible',
                name: 'Anti-Unsichtbarkeit',
                description: '',
                pokemon: [
                    {
                        name: 'GRUMPIG',
                        power: 690,
                        recharge: 1.10,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Kann unsichtbare Gegner treffen.',
                        abilityDesc: 'Kann unsichtbare Einheiten angreifen'
                    },
                    {
                        name: 'XATU',
                        power: 435,
                        recharge: 0.80,
                        range: 210,
                        shape: 'Circle',
                        ability: 'Kann unsichtbare Gegner treffen.',
                        abilityDesc: 'Kann unsichtbare Einheiten angreifen'
                    },
                    {
                        name: 'HONCHKROW',
                        power: 365,
                        recharge: 0.69,
                        range: 190,
                        shape: 'Circle',
                        ability: 'Kann unsichtbare Gegner treffen.',
                        abilityDesc: 'Kann unsichtbare Einheiten angreifen'
                    }
                ]
            },
            {
                id: 'buff',
                name: 'Aura/Buff',
                description: '',
                pokemon: [
                    {
                        name: 'FARFETCH\'D',
                        power: 207,
                        recharge: 1.00,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Erhöht den kritischen Schaden von Pokémon in Reichweite um 33 %.',
                        abilityDesc: 'Aura: Erhöht den kritischen Schaden von Verbündeten in Reichweite'
                    },
                    {
                        name: 'SUNFLORA',
                        power: 0,
                        recharge: 0.00,
                        range: 170,
                        shape: 'Circle',
                        ability: 'Erhöht den verursachten Schaden von Pokémon in Reichweite um 20 %.',
                        abilityDesc: 'Aura: Erhöht den Schaden naher Verbündeter'
                    },
                    {
                        name: 'BASTIODON',
                        power: 1400,
                        recharge: 6.50,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Reduziert die Aufladezeit um 0,5s für jedes Fossil-Pokémon im Team.',
                        abilityDesc: 'Verringert die Abklingzeit von Fossil-Teammitgliedern'
                    }
                ]
            },
            {
                id: 'special',
                name: 'Spezial/Wirtschaft',
                description: '',
                pokemon: [
                    {
                        name: 'PERSIAN',
                        power: 305,
                        recharge: 0.60,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Angriffe gewähren $ in Höhe von 10 % des Goldwertes des Ziels.',
                        abilityDesc: 'Angriffe generieren Gold'
                    },
                    {
                        name: 'DITTO',
                        power: 0,
                        recharge: 0.00,
                        range: 100,
                        shape: 'Circle',
                        ability: 'Verwandelt sich in das erste Pokémon im Team und kopiert dessen Werte und Fähigkeiten, angepasst an Dittos Level.',
                        abilityDesc: 'Verwandelt sich in das erste Pokémon im Team'
                    },
                    {
                        name: 'SPINDA',
                        power: 101,
                        recharge: 0.20,
                        range: 400,
                        shape: 'Circle',
                        ability: 'Hat Schwierigkeiten, sich zu fokussieren.',
                        abilityDesc: 'Zufällige Angriffe (Fokus-Probleme)'
                    }
                ]
            }
        ]
    }
]