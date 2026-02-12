export default [
    {
        id: 'status-effects',
        name: 'Effets de Statut',
        icon: '🛡️',
        description: 'Contrôle & Dégâts sur la durée (DoT)',
        tacticalUse: 'Affaiblir les PV des Boss, immobiliser les ennemis rapides.',
        subCategories: [
            {
                id: 'burn',
                name: 'Brûlure',
                description: 'Perte continue de PV',
                pokemon: [
                    {
                        name: 'CHARIZARD',
                        power: 485,
                        recharge: 0.74,
                        range: 165,
                        shape: 'Circle',
                        ability: 'Les attaques brûlent la cible pendant 10 secondes, lui faisant perdre 0,5 % de sa vie par seconde.',
                        abilityDesc: 'Provoque des dégâts de brûlure (perte de PV continue)'
                    },
                    {
                        name: 'INFERNAPE',
                        power: 360,
                        recharge: 0.50,
                        range: 120,
                        shape: 'Circle',
                        ability: 'Les attaques brûlent la cible pendant 10 secondes, lui faisant perdre 0,5 % de sa vie par seconde.',
                        abilityDesc: 'Provoque des dégâts de brûlure (perte de PV continue)'
                    },
                    {
                        name: 'TORKOAL',
                        power: 607,
                        recharge: 3.00,
                        range: 160,
                        shape: 'Circle',
                        ability: 'Les attaques ont 50 % de chances de brûler la cible pendant 10 secondes, lui faisant perdre 0,5 % de PV par seconde.',
                        abilityDesc: '50 % de chances de provoquer une brûlure'
                    }
                ]
            },
            {
                id: 'poison',
                name: 'Poison',
                description: 'Perte de PV en pourcentage',
                pokemon: [
                    {
                        name: 'WEEZING',
                        power: 860,
                        recharge: 1.82,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Tire des projectiles sur jusqu\'à 2 ennemis à la fois et applique 1 cumul de poison. La cible perd 0,1 % de santé par seconde par cumul.',
                        abilityDesc: 'Attaque 2 ennemis + applique du poison'
                    },
                    {
                        name: 'ARBOK',
                        power: 670,
                        recharge: 1.50,
                        range: 120,
                        shape: 'Circle',
                        ability: 'Les attaques appliquent 1 charge de poison. La cible perd 0,1 % de vie par seconde pour chaque charge.',
                        abilityDesc: 'Applique du poison (perte de PV par cumul)'
                    },
                    {
                        name: 'ARIADOS',
                        power: 283,
                        recharge: 0.75,
                        range: 110,
                        shape: 'Circle',
                        ability: 'Les attaques appliquent 1 charge de poison. La cible perd 0,1 % de vie par seconde pour chaque charge.',
                        abilityDesc: 'Applique du poison (perte de PV par cumul)'
                    },
                    {
                        name: 'SWALOT',
                        power: 120,
                        recharge: 1.20,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Les attaques appliquent 1 charge de poison. La cible perd 0,1 % de vie par seconde pour chaque charge.',
                        abilityDesc: 'Applique du poison (perte de PV par cumul)'
                    }
                ]
            },
            {
                id: 'paralyze',
                name: 'Paralysie',
                description: 'Immobilisation',
                pokemon: [
                    {
                        name: 'CRYOGONAL',
                        power: 1208,
                        recharge: 1.90,
                        range: 348,
                        shape: 'X Shape',
                        ability: 'Les attaques ont 30 % de chances de paralyser la cible pendant 2 secondes.',
                        abilityDesc: '30 % de chances de paralyser (dégâts élevés + contrôle)'
                    },
                    {
                        name: 'DEWGONG',
                        power: 810,
                        recharge: 1.15,
                        range: 400,
                        shape: 'Cross',
                        ability: 'Les attaques ont 30 % de chances de paralyser la cible pendant 2 secondes.',
                        abilityDesc: '30 % de chances de paralyser'
                    },
                    {
                        name: 'LAPRAS',
                        power: 670,
                        recharge: 5.72,
                        range: 200,
                        shape: 'Circle',
                        ability: 'Les attaques ont 30 % de chances de paralyser la cible pendant 1,5 seconde.',
                        abilityDesc: '30 % de chances de paralyser'
                    },
                    {
                        name: 'AMPHAROS',
                        power: 395,
                        recharge: 3.40,
                        range: 185,
                        shape: 'Circle',
                        ability: 'Les attaques ont 30 % de chances de paralyser la cible pendant 1,5 seconde.',
                        abilityDesc: '30 % de chances de paralyser'
                    },
                    {
                        name: 'ELECTRODE',
                        power: 140,
                        recharge: 0.35,
                        range: 115,
                        shape: 'Circle',
                        ability: 'Les attaques ont 5 % de chances de paralyser la cible pendant 1,5 seconde.',
                        abilityDesc: '5 % de chances de paralyser (vitesse d\'attaque ultra-rapide)'
                    }
                ]
            },
            {
                id: 'slow',
                name: 'Ralentissement',
                description: 'Réduction de la vitesse de déplacement',
                pokemon: [
                    {
                        name: 'TANGROWTH',
                        power: 1010,
                        recharge: 1.55,
                        range: 150,
                        shape: 'Circle',
                        ability: 'Les attaques ralentissent la cible pendant 2 secondes.',
                        abilityDesc: 'Les attaques provoquent un ralentissement (dégâts de base élevés)'
                    },
                    {
                        name: 'WHISCASH',
                        power: 553,
                        recharge: 2.40,
                        range: 280,
                        shape: 'Circle',
                        ability: 'Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches et les ralentissant pendant 2 secondes.',
                        abilityDesc: 'Explosion de zone + ralentissement'
                    },
                    {
                        name: 'FERROTHORN',
                        power: 312,
                        recharge: 2.17,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Les attaques ralentissent la cible pendant 2 secondes.',
                        abilityDesc: 'Les attaques provoquent un ralentissement'
                    },
                    {
                        name: 'SHUCKLE',
                        power: 150,
                        recharge: 2.00,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Les attaques ralentissent la cible pendant 2 secondes.',
                        abilityDesc: 'Les attaques provoquent un ralentissement'
                    }
                ]
            },
            {
                id: 'curse',
                name: 'Malédiction/Cauchemar',
                description: 'DoT Spécial',
                pokemon: [
                    {
                        name: 'GENGAR',
                        power: 700,
                        recharge: 1.40,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Les attaques appliquent 1 cumul de cauchemar. Chaque cumul inflige des dégâts égaux à 20 % de la puissance de ce Pokémon par seconde.',
                        abilityDesc: 'Dégâts de cauchemar cumulables (pour les ennemis résistants)'
                    },
                    {
                        name: 'COFAGRIGUS',
                        power: 440,
                        recharge: 1.90,
                        range: 250,
                        shape: 'Cross',
                        ability: 'Maudit un ennemi et inflige des dégâts à tous les ennemis maudits.',
                        abilityDesc: 'Maudit les ennemis et inflige des dégâts en chaîne'
                    },
                    {
                        name: 'SABLEYE',
                        power: 165,
                        recharge: 0.75,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Maudit un ennemi et inflige des dégâts à tous les ennemis maudits.',
                        abilityDesc: 'Maudit les ennemis et inflige des dégâts en chaîne'
                    },
                    {
                        name: 'GIRAFARIG',
                        power: 103,
                        recharge: 2.00,
                        range: 135,
                        shape: 'Circle',
                        ability: 'Tire des projectiles sur jusqu\'à 2 ennemis à la fois et les maudit. Inflige des dégâts à tous les ennemis maudits.',
                        abilityDesc: 'Attaque 2 ennemis + dégâts de malédiction en chaîne'
                    }
                ]
            }
        ]
    },
    {
        id: 'aoe',
        name: 'Attaque de Zone',
        icon: '💣',
        description: 'Expert en Contrôle de Foule',
        tacticalUse: 'Gérer de grands groupes d\'ennemis ayant peu de PV.',
        subCategories: [
            {
                id: 'ricochet',
                name: 'Ricochet',
                description: '',
                pokemon: [
                    {
                        name: 'MAROWAK',
                        power: 630,
                        recharge: 1.60,
                        range: 350,
                        shape: 'Cross',
                        ability: 'Les attaques ricochent entre les ennemis avec des dégâts réduits. (4 Ricochets)',
                        abilityDesc: 'Attaque ricochet (4 fois) - ricochet physique le plus puissant'
                    },
                    {
                        name: 'ARMALDO',
                        power: 420,
                        recharge: 0.90,
                        range: 115,
                        shape: 'Circle',
                        ability: 'Les projectiles critiques ricochent entre les ennemis et continuent de ricocher tant qu\'ils restent critiques.',
                        abilityDesc: 'Ricochet infini sur les coups critiques (taux critique élevé)'
                    },
                    {
                        name: 'GRENINJA',
                        power: 165,
                        recharge: 0.30,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Les attaques ricochent entre les ennemis avec des dégâts réduits. (5 Ricochets)',
                        abilityDesc: 'Attaque ricochet (5 fois) - vitesse d\'attaque extrêmement rapide'
                    }
                ]
            },
            {
                id: 'explode',
                name: 'Explosion/Zone',
                description: '',
                pokemon: [
                    {
                        name: 'GARDEVOIR',
                        power: 900,
                        recharge: 1.60,
                        range: 120,
                        shape: 'Circle',
                        ability: 'Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches et propageant les préjudices de la cible principale.',
                        abilityDesc: 'Explosion de zone + propage les altérations'
                    },
                    {
                        name: 'DRUDDIGON',
                        power: 902,
                        recharge: 2.00,
                        range: 230,
                        shape: 'Circle',
                        ability: 'Les projectiles explosent dans une zone, causant la moitié des dégâts aux ennemis proches.',
                        abilityDesc: 'Dégâts d\'explosion de zone'
                    },
                    {
                        name: 'OCTILLERY',
                        power: 860,
                        recharge: 2.50,
                        range: 480,
                        shape: 'Ring',
                        ability: 'Les projectiles explosent dans une zone, causant la moitié des dégâts aux ennemis proches.',
                        abilityDesc: 'Dégâts d\'explosion de zone (portée immense)'
                    },
                    {
                        name: 'DUNSPARCE',
                        power: 715,
                        recharge: 1.70,
                        range: 500,
                        shape: 'Cross',
                        ability: 'Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches et les ralentissant pendant 2 secondes.',
                        abilityDesc: 'Explosion de zone + ralentissement'
                    },
                    {
                        name: 'CORSOLA',
                        power: 460,
                        recharge: 1.30,
                        range: 300,
                        shape: 'Ring',
                        ability: 'Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches et les ralentissant pendant 2 secondes.',
                        abilityDesc: 'Explosion de zone + ralentissement'
                    },
                    {
                        name: 'LUCARIO',
                        power: 400,
                        recharge: 0.70,
                        range: 160,
                        shape: 'Circle',
                        ability: 'Les projectiles explosent dans une zone, causant la moitié des dégâts aux ennemis proches.',
                        abilityDesc: 'Dégâts d\'explosion de zone'
                    }
                ]
            },
            {
                id: 'multi-target',
                name: 'Multi-Cibles',
                description: '',
                pokemon: [
                    {
                        name: 'LILLIGANT',
                        power: 655,
                        recharge: 1.70,
                        range: 250,
                        shape: 'Ring',
                        ability: 'Tire des projectiles sur jusqu\'à 3 ennemis à la fois.',
                        abilityDesc: 'Attaque 3 ennemis simultanément'
                    },
                    {
                        name: 'SANDSLASH',
                        power: 600,
                        recharge: 0.95,
                        range: 145,
                        shape: 'Circle',
                        ability: 'Tire des projectiles sur jusqu\'à 2 ennemis à la fois.',
                        abilityDesc: 'Attaque 2 ennemis simultanément'
                    },
                    {
                        name: 'BARBARACLE',
                        power: 460,
                        recharge: 1.73,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Tire des projectiles sur jusqu\'à 4 ennemis à la fois.',
                        abilityDesc: 'Attaque 4 ennemis simultanément'
                    },
                    {
                        name: 'KABUTOPS',
                        power: 455,
                        recharge: 0.72,
                        range: 100,
                        shape: 'Circle',
                        ability: 'Tire des projectiles sur jusqu\'à 2 ennemis à la fois.',
                        abilityDesc: 'Attaque 2 ennemis simultanément'
                    },
                    {
                        name: 'CRADILY',
                        power: 410,
                        recharge: 1.92,
                        range: 160,
                        shape: 'Circle',
                        ability: 'Tire un projectile pour chaque Pokémon Fossile dans l\'équipe. Les attaques ralentissent la cible pendant 2 secondes.',
                        abilityDesc: 'Tire des projectiles selon le nombre de coéquipiers Fossiles'
                    },
                    {
                        name: 'STARAPTOR',
                        power: 250,
                        recharge: 0.70,
                        range: 280,
                        shape: 'Circle',
                        ability: 'Tire des projectiles sur jusqu\'à 2 ennemis à la fois.',
                        abilityDesc: 'Attaque 2 ennemis simultanément'
                    }
                ]
            }
        ]
    },
    {
        id: 'burst',
        name: 'Dégâts d\'Explosion',
        icon: '⚔️',
        description: 'Tueur de Boss',
        tacticalUse: 'Tue instantanément les Boss à PV élevés et forte armure ou les ennemis d\'élite.',
        subCategories: [
            {
                id: 'pure-damage',
                name: 'Dégâts Purs/Critiques',
                description: '',
                pokemon: [
                    {
                        name: 'CLAWITZER',
                        power: 5100,
                        recharge: 6.00,
                        range: 300,
                        shape: 'Cross',
                        ability: 'Les coups critiques infligent deux fois plus de dégâts.',
                        abilityDesc: 'Les critiques infligent des dégâts doublés - dégâts par tir les plus élevés'
                    },
                    {
                        name: 'RAMPARDOS',
                        power: 1150,
                        recharge: 1.90,
                        range: 110,
                        shape: 'Circle',
                        ability: 'Augmente les dégâts de 5 % pour chaque cœur manquant.',
                        abilityDesc: 'Plus de dégâts au fur et à mesure que les PV sont perdus'
                    },
                    {
                        name: 'WEAVILE',
                        power: 425,
                        recharge: 0.40,
                        range: 115,
                        shape: 'Circle',
                        ability: 'Les coups critiques infligent deux fois plus de dégâts.',
                        abilityDesc: 'Les critiques infligent des dégâts doublés (taux de critique ultra-élevé)'
                    },
                    {
                        name: 'CLEFABLE',
                        power: 455,
                        recharge: 0.90,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Les attaques infligent 1 point de dégât supplémentaire pour chaque étoile.',
                        abilityDesc: 'Le nombre d\'étoiles augmente les dégâts'
                    }
                ]
            },
            {
                id: 'anti-armor',
                name: 'Anti-Armure',
                description: 'Brise-armure',
                pokemon: [
                    {
                        name: 'MACHAMP',
                        power: 1520,
                        recharge: 1.50,
                        range: 125,
                        shape: 'Circle',
                        ability: 'Provoque des dégâts doublés sur l\'armure.',
                        abilityDesc: 'Inflige des dégâts doublés à l\'armure - meilleur brise-armure'
                    },
                    {
                        name: 'PRIMEAPE',
                        power: 705,
                        recharge: 0.85,
                        range: 100,
                        shape: 'Circle',
                        ability: 'Provoque des dégâts doublés sur l\'armure.',
                        abilityDesc: 'Inflige des dégâts doublés à l\'armure'
                    },
                    {
                        name: 'HAWLUCHA',
                        power: 642,
                        recharge: 0.83,
                        range: 235,
                        shape: 'Circle',
                        ability: 'Provoque des dégâts doublés sur l\'armure.',
                        abilityDesc: 'Inflige des dégâts doublés à l\'armure'
                    },
                    {
                        name: 'EXCADRILL',
                        power: 180,
                        recharge: 0.50,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Provoque des dégâts doublés sur l\'armure.',
                        abilityDesc: 'Inflige des dégâts doublés à l\'armure'
                    }
                ]
            },
            {
                id: 'stacking',
                name: 'Cumul (Stacking)',
                description: '',
                pokemon: [
                    {
                        name: 'NOIVERN',
                        power: 1210,
                        recharge: 1.42,
                        range: 400,
                        shape: 'Ring',
                        ability: 'Chaque attaque sur la même cible cause des dégâts supplémentaires.',
                        abilityDesc: 'Les attaques consécutives sur la même cible augmentent les dégâts'
                    },
                    {
                        name: 'SAMUROTT',
                        power: 530,
                        recharge: 0.54,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Chaque attaque sur la même cible cause des dégâts supplémentaires.',
                        abilityDesc: 'Les attaques consécutives sur la même cible augmentent les dégâts'
                    },
                    {
                        name: 'ALAKAZAM',
                        power: 430,
                        recharge: 0.70,
                        range: 110,
                        shape: 'Circle',
                        ability: 'Se téléporte périodiquement chaque fois que possible. Chaque téléportation accorde 100 % de dégâts cumulables à la prochaine attaque.',
                        abilityDesc: 'Se téléporte et augmente considérablement les dégâts de la prochaine attaque'
                    },
                    {
                        name: 'ABSOL',
                        power: 335,
                        recharge: 0.37,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Chaque attaque sur la même cible cause des dégâts supplémentaires.',
                        abilityDesc: 'Les attaques consécutives sur la même cible augmentent les dégâts'
                    }
                ]
            }
        ]
    },
    {
        id: 'terrain',
        name: 'Adaptation au Terrain',
        icon: '🏔️',
        description: 'Spécialiste du Terrain',
        tacticalUse: 'À choisir selon le type de carte pour bénéficier de bonus massifs.',
        subCategories: [
            {
                id: 'mountain',
                name: 'Montagne (Portée x2)',
                description: '',
                pokemon: [
                    {
                        name: 'FLYGON',
                        power: 755,
                        recharge: 1.00,
                        range: 150,
                        shape: 'Circle',
                        ability: 'Double sa portée s\'il se trouve en montagne.',
                        abilityDesc: 'Portée en montagne doublée (Portée 300)'
                    },
                    {
                        name: 'PIDGEOT',
                        power: 440,
                        recharge: 0.70,
                        range: 180,
                        shape: 'Circle',
                        ability: 'Double sa portée s\'il se trouve en montagne.',
                        abilityDesc: 'Portée en montagne doublée (Portée 360)'
                    },
                    {
                        name: 'AGGRON',
                        power: 365,
                        recharge: 2.25,
                        range: 145,
                        shape: 'Circle',
                        ability: 'Double sa portée s\'il se trouve en montagne.',
                        abilityDesc: 'Portée en montagne doublée (Portée 290)'
                    }
                ]
            },
            {
                id: 'water',
                name: 'Eau (Vitesse x2)',
                description: '',
                pokemon: [
                    {
                        name: 'OMASTAR',
                        power: 890,
                        recharge: 3.00,
                        range: 155,
                        shape: 'Circle',
                        ability: 'Double sa vitesse s\'il se trouve dans l\'eau.',
                        abilityDesc: 'Vitesse dans l\'eau doublée (intervalle 1.50s)'
                    },
                    {
                        name: 'GOLDUCK',
                        power: 402,
                        recharge: 0.85,
                        range: 155,
                        shape: 'Circle',
                        ability: 'Double sa vitesse s\'il se trouve dans l\'eau.',
                        abilityDesc: 'Vitesse dans l\'eau doublée (intervalle 0.42s)'
                    },
                    {
                        name: 'STARMIE',
                        power: 355,
                        recharge: 0.50,
                        range: 240,
                        shape: 'X Shape',
                        ability: 'Double sa vitesse s\'il se trouve dans l\'eau.',
                        abilityDesc: 'Vitesse dans l\'eau doublée (intervalle 0.25s)'
                    },
                    {
                        name: 'MASQUERAIN',
                        power: 190,
                        recharge: 0.37,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Double sa vitesse s\'il se trouve dans l\'eau.',
                        abilityDesc: 'Vitesse dans l\'eau doublée (intervalle 0.18s)'
                    }
                ]
            },
            {
                id: 'grass',
                name: 'Herbe (Puissance x2)',
                description: '',
                pokemon: [
                    {
                        name: 'SCEPTILE',
                        power: 540,
                        recharge: 0.85,
                        range: 145,
                        shape: 'Circle',
                        ability: 'Double sa puissance s\'il se trouve dans les hautes herbes.',
                        abilityDesc: 'Puissance dans l\'herbe doublée (Puissance 1080)'
                    },
                    {
                        name: 'MARACTUS',
                        power: 306,
                        recharge: 1.15,
                        range: 170,
                        shape: 'Circle',
                        ability: 'Double sa puissance s\'il se trouve dans les hautes herbes.',
                        abilityDesc: 'Puissance dans l\'herbe doublée (Puissance 612)'
                    },
                    {
                        name: 'JUMPLUFF',
                        power: 230,
                        recharge: 0.50,
                        range: 170,
                        shape: 'Circle',
                        ability: 'Double sa puissance s\'il se trouve dans les hautes herbes.',
                        abilityDesc: 'Puissance dans l\'herbe doublée (Puissance 460)'
                    }
                ]
            },
            {
                id: 'all-terrain',
                name: 'Tout Terrain',
                description: '',
                pokemon: [
                    {
                        name: 'CASTFORM',
                        power: 501,
                        recharge: 0.90,
                        range: 150,
                        shape: 'Circle',
                        ability: 'Multiplie ses dégâts par 2 dans les hautes herbes, sa vitesse par 2 dans l\'eau, et sa portée par 2 en montagne.',
                        abilityDesc: 'Bonus spécifiques pour l\'Herbe, l\'Eau et la Montagne'
                    }
                ]
            }
        ]
    },
    {
        id: 'support',
        name: 'Soutien & Utilitaire',
        icon: '💊',
        description: '',
        tacticalUse: 'Fournit des soins, de la détection d\'invisibles, un soutien économique ou des bonus d\'équipe.',
        subCategories: [
            {
                id: 'heal',
                name: 'Soin',
                description: '',
                pokemon: [
                    {
                        name: 'MEGANIUM',
                        power: 920,
                        recharge: 1.70,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Les attaques ont une faible chance de restaurer 1 cœur.',
                        abilityDesc: 'Chances de restaurer des PV (1 cœur) lors des attaques'
                    },
                    {
                        name: 'BRELOOM',
                        power: 825,
                        recharge: 1.55,
                        range: 110,
                        shape: 'Circle',
                        ability: 'Les attaques ont une faible chance de restaurer 1 cœur.',
                        abilityDesc: 'Chances de restaurer des PV (1 cœur) lors des attaques'
                    },
                    {
                        name: 'WHIMSICOTT',
                        power: 225,
                        recharge: 0.59,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Les attaques ont une faible chance de restaurer 1 cœur.',
                        abilityDesc: 'Chances de restaurer des PV (1 cœur) lors des attaques'
                    }
                ]
            },
            {
                id: 'anti-invisible',
                name: 'Anti-Invisible',
                description: '',
                pokemon: [
                    {
                        name: 'GRUMPIG',
                        power: 690,
                        recharge: 1.10,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Peut toucher les ennemis invisibles.',
                        abilityDesc: 'Peut attaquer les unités invisibles'
                    },
                    {
                        name: 'XATU',
                        power: 435,
                        recharge: 0.80,
                        range: 210,
                        shape: 'Circle',
                        ability: 'Peut toucher les ennemis invisibles.',
                        abilityDesc: 'Peut attaquer les unités invisibles'
                    },
                    {
                        name: 'HONCHKROW',
                        power: 365,
                        recharge: 0.69,
                        range: 190,
                        shape: 'Circle',
                        ability: 'Peut toucher les ennemis invisibles.',
                        abilityDesc: 'Peut attaquer les unités invisibles'
                    }
                ]
            },
            {
                id: 'buff',
                name: 'Aura/Bonus',
                description: '',
                pokemon: [
                    {
                        name: 'FARFETCH\'D',
                        power: 207,
                        recharge: 1.00,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Augmente les dégâts critiques des Pokémon à portée de 33 %.',
                        abilityDesc: 'Aura : augmente les dégâts critiques des alliés à portée'
                    },
                    {
                        name: 'SUNFLORA',
                        power: 0,
                        recharge: 0.00,
                        range: 170,
                        shape: 'Circle',
                        ability: 'Augmente les dégâts infligés par les Pokémon à portée de 20 %.',
                        abilityDesc: 'Aura : augmente les dégâts des alliés proches'
                    },
                    {
                        name: 'BASTIODON',
                        power: 1400,
                        recharge: 6.50,
                        range: 140,
                        shape: 'Circle',
                        ability: 'Réduit le temps de recharge de 0,5s pour chaque Pokémon Fossile dans l\'équipe.',
                        abilityDesc: 'Réduit le temps de recharge des coéquipiers Fossiles'
                    }
                ]
            },
            {
                id: 'special',
                name: 'Spécial/Économie',
                description: '',
                pokemon: [
                    {
                        name: 'PERSIAN',
                        power: 305,
                        recharge: 0.60,
                        range: 130,
                        shape: 'Circle',
                        ability: 'Les attaques rapportent de l\'argent ($) égal à 10 % de l\'or de la cible.',
                        abilityDesc: 'Les attaques génèrent de l\'or'
                    },
                    {
                        name: 'DITTO',
                        power: 0,
                        recharge: 0.00,
                        range: 100,
                        shape: 'Circle',
                        ability: 'Se transforme en le premier Pokémon de l\'équipe, copiant ses statistiques et son talent, ajustés au niveau de Metamorph.',
                        abilityDesc: 'Se transforme en le premier Pokémon de l\'équipe'
                    },
                    {
                        name: 'SPINDA',
                        power: 101,
                        recharge: 0.20,
                        range: 400,
                        shape: 'Circle',
                        ability: 'A du mal à se concentrer.',
                        abilityDesc: 'Attaques aléatoires (difficulté à viser)'
                    }
                ]
            }
        ]
    }

]