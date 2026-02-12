export const stages = [
    {
        id: 'how-to-beat-route-1-1-articuno',
        routeNumber: '1-1',
        name: 'Guide PokéPath TD Route 1-1 : Meilleure équipe pour battre Artikodin',
        mapImage: '/images/map-route/1-1.png',
        stars: 13,
        difficulty: 'Facile',
        difficultyLevel: 1,
        terrain: ['Champ', 'Herbe', 'Eau'],
        description: 'La Route 1-1 est le premier obstacle majeur de PokéPath TD. Bien que les premières vagues soient faciles, beaucoup de joueurs bloquent à la vague 100 lors de l\'apparition de l\'oiseau légendaire Artikodin. Artikodin possède énormément de PV et peut geler vos tours. Pour le vaincre, vous devez maîtriser le terrain unique de la carte : une immense Zone Aquatique au centre et un chemin terrestre en forme de U en bas.',
        totalWaves: 100,
        recommendedTypes: ['Eau', 'Glace', 'Ténèbres', 'Normal', 'Plante', 'Sol'],
        recommendedPokemon: ['Omostar', 'Corayon', 'Clamiral', 'Aligatueur', 'Lokhlass', 'Octillery', 'Dimoret', 'Canarticho', 'Héliatronc', 'Minotaupe', 'Corboss'],
        strategies: ['Piège Aquatique', 'Contrôle & Zone d\'Effet (AOE)', 'Zone de Mise à Mort'],
        playstyle: 'Hybride Eau/Terre',
        tips: [
            'Placez les unités Eau dans le lac central - elles peuvent attaquer les chemins du haut et du bas',
            'Corayon est le MVP - son ralentissement d\'une portée de 300 couvre presque toute la carte',
            'Placez Dimoret sur le chemin d\'herbe en bas avec Canarticho et Héliatronc pour les bonus',
            'Corboss DOIT être sur l\'unique case de montagne pour la détection des ennemis invisibles',
            'Les unités Eau dans le lac doublent efficacement leurs dégâts en couvrant les deux chemins',
            'Utilisez Lokhlass pour sa chance de Paralysie afin de stopper Artikodin'
        ],
        teamComposition: {
            early: ['Omostar', 'Corayon'],
            mid: ['Omostar', 'Corayon', 'Lokhlass', 'Octillery', 'Dimoret'],
            late: ['Omostar', 'Corayon', 'Clamiral', 'Aligatueur', 'Lokhlass', 'Octillery', 'Dimoret', 'Canarticho', 'Héliatronc', 'Minotaupe', 'Corboss']
        },
        seo: {
            title: 'Guide PokéPath TD Route 1-1 : Meilleure équipe pour battre Artikodin',
            description: 'Bloqué sur la Route 1-1 ? Voici le guide ultime pour battre la vague 100 et Artikodin. Apprenez le meilleur placement d\'équipe eau/terre et comment contrer les ennemis invisibles.',
            keywords: 'pokepathtd route 1-1, battre artikodin pokepathtd, meilleure équipe route 1-1, stratégie eau pokepathtd'
        },
        terrainAnalysis: {
            roads: [
                { description: 'Chemin terrestre en forme de U en bas - la Zone de Mise à Mort', length: 'Long', chokepoints: 2 },
                { description: 'Chemin supérieur autour du lac central', length: 'Moyen', chokepoints: 1 },
                { description: 'Chemin principal serpentant autour du lac central', length: 'Long', chokepoints: 2 }
            ],
            water: [
                { description: 'Immense Zone Aquatique au centre - Piège Aquatique', type: 'Eau Profonde', strategicValue: 'Très Élevée', benefits: ['Les Pokémon de type Eau gagnent un bonus de puissance x2', 'Les unités ici peuvent attaquer les chemins du haut et du bas', 'Double efficacement les dégâts par seconde (DPS)'] },
                { description: 'Petites zones d\'eau près des chemins', type: 'Eau Peu Profonde', strategicValue: 'Moyenne', benefits: ['Les Pokémon de type Eau gagnent un bonus de puissance'] }
            ],
            mountains: [
                { description: 'Unique case de montagne cruciale sur le côté droit', height: 'Haute', strategicValue: 'Très Élevée', benefits: ['+30% de bonus de portée', 'Seul endroit pour la vision en hauteur', 'Doit accueillir Corboss'] }
            ],
            grass: [
                { description: 'Chemin en U du bas - Zone de Mise à Mort pour les unités terrestres', coverage: 'Élevée', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance', 'Parfait pour Dimoret, Canarticho, Héliatronc'] },
                { description: 'Champs d\'herbe entourant le lac', coverage: 'Élevée', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance'] }
            ],
            chokepoints: [
                { location: 'Lac Central (Zone Aquatique)', description: 'Vaste zone d\'eau où les unités Eau peuvent attaquer les deux chemins', priority: 'Très Élevée' },
                { location: 'Chemin en U du bas (Zone de Mise à Mort)', description: 'Là où les gros frappeurs achèvent les ennemis affaiblis', priority: 'Très Élevée' },
                { location: 'Case de Montagne (Côté Droit)', description: 'Seul point pour la vision en hauteur - Corboss indispensable ici', priority: 'Très Élevée' }
            ]
        },
        detailsHtml: `
            <div class="route-guide">
              <p>La Route 1-1 est le premier obstacle majeur de PokéPath TD. Bien que les premières vagues soient faciles, beaucoup de joueurs bloquent à la vague 100 lors de l'apparition de l'oiseau légendaire Artikodin.</p>
              <p>Artikodin possède énormément de PV et peut geler vos tours. Pour le vaincre, vous devez maîtriser le terrain unique de la carte : une immense Zone Aquatique au centre et un chemin terrestre en forme de U en bas.</p>
              <p>Dans ce guide, nous vous montrerons la composition exacte de l'équipe de 10 unités dont vous avez besoin pour dominer la Route 1-1, en utilisant des unités aquatiques et terrestres pour une efficacité maximale.</p>
              
              <h3>🗺️ Analyse de la carte : Le "Piège Aquatique"</h3>
              <p>La clé de la Route 1-1 est le lac central.</p>
              <ul>
                <li><strong>Unités Eau (Zone Bleue) :</strong> Les unités placées ici peuvent attaquer les ennemis sur le chemin du haut ET le chemin du bas. Cela double efficacement leur DPS.</li>
                <li><strong>Unités Terrestres (Zone Verte) :</strong> Le chemin du bas est votre "Zone de Mise à Mort". C'est là que vous devez placer vos unités les plus puissantes pour achever les ennemis affaiblis.</li>
                <li><strong>Montagne (Zone Rouge) :</strong> Il y a une case de montagne cruciale sur le côté droit. C'est le seul endroit offrant une vision en hauteur.</li>
              </ul>
              
              <h3>🏆 La meilleure équipe pour la Route 1-1 (Configuration 10 unités)</h3>
              <p>Cette composition est optimisée pour les comptes de niveau 100, mais elle fonctionne parfaitement à des niveaux inférieurs.</p>
              
              <h4>1. L'Escouade Aquatique (Contrôle & AOE)</h4>
              <p>Placez ces 5 unités dans le lac central (de gauche à droite) :</p>
              <ul>
                <li><strong>Omostar (Gauche) :</strong> Avec son talent Glissade, sa vitesse d'attaque double dans l'eau. Il agit comme une mitraillette pour les premières vagues.</li>
                <li><strong>Corayon (Centre-Gauche) :</strong> Le MVP. Son attaque circulaire possède une portée massive (300 au Niv 100). Il applique un effet de ralentissement sur presque toute la carte.</li>
                <li><strong>Clamiral / Aligatueur (Centre) :</strong> Votre tueur de boss aquatique.</li>
                <li><strong>Lokhlass (Centre-Droit) :</strong> Ajoute une chance de Paralysie. C'est crucial pour stopper Artikodin s'il dépasse vos ralentissements.</li>
                <li><strong>Octillery (Droite) :</strong> Le sniper. Avec une portée de 480, il peut toucher les ennemis dès qu'ils apparaissent.</li>
              </ul>
              
              <h4>2. L'Escouade Terrestre (La "Zone de Mise à Mort")</h4>
              <p>Placez ces unités sur le chemin d'herbe du bas :</p>
              <ul>
                <li><strong>6. Dimoret (Centre) :</strong> Votre DPS principal. Au Niv 100, il a 65% de taux de critique et inflige des dégâts doublés sur les coups critiques.</li>
                <li><strong>7. Canarticho (Gauche de Dimoret) :</strong> Soutien essentiel. Il augmente les dégâts critiques de Dimoret de 33%.</li>
                <li><strong>8. Héliatronc (Droite de Dimoret) :</strong> Soutien essentiel. Il fournit une aura de dégâts de +20% à Dimoret et aux unités aquatiques proches.</li>
                <li><strong>9. Minotaupe (Angle) :</strong> Détruit l'armure ennemie.</li>
              </ul>
              
              <h4>3. La défense anti-invisible</h4>
              <ul>
                <li><strong>Corboss (Case Montagne) :</strong> Vous DEVEZ placer Corboss sur l'unique case de montagne à droite.</li>
                <li><strong>Pourquoi ?</strong> La Route 1-1 contient des ennemis invisibles (comme Kecleon) dans les vagues avancées. Corboss est la meilleure unité pour les révéler avant qu'ils ne s'échappent.</li>
              </ul>
              
              <h3>⚔️ Stratégie Boss : Comment vaincre Artikodin (Vague 100)</h3>
              <p>Artikodin est un boss de type Vol/Glace très résistant.</p>
              <ul>
                <li><strong>Faiblesse :</strong> Il dépend de son mouvement. Si vous pouvez le stopper, vous pouvez le tuer.</li>
              </ul>
              <p><strong>La Stratégie :</strong></p>
              <ul>
                <li><strong>Ralentissement :</strong> Dès qu'Artikodin entre, Corayon ralentira sa vitesse de déplacement.</li>
                <li><strong>Stun Lock :</strong> Lokhlass et Pharamp (si vous en amenez un) tenteront de le paralyser.</li>
                <li><strong>Le Nuke :</strong> Une fois qu'il atteint le chemin du bas, il entre dans la portée de Dimoret. Avec les bonus de Héliatronc et Canarticho, Dimoret peut vider la barre de vie d'Artikodin en quelques secondes.</li>
              </ul>
              <p><strong>Conseil de Pro :</strong> Si vous farmez l'or, vous pouvez utiliser Morphing dans l'eau pour copier Persian et frapper Artikodin pour gagner de l'argent supplémentaire avant de l'achever !</p>
              
              <img src="/images/map-route/1-1-01.png" alt="Carte Route 1-1" class="route-map">
      
              <h3>🗺️ Analyse du Terrain</h3>
              <p>La Route 1-1 présente une configuration unique de "Piège Aquatique" avec un immense lac central et un chemin terrestre en U, créant des opportunités stratégiques pour les unités aquatiques et terrestres.</p>
              
              <h4>Routes et Chemins</h4>
              <ul>
                <li><strong>Chemin terrestre en U :</strong> Chemin terrestre en forme de U en bas - la Zone de Mise à Mort (Long, 2 points de passage)</li>
                <li><strong>Chemin Supérieur :</strong> Chemin supérieur autour du lac central (Moyen, 1 point de passage)</li>
                <li><strong>Chemin Principal :</strong> Chemin principal serpentant autour du lac central (Long, 2 points de passage)</li>
              </ul>
              
              <h4>Zones Aquatiques</h4>
              <ul>
                <li><strong>Grande Zone Aquatique :</strong> Immense Zone Aquatique au centre - Piège Aquatique (Valeur stratégique Très Élevée) - Bonus de puissance x2 pour les Pokémon Eau, attaque sur les deux chemins, DPS doublé.</li>
                <li><strong>Zones d'Eau Secondaires :</strong> Petites zones d'eau près des chemins (Valeur stratégique Moyenne) - Bonus de puissance pour les Pokémon Eau.</li>
              </ul>
              
              <h4>Montagnes et Hauteurs</h4>
              <ul>
                <li><strong>Case de Montagne Unique :</strong> Case de montagne cruciale sur le côté droit (Valeur stratégique Très Élevée) - +30% de portée, unique point de vision en hauteur, Corboss obligatoire.</li>
              </ul>
              
              <h4>Herbe et Végétation</h4>
              <ul>
                <li><strong>Chemin en U Inférieur :</strong> Zone de Mise à Mort pour les unités terrestres (Couverture Élevée) - Bonus pour les types Plante, idéal pour Dimoret, Canarticho, Héliatronc.</li>
                <li><strong>Champs d'Herbe :</strong> Champs entourant le lac (Couverture Élevée) - Bonus de puissance pour les types Plante.</li>
              </ul>
              
              <h4>Points de Passage Stratégiques</h4>
              <ul>
                <li><strong>Lac Central (Zone Aquatique) :</strong> Zone majeure où les unités Eau couvrent les deux chemins (Priorité Très Élevée).</li>
                <li><strong>Chemin en U (Zone de Mise à Mort) :</strong> Là où les unités lourdes achèvent les ennemis (Priorité Très Élevée).</li>
                <li><strong>Case Montagne (Côté Droit) :</strong> Seule vision en hauteur pour Corboss (Priorité Très Élevée).</li>
              </ul>
              
              <h3>⚔️ Composition de l'Équipe</h3>
              <h4>Début de partie (Vagues 1-50)</h4>
              <p>Commencez avec Omostar et Corayon dans le lac central. Le talent Glissade d'Omostar double sa vitesse d'attaque, ce qui en fait une machine de guerre pour le début.</p>
              
              <h4>Milieu de partie (Vagues 51-99)</h4>
              <p>Ajoutez Lokhlass et Octillery à l'escouade aquatique. Déployez Dimoret sur le chemin du bas. Renforcez vos capacités de contrôle et de DPS.</p>
              
              <h4>Fin de partie (Vague 100)</h4>
              <p>Déployez l'équipe complète de 10 unités : Escouade Aquatique (Omostar, Corayon, Clamiral/Aligatueur, Lokhlass, Octillery) dans le lac central, Escouade Terrestre (Dimoret, Canarticho, Héliatronc, Minotaupe) sur le chemin du bas, et Corboss sur la montagne pour la détection des invisibles.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-1-2-zapdos-wave-100',
        routeNumber: '1-2',
        name: 'Guide PokéPath TD Route 1-2 : Battre Électhor (Stratégie Vague 100)',
        mapImage: '/images/map-route/1-2.png',
        stars: 2,
        difficulty: 'Facile',
        difficultyLevel: 1,
        terrain: ['Champ', 'Herbe'],
        description: 'La Route 1-2 est connue pour ses chemins divisés et son absence d\'eau, mais le vrai défi est la vague 100 : Électhor. Cet oiseau légendaire est rapide, résistant et immunisé à de nombreux effets de contrôle. Si votre équipe AOE standard nettoie les vagues 1-99 mais échoue au boss, utilisez la stratégie tactique du "Switch Gamblast".',
        totalWaves: 100,
        recommendedTypes: ['Eau', 'Glace', 'Normal', 'Plante'],
        recommendedPokemon: ['Gamblast', 'Canarticho', 'Héliatronc', 'Dimoret', 'Morphing', 'Corayon', 'Maracachi'],
        strategies: ['Nuke Gamblast', 'Spawn Camping', 'Switch Tactique'],
        playstyle: 'Stratégie de switch pour Boss',
        tips: [
            'Utilisez la mécanique d\'Essai Infini - si vous échouez à la vague 100, vous pouvez recommencer instantanément',
            'Retirez Maracachi à la vague 100 et déployez Gamblast au point d\'apparition (spawn)',
            'Placez Canarticho et Héliatronc à côté de Gamblast pour un maximum de bonus',
            'Les boss ne sont jamais invisibles - vous pouvez retirer Corboss pour plus de DPS',
            'Réglez le ciblage de Gamblast sur "Fort" ou "Premier" pour un dégât optimal',
            'Utilisez Dimoret + Morphing au centre du terrain comme filet de sécurité'
        ],
        teamComposition: {
            early: ['Maracachi', 'Corboss'],
            mid: ['Maracachi', 'Galeking', 'Corayon', 'Dimoret'],
            late: ['Gamblast', 'Canarticho', 'Héliatronc', 'Dimoret', 'Morphing', 'Corayon']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Chemins divisés avec convergence centrale', length: 'Long', chokepoints: 2 },
                { description: 'Chemin principal rectiligne au centre', length: 'Long', chokepoints: 1 },
                { description: 'Chemin courbe sur le côté gauche', length: 'Moyen', chokepoints: 0 }
            ],
            water: [],
            mountains: [
                { description: 'Zones montagneuses pour unités à longue portée', height: 'Moyenne', strategicValue: 'Élevée', benefits: ['+20% de bonus de portée', 'Idéal pour Corboss ou Ptera'] }
            ],
            grass: [
                { description: 'Vastes champs d\'herbe couvrant la majeure partie de la carte', coverage: 'Très Élevée', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance x2'] },
                { description: 'Champs de culture offrant du terrain d\'herbe supplémentaire', coverage: 'Moyenne', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance'] },
                { description: 'Zone d\'apparition en bas à gauche', coverage: 'Faible', benefits: ['Emplacement parfait pour Gamblast'] }
            ],
            chokepoints: [
                { location: 'Point d\'apparition en bas à gauche', description: 'Là où Électhor apparaît - parfait pour le "spawn camping"', priority: 'Très Élevée' },
                { location: 'Division Centrale', description: 'Là où les chemins convergent - zone de sécurité', priority: 'Très Élevée' },
                { location: 'Rétrécissement du chemin central', description: 'Le chemin principal se rétrécit au milieu', priority: 'Élevée' }
            ]
        },
        seo: {
            title: 'Guide PokéPath TD Route 1-2 : Battre Électhor (Stratégie Vague 100)',
            description: 'Bloqué sur Électhor ? Apprenez la stratégie du "Switch Gamblast" pour battre la Route 1-2. Nous expliquons la mécanique d\'essai infini et la meilleure équipe pour faire fondre le boss de la vague 100.',
            keywords: 'pokepathtd route 1-2, battre électhor pokepathtd, mécanique retry vague 100, gamblast tueur de boss, guide pokepathtd'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>La Route 1-2 est connue pour ses chemins divisés et son absence d'eau, mais le vrai défi est la vague 100 : Électhor. Cet oiseau légendaire est rapide, résistant et immunisé à de nombreux effets de contrôle.</p>
              <p>Si votre équipe AOE standard (Maracachi/Galeking) peut nettoyer les vagues 1-99 mais échoue au boss, ne vous inquiétez pas. Vous n'avez pas besoin de recommencer toute la partie.</p>
              <p>Dans ce guide, nous allons utiliser la mécanique d'"Essai Infini" du jeu et un switch tactique vers Gamblast pour pulvériser Électhor.</p>
              
              <h3>⚙️ Mécaniques clés du jeu à connaître</h3>
              <p>Avant de parler de l'équipe, vous devez comprendre deux mécaniques cruciales de PokéPath TD :</p>
              
              <h4>1. La mécanique de "Boss Infini"</h4>
              <ul>
                <li>Si vous perdez face au boss de la vague 100, le jeu ne termine PAS votre partie. Il redémarre simplement la vague 100.</li>
                <li><strong>Ce que cela signifie :</strong> Vous pouvez essayer de battre Électhor autant de fois que vous le souhaitez. Si vous échouez, ajustez simplement votre équipe, déplacez vos unités et réessayez instantanément. Il n'y a aucune pénalité !</li>
              </ul>
      
              <img src="/images/map-route/1-2-02.png" alt="Carte Route 1-2" class="route-map">
              
              <h4>2. La mécanique de "Retraite" (Retire)</h4>
              <ul>
                <li>Lorsque vous échangez une unité (Retire), vous ne récupérez PAS d'or.</li>
                <li><strong>Stratégie :</strong> À la vague 100, vous devriez avoir accumulé beaucoup d'or. N'ayez pas peur de retirer vos unités de nettoyage de vagues (comme Maracachi) pour faire de la place aux tueurs de boss (comme Gamblast). Vous échangez de l'argent contre de la puissance pure.</li>
              </ul>
              
              <h4>3. Les Boss ne sont JAMAIS invisibles</h4>
              <ul>
                <li>Électhor (et tous les boss de la vague 100) n'ont pas le trait "Invisible".</li>
                <li><strong>Optimisation :</strong> Vous pouvez retirer Corboss (Anti-Invisible) sans risque pour la vague finale et le remplacer par une autre unité à haut DPS comme Ptera ou Libégon pour des dégâts supplémentaires.</li>
              </ul>
              
              <h3>⚔️ La Stratégie : Le "Nuke Gamblast"</h3>
              <p>Électhor est rapide. Nous devons infliger des dégâts massifs immédiatement. Notre stratégie se concentre sur une installation de "Spawn Camping" en bas à gauche.</p>
              
              <h4>Étape 1 : L'installation (Coin en bas à gauche)</h4>
              <p>C'est ici qu'Électhor apparaît. Nous voulons le frapper fort avant même qu'il ne bouge.</p>
              <ul>
                <li><strong>Le Switch :</strong> Retirez votre Maracachi (AOE) et déployez Gamblast (Niv 100).</li>
                <li><strong>Pourquoi ?</strong> Gamblast possède une puissance de 1 950 et inflige des dégâts doublés sur les coups critiques. C'est le plus gros burst cible unique du jeu.</li>
                <li><strong>Les Bonus :</strong> Placez Canarticho (+33% dégâts crit) et Héliatronc (+20% dégâts) juste à côté de Gamblast.</li>
                <li><strong>Résultat :</strong> Électhor reçoit des roquettes critiques massives dès son apparition, perdant 30 à 50% de ses PV instantanément.</li>
              </ul>
              
              <h4>Étape 2 : Le filet de sécurité (Milieu du terrain)</h4>
              <p>Si Électhor survit au nuke initial, il se déplacera vers la convergence centrale.</p>
              <ul>
                <li><strong>Dimoret :</strong> Placez votre Dimoret ici pour couvrir à la fois les chemins du haut et du bas.</li>
                <li><strong>Morphing :</strong> Copiez Dimoret et placez-le à proximité. Deux Dimorets valent mieux qu'un.</li>
                <li><strong>Corayon :</strong> Fournit un ralentissement de portée 300. Même si Électhor est rapide, cela donne plus de temps à vos Dimorets pour porter leurs coups.</li>
              </ul>
              
              <h4>Étape 3 : Optimisation (En cas d'échec)</h4>
              <p>Si vous n'arrivez toujours pas à le battre :</p>
              <ul>
                <li>Laissez la vague redémarrer (Auto-Retry).</li>
                <li><strong>Retirez Corboss :</strong> Puisqu'Électhor n'est pas invisible, échangez Corboss pour une autre unité DPS sur la montagne.</li>
                <li><strong>Vérifiez le ciblage :</strong> Assurez-vous que Gamblast est réglé sur "Fort" ou "Premier".</li>
              </ul>
              
              <h3>📝 Résumé : Le coup gagnant</h3>
              <ol>
                <li>Nettoyez les vagues 1-99 avec votre équipe AOE standard.</li>
                <li>Mettez en pause à la vague 100.</li>
                <li>Retirez Maracachi/Corboss.</li>
                <li>Déployez Gamblast + Buffs au point d'apparition.</li>
                <li>Déployez Dimoret + Morphing au centre.</li>
                <li>Enlevez la pause et gagnez.</li>
              </ol>
              <p>Cette stratégie exploite les statistiques du niveau 100. Vous voulez voir le plein potentiel de ces unités ? Consultez notre <a href="/wiki">Base de données Wiki</a>.</p>
              
              <img src="/images/map-route/1-2-01.png" alt="Carte Route 1-2" class="route-map">
      
              <h3>🗺️ Analyse du Terrain</h3>
              <p>La Route 1-2 propose des chemins divisés et de vastes champs d'herbe, sans zones aquatiques. Les points stratégiques clés sont le spawn et la convergence centrale.</p>
              
              <h4>Routes et Chemins</h4>
              <ul>
                <li><strong>Chemins Divisés :</strong> Chemins divisés avec convergence centrale (Long, 2 points de passage)</li>
                <li><strong>Chemin Principal :</strong> Chemin principal rectiligne au centre (Long, 1 point de passage)</li>
                <li><strong>Chemin Gauche :</strong> Chemin courbe sur le côté gauche (Moyen, 0 point de passage)</li>
              </ul>
              
              <h4>Montagnes et Hauteurs</h4>
              <ul>
                <li><strong>Zones Montagneuses :</strong> Zones pour unités à longue portée (Valeur stratégique Élevée) - +20% de portée, idéal pour Corboss ou Ptera.</li>
              </ul>
              
              <h4>Herbe et Végétation</h4>
              <ul>
                <li><strong>Vastes Champs d'Herbe :</strong> Couvrent la majorité de la carte (Couverture Très Élevée) - Bonus de puissance x2 pour les types Plante.</li>
                <li><strong>Champs de Culture :</strong> Terrain d'herbe additionnel (Couverture Moyenne) - Bonus pour les types Plante.</li>
                <li><strong>Zone Spawn Bas Gauche :</strong> Zone d'apparition (Couverture Faible) - Parfait pour placer Gamblast.</li>
              </ul>
              
              <h4>Points de Passage Stratégiques</h4>
              <ul>
                <li><strong>Spawn Bas Gauche :</strong> Là où Électhor apparaît - idéal pour le camping (Priorité Très Élevée).</li>
                <li><strong>Division Centrale :</strong> Convergence des chemins - zone de sécurité (Priorité Très Élevée).</li>
                <li><strong>Rétrécissement Central :</strong> Le chemin se resserre au milieu (Priorité Élevée).</li>
              </ul>
              
              <h3>⚔️ Composition de l'Équipe</h3>
              <h4>Début de partie (Vagues 1-50)</h4>
              <p>Utilisez Maracachi pour le nettoyage des vagues et Corboss pour la détection des invisibles.</p>
              
              <h4>Milieu de partie (Vagues 51-99)</h4>
              <p>Continuez avec Maracachi et Galeking pour les dégâts de zone. Ajoutez Corayon et Dimoret pour le contrôle et le DPS.</p>
              
              <h4>Fin de partie (Vague 100)</h4>
              <p>Effectuez le "Switch Gamblast" : Retirez Maracachi et déployez Gamblast + Canarticho + Héliatronc au spawn. Gardez Dimoret + Morphing + Corayon au centre comme sécurité.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-1-3-moltres',
        routeNumber: '1-3',
        name: 'Guide PokéPath TD Route 1-3 : Meilleure équipe pour vaincre Sulfura',
        mapImage: '/images/map-route/1-3.png',
        stars: 300,
        starsSecondary: 0,
        difficulty: 'Moyenne',
        difficultyLevel: 2,
        terrain: ['Champ', 'Montagne', 'Eau', 'Herbe'],
        description: 'La Route 1-3 est l\'étape finale de la première région, présentant un mélange de terrains aquatiques, herbeux et montagneux. Le défi ultime est la vague 100 : Sulfura, l\'oiseau légendaire de feu. Bien que les types Eau semblent être le choix évident, le vrai secret pour battre cette carte réside dans une équipe spécialisée en Contrôle Hybride.',
        totalWaves: 100,
        recommendedTypes: ['Ténèbres', 'Glace', 'Électrik', 'Acier', 'Plante'],
        recommendedPokemon: ['Absol', 'Morphing', 'Dimoret', 'Corayon', 'Noacier', 'Pharamp', 'Héliatronc', 'Bruyverne', 'Corboss'],
        strategies: ['Double Absol Lock-On', 'Contrôle & Burst', 'Défense à trois couches'],
        playstyle: 'Contrôle Hybride',
        tips: [
            'Placez Absol et Morphing sur la montagne en haut à gauche pour un verrouillage rapide et des dégâts évolutifs',
            'Utilisez Corayon et Noacier au carrefour central pour un ralentissement global',
            'Déployez Dimoret et Héliatronc en bas à droite pour la zone de mise à mort',
            'Réglez le ciblage d\'Absol et Morphing sur "Fort" pour verrouiller Sulfura immédiatement',
            'La configuration Double Absol fait fondre Sulfura avant qu\'il n\'atteigne le milieu'
        ],
        teamComposition: {
            early: ['Bruyverne', 'Corayon'],
            mid: ['Absol', 'Morphing', 'Noacier', 'Pharamp'],
            late: ['Absol', 'Morphing', 'Corayon', 'Noacier', 'Pharamp', 'Dimoret', 'Héliatronc', 'Bruyverne', 'Corboss']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Chemins convergeant vers le carrefour central', length: 'Long', chokepoints: 2 },
                { description: 'Chemin de l\'apparition vers la zone de mise à mort', length: 'Moyen', chokepoints: 1 }
            ],
            water: [
                { description: 'Zones d\'eau offrant des bonus de terrain', type: 'Eau', strategicValue: 'Moyenne', benefits: ['Les Pokémon de type Eau gagnent un bonus de puissance'] }
            ],
            mountains: [
                { description: 'Montagne (Haut Gauche) - Parfait pour les snipers à longue portée et les unités anti-invisibles', height: 'Très Haute', strategicValue: 'Très Élevée', benefits: ['+40% de bonus de portée', 'Parfait pour Absol et Bruyverne', 'Peut verrouiller les ennemis tôt'] },
                { description: 'Falaises rocheuses le long des chemins', height: 'Moyenne', strategicValue: 'Élevée', benefits: ['+15% de bonus de portée'] }
            ],
            grass: [
                { description: 'Zones d\'herbe incluant la zone de mise à mort en bas à droite', coverage: 'Moyenne', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance', 'Parfait pour le placement d\'Héliatronc'] },
                { description: 'Zones de végétation dispersées', coverage: 'Faible', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance'] }
            ],
            chokepoints: [
                { location: 'Point de passage (Milieu)', description: 'Là où les chemins convergent, idéal pour ralentir les ennemis', priority: 'Très Élevée' },
                { location: 'Montagne (Haut Gauche)', description: 'Parfait pour les snipers à longue portée', priority: 'Très Élevée' },
                { location: 'Zone de mise à mort (Bas Droite)', description: 'La dernière ligne droite où les gros frappeurs achèvent le Boss', priority: 'Très Élevée' }
            ]
        },
        seo: {
            title: 'Guide PokéPath TD Route 1-3 : Meilleure équipe pour vaincre Sulfura',
            description: 'Bloqué sur la Route 1-3 ? Utilisez notre guide de la meilleure équipe niveau 100 pour battre Sulfura. Apprenez la stratégie "Double Absol Lock-On" et comment utiliser les ralentissements globaux.',
            keywords: 'pokepathtd route 1-3, battre sulfura pokepathtd, meilleure équipe pokepathtd, absol niveau 100, build corayon ralentissement'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>La Route 1-3 est l'étape finale de la première région, présentant un mélange de terrains aquatiques, herbeux et montagneux. Le défi ultime est la vague 100 : Sulfura, l'oiseau légendaire de feu.</p>
              <p>Bien que les types Eau semblent être le choix évident, le vrai secret pour battre cette carte réside dans une équipe spécialisée en Contrôle Hybride.</p>
              <p>Dans ce guide, nous révélons la stratégie "Double Absol Lock-On" (Niveau 100) qui écrase Sulfura en utilisant l'augmentation des dégâts et le contrôle de foule global.</p>
              
              <h3>🗺️ Stratégie de la carte : Contrôler le flux</h3>
              <p>La Route 1-3 possède trois zones distinctes que vous devez utiliser :</p>
              <ul>
                <li><strong>Montagne (Haut Gauche) :</strong> Parfait pour les snipers à longue portée et les unités anti-invisibles.</li>
                <li><strong>Point de passage (Milieu) :</strong> Là où les chemins convergent, idéal pour ralentir les ennemis.</li>
                <li><strong>Zone de mise à mort (Bas Droite) :</strong> La dernière ligne droite où vos gros frappeurs achèvent le Boss.</li>
              </ul>
      
              <img src="/images/map-route/1-3-01.png" alt="Carte Route 1-3" class="route-map">
              
              <h3>🏆 La meilleure composition d'équipe (Configuration 10 unités)</h3>
              <p>Nous avons créé l'équipe parfaite pour contrer la vitesse et la santé élevées de Sulfura.</p>
              
              <h4>1. Les Snipers de hauteur (Montagne Haut Gauche)</h4>
              <ul>
                <li><strong>Absol (Niveau 100) :</strong>
                  <ul>
                    <li><strong>Rôle :</strong> Dégâts évolutifs.</li>
                    <li><strong>Passif :</strong> Inflige plus de dégâts à chaque coup consécutif sur la même cible.</li>
                    <li><strong>Pourquoi ?</strong> Placé sur la montagne, Absol verrouille Sulfura très tôt, accumulant des dégâts infinis.</li>
                  </ul>
                </li>
                <li><strong>Morphing (Copiant Absol) :</strong>
                  <ul>
                    <li><strong>Rôle :</strong> Le multiplicateur.</li>
                    <li><strong>Pourquoi ?</strong> En copiant Absol, vous avez DEUX unités accumulant des dégâts sur Sulfura simultanément. Cela fait fondre les PV du Boss avant même qu'il n'atteigne le milieu.</li>
                  </ul>
                </li>
                <li><strong>Bruyverne / Corboss :</strong>
                  <ul>
                    <li><strong>Rôle :</strong> Anti-Invisible / AOE.</li>
                    <li><strong>Pourquoi ?</strong> Essentiel pour nettoyer les monstres invisibles dans les vagues précédentes et fournir un soutien AOE à longue portée.</li>
                  </ul>
                </li>
              </ul>
              
              <h4>2. Le contrôle de mi-parcours (Ralentissement Global)</h4>
              <ul>
                <li><strong>Corayon :</strong>
                  <ul>
                    <li><strong>Rôle :</strong> Ralentissement Global.</li>
                    <li><strong>Passif :</strong> Au Niveau 100, son attaque circulaire de portée 300 ralentit presque toute la carte.</li>
                    <li><strong>Pourquoi ?</strong> Sulfura est rapide. Corayon le force à ramper.</li>
                  </ul>
                </li>
                <li><strong>Noacier :</strong>
                  <ul>
                    <li><strong>Rôle :</strong> Ralentissement secondaire.</li>
                    <li><strong>Passif :</strong> Les attaques appliquent un effet de ralentissement.</li>
                    <li><strong>Pourquoi ?</strong> Se cumule avec Corayon pour s'assurer que les ennemis sont en permanence entravés.</li>
                  </ul>
                </li>
                <li><strong>Pharamp :</strong>
                  <ul>
                    <li><strong>Rôle :</strong> Étourdissement (Stun).</li>
                    <li><strong>Passif :</strong> 30% de chance de Paralysie.</li>
                    <li><strong>Pourquoi ?</strong> Un étourdissement au bon moment peut stopper Sulfura net dans la zone de mise à mort.</li>
                  </ul>
                </li>
              </ul>
              
              <h4>3. La "Zone de mise à mort" (Bas Droite)</h4>
              <ul>
                <li><strong>Dimoret :</strong>
                  <ul>
                    <li><strong>Rôle :</strong> Le Finisseur.</li>
                    <li><strong>Passif :</strong> 65% de taux de Critique + Dégâts critiques doublés.</li>
                    <li><strong>Pourquoi ?</strong> Tout Boss qui survit au barrage d'Absol se fait éliminer par les critiques de Dimoret.</li>
                  </ul>
                </li>
                <li><strong>Héliatronc :</strong>
                  <ul>
                    <li><strong>Rôle :</strong> Buffer de dégâts.</li>
                    <li><strong>Passif :</strong> Aura de dégâts +20%.</li>
                    <li><strong>Pourquoi ?</strong> Boost Dimoret et les unités proches pour un burst maximum.</li>
                  </ul>
                </li>
              </ul>
              
              <h3>⚔️ Le secret fondamental : Pourquoi cette équipe gagne</h3>
              <p>Le secret pour battre la Route 1-3 n'est pas seulement d'utiliser des types Eau. C'est la "Défense à trois couches" :</p>
              <ul>
                <li><strong>Couche 1 (Le Verrouillage) :</strong> La configuration Double Absol commence à endommager Sulfura dès son apparition. Parce que les dégâts d'Absol augmentent à chaque coup, au moment où Sulfura atteint le milieu, il subit des dégâts massifs par seconde.</li>
                <li><strong>Couche 2 (Les Sables Mouvants) :</strong> Corayon et Noacier transforment la carte en sables mouvants. Sulfura met deux fois plus de temps à traverser la portée des Absol car il est ralenti en permanence.</li>
                <li><strong>Couche 3 (L'Exécution) :</strong> Si Sulfura survit miraculeusement avec 10% de PV, il entre dans la portée d'un Dimoret boosté, qui porte le coup critique final.</li>
              </ul>
              
              <h3>📝 Guide d'exécution étape par étape</h3>
              <h4>Déploiement :</h4>
              <ul>
                <li>Placez Absol et Morphing sur la montagne en haut à gauche.</li>
                <li>Placez Corayon et Noacier près du carrefour central.</li>
                <li>Placez Dimoret et Héliatronc dans la zone d'herbe en bas à droite.</li>
              </ul>
              
              <h4>Ciblage :</h4>
              <ul>
                <li>Réglez Absol et Morphing sur "Fort" pour s'assurer qu'ils verrouillent Sulfura immédiatement.</li>
              </ul>
              
              <h4>La vague du Boss (100) :</h4>
              <ul>
                <li>Regardez Sulfura être ralenti au maximum.</li>
                <li>Les dégâts cumulés des deux Absol le tueront probablement avant même qu'il n'atteigne Dimoret.</li>
                <li>S'il survit, Dimoret finira le travail.</li>
              </ul>
      
              <img src="/images/map-route/1-3-02.png" alt="Carte Route 1-3" class="route-map">
              
              <h3>🗺️ Analyse du Terrain</h3>
              <p>La Route 1-3 présente un mélange de terrains aquatiques, herbeux et montagneux, créant trois zones stratégiques distinctes.</p>
              
              <h4>Routes et Chemins</h4>
              <ul>
                <li><strong>Chemins convergents :</strong> Chemins convergeant vers le carrefour central (Long, 2 points de passage)</li>
                <li><strong>Chemin principal :</strong> Chemin de l'apparition vers la zone de mise à mort (Moyen, 1 point de passage)</li>
              </ul>
              
              <h4>Zones Aquatiques</h4>
              <ul>
                <li><strong>Zones d'Eau :</strong> Zones d'eau offrant des bonus de terrain (Valeur stratégique Moyenne) - Les Pokémon de type Eau gagnent un bonus de puissance.</li>
              </ul>
              
              <h4>Montagnes et Hauteurs</h4>
              <ul>
                <li><strong>Montagne (Haut Gauche) :</strong> Parfait pour les snipers à longue portée et les unités anti-invisibles (Valeur stratégique Très Élevée) - +40% de portée, idéal pour Absol et Bruyverne, verrouillage précoce des cibles.</li>
                <li><strong>Falaises Rocheuses :</strong> Falaises le long des chemins (Valeur stratégique Élevée) - +15% de bonus de portée.</li>
              </ul>
              
              <h4>Herbe et Végétation</h4>
              <ul>
                <li><strong>Zones d'Herbe :</strong> Inclut la zone de mise à mort en bas à droite (Couverture Moyenne) - Bonus pour les types Plante, idéal pour Héliatronc.</li>
                <li><strong>Végétation Dispersée :</strong> Zones d'herbe éparses (Couverture Faible) - Bonus pour les types Plante.</li>
              </ul>
              
              <h4>Points de passage stratégiques</h4>
              <ul>
                <li><strong>Point de passage (Milieu) :</strong> Convergence des chemins, idéal pour le ralentissement (Priorité Très Élevée).</li>
                <li><strong>Montagne (Haut Gauche) :</strong> Emplacement Sniper longue portée (Priorité Très Élevée).</li>
                <li><strong>Zone de mise à mort (Bas Droite) :</strong> Ligne finale pour les gros frappeurs (Priorité Très Élevée).</li>
              </ul>
              
              <h3>⚔️ Composition de l'Équipe</h3>
              <h4>Début de partie (Vagues 1-50)</h4>
              <p>Commencez avec Bruyverne et Corayon pour les dégâts de zone et le contrôle précoce.</p>
              
              <h4>Milieu de partie (Vagues 51-99)</h4>
              <p>Préparez vos tueurs de Boss : Déployez Absol, Morphing, Noacier et Pharamp. Installez votre zone de contrôle au milieu.</p>
              
              <h4>Fin de partie (Vague 100)</h4>
              <p>Déployez l'équipe complète "Double Absol Lock-On" : Absol & Morphing (snipers de montagne), Corayon & Noacier & Pharamp (contrôle mi-parcours), Dimoret & Héliatronc (zone de mise à mort), Bruyverne & Corboss (soutien).</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-2-1-raikou-wave-100',
        routeNumber: '2-1',
        name: 'Guide PokéPath TD Route 2-1 : Stratégie ultime pour battre Raikou',
        mapImage: '/images/map-route/2-1.png',
        stars: 50,
        starsSecondary: 0,
        difficulty: 'Moyenne',
        difficultyLevel: 2,
        terrain: ['Champ', 'Montagne'],
        description: 'La Route 2-1 marque le début de la deuxième région. La carte présente une disposition en carrefour complexe où les ennemis peuvent emprunter plusieurs chemins, et elle culmine par un combat contre Raikou, l\'un des Fauves Légendaires. Raikou est célèbre pour sa vitesse de déplacement incroyable, dépassant souvent les défenses avant qu\'elles ne puissent lui infliger des dégâts mortels.',
        totalWaves: 100,
        recommendedTypes: ['Ténèbres', 'Glace', 'Électrik', 'Acier'],
        recommendedPokemon: ['Absol', 'Morphing', 'Dimoret', 'Corayon', 'Noacier', 'Pharamp', 'Bruyverne', 'Corboss'],
        strategies: ['Contrôle & Burst', 'Ralentissement & Stun', 'Hauteurs pour Sniping'],
        playstyle: 'Hybride Contrôle/Burst',
        tips: [
            'Placez Absol sur la montagne en haut à gauche pour un verrouillage précoce et des dégâts évolutifs',
            'Utilisez Morphing pour copier Absol afin de doubler les dégâts évolutifs',
            'Corayon offre un ralentissement global pour contrer la vitesse élevée de Raikou',
            'Cumulez le ralentissement de Noacier avec celui de Corayon pour un contrôle maximum',
            'Pharamp peut paralyser Raikou, offrant des coups gratuits à vos unités de dégâts',
            'Dimoret inflige le burst final avec son taux de critique élevé'
        ],
        teamComposition: {
            early: ['Bruyverne', 'Corayon'],
            mid: ['Absol', 'Morphing', 'Dimoret', 'Corboss'],
            late: ['Absol', 'Morphing', 'Corayon', 'Noacier', 'Pharamp', 'Dimoret', 'Bruyverne', 'Corboss']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Disposition en carrefour avec plusieurs chemins ramifiés', length: 'Très Long', chokepoints: 3 },
                { description: 'Chemin de l\'apparition vers l\'intersection centrale', length: 'Moyen', chokepoints: 1 },
                { description: 'Chemins convergeant vers la sortie', length: 'Moyen', chokepoints: 1 }
            ],
            water: [],
            mountains: [
                { description: 'Hauteurs (Haut Gauche) - Grande zone de montagne parfaite pour les snipers', height: 'Très Haute', strategicValue: 'Très Élevée', benefits: ['+40% de bonus de portée', 'Peut couvrir le spawn et le carrefour', 'Parfait pour Absol et Bruyverne'] },
                { description: 'Afloraisons rocheuses le long des chemins', height: 'Moyenne', strategicValue: 'Élevée', benefits: ['+20% de bonus de portée'] }
            ],
            grass: [
                { description: 'Champs d\'herbe autour du carrefour', coverage: 'Moyenne', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance'] }
            ],
            chokepoints: [
                { location: 'Le Carrefour (Centre)', description: 'Intersection centrale où les ennemis se séparent - zone la plus critique', priority: 'Très Élevée' },
                { location: 'Point d\'apparition (Haut Centre)', description: 'Là où les ennemis apparaissent et descendent', priority: 'Très Élevée' },
                { location: 'La Sortie (Bas Droite)', description: 'Tous les chemins convergent ici - zone du dernier rempart', priority: 'Élevée' },
                { location: 'Hauteurs (Haut Gauche)', description: 'Zone de montagne pour les unités longue portée', priority: 'Très Élevée' }
            ]
        },
        seo: {
            title: 'Guide PokéPath TD Route 2-1 : Stratégie ultime pour battre Raikou',
            description: "Impossible de battre Raikou sur la Route 2-1 ? Notre guide complet détaille la carte, la meilleure équipe niveau 100 et le placement exact pour arrêter le boss Électrik.",
            keywords: 'pokepathtd route 2-1, battre raikou pokepathtd, guide route 2-1, boss raikou pokepathtd, meilleure équipe route 2-1'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>La Route 2-1 marque le début de la deuxième région dans PokéPath TD. Bien que l'esthétique herbeuse puisse rappeler la Route 1, la difficulté augmente considérablement.</p>
              <p>La carte présente une disposition en carrefour complexe où les ennemis peuvent emprunter plusieurs chemins, et elle culmine par un combat contre Raikou, l'un des Fauves Légendaires. Raikou est célèbre pour sa vitesse de déplacement incroyable, dépassant souvent les défenses avant qu'elles ne puissent lui infliger des dégâts mortels.</p>
              <p>Dans ce guide, nous analyserons la carte, détaillerons les faiblesses de Raikou et fournirons la composition exacte de l'équipe de 10 unités pour assurer la victoire.</p>
              
              <h3>🗺️ Analyse de la carte : Le piège du carrefour</h3>
              <p>Comprendre le terrain de la Route 2-1 est la moitié du combat.</p>
              <ul>
                <li><strong>Point d'apparition (Haut Centre) :</strong> Les ennemis apparaissent en haut et descendent vers l'intersection centrale.</li>
                <li><strong>Le Carrefour (Centre) :</strong> C'est la zone la plus critique. Les ennemis vont se diviser et serpenter à travers cette zone. Vos tours DOIVENT couvrir cette intersection pour être efficaces.</li>
                <li><strong>Les Hauteurs (Haut Gauche) :</strong> Il y a une grande zone de montagne sur la gauche. C'est l'endroit idéal pour les unités à longue portée (comme Absol ou Bruyverne) pour sniper les ennemis dès leur apparition.</li>
                <li><strong>La Sortie (Bas Droite) :</strong> Tous les chemins finissent par converger ici. C'est votre zone du "Dernier Rempart".</li>
              </ul>
      
              <img src="/images/map-route/2-1-01.png" alt="Carte Route 2-1" class="route-map">
              
              <h3>⚡ Profil du Boss : Raikou (Vague 100)</h3>
              <ul>
                <li><strong>Nom :</strong> Raikou</li>
                <li><strong>Type :</strong> Électrik</li>
                <li><strong>Stats :</strong> PV élevés, Vitesse très élevée (1.2).</li>
                <li><strong>Capacité :</strong> Contrairement à certains boss, Raikou n'est pas seulement un tank ; il est rapide. Si vous n'avez pas d'effets de ralentissement ou d'étourdissement, il traversera votre carte en quelques secondes.</li>
                <li><strong>Faiblesse :</strong> Il est sensible aux dégâts de burst physiques et au contrôle de foule.</li>
              </ul>
      
              <img src="/images/map-route/2-1-03.png" alt="Profil de Raikou" class="route-map">
              
              <h3>🏆 Meilleure composition d'équipe (Meta Niveau 100)</h3>
              <p>Nous recommandons une équipe hybride "Contrôle & Burst". Raikou étant rapide, nous devons le ralentir (Contrôle) puis le frapper avec des coups critiques (Burst).</p>
              
              <h4>1. Les Snipers de Montagne (Flanc Gauche)</h4>
              <ul>
                <li><strong>Absol (Niveau 100) :</strong>
                  <ul>
                    <li><strong>Placement :</strong> Montagne Haut Gauche.</li>
                    <li><strong>Pourquoi ?</strong> Le passif d'Absol inflige des dégâts croissants à chaque coup consécutif. En le plaçant sur les hauteurs près du spawn, il peut verrouiller Raikou tôt et accumuler des dégâts immédiatement.</li>
                  </ul>
                </li>
                <li><strong>Morphing (Copiant Absol) :</strong>
                  <ul>
                    <li><strong>Placement :</strong> À côté d'Absol.</li>
                    <li><strong>Pourquoi ?</strong> Deux Absol valent mieux qu'un. Cela double votre production de dégâts évolutifs.</li>
                  </ul>
                </li>
                <li><strong>Caratroc / Corboss :</strong>
                  <ul>
                    <li><strong>Placement :</strong> Côté gauche.</li>
                    <li><strong>Pourquoi ?</strong> Corboss fournit la vision Anti-Invisible pour les premières vagues, s'assurant qu'aucun type Spectre ne s'échappe.</li>
                  </ul>
                </li>
              </ul>
              
              <h4>2. La Zone "Sables Mouvants" (Centre)</h4>
              <p>C'est ici que la magie opère. Vous devez transformer le carrefour rapide en un cauchemar au ralenti pour Raikou.</p>
              <ul>
                <li><strong>Corayon :</strong>
                  <ul>
                    <li><strong>Placement :</strong> Champ Central.</li>
                    <li><strong>Pourquoi ?</strong> Au Niveau 100, Corayon a une portée massive de 300. Son attaque circulaire applique un ralentissement global, contrant la stat de vitesse de Raikou.</li>
                  </ul>
                </li>
                <li><strong>Noacier :</strong>
                  <ul>
                    <li><strong>Placement :</strong> Près de l'intersection des chemins.</li>
                    <li><strong>Pourquoi ?</strong> Les attaques de Noacier appliquent un ralentissement secondaire. Cumuler cela avec Corayon fait ramper Raikou.</li>
                  </ul>
                </li>
                <li><strong>Pharamp :</strong>
                  <ul>
                    <li><strong>Placement :</strong> Bas Gauche / Centre.</li>
                    <li><strong>Pourquoi ?</strong> Étourdissement (Hard Stun). Pharamp a une chance de paralyser la cible. Un étourdissement chanceux au milieu de la carte permet à vos Absol et Dimoret de porter des coups gratuits.</li>
                  </ul>
                </li>
              </ul>
              
              <h4>3. L'Escouade d'Exécution (Flanc Droit)</h4>
              <p>Si Raikou survit à la zone de ralentissement, il entre dans la zone de mise à mort sur la droite.</p>
              <ul>
                <li><strong>Dimoret :</strong>
                  <ul>
                    <li><strong>Placement :</strong> Centre Droit.</li>
                    <li><strong>Pourquoi ?</strong> Dimoret est le roi du DPS. Avec 65% de taux de critique et des dégâts critiques doublés, il peut effacer les PV restants de Raikou en quelques secondes.</li>
                  </ul>
                </li>
                <li><strong>Bruyverne :</strong>
                  <ul>
                    <li><strong>Placement :</strong> Côté droit.</li>
                    <li><strong>Pourquoi ?</strong> Bonne couverture AOE pour nettoyer les sbires qui accompagnent le boss.</li>
                  </ul>
                </li>
              </ul>
      
              <img src="/images/map-route/2-1-02.png" alt="Placement Équipe Route 2-1" class="route-map">
              
              <h3>📝 Guide de victoire étape par étape</h3>
              <h4>Phase 1 : Début de partie (Vagues 1-50)</h4>
              <p>Concentrez-vous sur le placement de Bruyverne et Corayon en premier. Leurs dégâts AOE nettoieront facilement les essaims d'ennemis faibles.</p>
              <p>Placez Corboss avant la vague 40 pour contrer les ennemis invisibles.</p>
              
              <h4>Phase 2 : Milieu de partie (Vagues 51-99)</h4>
              <p>Préparez vos tueurs de Boss. Déployez Absol, Morphing et Dimoret.</p>
              <p>Améliorez-les autant que possible. Le Niveau 100 est idéal, mais le Niveau 50+ fonctionne aussi.</p>
              
              <h4>Phase 3 : Le combat du Boss (Vague 100)</h4>
              <ul>
                <li><strong>Raikou apparaît :</strong> Il va bouger vite. Ne paniquez pas.</li>
                <li><strong>Le Verrouillage :</strong> Votre duo d'Absol sur la montagne va commencer à le frapper. Regardez sa barre de PV virer au rouge.</li>
                <li><strong>Le Ralentissement :</strong> Lorsqu'il atteint le centre, Corayon et Noacier vont le ralentir fortement.</li>
                <li><strong>La Mort :</strong> Même s'il dépasse le centre, Dimoret attend sur la droite pour porter le coup fatal.</li>
              </ul>
              
              <h3>❓ FAQ</h3>
              <p><strong>Q : Puis-je utiliser des types Sol contre Raikou ?</strong></p>
              <p>A : Oui ! Minotaupe ou Libégon sont d'excellents choix car le type Sol est super efficace contre l'Électrik. Cependant, notre stratégie Absol/Dimoret repose sur un DPS Neutre brut, souvent plus constant si vous avez des niveaux élevés.</p>
              
              <p><strong>Q : Que faire si je n'ai pas de Morphing Niveau 100 ?</strong></p>
              <p>A : Vous pouvez simplement placer une autre unité à haut DPS comme Tyranocif ou Carchacrok (si disponible) ou un autre Absol. Morphing est simplement le moyen le plus efficace de dupliquer votre unité la plus forte.</p>
              
              <h3>🗺️ Analyse du Terrain</h3>
              <p>La Route 2-1 présente une disposition complexe en carrefour où les ennemis peuvent emprunter plusieurs chemins, créant des défis stratégiques.</p>
              
              <h4>Routes et Chemins</h4>
              <ul>
                <li><strong>Disposition en carrefour :</strong> Plusieurs chemins ramifiés (Très Long, 3 points de passage)</li>
                <li><strong>Chemin de Spawn :</strong> Chemin de l'apparition vers l'intersection (Moyen, 1 point de passage)</li>
                <li><strong>Chemin de Sortie :</strong> Chemins convergeant vers la sortie (Moyen, 1 point de passage)</li>
              </ul>
              
              <h4>Montagnes et Hauteurs</h4>
              <ul>
                <li><strong>Hauteurs (Haut Gauche) :</strong> Grande zone montagneuse pour snipers (Valeur stratégique Très Élevée) - +40% de portée, couvre le spawn et le carrefour, idéal pour Absol.</li>
                <li><strong>Affleurements Rocheux :</strong> Zones le long des chemins (Valeur stratégique Élevée) - +20% de bonus de portée.</li>
              </ul>
              
              <h4>Herbe et Végétation</h4>
              <ul>
                <li><strong>Champs d'Herbe :</strong> Autour du carrefour (Couverture Moyenne) - Bonus de puissance pour les types Plante.</li>
              </ul>
              
              <h4>Points de passage stratégiques</h4>
              <ul>
                <li><strong>Le Carrefour (Centre) :</strong> Intersection centrale critique où les ennemis se séparent (Priorité Très Élevée).</li>
                <li><strong>Point d'apparition (Haut Centre) :</strong> Entrée des ennemis (Priorité Très Élevée).</li>
                <li><strong>La Sortie (Bas Droite) :</strong> Point de convergence final (Priorité Élevée).</li>
                <li><strong>Hauteurs (Haut Gauche) :</strong> Emplacement Sniper pour dégâts précoces (Priorité Très Élevée).</li>
              </ul>
              
              <h3>⚔️ Composition de l'Équipe</h3>
              <h4>Début de partie (Vagues 1-50)</h4>
              <p>Concentrez-vous sur Bruyverne et Corayon pour les dégâts AOE. Placez Corboss avant la vague 40.</p>
              
              <h4>Milieu de partie (Vagues 51-99)</h4>
              <p>Préparez vos tueurs de Boss : Déployez Absol, Morphing et Dimoret. Améliorez-les (Niveau 100 idéal).</p>
              
              <h4>Fin de partie (Vague 100)</h4>
              <p>Déployez l'équipe complète "Contrôle & Burst" : Absol & Morphing (snipers montagne), Corayon & Noacier & Pharamp (zone de contrôle), Dimoret & Bruyverne (escouade d'exécution), Corboss (anti-invisible).</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-2-2-entei',
        routeNumber: '2-2',
        name: 'Guide PokePath TD Route 2-2 : Comment battre Entei (Stratégie Armor Break)',
        mapImage: '/images/map-route/2-2.png',
        stars: 100,
        starsSecondary: 0,
        difficulty: 'Medium',
        difficultyLevel: 2,
        terrain: ['Field', 'Water', 'Grass'],
        description: 'La Route 2-2 introduit l\'une des mécaniques les plus punitives du jeu : l\'Armure Extrême. Le boss final, Entei, arrive à la Vague 100 avec une armure colossale de 23 500. Cette route présente une étendue d\'eau centrale entourée d\'un chemin en U, parfait pour les stratégies de dégâts progressifs.',
        totalWaves: 100,
        recommendedTypes: ['Water', 'Grass'],
        recommendedPokemon: ['Samurott', 'Corsola', 'Sunflora', 'Whiscash', 'Lapras'],
        strategies: ['Scaling Damage', 'Armor Breaking', 'Terrain Synergy'],
        playstyle: 'Scaling/Ramping',
        tips: [
            'Le passif de Samurott augmente les dégâts avec les coups consécutifs - parfait pour les boss à haute armure',
            'Placez les unités Eau dans le Lac Central pour un temps d\'activité maximal',
            'Corsola fournit un ralentissement global pour garder Entei à portée',
            'Le boost de dégâts de Sunflora est crucial pour franchir les seuils d\'armure',
            'Entei se déplace lentement (vitesse 0,8), vous laissant le temps d\'accumuler des dégâts'
        ],
        teamComposition: {
            early: ['Maractus', 'Honchkrow'],
            mid: ['Whiscash', 'Lapras', 'Corsola'],
            late: ['Samurott', 'Corsola', 'Sunflora', 'Whiscash', 'Lapras']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Chemin en U entourant le lac central', length: 'Very Long', chokepoints: 3 },
                { description: 'Chemin autour de la nappe d\'eau', length: 'Long', chokepoints: 2 }
            ],
            water: [
                { description: 'Lac Central - l\'emplacement le plus précieux', type: 'Lake', strategicValue: 'Very High', benefits: ['Les Pokémon de type Eau gagnent un bonus de puissance x2', 'Près de 100% de temps d\'activité sur les ennemis'] },
                { description: 'Eau entourant le chemin', type: 'Lake', strategicValue: 'High', benefits: ['Les Pokémon de type Eau gagnent un bonus de puissance'] }
            ],
            mountains: [
                { description: 'Sommets montagneux surplombant le lac', type: 'Peak', strategicValue: 'High', benefits: ['+30% de bonus de portée', 'Peut couvrir toute la zone du lac'] }
            ],
            grass: [
                { description: 'Zones d\'herbe autour du lac', coverage: 'Medium', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance'] }
            ],
            chokepoints: [
                { location: 'Central Lake Loop', description: 'Boucle du chemin en U autour du lac central - parfait pour les dégâts progressifs', priority: 'Very High' },
                { location: 'Lake Entrance', description: 'Là où les ennemis entrent dans la zone du lac', priority: 'High' },
                { location: 'Path Convergence', description: 'Plusieurs chemins se rejoignent près du lac', priority: 'High' }
            ]
        },
        seo: {
            title: 'Guide PokePath TD Route 2-2 : Comment battre Entei (Stratégie Armor Break)',
            description: 'Bloqué sur Entei ? Apprenez la stratégie "Armor Break" pour vaincre la Route 2-2. Nous expliquons la mécanique d\'Armure et comment monter une équipe pour terrasser Entei.',
            keywords: 'pokepathtd route 2-2, beat entei pokepathtd, route 2-2 guide, pokepathtd entei boss, best team route 2-2'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>La Route 2-2 introduit l'une des mécaniques les plus punitives du jeu : l'Armure Extrême. Le boss final, Entei, arrive à la Vague 100 avec une armure colossale de 23 500.</p>
              <p>Pour beaucoup de joueurs, c'est un mur. Vous pourriez voir vos tours puissantes infliger "1 dégât" ou "0 dégât" par coup. Ce guide expliquera la mécanique d'Armure et vous montrera exactement comment construire une équipe pour vaincre Entei.</p>
              
              <h3>🛡️ Comprendre les Mécaniques : Armure vs Puissance</h3>
              <p>Pour battre Entei, vous devez comprendre comment les dégâts sont calculés.</p>
              <ul>
                <li><strong>La Règle :</strong> Si la Puissance de l'Unité < Armure de l'Ennemi, les dégâts sont réduits de façon drastique (souvent à 1).</li>
                <li><strong>Le Problème :</strong> La plupart des tours à tir rapide (comme Dimoret ou Maractus) comptent sur la Vitesse, pas sur la Puissance brute par coup. Elles ne feront que chatouiller Entei.</li>
                <li><strong>La Solution :</strong> Vous avez besoin de tours avec une Puissance de tir unique élevée ou des mécanismes de Dégâts Progressifs (Scaling).</li>
              </ul>
      
              <img src="/images/map-route/2-2-03.png" alt="Route 2-2 Map" class="route-map">
              
              <h3>🗺️ Stratégie de Carte : La "Boucle de la Mort"</h3>
              <p>La Route 2-2 dispose d'une étendue d'eau centrale entourée d'un chemin en forme de U.</p>
              <ul>
                <li><strong>Le Lac Central :</strong> C'est l'emplacement le plus précieux. Les unités placées ici ont un temps d'activité de près de 100% sur les ennemis.</li>
                <li><strong>Avantage Stratégique :</strong> Parce qu'Entei est lent (vitesse 0,8), il passe beaucoup de temps à contourner ce lac. C'est la configuration parfaite pour les stratégies de dégâts croissants (Ramping).</li>
              </ul>
              
              <h3>🏆 La Meilleure Équipe : "L'Escouade Aquatique Progressive"</h3>
              <p>Nous utilisons le terrain aquatique de la carte pour booster nos types Eau, qui sont naturellement doués pour infliger de gros dégâts.</p>
      
              <img src="/images/map-route/2-2-02.png" alt="Route 2-2 Map" class="route-map">
              
              <h4>1. Le Tueur de Boss : Samurott (Niveau 100)</h4>
              <ul>
                <li><strong>Rôle :</strong> DPS Principal / Brise-Armure.</li>
                <li><strong>Le Secret :</strong> La capacité passive de Samurott augmente les dégâts pour chaque coup consécutif sur la même cible.</li>
                <li><strong>Pourquoi ça marche :</strong> Entei a beaucoup de PV et d'Armure. Il survit assez longtemps pour que Samurott cumule ce passif 10, 20 ou 30 fois. Finalement, les dégâts de Samurott grimpent au-delà des 23 500, ignorant totalement l'armure.</li>
              </ul>
              
              <h4>2. Le Contrôleur : Corsola</h4>
              <ul>
                <li><strong>Rôle :</strong> Ralentissement Global.</li>
                <li><strong>Pourquoi ça marche :</strong> Corsola n'a pas besoin de faire de dégâts. Son job est de garder Entei dans la portée de Samurott. Un Corsola niveau 100 couvre toute la boucle du lac, assurant un ralentissement permanent.</li>
              </ul>
              
              <h4>3. Le Buffer : Sunflora</h4>
              <ul>
                <li><strong>Rôle :</strong> Amplificateur de Dégâts.</li>
                <li><strong>Pourquoi ça marche :</strong> Sunflora ajoute +20% de Dégâts aux unités proches. Lorsque vous essayez de briser un seuil d'armure spécifique (23 500), ces 20% supplémentaires sont mathématiquement massifs. Cela peut faire la différence entre infliger 0 ou 5 000 dégâts.</li>
              </ul>
              
              <h4>4. Options Alternatives (Si vous n'avez pas Samurott)</h4>
              <ul>
                <li><strong>Clawitzer :</strong> Possède la Puissance de base la plus élevée du jeu (1950+). Les coups critiques doublent ces dégâts, permettant de percer l'armure naturellement.</li>
                <li><strong>Excadrill :</strong> Son passif inflige des Dégâts Doubles à l'Armure. Cela divise virtuellement par deux les stats défensives d'Entei contre lui.</li>
                <li><strong>Poison/Brûlure :</strong> Les effets de statut comme le Poison (Weezing) infligent des dégâts en pourcentage de PV et ignorent totalement l'armure.</li>
              </ul>
              
              <h3>📝 Victoire Étape par Étape</h3>
              <ol>
                <li><strong>Déploiement :</strong> Remplissez le Lac Central avec vos unités Eau les plus fortes (Samurott, Whiscash, Lapras).</li>
                <li><strong>Buff :</strong> Placez Sunflora sur la rive la plus proche de votre Samurott pour fournir l'aura de dégâts.</li>
                <li><strong>Le Combat :</strong>
                  <ul>
                    <li>Entei apparaît. Votre Corboss (sur la montagne) et Maractus nettoient les sbires.</li>
                    <li>Entei entre dans la boucle. Corsola le ralentit.</li>
                    <li>Samurott commence à attaquer. Les premiers coups feront peu de dégâts, mais regardez les chiffres rouges augmenter à mesure que le passif s'accumule.</li>
                    <li>Au moment où Entei termine la boucle, il devrait être vaincu.</li>
                  </ul>
                </li>
              </ol>
      
              <h3>🗺️ Analyse du Terrain</h3>
              <p>La Route 2-2 présente une étendue d'eau centrale entourée d'un chemin en U, créant la "Boucle de la Mort" idéale pour les stratégies de dégâts progressifs.</p>
              
              <h4>Routes & Chemins</h4>
              <ul>
                <li><strong>Chemin en U :</strong> Entoure le lac central (Très Long, 3 points d'étranglement).</li>
                <li><strong>Chemin du Lac :</strong> Chemin autour de la nappe d'eau (Long, 2 points d'étranglement).</li>
              </ul>
      
              <h4>Zones Aquatiques</h4>
              <ul>
                <li><strong>Lac Central :</strong> Emplacement le plus précieux (Valeur stratégique Très Élevée). Bonus x2 puissance pour les types Eau et 100% d'uptime.</li>
                <li><strong>Eau Environnante :</strong> Eau bordant le chemin (Valeur Élevée). Bonus de puissance pour les types Eau.</li>
              </ul>
      
              <h4>Montagnes & Hauteurs</h4>
              <ul>
                <li><strong>Sommets :</strong> Surplombent le lac (Valeur stratégique Élevée). Bonus de portée +30%, peut couvrir tout le lac.</li>
              </ul>
      
              <h4>Herbe & Végétation</h4>
              <ul>
                <li><strong>Zones d'herbe :</strong> Autour du lac (Couverture Moyenne). Les Pokémon Plante gagnent un bonus de puissance.</li>
              </ul>
      
              <h4>Points d'étranglement Stratégiques</h4>
              <ul>
                <li><strong>Boucle du Lac :</strong> Parfait pour le scaling de dégâts (Priorité Très Élevée).</li>
                <li><strong>Entrée du Lac :</strong> Là où les ennemis pénètrent dans la zone centrale (Priorité Élevée).</li>
                <li><strong>Convergence :</strong> Rencontre de plusieurs chemins près du lac (Priorité Élevée).</li>
              </ul>
      
              <h3>⚔️ Composition d'Équipe</h3>
              <h4>Début de partie (Vagues 1-40)</h4>
              <p>Déployez Maractus pour le nettoyage des vagues et Corboss sur les montagnes pour la détection des unités invisibles.</p>
              
              <h4>Milieu de partie (Vagues 41-99)</h4>
              <p>Transition vers les unités Eau : Whiscash, Lapras et Corsola. Commencez à préparer votre noyau de dégâts progressifs.</p>
              
              <h4>Fin de partie (Vague 100)</h4>
              <p>Sortez l'Escouade Aquatique : Samurott (tueur de boss), Corsola (contrôle), Sunflora (buff), Whiscash & Lapras (soutien DPS). Placez tout dans le Lac Central.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-2-3-suicune-wave-100',
        routeNumber: '2-3',
        name: 'Guide Ultime PokePath TD Route 2-3 : Battre Suicune avec Absol',
        mapImage: '/images/map-route/2-3.png',
        stars: 500,
        starsSecondary: 0,
        difficulty: 'Hard',
        difficultyLevel: 3,
        terrain: ['Field', 'Mountain'],
        description: 'Route de montagne exigeante avec des chemins complexes. Le boss final Suicune nécessite une stratégie de scaling unique avec Absol en raison de sa vitesse extrême.',
        totalWaves: 100,
        recommendedTypes: ['Dark', 'Grass', 'Flying', 'Electric'],
        recommendedPokemon: ['Absol', 'Ditto', 'Corsola', 'Maractus', 'Sunflora', 'Staraptor', 'Hawlucha', 'Honchkrow'],
        strategies: ['Absol Swap', 'Scaling Damage', 'Speed Control'],
        playstyle: 'Tactical',
        tips: [
            'Utilisez la stratégie de permutation : équipe AOE pour les vagues 1-99, puis passez à l\'équipe Absol pour Suicune',
            'Absol est essentiel pour la Vague 100 - les coups consécutifs augmentent les dégâts exponentiellement',
            'Placez Absol en position centrale pour maximiser le temps de frappe sur Suicune',
            'Utilisez Ditto pour copier Absol et doubler les dégâts progressifs',
            'Corsola fournit un ralentissement crucial (portée 300) pour réduire la vitesse de 1,5 à 0,8',
            'Faites pause à la Vague 100 pour effectuer l\'échange - vendez Sunflora, achetez Absol, configurez Ditto'
        ],
        teamComposition: {
            early: ['Maractus', 'Honchkrow'],
            mid: ['Maractus', 'Sunflora', 'Staraptor', 'Hawlucha', 'Corsola', 'Ditto'],
            late: ['Absol', 'Ditto', 'Corsola']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Chemin de montagne complexe avec branches multiples', length: 'Very Long', chokepoints: 5 },
                { description: 'Tunnel souterrain', length: 'Medium', chokepoints: 1 }
            ],
            water: [],
            mountains: [
                { description: 'Sommets imposants à plusieurs niveaux', height: 'Very High', strategicValue: 'Very High', benefits: ['+50% de bonus de portée', 'Peut couvrir des sections entières'] },
                { description: 'Falaises rocheuses et crêtes', height: 'High', strategicValue: 'High', benefits: ['+30% de portée'] },
                { description: 'Plateaux de montagne', height: 'Medium', strategicValue: 'Medium', benefits: ['+15% de portée'] }
            ],
            grass: [],
            chokepoints: [
                { location: 'Mountain peak', description: 'Point le plus haut avec vue panoramique', priority: 'Very High' },
                { location: 'Path intersection', description: 'Convergence de plusieurs chemins', priority: 'Very High' },
                { location: 'Z-Turn choke point', description: 'Virage entre le milieu et le bas où Suicune est le plus vulnérable', priority: 'Very High' },
                { location: 'Tunnel entrance', description: 'Entrée de tunnel étroite', priority: 'High' },
                { location: 'Cliff edge turn', description: 'Virage serré le long de la falaise', priority: 'High' }
            ]
        },
        seo: {
            title: 'Guide Ultime PokePath TD Route 2-3 : Battre Suicune avec Absol',
            description: 'La Route 2-3 présente le boss le plus rapide du jeu : Suicune. Apprenez la stratégie de la Vague 100, la tactique "Absol Swap" et le contrôle du tracé en Z.',
            keywords: 'pokepathtd route 2-3, beat suicune pokepathtd, absol strategy, route 2-3 guide, best team route 2-3'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>Bienvenue dans le défi final de la Région 2. La Route 2-3 est une carte trompeuse. Elle ressemble à un simple chemin sinueux, mais le boss final, Suicune, est un démon de vitesse qui a mis fin à d'innombrables parties.</p>
              <p>Dans ce guide, nous allons décortiquer la géographie unique de la carte, analyser les stats de Suicune et fournir un pas à pas de la "Stratégie Absol Swap" qui garantit la victoire.</p>
              
              <h3>📊 Profil du Boss : Suicune (Vague 100)</h3>
              <p>Avant de construire l'équipe, comprenons notre ennemi.</p>
              <ul>
                <li><strong>Nom :</strong> Suicune (Le Pokémon Aurore)</li>
                <li><strong>Type :</strong> Eau</li>
                <li><strong>Vitesse :</strong> 1,5 (Extrêmement Rapide). C'est la stat de vitesse la plus élevée rencontrée jusqu'ici.</li>
                <li><strong>Santé :</strong> 69 000 PV.</li>
                <li><strong>Armure :</strong> 0.</li>
                <li><strong>La Menace :</strong> Suicune bouge si vite que la plupart des tours à "gros dégâts mais cadence lente" (comme Rampardos) le rateront totalement ou n'auront le temps de tirer qu'une fois.</li>
              </ul>
      
              <img src="/images/map-route/2-3-03.png" alt="Route 2-3 Map" class="route-map">
              
              <h3>🗺️ Stratégie de Carte : Le Piège en "Z"</h3>
              <p>La Route 2-3 présente un chemin en forme de Z qui serpente à travers un terrain rocheux.</p>
              <ul>
                <li><strong>Les Hauteurs (Périmètre) :</strong> La carte est entourée de tuiles de montagne. C'est excellent pour les types Vol comme Corboss, Bruyverne ou Xatu. Ils offrent une vision globale et des dégâts constants.</li>
                <li><strong>La Plateforme Centrale (Herbe) :</strong> C'est le cœur de votre défense. Les unités ici peuvent toucher les ennemis sur le chemin du haut (Vagues 1-50), le virage du milieu et le chemin du bas (Vagues 51-100).</li>
                <li><strong>Le Point d'Étranglement :</strong> Le virage entre le chemin du milieu et celui du bas est l'endroit où Suicune est le plus vulnérable.</li>
              </ul>
              
              <h3>🏆 La Meilleure Équipe : "L'Absol Swap"</h3>
              <p>Notre stratégie consiste à utiliser une équipe AOE (dégâts de zone) classique pour les vagues 1-99, puis à effectuer un changement tactique pour la Vague 100.</p>
              
              <h4>Phase 1 : Équipe de Nettoyage (Vagues 1-99)</h4>
              <p>Pour la majorité du niveau, vous avez besoin de dégâts de zone pour éliminer les essaims.</p>
              <ul>
                <li><strong>Sunflora (Centre) :</strong> Fournit une Aura de Dégâts +20% à tout le monde au milieu.</li>
                <li><strong>Maractus (Herbe Centrale) :</strong> Votre source principale de nettoyage. Ses attaques Plante sont super efficaces contre les nombreux types Eau de cette route.</li>
                <li><strong>Staraptor / Hawlucha :</strong> De bons cogneurs physiques pour achever les fuyards.</li>
              </ul>
              
              <h4>Phase 2 : L'Équipe Tueuse de Boss (Vague 100)</h4>
              <p>Quand Suicune apparaît, les dégâts AOE sont inutiles. Nous avons besoin de dégâts mono-cible concentrés et progressifs.</p>
              
              <h4>Absol (Niveau 100)</h4>
              <ul>
                <li><strong>La Mécanique :</strong> La capacité passive d'Absol est "Les coups consécutifs sur la même cible augmentent les dégâts".</li>
                <li><strong>Pourquoi il contre Suicune :</strong> Suicune a 0 Armure. Cela signifie que les dégâts d'Absol ne sont pas atténués. À mesure qu'Absol frappe Suicune, les dégâts grimpent : 200 -> 400 -> 800 -> 1600. La courbe devient exponentielle.</li>
              </ul>
              
              <h4>Ditto (Copie d'Absol)</h4>
              <ul>
                <li><strong>Stratégie :</strong> Placez Ditto à côté d'Absol. Vous avez maintenant DEUX unités avec dégâts progressifs. Cela fait fondre Suicune deux fois plus vite.</li>
              </ul>
              
              <h4>Phase 3 : Contrôle de Vitesse</h4>
              <p>Les dégâts ne servent à rien si la cible s'enfuit.</p>
              <ul>
                <li><strong>Corsola (Niveau 100) :</strong>
                  <ul>
                    <li><strong>Pourquoi ?</strong> Avec une portée de 300, l'aura de ralentissement de Corsola couvre tout le virage en Z. Elle réduit la vitesse de 1,5 à environ 0,8, doublant le temps dont vos Absol disposent pour attaquer.</li>
                  </ul>
                </li>
              </ul>
      
              <img src="/images/map-route/2-3-02.png" alt="Route 2-3 Map" class="route-map">
              
              <h3>📝 Procédure Détaillée</h3>
              
              <h4>Début de partie (Vagues 1-40)</h4>
              <ul>
                <li>Déployez Maractus dans l'herbe centrale.</li>
                <li>Placez Corboss sur la montagne en haut à gauche pour intercepter les unités invisibles.</li>
                <li>Commencez à monter votre Corsola pour le soutien au ralentissement.</li>
              </ul>
              
              <h4>Milieu de partie (Vagues 41-99)</h4>
              <ul>
                <li>Ajoutez Sunflora pour buffer votre Maractus.</li>
                <li>Ajoutez Staraptor ou Hawlucha pour du DPS supplémentaire.</li>
                <li>Assurez-vous que votre Ditto est au niveau maximum et prêt.</li>
              </ul>
              
              <h4>Le Combat contre le Boss (Vague 100)</h4>
              <ol>
                <li><strong>METTEZ EN PAUSE</strong> dès que l'avertissement de la Vague 100 s'affiche.</li>
                <li><strong>VENDEZ</strong> Sunflora. Vous avez besoin de la place et de l'argent.</li>
                <li><strong>ACHETEZ</strong> Absol. Placez-le dans la position la plus centrale possible.</li>
                <li><strong>CONFIGUREZ</strong> Ditto. Vérifiez qu'il est transformé en Absol.</li>
                <li><strong>ENLEVEZ LA PAUSE.</strong></li>
                <li>Observez Suicune entrer sur la carte.</li>
                <li>Corsola applique le ralentissement immédiatement.</li>
                <li>Les deux Absol se verrouillent. Les premiers coups seront faibles, mais regardez les chiffres de dégâts exploser pendant que Suicune négocie son premier virage.</li>
                <li><strong>Victoire !</strong></li>
              </ol>
      
              <img src="/images/map-route/2-3-01.png" alt="Route 2-3 Map" class="route-map">
              
              <h3>❓ Stratégies Alternatives</h3>
              <p><strong>"Je n'ai pas encore Absol. Que puis-je utiliser ?"</strong></p>
              <p>Si vous n'avez pas Absol, essayez ceci :</p>
              <ul>
                <li><strong>Types Électrik :</strong> Utilisez Manectric ou Ampharos. L'Électrik est super efficace contre l'Eau (Suicune). Un Manectric niveau 100 inflige des dégâts massifs.</li>
                <li><strong>Burst Plante :</strong> Gardez Sunflora et cumulez plusieurs Maractus ou Jungko. La Plante est aussi super efficace.</li>
                <li><strong>Stun Lock :</strong> Utilisez Ampharos et Lapras pour tenter d'étourdir Suicune en permanence.</li>
              </ul>
      
              <h3>🗺️ Analyse du Terrain</h3>
              <p>La Route 2-3 présente un chemin en Z serpentant à travers un terrain rocheux avec des positions stratégiques en hauteur.</p>
              
              <h4>Routes & Chemins</h4>
              <ul>
                <li><strong>Chemin Principal :</strong> Route de montagne complexe avec plusieurs branches (Très Long, 5 points d'étranglement).</li>
                <li><strong>Chemin Souterrain :</strong> Tunnel souterrain (Moyen, 1 point d'étranglement).</li>
              </ul>
      
              <h4>Montagnes & Hauteurs</h4>
              <ul>
                <li><strong>Sommets Imposants :</strong> Plusieurs niveaux d'élévation (Valeur stratégique Très Élevée). Bonus portée +50%, peut couvrir des sections entières.</li>
                <li><strong>Falaises Rocheuses :</strong> Crêtes et parois (Valeur stratégique Élevée). Bonus portée +30%.</li>
                <li><strong>Plateaux :</strong> Zones planes en hauteur (Valeur stratégique Moyenne). Bonus portée +15%.</li>
              </ul>
      
              <h4>Points d'étranglement Stratégiques</h4>
              <ul>
                <li><strong>Sommet de Montagne :</strong> Point le plus haut avec vue panoramique (Priorité Très Élevée).</li>
                <li><strong>Intersection :</strong> Convergence de plusieurs chemins (Priorité Très Élevée).</li>
                <li><strong>Virage en Z :</strong> Entre le milieu et le bas, là où Suicune est le plus exposé (Priorité Très Élevée).</li>
                <li><strong>Entrée du Tunnel :</strong> Passage étroit (Priorité Élevée).</li>
                <li><strong>Virage de Falaise :</strong> Virage serré le long du précipice (Priorité Élevée).</li>
              </ul>
      
              <h3>⚔️ Composition d'Équipe</h3>
              <h4>Début (Vagues 1-40)</h4>
              <p>Maractus au centre et Corboss sur les montagnes.</p>
              
              <h4>Milieu (Vagues 41-99)</h4>
              <p>Sunflora pour le buff, Staraptor/Hawlucha pour le DPS, et préparation de Corsola et Ditto.</p>
              
              <h4>Fin (Vague 100)</h4>
              <p>Passage à l'équipe Absol : Absol (dégâts progressifs), Ditto (copie Absol) et Corsola (ralentissement). Vendez Sunflora pour libérer de l'espace.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-3-1-regirock-wave-100-guide',
        routeNumber: '3-1',
        name: 'Guide PokePath TD Route 3-1 : Comment battre Regirock (1 million d\'Armure)',
        mapImage: '/images/map-route/3-1.png',
        stars: 200,
        starsSecondary: 0,
        difficulty: 'Hard',
        difficultyLevel: 3,
        terrain: ['Field', 'Grass'],
        description: 'Route avancée avec une végétation dense. Le boss final Regirock nécessite une stratégie de Poison unique en raison de son armure de près d\'un million.',
        totalWaves: 100,
        recommendedTypes: ['Poison', 'Fire', 'Flying', 'Grass'],
        recommendedPokemon: ['Weezing', 'Arbok', 'Swalot', 'Ariados', 'Ditto', 'Maractus', 'Hawlucha', 'Staraptor', 'Honchkrow'],
        strategies: ['Toxic Swap', 'Poison Build', 'Swap Strategy'],
        playstyle: 'Tactical',
        tips: [
            'Utilisez la stratégie de permutation : équipe standard pour les vagues 1-99, puis passez à l\'équipe Poison pour Regirock',
            'Les dégâts de poison ignorent l\'armure - essentiel pour vaincre les 985 714 points d\'armure de Regirock',
            'Smogogo (Weezing) est le meilleur applicateur de poison - placez-le au centre pour maximiser son temps d\'activité',
            'Utilisez Ditto pour copier Smogogo et doubler les nuages de poison',
            'Gardez Corboss (Honchkrow) sur les montagnes pour la détection des unités invisibles pendant le nettoyage des vagues',
            'Faites pause à la Vague 100 pour effectuer le "Toxic Swap" - vendez les attaquants physiques, achetez des unités Poison'
        ],
        teamComposition: {
            early: ['Maractus', 'Hawlucha', 'Staraptor'],
            mid: ['Maractus', 'Hawlucha', 'Staraptor', 'Honchkrow'],
            late: ['Weezing', 'Arbok', 'Swalot', 'Ariados', 'Ditto', 'Honchkrow']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Chemin à travers une forêt dense', length: 'Long', chokepoints: 3 },
                { description: 'Chemin de clairière avec une meilleure visibilité', length: 'Medium', chokepoints: 1 }
            ],
            water: [],
            mountains: [],
            grass: [
                { description: 'Forêt dense couvrant toute la carte', coverage: 'Very High', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance x2', 'Les ennemis se déplacent plus lentement dans la végétation dense'] },
                { description: 'Sous-bois épais le long des chemins', coverage: 'High', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance'] }
            ],
            chokepoints: [
                { location: 'Forest clearing', description: 'Zone ouverte dans la forêt dense', priority: 'Very High' },
                { location: 'Path narrowing', description: 'Le chemin se rétrécit entre les arbres', priority: 'High' }
            ]
        },
        seo: {
            title: 'Guide PokePath TD Route 3-1 : Comment battre Regirock (1 million d\'Armure)',
            description: 'Regirock est immunisé aux dégâts physiques. Apprenez la stratégie "Poison Swap" pour vaincre le boss de la Route 3-1 en utilisant Smogogo et Arbok.',
            keywords: 'pokepathtd route 3-1, beat regirock pokepathtd, route 3-1 guide, pokepathtd regirock boss, best team route 3-1'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>La Route 3-1 introduit le "Stat Check" (test de statistiques) le plus difficile du jeu à ce jour. Le boss final, Regirock, est une forteresse ambulante.</p>
              <p>Avec près de 1 000 000 d'Armure, Regirock est mathématiquement impossible à tuer avec des tours physiques standards comme Dimoret ou Absol. Leurs attaques ricochent simplement sur lui.</p>
              <p>Pour gagner, vous devez comprendre le système d'effets de statut et effectuer un changement d'équipe complet à la Vague 100.</p>
              
              <h3>📊 Profil du Boss : Regirock</h3>
              <ul>
                <li><strong>Nom :</strong> Regirock (Le Pokémon Pic Rocheux)</li>
                <li><strong>Type :</strong> Roche</li>
                <li><strong>Armure :</strong> 985 714. (Ceci n'est pas une faute de frappe).</li>
                <li><strong>Faiblesse :</strong> Dégâts Bruts (Poison / Brûlure).</li>
                <li><strong>Immunité :</strong> Très résistant aux étourdissements et ralentissements. Ne comptez pas sur Corsola ici.</li>
              </ul>
      
              <img src="/images/map-route/3-1-03.png" alt="Route 3-1 Map" class="route-map">
              
              <h3>🏆 La Stratégie : Le "Toxic" Swap</h3>
              <p>Cette stratégie vous demande de jouer deux parties différentes.</p>
              <ul>
                <li><strong>Le Nettoyage :</strong> Une équipe standard pour battre les vagues 1 à 99.</li>
                <li><strong>L'Exécution :</strong> Une équipe spécialisée uniquement pour la Vague 100.</li>
              </ul>
              
              <h4>Phase 1 : Vagues 1-99 (Nettoyage AOE)</h4>
              <p>Pour les 99 premières vagues, utilisez vos unités habituelles de haut niveau.</p>
              <ul>
                <li><strong>Maractus (Centre) :</strong> Élimine facilement les types Plante/Eau.</li>
                <li><strong>Hawlucha / Staraptor :</strong> Bons dégâts physiques pour le nettoyage final.</li>
                <li><strong>Corboss (Honchkrow) :</strong> Essentiel sur les montagnes pour détecter les unités invisibles.</li>
              </ul>
              
              <h4>Phase 2 : Vague 100 (Le Poison Swap)</h4>
              <p>Dès que la Vague 100 commence, <strong>mettez le jeu en PAUSE</strong>. L'armure de Regirock rend votre équipe actuelle inutile.</p>
              <ol>
                <li><strong>VENDEZ</strong> vos attaquants physiques (Maractus, Hawlucha, Absol, etc.).</li>
                <li><strong>GARDEZ</strong> votre Corboss (par sécurité) et Ditto.</li>
                <li><strong>ACHETEZ</strong> toutes les unités de type Poison que vous possédez.</li>
              </ol>
              
              <h4>La "Dream Team" du Poison</h4>
              <p>Placez ces unités au centre pour maximiser leur temps de frappe sur Regirock :</p>
              <ul>
                <li><strong>Smogogo (Weezing) :</strong> Le meilleur applicateur de poison. Propulse des nuages toxiques.</li>
                <li><strong>Arbok :</strong> Attaques rapides pour cumuler le poison promptement.</li>
                <li><strong>Avaltout (Swalot) :</strong> Résistant, il applique des dégâts constants sur la durée (DOT).</li>
                <li><strong>Migalos (Ariados) :</strong> Ajoute une couche supplémentaire de poison.</li>
                <li><strong>Ditto :</strong> Copiez Smogogo pour doubler les nuages toxiques.</li>
              </ul>
      
              <img src="/images/map-route/3-1-02.png" alt="Route 3-1 Map" class="route-map">
              
              <h3>🧪 Pourquoi ça marche : Les mathématiques du Poison</h3>
              <ul>
                <li>Dans PokePath TD, le Poison inflige des dégâts égaux à <strong>0,1 % des PV max de l'ennemi par tick</strong>.</li>
                <li><strong>Crucial :</strong> Les dégâts de Poison <strong>IGNORENT L'ARMURE</strong>.</li>
                <li><strong>Scaling :</strong> Plus vous appliquez de charges de poison, plus les dégâts par seconde augmentent.</li>
                <li><strong>Résultat :</strong> Le million d'armure de Regirock est totalement contourné. Ses PV massifs travaillent en fait contre lui, car les dégâts en % frappent plus fort sur les cibles à PV élevés.</li>
              </ul>
              
              <h3>📝 Guide pas à pas</h3>
              <ol>
                <li><strong>Économie :</strong> Utilisez Miaouss/Persian au début si besoin pour farmer de l'or, bien que les joueurs de niveau 100 n'en aient généralement pas besoin.</li>
                <li><strong>Survie :</strong> Progressez jusqu'à la Vague 99.</li>
                <li><strong>Échange :</strong> Effectuez le "Toxic Swap" à la Vague 100.</li>
                <li><strong>Observation :</strong> Vous verrez des chiffres de dégâts violets. Au début, ils sont petits. Mais en quelques secondes, la vie de Regirock commencera à fondre rapidement.</li>
                <li><strong>Victoire :</strong> Il s'effondrera avant d'atteindre la fin du virage en Z.</li>
              </ol>
              
              <h3>🗺️ Analyse du Terrain</h3>
              <p>La Route 3-1 dispose d'une végétation dense couvrant toute la carte, rendant les Pokémon de type Plante extrêmement efficaces pour nettoyer les vagues.</p>
              
              <h4>Routes & Chemins</h4>
              <ul>
                <li><strong>Chemin Principal :</strong> Traversée de la forêt dense (Long, 3 points d'étranglement).</li>
                <li><strong>Chemin de Clairière :</strong> Zone avec une meilleure visibilité (Moyen, 1 point d'étranglement).</li>
              </ul>
              
              <h4>Herbe & Végétation</h4>
              <ul>
                <li><strong>Forêt Dense :</strong> Couvre toute la carte (Couverture Très Élevée). Bonus x2 pour les types Plante et ralentissement des ennemis.</li>
                <li><strong>Sous-bois Épais :</strong> Bordure des chemins (Couverture Élevée). Bonus de puissance pour les types Plante.</li>
              </ul>
              
              <h4>Points d'étranglement Stratégiques</h4>
              <ul>
                <li><strong>Clairière Forestière :</strong> Zone ouverte au milieu de la forêt (Priorité Très Élevée).</li>
                <li><strong>Rétrécissement :</strong> Le chemin se resserre entre les arbres (Priorité Élevée).</li>
              </ul>
              
              <h3>⚔️ Composition d'Équipe</h3>
              <h4>Début & Milieu de partie (Vagues 1-99)</h4>
              <p>Utilisez Maractus (centre), Hawlucha/Staraptor (dégâts physiques) et Corboss (anti-invisible) pour gérer les vagues efficacement.</p>
      
              <img src="/images/map-route/3-1-01.png" alt="Route 3-1 Map" class="route-map">
              
              <h4>Fin de partie (Vague 100)</h4>
              <p>Passez à la Poison Dream Team : Smogogo (noyau), Arbok, Avaltout, Migalos, Ditto (copie Smogogo) et gardez Corboss par sécurité.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-3-2-regice-dewgong-strategy',
        routeNumber: '3-2',
        name: 'Guide PokePath TD Route 3-2 : La stratégie de Stun-Lock avec Lamantine',
        mapImage: '/images/map-route/3-2.png',
        stars: 400,
        starsSecondary: 0,
        difficulty: 'Hard',
        difficultyLevel: 3,
        terrain: ['Field', 'Grass', 'Mountain'],
        description: 'Route à terrain mixte avec des points d\'étranglement stratégiques. Le boss final Regice nécessite une stratégie de contrôle unique via Lamantine.',
        totalWaves: 100,
        recommendedTypes: ['Ice', 'Water', 'Ground', 'Grass'],
        recommendedPokemon: ['Dewgong', 'Ditto', 'Cryogonal', 'Weavile', 'Whiscash', 'Corsola', 'Maractus', 'Sceptile', 'Tangrowth'],
        strategies: ['Dewgong Solo-Control', 'Ice Breaker', 'Swap Strategy'],
        playstyle: 'Tactical',
        tips: [
            'Utilisez la stratégie de permutation : équipe Plante pour les vagues 1-99, puis équipe Ice Breaker pour Regice',
            'Lamantine (Dewgong) est indispensable pour la Vague 100 - 30% de chance de paralyser Regice pendant 2 secondes',
            'Placez Lamantine dans la position la plus centrale pour une couverture maximale',
            'Utilisez Ditto pour vous transformer en Lamantine et doubler les chances d\'étourdissement (Perma-Stun)',
            'Hexagel (Cryogonal) et Dimoret (Weavile) fournissent les dégâts bruts nécessaires pour briser l\'armure de 190 400 de Regice',
            'Corsola offre un ralentissement global pour garder Regice lent même lorsqu\'il n\'est pas étourdi'
        ],
        teamComposition: {
            early: ['Maractus', 'Sceptile', 'Tangrowth'],
            mid: ['Maractus', 'Sceptile', 'Tangrowth'],
            late: ['Dewgong', 'Ditto', 'Cryogonal', 'Weavile', 'Whiscash', 'Corsola']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Chemin à travers un terrain varié', length: 'Very Long', chokepoints: 4 },
                { description: 'Col de montagne avec champs d\'herbe', length: 'Long', chokepoints: 2 }
            ],
            water: [],
            mountains: [
                { description: 'Sommets stratégiques surplombant les chemins', height: 'High', strategicValue: 'Very High', benefits: ['+35% de bonus de portée', 'Peut contrôler plusieurs sections de route'] },
                { description: 'Collines rocheuses le long des chemins', height: 'Medium', strategicValue: 'High', benefits: ['+20% de bonus de portée'] }
            ],
            grass: [
                { description: 'Champs d\'herbe dans les vallées entre les montagnes', coverage: 'High', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance x2'] },
                { description: 'Zones de prairie', coverage: 'Medium', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance'] }
            ],
            chokepoints: [
                { location: 'Mountain pass', description: 'Passage étroit entre les sommets', priority: 'Very High' },
                { location: 'Valley entrance', description: 'Le chemin entre dans la vallée herbeuse', priority: 'High' },
                { location: 'Path convergence', description: 'Plusieurs chemins se rejoignent', priority: 'High' }
            ]
        },
        seo: {
            title: 'Guide PokePath TD Route 3-2 : La stratégie de Stun-Lock avec Lamantine',
            description: "Impossible de battre Regice ? Le secret n'est pas les dégâts, c'est Lamantine. Apprenez à utiliser la stratégie Perma-Stun de Lamantine au niveau 100 pour geler le boss de la Route 3-2.",
            keywords: 'pokepathtd route 3-2, beat regice pokepathtd, route 3-2 guide, pokepathtd regice boss, best team route 3-2'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>La Route 3-2 met en scène le redoutable Golem de Glace, Regice. Avec une statistique d'armure de 190 400, ce boss est un mur qui stoppe net la plupart des équipes standards.</p>
              <p>Les stratégies courantes reposent sur l'accumulation d'unités d'étourdissement comme Lokhlass et Pharamp. Cependant, si vous avez atteint le niveau 100, vous pouvez utiliser une méthode bien plus efficace.</p>
              <p>Ce guide détaille le build "Dewgong Solo-Control", qui maximise les dégâts en s'appuyant sur un seul contrôleur surpuissant.</p>
              
              <h3>🛡️ Analyse du Boss : Pourquoi Regice est-il difficile ?</h3>
              <ul>
                <li><strong>Armure (190 400) :</strong> C'est la mécanique principale. Toute unité ayant une puissance d'attaque inférieure à ce nombre infligera virtuellement zéro dégât. Vous avez besoin d'unités aux stats élevées.</li>
                <li><strong>Immunité :</strong> Regice résiste à de nombreux effets de statut, mais il n'est <strong>PAS immunisé à la paralysie de Lamantine</strong>.</li>
              </ul>
      
              <img src="/images/map-route/3-2-03.png" alt="Route 3-2 Map" class="route-map">
              
              <h3>🏆 La meilleure équipe : L'escouade "Ice Breaker"</h3>
              <p>Nous avons retiré Lokhlass de cette composition pour faire de la place à des unités de DPS pur comme Hexagel. Voici pourquoi cela fonctionne :</p>
              
              <h4>1. Le Noyau : Lamantine (Niveau 100)</h4>
              <ul>
                <li><strong>Rôle :</strong> Contrôle de foule en solo.</li>
                <li><strong>La Mécanique :</strong> Les attaques de Lamantine ont 30 % de chance de paralyser la cible pendant 2 secondes.</li>
                <li><strong>Pourquoi pas de Lokhlass ?</strong> Au niveau 100, les stats de Lamantine lui permettent d'attaquer et de survivre efficacement. La durée de 2 secondes est suffisante pour se passer d'un second étourdisseur. Si vous copiez Lamantine avec Ditto, vous pouvez théoriquement maintenir Regice paralysé en permanence (Perma-Stun).</li>
              </ul>
              
              <h4>2. Les Cogneur : Hexagel & Dimoret</h4>
              <p>Comme nous avons libéré un emplacement, nous ajoutons de la puissance brute.</p>
              <ul>
                <li><strong>Hexagel (Niveau 100) :</strong>
                  <ul>
                    <li><strong>Placement :</strong> Centre du terrain / bordure d'eau.</li>
                    <li><strong>Pourquoi ?</strong> Hexagel possède des stats de base massives au niveau 100. Sa puissance élevée lui permet d'entamer naturellement l'armure de Regice.</li>
                  </ul>
                </li>
                <li><strong>Dimoret (Weavile) :</strong>
                  <ul>
                    <li><strong>Rôle :</strong> Perforation d'armure.</li>
                    <li><strong>Pourquoi ?</strong> Les coups critiques infligent des dégâts doubles. Dimoret reste le roi du DPS mono-cible. Lorsque Regice est paralysé par Lamantine, Dimoret peut frapper librement pour placer ses critiques.</li>
                  </ul>
                </li>
              </ul>
              
              <h4>3. L'Utilité : Barbicha & Corsola</h4>
              <ul>
                <li><strong>Barbicha (Whiscash) :</strong> Offre une couverture Sol/Eau et agit comme une ancre solide dans les lacs.</li>
                <li><strong>Corsola :</strong> Fournit le ralentissement global (portée 300). Même quand Regice n'est pas étourdi, il avance au ralenti grâce à Corsola.</li>
              </ul>
      
              <img src="/images/map-route/3-2-01.png" alt="Route 3-2 Map" class="route-map">
              
              <h3>📝 Stratégie détaillée : Le Swap de la Vague 100</h3>
              
              <h4>Phase 1 : Le nettoyage par les plantes (Vagues 1-99)</h4>
              <p>La Route 3-2 est remplie d'ennemis Eau et Sol.</p>
              <ul>
                <li>Utilisez <strong>Maractus, Jungko (Sceptile) et Bouldeneu (Tangrowth)</strong>.</li>
                <li>Ces types Plante détruiront les vagues bien plus vite que votre équipe anti-boss ne le ferait.</li>
              </ul>
              
              <h4>Phase 2 : Configuration pour le Boss (Vague 100)</h4>
              <ol>
                <li><strong>Vendez :</strong> Retirez vos unités Plante. Elles ne peuvent pas égratigner l'armure de Regice.</li>
                <li><strong>Déployez Lamantine :</strong> Placez-la dans la position la plus centrale possible.</li>
                <li><strong>Déployez le DPS :</strong> Placez Hexagel et Dimoret près de Lamantine.</li>
                <li><strong>Victoire :</strong> Regice entrera dans la portée, sera paralysé par Lamantine, puis démantelé par vos unités à haute puissance.</li>
              </ol>
              
              <h3>💡 Astuce de Pro : Le facteur Ditto</h3>
              <p>Si vous trouvez que votre chance (RNG) est mauvaise et que Lamantine n'étourdit pas assez :</p>
              <ul>
                <li>Transformez Ditto en Lamantine.</li>
                <li>Deux Lamantines attaquant la même cible augmentent considérablement la probabilité d'étourdissement. C'est le moyen le plus sûr de garantir que Regice ne bouge plus jamais.</li>
              </ul>
      
              <img src="/images/map-route/3-2-02.png" alt="Route 3-2 Map" class="route-map">
              
              <h3>🗺️ Analyse du Terrain</h3>
              <p>La Route 3-2 présente un terrain mixte avec des points d'étranglement stratégiques, rendant le positionnement crucial.</p>
              
              <h4>Routes & Chemins</h4>
              <ul>
                <li><strong>Chemin Principal :</strong> Route à travers un terrain varié (Très Long, 4 points d'étranglement).</li>
                <li><strong>Col de Montagne :</strong> Passage avec des champs d'herbe (Long, 2 points d'étranglement).</li>
              </ul>
              
              <h4>Montagnes & Hauteurs</h4>
              <ul>
                <li><strong>Sommets Stratégiques :</strong> Surplombent les chemins (Valeur stratégique Très Élevée). Bonus portée +35%.</li>
                <li><strong>Collines Rocheuses :</strong> Le long des chemins (Valeur stratégique Élevée). Bonus portée +20%.</li>
              </ul>
              
              <h4>Herbe & Végétation</h4>
              <ul>
                <li><strong>Champs d'herbe :</strong> Dans les vallées (Couverture Élevée). Bonus x2 pour les types Plante.</li>
                <li><strong>Prairies :</strong> Zones de prairie (Couverture Moyenne). Bonus de puissance pour les types Plante.</li>
              </ul>
              
              <h4>Points d'étranglement Stratégiques</h4>
              <ul>
                <li><strong>Col de Montagne :</strong> Passage étroit entre les pics (Priorité Très Élevée).</li>
                <li><strong>Entrée de Vallée :</strong> Là où le chemin entre dans la zone herbeuse (Priorité Élevée).</li>
                <li><strong>Convergence :</strong> Rencontre de plusieurs chemins (Priorité Élevée).</li>
              </ul>
              
              <h3>⚔️ Composition d'Équipe</h3>
              <h4>Début & Milieu (Vagues 1-99)</h4>
              <p>Utilisez des Pokémon Plante (Maractus, Jungko, Bouldeneu) pour nettoyer les vagues. Ces unités excellent contre les ennemis Eau et Sol.</p>
              
              <h4>Fin de partie (Vague 100)</h4>
              <p>Passez à l'escouade "Ice Breaker" : Lamantine (contrôleur), Ditto (stun de secours), Hexagel et Dimoret (DPS), Barbicha et Corsola (utilitaire).</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-3-3-registeel-wave-100-guide',
        routeNumber: '3-3',
        name: 'Guide PokePath TD Route 3-3 : Battre Registeel (Immunisé au Poison)',
        mapImage: '/images/map-route/3-3.png',
        stars: 600,
        starsSecondary: 0,
        difficulty: 'Very Hard',
        difficultyLevel: 4,
        terrain: ['Field', 'Grass', 'Mountain', 'Water'],
        description: 'Route de défi ultime avec tous les types de terrain. Le boss final Registeel nécessite une stratégie de Malédiction unique en raison de son immunité au Poison.',
        totalWaves: 100,
        recommendedTypes: ['Ghost', 'Ground', 'Grass', 'Fire'],
        recommendedPokemon: ['Gengar', 'Ditto', 'Maractus', 'Sceptile', 'Sunflora', 'Excadrill', 'Dewgong', 'Corsola'],
        strategies: ['Swap Strategy', 'Curse Build', 'Boss Counter'],
        playstyle: 'Tactical',
        tips: [
            'Utilisez la stratégie de permutation : équipe Plante pour les vagues 1-99, puis passez à l\'équipe Malédiction pour Registeel',
            'Ectoplasma (Gengar) est essentiel pour la Vague 100 - les dégâts de Cauchemar ignorent les 238 000 d\'armure de Registeel',
            'Placez Ectoplasma sur les hauteurs (Montagne en haut à droite) pour une couverture maximale',
            'Utilisez Ditto pour vous transformer en Ectoplasma et doubler les cumuls de Cauchemar',
            'Lamantine (Dewgong) et Corsola fournissent des étourdissements/ralentissements cruciaux pour donner à Ectoplasma le temps de monter en puissance',
            'Gardez Minotaupe (Excadrill) pour les deux équipes - il brise l\'armure des élites et soutient le combat contre le boss'
        ],
        teamComposition: {
            early: ['Maractus', 'Sceptile', 'Sunflora'],
            mid: ['Maractus', 'Sceptile', 'Sunflora', 'Excadrill'],
            late: ['Gengar', 'Ditto', 'Dewgong', 'Corsola', 'Excadrill']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Système de chemins complexes à travers tous les types de terrain', length: 'Very Long', chokepoints: 6 },
                { description: 'Multiples chemins secondaires', length: 'Long', chokepoints: 4 },
                { description: 'Chemin secret à travers un terrain difficile', length: 'Medium', chokepoints: 2 }
            ],
            water: [
                { description: 'Grand lac central', type: 'Deep Water', strategicValue: 'Very High', benefits: ['Les Pokémon de type Eau gagnent un bonus de puissance x2'] },
                { description: 'Rivières traversant la carte', type: 'River', strategicValue: 'High', benefits: ['Les Pokémon de type Eau gagnent un bonus de puissance'] },
                { description: 'Cascades et bassins', type: 'Waterfall', strategicValue: 'Medium', benefits: ['Les Pokémon de type Eau gagnent un bonus de puissance'] }
            ],
            mountains: [
                { description: 'Sommets imposants avec élévation maximale', height: 'Very High', strategicValue: 'Very High', benefits: ['+60% de bonus de portée', 'Peut couvrir des sections entières de la carte'] },
                { description: 'Multiples chaînes de montagnes', height: 'High', strategicValue: 'Very High', benefits: ['+40% de bonus de portée'] },
                { description: 'Falaises rocheuses et crêtes', height: 'Medium', strategicValue: 'High', benefits: ['+25% de bonus de portée'] }
            ],
            grass: [
                { description: 'Forêts denses couvrant de vastes zones', coverage: 'Very High', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance x2'] },
                { description: 'Prairies et prés', coverage: 'High', benefits: ['Les Pokémon de type Plante gagnent un bonus de puissance'] }
            ],
            chokepoints: [
                { location: 'Central mountain peak', description: 'Point le plus élevé avec vue sur toute la carte', priority: 'Very High' },
                { location: 'Lake bridge', description: 'Pont principal traversant le lac central', priority: 'Very High' },
                { location: 'Mountain pass', description: 'Passage étroit entre les sommets', priority: 'Very High' },
                { location: 'Forest clearing', description: 'Zone ouverte dans la forêt dense', priority: 'High' },
                { location: 'River crossing', description: 'Le chemin traverse la rivière', priority: 'High' },
                { location: 'Path intersection', description: 'Convergence de plusieurs chemins', priority: 'High' }
            ]
        },
        seo: {
            title: 'Guide PokePath TD Route 3-3 : Battre Registeel (Immunisé au Poison)',
            description: 'Registeel possède 238k d\'Armure et est immunisé au Poison. Apprenez la "Stratégie Malédiction d\'Ectoplasma" pour vaincre le boss de la Route 3-3.',
            keywords: 'pokepathtd route 3-3, beat registeel pokepathtd, route 3-3 guide, pokepathtd registeel boss, best team route 3-3'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>La Route 3-3 est le point culminant de la troisième région. La carte elle-même est longue et sinueuse, mais le véritable test est le boss final, Registeel.</p>
              <p>Les joueurs qui comptaient sur la "Stratégie Poison" utilisée contre Regirock se heurteront à un mur ici. Registeel est de type Acier, ce qui signifie qu'il est <strong>100% Immunisé au Poison</strong>.</p>
              <p>Avec 238 000 d'Armure et une immunité au Poison, comment l'endommager ? La réponse réside dans l'effet de statut de type Spectre : <strong>Malédiction (Cauchemar)</strong>.</p>
              
              <h3>🛡️ Analyse du Boss : Registeel</h3>
              <ul>
                <li><strong>Armure :</strong> 238 000. (Les attaques physiques infligent environ 1 dégât).</li>
                <li><strong>Immunités :</strong> Poison. N'utilisez pas Smogogo ou Arbok.</li>
                <li><strong>Faiblesses :</strong>
                  <ul>
                    <li>Sol : (Minotaupe / Libégon).</li>
                    <li>Feu : (Dracaufeu / Typhlosion).</li>
                    <li>Malédiction : (Ectoplasma / Tutankafer / Branette).</li>
                  </ul>
                </li>
              </ul>
      
              <img src="/images/map-route/3-3-03.png" alt="Route 3-3 Map" class="route-map">
              
              <h3>🏆 La Stratégie des Deux Équipes</h3>
              <p>Parce que les vagues régulières nécessitent des dégâts de zone (AOE) et que le Boss nécessite des contres spécifiques, nous utilisons une "Stratégie de Permutation".</p>
              
              <h4>Équipe 1 : Nettoyage des Vagues (Vagues 1-99)</h4>
              <p>La Route 3-3 est peuplée de types Roche, Sol et Acier.</p>
              <ul>
                <li><strong>Noyau : Types Plante.</strong></li>
                <li><strong>Maractus & Jungko (Sceptile) :</strong> Placés dans la zone d'herbe centrale. Ils déchiquettent les lourdes vagues Roche/Sol.</li>
                <li><strong>Héliatronc (Sunflora) :</strong> Bonus de dégâts essentiel.</li>
                <li><strong>Minotaupe (Excadrill) :</strong> Placé près du spawn pour briser l'armure des monstres élites.</li>
              </ul>
              
              <h4>Équipe 2 : Les Tueurs de Boss (Vague 100)</h4>
              <p>Quand Registeel apparaît, <strong>mettez le jeu en PAUSE</strong>. Vendez vos unités Plante (sauf Héliatronc si vous avez de la place) et déployez l'Escouade Malédiction.</p>
              
              <h4>1. Le MVP : Ectoplasma (Niveau 100)</h4>
              <ul>
                <li><strong>Rôle :</strong> Dégâts à progression infinie.</li>
                <li><strong>Passif :</strong> Cauchemar. Applique des cumuls qui infligent des dégâts sur la durée.</li>
                <li><strong>Pourquoi il gagne :</strong> Les dégâts de Cauchemar ignorent l'armure. Contrairement aux attaques physiques, ils augmentent à mesure que le combat dure. Comme Registeel est très résistant, Ectoplasma a tout le temps de monter ces dégâts à des niveaux mortels.</li>
                <li><strong>Placement :</strong> Montagne en haut à droite (ou toute hauteur couvrant le chemin).</li>
              </ul>
              
              <h4>2. Le Clone : Ditto</h4>
              <ul>
                <li><strong>Rôle :</strong> Deuxième Ectoplasma.</li>
                <li><strong>Stratégie :</strong> Transformez Ditto en Ectoplasma. Deux Ectoplasma signifient deux fois plus de cumuls de Cauchemar, ce qui réduit de moitié le temps nécessaire pour tuer le boss.</li>
              </ul>
              
              <h4>3. Les Temporisateurs : Lamantine & Corsola</h4>
              <ul>
                <li><strong>Rôle :</strong> Gagner du temps.</li>
                <li><strong>Stratégie :</strong> Ectoplasma a besoin de temps pour monter ses dégâts.
                  <ul>
                    <li><strong>Corsola :</strong> Ralentit Registeel.</li>
                    <li><strong>Lamantine (Dewgong) :</strong> Étourdit Registeel sur place.</li>
                  </ul>
                </li>
                <li>Pendant que Registeel est étourdi, les dégâts de Cauchemar continuent de s'appliquer.</li>
              </ul>
              
              <h4>4. Le Briseur d'Armure : Minotaupe</h4>
              <ul>
                <li><strong>Rôle :</strong> Soutien DPS.</li>
                <li><strong>Stratégie :</strong> Gardez Minotaupe. Ses attaques de type Sol sont super efficaces contre l'Acier, et son passif inflige des dégâts doubles à l'armure. Bien qu'il ne dépasse pas Ectoplasma, il contribue à des dégâts d'appoint significatifs.</li>
              </ul>
      
              <img src="/images/map-route/3-3-02.png" alt="Route 3-3 Map" class="route-map">
              
              <h3>📝 Guide Pas à Pas</h3>
              <ol>
                <li><strong>Vagues 1-99 :</strong> Jouez normalement avec votre équipe Plante/Sol.</li>
                <li><strong>Vague 100 :</strong> Pause.</li>
                <li><strong>Vendre :</strong> Retirez Maractus, Jungko et les autres unités physiques qui ne sont pas de type Sol.</li>
                <li><strong>Acheter :</strong> Déployez Ectoplasma et Ditto.</li>
                <li><strong>Soutien :</strong> Assurez-vous que Lamantine et Corsola sont à portée du chemin du boss.</li>
                <li><strong>Victoire :</strong> Regardez la vie de Registeel fondre à mesure que les chiffres violets de Cauchemar augmentent.</li>
              </ol>
              
              <h3>🗺️ Analyse du Terrain</h3>
              <p>La Route 3-3 présente un système de chemins complexes à travers tous les types de terrain, ce qui en fait la route de défi ultime.</p>
              
              <h4>Routes & Chemins</h4>
              <ul>
                <li><strong>Chemin Principal :</strong> Système complexe à travers tous les terrains (Très Long, 6 points d'étranglement).</li>
                <li><strong>Chemins Secondaires :</strong> Multiples embranchements (Long, 4 points d'étranglement).</li>
                <li><strong>Chemin Secret :</strong> Sentier à travers un terrain difficile (Moyen, 2 points d'étranglement).</li>
              </ul>
              
              <h4>Zones Aquatiques</h4>
              <ul>
                <li><strong>Lac Central :</strong> Très haute valeur stratégique. Bonus x2 pour les Pokémon Eau.</li>
                <li><strong>Rivières :</strong> Traversent la carte. Bonus de puissance pour les Pokémon Eau.</li>
                <li><strong>Cascades :</strong> Valeur stratégique moyenne. Bonus de puissance Eau.</li>
              </ul>
              
              <h4>Montagnes & Hauteurs</h4>
              <ul>
                <li><strong>Sommets Imposants :</strong> Élévation maximale. Bonus portée +60%, peut couvrir des sections entières.</li>
                <li><strong>Chaînes de Montagnes :</strong> Très haute valeur stratégique. Bonus portée +40%.</li>
                <li><strong>Falaises Rocheuses :</strong> Valeur stratégique élevée. Bonus portée +25%.</li>
              </ul>
              
              <h4>Herbe & Végétation</h4>
              <ul>
                <li><strong>Forêts Denses :</strong> Couverture très élevée. Bonus puissance x2 pour les types Plante.</li>
                <li><strong>Prairies :</strong> Couverture élevée. Bonus de puissance pour les types Plante.</li>
              </ul>
              
              <h4>Points d'étranglement Stratégiques</h4>
              <ul>
                <li><strong>Sommet Central :</strong> Point culminant avec vue panoramique (Priorité Très Élevée).</li>
                <li><strong>Pont du Lac :</strong> Pont principal traversant le lac (Priorité Très Élevée).</li>
                <li><strong>Col de Montagne :</strong> Passage étroit entre les sommets (Priorité Très Élevée).</li>
                <li><strong>Clairière Forestière :</strong> Zone ouverte en forêt (Priorité Élevée).</li>
                <li><strong>Traversée de Rivière :</strong> Le chemin coupe à travers l'eau (Priorité Élevée).</li>
                <li><strong>Intersection :</strong> Convergence de plusieurs routes (Priorité Élevée).</li>
              </ul>
      
              <img src="/images/map-route/3-3-01.png" alt="Route 3-3 Map" class="route-map">
              
              <h3>⚔️ Recommandations de Composition d'Équipe</h3>
              <h4>Début de partie (Niveaux 1-15)</h4>
              <p>Commencez avec n'importe quel Pokémon de niveau 1-50. Concentrez-vous sur l'économie et le nettoyage des premières vagues.</p>
              
              <h4>Milieu de partie (Niveaux 16-35)</h4>
              <p>Passez à des Pokémon de niveau 50-80. Commencez à installer votre noyau de type Plante.</p>
              
              <h4>Fin de partie (Niveaux 36-100)</h4>
              <p>Déployez des Pokémon Meta de niveau 100. Pour les vagues 1-99, utilisez les types Plante (Maractus, Jungko, Héliatronc) et Minotaupe. Pour la Vague 100, permutez vers Ectoplasma, Ditto, Lamantine et Corsola.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-1-4-regigigas-wave-100-guide',
        routeNumber: '1-4',
        name: 'Guide PokéPath TD Route 1-4 : Battre Regigigas (L\'Essaim)',
        mapImage: '/images/map-route/1-4.png',
        stars: 650,
        starsSecondary: 0,
        difficulty: 'Very Hard',
        difficultyLevel: 4,
        terrain: ['Field', 'Grass', 'Forest'],
        description: 'La version "Héroïque" de la Route 1. Présente des points d\'apparition doubles et des essaims massifs de types Normal/Vol. Le boss Regigigas nécessite un DPS massif.',
        totalWaves: 100,
        recommendedTypes: ['Fighting', 'Electric', 'Rock', 'Fire'],
        recommendedPokemon: ['Charizard', 'Raichu', 'Machamp', 'Golem', 'Lucario', 'Zapdos', 'Vileplume', 'Typhlosion'],
        strategies: ['AOE Spam', 'Dual Lane Defense', 'Rocky Helmet Meta'],
        playstyle: 'Aggressive',
        tips: [
            'Équipez le Casque Brut (Rocky Helmet) sur vos tanks (Grolem/Ronflex) - les essaims se tueront au contact',
            'Raichu est le MVP pour les essaims de type Vol grâce à son passif Éclair en Chaîne',
            'N\'utilisez pas de tireurs de précision mono-cible (comme Lézargus) ; vous seriez submergé par le nombre',
            'Le boss Regigigas a "Début Calme" - il bouge lentement pendant 10s puis sprinte. Tuez-le vite !',
            'Utilisez Rafflesia (Vileplume) ou Papilusion au point de convergence pour endormir/étourdir l\'essaim',
            'Les types Combat comme Mackogneur (Machamp) infligent x2 dégâts à 90 % des ennemis ici'
        ],
        teamComposition: {
            early: ['Charmeleon', 'Pikachu', 'Geodude'],
            mid: ['Charizard', 'Raichu', 'Golem', 'Machoke'],
            late: ['Charizard (Y)', 'Raichu', 'Machamp', 'Lucario', 'Zapdos', 'Vileplume']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Points d\'apparition doubles fusionnant en un seul large chemin', length: 'Medium', chokepoints: 3 },
                { description: 'Champs ouverts avec peu de blocages naturels', length: 'Short', chokepoints: 1 }
            ],
            water: [
                { description: 'Petites mares près du spawn A', type: 'Shallow Water', strategicValue: 'Low', benefits: ['Aucun significatif'] }
            ],
            mountains: [
                { description: 'Pas de modificateurs de hauteur', height: 'None', strategicValue: 'Low', benefits: ['Aucun'] }
            ],
            grass: [
                { description: 'Hautes herbes couvrant 70% de la carte', coverage: 'Very High', benefits: ['Les types Plante gagnent Furtivité (Invisibles pour les ennemis)'] },
                { description: 'Fourré dense à la convergence', coverage: 'Medium', benefits: ['Ralentit les ennemis de 15%'] }
            ],
            chokepoints: [
                { location: 'Le Point de Convergence', description: 'Là où le Chemin A et le Chemin B se rejoignent. Idéal pour l\'AOE.', priority: 'Very High' },
                { location: 'Fin de la Ligne', description: 'Ligne droite avant la base. Dernier rempart pour les types Combat.', priority: 'High' }
            ]
        },
        seo: {
            title: 'Guide PokéPath TD Route 1-4 : Stratégie Regigigas & Essaim',
            description: 'La Route 1-4 présente des essaims massifs de Roucarnage et Rattatac. Apprenez à contrer la mécanique d\'essaim et battez Regigigas avec le Casque Brut.',
            keywords: 'pokepathtd route 1-4, beat regigigas pokepathtd, route 1-4 swarm guide, best aoe pokemon, rocky helmet strategy'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>La Route 1-4 est la première des "Cartes Avancées" ajoutées dans la version 1.4.1. Ne vous laissez pas tromper par le nom "Route 1" ; c'est un test brutal de votre contrôle de foule et de vos dégâts de zone (AOE).</p>
              <p>Contrairement aux autres cartes qui exigent de la précision, celle-ci demande de la destruction pure. Vous ferez face à des <strong>vagues de plus de 50 ennemis</strong> à la fois. Si votre vitesse d'élimination est trop lente, votre jeu pourrait ramer avant même que vous ne perdiez.</p>
              
              <h3>🛡️ Analyse du Boss : Regigigas</h3>
              <ul>
                <li><strong>PV :</strong> Massifs (Millions). Une véritable éponge à dégâts.</li>
                <li><strong>Capacité : Début Calme.</strong> Se déplace à 50% de vitesse pendant les 10 premières secondes, puis double sa vitesse et ignore les ralentissements.</li>
                <li><strong>Faiblesses :</strong>
                  <ul>
                    <li>Combat : (Mackogneur / Lucario / Bétochef). <strong>Dégâts x2</strong>.</li>
                    <li>Dégâts en pourcentage : (Malédiction / Vampigraine).</li>
                  </ul>
                </li>
                <li><strong>Menace :</strong> Il n'attaque pas les tours, il marche. S'il accélère, il devient presque inarrêtable.</li>
              </ul>
              
              <h3>🏆 La Stratégie "Casque Brut" & AOE</h3>
              <p>À cause de la mécanique d'Essaim (grand nombre, peu de PV), les tours mono-cibles sont inutiles ici. Vous avez besoin d'objets et d'unités qui frappent plusieurs cibles.</p>
              
              <h4>1. Le MVP : Raichu (Éclair en Chaîne)</h4>
              <ul>
                <li><strong>Rôle :</strong> Anti-Air / Nettoyage d'essaim.</li>
                <li><strong>Pourquoi il gagne :</strong> La Route 1-4 est remplie de types Vol (Roucarnage/Rapasdepic). Les attaques de Raichu rebondissent sur les ennemis proches.</li>
                <li><strong>Objet :</strong> <em>Lunettes Choix</em> (Attaque Spéciale Max) ou <em>Aimant</em>.</li>
              </ul>
              
              <h4>2. Le Tank : Grolem / Ronflex</h4>
              <ul>
                <li><strong>Rôle :</strong> Mur physique.</li>
                <li><strong>Stratégie :</strong> Placez Grolem à l'avant. Les ennemis ici sont principalement des attaquants physiques de type Normal (Rattatac, Tauros).</li>
                <li><strong>Objet clé :</strong> <strong>Casque Brut (Rocky Helmet)</strong>. Chaque fois qu'un ennemi mord votre tank, il subit des dégâts. Ces dégâts passifs tuent des centaines de petits rats sans que vous n'ayez rien à faire.</li>
              </ul>
              
              <h4>3. Le Tueur de Boss : Mackogneur (Machamp)</h4>
              <ul>
                <li><strong>Rôle :</strong> Nuke mono-cible.</li>
                <li><strong>Stratégie :</strong> Pendant que Raichu nettoie les petits monstres, Mackogneur doit se concentrer uniquement sur les Elites et Regigigas.</li>
                <li><strong>Placement :</strong> Placez-le au "Point de Convergence" où les deux chemins se rejoignent.</li>
              </ul>
              
              <h3>📝 Guide Pas à Pas</h3>
              <ol>
                <li><strong>Vagues 1-30 :</strong> Utilisez <strong>Reptincel</strong> ou <strong>Pikachu</strong>. Ne les faites pas évoluer tout de suite si vous avez besoin d'argent pour le placement. Couvrez les deux points d'apparition.</li>
                <li><strong>Vagues 31-60 :</strong> Les essaims volants commencent. Faites évoluer en <strong>Raichu</strong> immédiatement. Placez un <strong>Rafflesia</strong> au centre pour ralentir la ruée.</li>
                <li><strong>Vagues 61-90 :</strong> Les Elites (Tauros/Kangourex) apparaissent. Déployez <strong>Mackogneur</strong> équipé d'une <em>Ceinture Noire</em> ou d'un <em>Bandeau Muscle</em>.</li>
                <li><strong>Vague 100 (Regigigas) :</strong> 
                  <ul>
                    <li>Mettez le jeu en pause.</li>
                    <li>Regroupez vos types Combat au début du chemin.</li>
                    <li><strong>Focus Fire :</strong> Réglez la priorité de cible sur "Le plus fort" pour votre Mackogneur afin d'ignorer les sbires.</li>
                    <li>Abattez-le pendant sa phase "Début Calme".</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ Analyse du Terrain</h3>
              <p>La carte comporte deux points d'apparition distincts qui fusionnent en une seule large avenue. Cette forme en "Y" définit votre stratégie.</p>
              
              <h4>Les doubles apparitions</h4>
              <ul>
                <li><strong>Spawn Nord :</strong> Surtout des types Vol. Nécessite une défense Électrique.</li>
                <li><strong>Spawn Ouest :</strong> Surtout des types Sol/Normal (Rattata/Sabelette). Nécessite une défense Plante/Combat.</li>
              </ul>
              
              <h4>La Convergence (Point d'étranglement)</h4>
              <ul>
                <li><strong>Emplacement :</strong> Centre de la carte.</li>
                <li><strong>Valeur stratégique :</strong> C'est le seul endroit où les tours AOE peuvent toucher les ennemis des DEUX spawns simultanément. Vos tours les plus chères (Dracaufeu/Typhlosion) doivent aller ici.</li>
              </ul>
              
              <h4>Herbe & Fourrés</h4>
              <ul>
                <li><strong>Hautes Herbes :</strong> Couvrent la majeure partie de la carte. Les Pokémon Plante placés ici gagnent "Furtivité", empêchant les ennemis à distance de riposter. Idéal pour <strong>Rafflesia</strong> ou <strong>Florizarre</strong>.</li>
              </ul>
              
              <h3>⚔️ Recommandations de Composition d'Équipe</h3>
              <h4>Le Noyau "Électrique/Combat"</h4>
              <p>Contrairement à d'autres cartes, la Route 1-4 est dominée par les types Normal/Vol du début de jeu, mais mis à l'échelle du Niveau 100.</p>
              <ul>
                <li><strong>Raichu / Électhor (Zapdos) :</strong> Indispensables pour 50 % des vagues.</li>
                <li><strong>Mackogneur / Lucario :</strong> Indispensables pour les autres 50 % et le Boss.</li>
                <li><strong>Soutien :</strong> Rafflesia (Poudre Dodo est moins efficace que Para-Spore ici vu le volume d'ennemis).</li>
              </ul>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-2-4-mega-venusaur-wave-100-guide',
        routeNumber: '2-4',
        name: 'Guide PokéPath TD Route 2-4 : Battre Méga-Florizarre (Le Labyrinthe Toxique)',
        mapImage: '/images/map-route/2-4.png',
        stars: 650,
        starsSecondary: 0,
        difficulty: 'Very Hard',
        difficultyLevel: 4,
        terrain: ['Forest', 'Swamp', 'Thicket'],
        description: 'Une version tordue de la Forêt de Jade. Les arbres bloquent la ligne de mire et les ennemis ont une régénération élevée. Le boss Méga-Florizarre réduit les dégâts de Feu/Glace.',
        totalWaves: 100,
        recommendedTypes: ['Psychic', 'Flying', 'Steel', 'Ground'],
        recommendedPokemon: ['Alakazam', 'Espeon', 'Metagross', 'Braviary', 'Aerodactyl', 'Crobat', 'Slowbro', 'Skarmory'],
        strategies: ['Psychic Nuke', 'Anti-Regen', 'Drag-and-Drop Micro'],
        playstyle: 'Micromanagement',
        tips: [
            'Le boss Méga-Florizarre possède "Isograisse" - les attaques Feu et Glace infligent 50% de dégâts en moins ! Ne comptez pas sur Dracaufeu.',
            'Utilisez des types Psy (Alakazam) pour éliminer d\'un coup les ennemis Poison avant qu\'ils ne puissent se régénérer.',
            'Les arbres bloquent la vue ! Utilisez des types Vol (Gueriaigle) ou placez-vous sur des souches d\'arbres pour gagner en vision.',
            'Les cases de Marais soignent les ennemis de type Poison. Tuez-les avant qu\'ils n\'entrent dans la boue.',
            'Les types Acier (Métalosse) sont immunisés à l\'effet de Poison global de la carte.',
            'Utilisez la nouvelle fonctionnalité Glisser-Déposer de la v1.4.1 pour déplacer Alakazam dans le labyrinthe et suivre le boss.'
        ],
        teamComposition: {
            early: ['Abra', 'Spearow', 'Zubat'],
            mid: ['Kadabra', 'Fearow', 'Golbat', 'Metang'],
            late: ['Alakazam', 'Metagross', 'Braviary', 'Crobat', 'Espeon', 'Slowbro']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Chemin sinueux serré en forme de Z', length: 'Very Long', chokepoints: 8 },
                { description: 'Le chemin est couvert de boue toxique (soigne les ennemis)', length: 'Medium', chokepoints: 2 }
            ],
            water: [
                { description: 'Étangs empoisonnés', type: 'Swamp', strategicValue: 'Negative', benefits: ['Blesse les types non-Poison/Acier qui s\'y trouvent'] }
            ],
            mountains: [
                { description: 'Pas de montagnes, mais des souches d\'arbres géantes servent de hauteurs', height: 'Low', strategicValue: 'High', benefits: ['+15% Portée', 'Ignore le blocage de vision des arbres'] }
            ],
            grass: [
                { description: 'Arbres de forêt denses', coverage: 'Max', benefits: ['Bloque la ligne de mire des unités au sol'] },
                { description: 'Fourrés curatifs', coverage: 'Low', benefits: ['Les ennemis ici récupèrent 10% de PV par seconde'] }
            ],
            chokepoints: [
                { location: 'La Souche Centrale', description: 'Centre du labyrinthe. Meilleur endroit pour Alakazam.', priority: 'Very High' },
                { location: 'La Porte de Sortie', description: 'Ligne droite finale. Idéal pour le spam de Rapace.', priority: 'High' }
            ]
        },
        seo: {
            title: 'Guide PokéPath TD Route 2-4 : Méga-Florizarre et Stratégie de Régénération',
            description: 'La Route 2-4 est un labyrinthe de types Poison régénérateurs. Le feu est faible ici ! Apprenez à utiliser les types Psy et la mécanique de Glisser-Déposer pour battre Méga-Florizarre.',
            keywords: 'pokepathtd route 2-4, beat mega venusaur pokepathtd, route 2-4 guide, anti-regen strategy, alakazam build'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>La Route 2-4, connue sous le nom de "Labyrinthe Toxique", est un cauchemar pour les joueurs qui comptent sur les dégâts progressifs. La particularité de cette carte est la <strong>Régénération</strong>. Presque tous les ennemis ici (Coconfort, Dardargnan, Arbok, Grotadmorv) se soignent rapidement s'ils ne subissent pas de dégâts mortels immédiats.</p>
              <p>De plus, la forêt dense bloque la vision de vos tours. Un Dracaufeu sur le côté gauche ne peut pas voir les ennemis sur le côté droit. Cette carte nécessite de maîtriser la mécanique de <strong>Glisser-Déposer de la v1.4.1</strong> pour réussir.</p>
              
              <h3>🛡️ Analyse du Boss : Méga-Florizarre</h3>
              <ul>
                <li><strong>PV :</strong> Très élevés. Un boss de type tank.</li>
                <li><strong>Passif 1 : Isograisse.</strong> Subit <strong>50% de dégâts en moins</strong> des capacités de type Feu et Glace. Votre Dracaufeu de départ est inutile ici !</li>
                <li><strong>Passif 2 : Synthèse.</strong> Récupère 5% de ses PV max toutes les 5 secondes. Vous devez surpasser ce soin par votre DPS.</li>
                <li><strong>Faiblesses :</strong>
                  <ul>
                    <li>Psy : (Alakazam / Mewtwo / Mentali). <strong>Dégâts x2</strong>.</li>
                    <li>Vol : (Gueriaigle / Ptéra). <strong>Dégâts x2</strong>.</li>
                  </ul>
                </li>
              </ul>
              
              <h3>🏆 La Stratégie "Psychic Burst"</h3>
              <p>Comme les ennemis se soignent avec le temps, les stratégies de "Dégâts sur la durée" (Brûlure/Poison) sont inefficaces. Vous avez besoin d'un potentiel de "One-Shot".</p>
              
              <h4>1. Le MVP : Alakazam (Canon de Verre)</h4>
              <ul>
                <li><strong>Rôle :</strong> Assassin à rafale.</li>
                <li><strong>Pourquoi il gagne :</strong> Les types Poison/Combat dominent cette route. Alakazam leur inflige des dégâts super efficaces. Sa vitesse élevée garantit qu'il frappe avant qu'ils ne puissent se régénérer.</li>
                <li><strong>Objet :</strong> <em>Cuillère Tordue</em> (+20% Psy) ou <em>Lunettes Choix</em> (+50% Attaque Spéciale).</li>
                <li><strong>Placement :</strong> Sur la "Souche Centrale" pour une vision maximale.</li>
              </ul>
              
              <h4>2. L'éclaireur : Gueriaigle / Nostenfer</h4>
              <ul>
                <li><strong>Rôle :</strong> Vision et Nettoyage.</li>
                <li><strong>Pourquoi il gagne :</strong> Les types Vol ignorent la pénalité de "Ligne de mire" causée par les arbres. Ils peuvent attaquer les ennemis cachés derrière les parois forestières.</li>
                <li><strong>Objet :</strong> <em>Bec Pointu</em>.</li>
              </ul>
              
              <h4>3. Le Mur : Métalosse (Metagross)</h4>
              <ul>
                <li><strong>Rôle :</strong> Tank.</li>
                <li><strong>Pourquoi il gagne :</strong> Étant de type Acier/Psy, Métalosse est <strong>Immunisé au Poison</strong> ambiant de la carte et résiste à presque toutes les attaques de la faune locale.</li>
                <li><strong>Stratégie :</strong> Placez-le tout à la fin du labyrinthe pour intercepter les fuyards.</li>
              </ul>
              
              <h3>📝 Guide Pas à Pas</h3>
              <ol>
                <li><strong>Vagues 1-20 :</strong> Commencez avec un <strong>Abra</strong> et un <strong>Piafabec</strong>. Abra est faible en début de partie, gardez-le protégé.</li>
                <li><strong>Vagues 21-50 :</strong> Les ennemis avec "Régénération" apparaissent (Tadmorv/Grotadmorv). Si vous voyez des chiffres de dégâts s'afficher mais que la barre de PV ne bouge pas, vous manquez de "Burst". Améliorez Abra en <strong>Kadabra</strong> dès que possible.</li>
                <li><strong>Vagues 51-90 :</strong> Phase du Labyrinthe. Les ennemis deviennent résistants. Utilisez <strong>Flagadoss</strong> pour les ralentir et les regrouper pour les explosions psychiques d'Alakazam.</li>
                <li><strong>Wave 100 (Méga-Florizarre) :</strong> 
                  <ul>
                    <li><strong>N'utilisez PAS le Feu.</strong> Vendez tous les types Feu que vous auriez achetés.</li>
                    <li><strong>Micro-gestion :</strong> À mesure que Florizarre avance dans le labyrinthe en Z, <strong>Glissez et Déposez</strong> votre Alakazam sur la "Souche d'arbre" suivante en amont du boss.</li>
                    <li>Vous devrez repositionner votre DPS principal au moins 3 ou 4 fois pendant ce combat pour maintenir une attaque continue.</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ Analyse du Terrain</h3>
              <p>La carte est une forêt dense avec un sentier marécageux. La visibilité est votre principal ennemi.</p>
              
              <h4>La Forêt (Blocage de vision)</h4>
              <ul>
                <li><strong>Arbres :</strong> Les unités au sol (comme Alakazam/Métalosse) ne peuvent pas tirer à travers les arbres. Placez-les aux virages ou aux intersections.</li>
                <li><strong>Unités Volantes :</strong> Les types Vol ignorent les arbres. Si vous avez du mal avec le placement, construisez une équipe entièrement Volante.</li>
              </ul>
              
              <h4>Le Marais Toxique</h4>
              <ul>
                <li><strong>Effet :</strong> Le chemin lui-même est une boue violette.</li>
                <li><strong>Buff Ennemi :</strong> Les ennemis de type Poison (Tadmorv/Smogo) se soignent en marchant dessus.</li>
                <li><strong>Debuff Joueur :</strong> Les tours qui ne sont pas de type Acier ou Poison placées directement sur le chemin subissent des dégâts. Gardez vos unités sur l'herbe !</li>
              </ul>
              
              <h3>⚔️ Recommandations de Composition d'Équipe</h3>
              <h4>Le Noyau "Anti-Poison"</h4>
              <p>La Route 2-4 exige des types Psy. C'est l'endroit idéal pour faire progresser votre Abra ou votre Ramoloss.</p>
              <ul>
                <li><strong>Alakazam :</strong> DPS essentiel.</li>
                <li><strong>Métalosse :</strong> Meilleur Tank (Immunisé au Poison).</li>
                <li><strong>Gueriaigle :</strong> Meilleur attaquant physique (Le type Vol ignore les arbres).</li>
                <li><strong>Flagadoss :</strong> Fournit du contrôle de foule (CC) pour stopper la Régénération.</li>
              </ul>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-3-4-mega-aggron-wave-100-guide',
        routeNumber: '3-4',
        name: 'Guide PokéPath TD Route 3-4 : Battre Méga-Galeking (Le Défilé de Fer)',
        mapImage: '/images/map-route/3-4.png',
        stars: 700,
        starsSecondary: 0,
        difficulty: 'Extreme',
        difficultyLevel: 5,
        terrain: ['Mountain', 'Cave', 'Ridge'],
        description: 'Le test ultime d\'Attaque Spéciale. Les ennemis ont une "Armure Lourde" qui bloque les dégâts physiques. Les attaquants physiques sont inutiles ici. Le boss Méga-Galeking nécessite de la perforation d\'armure.',
        totalWaves: 100,
        recommendedTypes: ['Water', 'Fire', 'Special-Fighting', 'Ground'],
        recommendedPokemon: ['Starmie', 'Chandelure', 'Lucario', 'Blastoise', 'Nidoking', 'Gardevoir', 'Empoleon', 'Magnezone'],
        strategies: ['Special Attack Meta', 'Sturdy Breakers', 'Mid-Battle Item Swap'],
        playstyle: 'Loadout Optimization',
        tips: [
            'Les attaquants physiques (Mackogneur, Léviator, Tyranocif) infligent 0 à 1 dégât ici à cause de l\'Armure. Ne les utilisez pas !',
            'Équipez tout le monde de "Lunettes Sages" ou "Lunettes Choix". L\'Attaque Spéciale est le seul moyen de gagner.',
            'Les ennemis ont "Fermeté" (Sturdy) - ils survivent aux coups mortels avec 1 PV. Utilisez la Grêle (Blizzaroi) ou la Brûlure pour les achever.',
            'Le boss Méga-Galeking possède le talent "Filtre" - réduit les dégâts super efficaces subis de 25%.',
            'Lucario est le MVP uniquement s\'il utilise "Aurasphère" (Capacité Spéciale).',
            'Utilisez les Hauteurs ! Placer des Snipers (Lézargus) sur les crêtes octroie une portée massive.'
        ],
        teamComposition: {
            early: ['Squirtle', 'Charmander', 'Magnemite'],
            mid: ['Wartortle', 'Charmeleon', 'Magneton', 'Haunter'],
            late: ['Blastoise (Mega)', 'Chandelure', 'Starmie', 'Magnezone', 'Lucario (Special)', 'Nidoking']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Le Défilé : Un chemin unique, long et droit sans boucles', length: 'Long', chokepoints: 0 },
                { description: 'Entrée de la Grotte : Tunnel étroit où les ennemis s\'agglutinent', length: 'Short', chokepoints: 1 }
            ],
            water: [
                { description: 'Lac Souterrain', type: 'Deep Water', strategicValue: 'High', benefits: ['Les types Eau gagnent un bonus de puissance x2'] }
            ],
            mountains: [
                { description: 'Crêtes de Fer', height: 'Max', strategicValue: 'Critical', benefits: ['+75% Portée', 'Idéal pour les Snipers'] },
                { description: 'Bords de Falaises', height: 'High', strategicValue: 'Very High', benefits: ['+50% Portée'] }
            ],
            grass: [
                { description: 'Aucune', coverage: 'Zero', benefits: ['Pas de furtivité disponible'] }
            ],
            chokepoints: [
                { location: 'Le Pont', description: 'Un pont étroit au-dessus du lac. Les ennemis y sont des cibles faciles.', priority: 'Max' },
                { location: 'Le Pic', description: 'Ascension finale avant la base.', priority: 'Medium' }
            ]
        },
        seo: {
            title: 'Guide PokéPath TD Route 3-4 : Méga-Galeking et Stratégie de Perforation d\'Armure',
            description: 'Les ennemis de la Route 3-4 sont immunisés aux dégâts physiques ! Apprenez la "Meta Attaque Spéciale" et comment vaincre Méga-Galeking avec Staross et Lugulabre en v1.4.1.',
            keywords: 'pokepathtd route 3-4, beat mega aggron pokepathtd, route 3-4 guide, special attack build, armor piercing guide'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>La Route 3-4, surnommée "La Montagne de Fer", est la carte la plus difficile introduite dans la mise à jour 1.4.1. C'est une carte de type "Stat Check" conçue pour punir les équipes équilibrées.</p>
              <p>La particularité ici est l'<strong>Armure Lourde</strong>. Chaque ennemi (Racaillou, Onix, Steelix, Galeking) possède des statistiques de Défense massives. Si vous apportez une équipe physique standard (comme Ronflex ou Mackogneur), vous échouerez dès la première vague.</p>
              <p>Pour gagner, vous devez adopter la <strong>Meta de l'Attaque Spéciale (Att.Spé)</strong>. Vous avez besoin de magie, de rayons et d'énergie élémentaire.</p>
              
              <h3>🛡️ Analyse du Boss : Méga-Galeking (Mega Aggron)</h3>
              <ul>
                <li><strong>PV :</strong> Élevés.</li>
                <li><strong>Défense :</strong> Infinie. Les dégâts physiques sont réduits de 99%.</li>
                <li><strong>Talent : Filtre.</strong> Réduit les dégâts des attaques super efficaces (Feu/Combat/Sol) de 25%. Cela le rend étonnamment résistant même face à ses contres.</li>
                <li><strong>Faiblesses :</strong>
                  <ul>
                    <li>Combat Spécial : (Aurasphère de Lucario). <strong>Le meilleur contre</strong>.</li>
                    <li>Feu Spécial : (Lugulabre / Dracaufeu Y).</li>
                    <li>Sol Spécial : (Telluriforce de Nidoking).</li>
                  </ul>
                </li>
              </ul>
              
              <h3>🏆 La Stratégie "Lunettes Sages"</h3>
              <p>Rangez vos Bandeaux Muscle. Cette route est entièrement basée sur les <strong>Lunettes Sages</strong> (+Dégâts Spéciaux) et les <strong>Lunettes Choix</strong> (+Dégâts Spéciaux Massifs).</p>
              
              <h4>1. Le MVP : Staross / Tortank</h4>
              <ul>
                <li><strong>Rôle :</strong> La mitrailleuse.</li>
                <li><strong>Pourquoi il gagne :</strong> Les attaques de type Eau sont presque toujours Spéciales. Staross possède une vitesse et une couverture de types incroyables. Tortank (surtout Méga) inflige des dégâts d'eau de zone qui ignorent l'armure individuelle des ennemis.</li>
                <li><strong>Placement :</strong> Sur les cases de "Lac Souterrain" pour un bonus de dégâts x2.</li>
              </ul>
              
              <h4>2. Le Briseur de Tanks : Lugulabre (Chandelure)</h4>
              <ul>
                <li><strong>Rôle :</strong> Fondeur d'armure.</li>
                <li><strong>Pourquoi il gagne :</strong> Lugulabre possède l'une des statistiques d'Att.Spé les plus élevées (hors légendaires). Ses capacités de Feu brûlent les types Acier sans effort.</li>
                <li><strong>Objet :</strong> <em>Lunettes Choix</em>. Comme il n'y a pas de chemins multiples, vous n'avez pas besoin de changer de cible souvent.</li>
              </ul>
              
              <h4>3. Le contre à Fermeté : Blizzaroi (Abomasnow)</h4>
              <ul>
                <li><strong>Rôle :</strong> Finisseur.</li>
                <li><strong>Pourquoi il gagne :</strong> Beaucoup de types Roche ici ont le passif <strong>"Fermeté"</strong> (ne peuvent pas être tués d'un coup). Ils survivront avec 1 PV et entreront dans votre base. Blizzaroi invoque la <strong>Grêle</strong>, qui inflige des dégâts résiduels globaux, tuant instantanément tous les ennemis à 1 PV.</li>
              </ul>
              
              <h3>📝 Guide Pas à Pas</h3>
              <ol>
                <li><strong>Vagues 1-20 :</strong> Mode Survie. Les Racaillou sont coriaces. Utilisez <strong>Carapuce (Bulles)</strong> ou <strong>Salamèche (Flammèche)</strong>. N'utilisez pas Roucool ou Rattata ; ils font 0 dégât.</li>
                <li><strong>Vagues 21-60 :</strong> La Vague de Fer. Steelix et Magneton apparaissent. Vous avez besoin de <strong>Lugulabre</strong> ou <strong>Nidoking</strong> ici. Si vous ne comptez que sur l'Eau, Magneton (Électrique) vous balayera.</li>
                <li><strong>Vagues 61-90 :</strong> Les Hauteurs. Déplacez vos snipers (Lézargus/Staross) sur les "Crêtes de Fer" via le Glisser-Déposer. Le boost de portée leur permet de toucher le point d'apparition.</li>
                <li><strong>Vague 100 (Méga-Galeking) :</strong> 
                  <ul>
                    <li><strong>Changement d'objets :</strong> Pause. Retirez les <em>Œufs Chance</em> ou les <em>Restes</em>. Équipez les <strong>Lunettes Choix</strong> sur votre Lucario et votre Lugulabre.</li>
                    <li><strong>Positionnement :</strong> Glissez votre Lucario sur le pont (point d'étranglement).</li>
                    <li><strong>Focus :</strong> Le talent "Filtre" de Galeking réduit les dégâts, vous avez donc besoin d'une force écrasante. Activez tous les temps de recharge (cooldowns) immédiatement.</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ Analyse du Terrain</h3>
              <p>La Route 3-4 est une carte de type "Défilé". Pas de boucles, pas de labyrinthes. Juste une ligne droite mortelle du haut vers le bas.</p>
              
              <h4>Les Crêtes de Fer (Hauteurs)</h4>
              <ul>
                <li><strong>Effet :</strong> Les tours placées ici gagnent une portée massive (+75%).</li>
                <li><strong>Usage :</strong> Parfait pour les canons de verre comme <strong>Alakazam</strong> ou <strong>Lézargus</strong> qui doivent rester loin du chemin.</li>
              </ul>
              
              <h4>Le Lac Souterrain</h4>
              <ul>
                <li><strong>Effet :</strong> Cases d'eau au milieu de la grotte.</li>
                <li><strong>Usage :</strong> Seuls les types Eau/Vol peuvent y être placés. Ils y gagnent un boost de puissance massif. C'est pourquoi <strong>Staross</strong> est Tier S sur cette carte.</li>
              </ul>
              
              <h3>⚔️ Recommandations de Composition d'Équipe</h3>
              <h4>L'équipe "Forces Spéciales"</h4>
              <p>Si un Pokémon utilise ses poings, ses griffes ou son corps pour attaquer, laissez-le au PC.</p>
              <ul>
                <li><strong>Lugulabre :</strong> Indispensable pour les types Acier.</li>
                <li><strong>Staross / Tortank :</strong> Indispensables pour les types Roche/Sol.</li>
                <li><strong>Lucario :</strong> Doit être orienté Attaque Spéciale (Aurasphère).</li>
                <li><strong>Blizzaroi :</strong> La Grêle passive achève les ennemis avec Fermeté.</li>
                <li><strong>Magnézone :</strong> Piège les ennemis Acier (Magnépiège) et inflige des dégâts Électriques Spéciaux.</li>
              </ul>
            </div>
          `,
    }
]

// 按路线分组
export const routesByGroup = {
    'Route 1': stages.filter(s => s.routeNumber.startsWith('1-')),
    'Route 2': stages.filter(s => s.routeNumber.startsWith('2-')),
    'Route 3': stages.filter(s => s.routeNumber.startsWith('3-'))
}

// 导出所有关卡
export const routes = stages

// Difficulty colors mapping
export const difficultyColors = {
    'Easy': '#5cb85c',
    'Medium': '#f0ad4e',
    'Hard': '#d9534f',
    'Very Hard': '#8b0000',
    'Extreme': '#4a148c'
}
