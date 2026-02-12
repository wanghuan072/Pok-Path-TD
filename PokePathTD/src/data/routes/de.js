export const stages = [
    {
        id: 'how-to-beat-route-1-1-articuno',
        routeNumber: '1-1',
        name: 'PokePath TD Route 1-1 Guide: Das beste Team gegen Arktos',
        mapImage: '/images/map-route/1-1.png',
        stars: 13,
        difficulty: 'Einfach',
        difficultyLevel: 1,
        terrain: ['Feld', 'Gras', 'Wasser'],
        description: 'Route 1-1 ist die erste große Hürde in PokePath TD. Während die frühen Wellen einfach sind, bleiben viele Spieler bei Welle 100 stecken, wenn das legendäre Pokémon Arktos erscheint. Arktos hat massive KP und kann deine Türme einfrieren. Um es zu besiegen, musst du das einzigartige Terrain der Karte meistern: eine riesige Wasserzone im Zentrum und einen U-förmigen Landpfad am unteren Rand.',
        totalWaves: 100,
        recommendedTypes: ['Wasser', 'Eis', 'Unlicht', 'Normal', 'Pflanze', 'Boden'],
        recommendedPokemon: ['Amoroso', 'Corasonn', 'Admurai', 'Impergator', 'Lapras', 'Remoraid', 'Snibunna', 'Porenta', 'Sonnflora', 'Stalobor', 'Kramshef'],
        strategies: ['Wasserfalle', 'Kontrolle & AOE', 'Kill Zone'],
        playstyle: 'Hybrid Wasser/Land',
        tips: [
            'Platziere Wassereinheiten im zentralen See – sie können sowohl den oberen als auch den unteren Pfad angreifen',
            'Corasonn ist der MVP – seine 300er-Reichweite verlangsamt fast die gesamte Karte',
            'Platziere Snibunna auf dem unteren Graspfad zusammen mit Porenta und Sonnflora für Buffs',
            'Kramshef MUSS auf das einzelne Berg-Feld für Anti-Unsichtbarkeits-Abdeckung',
            'Wassereinheiten im See verdoppeln effektiv ihren DPS, da sie beide Pfade abdecken',
            'Nutze Lapras für eine Paralyse-Chance, um Arktos zu stoppen'
        ],
        teamComposition: {
            early: ['Amoroso', 'Corasonn'],
            mid: ['Amoroso', 'Corasonn', 'Lapras', 'Remoraid', 'Snibunna'],
            late: ['Amoroso', 'Corasonn', 'Admurai', 'Impergator', 'Lapras', 'Remoraid', 'Snibunna', 'Porenta', 'Sonnflora', 'Stalobor', 'Kramshef']
        },
        seo: {
            title: 'PokePath TD Route 1-1 Guide: Das beste Team gegen Arktos',
            description: 'Probleme auf Route 1-1? Hier ist der ultimative Guide, um Welle 100 und Arktos zu besiegen. Lerne die beste Platzierung für Wasser-/Land-Teams und wie du unsichtbare Gegner konterst.',
            keywords: 'pokepathtd route 1-1, arktos besiegen pokepathtd, route 1-1 bestes team, pokepathtd wasser strategie'
        },
        terrainAnalysis: {
            roads: [
                { description: 'U-förmiger Landpfad am unteren Rand – die Kill Zone', length: 'Lang', chokepoints: 2 },
                { description: 'Oberer Pfad um den zentralen See', length: 'Mittel', chokepoints: 1 },
                { description: 'Hauptpfad, der sich um den zentralen See windet', length: 'Lang', chokepoints: 2 }
            ],
            water: [
                { description: 'Riesige Wasserzone im Zentrum – Wasserfalle', type: 'Tiefes Wasser', strategicValue: 'Sehr hoch', benefits: ['Wasser-Pokémon erhalten 2x Power-Bonus', 'Einheiten hier können beide Pfade angreifen', 'Verdoppelt effektiv den DPS'] },
                { description: 'Kleine Wasserstellen in Pfadnähe', type: 'Flaches Wasser', strategicValue: 'Mittel', benefits: ['Wasser-Pokémon erhalten Power-Bonus'] }
            ],
            mountains: [
                { description: 'Einzelnes, entscheidendes Berg-Feld auf der rechten Seite', height: 'Hoch', strategicValue: 'Sehr hoch', benefits: ['+30% Reichweiten-Bonus', 'Einziger Spot für erhöhte Sicht', 'Kramshef muss hier platziert werden'] }
            ],
            grass: [
                { description: 'Unterer U-Pfad – Kill Zone für Landeinheiten', coverage: 'Hoch', benefits: ['Pflanzen-Pokémon erhalten Power-Bonus', 'Perfekt für Snibunna, Porenta, Sonnflora'] },
                { description: 'Grasfelder rund um den See', coverage: 'Hoch', benefits: ['Pflanzen-Pokémon erhalten Power-Bonus'] }
            ],
            chokepoints: [
                { location: 'Zentraler See (Wasserzone)', description: 'Riesige Wasserzone, in der Wassereinheiten beide Pfade angreifen können', priority: 'Sehr hoch' },
                { location: 'Unterer U-Pfad (Kill Zone)', description: 'Wo schwere Angreifer geschwächte Gegner erledigen', priority: 'Sehr hoch' },
                { location: 'Berg-Feld (Rechte Seite)', description: 'Einziger Spot für erhöhte Sicht – Kramshef muss hier platziert werden', priority: 'Sehr hoch' }
            ]
        },
        detailsHtml: `
            <div class="route-guide">
              <p>Route 1-1 ist die erste große Hürde in PokePath TD. Während die frühen Wellen einfach sind, bleiben viele Spieler bei Welle 100 stecken, wenn das legendäre Pokémon Arktos erscheint.</p>
              <p>Arktos hat massive KP und kann deine Türme einfrieren. Um es zu besiegen, musst du das einzigartige Terrain der Karte meistern: eine riesige Wasserzone im Zentrum und einen U-förmigen Landpfad am unteren Rand.</p>
              <p>In diesem Guide zeigen wir dir die exakte 10-Einheiten-Teamzusammensetzung, die du brauchst, um Route 1-1 zu dominieren, indem du sowohl Wasser- als auch Landeinheiten für maximale Effizienz nutzt.</p>
              
              <h3>🗺️ Karten-Analyse: Die „Wasserfalle“</h3>
              <p>Der Schlüssel zu Route 1-1 ist der zentrale See.</p>
              <ul>
                <li><strong>Wassereinheiten (Blaue Zone):</strong> Einheiten, die hier platziert werden, können Gegner auf dem oberen UND dem unteren Pfad angreifen. Dies verdoppelt effektiv ihren DPS.</li>
                <li><strong>Landeinheiten (Grüne Zone):</strong> Der untere Pfad ist deine „Kill Zone“. Hier solltest du deine schweren Angreifer platzieren, um geschwächte Gegner zu erledigen.</li>
                <li><strong>Berg (Rote Zone):</strong> Es gibt ein entscheidendes Berg-Feld auf der rechten Seite. Dies ist der einzige Ort für erhöhte Sicht.</li>
              </ul>
              
              <h3>🏆 Das beste Team für Route 1-1 (10-Einheiten-Setup)</h3>
              <p>Dieses Lineup ist für Level 100 Accounts optimiert, funktioniert aber auch auf niedrigeren Levels hervorragend.</p>
              
              <h4>1. Der Trupp Wasser (Kontrolle & AOE)</h4>
              <p>Platziere diese 5 Einheiten im zentralen See (von links nach rechts):</p>
              <ul>
                <li><strong>Amoroso (Links):</strong> Mit der Fähigkeit Wassertempo verdoppelt sich seine Angriffsgeschwindigkeit im Wasser. Es wirkt wie ein Maschinengewehr für frühe Wellen.</li>
                <li><strong>Corasonn (Mitte-Links):</strong> Der MVP. Sein ringförmiger Angriff hat eine massive Reichweite (300 auf Lv 100). Es verlangsamt fast die gesamte Karte.</li>
                <li><strong>Admurai / Impergator (Mitte):</strong> Deine wasserbasierten Boss-Killer.</li>
                <li><strong>Lapras (Mitte-Rechts):</strong> Fügt eine Paralyse-Chance (Stun) hinzu. Dies ist entscheidend, um Arktos zu stoppen, falls er an deinen Verlangsamungen vorbeikommt.</li>
                <li><strong>Remoraid (Rechts):</strong> Der Scharfschütze. Mit einer Reichweite von 480 kann es Gegner sofort beim Erscheinen treffen.</li>
              </ul>
              
              <h4>2. Der Trupp Land (Die „Kill Zone“)</h4>
              <p>Platziere diese Einheiten auf dem unteren Graspfad:</p>
              <ul>
                <li><strong>6. Snibunna (Mitte):</strong> Dein Haupt-DPS. Auf Lv 100 hat es eine Krit-Rate von 65 % und verursacht doppelten Schaden bei kritischen Treffern.</li>
                <li><strong>7. Porenta (Links von Snibunna):</strong> Essentieller Buffer. Es erhöht Snibunnas kritischen Schaden um 33 %.</li>
                <li><strong>8. Sonnflora (Rechts von Snibunna):</strong> Essentieller Buffer. Es bietet eine +20 % Schadens-Aura für Snibunna und nahegelegene Wassereinheiten.</li>
                <li><strong>9. Stalobor (Ecke):</strong> Zerschmettert die gegnerische Rüstung.</li>
              </ul>
              
              <h4>3. Die Anti-Unsichtbarkeits-Verteidigung</h4>
              <ul>
                <li><strong>Kramshef (Berg-Feld):</strong> Du MUSST Kramshef auf das einzelne Berg-Feld rechts setzen.</li>
                <li><strong>Warum?</strong> Route 1-1 hat in späteren Wellen unsichtbare Gegner (wie Keckleon). Kramshef ist die beste Einheit, um sie aufzudecken, bevor sie durchbrechen.</li>
              </ul>
              
              <h3>⚔️ Boss-Strategie: Wie man Arktos besiegt (Welle 100)</h3>
              <p>Arktos ist ein robuster Flug/Eis-Typ.</p>
              <ul>
                <li><strong>Schwäche:</strong> Es ist auf Bewegung angewiesen. Wenn du es stoppen kannst, kannst du es besiegen.</li>
              </ul>
              <p><strong>Die Strategie:</strong></p>
              <ul>
                <li><strong>Verlangsamen:</strong> Sobald Arktos erscheint, wird Corasonn seine Bewegungsgeschwindigkeit reduzieren.</li>
                <li><strong>Stun Lock:</strong> Lapras und Ampharos (falls du eines mitnimmst) werden versuchen, es zu paralysieren.</li>
                <li><strong>Der Nuke:</strong> Sobald es den unteren Pfad erreicht, kommt es in Snibunnas Reichweite. Mit den Buffs von Sonnflora und Porenta kann Snibunna Arktos' Lebensbalken in Sekunden zerfetzen.</li>
              </ul>
              <p><strong>Pro-Tipp:</strong> Wenn du Gold farmst, kannst du Ditto im Wasser nutzen, um Mauzi zu kopieren und Arktos für extra Cash zu treffen, bevor du es besiegst!</p>
              
              <img src="/images/map-route/1-1-01.png" alt="Route 1-1 Karte" class="route-map">
      
              <h3>🗺️ Terrain-Analyse</h3>
              <p>Route 1-1 bietet ein einzigartiges „Wasserfalle“-Layout mit einem großen zentralen See und einem U-förmigen Landpfad, was strategische Möglichkeiten für Wasser- und Landeinheiten schafft.</p>
              
              <h4>Straßen & Pfade</h4>
              <ul>
                <li><strong>U-förmiger Landpfad:</strong> Am unteren Rand – die Kill Zone (Lang, 2 Chokepoints)</li>
                <li><strong>Oberer Pfad:</strong> Um den zentralen See (Mittel, 1 Chokepoint)</li>
                <li><strong>Hauptpfad:</strong> Windet sich um den zentralen See (Lang, 2 Chokepoints)</li>
              </ul>
              
              <h4>Wasserbereiche</h4>
              <ul>
                <li><strong>Riesige Wasserzone:</strong> Im Zentrum – Wasserfalle (Sehr hoher strategischer Wert) – Wasser-Pokémon erhalten 2x Power-Bonus, Einheiten können beide Pfade angreifen, verdoppelt effektiv DPS</li>
                <li><strong>Kleine Wasserstellen:</strong> In Pfadnähe (Mittlerer strategischer Wert) – Wasser-Pokémon erhalten Power-Bonus</li>
              </ul>
              
              <h4>Berge & Höhenlagen</h4>
              <ul>
                <li><strong>Einzelnes Berg-Feld:</strong> Auf der rechten Seite (Sehr hoher strategischer Wert) – +30 % Reichweiten-Bonus, einziger Spot für erhöhte Sicht, Kramshef muss hier platziert werden</li>
              </ul>
              
              <h4>Gras & Vegetation</h4>
              <ul>
                <li><strong>Unterer U-Pfad:</strong> Kill Zone für Landeinheiten (Hohe Abdeckung) – Pflanzen-Pokémon erhalten Power-Bonus, perfekt für Snibunna, Porenta, Sonnflora</li>
                <li><strong>Grasfelder:</strong> Rund um den See (Hohe Abdeckung) – Pflanzen-Pokémon erhalten Power-Bonus</li>
              </ul>
              
              <h4>Strategische Chokepoints</h4>
              <ul>
                <li><strong>Zentraler See (Wasserzone):</strong> Große Wasserzone, in der Wassereinheiten beide Pfade angreifen können (Sehr hohe Priorität)</li>
                <li><strong>Unterer U-Pfad (Kill Zone):</strong> Wo schwere Angreifer geschwächte Gegner erledigen (Sehr hohe Priorität)</li>
                <li><strong>Berg-Feld (Rechte Seite):</strong> Einziger Spot für erhöhte Sicht – Kramshef muss hier platziert werden (Sehr hohe Priorität)</li>
              </ul>
              
              <h3>⚔️ Team-Zusammensetzung</h3>
              <h4>Early Game (Wellen 1-50)</h4>
              <p>Beginne mit Amoroso und Corasonn im zentralen See. Amorosos Wassertempo verdoppelt die Angriffsgeschwindigkeit im Wasser.</p>
              
              <h4>Mid Game (Wellen 51-99)</h4>
              <p>Füge Lapras und Remoraid zum Wassertrupp hinzu. Platziere Snibunna auf dem unteren Pfad. Baue deine Kontroll- und DPS-Fähigkeiten aus.</p>
              
              <h4>Late Game (Welle 100)</h4>
              <p>Setze das komplette 10-Einheiten-Team ein: Wassertrupp (Amoroso, Corasonn, Admurai/Impergator, Lapras, Remoraid) im See, Landtrupp (Snibunna, Porenta, Sonnflora, Stalobor) unten, und Kramshef auf dem Berg.</p>
            </div>
          `,
    },
    {
        id: 'how-to-beat-route-1-2-zapdos-wave-100',
        routeNumber: '1-2',
        name: 'PokePath TD Route 1-2 Guide: Zapdos besiegen (Welle 100 Strategie)',
        mapImage: '/images/map-route/1-2.png',
        stars: 2,
        difficulty: 'Einfach',
        difficultyLevel: 1,
        terrain: ['Feld', 'Gras'],
        description: 'Route 1-2 ist berüchtigt für ihre geteilten Pfade und den Mangel an Wasser, aber die wahre Herausforderung ist Welle 100: Zapdos. Dieser legendäre Vogel ist schnell, robust und immun gegen viele Crowd-Control-Effekte. Wenn dein Standard-AOE-Team die Wellen 1-99 schafft, aber am Boss scheitert, nutze die taktische „Wummer-Swap“-Strategie.',
        totalWaves: 100,
        recommendedTypes: ['Wasser', 'Eis', 'Normal', 'Pflanze'],
        recommendedPokemon: ['Wummer', 'Porenta', 'Sonnflora', 'Snibunna', 'Ditto', 'Corasonn', 'Maracamba'],
        strategies: ['Wummer-Nuke', 'Spawn Camping', 'Taktischer Swap'],
        playstyle: 'Boss Swap Strategie',
        tips: [
            'Nutze die Infinite Retry Mechanik – wenn du bei Welle 100 verlierst, kannst du sofort neu starten',
            'Entlasse Maracamba bei Welle 100 und platziere Wummer am Spawnpunkt',
            'Platziere Porenta und Sonnflora neben Wummer für maximale Buffs',
            'Bosse sind niemals unsichtbar – du kannst Kramshef für extra DPS entlassen',
            'Stelle Wummers Zielerfassung auf „Stark“ oder „Erster“ für optimalen Schaden',
            'Nutze Snibunna + Ditto im Mittelfeld als Sicherheitsnetz'
        ],
        teamComposition: {
            early: ['Maracamba', 'Kramshef'],
            mid: ['Maracamba', 'Stolloss', 'Corasonn', 'Snibunna'],
            late: ['Wummer', 'Porenta', 'Sonnflora', 'Snibunna', 'Ditto', 'Corasonn']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Geteilte Pfade mit Konvergenz im Zentrum', length: 'Lang', chokepoints: 2 },
                { description: 'Gerader Hauptpfad durch die Mitte', length: 'Lang', chokepoints: 1 },
                { description: 'Kurviger Pfad auf der linken Seite', length: 'Mittel', chokepoints: 0 }
            ],
            water: [],
            mountains: [
                { description: 'Berggebiete für Fernkampfeinheiten', height: 'Mittel', strategicValue: 'Hoch', benefits: ['+20% Reichweiten-Bonus', 'Gut für Kramshef oder Aerodactyl'] }
            ],
            grass: [
                { description: 'Ausgedehnte Grasfelder, die fast die ganze Karte bedecken', coverage: 'Sehr hoch', benefits: ['Pflanzen-Pokémon erhalten 2x Power-Bonus'] },
                { description: 'Ackerflächen, die zusätzliches Grasterrain bieten', coverage: 'Mittel', benefits: ['Pflanzen-Pokémon erhalten Power-Bonus'] },
                { description: 'Spawnbereich unten links', coverage: 'Gering', benefits: ['Perfekt für die Platzierung von Wummer'] }
            ],
            chokepoints: [
                { location: 'Spawnpunkt unten links', description: 'Wo Zapdos erscheint – perfekt für Spawn Camping', priority: 'Sehr hoch' },
                { location: 'Zentrale Gabelung', description: 'Wo die Pfade zusammenlaufen – Sicherheitszone', priority: 'Sehr hoch' },
                { location: 'Zentrale Pfadverengung', description: 'Der Hauptpfad verengt sich in der Mitte', priority: 'Hoch' }
            ]
        },
        seo: {
            title: 'PokePath TD Route 1-2 Guide: Zapdos besiegen (Welle 100 Strategie)',
            description: 'Probleme bei Zapdos? Lerne die „Wummer-Swap“-Strategie, um Route 1-2 zu schlagen. Wir erklären die Infinite Retry Mechanik und das beste Team gegen den Welle 100 Boss.',
            keywords: 'pokepathtd route 1-2, zapdos besiegen pokepathtd, welle 100 retry mechanik, wummer boss killer, pokepathtd guide'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>Route 1-2 ist berüchtigt für ihre geteilten Pfade und den Mangel an Wasser, aber die wahre Herausforderung ist Welle 100: Zapdos. Dieser legendäre Vogel ist schnell, robust und immun gegen viele Crowd-Control-Effekte.</p>
              <p>Wenn dein Standard-AOE-Team (Maracamba/Stolloss) die Wellen 1-99 schafft, aber am Boss scheitert, keine Sorge. Du musst nicht den ganzen Run neu starten.</p>
              <p>In diesem Guide nutzen wir die „Infinite Retry“-Mechanik des Spiels und einen taktischen „Wummer-Swap“, um Zapdos zu vernichten.</p>
              
              <h3>⚙️ Wichtige Spielmechaniken, die du kennen musst</h3>
              <p>Bevor wir das Team besprechen, musst du zwei entscheidende Mechaniken von PokePath TD verstehen:</p>
              
              <h4>1. Die „Infinite Boss“-Mechanik</h4>
              <ul>
                <li>Wenn du gegen den Boss von Welle 100 verlierst, endet dein Run NICHT. Das Spiel startet Welle 100 einfach neu.</li>
                <li><strong>Was das bedeutet:</strong> Du kannst versuchen, Zapdos so oft zu besiegen, wie du willst. Wenn du scheiterst, passe dein Team an, verschiebe Einheiten und versuche es sofort erneut. Es gibt keine Strafe!</li>
              </ul>
      
              <img src="/images/map-route/1-2-02.png" alt="Route 1-2 Karte" class="route-map">
              
              <h4>2. Die „Retire“ (Entlassen)-Mechanik</h4>
              <ul>
                <li>Wenn du eine Einheit austauschst (Retire), erhältst du KEIN Gold zurück.</li>
                <li><strong>Strategie:</strong> Bis Welle 100 solltest du genug Gold angesammelt haben. Habe keine Angst, deine Wave-Clearer (wie Maracamba) zu entlassen, um Platz für Boss-Killer (wie Wummer) zu machen. Du tauschst Geld gegen pure Kraft.</li>
              </ul>
              
              <h4>3. Bosse sind NIEMALS unsichtbar</h4>
              <ul>
                <li>Zapdos (und alle Bosse der Welle 100) haben nicht die Eigenschaft „Unsichtbar“.</li>
                <li><strong>Optimierung:</strong> Du kannst dein Kramshef (Anti-Unsichtbar) für die letzte Welle sicher entlassen und durch eine andere High-DPS-Einheit wie Aerodactyl oder Libelldra für zusätzlichen Schaden ersetzen.</li>
              </ul>
              
              <h3>⚔️ Die Strategie: Der „Wummer-Nuke“</h3>
              <p>Zapdos ist schnell. Wir müssen sofort massiven Schaden verursachen. Unsere Strategie konzentriert sich auf ein „Spawn Camping“-Setup unten links.</p>
              
              <h4>Schritt 1: Das Setup (Ecke unten links)</h4>
              <p>Hier erscheint Zapdos. Wir wollen ihn hart treffen, bevor er sich überhaupt bewegt.</p>
              <ul>
                <li><strong>Der Swap:</strong> Entlasse dein Maracamba (AOE) und platziere Wummer (Lv 100).</li>
                <li><strong>Warum?</strong> Wummer hat 1.950 Power und verursacht doppelten Schaden bei kritischen Treffern. Es ist der stärkste Einzelziel-Burst im Spiel.</li>
                <li><strong>Die Buffs:</strong> Platziere Porenta (+33 % Krit-Schaden) und Sonnflora (+20 % Schaden) direkt neben Wummer.</li>
                <li><strong>Ergebnis:</strong> Zapdos kassiert massive kritische Raketen in dem Moment, in dem er spawnt, und verliert sofort 30-50 % seiner KP.</li>
              </ul>
              
              <h4>Schritt 2: Das Sicherheitsnetz (Mittelfeld)</h4>
              <p>Falls Zapdos den initialen Nuke überlebt, bewegt er sich zur zentralen Gabelung.</p>
              <ul>
                <li><strong>Snibunna:</strong> Platziere dein Snibunna hier, um sowohl den oberen als auch den unteren Pfad abzudecken.</li>
                <li><strong>Ditto:</strong> Kopiere Snibunna und platziere es in der Nähe. Zwei Snibunnas sind besser als eines.</li>
                <li><strong>Corasonn:</strong> Bietet eine 300er-Reichweite Verlangsamung. Auch wenn Zapdos schnell ist, gibt dies deinen Snibunnas mehr Zeit für Treffer.</li>
              </ul>
              
              <h4>Schritt 3: Optimierung (Falls du scheiterst)</h4>
              <p>Wenn du ihn immer noch nicht besiegen kannst:</p>
              <ul>
                <li>Lass die Welle neu starten (Auto-Retry).</li>
                <li><strong>Kramshef entlassen:</strong> Da Zapdos nicht unsichtbar ist, tausche Kramshef gegen eine andere High-DPS-Einheit auf dem Berg aus.</li>
                <li><strong>Zielerfassung prüfen:</strong> Stelle sicher, dass Wummer auf „Stark“ oder „Erster“ eingestellt ist.</li>
              </ul>
              
              <h3>📝 Zusammenfassung: Der Siegeszug</h3>
              <ol>
                <li>Beende die Wellen 1-99 mit deinem Standard-AOE-Team.</li>
                <li>Pausiere bei Welle 100.</li>
                <li>Entlasse Maracamba/Kramshef.</li>
                <li>Platziere Wummer + Buffs am Spawnpunkt.</li>
                <li>Platziere Snibunna + Ditto in der Mitte.</li>
                <li>Weiterklicken und gewinnen.</li>
              </ol>
              <p>Diese Strategie nutzt Level 100 Stats. Willst du das volle Potenzial dieser Einheiten sehen? Schau in unsere <a href="/wiki">Wiki-Datenbank</a>.</p>
              
              <img src="/images/map-route/1-2-01.png" alt="Route 1-2 Karte" class="route-map">
      
              <h3>🗺️ Terrain-Analyse</h3>
              <p>Route 1-2 bietet geteilte Pfade und weite Grasfelder ohne Wasser. Strategische Eckpfeiler sind der Spawnpunkt und die zentrale Zusammenführung.</p>
              
              <h4>Straßen & Pfade</h4>
              <ul>
                <li><strong>Geteilte Pfade:</strong> Mit Konvergenz im Zentrum (Lang, 2 Chokepoints)</li>
                <li><strong>Hauptpfad:</strong> Gerade durch die Mitte (Lang, 1 Chokepoint)</li>
                <li><strong>Linker Pfad:</strong> Kurvig auf der linken Seite (Mittel, 0 Chokepoints)</li>
              </ul>
              
              <h4>Berge & Höhenlagen</h4>
              <ul>
                <li><strong>Berggebiete:</strong> Für Fernkampfeinheiten (Hoher strategischer Wert) – +20 % Reichweiten-Bonus, gut für Kramshef oder Aerodactyl</li>
              </ul>
              
              <h4>Gras & Vegetation</h4>
              <ul>
                <li><strong>Ausgedehnte Grasfelder:</strong> Decken fast die ganze Karte ab (Sehr hohe Abdeckung) – Pflanzen-Pokémon erhalten 2x Power-Bonus</li>
                <li><strong>Ackerflächen:</strong> Bieten zusätzliches Grasterrain (Mittlere Abdeckung) – Pflanzen-Pokémon erhalten Power-Bonus</li>
                <li><strong>Spawnbereich unten links:</strong> Geringe Abdeckung – perfekt für Wummer</li>
              </ul>
              
              <h4>Strategische Chokepoints</h4>
              <ul>
                <li><strong>Spawnpunkt unten links:</strong> Wo Zapdos erscheint – perfekt für Spawn Camping (Sehr hohe Priorität)</li>
                <li><strong>Zentrale Gabelung:</strong> Wo Pfade zusammenlaufen – Sicherheitszone (Sehr hohe Priorität)</li>
                <li><strong>Zentrale Pfadverengung:</strong> Hauptpfad verengt sich (Hohe Priorität)</li>
              </ul>
              
              <h3>⚔️ Team-Zusammensetzung</h3>
              <h4>Early Game (Wellen 1-50)</h4>
              <p>Nutze Maracamba für AOE Wave-Clear und Kramshef für Anti-Unsichtbarkeits-Abdeckung.</p>
              
              <h4>Mid Game (Wellen 51-99)</h4>
              <p>Weiterhin Maracamba und Stolloss für AOE-Schaden. Füge Corasonn und Snibunna für Kontrolle und DPS hinzu.</p>
              
              <h4>Late Game (Welle 100)</h4>
              <p>Führe den „Wummer-Swap“ durch: Entlasse Maracamba und platziere Wummer + Porenta + Sonnflora am Spawn. Behalte Snibunna + Ditto + Corasonn in der Mitte.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-1-3-moltres',
        routeNumber: '1-3',
        name: 'PokePath TD Route 1-3 Guide: Bestes Team gegen Lavados',
        mapImage: '/images/map-route/1-3.png',
        stars: 300,
        starsSecondary: 0,
        difficulty: 'Mittel',
        difficultyLevel: 2,
        terrain: ['Feld', 'Berg', 'Wasser', 'Gras'],
        description: 'Route 1-3 ist die letzte Etappe der ersten Region und bietet einen Mix aus Wasser-, Gras- und Bergterrain. Die ultimative Herausforderung ist Welle 100: Lavados, der legendäre Feuervogel. Während Wasser-Typen wie die offensichtliche Wahl erscheinen, liegt das wahre Geheimnis zum Sieg auf dieser Karte in einem spezialisierten Hybrid-Kontroll-Team.',
        totalWaves: 100,
        recommendedTypes: ['Unlicht', 'Eis', 'Elektro', 'Stahl', 'Pflanze'],
        recommendedPokemon: ['Absol', 'Ditto', 'Snibunna', 'Corasonn', 'Tentantel', 'Ampharos', 'Sonnflora', 'UHaFnir', 'Kramshef'],
        strategies: ['Doppel-Absol-Fixierung', 'Kontrolle & Burst', 'Drei-Schichten-Verteidigung'],
        playstyle: 'Hybrid-Kontrolle',
        tips: [
            'Platziere Absol und Ditto auf dem Berg oben links für frühe Fixierung und skalierenden Schaden',
            'Nutze Corasonn und Tentantel an der mittleren Kreuzung für globale Verlangsamung',
            'Setze Snibunna und Sonnflora unten rechts in der Kill-Zone ein',
            'Stelle Absol und Ditto auf Zielpriorität "Stark", um Lavados sofort zu fixieren',
            'Das Doppel-Absol-Setup schmilzt Lavados, bevor er die Mitte erreicht'
        ],
        teamComposition: {
            early: ['UHaFnir', 'Corasonn'],
            mid: ['Absol', 'Ditto', 'Tentantel', 'Ampharos'],
            late: ['Absol', 'Ditto', 'Corasonn', 'Tentantel', 'Ampharos', 'Snibunna', 'Sonnflora', 'UHaFnir', 'Kramshef']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Pfade, die an der mittleren Kreuzung konvergieren', length: 'Lang', chokepoints: 2 },
                { description: 'Pfad vom Spawn zur Kill-Zone', length: 'Mittel', chokepoints: 1 }
            ],
            water: [
                { description: 'Wasserbereiche bieten Terrain-Boni', type: 'Wasser', strategicValue: 'Mittel', benefits: ['Wasser-Pokémon erhalten Power-Bonus'] }
            ],
            mountains: [
                { description: 'Berg (Oben Links) - Perfekt für Langstrecken-Scharfschützen und Anti-Unsichtbarkeits-Einheiten', height: 'Sehr Hoch', strategicValue: 'Sehr Hoch', benefits: ['+40% Reichweiten-Bonus', 'Perfekt für Absol und UHaFnir', 'Kann Gegner früh fixieren'] },
                { description: 'Felsklippen entlang der Pfade', height: 'Mittel', strategicValue: 'Hoch', benefits: ['+15% Reichweiten-Bonus'] }
            ],
            grass: [
                { description: 'Grasflächen inklusive der Kill-Zone unten rechts', coverage: 'Mittel', benefits: ['Pflanzen-Pokémon erhalten Power-Bonus', 'Perfekt für Sonnflora-Platzierung'] },
                { description: 'Verstreute Vegetationsflächen', coverage: 'Niedrig', benefits: ['Pflanzen-Pokémon erhalten Power-Bonus'] }
            ],
            chokepoints: [
                { location: 'Engpass (Mitte)', description: 'Wo Pfade konvergieren, ideal zum Verlangsamen von Gegnern', priority: 'Sehr Hoch' },
                { location: 'Berg (Oben Links)', description: 'Perfekt für Langstrecken-Scharfschützen', priority: 'Sehr Hoch' },
                { location: 'Kill-Zone (Unten Rechts)', description: 'Der letzte Abschnitt, in dem schwere Angreifer den Boss erledigen', priority: 'Sehr Hoch' }
            ]
        },
        seo: {
            title: 'PokePath TD Route 1-3 Guide: Bestes Team gegen Lavados',
            description: 'Probleme auf Route 1-3? Nutze unseren Level 100 Guide, um Lavados zu besiegen. Lerne die "Doppel-Absol-Fixierung" und wie man globale Verlangsamer einsetzt.',
            keywords: 'pokepathtd route 1-3, lavados besiegen pokepathtd, pokepathtd bestes team, absol level 100, corasonn slow build'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>Route 1-3 ist die letzte Etappe der ersten Region und bietet einen Mix aus Wasser-, Gras- und Bergterrain. Die ultimative Herausforderung ist Welle 100: Lavados, der legendäre Feuervogel.</p>
              <p>Während Wasser-Typen wie die offensichtliche Wahl erscheinen, liegt das wahre Geheimnis zum Sieg auf dieser Karte in einem spezialisierten Hybrid-Kontroll-Team.</p>
              <p>In diesem Guide enthüllen wir die Level 100 "Doppel-Absol-Fixierung"-Strategie, die Lavados durch Schadensskalierung und globale Crowd-Control vernichtet.</p>
              
              <h3>🗺️ Kartenstrategie: Den Fluss kontrollieren</h3>
              <p>Route 1-3 hat drei unterschiedliche Zonen, die du nutzen musst:</p>
              <ul>
                <li><strong>Berg (Oben Links):</strong> Perfekt für Langstrecken-Scharfschützen und Anti-Unsichtbarkeits-Einheiten.</li>
                <li><strong>Engpass (Mitte):</strong> Wo Pfade konvergieren, ideal zum Verlangsamen von Gegnern.</li>
                <li><strong>Kill-Zone (Unten Rechts):</strong> Der letzte Abschnitt, in dem deine schweren Angreifer den Boss erledigen.</li>
              </ul>
      
               <img src="/images/map-route/1-3-01.png" alt="Route 1-3 Karte" class="route-map">
              
              <h3>🏆 Die beste Team-Zusammensetzung (10-Einheiten-Setup)</h3>
              <p>Wir haben das perfekte Team zusammengestellt, um Lavados' hoher Geschwindigkeit und Gesundheit entgegenzuwirken.</p>
              
              <h4>1. Die Scharfschützen in der Höhe (Berg Oben Links)</h4>
              <ul>
                <li><strong>Absol (Level 100):</strong>
                  <ul>
                    <li><strong>Rolle:</strong> Schadensskalierung.</li>
                    <li><strong>Passiv:</strong> Verursacht mit jedem aufeinanderfolgenden Treffer auf dasselbe Ziel mehr Schaden.</li>
                    <li><strong>Warum?</strong> Auf dem Berg platziert, fixiert Absol Lavados frühzeitig und stapelt unendlich viel Schaden.</li>
                  </ul>
                </li>
                <li><strong>Ditto (kopiert Absol):</strong>
                  <ul>
                    <li><strong>Rolle:</strong> Der Multiplikator.</li>
                    <li><strong>Warum?</strong> Durch das Kopieren von Absol hast du ZWEI Einheiten, die gleichzeitig Schaden auf Lavados stapeln. Dies schmilzt die KP des Bosses, bevor er überhaupt die Mitte erreicht.</li>
                  </ul>
                </li>
                <li><strong>UHaFnir / Kramshef:</strong>
                  <ul>
                    <li><strong>Rolle:</strong> Anti-Unsichtbar / AOE.</li>
                    <li><strong>Warum?</strong> Essentiell zum Klären unsichtbarer Mobs in früheren Wellen und zur Bereitstellung von Langstrecken-AOE-Unterstützung.</li>
                  </ul>
                </li>
              </ul>
              
              <h4>2. Die Kontrolle der Mittellinie (Globaler Slow)</h4>
              <ul>
                <li><strong>Corasonn:</strong>
                  <ul>
                    <li><strong>Rolle:</strong> Globaler Slow.</li>
                    <li><strong>Passiv:</strong> Auf Level 100 verlangsamt sein Ring-Angriff mit 300 Reichweite fast die gesamte Karte.</li>
                    <li><strong>Warum?</strong> Lavados ist schnell. Corasonn zwingt ihn zum Kriechen.</li>
                  </ul>
                </li>
                <li><strong>Tentantel:</strong>
                  <ul>
                    <li><strong>Rolle:</strong> Sekundäre Verlangsamung.</li>
                    <li><strong>Passiv:</strong> Angriffe wenden einen Verlangsamungseffekt an.</li>
                    <li><strong>Warum?</strong> Stapelt sich mit Corasonn, um sicherzustellen, dass Gegner permanent behindert werden.</li>
                  </ul>
                </li>
                <li><strong>Ampharos:</strong>
                  <ul>
                    <li><strong>Rolle:</strong> Harter Stun.</li>
                    <li><strong>Passiv:</strong> 30% Chance auf Paralyse.</li>
                    <li><strong>Warum?</strong> Ein entscheidender Stun kann Lavados direkt in der Kill-Zone stoppen.</li>
                  </ul>
                </li>
              </ul>
              
              <h4>3. Die "Kill-Zone" (Unten Rechts)</h4>
              <ul>
                <li><strong>Snibunna:</strong>
                  <ul>
                    <li><strong>Rolle:</strong> Der Finisher.</li>
                    <li><strong>Passiv:</strong> 65% Krit-Rate + Doppelter Krit-Schaden.</li>
                    <li><strong>Warum?</strong> Jeder Boss, der das Absol-Sperrfeuer überlebt, wird von Snibunnas kritischen Treffern erledigt.</li>
                  </ul>
                </li>
                <li><strong>Sonnflora:</strong>
                  <ul>
                    <li><strong>Rolle:</strong> Schadens-Buffer.</li>
                    <li><strong>Passiv:</strong> +20% Schadens-Aura.</li>
                    <li><strong>Warum?</strong> Boostet Snibunna und nahegelegene Einheiten für maximalen Burst.</li>
                  </ul>
                </li>
              </ul>
              
              <h3>⚔️ Das Kerngeheimnis: Warum dieses Team gewinnt</h3>
              <p>Das Geheimnis zum Sieg auf Route 1-3 ist nicht nur das Spammen von Wasser-Pokémon. Es ist die "Drei-Schichten-Verteidigung":</p>
              <ul>
                <li><strong>Schicht 1 (Die Fixierung):</strong> Das Doppel-Absol-Setup beginnt Lavados zu beschädigen, sobald er erscheint. Da Absols Schaden mit jedem Treffer skaliert, erleidet Lavados massiven Schaden pro Sekunde, wenn er die Mitte erreicht.</li>
                <li><strong>Schicht 2 (Der Treibsand):</strong> Corasonn und Tentantel verwandeln die Karte in Treibsand. Lavados verbringt doppelt so viel Zeit in Absols Reichweite, weil er permanent verlangsamt wird.</li>
                <li><strong>Schicht 3 (Die Hinrichtung):</strong> Falls Lavados irgendwie mit 10% KP überlebt, läuft er in die Reichweite eines gebufften Snibunnas, das den finalen kritischen Stoß versetzt.</li>
              </ul>
              
              <h3>📝 Schritt-für-Schritt Ausführungs-Guide</h3>
              <h4>Platzierung:</h4>
              <ul>
                <li>Platziere Absol und Ditto auf dem Berg oben links.</li>
                <li>Platziere Corasonn und Tentantel nahe der mittleren Kreuzung.</li>
                <li>Platziere Snibunna und Sonnflora im Grasfeld unten rechts.</li>
              </ul>
              
              <h4>Targeting:</h4>
              <ul>
                <li>Stelle Absol und Ditto auf "Stark", um sicherzustellen, dass sie Lavados sofort fixieren.</li>
              </ul>
              
              <h4>Die Boss-Welle (100):</h4>
              <ul>
                <li>Beobachte, wie Lavados zum Kriechen verlangsamt wird.</li>
                <li>Der kombinierte skalierende Schaden von zwei Absols wird ihn wahrscheinlich töten, bevor er Snibunna erreicht.</li>
                <li>Falls er überlebt, erledigt Snibunna den Rest.</li>
              </ul>
      
              <img src="/images/map-route/1-3-02.png" alt="Route 1-3 Karte" class="route-map">
              
              <h3>🗺️ Terrain-Analyse</h3>
              <p>Route 1-3 bietet eine Mischung aus Wasser, Gras und Bergterrain, was drei unterschiedliche strategische Zonen schafft.</p>
              
              <h4>Straßen & Pfade</h4>
              <ul>
                <li><strong>Konvergierende Pfade:</strong> Pfade konvergieren durch die mittlere Kreuzung (Lang, 2 Engpässe)</li>
                <li><strong>Hauptpfad:</strong> Pfad vom Spawn zur Kill-Zone (Mittel, 1 Engpass)</li>
              </ul>
              
              <h4>Wasserbereiche</h4>
              <ul>
                <li><strong>Wasserbereiche:</strong> Bieten Terrain-Boni (Mittlerer strategischer Wert) - Wasser-Pokémon erhalten Power-Bonus</li>
              </ul>
              
              <h4>Berge & Höhenlagen</h4>
              <ul>
                <li><strong>Berg (Oben Links):</strong> Perfekt für Langstrecken-Scharfschützen und Anti-Unsichtbarkeits-Einheiten (Sehr hoher strategischer Wert) - +40% Reichweiten-Bonus, perfekt für Absol und UHaFnir, kann Gegner früh fixieren</li>
                <li><strong>Felsklippen:</strong> Entlang der Pfade (Hoher strategischer Wert) - +15% Reichweiten-Bonus</li>
              </ul>
              
              <h4>Gras & Vegetation</h4>
              <ul>
                <li><strong>Grasflächen:</strong> Inklusive der Kill-Zone unten rechts (Mittlere Abdeckung) - Pflanzen-Pokémon erhalten Power-Bonus, perfekt für Sonnflora-Platzierung</li>
                <li><strong>Verstreute Vegetation:</strong> Kleine Vegetationspatches (Geringe Abdeckung) - Pflanzen-Pokémon erhalten Power-Bonus</li>
              </ul>
              
              <h4>Strategische Engpässe</h4>
              <ul>
                <li><strong>Engpass (Mitte):</strong> Wo Pfade konvergieren, ideal zum Verlangsamen von Gegnern (Sehr hohe Priorität)</li>
                <li><strong>Berg (Oben Links):</strong> Perfekt für Langstrecken-Scharfschützen (Sehr hohe Priorität)</li>
                <li><strong>Kill-Zone (Unten Rechts):</strong> Der letzte Abschnitt, in dem schwere Angreifer den Boss erledigen (Sehr hohe Priorität)</li>
              </ul>
              
              <h3>⚔️ Team-Zusammensetzung</h3>
              <h4>Frühes Spiel (Wellen 1-50)</h4>
              <p>Beginne mit UHaFnir und Corasonn für AOE-Schaden und frühe Kontrolle.</p>
              
              <h4>Mittleres Spiel (Wellen 51-99)</h4>
              <p>Baue deine Boss-Killer auf: Setze Absol, Ditto, Tentantel und Ampharos ein. Errichte deine Kontrollzone in der Mitte.</p>
              
              <h4>Spätes Spiel (Welle 100)</h4>
              <p>Setze das komplette "Double Absol Lock-On"-Team ein: Absol & Ditto (Berg-Scharfschützen), Corasonn & Tentantel & Ampharos (Mittel-Kontrolle), Snibunna & Sonnflora (Kill-Zone), UHaFnir & Kramshef (Support).</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-2-1-raikou-wave-100',
        routeNumber: '2-1',
        name: 'PokePath TD Route 2-1 Guide: Ultimative Strategie gegen Raikou',
        mapImage: '/images/map-route/2-1.png',
        stars: 50,
        starsSecondary: 0,
        difficulty: 'Mittel',
        difficultyLevel: 2,
        terrain: ['Feld', 'Berg'],
        description: 'Route 2-1 markiert den Beginn der zweiten Region. Die Karte bietet ein kniffliges Kreuzungs-Layout, bei dem Gegner mehrere Pfade nehmen können, und gipfelt im Kampf gegen Raikou, eine der legendären Bestien. Raikou ist berüchtigt für seine unglaubliche Bewegungsgeschwindigkeit und sprintet oft an Verteidigungen vorbei, bevor diese tödlichen Schaden verursachen können.',
        totalWaves: 100,
        recommendedTypes: ['Unlicht', 'Eis', 'Elektro', 'Stahl'],
        recommendedPokemon: ['Absol', 'Ditto', 'Snibunna', 'Corasonn', 'Tentantel', 'Ampharos', 'UHaFnir', 'Kramshef'],
        strategies: ['Kontrolle & Burst', 'Slow & Stun', 'High Ground Sniping'],
        playstyle: 'Kontroll/Burst-Hybrid',
        tips: [
            'Platziere Absol auf dem Berg oben links für frühe Fixierung und skalierenden Schaden',
            'Nutze Ditto, um Absol zu kopieren und den skalierenden Schaden zu verdoppeln',
            'Corasonn bietet globalen Slow, um Raikous hoher Geschwindigkeit entgegenzuwirken',
            'Staple Tentantels Slow mit Corasonn für maximale Kontrolle',
            'Ampharos kann Raikou betäuben, was deinen DPS-Einheiten freie Treffer ermöglicht',
            'Snibunna liefert den finalen Burst-Schaden mit hoher Krit-Rate'
        ],
        teamComposition: {
            early: ['UHaFnir', 'Corasonn'],
            mid: ['Absol', 'Ditto', 'Snibunna', 'Kramshef'],
            late: ['Absol', 'Ditto', 'Corasonn', 'Tentantel', 'Ampharos', 'Snibunna', 'UHaFnir', 'Kramshef']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Kreuzungs-Layout mit mehreren verzweigten Pfaden', length: 'Sehr Lang', chokepoints: 3 },
                { description: 'Pfad vom Spawn zur zentralen Kreuzung', length: 'Mittel', chokepoints: 1 },
                { description: 'Konvergierende Pfade zum Ausgang', length: 'Mittel', chokepoints: 1 }
            ],
            water: [],
            mountains: [
                { description: 'Hohes Gelände (Oben Links) - Großer Bergbereich perfekt für Langstrecken-Scharfschützen', height: 'Sehr Hoch', strategicValue: 'Sehr Hoch', benefits: ['+40% Reichweiten-Bonus', 'Kann Spawn-Punkt und Kreuzung abdecken', 'Perfekt für Absol und UHaFnir'] },
                { description: 'Felsvorsprünge entlang der Pfade', height: 'Mittel', strategicValue: 'Hoch', benefits: ['+20% Reichweiten-Bonus'] }
            ],
            grass: [
                { description: 'Grasfelder rund um die Kreuzung', coverage: 'Mittel', benefits: ['Pflanzen-Pokémon erhalten Power-Bonus'] }
            ],
            chokepoints: [
                { location: 'Die Kreuzung (Zentrum)', description: 'Zentraler Schnittpunkt, an dem sich Gegner teilen - kritischster Bereich', priority: 'Sehr Hoch' },
                { location: 'Spawn-Punkt (Oben Mitte)', description: 'Wo Gegner erscheinen und sich nach unten bewegen', priority: 'Sehr Hoch' },
                { location: 'Der Ausgang (Unten Rechts)', description: 'Alle Pfade laufen hier zusammen - Last Stand Zone', priority: 'Hoch' },
                { location: 'Hohes Gelände (Oben Links)', description: 'Bergbereich für Langstrecken-Einheiten', priority: 'Sehr Hoch' }
            ]
        },
        seo: {
            title: 'PokePath TD Route 2-1 Guide: Ultimative Strategie gegen Raikou',
            description: 'Probleme mit Raikou auf Route 2-1? Unser Guide analysiert das Map-Layout, das beste Level 100 Team und die exakte Platzierung, um den schnellen Elektro-Boss zu stoppen.',
            keywords: 'pokepathtd route 2-1, raikou besiegen pokepathtd, route 2-1 guide, pokepathtd raikou boss, bestes team route 2-1'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>Route 2-1 markiert den Beginn der zweiten Region in PokePath TD. Während die grasbewachsene Ästhetik dich an Route 1 erinnern mag, steigt der Schwierigkeitsgrad deutlich an.</p>
              <p>Die Karte bietet ein kniffliges Kreuzungs-Layout, bei dem Gegner mehrere Pfade nehmen können, und gipfelt im Kampf gegen Raikou, eine der legendären Bestien. Raikou ist berüchtigt für seine unglaubliche Geschwindigkeit und sprintet oft an Verteidigungen vorbei.</p>
              <p>In diesem Guide analysieren wir die Karte, brechen Raikous Schwächen auf und liefern die exakte 10-Einheiten-Teamzusammensetzung für den Sieg.</p>
              
              <h3>🗺️ Karten-Analyse: Die Kreuzungs-Falle</h3>
              <p>Das Terrain von Route 2-1 zu verstehen, ist die halbe Miete.</p>
              <ul>
                <li><strong>Spawn-Punkt (Oben Mitte):</strong> Gegner erscheinen oben und bewegen sich in die zentrale Kreuzung.</li>
                <li><strong>Die Kreuzung (Zentrum):</strong> Dies ist der kritischste Bereich. Gegner teilen sich hier auf. Deine Türme MÜSSEN diese Kreuzung abdecken.</li>
                <li><strong>Das hohe Gelände (Oben Links):</strong> Ein großer Bergbereich links. Perfekt für Langstrecken-Einheiten (wie Absol oder UHaFnir), um Gegner beim Erscheinen zu beschießen.</li>
                <li><strong>Der Ausgang (Unten Rechts):</strong> Hier laufen alle Pfade zusammen. Deine "Last Stand"-Zone.</li>
              </ul>
      
              <img src="/images/map-route/2-1-01.png" alt="Route 2-1 Karte" class="route-map">
              
              <h3>⚡ Boss-Profil: Raikou (Welle 100)</h3>
              <ul>
                <li><strong>Name:</strong> Raikou</li>
                <li><strong>Typ:</strong> Elektro</li>
                <li><strong>Stats:</strong> Hohe KP, Sehr hohe Geschwindigkeit (1.2).</li>
                <li><strong>Fähigkeit:</strong> Anders als manche Bosse ist Raikou nicht nur zäh, sondern extrem schnell. Ohne Slow- oder Stun-Effekte rennt er in Sekunden durch deine Verteidigung.</li>
                <li><strong>Schwäche:</strong> Anfällig für physischen Burst-Schaden und Crowd-Control.</li>
              </ul>
      
              <img src="/images/map-route/2-1-03.png" alt="Route 2-1 Karte" class="route-map">
              
              <h3>🏆 Die beste Team-Zusammensetzung (Level 100 Meta)</h3>
              <p>Wir empfehlen ein "Kontroll & Burst" Hybrid-Team. Da Raikou schnell ist, müssen wir ihn verlangsamen (Kontrolle) und dann mit kritischen Treffern zuschlagen (Burst).</p>
              
              <h4>1. Die Berg-Scharfschützen (Linke Flanke)</h4>
              <ul>
                <li><strong>Absol (Level 100):</strong>
                  <ul>
                    <li><strong>Platzierung:</strong> Berg Oben Links.</li>
                    <li><strong>Warum?</strong> Absols Passiv verursacht steigenden Schaden bei jedem aufeinanderfolgenden Treffer. Früh fixiert, stapelt er sofort massiven Schaden auf Raikou.</li>
                  </ul>
                </li>
                <li><strong>Ditto (kopiert Absol):</strong>
                  <ul>
                    <li><strong>Platzierung:</strong> Neben Absol.</li>
                    <li><strong>Warum?</strong> Zwei Absols verdoppeln deinen skalierenden Schadensausstoß.</li>
                  </ul>
                </li>
                <li><strong>Schlukke / Kramshef:</strong>
                  <ul>
                    <li><strong>Platzierung:</strong> Linke Seite.</li>
                    <li><strong>Warum?</strong> Kramshef bietet Anti-Unsichtbarkeits-Sicht für frühere Wellen.</li>
                  </ul>
                </li>
              </ul>
              
              <h4>2. Die "Treibsand"-Zone (Zentrum)</h4>
              <p>Hier verwandeln wir die schnelle Kreuzung in einen Albtraum für Raikou.</p>
              <ul>
                <li><strong>Corasonn:</strong>
                  <ul>
                    <li><strong>Platzierung:</strong> Zentrales Feld.</li>
                    <li><strong>Warum?</strong> Auf Level 100 kontert sein globaler Slow mit 300 Reichweite Raikous Geschwindigkeit.</li>
                  </ul>
                </li>
                <li><strong>Tentantel:</strong>
                  <ul>
                    <li><strong>Platzierung:</strong> Nahe der Kreuzung.</li>
                    <li><strong>Warum?</strong> Stapelt einen zweiten Slow-Effekt mit Corasonn.</li>
                  </ul>
                </li>
                <li><strong>Ampharos:</strong>
                  <ul>
                    <li><strong>Platzierung:</strong> Unten Links / Zentrum.</li>
                    <li><strong>Warum?</strong> Harter Stun durch Paralyse ermöglicht freie Treffer für Absol und Snibunna.</li>
                  </ul>
                </li>
              </ul>
              
              <h4>3. Das Exekutions-Kommando (Rechte Flanke)</h4>
              <ul>
                <li><strong>Snibunna:</strong>
                  <ul>
                    <li><strong>Platzierung:</strong> Zentrum Rechts.</li>
                    <li><strong>Warum?</strong> Der DPS-König. Mit 65% Krit-Rate löscht es Raikous restliche KP in Sekunden aus.</li>
                  </ul>
                </li>
                <li><strong>UHaFnir:</strong>
                  <ul>
                    <li><strong>Platzierung:</strong> Rechte Seite.</li>
                    <li><strong>Warum?</strong> Gute AOE-Abdeckung für begleitende Minions.</li>
                  </ul>
                </li>
              </ul>
      
              <img src="/images/map-route/2-1-02.png" alt="Route 2-1 Karte" class="route-map">
              
              <h3>📝 Schritt-für-Schritt Sieges-Guide</h3>
              <h4>Phase 1: Frühes Spiel (Wellen 1-50)</h4>
              <p>Setze zuerst UHaFnir und Corasonn für AOE-Schaden. Platziere Kramshef vor Welle 40 gegen unsichtbare Gegner.</p>
              
              <h4>Phase 2: Mittleres Spiel (Wellen 51-99)</h4>
              <p>Baue deine Boss-Killer auf: Absol, Ditto und Snibunna. Level 100 ist ideal.</p>
              
              <h4>Phase 3: Der Bosskampf (Welle 100)</h4>
              <ul>
                <li><strong>Raikou erscheint:</strong> Keine Panik wegen seiner Geschwindigkeit.</li>
                <li><strong>Die Fixierung:</strong> Das Absol-Duo auf dem Berg beginnt sofort mit der Schadensskalierung.</li>
                <li><strong>Der Slow:</strong> Im Zentrum wird er durch Corasonn und Tentantel massiv ausgebremst.</li>
                <li><strong>Der Kill:</strong> Snibunna wartet rechts, um den finalen Schlag zu versetzen.</li>
              </ul>
              
              <h3>❓ FAQ</h3>
              <p><strong>F: Kann ich Boden-Typen gegen Raikou nutzen?</strong></p>
              <p>A: Ja! Stalobor oder Libelldra sind exzellent. Unsere Absol/Snibunna-Strategie ist jedoch oft konsistenter bei hohen Leveln.</p>
              
              <p><strong>F: Was wenn ich kein Level 100 Ditto habe?</strong></p>
              <p>A: Nutze eine andere starke DPS-Einheit wie Despotar oder Knakrack oder ein zweites Absol.</p>
              
              <h3>🗺️ Terrain-Analyse</h3>
              <p>Route 2-1 bietet ein Kreuzungs-Layout mit strategischen Herausforderungen durch verzweigte Pfade.</p>
              
              <h4>Straßen & Pfade</h4>
              <ul>
                <li><strong>Kreuzungs-Layout:</strong> Mehrere verzweigte Pfade (Sehr Lang, 3 Engpässe)</li>
                <li><strong>Spawn-Pfad:</strong> Vom Spawn zur zentralen Kreuzung (Mittel, 1 Engpass)</li>
                <li><strong>Ausgangs-Pfad:</strong> Konvergierende Pfade zum Ausgang (Mittel, 1 Engpass)</li>
              </ul>
              
              <h4>Berge & Höhenlagen</h4>
              <ul>
                <li><strong>Hohes Gelände (Oben Links):</strong> Perfekt für Scharfschützen (Sehr hoher Wert) - +40% Reichweite, deckt Spawn und Kreuzung ab</li>
                <li><strong>Felsvorsprünge:</strong> Entlang der Pfade (Hoher Wert) - +20% Reichweite</li>
              </ul>
              
              <h4>Strategische Engpässe</h4>
              <ul>
                <li><strong>Die Kreuzung (Zentrum):</strong> Kritischster Bereich (Sehr hohe Priorität)</li>
                <li><strong>Spawn-Punkt (Oben Mitte):</strong> (Sehr hohe Priorität)</li>
                <li><strong>Der Ausgang (Unten Rechts):</strong> Last Stand Zone (Hohe Priorität)</li>
              </ul>
      
              <h3>⚔️ Team-Zusammensetzung</h3>
              <h4>Frühes Spiel (Wellen 1-50)</h4>
              <p>Fokus auf UHaFnir und Corasonn für AOE. Kramshef vor Welle 40 platzieren.</p>
              
              <h4>Mittleres Spiel (Wellen 51-99)</h4>
              <p>Boss-Killer Absol, Ditto und Snibunna aufbauen und upgraden.</p>
              
              <h4>Spätes Spiel (Welle 100)</h4>
              <p>Vollständiges "Control & Burst" Team aufstellen.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-2-2-entei',
        routeNumber: '2-2',
        name: ' PokePath TD Route 2-2 Guide: Wie man Entei besiegt (Armor Break Strategie)',
        mapImage: '/images/map-route/2-2.png',
        stars: 100,
        starsSecondary: 0,
        difficulty: 'Mittel',
        difficultyLevel: 2,
        terrain: ['Feld', 'Wasser', 'Gras'],
        description: 'Route 2-2 führt eine der bestrafendsten Mechaniken im Spiel ein: Extreme Rüstung. Der Endboss, Entei, erscheint bei Welle 100 mit gewaltigen 23.500 Rüstungspunkten. Diese Route bietet ein zentrales Gewässer, das von einem U-förmigen Pfad umgeben ist – ideal für skalierende Schadensstrategien.',
        totalWaves: 100,
        recommendedTypes: ['Wasser', 'Pflanze'],
        recommendedPokemon: ['Admurai', 'Corasonn', 'Sonnflora', 'Welsar', 'Lapras'],
        strategies: ['Skalierender Schaden', 'Rüstungsbrecher', 'Gelände-Synergie'],
        playstyle: 'Skalierend/Steigernd',
        tips: [
            'Admurais Passivfähigkeit skaliert den Schaden bei aufeinanderfolgenden Treffern – perfekt für Bosse mit hoher Rüstung',
            'Platziere Wasser-Einheiten im zentralen See für maximale Einsatzzeit',
            'Corasonn bietet eine globale Verlangsamung, um Entei in Reichweite zu halten',
            'Sonnfloras Schadensbuff ist entscheidend, um Rüstungsschwellen zu durchbrechen',
            'Entei bewegt sich langsam (0,8 Geschwindigkeit), was Zeit gibt, Schaden aufzubauen'
        ],
        teamComposition: {
            early: ['Maracamba', 'Kramshef'],
            mid: ['Welsar', 'Lapras', 'Corasonn'],
            late: ['Admurai', 'Corasonn', 'Sonnflora', 'Welsar', 'Lapras']
        },
        terrainAnalysis: {
            roads: [
                { description: 'U-förmiger Pfad um den zentralen See', length: 'Sehr lang', chokepoints: 3 },
                { description: 'Pfad um das Gewässer', length: 'Lang', chokepoints: 2 }
            ],
            water: [
                { description: 'Zentraler See - wertvollster Platz', type: 'See', strategicValue: 'Sehr hoch', benefits: ['Wasser-Pokémon erhalten 2x Power-Bonus', 'Nahezu 100% Einsatzzeit gegen Gegner'] },
                { description: 'Wasser um den Pfad herum', type: 'See', strategicValue: 'Hoch', benefits: ['Wasser-Pokémon erhalten Power-Bonus'] }
            ],
            mountains: [
                { description: 'Berggipfel mit Blick auf den See', type: 'Gipfel', strategicValue: 'Hoch', benefits: ['+30% Reichweiten-Bonus', 'Kann den gesamten Seebereich abdecken'] }
            ],
            grass: [
                { description: 'Grasflächen um den See', coverage: 'Mittel', benefits: ['Pflanzen-Pokémon erhalten Power-Bonus'] }
            ],
            chokepoints: [
                { location: 'Zentrale Seeschleife', description: 'U-förmiger Pfad um den zentralen See – perfekt für skalierenden Schaden', priority: 'Sehr hoch' },
                { location: 'Seeeingang', description: 'Stelle, an der Gegner den Seebereich betreten', priority: 'Hoch' },
                { location: 'Pfadkonvergenz', description: 'Mehrere Pfade treffen sich in Seenähe', priority: 'Hoch' }
            ]
        },
        seo: {
            title: 'PokePath TD Route 2-2 Guide: Wie man Entei besiegt (Armor Break Strategie)',
            description: 'Probleme bei Entei? Lerne die "Armor Break"-Strategie für Route 2-2. Wir erklären die Rüstungsmechanik und zeigen dir genau, wie du ein Team baust, um Entei zu besiegen.',
            keywords: 'pokepathtd route 2-2, entei besiegen pokepathtd, route 2-2 guide, pokepathtd entei boss, bestes team route 2-2'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>Route 2-2 führt eine der bestrafendsten Mechaniken im Spiel ein: Extreme Rüstung. Der Endboss, Entei, erscheint bei Welle 100 mit gewaltigen 23.500 Rüstungspunkten.</p>
              <p>Für viele Spieler ist dies eine Mauer. Deine starken Türme verursachen vielleicht nur "1 Schaden" oder "0 Schaden" pro Treffer. Dieser Guide erklärt die Rüstungsmechanik und zeigt dir genau, wie du ein Team baust, um Entei zu besiegen.</p>
              
              <h3>🛡️ Die Mechanik verstehen: Rüstung vs. Kraft</h3>
              <p>Um Entei zu schlagen, musst du verstehen, wie der Schaden berechnet wird.</p>
              <ul>
                <li><strong>Die Regel:</strong> Wenn die Kraft der Einheit < Rüstung des Gegners, wird der Schaden massiv reduziert (oft auf 1).</li>
                <li><strong>Das Problem:</strong> Die meisten Schnellfeuer-Türme (wie Snibunna oder Maracamba) setzen auf Tempo, nicht auf Rohkraft pro Treffer. Sie werden Entei nur kitzeln.</li>
                <li><strong>Die Lösung:</strong> Du brauchst Türme mit hoher Einzelschuss-Kraft oder Mechanismen für skalierenden Schaden.</li>
              </ul>
      
              <img src="/images/map-route/2-2-03.png" alt="Route 2-2 Karte" class="route-map">
              
              <h3>🗺️ Kartenstrategie: Der "Death Loop"</h3>
              <p>Route 2-2 bietet ein zentrales Gewässer, das von einem U-förmigen Pfad umgeben ist.</p>
              <ul>
                <li><strong>Der zentrale See:</strong> Dies ist der wertvollste Platz auf der Karte. Einheiten, die hier platziert werden, haben fast 100% Einsatzzeit gegen Gegner.</li>
                <li><strong>Strategischer Vorteil:</strong> Da Entei langsam ist (0,8 Geschwindigkeit), verbringt er viel Zeit damit, diesen See zu umrunden. Dies ist das perfekte Setup für Ramping-Schadensstrategien.</li>
              </ul>
              
              <h3>🏆 Das beste Team: "Die skalierende Wasser-Truppe"</h3>
              <p>Wir nutzen das Wasserterrain der Karte, um unsere Wasser-Typen zu stärken, die von Natur aus gut darin sind, hohen Schaden zu verursachen.</p>
      
              <img src="/images/map-route/2-2-02.png" alt="Route 2-2 Karte" class="route-map">
              
              <h4>1. Der Boss-Killer: Admurai (Level 100)</h4>
              <ul>
                <li><strong>Rolle:</strong> Haupt-DPS / Rüstungsbrecher.</li>
                <li><strong>Das Geheimnis:</strong> Admurais Passivfähigkeit erhöht den Schaden mit jedem aufeinanderfolgenden Treffer auf dasselbe Ziel.</li>
                <li><strong>Warum es funktioniert:</strong> Entei hat hohe KP und Rüstung. Er überlebt lange genug, damit Admurai diesen Passiv-Effekt 10, 20 oder 30 Mal stapeln kann. Schließlich skaliert Admurais Schaden über 23.500 und ignoriert die Rüstung komplett.</li>
              </ul>
              
              <h4>2. Der Kontrolleur: Corasonn</h4>
              <ul>
                <li><strong>Rolle:</strong> Globale Verlangsamung.</li>
                <li><strong>Warum es funktioniert:</strong> Corasonn muss keinen Schaden verursachen. Ihr Job ist es, Entei in Admurais Reichweite zu halten. Ein Level 100 Corasonn deckt die gesamte Seeschleife ab und sorgt dafür, dass Entei dauerhaft verlangsamt wird.</li>
              </ul>
              
              <h4>3. Der Buffer: Sonnflora</h4>
              <ul>
                <li><strong>Rolle:</strong> Schadensverstärker.</li>
                <li><strong>Warum es funktioniert:</strong> Sonnflora fügt +20% Schaden für nahegelegene Einheiten hinzu. Wenn du versuchst, eine spezifische Rüstungsschwelle (23.500) zu durchbrechen, sind diese zusätzlichen 20% mathematisch massiv. Es kann den Unterschied zwischen 0 Schaden und 5.000 Schaden ausmachen.</li>
              </ul>
              
              <h4>4. Alternative Optionen (Falls du kein Admurai hast)</h4>
              <ul>
                <li><strong>Wummer:</strong> Hat die höchste Basis-Kraft im Spiel (1950+). Kritische Treffer verdoppeln diesen Schaden, was es ermöglicht, Rüstungen natürlich zu durchschlagen.</li>
                <li><strong>Stalobor:</strong> Sein Passiv verursacht doppelten Schaden gegen Rüstung. Dies halbiert effektiv Enteis Verteidigungswerte gegen Stalobor.</li>
                <li><strong>Gift/Verbrennung:</strong> Statuseffekte wie Gift (Smogmog) verursachen prozentualen KP-Schaden und ignorieren Rüstung vollständig.</li>
              </ul>
              
              <h3>📝 Schritt-für-Schritt zum Sieg</h3>
              <ol>
                <li><strong>Aufstellung:</strong> Fülle den zentralen See mit deinen stärksten Wasser-Einheiten (Admurai, Welsar, Lapras).</li>
                <li><strong>Buffing:</strong> Platziere Sonnflora am Ufer so nah wie möglich an deinem Admurai, um die Schadensaura bereitzustellen.</li>
                <li><strong>Der Kampf:</strong>
                  <ul>
                    <li>Entei erscheint. Dein Kramshef (auf dem Berg) und Maracamba erledigen die Diener.</li>
                    <li>Entei betritt die Schleife. Corasonn verlangsamt ihn.</li>
                    <li>Admurai beginnt anzugreifen. Die ersten Treffer machen vielleicht wenig Schaden, aber beobachte, wie die roten Zahlen mit jedem Stapel wachsen.</li>
                    <li>Sobald Entei die Schleife beendet hat, sollte er besiegt sein.</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ Gelände-Analyse</h3>
              <p>Route 2-2 verfügt über ein zentrales Gewässer, das von einem U-förmigen Pfad umgeben ist, was den perfekten "Death Loop" für skalierende Schadensstrategien schafft.</p>
              
              <h4>Straßen & Pfade</h4>
              <ul>
                <li><strong>U-Pfad:</strong> U-förmiger Pfad um den zentralen See (Sehr lang, 3 Chokepoints)</li>
                <li><strong>Seepfad:</strong> Pfad um das Gewässer (Lang, 2 Chokepoints)</li>
              </ul>
              
              <h4>Wasserbereiche</h4>
              <ul>
                <li><strong>Zentraler See:</strong> Wertvollster Platz (Sehr hoher strategischer Wert) - Wasser-Pokémon erhalten 2x Power-Bonus, nahezu 100% Einsatzzeit gegen Gegner</li>
                <li><strong>Umliegendes Wasser:</strong> Wasser, das den Pfad umgibt (Hoher strategischer Wert) - Wasser-Pokémon erhalten Power-Bonus</li>
              </ul>
              
              <h4>Berge & Anhöhen</h4>
              <ul>
                <li><strong>Berggipfel:</strong> Berggipfel mit Blick auf den See (Hoher strategischer Wert) - +30% Reichweiten-Bonus, kann den gesamten Seebereich abdecken</li>
              </ul>
              
              <h4>Gras & Vegetation</h4>
              <ul>
                <li><strong>Grasflächen:</strong> Grasflächen um den See (Mittlere Abdeckung) - Pflanzen-Pokémon erhalten Power-Bonus</li>
              </ul>
              
              <h4>Strategische Chokepoints</h4>
              <ul>
                <li><strong>Zentrale Seeschleife:</strong> U-Pfad um den zentralen See – perfekt für skalierenden Schaden (Sehr hohe Priorität)</li>
                <li><strong>Seeeingang:</strong> Wo Gegner den Seebereich betreten (Hohe Priorität)</li>
                <li><strong>Pfadkonvergenz:</strong> Mehrere Pfade treffen sich in Seenähe (Hohe Priorität)</li>
              </ul>
              
              <h3>⚔️ Team-Zusammensetzung</h3>
              <h4>Early Game (Wellen 1-40)</h4>
              <p>Setze Maracamba zur Wellenbereinigung und Kramshef auf den Bergen für Anti-Unsichtbarkeits-Abdeckung ein.</p>
              
              <h4>Mid Game (Wellen 41-99)</h4>
              <p>Wechsle zu Wasser-Einheiten: Welsar, Lapras und Corasonn. Beginne damit, deinen Kern für skalierenden Schaden aufzubauen.</p>
              
              <h4>Late Game (Welle 100)</h4>
              <p>Setze die "skalierende Wasser-Truppe" ein: Admurai (Boss-Killer), Corasonn (Kontrolleur), Sonnflora (Buffer), Welsar & Lapras (Support-DPS). Platziere alle Wasser-Einheiten im zentralen See für maximale Einsatzzeit.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-2-3-suicune-wave-100',
        routeNumber: '2-3',
        name: 'PokePath TD Route 2-3 Ultimativer Guide: Suicune mit Absol besiegen',
        mapImage: '/images/map-route/2-3.png',
        stars: 500,
        starsSecondary: 0,
        difficulty: 'Schwer',
        difficultyLevel: 3,
        terrain: ['Feld', 'Gebirge'],
        description: 'Herausfordernde Gebirgsroute mit komplexen Pfaden. Der Endboss Suicune erfordert aufgrund seiner extremen Geschwindigkeit eine einzigartige Absol-Skalierungsstrategie.',
        totalWaves: 100,
        recommendedTypes: ['Unlicht', 'Pflanze', 'Flug', 'Elektro'],
        recommendedPokemon: ['Absol', 'Ditto', 'Corasonn', 'Maracamba', 'Sonnflora', 'Staraptor', 'Resladero', 'Kramshef'],
        strategies: ['Absol-Swap', 'Skalierender Schaden', 'Geschwindigkeitskontrolle'],
        playstyle: 'Taktisch',
        tips: [
            'Nutze die Swap-Strategie: AOE-Team für Wellen 1-99, dann Wechsel zum Absol-Team für Suicune',
            'Absol ist essenziell für Welle 100 – aufeinanderfolgende Treffer erhöhen den Schaden exponentiell',
            'Platziere Absol in der zentralsten Position, um die Zeit an Suicune zu maximieren',
            'Nutze Ditto, um Absol zu kopieren für doppelten skalierenden Schaden',
            'Corasonn liefert die wichtige Verlangsamung (300 Reichweite), um Suicunes Tempo von 1,5 auf 0,8 zu senken',
            'Pausiere bei Welle 100, um den Wechsel durchzuführen – verkaufe Sonnflora, kaufe Absol, konfiguriere Ditto'
        ],
        teamComposition: {
            early: ['Maracamba', 'Kramshef'],
            mid: ['Maracamba', 'Sonnflora', 'Staraptor', 'Resladero', 'Corasonn', 'Ditto'],
            late: ['Absol', 'Ditto', 'Corasonn']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Komplexer Gebirgspfad mit mehreren Abzweigungen', length: 'Sehr lang', chokepoints: 5 },
                { description: 'Unterirdischer Tunnelpfad', length: 'Mittel', chokepoints: 1 }
            ],
            water: [],
            mountains: [
                { description: 'Hohe Gipfel mit mehreren Höhenstufen', height: 'Sehr hoch', strategicValue: 'Sehr hoch', benefits: ['+50% Reichweiten-Bonus', 'Kann ganze Pfadabschnitte abdecken'] },
                { description: 'Felsklippen und Grate', height: 'Hoch', strategicValue: 'Hoch', benefits: ['+30% Reichweiten-Bonus'] },
                { description: 'Bergplateaus', height: 'Mittel', strategicValue: 'Medium', benefits: ['+15% Reichweiten-Bonus'] }
            ],
            grass: [],
            chokepoints: [
                { location: 'Berggipfel', description: 'Höchster Punkt mit Panorama-Aussicht', priority: 'Sehr hoch' },
                { location: 'Pfadkreuzung', description: 'Mehrere Pfade treffen zusammen', priority: 'Sehr hoch' },
                { location: 'Z-Kurve Chokepoint', description: 'Kurve zwischen mittlerem und unterem Pfad, wo Suicune am verwundbarsten ist', priority: 'Sehr hoch' },
                { location: 'Tunneleingang', description: 'Enger Tunneleingang', priority: 'Hoch' },
                { location: 'Klippenkurve', description: 'Scharfe Kurve entlang der Klippe', priority: 'Hoch' }
            ]
        },
        seo: {
            title: 'PokePath TD Route 2-3 Ultimativer Guide: Suicune mit Absol besiegen',
            description: 'Route 2-3 bietet den schnellsten Boss im Spiel: Suicune. Lerne die detaillierte Level 100 Strategie, die "Absol Swap" Taktik und die Kontrolle des Z-Kurven-Layouts.',
            keywords: 'pokepathtd route 2-3, suicune besiegen pokepathtd, absol strategie, route 2-3 guide, bestes team route 2-3'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>Willkommen zur letzten Herausforderung von Region 2. Route 2-3 ist eine trügerische Karte. Sie sieht aus wie ein einfacher gewundener Pfad, aber der Endboss, Suicune, ist ein Geschwindigkeitsdämon, der unzählige Runs beendet hat.</p>
              <p>In diesem Guide werden wir die einzigartige Geografie der Karte analysieren, Suicunes Werte untersuchen und eine Schritt-für-Schritt-Anleitung für die "Absol Swap Strategie" geben, die den Sieg garantiert.</p>
              
              <h3>📊 Boss-Profil: Suicune (Welle 100)</h3>
              <p>Bevor wir unser Team bauen, müssen wir unseren Feind verstehen.</p>
              <ul>
                <li><strong>Name:</strong> Suicune (Das Aurora-Pokémon)</li>
                <li><strong>Typ:</strong> Wasser</li>
                <li><strong>Tempo:</strong> 1,5 (Extrem schnell). Dies ist der höchste Geschwindigkeitswert, dem du bisher begegnet bist.</li>
                <li><strong>Leben:</strong> 69.000 KP.</li>
                <li><strong>Rüstung:</strong> 0.</li>
                <li><strong>Die Bedrohung:</strong> Suicune bewegt sich so schnell, dass die meisten Türme mit "hohem Schaden, aber langsamer Feuerrate" (wie Rameidon) ihn komplett verfehlen oder nur einen Schuss abgeben.</li>
              </ul>
      
              <img src="/images/map-route/2-3-03.png" alt="Route 2-3 Karte" class="route-map">
              
              <h3>🗺️ Kartenstrategie: Die "Z-Kurven-Falle"</h3>
              <p>Route 2-3 verfügt über einen Z-förmigen Pfad, der sich durch felsiges Gelände windet.</p>
              <ul>
                <li><strong>Die Anhöhen (Perimeter):</strong> Die Karte ist von Gebirgsfeldern umgeben. Dies ist exzellent für Flug-Typen wie Kramshef, UHaFnir und Xatu. Sie können globale Sicht und Schaden bieten.</li>
                <li><strong>Die zentrale Plattform (Gras):</strong> Dies ist das Herz deiner Verteidigung. Einheiten im mittleren Grasfleck können Gegner auf dem oberen Pfad (Welle 1-50), der mittleren Kurve und dem unteren Pfad (Welle 51-100) treffen.</li>
                <li><strong>Der Chokepoint:</strong> Die Kurve zwischen dem mittleren und dem unteren Pfad ist der Ort, an dem Suicune am verwundbarsten ist.</li>
              </ul>
              
              <h3>🏆 Das beste Team: "Der Absol-Swap"</h3>
              <p>Unsere Strategie beinhaltet die Nutzung eines Standard-AOE-Teams für die Wellen 1-99 und einen taktischen Wechsel für Welle 100.</p>
              
              <h4>Phase 1: Wellen-Clear-Team (Wellen 1-99)</h4>
              <p>Für den Großteil des Levels benötigst du Flächenschaden (AOE), um die Schwärme zu besiegen.</p>
              <ul>
                <li><strong>Sonnflora (Mitte):</strong> Bietet eine +20% Schadensaura für alle in der Mitte.</li>
                <li><strong>Maracamba (Zentrales Gras):</strong> Dein Haupt-Clear. Seine Pflanzen-Attacken sind sehr effektiv gegen die vielen Wasser-Typen auf dieser Route.</li>
                <li><strong>Staraptor / Resladero:</strong> Gute physische Schadensausteiler, um Leaks zu verhindern.</li>
              </ul>
              
              <h4>Phase 2: Das Boss-Killer-Team (Welle 100)</h4>
              <p>Wenn Suicune erscheint, ist AOE-Schaden nutzlos. Wir brauchen fokussierten, skalierenden Einzelschaden.</p>
              
              <h4>Absol (Level 100)</h4>
              <ul>
                <li><strong>Die Mechanik:</strong> Absols Passivfähigkeit lautet: "Aufeinanderfolgende Treffer auf dasselbe Ziel erhöhen den Schaden."</li>
                <li><strong>Warum es Suicune kontert:</strong> Suicune hat 0 Rüstung. Das bedeutet, Absols Schaden wird nicht gemindert. Während Absol Suicune kontinuierlich trifft, rampt der Schaden von 200 -> 400 -> 800 -> 1600 hoch. Es entsteht eine exponentielle Schadenskurve.</li>
              </ul>
              
              <h4>Ditto (Kopiert Absol)</h4>
              <ul>
                <li><strong>Strategie:</strong> Platziere Ditto neben Absol. Jetzt hast du ZWEI Einheiten, die den Schaden hochskalieren. Dies schmilzt Suicune doppelt so schnell.</li>
              </ul>
              
              <h4>Phase 3: Geschwindigkeitskontrolle</h4>
              <p>Schaden bedeutet nichts, wenn das Ziel davonläuft.</p>
              <ul>
                <li><strong>Corasonn (Level 100):</strong>
                  <ul>
                    <li><strong>Warum?</strong> Mit einer Reichweite von 300 deckt Corasonns Verlangsamungs-Aura die gesamte Z-Kurve ab. Sie reduziert Suicunes Tempo von 1,5 auf etwa 0,8, was die Zeit, in der deine Absols angreifen können, effektiv verdoppelt.</li>
                  </ul>
                </li>
              </ul>
      
              <img src="/images/map-route/2-3-02.png" alt="Route 2-3 Karte" class="route-map">
              
              <h3>📝 Detaillierter Walkthrough</h3>
              
              <h4>Early Game (Wellen 1-40)</h4>
              <ul>
                <li>Platziere Maracamba im zentralen Gras.</li>
                <li>Platziere Kramshef auf dem Berg oben links, um unsichtbare Einheiten abzufangen.</li>
                <li>Beginne damit, dein Corasonn für den Slow-Support aufzubauen.</li>
              </ul>
              
              <h4>Mid Game (Wellen 41-99)</h4>
              <ul>
                <li>Füge Sonnflora hinzu, um dein Maracamba zu buffen.</li>
                <li>Füge Staraptor oder Resladero für extra DPS hinzu.</li>
                <li>Stelle sicher, dass dein Ditto gelevelt und bereit ist.</li>
              </ul>
              
              <h4>Der Bosskampf (Welle 100)</h4>
              <ol>
                <li><strong>PAUSIERE</strong> das Spiel, sobald die Warnung für Welle 100 erscheint.</li>
                <li><strong>VERKAUFE</strong> Sonnflora. Du brauchst den Platz und das Geld.</li>
                <li><strong>KAUFE</strong> Absol. Platziere es in der zentralstmöglichen Position.</li>
                <li><strong>KONFIGURIERE</strong> Ditto. Stelle sicher, dass Ditto in Absol transformiert ist.</li>
                <li><strong>WEITERSPIELEN.</strong></li>
                <li>Beobachte, wie Suicune die Karte betritt.</li>
                <li>Corasonn wendet sofort die Verlangsamung an.</li>
                <li>Die beiden Absols visieren ihn an. Die ersten Treffer werden klein sein, aber beobachte, wie die roten Schadenszahlen riesig werden, während Suicune die erste Ecke umrundet.</li>
                <li><strong>Sieg!</strong></li>
              </ol>
      
              <img src="/images/map-route/2-3-01.png" alt="Route 2-3 Karte" class="route-map">
              
              <h3>❓ Alternative Strategien</h3>
              <p><strong>"Ich habe Absol noch nicht. Was kann ich benutzen?"</strong></p>
              <p>Falls dir Absol fehlt, kannst du versuchen:</p>
              <ul>
                <li><strong>Elektro-Typen:</strong> Nutze Luxtra oder Ampharos. Elektro ist sehr effektiv gegen Wasser (Suicune). Ein Level 100 Luxtra verursacht massiven Schaden.</li>
                <li><strong>Pflanzen-Burst:</strong> Behalte Sonnflora und staple mehrere Maracamba oder Gewaldro. Pflanze ist ebenfalls sehr effektiv.</li>
                <li><strong>Stun-Lock:</strong> Versuche mit Ampharos und Lapras, Suicune permanent zu betäuben, damit er sich nicht bewegen kann.</li>
              </ul>
              
              <h3>🗺️ Gelände-Analyse</h3>
              <p>Route 2-3 verfügt über einen Z-förmigen Pfad, der sich durch felsiges Gelände windet, mit strategischen Hochpositionen.</p>
              
              <h4>Straßen & Pfade</h4>
              <ul>
                <li><strong>Hauptpfad:</strong> Komplexer Gebirgspfad mit mehreren Abzweigungen (Sehr lang, 5 Chokepoints)</li>
                <li><strong>Untergrund-Pfad:</strong> Unterirdischer Tunnelpfad (Mittel, 1 Chokepoint)</li>
              </ul>
              
              <h4>Berge & Anhöhen</h4>
              <ul>
                <li><strong>Hohe Gipfel:</strong> Hohe Gipfel mit mehreren Höhenstufen (Sehr hoher strategischer Wert) - +50% Reichweiten-Bonus, kann ganze Pfadabschnitte abdecken</li>
                <li><strong>Felsklippen:</strong> Felsklippen und Grate (Hoher strategischer Wert) - +30% Reichweiten-Bonus</li>
                <li><strong>Bergplateaus:</strong> Bergplateaus (Mittlerer strategischer Wert) - +15% Reichweiten-Bonus</li>
              </ul>
              
              <h4>Strategische Chokepoints</h4>
              <ul>
                <li><strong>Berggipfel:</strong> Höchster Punkt mit Panorama-Aussicht (Sehr hohe Priorität)</li>
                <li><strong>Pfadkreuzung:</strong> Mehrere Pfade treffen zusammen (Sehr hohe Priorität)</li>
                <li><strong>Z-Kurve Chokepoint:</strong> Kurve zwischen mittlerem und unterem Pfad, wo Suicune am verwundbarsten ist (Sehr hohe Priorität)</li>
                <li><strong>Tunneleingang:</strong> Enger Tunneleingang (Hohe Priorität)</li>
                <li><strong>Klippenkurve:</strong> Scharfe Kurve entlang der Klippe (Hohe Priorität)</li>
              </ul>
              
              <h3>⚔️ Team-Zusammensetzung</h3>
              <h4>Early Game (Wellen 1-40)</h4>
              <p>Setze Maracamba im zentralen Gras und Kramshef auf den Bergen für Anti-Unsichtbarkeits-Abdeckung ein.</p>
              
              <h4>Mid Game (Wellen 41-99)</h4>
              <p>Füge Sonnflora für den Schadensbuff hinzu, Staraptor/Resladero für DPS, und bereite Corasonn und Ditto für den Bosskampf vor.</p>
              
              <h4>Late Game (Welle 100)</h4>
              <p>Wechsle zum Absol-Team: Absol (Kern-Skalierungsschaden), Ditto (kopiert Absol) und Corasonn (Geschwindigkeitskontrolle). Verkaufe Sonnflora, um Platz zu schaffen.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-3-1-regirock-wave-100-guide',
        routeNumber: '3-1',
        name: 'PokePath TD Route 3-1 Guide: Wie man Regirock besiegt (1 Million Rüstung)',
        mapImage: '/images/map-route/3-1.png',
        stars: 200,
        starsSecondary: 0,
        difficulty: 'Schwer',
        difficultyLevel: 3,
        terrain: ['Feld', 'Gras'],
        description: 'Fortgeschrittene Route mit dichter Vegetation. Der Endboss Regirock erfordert eine einzigartige Gift-Strategie aufgrund von fast 1 Million Rüstungspunkten.',
        totalWaves: 100,
        recommendedTypes: ['Gift', 'Feuer', 'Flug', 'Pflanze'],
        recommendedPokemon: ['Smogmog', 'Arbok', 'Schluckwech', 'Ariados', 'Ditto', 'Maracamba', 'Resladero', 'Staraptor', 'Kramshef'],
        strategies: ['Toxic Swap', 'Gift-Build', 'Swap-Strategie'],
        playstyle: 'Taktisch',
        tips: [
            'Nutze die Swap-Strategie: Standard-Team für Wellen 1-99, dann Wechsel zum Gift-Team für Regirock',
            'Giftschaden ignoriert Rüstung – essenziell um Regirocks 985.714 Rüstung zu überwinden',
            'Smogmog ist der beste Gift-Verteiler – platziere es mittig für maximale Einsatzzeit',
            'Nutze Ditto, um Smogmog für doppelte Giftwolken zu kopieren',
            'Behalte Kramshef für Anti-Unsichtbarkeit auf den Bergen während des Wellen-Clears',
            'Pausiere bei Welle 100, um den Toxic Swap durchzuführen – verkaufe physische Angreifer, kaufe Gift-Einheiten'
        ],
        teamComposition: {
            early: ['Maracamba', 'Resladero', 'Staraptor'],
            mid: ['Maracamba', 'Resladero', 'Staraptor', 'Kramshef'],
            late: ['Smogmog', 'Arbok', 'Schluckwech', 'Ariados', 'Ditto', 'Kramshef']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Pfad durch dichten Wald', length: 'Lang', chokepoints: 3 },
                { description: 'Lichtungspfad mit besserer Sicht', length: 'Mittel', chokepoints: 1 }
            ],
            water: [],
            mountains: [],
            grass: [
                { description: 'Dichter Wald, der die gesamte Karte bedeckt', coverage: 'Sehr hoch', benefits: ['Pflanzen-Pokémon erhalten 2x Power-Bonus', 'Gegner bewegen sich in dichter Vegetation langsamer'] },
                { description: 'Dickes Unterholz entlang der Pfade', coverage: 'Hoch', benefits: ['Pflanzen-Pokémon erhalten Power-Bonus'] }
            ],
            chokepoints: [
                { location: 'Waldlichtung', description: 'Offener Bereich im dichten Wald', priority: 'Sehr hoch' },
                { location: 'Pfadverengung', description: 'Pfad verengt sich zwischen Bäumen', priority: 'Hoch' }
            ]
        },
        seo: {
            title: 'PokePath TD Route 3-1 Guide: Wie man Regirock besiegt (1 Million Rüstung)',
            description: 'Regirock ist immun gegen physischen Schaden. Lerne die "Poison Swap Strategie", um den Boss von Route 3-1 mit Smogmog und Arbok zu besiegen.',
            keywords: 'pokepathtd route 3-1, regirock besiegen pokepathtd, route 3-1 guide, pokepathtd regirock boss, bestes team route 3-1'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>Route 3-1 führt den bisher härtesten "Stat-Check" im Spiel ein. Der Endboss, Regirock, ist eine wandelnde Festung.</p>
              <p>Mit fast 1.000.000 Rüstung ist es mathematisch unmöglich, Regirock mit Standard-Türmen wie Snibunna oder Absol zu töten. Ihre Angriffe prallen einfach ab.</p>
              <p>Um zu gewinnen, musst du das Statuseffekt-System verstehen und bei Welle 100 einen kompletten Team-Wechsel durchführen.</p>
              
              <h3>📊 Boss-Profil: Regirock</h3>
              <ul>
                <li><strong>Name:</strong> Regirock (Das Steingipfel-Pokémon)</li>
                <li><strong>Typ:</strong> Gestein</li>
                <li><strong>Rüstung:</strong> 985.714. (Dies ist kein Tippfehler).</li>
                <li><strong>Schwäche:</strong> Wahrer Schaden (Gift / Verbrennung).</li>
                <li><strong>Immunität:</strong> Hochgradig resistent gegen Stun und Slow. Verlasse dich hier nicht auf Corasonn.</li>
              </ul>
      
              <img src="/images/map-route/3-1-03.png" alt="Route 3-1 Karte" class="route-map">
              
              <h3>🏆 Die Strategie: Der "Toxic" Swap</h3>
              <p>Diese Strategie erfordert, dass du zwei verschiedene Spiele spielst.</p>
              <ul>
                <li><strong>Der Clear:</strong> Ein Standard-Team, um die Wellen 1-99 zu schlagen.</li>
                <li><strong>Der Kill:</strong> Ein spezialisiertes Team nur für Welle 100.</li>
              </ul>
              
              <h4>Phase 1: Wellen 1-99 (AOE Clear)</h4>
              <p>Nutze für die ersten 99 Wellen deine Standard-Carry-Einheiten mit hohem Level.</p>
              <ul>
                <li><strong>Maracamba (Mitte):</strong> Besiegt Pflanzen/Wasser-Typen mühelos.</li>
                <li><strong>Resladero / Staraptor:</strong> Guter physischer Schaden zum Aufräumen.</li>
                <li><strong>Kramshef:</strong> Essenziell für Anti-Unsichtbarkeit auf den Bergen.</li>
              </ul>
              
              <h4>Phase 2: Welle 100 (Der Gift-Swap)</h4>
              <p>Sobald Welle 100 beginnt, <strong>PAUSIERE das Spiel</strong>. Regirocks Rüstung macht dein aktuelles Team nutzlos.</p>
              <ol>
                <li><strong>VERKAUFE</strong> deine physischen Schadensausteiler (Maracamba, Resladero, Absol, etc.).</li>
                <li><strong>BEHALTE</strong> dein Kramshef (zur Sicherheit) und Ditto.</li>
                <li><strong>KAUFE</strong> jede Gift-Einheit, die du hast.</li>
              </ol>
              
              <h4>Das Gift-Dream-Team</h4>
              <p>Platziere diese Einheiten in der Mitte, um ihre Einsatzzeit an Regirock zu maximieren:</p>
              <ul>
                <li><strong>Smogmog:</strong> Der beste Gift-Verteiler. Verbreitet Giftwolken.</li>
                <li><strong>Arbok:</strong> Schnelle Angriffe, um Gift schnell zu stapeln.</li>
                <li><strong>Schluckwech:</strong> Zäh und verursacht konstanten DOT (Schaden über Zeit).</li>
                <li><strong>Ariados:</strong> Fügt eine weitere Giftschicht hinzu.</li>
                <li><strong>Ditto:</strong> Kopiert Smogmog, um die Giftwolken zu verdoppeln.</li>
              </ul>
      
              <img src="/images/map-route/3-1-02.png" alt="Route 3-1 Karte" class="route-map">
              
              <h3>🧪 Warum das funktioniert: Die Mathematik des Giftes</h3>
              <ul>
                <li>In PokePath TD verursacht Gift einen Schaden in Höhe von <strong>0,1% der maximalen KP des Gegners pro Tick</strong>.</li>
                <li><strong>Entscheidend:</strong> Giftschaden <strong>IGNORIERT RÜSTUNG</strong>.</li>
                <li><strong>Skalierung:</strong> Je mehr Giftstapel du anwendest, desto höher ist der Schaden pro Sekunde.</li>
                <li><strong>Ergebnis:</strong> Regirocks 1 Million Rüstung wird komplett umgangen. Sein riesiger KP-Pool arbeitet sogar gegen ihn, da prozentualer Schaden bei Zielen mit hohen KP stärker einschlägt.</li>
              </ul>
              
              <h3>📝 Schritt-für-Schritt Walkthrough</h3>
              <ol>
                <li><strong>Wirtschaft aufbauen:</strong> Nutze Snobilikat/Mauzi in frühen Wellen, um Gold zu farmen, falls nötig (Level 100 Spieler werden das meist nicht brauchen).</li>
                <li><strong>Überleben:</strong> Spiele bis Welle 99.</li>
                <li><strong>Swap:</strong> Führe den "Toxic Swap" bei Welle 100 durch.</li>
                <li><strong>Beobachten:</strong> Du wirst lila Schadenszahlen sehen. Zuerst sind sie klein, aber innerhalb von Sekunden wird Regirocks KP-Balken rasant sinken.</li>
                <li><strong>Sieg:</strong> Er wird zerbröseln, bevor er das Ende der Z-Kurve erreicht.</li>
              </ol>
              
              <h3>🗺️ Gelände-Analyse</h3>
              <p>Route 3-1 bietet dichte Vegetation auf der gesamten Karte, was Pflanzen-Pokémon hocheffektiv für das Klären der Wellen macht.</p>
              
              <h4>Straßen & Pfade</h4>
              <ul>
                <li><strong>Hauptpfad:</strong> Pfad durch dichten Wald (Lang, 3 Chokepoints)</li>
                <li><strong>Lichtungspfad:</strong> Lichtungspfad mit besserer Sicht (Mittel, 1 Chokepoint)</li>
              </ul>
              
              <h4>Gras & Vegetation</h4>
              <ul>
                <li><strong>Dichter Wald:</strong> Bedeckt die gesamte Karte (Sehr hohe Abdeckung) - Pflanzen-Pokémon erhalten 2x Power-Bonus, Gegner bewegen sich langsamer.</li>
                <li><strong>Dickes Unterholz:</strong> Entlang der Pfade (Hohe Abdeckung) - Pflanzen-Pokémon erhalten Power-Bonus.</li>
              </ul>
              
              <h4>Strategische Chokepoints</h4>
              <ul>
                <li><strong>Waldlichtung:</strong> Offener Bereich im dichten Wald (Sehr hohe Priorität)</li>
                <li><strong>Pfadverengung:</strong> Pfad verengt sich zwischen Bäumen (Hohe Priorität)</li>
              </ul>
              
              <h3>⚔️ Team-Zusammensetzung</h3>
              <h4>Early & Mid Game (Wellen 1-99)</h4>
              <p>Nutze Maracamba (Mitte), Resladero/Staraptor (physischer Schaden) und Kramshef (Anti-Unsichtbarkeit), um die Wellen effizient zu klären.</p>
      
              <img src="/images/map-route/3-1-01.png" alt="Route 3-1 Karte" class="route-map">
              
              <h4>Late Game (Welle 100)</h4>
              <p>Wechsle zum Gift-Dream-Team: Smogmog (Kern), Arbok, Schluckwech, Ariados, Ditto (kopiert Smogmog) und behalte Kramshef zur Sicherheit.</p>
            </div>
          `
    },

    {
        id: 'how-to-beat-route-3-2-regice-dewgong-strategy',
        routeNumber: '3-2',
        name: 'PokePath TD Route 3-2 Guide: Die Jugong Stun-Lock-Strategie',
        mapImage: '/images/map-route/3-2.png',
        stars: 400,
        starsSecondary: 0,
        difficulty: 'Schwer',
        difficultyLevel: 3,
        terrain: ['Feld', 'Gras', 'Gebirge'],
        description: 'Route mit gemischtem Gelände und strategischen Engpässen. Der Endboss Regice erfordert eine einzigartige Jugong-Kontrollstrategie.',
        totalWaves: 100,
        recommendedTypes: ['Eis', 'Wasser', 'Boden', 'Pflanze'],
        recommendedPokemon: ['Jugong', 'Ditto', 'Frigometri', 'Snibunna', 'Welsar', 'Corasonn', 'Maracamba', 'Gewaldro', 'Tangoloss'],
        strategies: ['Jugong Solo-Kontrolle', 'Eisbrecher', 'Swap-Strategie'],
        playstyle: 'Taktisch',
        tips: [
            'Nutze die Swap-Strategie: Pflanzen-Team für Wellen 1-99, dann Wechsel zum Eisbrecher-Team für Regice',
            'Jugong ist essenziell für Welle 100 – 30% Chance, Regice für 2 Sekunden zu paralysieren',
            'Platziere Jugong in der zentralsten Position für maximale Abdeckung',
            'Nutze Ditto, um sich in Jugong zu verwandeln, für eine doppelte Betäubungschance (Perma-Stun)',
            'Frigometri und Snibunna liefern den nötigen Roh-Schaden, um Regices 190.400 Rüstung zu brechen',
            'Corasonn bietet globale Verlangsamung, um Regice auch ohne Betäubung langsam zu halten'
        ],
        teamComposition: {
            early: ['Maracamba', 'Gewaldro', 'Tangoloss'],
            mid: ['Maracamba', 'Gewaldro', 'Tangoloss'],
            late: ['Jugong', 'Ditto', 'Frigometri', 'Snibunna', 'Welsar', 'Corasonn']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Pfad durch abwechslungsreiches Gelände', length: 'Sehr lang', chokepoints: 4 },
                { description: 'Bergpass mit Grasfeldern', length: 'Lang', chokepoints: 2 }
            ],
            water: [],
            mountains: [
                { description: 'Strategische Berggipfel mit Blick auf die Pfade', height: 'Hoch', strategicValue: 'Sehr hoch', benefits: ['+35% Reichweiten-Bonus', 'Kann mehrere Pfadabschnitte kontrollieren'] },
                { description: 'Felsige Hügel entlang der Pfade', height: 'Mittel', strategicValue: 'Hoch', benefits: ['+20% Reichweiten-Bonus'] }
            ],
            grass: [
                { description: 'Grasfelder in Tälern zwischen Bergen', coverage: 'Hoch', benefits: ['Pflanzen-Pokémon erhalten 2x Power-Bonus'] },
                { description: 'Wiesenbereiche', coverage: 'Mittel', benefits: ['Pflanzen-Pokémon erhalten Power-Bonus'] }
            ],
            chokepoints: [
                { location: 'Bergpass', description: 'Enger Durchgang zwischen Gipfeln', priority: 'Sehr hoch' },
                { location: 'Taleingang', description: 'Pfad führt ins Grastal', priority: 'Hoch' },
                { location: 'Pfadkonvergenz', description: 'Mehrere Pfade treffen aufeinander', priority: 'Hoch' }
            ]
        },
        seo: {
            title: 'PokePath TD Route 3-2 Guide: Die Jugong Stun-Lock-Strategie',
            description: "Regice unbesiegbar? Das Geheimnis ist nicht der Schaden, sondern Jugong. Lerne die Level 100 Jugong Perma-Stun-Strategie, um den Boss von Route 3-2 einzufrieren.",
            keywords: 'pokepathtd route 3-2, regice besiegen pokepathtd, route 3-2 guide, pokepathtd regice boss, bestes team route 3-2'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>Route 3-2 präsentiert den furchteinflößenden Eis-Golem Regice. Mit einem Rüstungswert von 190.400 ist dieser Boss eine Mauer, die die meisten Standard-Teams stoppt.</p>
              <p>Gängige Strategien verlassen sich darauf, mehrere Betäubungseinheiten wie Lapras und Ampharos zu stapeln. Wenn du jedoch Level 100 erreicht hast, kannst du eine viel effizientere Strategie anwenden.</p>
              <p>Dieser Guide beschreibt den "Jugong Solo-Kontroll"-Build, der den Schaden maximiert, indem er auf einen einzigen, mächtigen Controller setzt.</p>
              
              <h3>🛡️ Boss-Analyse: Warum Regice schwierig ist</h3>
              <ul>
                <li><strong>Rüstung (190.400):</strong> Dies ist die Hauptmechanik. Jede Einheit mit einer Angriffskraft niedriger als dieser Wert verursacht effektiv null Schaden. Du benötigst Einheiten mit hohen Werten.</li>
                <li><strong>Immunität:</strong> Regice ist gegen viele Statuseffekte resistent, aber er ist <strong>NICHT immun gegen Jugongs Paralyse</strong>.</li>
              </ul>
      
              <img src="/images/map-route/3-2-03.png" alt="Route 3-2 Karte" class="route-map">
              
              <h3>🏆 Das beste Team: Die "Eisbrecher"-Truppe</h3>
              <p>Wir haben Lapras aus dieser Aufstellung entfernt, um Platz für Einheiten mit höherem DPS wie Frigometri zu machen. Hier ist der Grund:</p>
              
              <h4>1. Der Kern: Jugong (Level 100)</h4>
              <ul>
                <li><strong>Rolle:</strong> Solo-Crowd-Control.</li>
                <li><strong>Die Mechanik:</strong> Jugongs Angriffe haben eine 30%ige Chance, das Ziel für 2 Sekunden zu paralysieren.</li>
                <li><strong>Warum kein Lapras?</strong> Auf Level 100 erlauben es Jugongs Werte, effizient anzugreifen und zu überleben. Die Dauer von 2 Sekunden ist lang genug, sodass kein zweiter Betäuber nötig ist. Wenn du Jugong mit Ditto kopierst, kannst du Regice theoretisch permanent betäubt halten (Perma-Stun).</li>
              </ul>
              
              <h4>2. Die Schwergewichte: Frigometri & Snibunna</h4>
              <p>Da wir durch das Entfernen von Lapras einen Slot frei gemacht haben, fügen wir rohe Kraft hinzu.</p>
              <ul>
                <li><strong>Frigometri (Level 100):</strong>
                  <ul>
                    <li><strong>Platzierung:</strong> Zentrales Feld / Wasserkante.</li>
                    <li><strong>Warum?</strong> Frigometri hat auf Level 100 massive Basiswerte. Seine hohe Kraft erlaubt es, Regices Rüstung natürlich abzutragen.</li>
                  </ul>
                </li>
                <li><strong>Snibunna:</strong>
                  <ul>
                    <li><strong>Rolle:</strong> Rüstungsdurchschlag.</li>
                    <li><strong>Warum?</strong> Kritische Treffer verursachen doppelten Schaden. Snibunna ist immer noch der König des Einzelschaden-DPS. Wenn Regice durch Jugong betäubt ist, kann Snibunna ungehindert kritische Treffer landen.</li>
                  </ul>
                </li>
              </ul>
              
              <h4>3. Die Unterstützung: Welsar & Corasonn</h4>
              <ul>
                <li><strong>Welsar:</strong> Bietet Boden/Wasser-Abdeckung und fungiert als solider Anker in den Seen.</li>
                <li><strong>Corasonn:</strong> Bietet die globale Verlangsamung (300 Reichweite). Selbst wenn Regice nicht betäubt ist, bewegt er sich dank Corasonn wie in Zeitlupe.</li>
              </ul>
      
              <img src="/images/map-route/3-2-01.png" alt="Route 3-2 Karte" class="route-map">
              
              <h3>📝 Detaillierte Strategie: Der Welle 100 Swap</h3>
              
              <h4>Phase 1: Der Pflanzen-Clear (Wellen 1-99)</h4>
              <p>Route 3-2 ist gefüllt mit Wasser- und Boden-Gegnern.</p>
              <ul>
                <li>Nutze <strong>Maracamba, Gewaldro und Tangoloss</strong>.</li>
                <li>Diese Pflanzen-Typen werden die Wellen viel schneller vernichten als dein Boss-Team.</li>
              </ul>
              
              <h4>Phase 2: Das Boss-Setup (Welle 100)</h4>
              <ol>
                <li><strong>Verkaufen:</strong> Entferne deine Pflanzen-Einheiten. Sie können Regices Rüstung nicht ankratzen.</li>
                <li><strong>Jugong aufstellen:</strong> Platziere es an der zentralsten verfügbaren Position (oder im Wasser für den Geländebonus, wobei das zentrale Feld eine bessere Abdeckung der Schleife bietet).</li>
                <li><strong>DPS aufstellen:</strong> Platziere Frigometri und Snibunna in der Nähe von Jugong.</li>
                <li><strong>Sieg:</strong> Regice läuft in die Reichweite, wird von Jugong paralysiert und dann von deinen Hochleistungseinheiten zerlegt.</li>
              </ol>
              
              <h3>💡 Pro-Tipp: Der Ditto-Faktor</h3>
              <p>Wenn du das Gefühl hast, dass dein Glück (RNG) schlecht ist und Jugong nicht oft genug betäubt:</p>
              <ul>
                <li>Verwandle Ditto in Jugong.</li>
                <li>Zwei Jugongs, die dasselbe Ziel angreifen, erhöhen die Wahrscheinlichkeit einer Betäubung signifikant. Dies ist der sicherste Weg, um sicherzustellen, dass Regice sich niemals bewegt.</li>
              </ul>
      
              <img src="/images/map-route/3-2-02.png" alt="Route 3-2 Karte" class="route-map">
              
              <h3>🗺️ Gelände-Analyse</h3>
              <p>Route 3-2 bietet gemischtes Gelände mit strategischen Engpässen, was die Positionierung entscheidend für den Erfolg macht.</p>
              
              <h4>Straßen & Pfade</h4>
              <ul>
                <li><strong>Hauptpfad:</strong> Pfad durch abwechslungsreiches Gelände (Sehr lang, 4 Engpässe)</li>
                <li><strong>Bergpass:</strong> Bergpass mit Grasfeldern (Lang, 2 Engpässe)</li>
              </ul>
              
              <h4>Berge & Anhöhen</h4>
              <ul>
                <li><strong>Strategische Gipfel:</strong> Strategische Berggipfel mit Blick auf die Pfade (Sehr hoher strategischer Wert) - +35% Reichweiten-Bonus, kann mehrere Pfadabschnitte kontrollieren</li>
                <li><strong>Felsige Hügel:</strong> Felsige Hügel entlang der Pfade (Hoher strategischer Wert) - +20% Reichweiten-Bonus</li>
              </ul>
              
              <h4>Gras & Vegetation</h4>
              <ul>
                <li><strong>Grasfelder:</strong> Grasfelder in Tälern zwischen Bergen (Hohe Abdeckung) - Pflanzen-Pokémon erhalten 2x Power-Bonus</li>
                <li><strong>Wiesenbereiche:</strong> Wiesenbereiche (Mittlere Abdeckung) - Pflanzen-Pokémon erhalten Power-Bonus</li>
              </ul>
              
              <h4>Strategische Engpässe</h4>
              <ul>
                <li><strong>Bergpass:</strong> Enger Durchgang zwischen Gipfeln (Sehr hohe Priorität)</li>
                <li><strong>Taleingang:</strong> Pfad führt ins Grastal (Hohe Priorität)</li>
                <li><strong>Pfadkonvergenz:</strong> Mehrere Pfade treffen aufeinander (Hohe Priorität)</li>
              </ul>
              
              <h3>⚔️ Team-Zusammensetzung</h3>
              <h4>Early & Mid Game (Wellen 1-99)</h4>
              <p>Nutze Pflanzen-Pokémon (Maracamba, Gewaldro, Tangoloss), um die Wellen effizient zu klären. Diese Einheiten glänzen gegen Wasser- und Boden-Gegner.</p>
              
              <h4>Late Game (Welle 100)</h4>
              <p>Wechsle zum Eisbrecher-Team: Jugong (Kern-Controller), Ditto (Backup-Betäuber), Frigometri und Snibunna (DPS), Welsar und Corasonn (Utility-Support).</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-3-3-registeel-wave-100-guide',
        routeNumber: '3-3',
        name: 'PokePath TD Route 3-3 Guide: Registeel besiegen (Gift-immun)',
        mapImage: '/images/map-route/3-3.png',
        stars: 600,
        starsSecondary: 0,
        difficulty: 'Sehr schwer',
        difficultyLevel: 4,
        terrain: ['Feld', 'Gras', 'Gebirge', 'Wasser'],
        description: 'Ultimative Herausforderungsroute mit allen Geländearten. Der Endboss Registeel erfordert aufgrund seiner Gift-Immunität eine einzigartige Fluch-Strategie.',
        totalWaves: 100,
        recommendedTypes: ['Geist', 'Boden', 'Pflanze', 'Feuer'],
        recommendedPokemon: ['Gengar', 'Ditto', 'Maracamba', 'Gewaldro', 'Sonnflora', 'Stalobor', 'Jugong', 'Corasonn'],
        strategies: ['Swap-Strategie', 'Fluch-Build', 'Boss-Konter'],
        playstyle: 'Taktisch',
        tips: [
            'Nutze die Swap-Strategie: Pflanzen-Team für Wellen 1-99, dann Wechsel zum Fluch-Team für Registeel',
            'Gengar ist essenziell für Welle 100 – Alptraum-Schaden ignoriert Registeels 238.000 Rüstung',
            'Platziere Gengar auf einer Anhöhe (Berg oben rechts) für maximale Abdeckung',
            'Nutze Ditto, um sich in Gengar zu verwandeln, für doppelte Alptraum-Stapel',
            'Jugong und Corasonn liefern entscheidende Betäubung/Verlangsamung, um Gengar Zeit zum Schadensaufbau zu geben',
            'Behalte Stalobor für beide Teams – bricht Rüstung bei Eliten und unterstützt den Bosskampf'
        ],
        teamComposition: {
            early: ['Maracamba', 'Gewaldro', 'Sonnflora'],
            mid: ['Maracamba', 'Gewaldro', 'Sonnflora', 'Stalobor'],
            late: ['Gengar', 'Ditto', 'Jugong', 'Corasonn', 'Stalobor']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Komplexes Pfadsystem durch alle Geländearten', length: 'Sehr lang', chokepoints: 6 },
                { description: 'Mehrere verzweigte Pfade', length: 'Lang', chokepoints: 4 },
                { description: 'Geheimpfad durch schwieriges Gelände', length: 'Mittel', chokepoints: 2 }
            ],
            water: [
                { description: 'Großer zentraler See', type: 'Tiefes Wasser', strategicValue: 'Sehr hoch', benefits: ['Wasser-Pokémon erhalten 2x Power-Bonus'] },
                { description: 'Flüsse, die durch die Karte fließen', type: 'Fluss', strategicValue: 'Hoch', benefits: ['Wasser-Pokémon erhalten Power-Bonus'] },
                { description: 'Wasserfälle und Teiche', type: 'Wasserfall', strategicValue: 'Mittel', benefits: ['Wasser-Pokémon erhalten Power-Bonus'] }
            ],
            mountains: [
                { description: 'Hohe Gipfel mit maximaler Erhebung', height: 'Sehr hoch', strategicValue: 'Sehr hoch', benefits: ['+60% Reichweiten-Bonus', 'Kann gesamte Kartenabschnitte abdecken'] },
                { description: 'Mehrere Gebirgsketten', height: 'Hoch', strategicValue: 'Sehr hoch', benefits: ['+40% Reichweiten-Bonus'] },
                { description: 'Felsige Klippen und Grate', height: 'Mittel', strategicValue: 'Hoch', benefits: ['+25% Reichweiten-Bonus'] }
            ],
            grass: [
                { description: 'Dichte Wälder, die große Flächen bedecken', coverage: 'Sehr hoch', benefits: ['Pflanzen-Pokémon erhalten 2x Power-Bonus'] },
                { description: 'Grasland und Wiesen', coverage: 'Hoch', benefits: ['Pflanzen-Pokémon erhalten Power-Bonus'] }
            ],
            chokepoints: [
                { location: 'Zentraler Berggipfel', description: 'Höchster Punkt mit Blick auf die gesamte Karte', priority: 'Sehr hoch' },
                { location: 'Seebrücke', description: 'Hauptbrücke über den zentralen See', priority: 'Sehr hoch' },
                { location: 'Bergpass', description: 'Enger Pass zwischen Gipfeln', priority: 'Sehr hoch' },
                { location: 'Waldlichtung', description: 'Offener Bereich im dichten Wald', priority: 'Hoch' },
                { location: 'Flussüberquerung', description: 'Pfad kreuzt den Fluss', priority: 'Hoch' },
                { location: 'Pfadkreuzung', description: 'Mehrere Pfade treffen zusammen', priority: 'Hoch' }
            ]
        },
        seo: {
            title: 'PokePath TD Route 3-3 Guide: Registeel besiegen (Gift-immun)',
            description: 'Registeel hat 238k Rüstung und ist immun gegen Gift. Lerne die "Gengar-Fluch-Strategie", um den Boss von Route 3-3 mit unendlich skalierendem Schaden zu besiegen.',
            keywords: 'pokepathtd route 3-3, registeel besiegen pokepathtd, route 3-3 guide, pokepathtd registeel boss, bestes team route 3-3'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>Route 3-3 ist der Höhepunkt der dritten Region. Die Karte selbst ist lang und gewunden, aber der wahre Test ist der Endboss, Registeel.</p>
              <p>Spieler, die sich bei Regirock auf die "Gift-Strategie" verlassen haben, werden hier auf eine Mauer stoßen. Registeel ist vom Typ Stahl, was bedeutet, dass er <strong>zu 100% immun gegen Gift</strong> ist.</p>
              <p>Wie fügt man ihm bei 238.000 Rüstung und Gift-Immunität Schaden zu? Die Antwort liegt im Statuseffekt des Typs Geist: <strong>Fluch (Alptraum)</strong>.</p>
              
              <h3>🛡️ Boss-Analyse: Registeel</h3>
              <ul>
                <li><strong>Rüstung:</strong> 238.000. (Physische Angriffe verursachen ~1 Schaden).</li>
                <li><strong>Immunitäten:</strong> Gift. Benutze kein Smogmog oder Arbok.</li>
                <li><strong>Schwächen:</strong>
                  <ul>
                    <li>Boden: (Stalobor / Libelldra).</li>
                    <li>Feuer: (Glurak / Tornupto).</li>
                    <li>Fluch: (Gengar / Echnatoll / Banette).</li>
                  </ul>
                </li>
              </ul>
      
              <img src="/images/map-route/3-3-03.png" alt="Route 3-3 Karte" class="route-map">
              
              <h3>🏆 Die Zwei-Team-Strategie</h3>
              <p>Da die regulären Wellen AOE benötigen und der Boss spezifische Konter erfordert, nutzen wir eine "Swap-Strategie".</p>
              
              <h4>Team 1: Der Wellen-Clear (Wellen 1-99)</h4>
              <p>Route 3-3 wird von Gesteins-, Boden- und Stahl-Typen bevölkert.</p>
              <ul>
                <li><strong>Kern: Pflanzen-Typen.</strong></li>
                <li><strong>Maracamba & Gewaldro:</strong> Platziert im zentralen Grasfleck. Sie zerfetzen die schweren Gesteins-/Boden-Wellen.</li>
                <li><strong>Sonnflora:</strong> Essenzieller Schadensbuff.</li>
                <li><strong>Stalobor:</strong> In der Nähe des Spawns platziert, um die Rüstung von Elite-Mobs zu brechen.</li>
              </ul>
              
              <h4>Team 2: Die Boss-Killer (Welle 100)</h4>
              <p>Wenn Registeel erscheint, <strong>PAUSIERE das Spiel</strong>. Verkaufe deine Pflanzen-Einheiten (außer Sonnflora, wenn du Platz hast) und stelle das Fluch-Team auf.</p>
              
              <h4>1. Der MVP: Gengar (Level 100)</h4>
              <ul>
                <li><strong>Rolle:</strong> Unendlich skalierender Schaden.</li>
                <li><strong>Passiv:</strong> Alptraum. Wendet Stapel an, die Schaden über Zeit verursachen.</li>
                <li><strong>Warum es gewinnt:</strong> Alptraum-Schaden ignoriert Rüstung. Im Gegensatz zu physischen Angriffen steigert er sich, je länger der Kampf dauert. Da Registeel sehr zäh ist, hat Gengar genug Zeit, diesen Schaden auf ein tödliches Niveau zu heben.</li>
                <li><strong>Platzierung:</strong> Berg oben rechts (oder jede Anhöhe, die den Pfad abdeckt).</li>
              </ul>
              
              <h4>2. Der Klon: Ditto</h4>
              <ul>
                <li><strong>Rolle:</strong> Zweiter Gengar.</li>
                <li><strong>Strategie:</strong> Verwandle Ditto in Gengar. Zwei Gengars bedeuten doppelte Alptraum-Stapel. Dies halbiert die Zeit bis zum Kill.</li>
              </ul>
              
              <h4>3. Die Verzögerer: Jugong & Corasonn</h4>
              <ul>
                <li><strong>Rolle:</strong> Zeitgewinn.</li>
                <li><strong>Strategie:</strong> Gengar braucht Zeit, um den Schaden aufzubauen.
                  <ul>
                    <li><strong>Corasonn:</strong> Verlangsamt Registeel.</li>
                    <li><strong>Jugong:</strong> Betäubt Registeel an Ort und Stelle.</li>
                  </ul>
                </li>
                <li>Während Registeel betäubt ist, tickt der Alptraum-Schaden weiter.</li>
              </ul>
              
              <h4>4. Der Rüstungsbrecher: Stalobor</h4>
              <ul>
                <li><strong>Rolle:</strong> Support-DPS.</li>
                <li><strong>Strategie:</strong> Behalte Stalobor. Seine Boden-Attacken sind sehr effektiv gegen Stahl, und sein Passiv verursacht doppelten Schaden an Rüstungen. Er wird Gengar nicht im Schaden übertreffen, trägt aber signifikanten Chip-Schaden bei.</li>
              </ul>
      
              <img src="/images/map-route/3-3-02.png" alt="Route 3-3 Karte" class="route-map">
              
              <h3>📝 Schritt-für-Schritt Walkthrough</h3>
              <ol>
                <li><strong>Wellen 1-99:</strong> Spiele normal mit deinem Pflanzen/Boden-Team.</li>
                <li><strong>Welle 100:</strong> Pause.</li>
                <li><strong>Verkaufen:</strong> Entferne Maracamba, Gewaldro und andere physische Einheiten, die nicht vom Typ Boden sind.</li>
                <li><strong>Kaufen:</strong> Stelle Gengar und Ditto auf.</li>
                <li><strong>Support:</strong> Stelle sicher, dass Jugong und Corasonn in Reichweite des Boss-Pfades sind.</li>
                <li><strong>Sieg:</strong> Beobachte, wie Registeels Leben dahinschmilzt, während die lila Alptraum-Zahlen immer größer werden.</li>
              </ol>
              
              <h3>🗺️ Gelände-Analyse</h3>
              <p>Route 3-3 bietet ein komplexes Pfadsystem durch alle Geländearten, was sie zur ultimativen Herausforderungsroute macht.</p>
              
              <h4>Straßen & Pfade</h4>
              <ul>
                <li><strong>Hauptpfad:</strong> Komplexes Pfadsystem durch alle Geländearten (Sehr lang, 6 Engpässe)</li>
                <li><strong>Verzweigte Pfade:</strong> Mehrere verzweigte Pfade (Lang, 4 Engpässe)</li>
                <li><strong>Geheimpfad:</strong> Geheimpfad durch schwieriges Gelände (Mittel, 2 Engpässe)</li>
              </ul>
              
              <h4>Wasserbereiche</h4>
              <ul>
                <li><strong>Zentraler See:</strong> Großer zentraler See (Sehr hoher strategischer Wert) - Wasser-Pokémon erhalten 2x Power-Bonus</li>
                <li><strong>Flüsse:</strong> Flüsse, die durch die Karte fließen (Hoher strategischer Wert) - Wasser-Pokémon erhalten Power-Bonus</li>
                <li><strong>Wasserfälle:</strong> Wasserfälle und Teiche (Mittlerer strategischer Wert) - Wasser-Pokémon erhalten Power-Bonus</li>
              </ul>
              
              <h4>Berge & Anhöhen</h4>
              <ul>
                <li><strong>Hohe Gipfel:</strong> Maximale Erhebung (Sehr hoher strategischer Wert) - +60% Reichweiten-Bonus, kann gesamte Kartenabschnitte abdecken</li>
                <li><strong>Gebirgsketten:</strong> Mehrere Gebirgsketten (Sehr hoher strategischer Wert) - +40% Reichweiten-Bonus</li>
                <li><strong>Felsige Klippen:</strong> Felsige Klippen und Grate (Hoher strategischer Wert) - +25% Reichweiten-Bonus</li>
              </ul>
              
              <h4>Gras & Vegetation</h4>
              <ul>
                <li><strong>Dichte Wälder:</strong> Große Flächen (Sehr hohe Abdeckung) - Pflanzen-Pokémon erhalten 2x Power-Bonus</li>
                <li><strong>Grasland:</strong> Grasland und Wiesen (Hohe Abdeckung) - Pflanzen-Pokémon erhalten Power-Bonus</li>
              </ul>
              
              <h4>Strategische Engpässe</h4>
              <ul>
                <li><strong>Zentraler Berggipfel:</strong> Höchster Punkt mit Blick auf die gesamte Karte (Sehr hohe Priorität)</li>
                <li><strong>Seebrücke:</strong> Hauptbrücke über den zentralen See (Sehr hohe Priorität)</li>
                <li><strong>Bergpass:</strong> Enger Pass zwischen Gipfeln (Sehr hohe Priorität)</li>
                <li><strong>Waldlichtung:</strong> Offener Bereich im dichten Wald (Hohe Priorität)</li>
                <li><strong>Flussüberquerung:</strong> Pfad kreuzt den Fluss (Hohe Priorität)</li>
                <li><strong>Pfadkreuzung:</strong> Mehrere Pfade treffen zusammen (Hohe Priorität)</li>
              </ul>
      
              <img src="/images/map-route/3-3-01.png" alt="Route 3-3 Karte" class="route-map">
              
              <h3>⚔️ Team-Zusammensetzung</h3>
              <h4>Early Game (Level 1-15)</h4>
              <p>Beginne mit beliebigen Pokémon der Level 1-50. Konzentriere dich auf den Aufbau der Wirtschaft und das Klären der frühen Wellen.</p>
              
              <h4>Mid Game (Level 16-35)</h4>
              <p>Wechsle zu Pokémon der Level 50-80. Beginne mit dem Aufbau deines Pflanzen-Kerns für den Wellen-Clear.</p>
              
              <h4>Late Game (Level 36-100)</h4>
              <p>Setze Level 100 Meta-Pokémon ein. Für die Wellen 1-99 nutze Pflanzen-Typen (Maracamba, Gewaldro, Sonnflora) und Stalobor. Für Welle 100 wechsle zu Gengar, Ditto, Jugong und Corasonn.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-1-4-regigigas-wave-100-guide',
        routeNumber: '1-4',
        name: 'PokéPath TD Route 1-4 Guide: Regigigas besiegen (Der Schwarm)',
        mapImage: '/images/map-route/1-4.png',
        stars: 650,
        starsSecondary: 0,
        difficulty: 'Sehr Schwer',
        difficultyLevel: 4,
        terrain: ['Feld', 'Gras', 'Wald'],
        description: 'Die "Heroic"-Version von Route 1. Bietet duale Spawnpunkte und massive Schwärme von Normal-/Flug-Typen. Boss Regigigas erfordert massiven DPS.',
        totalWaves: 100,
        recommendedTypes: ['Kampf', 'Elektro', 'Gestein', 'Feuer'],
        recommendedPokemon: ['Glurak', 'Raichu', 'Machomei', 'Geowaz', 'Lucario', 'Zapdos', 'Giflor', 'Tornupto'],
        strategies: ['AOE-Spam', 'Dual-Lane-Verteidigung', 'Beulenhelm-Meta'],
        playstyle: 'Aggressiv',
        tips: [
            'Rüste deine Tanks (Geowaz/Relaxo) mit dem Beulenhelm aus – Schwärme besiegen sich bei Kontakt selbst',
            'Raichu ist der MVP für Flug-Schwärme dank der Kettenblitz-Passiven',
            'Verwende keine Einzelschuss-Scharfschützen (wie Intelleon); du wirst von der schieren Menge überwältigt',
            'Boss Regigigas hat "Saumselig" – er bewegt sich 10 Sekunden lang langsam und sprintet dann. Töte ihn schnell!',
            'Nutze Giflor/Smettbo am Konvergenzpunkt des Pfades, um den Schwarm einzuschläfern/zu betäuben',
            'Kampf-Typen wie Machomei verursachen 2x Schaden an 90% der Gegner hier'
        ],
        teamComposition: {
            early: ['Glutexo', 'Pikachu', 'Kleinstein'],
            mid: ['Glurak', 'Raichu', 'Geowaz', 'Maschock'],
            late: ['Glurak (Y)', 'Raichu', 'Machomei', 'Lucario', 'Zapdos', 'Giflor']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Duale Spawnpunkte, die in einen breiten Pfad münden', length: 'Mittel', chokepoints: 3 },
                { description: 'Offene Felder mit wenig natürlichen Blockaden', length: 'Kurz', chokepoints: 1 }
            ],
            water: [
                { description: 'Kleine Teiche nahe Spawn A', type: 'Flaches Wasser', strategicValue: 'Niedrig', benefits: ['Keine signifikanten'] }
            ],
            mountains: [
                { description: 'Keine Höhenmodifikatoren', height: 'Keine', strategicValue: 'Niedrig', benefits: ['Keine'] }
            ],
            grass: [
                { description: 'Hohes Gras auf 70% der Karte', coverage: 'Sehr Hoch', benefits: ['Pflanzen-Typen erhalten Tarnung (unsichtbar für Gegner)'] },
                { description: 'Dichtes Dickicht am Konvergenzpunkt', coverage: 'Mittel', benefits: ['Verlangsamt Gegner um 15%'] }
            ],
            chokepoints: [
                { location: 'Der Konvergenzpunkt', description: 'Wo Pfad A und Pfad B aufeinandertreffen. Bester Ort für AOE.', priority: 'Sehr Hoch' },
                { location: 'Endstation', description: 'Gerader Pfad vor der Basis. Letzter Widerstand für Kampf-Typen.', priority: 'Hoch' }
            ]
        },
        seo: {
            title: 'PokéPath TD Route 1-4 Guide: Regigigas & Schwarm-Strategie',
            description: 'Route 1-4 bietet massive Schwärme von Tauboss und Rattikarl. Lerne, wie du die "Schwarm"-Mechanik konterst und den Boss Regigigas mit Beulenhelmen besiegst.',
            keywords: 'pokepathtd route 1-4, regigigas besiegen pokepathtd, route 1-4 schwarm guide, beste aoe pokemon, beulenhelm strategie'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>Route 1-4 ist die erste der "Fortgeschrittenen-Karten", die in Version 1.4.1 hinzugefügt wurden. Lass dich nicht vom Namen "Route 1" täuschen; dies ist ein brutaler Test für deine Crowd Control und deinen Flächenschaden (AOE).</p>
              <p>Im Gegensatz zu anderen Karten, die Präzision erfordern, verlangt diese Karte rohe Zerstörung. Du wirst <strong>Wellen von über 50 Gegnern</strong> gleichzeitig gegenüberstehen. Wenn deine Tötungsgeschwindigkeit zu langsam ist, könnte dein Spiel laggen, bevor du überhaupt verlierst.</p>
              
              <h3>🛡️ Boss-Analyse: Regigigas</h3>
              <ul>
                <li><strong>KP:</strong> Massiv (Millionen). Ein reiner Schadensschwamm.</li>
                <li><strong>Fähigkeit: Saumselig.</strong> Bewegt sich in den ersten 10 Sekunden des Kampfes mit 50% Geschwindigkeit, verdoppelt dann sein Tempo und ignoriert Verlangsamungseffekte.</li>
                <li><strong>Schwächen:</strong>
                  <ul>
                    <li>Kampf: (Machomei / Lucario / Meistagrif). <strong>2x Schaden</strong>.</li>
                    <li>Prozentualer Schaden: (Fluch / Egelsamen).</li>
                  </ul>
                </li>
                <li><strong>Bedrohung:</strong> Er greift keine Türme an, er läuft einfach. Wenn er beschleunigt, ist er fast unaufhaltsam.</li>
              </ul>
              
              <h3>🏆 Die "Beulenhelm" & AOE Strategie</h3>
              <p>Wegen der "Schwarm"-Mechanik (viele Gegner, wenig KP) sind Einzelschuss-Türme hier nutzlos. Du brauchst Gegenstände und Einheiten, die mehrere Ziele treffen.</p>
              
              <h4>1. Der MVP: Raichu (Kettenblitz)</h4>
              <ul>
                <li><strong>Rolle:</strong> Luftabwehr / Schwarm-Vernichtung.</li>
                <li><strong>Warum es gewinnt:</strong> Route 1-4 ist voll von Flug-Typen (Tauboss/Ibitak). Raichus Angriffe springen auf nahegelegene Gegner über.</li>
                <li><strong>Item:</strong> <em>Wahlglas</em> (Maximaler Spezial-Angriff) oder <em>Magnet</em>.</li>
              </ul>
              
              <h4>2. Der Tank: Geowaz / Relaxo</h4>
              <ul>
                <li><strong>Rolle:</strong> Physische Mauer.</li>
                <li><strong>Strategie:</strong> Platziere Geowaz an vorderster Front. Die Gegner hier sind meist physische Angreifer vom Typ Normal (Rattikarl, Tauros).</li>
                <li><strong>Schlüssel-Item:</strong> <strong>Beulenhelm</strong>. Jedes Mal, wenn ein Gegnerschwarm deinen Tank beißt, erleiden sie Schaden. Dieser passive Schaden tötet hunderte kleiner Ratten, ohne dass du etwas tun musst.</li>
              </ul>
              
              <h4>3. Der Boss-Killer: Machomei</h4>
              <ul>
                <li><strong>Rolle:</strong> Einzelziel-Nuke.</li>
                <li><strong>Strategie:</strong> Während Raichu die kleinen Mobs erledigt, muss sich Machomei ausschließlich auf die Elite-Mobs und Regigigas konzentrieren.</li>
                <li><strong>Platzierung:</strong> Platziere ihn am "Konvergenzpunkt", wo beide Pfade aufeinandertreffen, damit er niemals aufhört zu schlagen.</li>
              </ul>
              
              <h3>📝 Schritt-für-Schritt Walkthrough</h3>
              <ol>
                <li><strong>Wellen 1-30:</strong> Nutze <strong>Glutexo</strong> oder <strong>Pikachu</strong>. Entwickle sie noch nicht, falls du das Geld für Platzierungen brauchst. Decke beide Spawnpunkte ab.</li>
                <li><strong>Wellen 31-60:</strong> Die Flug-Schwärme beginnen. Entwickle sofort zu <strong>Raichu</strong>. Platziere ein <strong>Giflor</strong> in der Mitte, um den Ansturm zu verlangsamen.</li>
                <li><strong>Wellen 61-90:</strong> Eliten (Tauros/Kangama) erscheinen. Setze <strong>Machomei</strong> ein, ausgerüstet mit einem <em>Schwarzgurt</em> oder <em>Muskelband</em>.</li>
                <li><strong>Welle 100 (Regigigas):</strong> 
                  <ul>
                    <li>Pausiere das Spiel.</li>
                    <li>Stelle sicher, dass alle deine Kampf-Typen am Anfang des Pfades gruppiert sind.</li>
                    <li><strong>Fokussierter Beschuss:</strong> Nutze die Einstellung "Zielpriorität: Stärkstes" bei deinem Machomei, um die Diener zu ignorieren und den Boss zu treffen.</li>
                    <li>Besiege ihn während seiner "Saumselig"-Phase.</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ Gelände-Analyse</h3>
              <p>Die Karte verfügt über zwei unterschiedliche Spawnpunkte, die in einer einzigen, breiten Allee verschmelzen. Diese "Y"-Form definiert deine Strategie.</p>
              
              <h4>Die Dual-Spawns</h4>
              <ul>
                <li><strong>Nord-Spawn:</strong> Hauptsächlich Flug-Typen. Benötigt Elektro-Verteidigung.</li>
                <li><strong>West-Spawn:</strong> Hauptsächlich Boden-/Normal-Typen (Rattfratz/Sandan). Benötigt Pflanzen-/Kampf-Verteidigung.</li>
              </ul>
              
              <h4>Die Konvergenz (Chokepoint)</h4>
              <ul>
                <li><strong>Ort:</strong> Zentrum der Karte.</li>
                <li><strong>Strategischer Wert:</strong> Dies ist der einzige Ort, an dem AOE-Türme Gegner von BEIDEN Spawnpunkten gleichzeitig treffen können. Deine teuersten Türme (Glurak/Tornupto) sollten hier stehen.</li>
              </ul>
              
              <h4>Gras & Dickicht</h4>
              <ul>
                <li><strong>Hohes Gras:</strong> Bedeckt den größten Teil der Karte. Pflanzen-Pokémon, die hier platziert werden, erhalten "Tarnung", was bedeutet, dass Fernkampfgegner nicht auf sie zurückschießen können. Ideal für <strong>Giflor</strong> oder <strong>Bisaflor</strong>.</li>
              </ul>
              
              <h3>⚔️ Empfehlungen zur Teamzusammensetzung</h3>
              <h4>Der "Elektro/Kampf"-Kern</h4>
              <p>Im Gegensatz zu anderen Karten, die Wasser oder Feuer bevorzugen, wird Route 1-4 von den Normal-/Flug-Typen des frühen Spiels dominiert, jedoch auf Level 100 skaliert.</p>
              <ul>
                <li><strong>Raichu / Zapdos:</strong> Essenziell für 50% der Wellen.</li>
                <li><strong>Machomei / Lucario:</strong> Essenziell für die anderen 50% und den Boss.</li>
                <li><strong>Support:</strong> Giflor (Stupsporen sind hier wegen des Gegnervolumens besser als Schlaf).</li>
              </ul>
            </div>
          `
    },
    {
        id: 'how-to-beat-route-2-4-mega-venusaur-wave-100-guide',
        routeNumber: '2-4',
        name: 'PokéPath TD Route 2-4 Guide: Mega-Bisaflor besiegen (Das Toxische Labyrinth)',
        mapImage: '/images/map-route/2-4.png',
        stars: 650,
        starsSecondary: 0,
        difficulty: 'Sehr Schwer',
        difficultyLevel: 4,
        terrain: ['Wald', 'Sumpf', 'Dickicht'],
        description: 'Eine verdrehte Version des Vertania-Waldes. Bäume blockieren die Sichtlinie und Gegner haben eine hohe Regeneration. Boss Mega-Bisaflor reduziert Feuer-/Eis-Schaden.',
        totalWaves: 100,
        recommendedTypes: ['Psycho', 'Flug', 'Stahl', 'Boden'],
        recommendedPokemon: ['Simala', 'Psiana', 'Metagross', 'Washakwil', 'Aerodactyl', 'Iksbat', 'Lahmus', 'Panzaeron'],
        strategies: ['Psycho-Nuke', 'Anti-Regen', 'Drag-and-Drop-Mikro'],
        playstyle: 'Mikromanagement',
        tips: [
            'Boss Mega-Bisaflor hat "Speckschicht" – Feuer- und Eis-Angriffe verursachen 50% weniger Schaden! Verlasse dich nicht auf Glurak.',
            'Nutze Psycho-Typen (Simala), um Gift-Gegner mit einem Schlag zu besiegen, bevor sie regenerieren können.',
            'Bäume blockieren die Sicht! Nutze Flug-Typen (Washakwil) oder platziere Einheiten auf Baumstümpfen für bessere Sicht.',
            'Sumpf-Felder heilen Gift-Gegner. Töte sie, bevor sie den Schlamm betreten.',
            'Stahl-Typen (Metagross) sind immun gegen den globalen Gift-Effekt der Karte.',
            'Nutze das neue v1.4.1 Drag-and-Drop-Feature, um Simala im Labyrinth zu bewegen und dem Boss zu folgen.'
        ],
        teamComposition: {
            early: ['Abra', 'Habitak', 'Zubat'],
            mid: ['Kadabra', 'Ibitak', 'Golbat', 'Metang'],
            late: ['Simala', 'Metagross', 'Washakwil', 'Iksbat', 'Psiana', 'Lahmus']
        },
        terrainAnalysis: {
            roads: [
                { description: 'Enger, Z-förmig gewundener Pfad', length: 'Sehr Lang', chokepoints: 8 },
                { description: 'Pfad ist mit toxischem Schlamm bedeckt (heilt Gegner)', length: 'Mittel', chokepoints: 2 }
            ],
            water: [
                { description: 'Giftige Teiche', type: 'Sumpf', strategicValue: 'Negativ', benefits: ['Schadet Nicht-Gift/Stahl-Typen, die darin stehen'] }
            ],
            mountains: [
                { description: 'Keine Berge, aber riesige Baumstümpfe dienen als Anhöhe', height: 'Niedrig', strategicValue: 'Hoch', benefits: ['+15% Reichweite', 'Ignoriert Sichtblockade durch Bäume'] }
            ],
            grass: [
                { description: 'Dichte Waldbäume', coverage: 'Max', benefits: ['Blockiert die Sichtlinie für Bodeneinheiten'] },
                { description: 'Heilendes Dickicht', coverage: 'Niedrig', benefits: ['Gegner heilen hier 10% KP pro Sek.'] }
            ],
            chokepoints: [
                { location: 'Der zentrale Baumstumpf', description: 'Mitte des Labyrinths. Bester Ort für Simala.', priority: 'Sehr Hoch' },
                { location: 'Das Ausgangstor', description: 'Letzte Gerade. Gut für Sturzflug-Spam.', priority: 'Hoch' }
            ]
        },
        seo: {
            title: 'PokéPath TD Route 2-4 Guide: Mega-Bisaflor & Regenerations-Strategie',
            description: 'Route 2-4 ist ein Labyrinth aus regenerativen Gift-Typen. Feuer ist hier schwach! Lerne, wie du Psycho-Typen und die Drag-and-Drop-Mechanik nutzt, um Mega-Bisaflor zu schlagen.',
            keywords: 'pokepathtd route 2-4, mega-bisaflor besiegen pokepathtd, route 2-4 guide, anti-regen strategie, simala build'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>Route 2-4, bekannt als "Das Toxische Labyrinth", ist ein Albtraum für Spieler, die auf kontinuierlichen kleinen Schaden setzen. Der Gimmick dieser Karte ist die <strong>Regeneration</strong>. Fast jeder Gegner hier (Kokuna, Bibor, Arbok, Sleimok) heilt sich schnell, wenn er keinen tödlichen Schaden erleidet.</p>
              <p>Zudem blockiert der dichte Wald die Sicht deiner Türme. Ein Glurak auf der linken Seite kann keine Gegner auf der rechten Seite sehen. Diese Karte erfordert, dass du die <strong>v1.4.1 Drag-and-Drop</strong> Mechanik meisterst.</p>
              
              <h3>🛡️ Boss-Analyse: Mega-Bisaflor</h3>
              <ul>
                <li><strong>KP:</strong> Sehr hoch. Ein Tank-Boss.</li>
                <li><strong>Passive 1: Speckschicht.</strong> Erleidet <strong>50% reduzierten Schaden</strong> durch Feuer- und Eis-Attacken. Dein Starter-Glurak ist hier nutzlos!</li>
                <li><strong>Passive 2: Synthese.</strong> Heilt alle 5 Sekunden 5% der maximalen KP. Du musst diese Heilung mit deinem DPS übertreffen.</li>
                <li><strong>Schwächen:</strong>
                  <ul>
                    <li>Psycho: (Simala / Mewtu / Psiana). <strong>2x Schaden</strong>.</li>
                    <li>Flug: (Washakwil / Aerodactyl). <strong>2x Schaden</strong>.</li>
                  </ul>
                </li>
              </ul>
              
              <h3>🏆 Die "Psycho-Burst" Strategie</h3>
              <p>Da sich Gegner mit der Zeit heilen, sind "Damage over Time"-Strategien (Verbrennung/Gift) ineffektiv. Du brauchst "One-Shot"-Potenzial.</p>
              
              <h4>1. Der MVP: Simala (Glaskanone)</h4>
              <ul>
                <li><strong>Rolle:</strong> Burst-Assassine.</li>
                <li><strong>Warum es gewinnt:</strong> Gift-/Kampf-Typen dominieren diese Route. Simala trifft sie mit sehr effektivem Schaden. Seine hohe Geschwindigkeit stellt sicher, dass er trifft, bevor sie regenerieren können.</li>
                <li><strong>Item:</strong> <em>Krummlöffel</em> (20% Psycho-Boost) oder <em>Wahlglas</em> (50% Sp.Atk-Boost).</li>
                <li><strong>Platzierung:</strong> Auf dem "zentralen Baumstumpf" für maximale Sicht.</li>
              </ul>
              
              <h4>2. Der Scout: Washakwil / Iksbat</h4>
              <ul>
                <li><strong>Rolle:</strong> Sicht & Cleanup.</li>
                <li><strong>Warum es gewinnt:</strong> Flug-Typen ignorieren die Sichtlinien-Strafe durch Bäume. Sie können Gegner angreifen, die hinter Wänden verborgen sind.</li>
                <li><strong>Item:</strong> <em>Hackattack</em>.</li>
              </ul>
              
              <h4>3. Die Mauer: Metagross</h4>
              <ul>
                <li><strong>Rolle:</strong> Tank.</li>
                <li><strong>Warum es gewinnt:</strong> Als Stahl/Psycho-Typ ist Metagross <strong>immun gegen Giftwolken</strong> auf der Karte und resistent gegen fast alle Angriffe der lokalen Fauna.</li>
                <li><strong>Strategie:</strong> Platziere ihn ganz am Ende des Labyrinths, um "Leaks" abzufangen.</li>
              </ul>
              
              <h3>📝 Schritt-für-Schritt Walkthrough</h3>
              <ol>
                <li><strong>Wellen 1-20:</strong> Starte mit einem <strong>Abra</strong> und einem <strong>Habitak</strong>. Abra ist im Early Game schwach, also schütze es gut.</li>
                <li><strong>Wellen 21-50:</strong> Die "Regen"-Gegner erscheinen (Sleima/Sleimok). Wenn du Schadenszahlen siehst, sich der KP-Balken aber nicht bewegt, fehlt dir Burst-Schaden. Upgrade Abra so schnell wie möglich zu <strong>Kadabra</strong>.</li>
                <li><strong>Wellen 51-90:</strong> Die Labyrinth-Phase. Gegner werden extrem zäh. Nutze <strong>Lahmus</strong>, um sie zu verlangsamen und für Simalas Psycho-Explosionen zu gruppieren.</li>
                <li><strong>Welle 100 (Mega-Bisaflor):</strong> 
                  <ul>
                    <li><strong>Benutze KEIN Feuer.</strong> Verkaufe alle Feuer-Typen, die du gekauft hast.</li>
                    <li><strong>Mikro-Management:</strong> Während sich Bisaflor durch das Z-förmige Labyrinth bewegt, nutze <strong>Drag-and-Drop</strong>, um dein Simala zum nächsten Baumstumpf vor dem Boss zu bewegen.</li>
                    <li>Du musst deinen Haupt-DPS während dieses Kampfes mindestens 3-4 Mal umpositionieren, um kontinuierlich anzugreifen.</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ Gelände-Analyse</h3>
              <p>Die Karte ist ein dichter Wald mit einem sumpfigen Pfad. Sichtbarkeit ist dein Hauptfeind.</p>
              
              <h4>Der Wald (Sichtblockade)</h4>
              <ul>
                <li><strong>Bäume:</strong> Bodeneinheiten (wie Simala/Metagross) können nicht durch Bäume schießen. Du musst sie an Ecken oder Kreuzungen platzieren.</li>
                <li><strong>Flugeinheiten:</strong> Flug-Typen ignorieren Bäume. Wenn du Probleme mit der Platzierung hast, baue ein reines Flug-Team (Vogel-Spam).</li>
              </ul>
              
              <h4>Der Toxische Sumpf</h4>
              <ul>
                <li><strong>Effekt:</strong> Der Pfad selbst besteht aus lila Schlamm.</li>
                <li><strong>Gegner-Buff:</strong> Gift-Typen (Sleima/Smogon) heilen sich, während sie darauf laufen.</li>
                <li><strong>Spieler-Debuff:</strong> Nicht-Stahl/Gift-Türme, die direkt auf dem Pfad platziert werden, erleiden über Zeit Schaden. Halte deine Einheiten auf dem Gras!</li>
              </ul>
              
              <h3>⚔️ Empfehlungen zur Teamzusammensetzung</h3>
              <h4>Der "Anti-Gift"-Kern</h4>
              <p>Route 2-4 verlangt nach Psycho-Typen. Es ist der perfekte Ort, um dein Abra oder Flegmon zu trainieren.</p>
              <ul>
                <li><strong>Simala:</strong> Essenzieller DPS.</li>
                <li><strong>Metagross:</strong> Bester Tank (immun gegen Gift).</li>
                <li><strong>Washakwil:</strong> Bester physischer Angreifer (Flug ignoriert Bäume).</li>
                <li><strong>Lahmus:</strong> Bietet CC (Crowd Control), um die Regeneration zu stoppen.</li>
              </ul>
            </div>
          `
    },

    {
        id: 'how-to-beat-route-3-4-mega-aggron-wave-100-guide',
        routeNumber: '3-4',
        name: 'PokéPath TD Route 3-4 Guide: Mega-Stolloss besiegen (Der Eisen-Spießrutenlauf)',
        mapImage: '/images/map-route/3-4.png',
        stars: 700,
        starsSecondary: 0,
        difficulty: 'Extrem',
        difficultyLevel: 5,
        terrain: ['Berg', 'Höhle', 'Grat'],
        description: 'Der ultimative Test für Spezial-Angriff. Gegner besitzen eine "Schwere Rüstung", die physischen Schaden blockiert. Physische Angreifer sind hier nutzlos. Boss Mega-Stolloss erfordert Rüstungsdurchdringung.',
        totalWaves: 100,
        recommendedTypes: ['Wasser', 'Feuer', 'Spezial-Kampf', 'Boden'],
        recommendedPokemon: ['Starmie', 'Skelabra', 'Lucario', 'Turtok', 'Nidoking', 'Guardevoir', 'Impoleon', 'Magnezone'],
        strategies: ['Spezial-Angriff-Meta', 'Robustheits-Brecher', 'Item-Wechsel mitten im Kampf'],
        playstyle: 'Loadout-Optimierung',
        tips: [
          'Physische Angreifer (Machomei, Garados, Despotar) verursachen hier aufgrund der Rüstung nur 0-1 Schaden. Benutze sie nicht!',
          'Rüste alle mit "Schlaubrille" oder "Wahlglas" aus. Spezial-Angriff ist der einzige Weg zum Sieg.',
          'Gegner haben "Robustheit" – sie überleben tödliche Treffer mit 1 KP. Nutze Hagel (Rexblisar) oder Verbrennung, um ihnen den Rest zu geben.',
          'Boss Mega-Stolloss hat die Fähigkeit "Filter" – reduziert sehr effektiven Schaden um 25%.',
          'Lucario ist nur dann der MVP, wenn es "Aurasphäre" (Spezial-Angriff) nutzt.',
          'Nutze die Anhöhen! Das Platzieren von Scharfschützen (Intelleon) auf den Graten gewährt massive Reichweite.'
        ],
        teamComposition: {
          early: ['Schiggy', 'Glumanda', 'Magnetilo'],
          mid: ['Schillok', 'Glutexo', 'Magneton', 'Alpollo'],
          late: ['Turtok (Mega)', 'Skelabra', 'Starmie', 'Magnezone', 'Lucario (Spezial)', 'Nidoking']
        },
        terrainAnalysis: {
          roads: [
            { description: 'Der Spießrutenlauf: Ein einzelner, langer, gerader Pfad ohne Schleifen', length: 'Lang', chokepoints: 0 },
            { description: 'Höhleneingang: Enger Tunnel, in dem sich Gegner sammeln', length: 'Kurz', chokepoints: 1 }
          ],
          water: [
            { description: 'Untergrundsee', type: 'Tiefes Wasser', strategicValue: 'Hoch', benefits: ['Wasser-Typen erhalten 2x Kraft'] }
          ],
          mountains: [
            { description: 'Eisengrate', height: 'Max', strategicValue: 'Kritisch', benefits: ['+75% Reichweite', 'Ideal für Scharfschützen'] },
            { description: 'Klippenränder', height: 'Hoch', strategicValue: 'Sehr Hoch', benefits: ['+50% Reichweite'] }
          ],
          grass: [
            { description: 'Keines', coverage: 'Null', benefits: ['Keine Tarnung verfügbar'] }
          ],
          chokepoints: [
            { location: 'Die Brücke', description: 'Eine schmale Brücke über dem See. Gegner sind hier leichte Beute.', priority: 'Max' },
            { location: 'Der Gipfel', description: 'Letzter Aufstieg vor der Basis.', priority: 'Medium' }
          ]
        },
        seo: {
          title: 'PokéPath TD Route 3-4 Guide: Mega-Stolloss & Rüstungsdurchdringungs-Strategie',
          description: 'Gegner auf Route 3-4 sind immun gegen physischen Schaden! Lerne das "Spezial-Angriff-Meta" und wie du Mega-Stolloss mit Starmie und Skelabra in v1.4.1 besiegst.',
          keywords: 'pokepathtd route 3-4, mega stolloss besiegen pokepathtd, route 3-4 guide, spezial angriff build, rüstungsdurchdringung guide'
        },
        detailsHtml: `
          <div class="route-guide">
            <p>Route 3-4, genannt "Der Eisenberg", ist die schwerste Karte, die mit Update 1.4.1 eingeführt wurde. Es ist eine "Stat Check"-Karte, die darauf ausgelegt ist, ausgewogene Teams zu bestrafen.</p>
            <p>Der Gimmick hier ist <strong>Schwere Rüstung</strong>. Jeder Gegner (Kleinstein, Onix, Stahlos, Stolloss) hat massive Verteidigungswerte. Wenn du ein Standard-Team mit physischen Angreifern mitbringst (wie Relaxo oder Machomei), wirst du bereits bei Welle 1 scheitern.</p>
            <p>Um zu gewinnen, musst du das <strong>Spezial-Angriff (Sp.Atk) Meta</strong> annehmen. Du brauchst Magie, Strahlen und elementare Energie.</p>
            
            <h3>🛡️ Boss-Analyse: Mega-Stolloss</h3>
            <ul>
              <li><strong>KP:</strong> Hoch.</li>
              <li><strong>Verteidigung:</strong> Unendlich. Physischer Schaden wird um 99% reduziert.</li>
              <li><strong>Fähigkeit: Filter.</strong> Reduziert den Schaden durch sehr effektive Attacken (Feuer/Kampf/Boden) um 25%. Das macht ihn selbst gegen Konter überraschend tanky.</li>
              <li><strong>Schwächen:</strong>
                <ul>
                  <li>Spezial-Kampf: (Lucarios Aurasphäre). <strong>Der beste Konter</strong>.</li>
                  <li>Spezial-Feuer: (Skelabra / Glurak Y).</li>
                  <li>Spezial-Boden: (Nidokings Erdkräfte).</li>
                </ul>
              </li>
            </ul>
            
            <h3>🏆 Die "Schlaubrillen"-Strategie</h3>
            <p>Leg deine Muskelbänder weg. Auf dieser Route dreht sich alles um <strong>Schlaubrillen</strong> (+Spezial-Schaden) und <strong>Wahlgläser</strong> (+Massiver Spezial-Schaden).</p>
            
            <h4>1. Der MVP: Starmie / Turtok</h4>
            <ul>
              <li><strong>Rolle:</strong> Das Maschinengewehr.</li>
              <li><strong>Warum es gewinnt:</strong> Wasser-Attacken sind fast immer Spezial-Angriffe. Starmie hat eine unglaubliche Geschwindigkeit und Abdeckung. Turtok (besonders Mega) verursacht AOE-Wasserschaden, der die Einzelziel-Rüstung der Gegner ignoriert.</li>
              <li><strong>Platzierung:</strong> Auf den "Untergrundsee"-Feldern für einen 2x Schadens-Boost.</li>
            </ul>
            
            <h4>2. Der Tank-Knacker: Skelabra</h4>
            <ul>
              <li><strong>Rolle:</strong> Rüstungsschmelzer.</li>
              <li><strong>Warum es gewinnt:</strong> Skelabra hat den höchsten Sp.Atk-Wert aller nicht-legendären Pokémon. Seine Feuer-Attacken brennen sich mühelos durch Stahl-Typen.</li>
              <li><strong>Item:</strong> <em>Wahlglas</em>. Da es keine verzweigten Pfade gibt, musst du die Ziele nicht oft wechseln.</li>
            </ul>
            
            <h4>3. Der Robustheits-Konter: Rexblisar (Hagelsturm)</h4>
            <ul>
              <li><strong>Rolle:</strong> Finisher.</li>
              <li><strong>Warum es gewinnt:</strong> Viele Gesteins-Typen hier haben die Passive <strong>"Robustheit"</strong> (können nicht mit einem Schlag besiegt werden). Sie überleben mit 1 KP und laufen in deine Basis. Rexblisar beschwört <strong>Hagel</strong>, der globalen Chip-Schaden verursacht und alle 1-KP-Gegner sofort ausschaltet.</li>
            </ul>
            
            <h3>📝 Schritt-für-Schritt Walkthrough</h3>
            <ol>
              <li><strong>Wellen 1-20:</strong> Survival-Modus. Kleinstein & Co. sind zäh. Nutze <strong>Schiggy (Blubbstrahl)</strong> oder <strong>Glumanda (Glut)</strong>. Nutze kein Taubsi oder Rattfratz; sie machen 0 Schaden.</li>
              <li><strong>Wellen 21-60:</strong> Die Eisenwelle. Stahlos und Magneton erscheinen. Du brauchst hier <strong>Skelabra</strong> oder <strong>Nidoking</strong>. Wenn du dich nur auf Wasser verlässt, wird Magneton (Elektro) dich auslöschen.</li>
              <li><strong>Wellen 61-90:</strong> Die Anhöhe. Bewege deine Scharfschützen (Intelleon/Starmie) per Drag-and-Drop auf die "Eisengrate". Der Reichweiten-Boost lässt sie bis zum Spawnpunkt feuern.</li>
              <li><strong>Welle 100 (Mega-Stolloss):</strong> 
                <ul>
                  <li><strong>Item-Tausch:</strong> Pause drücken. Lege <em>Glücks-Eier</em> oder <em>Überreste</em> ab. Rüste <strong>Wahlglas</strong> auf deinem Lucario und Skelabra aus.</li>
                  <li><strong>Positionierung:</strong> Ziehe dein Lucario zur Brücke (Chokepoint).</li>
                  <li><strong>Fokus:</strong> Stolloss' "Filter"-Fähigkeit reduziert den Schaden, du brauchst also überwältigende Kraft. Aktiviere sofort alle Cooldowns.</li>
                </ul>
              </li>
            </ol>
            
            <h3>🗺️ Gelände-Analyse</h3>
            <p>Route 3-4 ist eine Karte im "Gauntlet"-Stil. Keine Schleifen, keine Labyrinthe. Einfach nur eine gerade Linie des Todes von oben nach unten.</p>
            
            <h4>Die Eisengrate (Anhöhe)</h4>
            <ul>
              <li><strong>Effekt:</strong> Hier platzierte Türme erhalten massive Reichweite (+75%).</li>
              <li><strong>Nutzung:</strong> Perfekt für Glaskanonen wie <strong>Simala</strong> oder <strong>Intelleon</strong>, die weit vom Pfad entfernt bleiben müssen.</li>
            </ul>
            
            <h4>Der Untergrundsee</h4>
            <ul>
              <li><strong>Effekt:</strong> Wasserfelder in der Mitte der Höhle.</li>
              <li><strong>Nutzung:</strong> Nur Wasser-/Flug-Typen können hier platziert werden. Sie erhalten einen massiven Kraft-Boost. Deshalb ist <strong>Starmie</strong> auf dieser Karte Tier S.</li>
            </ul>
            
            <h3>⚔️ Empfehlungen zur Teamzusammensetzung</h3>
            <h4>Das "Spezialkommando"-Team</h4>
            <p>Wenn ein Pokémon seine Fäuste/Klauen/Körper zum Angreifen nutzt, lass es in der Box.</p>
            <ul>
              <li><strong>Skelabra:</strong> Essenziell für Stahl-Typen.</li>
              <li><strong>Starmie / Turtok:</strong> Essenziell für Gestein/Boden-Typen.</li>
              <li><strong>Lucario:</strong> Muss auf Spezial-Angriff (Aurasphäre) gebaut sein.</li>
              <li><strong>Rexblisar:</strong> Passiver Hagel tötet Robustheits-Gegner.</li>
              <li><strong>Magnezone:</strong> Hält Stahl-Gegner fest (Magnetfalle) und verursacht Spezial-Elektro-Schaden.</li>
            </ul>
          </div>
        `
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
