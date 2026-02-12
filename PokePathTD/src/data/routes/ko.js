export const stages = [
    {
        id: 'how-to-beat-route-1-1-articuno',
        routeNumber: '1-1',
        name: 'PokePath TD 루트 1-1 가이드: 프리져를 격파하는 최고의 팀 구성',
        mapImage: '/images/map-route/1-1.png',
        stars: 13,
        difficulty: 'Easy',
        difficultyLevel: 1,
        terrain: ['Field', 'Grass', 'Water'],
        description: '루트 1-1은 PokePath TD의 첫 번째 주요 관문입니다. 초반 웨이브는 쉽지만, 많은 플레이어들이 전설의 새 프리져가 등장하는 웨이브 100에서 어려움을 겪습니다. 프리져는 막대한 HP를 가지고 있으며 타워를 얼릴 수 있습니다. 승리하려면 중앙의 거대한 워터 존(Water Zone)과 하단의 U자형 지상 경로라는 맵의 독특한 지형을 마스터해야 합니다.',
        totalWaves: 100,
        recommendedTypes: ['Water', 'Ice', 'Dark', 'Normal', 'Grass', 'Ground'],
        recommendedPokemon: ['Omastar', 'Corsola', 'Samurott', 'Feraligatr', 'Lapras', 'Octillery', 'Weavile', 'Farfetch\'d', 'Sunflora', 'Excadrill', 'Honchkrow'],
        strategies: ['Water Trap', 'Control & AOE', 'Kill Zone'],
        playstyle: 'Hybrid Water/Land',
        tips: [
            '중앙 호수에 물 타입 유닛을 배치하세요 - 상단과 하단 경로를 모두 공격할 수 있습니다.',
            '코산호(Corsola)는 MVP입니다 - 300 사거리의 슬로우 효과가 맵 거의 전체를 커버합니다.',
            '하단 풀 경로에 포푸니라(Weavile)를 배치하고, 버프를 위해 파오리(Farfetch\'d)와 해루미(Sunflora)를 함께 두세요.',
            '돈크로우(Honchkrow)는 은신 방어 범위를 위해 반드시 단 하나뿐인 산 타일에 배치해야 합니다.',
            '호수의 물 유닛들은 두 경로를 모두 커버함으로써 실질적으로 DPS를 두 배로 높입니다.',
            '프리져를 멈추기 위해 마비 확률이 있는 라프라스(Lapras)를 사용하세요.'
        ],
        teamComposition: {
            early: ['Omastar', 'Corsola'],
            mid: ['Omastar', 'Corsola', 'Lapras', 'Octillery', 'Weavile'],
            late: ['Omastar', 'Corsola', 'Samurott', 'Feraligatr', 'Lapras', 'Octillery', 'Weavile', 'Farfetch\'d', 'Sunflora', 'Excadrill', 'Honchkrow']
        },
        seo: {
            title: 'PokePath TD 루트 1-1 가이드: 프리져를 격파하는 최고의 팀 구성',
            description: '루트 1-1에서 막히셨나요? 웨이브 100과 프리져를 이기기 위한 궁극의 가이드입니다. 최적의 물/지상 팀 배치와 은신 적 대응법을 배워보세요.',
            keywords: 'pokepathtd route 1-1, beat articuno pokepathtd, route 1-1 best team, pokepathtd water strategy'
        },
        terrainAnalysis: {
            roads: [
                { description: '하단의 U자형 지상 경로 - 킬 존(Kill Zone)', length: 'Long', chokepoints: 2 },
                { description: '중앙 호수 주변의 상단 경로', length: 'Medium', chokepoints: 1 },
                { description: '중앙 호수를 따라 구부러진 메인 경로', length: 'Long', chokepoints: 2 }
            ],
            water: [
                { description: '중앙의 거대한 워터 존 - 워터 트랩', type: 'Deep Water', strategicValue: 'Very High', benefits: ['물 타입 포켓몬 위력 2배 보너스', '여기 배치된 유닛은 상/하단 경로 모두 공격 가능', '실질적 DPS 2배 증가'] },
                { description: '경로 근처의 작은 물 웅덩이', type: 'Shallow Water', strategicValue: 'Medium', benefits: ['물 타입 포켓몬 위력 보너스'] }
            ],
            mountains: [
                { description: '우측에 있는 단 하나의 중요한 산 타일', height: 'High', strategicValue: 'Very High', benefits: ['사거리 +30% 보너스', '고지대 시야를 확보할 수 있는 유일한 장소', '돈크로우를 반드시 여기에 배치'] }
            ],
            grass: [
                { description: '하단 U자형 경로 - 지상 유닛을 위한 킬 존', coverage: 'High', benefits: ['풀 타입 포켓몬 위력 보너스', '포푸니라, 파오리, 해루미에게 완벽한 장소'] },
                { description: '호수를 둘러싼 풀밭', coverage: 'High', benefits: ['풀 타입 포켓몬 위력 보너스'] }
            ],
            chokepoints: [
                { location: '중앙 호수 (워터 존)', description: '물 유닛이 양쪽 경로를 모두 공격할 수 있는 거대한 수역', priority: 'Very High' },
                { location: '하단 U자형 경로 (킬 존)', description: '강력한 타격 유닛들이 약해진 적들을 마무리하는 곳', priority: 'Very High' },
                { location: '산 타일 (우측)', description: '고지대 시야를 위한 유일한 지점 - 돈크로우 배치 필수', priority: 'Very High' }
            ]
        },
        detailsHtml: `
            <div class="route-guide">
              <p>루트 1-1은 PokePath TD의 첫 번째 주요 관문입니다. 초반 웨이브는 쉽지만, 많은 플레이어들이 전설의 새 프리져가 등장하는 웨이브 100에서 고전하곤 합니다.</p>
              <p>프리져는 막대한 HP를 보유하고 있으며 타워를 얼릴 수 있습니다. 격파를 위해서는 맵의 고유 지형인 중앙의 거대한 워터 존과 하단의 U자형 지상 경로를 활용할 줄 알아야 합니다.</p>
              <p>이 가이드에서는 물과 지상 유닛을 병행하여 루트 1-1을 완벽하게 공략할 수 있는 10인 팀 구성을 소개합니다.</p>
              
              <h3>🗺️ 맵 분석: "워터 트랩"</h3>
              <p>루트 1-1의 핵심은 중앙 호수입니다.</p>
              <ul>
                <li><strong>물 유닛 (블루 존):</strong> 여기에 배치된 유닛은 상단 경로와 하단 경로의 적을 모두 공격할 수 있습니다. 이는 실질적으로 DPS를 2배로 늘려줍니다.</li>
                <li><strong>지상 유닛 (그린 존):</strong> 하단 경로는 여러분의 "킬 존"입니다. 약해진 적들을 마무리하기 위해 가장 강력한 딜러들을 배치해야 하는 곳입니다.</li>
                <li><strong>산 (레드 존):</strong> 우측에 아주 중요한 산 타일이 하나 있습니다. 이곳은 고지대 시야를 확보할 수 있는 유일한 장소입니다.</li>
              </ul>
              
              <h3>🏆 루트 1-1 최강 팀 (10인 셋업)</h3>
              <p>이 라인업은 100레벨 계정에 최적화되어 있지만, 낮은 레벨에서도 훌륭하게 작동합니다.</p>
              
              <h4>1. 워터 스쿼드 (제어 및 광역)</h4>
              <p>중앙 호수에 다음 5개 유닛을 배치하세요 (왼쪽에서 오른쪽으로):</p>
              <ul>
                <li><strong>암스타 (왼쪽):</strong> '쓱쓱' 특성으로 물 위에서 공격 속도가 두 배가 됩니다. 초반 웨이브를 밀어버리는 기관총 역할을 합니다.</li>
                <li><strong>코산호 (중앙 왼쪽):</strong> MVP 유닛입니다. 링 모양의 공격은 엄청난 사거리(100레벨 기준 300)를 가집니다. 맵 거의 전체에 슬로우 효과를 부여합니다.</li>
                <li><strong>대검귀 / 장크로다일 (중앙):</strong> 물 타입 보스 킬러입니다.</li>
                <li><strong>라프라스 (중앙 오른쪽):</strong> 마비(스턴) 확률을 추가합니다. 프리져가 슬로우를 뚫고 지나갈 때 멈추기 위해 매우 중요합니다.</li>
                <li><strong>대포무노 (오른쪽):</strong> 저격수입니다. 480의 사거리로 적이 스폰되자마자 타격할 수 있습니다.</li>
              </ul>
              
              <h4>2. 지상 스쿼드 ("킬 존")</h4>
              <p>하단 풀 경로에 다음 유닛들을 배치하세요:</p>
              <ul>
                <li><strong>6. 포푸니라 (중앙):</strong> 메인 DPS입니다. 100레벨에서 65%의 치명타 확률을 가지며 치명타 시 두 배의 데미지를 입힙니다.</li>
                <li><strong>7. 파오리 (포푸니라 왼쪽):</strong> 필수 버퍼입니다. 포푸니라의 치명타 데미지를 33% 증가시킵니다.</li>
                <li><strong>8. 해루미 (포푸니라 오른쪽):</strong> 필수 버퍼입니다. 포푸니라와 주변 물 유닛들에게 데미지 +20% 오라를 제공합니다.</li>
                <li><strong>9. 몰드류 (모서리):</strong> 적의 방어력을 깎습니다.</li>
              </ul>
              
              <h4>3. 은신 방어</h4>
              <ul>
                <li><strong>돈크로우 (산 타일):</strong> 우측의 산 타일에 반드시 돈크로우를 배치해야 합니다.</li>
                <li><strong>이유는?</strong> 루트 1-1의 후반 웨이브에는 켈리몬과 같은 은신 적들이 등장합니다. 돈크로우는 이들이 지나가기 전에 감지해낼 수 있는 최고의 유닛입니다.</li>
              </ul>
              
              <h3>⚔️ 보스 전략: 프리져 격파법 (웨이브 100)</h3>
              <p>프리져는 튼튼한 비행/얼음 타입입니다.</p>
              <ul>
                <li><strong>약점:</strong> 이동에 의존합니다. 움직임을 멈출 수 있다면 죽일 수 있습니다.</li>
              </ul>
              <p><strong>전략:</strong></p>
              <ul>
                <li><strong>속도 늦추기:</strong> 프리져가 들어오자마자 코산호가 이동 속도를 늦춥니다.</li>
                <li><strong>스턴 잠금:</strong> 라프라스(그리고 가져왔다면 전룡)가 프리져를 마비시키려 시도할 것입니다.</li>
                <li><strong>폭딜:</strong> 프리져가 하단 경로에 도달하면 포푸니라의 사거리에 들어옵니다. 해루미와 파오리의 버프를 받은 포푸니라는 프리져의 HP를 순식간에 녹여버릴 수 있습니다.</li>
              </ul>
              <p><strong>프로의 팁:</strong> 골드 파밍 중이라면 물에 메타몽을 배치해 나옹마를 복사하고, 프리져를 죽이기 전에 추가 자금을 확보할 수 있습니다!</p>
              
              <img src="/images/map-route/1-1-01.png" alt="Route 1-1 Map" class="route-map">
      
              <h3>🗺️ 지형 분석</h3>
              <p>루트 1-1은 중앙의 거대한 호수와 U자형 지상 경로가 있는 독특한 "워터 트랩" 레이아웃을 특징으로 하며, 물과 지상 유닛 모두에게 전략적 기회를 제공합니다.</p>
              
              <h4>도로 및 경로</h4>
              <ul>
                <li><strong>U자형 지상 경로:</strong> 하단의 U자형 지상 경로 - 킬 존 (길이: Long, 체크포인트: 2)</li>
                <li><strong>상단 경로:</strong> 중앙 호수 주변의 상단 경로 (길이: Medium, 체크포인트: 1)</li>
                <li><strong>메인 경로:</strong> 중앙 호수를 감싸고 도는 메인 경로 (길이: Long, 체크포인트: 2)</li>
              </ul>
              
              <h4>수역</h4>
              <ul>
                <li><strong>거대 워터 존:</strong> 중앙의 거대 워터 존 - 워터 트랩 (전략적 가치: Very High) - 물 타입 포켓몬 위력 2배, 양쪽 경로 동시 공격 가능, DPS 2배 효과</li>
                <li><strong>작은 물 웅덩이:</strong> 경로 근처의 작은 물 웅덩이 (전략적 가치: Medium) - 물 타입 포켓몬 위력 보너스</li>
              </ul>
              
              <h4>산 및 고지대</h4>
              <ul>
                <li><strong>단일 산 타일:</strong> 우측의 중요한 단일 산 타일 (전략적 가치: Very High) - 사거리 +30% 보너스, 고지대 시야 유일 지점, 돈크로우 배치 필수</li>
              </ul>
              
              <h4>풀 및 식생</h4>
              <ul>
                <li><strong>하단 U자형 경로:</strong> 하단 U자형 경로 - 지상 유닛 킬 존 (커버리지: High) - 풀 타입 포켓몬 위력 보너스, 포푸니라/파오리/해루미 최적지</li>
                <li><strong>풀밭:</strong> 호수 주변의 풀밭 (커버리지: High) - 풀 타입 포켓몬 위력 보너스</li>
              </ul>
              
              <h4>전략적 요충지</h4>
              <ul>
                <li><strong>중앙 호수 (워터 존):</strong> 물 유닛이 두 경로를 모두 타격할 수 있는 거대 수역 (우선순위: Very High)</li>
                <li><strong>하단 U자형 경로 (킬 존):</strong> 화력이 집중되어 적을 마무리하는 곳 (우선순위: Very High)</li>
                <li><strong>산 타일 (우측):</strong> 고지대 시야를 위한 유일한 지점 - 돈크로우 배치 (우선순위: Very High)</li>
              </ul>
              
              <h3>⚔️ 팀 구성</h3>
              <h4>초반 (웨이브 1-50)</h4>
              <p>중앙 호수에 암스타와 코산호로 시작하세요. 암스타의 쓱쓱은 물에서 공격 속도를 두 배로 높여주어 초반 웨이브를 쉽게 넘기게 해줍니다.</p>
              
              <h4>중반 (웨이브 51-99)</h4>
              <p>물 스쿼드에 라프라스와 대포무노를 추가하세요. 하단 경로에 포푸니라를 배치하여 제어력과 DPS를 구축하기 시작합니다.</p>
              
              <h4>후반 (웨이브 100)</h4>
              <p>완성된 10인 팀을 배치하세요: 중앙 호수의 워터 스쿼드(암스타, 코산호, 대검귀/장크로다일, 라프라스, 대포무노), 하단 경로의 지상 스쿼드(포푸니라, 파오리, 해루미, 몰드류), 그리고 은신 대응을 위한 산 타일의 돈크로우입니다.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-1-2-zapdos-wave-100',
        routeNumber: '1-2',
        name: 'PokePath TD 루트 1-2 가이드: 썬더 격파 (웨이브 100 전략)',
        mapImage: '/images/map-route/1-2.png',
        stars: 2,
        difficulty: 'Easy',
        difficultyLevel: 1,
        terrain: ['Field', 'Grass'],
        description: '루트 1-2는 갈라진 경로와 물 지형의 부재로 악명이 높지만, 진짜 도전은 웨이브 100의 썬더입니다. 이 전설의 새는 빠르고 단단하며 많은 상태 이상 효과에 면역입니다. 일반적인 광역 팀으로 1~99 웨이브는 클리어하지만 보스에서 실패한다면, 전술적인 "블로스터 스왑(Clawitzer Swap)" 전략을 사용해 보세요.',
        totalWaves: 100,
        recommendedTypes: ['Water', 'Ice', 'Normal', 'Grass'],
        recommendedPokemon: ['Clawitzer', 'Farfetch\'d', 'Sunflora', 'Weavile', 'Ditto', 'Corsola', 'Maractus'],
        strategies: ['Clawitzer Nuke', 'Spawn Camping', 'Tactical Swap'],
        playstyle: 'Boss Swap Strategy',
        tips: [
            '무한 재시도 메커니즘을 활용하세요 - 웨이브 100에서 패배해도 즉시 다시 시도할 수 있습니다.',
            '웨이브 100에서 마라카치(Maractus)를 은퇴시키고 스폰 지점에 블로스터(Clawitzer)를 배치하세요.',
            '최대 버프를 위해 블로스터 옆에 파오리와 해루미를 배치하세요.',
            '보스는 절대 은신 상태가 아닙니다 - 추가 DPS를 위해 돈크로우를 은퇴시켜도 좋습니다.',
            '최적의 데미지를 위해 블로스터의 타겟팅을 "강한 적(Strong)" 또는 "첫 번째(First)"로 설정하세요.',
            '중앙 필드에 포푸니라 + 메타몽 조합을 안전장치로 사용하세요.'
        ],
        teamComposition: {
            early: ['Maractus', 'Honchkrow'],
            mid: ['Maractus', 'Aggron', 'Corsola', 'Weavile'],
            late: ['Clawitzer', 'Farfetch\'d', 'Sunflora', 'Weavile', 'Ditto', 'Corsola']
        },
        terrainAnalysis: {
            roads: [
                { description: '중앙에서 수렴하는 갈라진 경로', length: 'Long', chokepoints: 2 },
                { description: '중앙을 가로지르는 직선 메인 경로', length: 'Long', chokepoints: 1 },
                { description: '좌측의 곡선 경로', length: 'Medium', chokepoints: 0 }
            ],
            water: [],
            mountains: [
                { description: '원거리 유닛을 위한 산악 지역', height: 'Medium', strategicValue: 'High', benefits: ['사거리 +20% 보너스', '돈크로우나 프테라에게 적합'] }
            ],
            grass: [
                { description: '맵 대부분을 덮고 있는 광범위한 풀밭', coverage: 'Very High', benefits: ['풀 타입 포켓몬 위력 2배 보너스'] },
                { description: '추가적인 풀 지형을 제공하는 경작지', coverage: 'Medium', benefits: ['풀 타입 포켓몬 위력 보너스'] },
                { description: '좌측 하단 스폰 지역', coverage: 'Low', benefits: ['블로스터 배치에 완벽한 장소'] }
            ],
            chokepoints: [
                { location: '좌측 하단 스폰 지점', description: '썬더가 스폰되는 곳 - 스폰 캠핑에 완벽함', priority: 'Very High' },
                { location: '중앙 수렴지', description: '경로가 모이는 곳 - 안전장치 구역', priority: 'Very High' },
                { location: '중앙 경로 좁아지는 구간', description: '메인 경로가 중간에서 좁아짐', priority: 'High' }
            ]
        },
        seo: {
            title: 'PokePath TD 루트 1-2 가이드: 썬더 격파 (웨이브 100 전략)',
            description: '썬더에서 막히셨나요? 루트 1-2를 깨기 위한 "블로스터 스왑" 전략을 알아보세요. 무한 재시도 메커니즘과 보스를 녹여버리는 최강의 팀 구성을 설명합니다.',
            keywords: 'pokepathtd route 1-2, beat zapdos pokepathtd, wave 100 retry mechanic, clawitzer boss killer, pokepathtd guide'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>루트 1-2는 갈라진 경로와 물 지형의 부재로 까다롭기로 유명하지만, 진짜 고비는 웨이브 100의 썬더입니다. 이 전설의 새는 빠르고 단단하며 여러 제어 효과에 저항력을 가지고 있습니다.</p>
              <p>만약 여러분의 광역 팀(마라카치/보스로라)이 1~99 웨이브는 잘 막는데 보스에서만 무너진다면 걱정하지 마세요. 처음부터 다시 시작할 필요가 없습니다.</p>
              <p>이 가이드에서는 게임의 "무한 재시도" 메커니즘과 전술적인 "블로스터 스왑"을 사용해 썬더를 박살 내는 방법을 알려드립니다.</p>
              
              <h3>⚙️ 반드시 알아야 할 핵심 게임 메커니즘</h3>
              <p>팀 구성을 논하기 전에, PokePath TD의 두 가지 중요한 메커니즘을 이해해야 합니다.</p>
              
              <h4>1. "무한 보스" 메커니즘</h4>
              <ul>
                <li>웨이브 100 보스에게 패배해도 게임은 끝나지 않습니다. 단순히 웨이브 100을 다시 시작할 뿐입니다.</li>
                <li><strong>이것이 의미하는 바:</strong> 여러분은 원하는 만큼 썬더에게 도전할 수 있습니다. 실패하면 팀을 조정하거나 유닛을 옮긴 뒤 즉시 다시 시도하세요. 페널티는 전혀 없습니다!</li>
              </ul>
      
              <img src="/images/map-route/1-2-02.png" alt="Route 1-2 Map" class="route-map">
              
              <h4>2. "은퇴(Retire)" 메커니즘</h4>
              <ul>
                <li>유닛을 교체(은퇴)할 때 골드를 돌려받지는 못합니다.</li>
                <li><strong>전략:</strong> 웨이브 100에 도달했을 때 여러분은 이미 충분한 골드를 저축해 두었을 것입니다. 보스 킬링 유닛(블로스터)을 위한 공간을 만들기 위해 웨이브 클리어용 유닛(마라카치 등)을 은퇴시키는 것을 두려워하지 마세요. 지금은 돈이 아니라 화력이 필요할 때입니다.</li>
              </ul>
              
              <h4>3. 보스는 절대 "은신"하지 않음</h4>
              <ul>
                <li>썬더(및 모든 웨이브 100 보스)는 "은신" 특성이 없습니다.</li>
                <li><strong>최적화:</strong> 마지막 웨이브에서는 돈크로우(은신 방지)를 안전하게 은퇴시키고 프테라나 플라이곤 같은 고화력 유닛으로 교체해 데미지를 극대화할 수 있습니다.</li>
              </ul>
              
              <h3>⚔️ 전략: "블로스터 핵폭탄"</h3>
              <p>썬더는 빠릅니다. 즉시 막대한 데미지를 입혀야 합니다. 우리의 전략은 좌측 하단에서의 "스폰 캠핑(Spawn Camping)" 셋업에 집중합니다.</p>
              
              <h4>1단계: 셋업 (좌측 하단 코너)</h4>
              <p>썬더가 스폰되는 지점입니다. 썬더가 움직이기도 전에 강력하게 타격해야 합니다.</p>
              <ul>
                <li><strong>스왑(교체):</strong> 마라카치(광역)를 은퇴시키고 100레벨 블로스터를 배치하세요.</li>
                <li><strong>이유는?</strong> 블로스터는 1,950의 위력을 가지며 치명타 시 두 배의 데미지를 입힙니다. 게임 내에서 가장 강력한 단일 타겟 버스트 딜러입니다.</li>
                <li><strong>버프:</strong> 파오리(치명타 데미지 +33%)와 해루미(데미지 +20%)를 블로스터 바로 옆에 배치하세요.</li>
                <li><strong>결과:</strong> 썬더는 스폰되자마자 치명타 로켓을 맞고 순식간에 HP의 30~50%를 잃게 됩니다.</li>
              </ul>
              
              <h4>2단계: 안전장치 (중앙 필드)</h4>
              <p>만약 썬더가 초기 폭딜에서 살아남는다면 중앙 수렴지로 이동할 것입니다.</p>
              <ul>
                <li><strong>포푸니라:</strong> 상/하단 경로를 모두 커버할 수 있도록 중앙에 포푸니라를 배치하세요.</li>
                <li><strong>메타몽:</strong> 포푸니라를 복사해 근처에 두세요. 포푸니라 두 마리가 한 마리보다 훨씬 낫습니다.</li>
                <li><strong>코산호:</strong> 300 사거리의 슬로우를 제공합니다. 썬더가 빠르더라도, 이 효과는 포푸니라가 더 많은 공격을 명중시킬 시간을 벌어줍니다.</li>
              </ul>
              
              <h4>3단계: 최적화 (실패했을 경우)</h4>
              <p>여전히 이기기 어렵다면:</p>
              <ul>
                <li>웨이브가 다시 시작되도록 둡니다(자동 재시도).</li>
                <li><strong>돈크로우 은퇴:</strong> 썬더는 은신하지 않으므로, 산 위의 돈크로우를 빼고 다른 고화력 유닛으로 바꾸세요.</li>
                <li><strong>타겟팅 확인:</strong> 블로스터의 타겟팅이 "강한 적(Strong)" 또는 "첫 번째(First)"로 설정되어 있는지 확인하세요.</li>
              </ul>
              
              <h3>📝 요약: 승리 공식</h3>
              <ol>
                <li>일반적인 광역 팀으로 웨이브 1~99를 클리어합니다.</li>
                <li>웨이브 100에서 일시 정지합니다.</li>
                <li>마라카치와 돈크로우를 은퇴시킵니다.</li>
                <li>스폰 지점에 블로스터와 버프 유닛들을 배치합니다.</li>
                <li>중앙에 포푸니라와 메타몽을 배치합니다.</li>
                <li>일시 정지를 풀고 승리하세요.</li>
              </ol>
              <p>이 전략은 100레벨 스탯을 활용합니다. 이 유닛들의 전체 잠재력을 보고 싶으신가요? 저희 <a href="/wiki">위키 데이터베이스</a>를 확인해 보세요.</p>
              
              <img src="/images/map-route/1-2-01.png" alt="Route 1-2 Map" class="route-map">
      
              <h3>🗺️ 지형 분석</h3>
              <p>루트 1-2는 갈라진 경로와 광범위한 풀밭이 특징이며 물 지형은 없습니다. 핵심 전략 지점은 스폰 지점과 중앙 수렴지입니다.</p>
              
              <h4>도로 및 경로</h4>
              <ul>
                <li><strong>갈라진 경로:</strong> 중앙에서 수렴하는 갈라진 경로 (길이: Long, 체크포인트: 2)</li>
                <li><strong>메인 경로:</strong> 중앙을 관통하는 직선 경로 (길이: Long, 체크포인트: 1)</li>
                <li><strong>좌측 경로:</strong> 좌측의 곡선 경로 (길이: Medium, 체크포인트: 0)</li>
              </ul>
              
              <h4>산 및 고지대</h4>
              <ul>
                <li><strong>산악 지역:</strong> 원거리 유닛을 위한 산악 지역 (전략적 가치: High) - 사거리 +20% 보너스, 돈크로우나 프테라에게 용이</li>
              </ul>
              
              <h4>풀 및 식생</h4>
              <ul>
                <li><strong>광범위한 풀밭:</strong> 맵 대부분을 덮는 풀밭 (커버리지: Very High) - 풀 타입 포켓몬 위력 2배 보너스</li>
                <li><strong>경작지:</strong> 추가적인 풀 지형을 제공하는 경작지 (커버리지: Medium) - 풀 타입 포켓몬 위력 보너스</li>
                <li><strong>좌측 하단 스폰 구역:</strong> 좌측 하단 스폰 구역 (커버리지: Low) - 블로스터 배치에 최적</li>
              </ul>
              
              <h4>전략적 요충지</h4>
              <ul>
                <li><strong>좌측 하단 스폰 지점:</strong> 썬더 스폰 지점 - 스폰 캠핑에 완벽 (우선순위: Very High)</li>
                <li><strong>중앙 수렴지:</strong> 경로가 모이는 지점 - 안전장치 구역 (우선순위: Very High)</li>
                <li><strong>중앙 경로 협소 구간:</strong> 메인 경로가 좁아지는 구간 (우선순위: High)</li>
              </ul>
              
              <h3>⚔️ 팀 구성</h3>
              <h4>초반 (웨이브 1-50)</h4>
              <p>광역 클리어를 위해 마라카치를 사용하고, 은신 대응을 위해 돈크로우를 사용하세요.</p>
              
              <h4>중반 (웨이브 51-99)</h4>
              <p>광역 딜링을 위해 마라카치와 보스로라를 계속 사용하세요. 제어와 DPS를 위해 코산호와 포푸니라를 추가합니다.</p>
              
              <h4>후반 (웨이브 100)</h4>
              <p>"블로스터 스왑" 실행: 마라카치를 은퇴시키고 스폰 지점에 블로스터 + 파오리 + 해루미를 배치합니다. 중앙 필드에 포푸니라 + 메타몽 + 코산호를 배치하여 안전장치를 구축하세요.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-1-3-moltres',
        routeNumber: '1-3',
        name: 'PokePath TD 루트 1-3 가이드: 파이어를 격파하는 최고의 팀 구성',
        mapImage: '/images/map-route/1-3.png',
        stars: 300,
        starsSecondary: 0,
        difficulty: 'Medium',
        difficultyLevel: 2,
        terrain: ['Field', 'Mountain', 'Water', 'Grass'],
        description: '루트 1-3은 첫 번째 지역의 마지막 스테이지로, 물, 풀, 산 지형이 혼합되어 있습니다. 최종 도전 과제는 웨이브 100의 전설의 불새 파이어입니다. 물 타입이 당연한 선택처럼 보이지만, 이 맵을 클리어하는 진짜 비결은 특화된 하이브리드 제어 팀에 있습니다.',
        totalWaves: 100,
        recommendedTypes: ['Dark', 'Ice', 'Electric', 'Steel', 'Grass'],
        recommendedPokemon: ['Absol', 'Ditto', 'Weavile', 'Corsola', 'Ferrothorn', 'Ampharos', 'Sunflora', 'Noivern', 'Honchkrow'],
        strategies: ['Double Absol Lock-On', 'Control & Burst', 'Three-Layer Defense'],
        playstyle: 'Hybrid Control',
        tips: [
            '초기 타겟 고정과 누적 데미지를 위해 앱솔(Absol)과 메타몽(Ditto)을 좌측 상단 산에 배치하세요.',
            '전체 슬로우 효과를 위해 중앙 교차점에 코산호(Corsola)와 너트령(Ferrothorn)을 사용하세요.',
            '우측 하단 킬 존에 포푸니라(Weavile)와 해루미(Sunflora)를 배치하세요.',
            '파이어를 즉시 포착할 수 있도록 앱솔과 메타몽의 타겟팅을 "강한 적(Strong)"으로 설정하세요.',
            '더블 앱솔 설정은 파이어가 중앙에 도달하기도 전에 체력을 녹여버립니다.'
        ],
        teamComposition: {
            early: ['Noivern', 'Corsola'],
            mid: ['Absol', 'Ditto', 'Ferrothorn', 'Ampharos'],
            late: ['Absol', 'Ditto', 'Corsola', 'Ferrothorn', 'Ampharos', 'Weavile', 'Sunflora', 'Noivern', 'Honchkrow']
        },
        terrainAnalysis: {
            roads: [
                { description: '중앙 교차점으로 모이는 경로들', length: 'Long', chokepoints: 2 },
                { description: '스폰 지점에서 킬 존으로 이어지는 경로', length: 'Medium', chokepoints: 1 }
            ],
            water: [
                { description: '지형 보너스를 제공하는 수역', type: 'Water', strategicValue: 'Medium', benefits: ['물 타입 포켓몬 위력 보너스'] }
            ],
            mountains: [
                { description: '산 (좌측 상단) - 장거리 스나이퍼 및 은신 방어 유닛에 최적', height: 'Very High', strategicValue: 'Very High', benefits: ['사거리 +40% 보너스', '앱솔과 음번에게 최적', '적을 조기에 타겟 고정 가능'] },
                { description: '경로를 따라 있는 바위 절벽', height: 'Medium', strategicValue: 'High', benefits: ['사거리 +15% 보너스'] }
            ],
            grass: [
                { description: '우측 하단 킬 존을 포함한 풀밭', coverage: 'Medium', benefits: ['풀 타입 포켓몬 위력 보너스', '해루미 배치에 최적'] },
                { description: '흩어져 있는 식생 조각들', coverage: 'Low', benefits: ['풀 타입 포켓몬 위력 보너스'] }
            ],
            chokepoints: [
                { location: '중앙 요충지 (Middle)', description: '경로가 모이는 곳으로 적을 늦추기에 이상적', priority: 'Very High' },
                { location: '산 (좌측 상단)', description: '장거리 스나이퍼를 위한 완벽한 지점', priority: 'Very High' },
                { location: '킬 존 (우측 하단)', description: '강력한 타격 유닛들이 보스를 마무리하는 마지막 구간', priority: 'Very High' }
            ]
        },
        seo: {
            title: 'PokePath TD 루트 1-3 가이드: 파이어를 격파하는 최고의 팀 구성',
            description: '루트 1-3에서 막히셨나요? 100레벨 베스트 팀 가이드를 통해 파이어를 격파하세요. "더블 앱솔 락온" 전략과 전체 슬로우 활용법을 배워보세요.',
            keywords: 'pokepathtd route 1-3, beat moltres pokepathtd, pokepathtd best team, absol level 100, corsola slow build'
        },
        detailsHtml: `
                <div class="route-guide">
                  <p>루트 1-3은 첫 번째 지역의 마지막 스테이지로, 물, 풀, 산 지형이 혼합되어 있습니다. 최종 도전 과제는 웨이브 100의 전설의 불새 파이어입니다.</p>
                  <p>물 타입이 당연한 선택처럼 보이지만, 이 맵을 클리어하는 진짜 비결은 특화된 하이브리드 제어 팀에 있습니다.</p>
                  <p>이 가이드에서는 데미지 스케일링과 전체 군중 제어를 사용하여 파이어를 짓밟는 100레벨 "더블 앱솔 락온" 전략을 공개합니다.</p>
                  
                  <h3>🗺️ 맵 전략: 흐름 제어</h3>
                  <p>루트 1-3에는 반드시 활용해야 할 세 가지 구역이 있습니다:</p>
                  <ul>
                    <li><strong>산 (좌측 상단):</strong> 장거리 스나이퍼 및 은신 대응 유닛에 완벽합니다.</li>
                    <li><strong>중앙 요충지 (Middle):</strong> 경로가 수렴하는 곳으로, 적을 늦추기에 이상적입니다.</li>
                    <li><strong>킬 존 (우측 하단):</strong> 헤비 히터들이 보스를 마무리하는 마지막 구간입니다.</li>
                  </ul>
          
                   <img src="/images/map-route/1-3-01.png" alt="Route 1-3 Map" class="route-map">
                  
                  <h3>🏆 최고의 팀 구성 (10인 셋업)</h3>
                  <p>파이어의 높은 속도와 체력에 대응하기 위해 완벽한 팀을 구성했습니다.</p>
                  
                  <h4>1. 고지대 스나이퍼 (좌측 상단 산)</h4>
                  <ul>
                    <li><strong>앱솔 (100레벨):</strong>
                      <ul>
                        <li><strong>역할:</strong> 데미지 스케일링.</li>
                        <li><strong>패시브:</strong> 동일한 대상을 연속 타격할 때마다 데미지가 증가합니다.</li>
                        <li><strong>이유:</strong> 산 위에 배치된 앱솔은 파이어를 조기에 포착하여 무한 데미지 중첩을 시작합니다.</li>
                      </ul>
                    </li>
                    <li><strong>메타몽 (앱솔 복사):</strong>
                      <ul>
                        <li><strong>역할:</strong> 화력 배증.</li>
                        <li><strong>이유:</strong> 앱솔을 복사함으로써 두 개의 유닛이 동시에 파이어에게 데미지를 쌓습니다. 이는 보스가 중앙에 도달하기도 전에 HP바를 녹여버립니다.</li>
                      </ul>
                    </li>
                    <li><strong>음번 / 돈크로우:</strong>
                      <ul>
                        <li><strong>역할:</strong> 은신 방어 / 광역 딜링.</li>
                        <li><strong>이유:</strong> 초반 웨이브의 은신 몹을 처리하고 장거리 광역 지원을 제공하는 데 필수적입니다.</li>
                      </ul>
                    </li>
                  </ul>
                  
                  <h4>2. 미드레인 제어 (전체 슬로우)</h4>
                  <ul>
                    <li><strong>코산호:</strong>
                      <ul>
                        <li><strong>역할:</strong> 전체 슬로우.</li>
                        <li><strong>패시브:</strong> 100레벨 기준 300 사거리의 링 공격으로 맵 거의 전체를 느리게 만듭니다.</li>
                        <li><strong>이유:</strong> 파이어는 빠릅니다. 코산호는 파이어를 기어하게 만듭니다.</li>
                      </ul>
                    </li>
                    <li><strong>너트령:</strong>
                      <ul>
                        <li><strong>역할:</strong> 보조 슬로우.</li>
                        <li><strong>패시브:</strong> 공격 시 슬로우 효과를 부여합니다.</li>
                        <li><strong>이유:</strong> 코산호와 중첩되어 적들을 영구적으로 방해합니다.</li>
                      </ul>
                    </li>
                    <li><strong>전룡:</strong>
                      <ul>
                        <li><strong>역할:</strong> 하드 스턴.</li>
                        <li><strong>패시브:</strong> 30% 확률로 마비 부여.</li>
                        <li><strong>이유:</strong> 결정적인 스턴 한 번이 파이어를 킬 존에 묶어둘 수 있습니다.</li>
                      </ul>
                    </li>
                  </ul>
                  
                  <h4>3. "킬 존" (우측 하단)</h4>
                  <ul>
                    <li><strong>포푸니라:</strong>
                      <ul>
                        <li><strong>역할:</strong> 피니셔.</li>
                        <li><strong>패시브:</strong> 치명타 확률 65% + 치명타 데미지 2배.</li>
                        <li><strong>이유:</strong> 앱솔의 포격에서 살아남은 보스는 포푸니라의 치명타에 한 방에 정리됩니다.</li>
                      </ul>
                    </li>
                    <li><strong>해루미:</strong>
                      <ul>
                        <li><strong>역할:</strong> 데미지 버퍼.</li>
                        <li><strong>패시브:</strong> 데미지 +20% 오라.</li>
                        <li><strong>이유:</strong> 포푸니라와 주변 유닛의 화력을 극대화합니다.</li>
                      </ul>
                    </li>
                  </ul>
                  
                  <h3>⚔️ 핵심 비결: 이 팀이 이기는 이유</h3>
                  <p>루트 1-3 격파의 비결은 단순히 물 타입을 도배하는 것이 아닙니다. 핵심은 "3단계 방어"입니다:</p>
                  <ul>
                    <li><strong>1단계 (락온):</strong> 더블 앱솔 셋업은 파이어가 스폰되는 순간부터 공격을 시작합니다. 앱솔의 데미지는 타격할 때마다 커지므로, 파이어가 중앙에 올 때쯤이면 초당 막대한 데미지를 입게 됩니다.</li>
                    <li><strong>2단계 (퀵샌드):</strong> 코산호와 너트령이 맵을 늪으로 만듭니다. 파이어는 영구적인 슬로우 때문에 앱솔의 사거리 안에서 평소보다 두 배나 긴 시간을 머물게 됩니다.</li>
                    <li><strong>3단계 (처형):</strong> 만약 파이어가 10%의 HP로 살아남더라도, 버프를 받은 포푸니라의 사거리에 들어와 최후의 치명타를 맞게 됩니다.</li>
                  </ul>
                  
                  <h3>📝 단계별 실행 가이드</h3>
                  <h4>배치:</h4>
                  <ul>
                    <li>좌측 상단 산에 앱솔과 메타몽을 배치하세요.</li>
                    <li>중앙 교차점 근처에 코산호와 너트령을 배치하세요.</li>
                    <li>우측 하단 풀밭에 포푸니라와 해루미를 배치하세요.</li>
                  </ul>
                  
                  <h4>타겟팅:</h4>
                  <ul>
                    <li>앱솔과 메타몽의 설정을 "강한 적(Strong)"으로 변경하여 파이어가 나오자마자 고정하도록 하세요.</li>
                  </ul>
                  
                  <h4>보스 웨이브 (100):</h4>
                  <ul>
                    <li>파이어가 거북이처럼 느려지는 것을 지켜보세요.</li>
                    <li>두 앱솔의 누적 데미지로 인해 포푸니라에게 가기도 전에 죽을 가능성이 높습니다.</li>
                    <li>살아남더라도 포푸니라가 깔끔하게 마무리할 것입니다.</li>
                  </ul>
          
                  <img src="/images/map-route/1-3-02.png" alt="Route 1-3 Map" class="route-map">
                  
                  <h3>🗺️ 지형 분석</h3>
                  <p>루트 1-3은 물, 풀, 산 지형이 섞여 있어 세 가지 뚜렷한 전략 구역을 형성합니다.</p>
                  
                  <h4>도로 및 경로</h4>
                  <ul>
                    <li><strong>수렴 경로:</strong> 중앙 교차점으로 모이는 경로들 (길이: Long, 체크포인트: 2)</li>
                    <li><strong>메인 경로:</strong> 스폰에서 킬 존까지의 경로 (길이: Medium, 체크포인트: 1)</li>
                  </ul>
                  
                  <h4>수역</h4>
                  <ul>
                    <li><strong>수역:</strong> 지형 보너스를 제공하는 물 구역 (전략적 가치: Medium) - 물 타입 포켓몬 위력 보너스</li>
                  </ul>
                  
                  <h4>산 및 고지대</h4>
                  <ul>
                    <li><strong>산 (좌측 상단):</strong> 장거리 스나이퍼 및 은신 대응 유닛에 최적 (전략적 가치: Very High) - 사거리 +40% 보너스, 앱솔/음번에 최적, 조기 타겟 고정 가능</li>
                    <li><strong>바위 절벽:</strong> 경로를 따라 있는 바위 지형 (전략적 가치: High) - 사거리 +15% 보너스</li>
                  </ul>
                  
                  <h4>풀 및 식생</h4>
                  <ul>
                    <li><strong>풀밭 구역:</strong> 우측 하단 킬 존을 포함한 풀 지형 (커버리지: Medium) - 풀 타입 포켓몬 위력 보너스, 해루미 배치 최적</li>
                    <li><strong>흩어진 식생:</strong> 소규모 풀 지형 (커버리지: Low) - 풀 타입 포켓몬 위력 보너스</li>
                  </ul>
                  
                  <h4>전략적 요충지</h4>
                  <ul>
                    <li><strong>중앙 요충지:</strong> 적을 늦추기에 이상적인 경로 수렴지 (우선순위: Very High)</li>
                    <li><strong>산 (좌측 상단):</strong> 장거리 저격을 위한 완벽한 장소 (우선순위: Very High)</li>
                    <li><strong>킬 존 (우측 하단):</strong> 보스를 마무리하는 마지막 구간 (우선순위: Very High)</li>
                  </ul>
                  
                  <h3>⚔️ 팀 구성</h3>
                  <h4>초반 (웨이브 1-50)</h4>
                  <p>광역 데미지와 초기 제어를 위해 음번과 코산호로 시작하세요.</p>
                  
                  <h4>중반 (웨이브 51-99)</h4>
                  <p>보스 킬러들을 구축하세요: 앱솔, 메타몽, 너트령, 전룡을 배치하고 중앙 제어 구역을 설정하세요.</p>
                  
                  <h4>후반 (웨이브 100)</h4>
                  <p>완성된 "더블 앱솔 락온" 팀을 배치하세요: 앱솔 & 메타몽(산악 스나이퍼), 코산호 & 너트령 & 전룡(미드레인 제어), 포푸니라 & 해루미(킬 존), 음번 & 돈크로우(지원).</p>
                </div>
              `,
    },

    {
        id: 'how-to-beat-route-2-1-raikou-wave-100',
        routeNumber: '2-1',
        name: 'PokePath TD 루트 2-1 가이드: 라이코를 격파하는 궁극의 전략',
        mapImage: '/images/map-route/2-1.png',
        stars: 50,
        starsSecondary: 0,
        difficulty: 'Medium',
        difficultyLevel: 2,
        terrain: ['Field', 'Mountain'],
        description: '루트 2-1은 두 번째 지역의 시작을 알리는 곳입니다. 적들이 여러 경로로 이동할 수 있는 까다로운 교차로 레이아웃이 특징이며, 전설의 개 라이코와의 전투로 마무리됩니다. 라이코는 엄청난 이동 속도로 악명이 높으며, 치명적인 데미지를 입기도 전에 방어선을 전력 질주로 통과하곤 합니다.',
        totalWaves: 100,
        recommendedTypes: ['Dark', 'Ice', 'Electric', 'Steel'],
        recommendedPokemon: ['Absol', 'Ditto', 'Weavile', 'Corsola', 'Ferrothorn', 'Ampharos', 'Noivern', 'Honchkrow'],
        strategies: ['Control & Burst', 'Slow & Stun', 'High Ground Sniping'],
        playstyle: 'Control/Burst Hybrid',
        tips: [
            '조기 타겟 고정과 데미지 누적을 위해 앱솔을 좌측 상단 산에 배치하세요.',
            '앱솔을 복사해 데미지를 두 배로 늘리려면 메타몽을 사용하세요.',
            '코산호는 라이코의 빠른 속도에 대응하기 위해 전체 슬로우를 제공합니다.',
            '최대 제어력을 위해 너트령의 슬로우를 코산호와 중첩시키세요.',
            '전룡은 라이코를 기절시켜 DPS 유닛들이 자유롭게 공격할 기회를 줍니다.',
            '포푸니라는 높은 치명타율로 마지막 폭발적인 데미지를 선사합니다.'
        ],
        teamComposition: {
            early: ['Noivern', 'Corsola'],
            mid: ['Absol', 'Ditto', 'Weavile', 'Honchkrow'],
            late: ['Absol', 'Ditto', 'Corsola', 'Ferrothorn', 'Ampharos', 'Weavile', 'Noivern', 'Honchkrow']
        },
        terrainAnalysis: {
            roads: [
                { description: '여러 갈래로 나뉘는 교차로 레이아웃', length: 'Very Long', chokepoints: 3 },
                { description: '스폰에서 중앙 교차점까지의 경로', length: 'Medium', chokepoints: 1 },
                { description: '출구로 수렴하는 경로', length: 'Medium', chokepoints: 1 }
            ],
            water: [],
            mountains: [
                { description: '고지대 (좌측 상단) - 장거리 스나이퍼에 최적인 넓은 산악 지역', height: 'Very High', strategicValue: 'Very High', benefits: ['사거리 +40% 보너스', '스폰 지점과 교차로를 동시에 커버 가능', '앱솔과 음번에 최적'] },
                { description: '경로를 따라 있는 바위 지형', height: 'Medium', strategicValue: 'High', benefits: ['사거리 +20% 보너스'] }
            ],
            grass: [
                { description: '교차로 주변의 풀밭', coverage: 'Medium', benefits: ['풀 타입 포켓몬 위력 보너스'] }
            ],
            chokepoints: [
                { location: '교차로 (중앙)', description: '적이 갈라지는 중앙 교차점 - 가장 중요한 구역', priority: 'Very High' },
                { location: '스폰 지점 (상단 중앙)', description: '적이 생성되어 아래로 내려오는 곳', priority: 'Very High' },
                { location: '출구 (우측 하단)', description: '모든 경로가 모이는 곳 - 최후의 보루 구역', priority: 'High' },
                { location: '고지대 (좌측 상단)', description: '장거리 유닛을 위한 산악 지역', priority: 'Very High' }
            ]
        },
        seo: {
            title: 'PokePath TD 루트 2-1 가이드: 라이코를 격파하는 궁극의 전략',
            description: "루트 2-1의 라이코를 이길 수 없나요? 맵 레이아웃, 100레벨 베스트 팀 구성, 그리고 빠른 전기 보스를 멈추기 위한 정확한 배치법을 상세히 설명합니다.",
            keywords: 'pokepathtd route 2-1, beat raikou pokepathtd, route 2-1 guide, pokepathtd raikou boss, best team route 2-1'
        },
        detailsHtml: `
                <div class="route-guide">
                  <p>루트 2-1은 PokePath TD의 두 번째 지역이 시작되는 지점입니다. 초록색 배경이 루트 1을 떠올리게 할 수도 있지만, 난이도는 급격히 상승합니다.</p>
                  <p>이 맵은 적들이 여러 갈래로 흩어지는 까다로운 교차로 레이아웃을 가지고 있으며, 전설의 개 중 하나인 라이코와의 전투로 끝납니다. 라이코는 엄청난 이동 속도로 악명이 높으며, 치명적인 데미지를 입기도 전에 방어선을 뚫고 지나가버리곤 합니다.</p>
                  <p>이 가이드에서는 맵을 분석하고, 라이코의 약점을 파악하며, 승리를 위해 필요한 정확한 10인 팀 구성을 제공합니다.</p>
                  
                  <h3>🗺️ 맵 분석: 교차로의 함정</h3>
                  <p>루트 2-1의 지형을 이해하는 것이 승리의 절반입니다.</p>
                  <ul>
                    <li><strong>스폰 지점 (상단 중앙):</strong> 적들이 위에서 나타나 중앙 교차점을 향해 내려옵니다.</li>
                    <li><strong>교차로 (중앙):</strong> 이곳이 가장 중요한 구역입니다. 적들이 여기서 갈라지고 섞입니다. 여러분의 타워는 반드시 이 교차로를 커버해야 효율적입니다.</li>
                    <li><strong>고지대 (좌측 상단):</strong> 좌측에 넓은 산악 지역이 있습니다. 이곳은 장거리 유닛(앱솔이나 음번)이 적들이 나오자마자 저격하기에 완벽한 장소입니다.</li>
                    <li><strong>출구 (우측 하단):</strong> 모든 경로가 결국 여기서 만납니다. 이곳이 여러분의 "최후의 보루" 구역입니다.</li>
                  </ul>
          
                  <img src="/images/map-route/2-1-01.png" alt="Route 2-1 Map" class="route-map">
                  
                  <h3>⚡ 보스 프로필: 라이코 (웨이브 100)</h3>
                  <ul>
                    <li><strong>이름:</strong> 라이코</li>
                    <li><strong>타입:</strong> 전기</li>
                    <li><strong>능력치:</strong> 높은 HP, 매우 빠른 속도 (1.2).</li>
                    <li><strong>특징:</strong> 다른 보스들과 달리 라이코는 튼튼할 뿐만 아니라 매우 빠릅니다. 슬로우나 스턴 효과가 없다면 단 몇 초 만에 맵을 통과할 것입니다.</li>
                    <li><strong>약점:</strong> 물리 폭발 데미지와 군중 제어기에 취약합니다.</li>
                  </ul>
          
                  <img src="/images/map-route/2-1-03.png" alt="Route 2-1 Map" class="route-map">
                  
                  <h3>🏆 최고의 팀 구성 (100레벨 메타)</h3>
                  <p>우리는 "제어 및 폭딜" 하이브리드 팀을 추천합니다. 라이코는 빠르기 때문에 속도를 늦춘 뒤(제어), 치명타(폭딜)를 퍼부어야 합니다.</p>
                  
                  <h4>1. 산악 스나이퍼 (좌측 측면)</h4>
                  <ul>
                    <li><strong>앱솔 (100레벨):</strong>
                      <ul>
                        <li><strong>배치:</strong> 좌측 상단 산.</li>
                        <li><strong>이유:</strong> 앱솔의 패시브는 연속 타격 시 데미지가 증가합니다. 스폰 지점 근처 고지대에 배치하면 라이코를 조기에 고정하고 즉시 데미지를 쌓을 수 있습니다.</li>
                      </ul>
                    </li>
                    <li><strong>메타몽 (앱솔 복사):</strong>
                      <ul>
                        <li><strong>배치:</strong> 앱솔 옆.</li>
                        <li><strong>이유:</strong> 앱솔 두 마리가 한 마리보다 낫습니다. 누적 데미지 화력을 두 배로 늘려줍니다.</li>
                      </ul>
                    </li>
                    <li><strong>단단지 / 돈크로우:</strong>
                      <ul>
                        <li><strong>배치:</strong> 좌측 구역.</li>
                        <li><strong>이유:</strong> 돈크로우는 초반 웨이브의 은신 시야를 제공하여 고스트 타입이 새나가지 않도록 보장합니다.</li>
                      </ul>
                    </li>
                  </ul>
                  
                  <h4>2. "늪지대" 구역 (중앙)</h4>
                  <p>여기서 마법이 일어납니다. 빠른 교차로를 라이코에게 슬로우 모션 악몽으로 만들어야 합니다.</p>
                  <ul>
                    <li><strong>코산호:</strong>
                      <ul>
                        <li><strong>배치:</strong> 중앙 필드.</li>
                        <li><strong>이유:</strong> 100레벨 코산호는 300이라는 넓은 사거리를 가집니다. 링 공격으로 전체 슬로우를 걸어 라이코의 빠른 속도를 상쇄합니다.</li>
                      </ul>
                    </li>
                    <li><strong>너트령:</strong>
                      <ul>
                        <li><strong>배치:</strong> 경로 교차점 근처.</li>
                        <li><strong>이유:</strong> 너트령의 공격은 보조 슬로우 효과를 줍니다. 코산호와 중첩시키면 라이코는 엉금엉금 기어가게 됩니다.</li>
                      </ul>
                    </li>
                    <li><strong>전룡:</strong>
                      <ul>
                        <li><strong>배치:</strong> 좌측 하단 / 중앙.</li>
                        <li><strong>이유:</strong> 하드 스턴. 전룡은 대상을 마비시킬 확률이 있습니다. 맵 중앙에서의 운 좋은 스턴 한 번은 앱솔과 포푸니라가 공짜 딜을 넣게 해줍니다.</li>
                      </ul>
                    </li>
                  </ul>
                  
                  <h4>3. 처형 부대 (우측 측면)</h4>
                  <p>라이코가 슬로우 존에서 살아남는다면 우측의 킬 존으로 들어옵니다.</p>
                  <ul>
                    <li><strong>포푸니라:</strong>
                      <ul>
                        <li><strong>배치:</strong> 중앙 우측.</li>
                        <li><strong>이유:</strong> 포푸니라는 DPS의 왕입니다. 65%의 치명타율과 2배의 치명타 데미지로 라이코의 남은 체력을 순식간에 삭제할 수 있습니다.</li>
                      </ul>
                    </li>
                    <li><strong>음번:</strong>
                      <ul>
                        <li><strong>배치:</strong> 우측 구역.</li>
                        <li><strong>이유:</strong> 보스와 함께 나오는 잡몹들을 처리하기에 좋은 광역 커버리지를 제공합니다.</li>
                      </ul>
                    </li>
                  </ul>
          
                  <img src="/images/map-route/2-1-02.png" alt="Route 2-1 Map" class="route-map">
                  
                  <h3>📝 단계별 승리 가이드</h3>
                  <h4>1단계: 초반 (웨이브 1-50)</h4>
                  <p>음번과 코산호를 먼저 배치하는 데 집중하세요. 이들의 광역 데미지는 약한 적들의 떼를 쉽게 처리해줍니다.</p>
                  <p>웨이브 40이 오기 전에 은신 적에 대응하기 위해 돈크로우를 배치하세요.</p>
                  
                  <h4>2단계: 중반 (웨이브 51-99)</h4>
                  <p>보스 킬러들을 구축하세요. 앱솔, 메타몽, 포푸니라를 배치합니다.</p>
                  <p>가능한 한 많이 업그레이드하세요. 100레벨이 이상적이지만 50레벨 이상이어도 충분합니다.</p>
                  
                  <h4>3단계: 보스전 (웨이브 100)</h4>
                  <ul>
                    <li><strong>라이코 스폰:</strong> 라이코는 빠르게 움직일 것입니다. 당황하지 마세요.</li>
                    <li><strong>락온:</strong> 산 위의 앱솔 듀오가 라이코를 때리기 시작합니다. HP 바가 붉게 변하는 것을 지켜보세요.</li>
                    <li><strong>슬로우:</strong> 라이코가 중앙에 도달하면 코산호와 너트령이 속도를 늦춥니다.</li>
                    <li><strong>처치:</strong> 중앙을 통과하더라도 우측에서 기다리는 포푸니라가 최후의 일격을 가할 것입니다.</li>
                  </ul>
                  
                  <h3>❓ 자주 묻는 질문</h3>
                  <p><strong>Q: 라이코를 상대로 땅 타입을 써도 되나요?</strong></p>
                  <p>A: 네! 몰드류나 플라이곤은 전기에 효과적인 땅 타입이므로 훌륭한 선택입니다. 하지만 우리의 앱솔/포푸니라 전략은 높은 레벨일 때 더 일관적인 화력을 내는 순수 중립 DPS에 기반하고 있습니다.</p>
                  
                  <p><strong>Q: 100레벨 메타몽이 없으면 어떻게 하나요?</strong></p>
                  <p>A: 마기라스나 한카리아스(있을 경우) 같은 다른 고화력 DPS 유닛이나 또 다른 앱솔을 배치하면 됩니다. 메타몽은 가장 효율적으로 최강 유닛을 복사하는 수단일 뿐입니다.</p>
                  
                  <h3>🗺️ 지형 분석</h3>
                  <p>루트 2-1은 적들이 여러 갈래로 이동할 수 있는 까다로운 교차로 레이아웃을 갖추고 있어 전략적인 도전과 기회를 동시에 제공합니다.</p>
                  
                  <h4>도로 및 경로</h4>
                  <ul>
                    <li><strong>교차로 레이아웃:</strong> 여러 갈래로 나뉘는 매우 긴 경로 (체크포인트: 3)</li>
                    <li><strong>스폰 경로:</strong> 스폰에서 중앙 교차점까지의 경로 (중간 길이, 체크포인트: 1)</li>
                    <li><strong>출구 경로:</strong> 출구로 모이는 경로 (중간 길이, 체크포인트: 1)</li>
                  </ul>
                  
                  <h4>산 및 고지대</h4>
                  <ul>
                    <li><strong>고지대 (좌측 상단):</strong> 장거리 스나이퍼를 위한 넓은 산악 지역 (전략적 가치: Very High) - 사거리 +40% 보너스, 스폰과 교차로 동시 커버, 앱솔/음번 최적</li>
                    <li><strong>바위 노출지:</strong> 경로를 따라 있는 바위 지형 (전략적 가치: High) - 사거리 +20% 보너스</li>
                  </ul>
                  
                  <h4>풀 및 식생</h4>
                  <ul>
                    <li><strong>풀밭:</strong> 교차로 주변의 풀 지형 (커버리지: Medium) - 풀 타입 포켓몬 위력 보너스</li>
                  </ul>
                  
                  <h4>전략적 요충지</h4>
                  <ul>
                    <li><strong>교차로 (중앙):</strong> 적이 갈라지는 핵심 교차점 (우선순위: Very High)</li>
                    <li><strong>스폰 지점 (상단 중앙):</strong> 적이 내려오기 시작하는 지점 (우선순위: Very High)</li>
                    <li><strong>출구 (우측 하단):</strong> 모든 경로가 수렴하는 최후의 방어 구역 (우선순위: High)</li>
                    <li><strong>고지대 (좌측 상단):</strong> 장거리 유닛용 산악 지역 (우선순위: Very High)</li>
                  </ul>
                  
                  <h3>⚔️ 팀 구성</h3>
                  <h4>초반 (웨이브 1-50)</h4>
                  <p>광역 데미지를 위해 음번과 코산호를 먼저 배치하세요. 웨이브 40 전에 은신 대응용 돈크로우를 배치해야 합니다.</p>
                  
                  <h4>중반 (웨이브 51-99)</h4>
                  <p>보스 킬러 구축: 앱솔, 메타몽, 포푸니라를 배치하고 최대한 업그레이드하세요.</p>
                  
                  <h4>후반 (웨이브 100)</h4>
                  <p>완성된 "제어 및 폭딜" 팀 배치: 앱솔 & 메타몽(산악 스나이퍼), 코산호 & 너트령 & 전룡(제어 구역), 포푸니라 & 음번(처형 부대), 돈크로우(은신 방지).</p>
                </div>
              `,
    },

    {
        id: 'how-to-beat-route-2-2-entei',
        routeNumber: '2-2',
        name: 'PokePath TD 루트 2-2 가이드: 앤테이 격파법 (방어력 관통 전략)',
        mapImage: '/images/map-route/2-2.png',
        stars: 100,
        starsSecondary: 0,
        difficulty: 'Medium',
        difficultyLevel: 2,
        terrain: ['Field', 'Water', 'Grass'],
        description: '루트 2-2는 게임에서 가장 가혹한 메커니즘 중 하나인 "익스트림 아머(Extreme Armor)"를 도입합니다. 최종 보스 앤테이는 웨이브 100에서 23,500이라는 경이로운 방어력을 가지고 등장합니다. 이 경로는 중앙의 호수를 U자형 경로가 둘러싸고 있어, 데미지 스케일링 전략에 최적화되어 있습니다.',
        totalWaves: 100,
        recommendedTypes: ['Water', 'Grass'],
        recommendedPokemon: ['Samurott', 'Corsola', 'Sunflora', 'Whiscash', 'Lapras'],
        strategies: ['Scaling Damage', 'Armor Breaking', 'Terrain Synergy'],
        playstyle: 'Scaling/Ramping',
        tips: [
            '대검귀(Samurott)의 패시브는 연속 타격 시 데미지가 증가하여 방어력이 높은 보스에게 완벽합니다.',
            '최대 가동 시간을 위해 중앙 호수에 물 타입 유닛을 배치하세요.',
            '코산호(Corsola)는 앤테이를 사거리 안에 묶어두기 위해 전체 슬로우를 제공합니다.',
            '해루미(Sunflora)의 데미지 버프는 방어력 임계값을 돌파하는 데 필수적입니다.',
            '앤테이는 이동 속도가 느려(0.8) 데미지를 중첩시킬 시간을 벌어줍니다.'
        ],
        teamComposition: {
            early: ['Maractus', 'Honchkrow'],
            mid: ['Whiscash', 'Lapras', 'Corsola'],
            late: ['Samurott', 'Corsola', 'Sunflora', 'Whiscash', 'Lapras']
        },
        terrainAnalysis: {
            roads: [
                { description: '중앙 호수를 둘러싼 U자형 경로', length: 'Very Long', chokepoints: 3 },
                { description: '수역 주변의 경로', length: 'Long', chokepoints: 2 }
            ],
            water: [
                { description: '중앙 호수 - 가장 가치 있는 배치 구역', type: 'Lake', strategicValue: 'Very High', benefits: ['물 타입 포켓몬 위력 2배 보너스', '적에 대한 가동률 거의 100%'] },
                { description: '경로를 둘러싼 물', type: 'Lake', strategicValue: 'High', benefits: ['물 타입 포켓몬 위력 보너스'] }
            ],
            mountains: [
                { description: '호수를 내려다보는 산봉우리', type: 'Peak', strategicValue: 'High', benefits: ['사거리 +30% 보너스', '호수 지역 전체 커버 가능'] }
            ],
            grass: [
                { description: '호수 주변의 풀밭 구역', coverage: 'Medium', benefits: ['풀 타입 포켓몬 위력 보너스'] }
            ],
            chokepoints: [
                { location: '중앙 호수 루프', description: '중앙 호수 주변의 U자형 경로 - 데미지 스케일링에 최적', priority: 'Very High' },
                { location: '호수 입구', description: '적이 호수 구역으로 진입하는 지점', priority: 'High' },
                { location: '경로 합류 지점', description: '호수 근처에서 여러 경로가 만나는 곳', priority: 'High' }
            ]
        },
        seo: {
            title: 'PokePath TD 루트 2-2 가이드: 앤테이 격파법 (방어력 관통 전략)',
            description: '앤테이에서 막히셨나요? 루트 2-2를 클리어하기 위한 "아머 브레이크" 전략을 배워보세요. 방어력 메커니즘을 설명하고 앤테이를 격파할 팀 구성법을 알려드립니다.',
            keywords: 'pokepathtd route 2-2, beat entei pokepathtd, route 2-2 guide, pokepathtd entei boss, best team route 2-2'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>루트 2-2는 게임에서 가장 가혹한 메커니즘 중 하나인 "익스트림 아머"를 도입합니다. 최종 보스 앤테이는 웨이브 100에서 23,500이라는 경이로운 방어력을 가지고 등장합니다.</p>
              <p>많은 플레이어들에게 이곳은 통곡의 벽입니다. 강력한 타워들이 타격당 "1 데미지" 혹은 "0 데미지"를 입히는 것을 보게 될 것입니다. 이 가이드는 방어력 메커니즘을 설명하고 앤테이를 격파하기 위해 정확히 어떻게 팀을 구성해야 하는지 보여줍니다.</p>
              
              <h3>🛡️ 메커니즘 이해: 방어력 vs 위력</h3>
              <p>앤테이를 이기려면 데미지 계산 방식을 이해해야 합니다.</p>
              <ul>
                <li><strong>규칙:</strong> 유닛의 위력(Power) < 적의 방어력(Armor)일 경우, 데미지가 크게 감소합니다(보통 1로 고정).</li>
                <li><strong>문제점:</strong> 대부분의 연사형 타워(기본 포푸니라나 마라카치 등)는 타당 공격력이 아닌 공격 속도에 의존합니다. 이들은 앤테이에게 간지러운 수준의 데미지만 입힙니다.</li>
                <li><strong>해결책:</strong> 한 발당 위력이 매우 높거나 데미지가 점점 강해지는(Scaling) 메커니즘을 가진 타워가 필요합니다.</li>
              </ul>
      
              <img src="/images/map-route/2-2-03.png" alt="Route 2-2 Map" class="route-map">
              
              <h3>🗺️ 맵 전략: "데스 루프"</h3>
              <p>루트 2-2는 중앙의 수역을 U자형 경로가 둘러싸고 있는 것이 특징입니다.</p>
              <ul>
                <li><strong>중앙 호수:</strong> 이곳은 맵에서 가장 중요한 구역입니다. 이곳에 배치된 유닛은 적이 경로를 도는 동안 거의 100%의 시간 동안 공격할 수 있습니다.</li>
                <li><strong>전략적 이점:</strong> 앤테이는 속도가 느리기(0.8) 때문에 이 호수 주변을 걷는 데 오랜 시간이 걸립니다. 이는 누적 데미지(Ramping Damage) 전략을 위한 완벽한 설정입니다.</li>
              </ul>
              
              <h3>🏆 최고의 팀: "스케일링 워터 스쿼드"</h3>
              <p>우리는 물 지형을 활용하여 물 타입 포켓몬을 강화합니다. 이들은 본래 높은 데미지를 입히는 데 탁월합니다.</p>
      
              <img src="/images/map-route/2-2-02.png" alt="Route 2-2 Map" class="route-map">
              
              <h4>1. 보스 킬러: 대검귀 (100레벨)</h4>
              <ul>
                <li><strong>역할:</strong> 메인 DPS / 방어력 파괴자.</li>
                <li><strong>비결:</strong> 대검귀의 패시브 능력은 동일한 대상을 연속해서 맞힐 때마다 데미지가 증가합니다.</li>
                <li><strong>작동 원리:</strong> 앤테이는 높은 HP와 방어력을 가졌습니다. 덕분에 대검귀가 패시브를 10번, 20번, 30번 중첩시킬 수 있을 만큼 오래 버팁니다. 결국 대검귀의 데미지는 23,500을 넘어서며 방어력을 완전히 무시하게 됩니다.</li>
              </ul>
              
              <h4>2. 컨트롤러: 코산호</h4>
              <ul>
                <li><strong>역할:</strong> 전체 슬로우.</li>
                <li><strong>작동 원리:</strong> 코산호는 데미지를 줄 필요가 없습니다. 앤테이를 대검귀의 사거리 안에 최대한 묶어두는 것이 임무입니다. 100레벨 코산호는 호수 루프 전체를 커버하여 앤테이를 영구적으로 느리게 만듭니다.</li>
              </ul>
              
              <h4>3. 버퍼: 해루미</h4>
              <ul>
                <li><strong>역할:</strong> 데미지 증폭.</li>
                <li><strong>작동 원리:</strong> 해루미는 주변 유닛에게 데미지 +20% 오라를 제공합니다. 23,500이라는 높은 방어력 임계값을 넘기려 할 때, 이 20%의 추가 데미지는 수학적으로 엄청난 차이를 만듭니다. 데미지 0과 5,000의 차이를 가를 수 있습니다.</li>
              </ul>
              
              <h4>4. 대체 유닛 (대검귀가 없을 경우)</h4>
              <ul>
                <li><strong>블로스터:</strong> 게임 내에서 가장 높은 기본 위력(1950+)을 가졌습니다. 치명타가 터지면 데미지가 두 배가 되어 자연스럽게 방어력을 뚫을 수 있습니다.</li>
                <li><strong>몰드류:</strong> 패시브가 방어력에 대해 두 배의 데미지를 입힙니다. 이는 앤테이의 방어 스탯을 사실상 절반으로 깎는 효과를 줍니다.</li>
                <li><strong>독/화상:</strong> 독(또그가스)과 같은 상태 이상 효과는 최대 체력 비례 데미지를 주며 방어력을 완전히 무시합니다.</li>
              </ul>
              
              <h3>📝 단계별 승리 가이드</h3>
              <ol>
                <li><strong>배치:</strong> 중앙 호수를 가장 강력한 물 타입 유닛(대검귀, 메기끄, 라프라스)으로 채우세요.</li>
                <li><strong>버프:</strong> 대검귀에게 데미지 오라를 제공할 수 있도록 해루미를 해안가 근처에 배치하세요.</li>
                <li><strong>전투:</strong>
                  <ul>
                    <li>앤테이가 스폰됩니다. 산 위의 돈크로우와 마라카치가 잡몹을 처리합니다.</li>
                    <li>앤테이가 루프에 진입하면 코산호가 속도를 늦춥니다.</li>
                    <li>대검귀가 공격을 시작합니다. 처음 몇 발은 낮은 데미지를 주겠지만, 패시브가 쌓이면서 붉은 데미지 숫자가 커지는 것을 확인하세요.</li>
                    <li>앤테이가 루프를 다 돌 때쯤이면 처치되어 있을 것입니다.</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ 지형 분석</h3>
              <p>루트 2-2는 중앙의 수역을 U자형 경로가 둘러싸고 있어 데미지 누적 전략을 위한 완벽한 "데스 루프"를 형성합니다.</p>
              
              <h4>도로 및 경로</h4>
              <ul>
                <li><strong>U자형 경로:</strong> 중앙 호수를 둘러싼 경로 (매우 김, 체크포인트 3개)</li>
                <li><strong>호수 주변 경로:</strong> 수역을 따라가는 경로 (김, 체크포인트 2개)</li>
              </ul>
              
              <h4>수역</h4>
              <ul>
                <li><strong>중앙 호수:</strong> 가장 가치 있는 배치 구역 (전략적 가치 매우 높음) - 물 타입 포켓몬 위력 2배 보너스, 적에 대한 가동률 거의 100%</li>
                <li><strong>주변 수역:</strong> 경로를 둘러싼 물 구역 (전략적 가치 높음) - 물 타입 포켓몬 위력 보너스</li>
              </ul>
              
              <h4>산 및 고지대</h4>
              <ul>
                <li><strong>산봉우리:</strong> 호수를 내려다보는 지형 (전략적 가치 높음) - 사거리 +30% 보너스, 호수 지역 전체 커버 가능</li>
              </ul>
              
              <h4>풀 및 식생</h4>
              <ul>
                <li><strong>풀밭 구역:</strong> 호수 주변의 풀밭 (커버리지 보통) - 풀 타입 포켓몬 위력 보너스</li>
              </ul>
              
              <h4>전략적 요충지</h4>
              <ul>
                <li><strong>중앙 호수 루프:</strong> 데미지 스케일링에 완벽한 구역 (우선순위 매우 높음)</li>
                <li><strong>호수 입구:</strong> 적이 진입하는 지점 (우선순위 높음)</li>
                <li><strong>경로 합류 지점:</strong> 여러 길이 만나는 곳 (우선순위 높음)</li>
              </ul>
              
              <h3>⚔️ 팀 구성</h3>
              <h4>초반 (웨이브 1-40)</h4>
              <p>웨이브 클리어를 위해 마라카치를 배치하고, 은신 유닛 대응을 위해 산 위에 돈크로우를 배치하세요.</p>
              
              <h4>중반 (웨이브 41-99)</h4>
              <p>물 타입 유닛으로 전환하세요: 메기끄, 라프라스, 코산호. 데미지 스케일링의 핵심을 구축하기 시작하세요.</p>
              
              <h4>후반 (웨이브 100)</h4>
              <p>"스케일링 워터 스쿼드"를 배치하세요: 대검귀(보스 킬러), 코산호(컨트롤러), 해루미(버퍼), 메기끄 & 라프라스(지원 DPS). 모든 물 유닛을 효율 극대화를 위해 중앙 호수에 배치하세요.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-2-3-suicune-wave-100',
        routeNumber: '2-3',
        name: 'PokePath TD 루트 2-3 궁극 가이드: 앱솔로 스이쿤 격파하기',
        mapImage: '/images/map-route/2-3.png',
        stars: 500,
        starsSecondary: 0,
        difficulty: 'Hard',
        difficultyLevel: 3,
        terrain: ['Field', 'Mountain'],
        description: '복잡한 경로를 가진 도전적인 산악 루트입니다. 최종 보스 스이쿤은 극도로 빠른 속도를 가지고 있어 독특한 앱솔 스케일링 전략이 필요합니다.',
        totalWaves: 100,
        recommendedTypes: ['Dark', 'Grass', 'Flying', 'Electric'],
        recommendedPokemon: ['Absol', 'Ditto', 'Corsola', 'Maractus', 'Sunflora', 'Staraptor', 'Hawlucha', 'Honchkrow'],
        strategies: ['Absol Swap', 'Scaling Damage', 'Speed Control'],
        playstyle: 'Tactical',
        tips: [
            '교체 전략 사용: 1-99 웨이브는 광역 팀으로, 스이쿤이 등장하는 100 웨이브는 앱솔 팀으로 전환하세요.',
            '웨이브 100에서 앱솔은 필수입니다. 연속 타격이 데미지를 기하급수적으로 늘려줍니다.',
            '스이쿤에 대한 공격 시간을 극대화하기 위해 앱솔을 가장 중앙에 배치하세요.',
            '데미지 스케일링을 두 배로 늘리기 위해 메타몽으로 앱솔을 복사하세요.',
            '코산호는 스이쿤의 1.5 속도를 0.8로 줄이기 위한 필수 슬로우(300 사거리)를 제공합니다.',
            '웨이브 100에서 게임을 일시정지하고 유닛을 교체하세요 - 해루미를 팔고, 앱솔을 사고, 메타몽을 설정하세요.'
        ],
        teamComposition: {
            early: ['Maractus', 'Honchkrow'],
            mid: ['Maractus', 'Sunflora', 'Staraptor', 'Hawlucha', 'Corsola', 'Ditto'],
            late: ['Absol', 'Ditto', 'Corsola']
        },
        terrainAnalysis: {
            roads: [
                { description: '여러 갈래로 나뉜 복잡한 산길', length: 'Very Long', chokepoints: 5 },
                { description: '지하 터널 경로', length: 'Medium', chokepoints: 1 }
            ],
            water: [],
            mountains: [
                { description: '여러 층의 고도를 가진 우뚝 솟은 봉우리', height: 'Very High', strategicValue: 'Very High', benefits: ['사거리 +50% 보너스', '경로 섹션 전체 커버 가능'] },
                { description: '바위 절벽과 능선', height: 'High', strategicValue: 'High', benefits: ['사거리 +30% 보너스'] },
                { description: '산악 고원', height: 'Medium', strategicValue: 'Medium', benefits: ['사거리 +15% 보너스'] }
            ],
            grass: [],
            chokepoints: [
                { location: '산봉우리', description: '탁 트인 전망을 가진 가장 높은 지점', priority: 'Very High' },
                { location: '경로 교차점', description: '여러 길이 모이는 곳', priority: 'Very High' },
                { location: 'Z형 굴곡 요충지', description: '중간과 하단 경로 사이의 굴곡으로 스이쿤이 가장 취약해지는 곳', priority: 'Very High' },
                { location: '터널 입구', description: '좁은 터널 진입로', priority: 'High' },
                { location: '절벽 가장자리 굴곡', description: '절벽을 따라가는 급커브', priority: 'High' }
            ]
        },
        seo: {
            title: 'PokePath TD 루트 2-3 궁극 가이드: 앱솔로 스이쿤 격파하기',
            description: '루트 2-3은 게임에서 가장 빠른 보스인 스이쿤이 등장합니다. 상세한 100레벨 전략, "앱솔 교체" 전술, 그리고 Z형 레이아웃 제어법을 배워보세요.',
            keywords: 'pokepathtd route 2-3, beat suicune pokepathtd, absol strategy, route 2-3 guide, best team route 2-3'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>지역 2의 최종 도전에 오신 것을 환영합니다. 루트 2-3은 보기보다 까다로운 맵입니다. 단순한 구불구불한 길처럼 보이지만, 최종 보스 스이쿤은 수많은 도전을 좌절시킨 속도의 괴물입니다.</p>
              <p>이 가이드에서는 맵의 독특한 지형을 분석하고, 스이쿤의 스탯을 파악하며, 승리를 보장하는 "앱솔 교체 전략"을 단계별로 안내합니다.</p>
              
              <h3>📊 보스 프로필: 스이쿤 (웨이브 100)</h3>
              <p>팀을 짜기 전에 적을 먼저 알아야 합니다.</p>
              <ul>
                <li><strong>이름:</strong> 스이쿤 (오로라 포켓몬)</li>
                <li><strong>타입:</strong> 물</li>
                <li><strong>속도:</strong> 1.5 (매우 빠름). 지금까지 마주한 적 중 가장 높은 속도입니다.</li>
                <li><strong>체력:</strong> 69,000 HP.</li>
                <li><strong>방어력:</strong> 0.</li>
                <li><strong>위협 요소:</strong> 스이쿤은 너무 빨라서 램펄드 같은 "강력하지만 느린" 타워들은 아예 맞히지 못하거나 단 한 발만 쏘게 될 것입니다.</li>
              </ul>
      
              <img src="/images/map-route/2-3-03.png" alt="Route 2-3 Map" class="route-map">
              
              <h3>🗺️ 맵 전략: "Z형 곡선"의 함정</h3>
              <p>루트 2-3은 바위 지형을 가로지르는 Z자 모양의 경로가 특징입니다.</p>
              <ul>
                <li><strong>고지대 (외곽):</strong> 맵은 산 타일로 둘러싸여 있습니다. 이는 돈크로우, 음번, 엑스네이투 같은 비행 타입에게 훌륭하며, 전체 시야와 데미지를 제공할 수 있습니다.</li>
                <li><strong>중앙 플랫폼 (풀밭):</strong> 이곳이 방어의 핵심입니다. 중앙 풀밭에 배치된 유닛은 상단 경로(1-50 웨이브), 중간 굴곡, 하단 경로(51-100 웨이브)를 모두 공격할 수 있습니다.</li>
                <li><strong>요충지:</strong> 중간 경로와 하단 경로 사이의 굴곡진 구간이 스이쿤이 가장 취약해지는 지점입니다.</li>
              </ul>
              
              <h3>🏆 최고의 팀: "앱솔 교체"</h3>
              <p>우리의 전략은 1-99 웨이브까지는 일반적인 광역 팀을 사용하고, 100 웨이브에서 전술적인 교체를 단행하는 것입니다.</p>
              
              <h4>1단계: 웨이브 클리어 팀 (1-99 웨이브)</h4>
              <p>레벨의 대부분을 버티기 위해서는 몰려오는 적들을 처리할 광역(AOE) 데미지가 필요합니다.</p>
              <ul>
                <li><strong>해루미 (중앙):</strong> 중앙의 모든 유닛에게 데미지 +20% 오라를 제공합니다.</li>
                <li><strong>마라카치 (중앙 풀밭):</strong> 메인 웨이브 클리어 유닛입니다. 풀 타입 공격은 이 루트에 등장하는 많은 물 타입 적들에게 매우 효과적입니다.</li>
                <li><strong>찌르호크 / 루차불:</strong> 새나가는 적들을 정리하기 위한 좋은 물리 데미지 딜러입니다.</li>
              </ul>
              
              <h4>2단계: 보스 킬러 팀 (웨이브 100)</h4>
              <p>스이쿤이 나타나면 광역 데미지는 무용지물입니다. 집중된, 누적되는 단일 대상 데미지가 필요합니다.</p>
              
              <h4>앱솔 (100레벨)</h4>
              <ul>
                <li><strong>메커니즘:</strong> 앱솔의 패시브 능력은 "동일 대상에 대한 연속 타격 시 데미지 증가"입니다.</li>
                <li><strong>스이쿤의 카운터인 이유:</strong> 스이쿤은 방어력이 0입니다. 즉, 앱솔의 데미지가 경감되지 않습니다. 앱솔이 스이쿤을 계속 때리면 데미지가 200 -> 400 -> 800 -> 1600으로 기하급수적으로 치솟습니다.</li>
              </ul>
              
              <h4>메타몽 (앱솔 복사)</h4>
              <ul>
                <li><strong>전략:</strong> 앱솔 옆에 메타몽을 배치하세요. 이제 데미지가 누적되는 유닛이 두 개가 됩니다. 이는 스이쿤을 두 배 더 빨리 녹입니다.</li>
              </ul>
              
              <h4>3단계: 속도 제어</h4>
              <p>대상이 도망가 버린다면 데미지는 의미가 없습니다.</p>
              <ul>
                <li><strong>코산호 (100레벨):</strong>
                  <ul>
                    <li><strong>이유:</strong> 300의 사거리를 가진 코산호의 슬로우 오라는 Z형 곡선 전체를 커버합니다. 이는 스이쿤의 1.5 속도를 약 0.8로 줄여주어, 앱솔이 공격할 시간을 사실상 두 배로 늘려줍니다.</li>
                  </ul>
                </li>
              </ul>
      
              <img src="/images/map-route/2-3-02.png" alt="Route 2-3 Map" class="route-map">
              
              <h3>📝 상세 공략</h3>
              
              <h4>초반 (1-40 웨이브)</h4>
              <ul>
                <li>중앙 풀밭에 마라카치를 배치하세요.</li>
                <li>은신 유닛을 잡기 위해 좌측 상단 산에 돈크로우를 배치하세요.</li>
                <li>슬로우 지원을 위해 코산호를 육성하기 시작하세요.</li>
              </ul>
              
              <h4>중반 (41-99 웨이브)</h4>
              <ul>
                <li>마라카치를 강화하기 위해 해루미를 추가하세요.</li>
                <li>추가 DPS를 위해 찌르호크나 루차불을 배치하세요.</li>
                <li>메타몽이 레벨업되어 준비되었는지 확인하세요.</li>
              </ul>
              
              <h4>보스전 (웨이브 100)</h4>
              <ol>
                <li>웨이브 100 경고가 뜨자마자 게임을 <strong>일시정지(PAUSE)</strong>하세요.</li>
                <li>해루미를 <strong>판매(SELL)</strong>하세요. 슬롯과 자금이 필요합니다.</li>
                <li>앱솔을 <strong>구매(BUY)</strong>하세요. 가능한 가장 중앙 위치에 배치합니다.</li>
                <li>메타몽을 <strong>설정(CONFIGURE)</strong>하세요. 메타몽이 앱솔로 변신했는지 확인합니다.</li>
                <li><strong>일시정지를 해제(UNPAUSE)</strong>하세요.</li>
                <li>스이쿤이 맵에 진입하는 것을 지켜보세요.</li>
                <li>코산호가 즉시 슬로우를 겁니다.</li>
                <li>두 앱솔이 타겟을 고정합니다. 처음엔 데미지가 작겠지만, 스이쿤이 첫 코너를 돌 때쯤 붉은 데미지 숫자가 거대해지는 것을 보게 될 것입니다.</li>
                <li><strong>승리!</strong></li>
              </ol>
      
              <img src="/images/map-route/2-3-01.png" alt="Route 2-3 Map" class="route-map">
              
              <h3>❓ 대체 전략</h3>
              <p><strong>"아직 앱솔이 없어요. 무엇을 써야 하나요?"</strong></p>
              <p>앱솔이 없다면 다음을 시도해 보세요:</p>
              <ul>
                <li><strong>전기 타입:</strong> 썬더볼트나 전룡을 사용하세요. 전기는 물(스이쿤)에 효과적입니다. 100레벨 썬더볼트는 막대한 데미지를 입힙니다.</li>
                <li><strong>풀 타입 폭딜:</strong> 해루미를 유지하고 마라카치나 나무킹을 여러 개 중첩시키세요. 풀 타입 역시 매우 효과적입니다.</li>
                <li><strong>스턴 락:</strong> 전룡과 라프라스를 사용하여 스이쿤이 움직이지 못하도록 영구 스턴을 시도해 보세요.</li>
              </ul>
              
              <h3>🗺️ 지형 분석</h3>
              <p>루트 2-3은 바위 지형을 가로지르는 Z자 모양의 경로와 전략적인 고지대 위치가 특징입니다.</p>
              
              <h4>도로 및 경로</h4>
              <ul>
                <li><strong>메인 경로:</strong> 여러 갈래로 나뉜 복잡한 산길 (매우 김, 체크포인트 5개)</li>
                <li><strong>지하 경로:</strong> 지하 터널 경로 (보통 길이, 체크포인트 1개)</li>
              </ul>
              
              <h4>산 및 고지대</h4>
              <ul>
                <li><strong>우뚝 솟은 봉우리:</strong> 여러 층의 고도를 가진 지형 (전략적 가치 매우 높음) - 사거리 +50% 보너스, 경로 섹션 전체 커버 가능</li>
                <li><strong>바위 절벽:</strong> 능선 및 절벽 지형 (전략적 가치 높음) - 사거리 +30% 보너스</li>
                <li><strong>산악 고원:</strong> 고원 지대 (전략적 가치 보통) - 사거리 +15% 보너스</li>
              </ul>
              
              <h4>전략적 요충지</h4>
              <ul>
                <li><strong>산봉우리:</strong> 파노라마 뷰를 가진 가장 높은 지점 (우선순위 매우 높음)</li>
                <li><strong>경로 교차점:</strong> 여러 경로가 만나는 곳 (우선순위 매우 높음)</li>
                <li><strong>Z형 굴곡 요충지:</strong> 스이쿤이 가장 취약해지는 지점 (우선순위 매우 높음)</li>
                <li><strong>터널 입구:</strong> 좁은 터널 진입로 (우선순위 높음)</li>
                <li><strong>절벽 가장자리 곡선:</strong> 절벽을 따라가는 급커브 (우선순위 높음)</li>
              </ul>
              
              <h3>⚔️ 팀 구성</h3>
              <h4>초반 (1-40 웨이브)</h4>
              <p>중앙 풀밭에 마라카치를, 산 위에는 은신 대응용 돈크로우를 배치하세요.</p>
              
              <h4>중반 (41-99 웨이브)</h4>
              <p>데미지 버프를 위해 해루미를 추가하고, 찌르호크/루차불로 DPS를 보강하며 보스전을 위해 코산호와 메타몽을 준비하세요.</p>
              
              <h4>후반 (웨이브 100)</h4>
              <p>앱솔 팀으로 교체: 앱솔(핵심 누적 딜러), 메타몽(앱솔 복사), 코산호(속도 제어). 자리를 만들기 위해 해루미를 판매하세요.</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-3-1-regirock-wave-100-guide',
        routeNumber: '3-1',
        name: 'PokePath TD 루트 3-1 가이드: 레지락 격파법 (방어력 100만 돌파)',
        mapImage: '/images/map-route/3-1.png',
        stars: 200,
        starsSecondary: 0,
        difficulty: 'Hard',
        difficultyLevel: 3,
        terrain: ['Field', 'Grass'],
        description: '울창한 식생이 특징인 상급 경로입니다. 최종 보스 레지락은 약 100만에 달하는 방어력을 가지고 있어 독특한 독(Poison) 전략이 필요합니다.',
        totalWaves: 100,
        recommendedTypes: ['Poison', 'Fire', 'Flying', 'Grass'],
        recommendedPokemon: ['Weezing', 'Arbok', 'Swalot', 'Ariados', 'Ditto', 'Maractus', 'Hawlucha', 'Staraptor', 'Honchkrow'],
        strategies: ['Toxic Swap', 'Poison Build', 'Swap Strategy'],
        playstyle: 'Tactical',
        tips: [
            '교체 전략 사용: 1-99 웨이브는 일반 팀으로, 레지락전은 독 타입 팀으로 전환하세요.',
            '독 데미지는 방어력을 무시합니다 - 레지락의 985,714 방어력을 뚫기 위한 필수 요소입니다.',
            '또도가스(Weezing)는 최고의 독 부여 유닛입니다. 효율 극대화를 위해 중앙에 배치하세요.',
            '독 구름을 두 배로 늘리기 위해 메타몽(Ditto)으로 또도가스를 복사하세요.',
            '웨이브 클리어 중 산 위에는 은신 유닛 대응을 위해 돈크로우(Honchkrow)를 유지하세요.',
            '웨이브 100에서 일시정지 후 "독 교체(Toxic Swap)"를 수행하세요 - 물리 딜러를 팔고 독 유닛을 삽니다.'
        ],
        teamComposition: {
            early: ['Maractus', 'Hawlucha', 'Staraptor'],
            mid: ['Maractus', 'Hawlucha', 'Staraptor', 'Honchkrow'],
            late: ['Weezing', 'Arbok', 'Swalot', 'Ariados', 'Ditto', 'Honchkrow']
        },
        terrainAnalysis: {
            roads: [
                { description: '빽빽한 숲을 통과하는 경로', length: 'Long', chokepoints: 3 },
                { description: '시야가 확보된 개활지 경로', length: 'Medium', chokepoints: 1 }
            ],
            water: [],
            mountains: [],
            grass: [
                { description: '맵 전체를 덮고 있는 울창한 숲', coverage: 'Very High', benefits: ['풀 타입 포켓몬 위력 2배 보너스', '울창한 식생으로 인해 적의 이동 속도 감소'] },
                { description: '경로를 따라 형성된 두꺼운 덤불', coverage: 'High', benefits: ['풀 타입 포켓몬 위력 보너스'] }
            ],
            chokepoints: [
                { location: '숲속 개활지', description: '울창한 숲 사이의 열린 공간', priority: 'Very High' },
                { location: '좁아지는 길', description: '나무 사이로 경로가 좁아지는 구간', priority: 'High' }
            ]
        },
        seo: {
            title: 'PokePath TD 루트 3-1 가이드: 레지락 격파법 (방어력 100만 돌파)',
            description: '레지락은 물리 데미지에 면역입니다. 또도가스와 아보크를 사용하여 루트 3-1 보스를 물리치는 "독 교체 전략"을 배워보세요.',
            keywords: 'pokepathtd route 3-1, beat regirock pokepathtd, route 3-1 guide, pokepathtd regirock boss, best team route 3-1'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>루트 3-1은 지금까지의 게임 중 가장 강력한 "스탯 체크"를 도입합니다. 최종 보스 레지락은 걸어 다니는 요새와 같습니다.</p>
              <p>약 1,000,000에 육박하는 방어력을 가진 레지락을 포푸니라나 앱솔 같은 일반적인 물리 타워로 잡는 것은 수학적으로 불가능합니다. 그들의 공격은 그냥 튕겨 나갑니다.</p>
              <p>승리하기 위해서는 상태 이상 시스템을 이해하고 웨이브 100에서 완전한 팀 교체를 수행해야 합니다.</p>
              
              <h3>📊 보스 프로필: 레지락</h3>
              <ul>
                <li><strong>이름:</strong> 레지락 (바위산 포켓몬)</li>
                <li><strong>타입:</strong> 바위</li>
                <li><strong>방어력:</strong> 985,714. (오타가 아닙니다).</li>
                <li><strong>약점:</strong> 고정 피해 (독 / 화상).</li>
                <li><strong>면역:</strong> 스턴 및 슬로우에 강한 저항력을 가짐. 코산호에 의존하지 마세요.</li>
              </ul>
      
              <img src="/images/map-route/3-1-03.png" alt="Route 3-1 Map" class="route-map">
              
              <h3>🏆 전략: "독(Toxic)" 교체</h3>
              <p>이 전략은 두 개의 다른 게임을 플레이한다고 생각해야 합니다.</p>
              <ul>
                <li><strong>클리어 팀:</strong> 1-99 웨이브를 격파하기 위한 표준 팀.</li>
                <li><strong>킬러 팀:</strong> 웨이브 100만을 위해 특화된 팀.</li>
              </ul>
              
              <h4>1단계: 웨이브 1-99 (광역 클리어)</h4>
              <p>처음 99웨이브 동안은 평소 사용하는 고레벨 캐리 유닛들을 사용하세요.</p>
              <ul>
                <li><strong>마라카치 (중앙):</strong> 풀/물 타입을 쉽게 처리합니다.</li>
                <li><strong>루차불 / 찌르호크:</strong> 잔몹 정리를 위한 좋은 물리 데미지 제공.</li>
                <li><strong>돈크로우:</strong> 산 위에서 은신 유닛을 감지하는 필수 유닛.</li>
              </ul>
              
              <h4>2단계: 웨이브 100 (독 교체)</h4>
              <p>웨이브 100이 시작되자마자 <strong>게임을 일시정지(PAUSE)</strong>하세요. 레지락의 방어력 때문에 현재 팀은 무용지물입니다.</p>
              <ol>
                <li>물리 데미지 딜러(마라카치, 루차불, 앱솔 등)를 모두 <strong>판매</strong>하세요.</li>
                <li>안전을 위해 돈크로우와 메타몽은 <strong>유지</strong>하세요.</li>
                <li>보유한 모든 독 타입 유닛을 <strong>구매</strong>하세요.</li>
              </ol>
              
              <h4>독 드림팀 구성</h4>
              <p>레지락에 대한 공격 시간을 극대화하기 위해 유닛들을 중앙에 배치하세요:</p>
              <ul>
                <li><strong>또도가스:</strong> 최고의 독 살포자. 독 구름을 퍼뜨립니다.</li>
                <li><strong>아보크:</strong> 빠른 공격으로 독 중첩을 빠르게 쌓습니다.</li>
                <li><strong>꿀꺽몬:</strong> 튼튼하며 지속적인 DOT(지속 데미지)를 부여합니다.</li>
                <li><strong>아리아도스:</strong> 또 다른 독 중첩 레이어를 추가합니다.</li>
                <li><strong>메타몽:</strong> 또도가스를 복사하여 독 구름을 두 배로 만듭니다.</li>
              </ul>
      
              <img src="/images/map-route/3-1-02.png" alt="Route 3-1 Map" class="route-map">
              
              <h3>🧪 작동 원리: 독 데미지의 수학</h3>
              <ul>
                <li>PokePath TD에서 독은 <strong>매 틱마다 적 최대 HP의 0.1%</strong>에 해당하는 데미지를 입힙니다.</li>
                <li><strong>결정적 이유:</strong> 독 데미지는 <strong>방어력을 무시</strong>합니다.</li>
                <li><strong>스케일링:</strong> 독 중첩을 많이 쌓을수록 초당 데미지가 높아집니다.</li>
                <li><strong>결과:</strong> 레지락의 100만 방어력은 완전히 무시됩니다. 그의 엄청난 HP는 오히려 독 데미지가 더 아프게 들어가는 역효과를 냅니다.</li>
              </ul>
              
              <h3>📝 단계별 가이드</h3>
              <ol>
                <li><strong>경제 구축:</strong> 필요한 경우 초반에 나옹/페르시온을 사용해 골드를 수급하세요(100레벨 플레이어는 생략 가능).</li>
                <li><strong>생존:</strong> 99웨이브까지 클리어합니다.</li>
                <li><strong>교체:</strong> 100웨이브에서 "독 교체"를 단행합니다.</li>
                <li><strong>관전:</strong> 보라색 데미지 숫자가 뜨는 것을 확인하세요. 처음엔 작지만 몇 초 안에 레지락의 HP가 급격히 줄어들기 시작합니다.</li>
                <li><strong>승리:</strong> 레지락은 Z형 곡선의 끝에 도달하기 전에 무너질 것입니다.</li>
              </ol>
              
              <h3>🗺️ 지형 분석</h3>
              <p>루트 3-1은 맵 전체를 덮고 있는 울창한 식생이 특징이며, 풀 타입 포켓몬이 웨이브 클리어에 매우 효과적입니다.</p>
              
              <h4>도로 및 경로</h4>
              <ul>
                <li><strong>메인 경로:</strong> 빽빽한 숲을 통과하는 경로 (김, 체크포인트 3개)</li>
                <li><strong>개활지 경로:</strong> 시야가 좋은 개활지 통로 (보통 길이, 체크포인트 1개)</li>
              </ul>
              
              <h4>풀 및 식생</h4>
              <ul>
                <li><strong>울창한 숲:</strong> 맵 전체 커버 (매우 높음) - 풀 타입 포켓몬 위력 2배 보너스, 적 이동 속도 감소</li>
                <li><strong>두꺼운 덤불:</strong> 경로 주변 (높은 커버리지) - 풀 타입 포켓몬 위력 보너스</li>
              </ul>
              
              <h4>전략적 요충지</h4>
              <ul>
                <li><strong>숲속 개활지:</strong> 숲 사이의 탁 트인 구역 (우선순위 매우 높음)</li>
                <li><strong>경로 축소 지점:</strong> 나무 사이로 길이 좁아지는 곳 (우선순위 높음)</li>
              </ul>
              
              <h3>⚔️ 팀 구성</h3>
              <h4>초중반 (웨이브 1-99)</h4>
              <p>마라카치(중앙), 루차불/찌르호크(물리 딜러), 돈크로우(은신 대응)를 사용하여 효율적으로 웨이브를 클리어하세요.</p>
      
              <img src="/images/map-route/3-1-01.png" alt="Route 3-1 Map" class="route-map">
              
              <h4>후반 (웨이브 100)</h4>
              <p>독 드림팀으로 교체하세요: 또도가스(핵심), 아보크, 꿀꺽몬, 아리아도스, 메타몽(또도가스 복사), 그리고 안전을 위한 돈크로우.</p>
            </div>
          `
    },

    {
        id: 'how-to-beat-route-3-2-regice-dewgong-strategy',
        routeNumber: '3-2',
        name: 'PokePath TD 루트 3-2 가이드: 쥬레곤 스턴 락(Stun-Lock) 전략',
        mapImage: '/images/map-route/3-2.png',
        stars: 400,
        starsSecondary: 0,
        difficulty: 'Hard',
        difficultyLevel: 3,
        terrain: ['Field', 'Grass', 'Mountain'],
        description: '전략적 요충지가 있는 혼합 지형 경로입니다. 최종 보스 레지아이스는 독특한 쥬레곤 컨트롤 전략이 필요합니다.',
        totalWaves: 100,
        recommendedTypes: ['Ice', 'Water', 'Ground', 'Grass'],
        recommendedPokemon: ['Dewgong', 'Ditto', 'Cryogonal', 'Weavile', 'Whiscash', 'Corsola', 'Maractus', 'Sceptile', 'Tangrowth'],
        strategies: ['Dewgong Solo-Control', 'Ice Breaker', 'Swap Strategy'],
        playstyle: 'Tactical',
        tips: [
            '교체 전략 사용: 1-99 웨이브는 풀 타입 팀으로, 레지아이스전은 아이스 브레이커 팀으로 전환하세요.',
            '쥬레곤(Dewgong)은 웨이브 100의 필수 유닛입니다 - 레지아이스를 2초간 마비시킬 확률 30%.',
            '최대 커버리지를 위해 쥬레곤을 가장 중앙에 배치하세요.',
            '더블 스턴 확률(무한 스턴)을 위해 메타몽으로 쥬레곤을 복사하세요.',
            '프리ジオ(Cryogonal)와 포푸니라는 레지아이스의 190,400 방어력을 뚫기 위한 순수 DPS를 제공합니다.',
            '코산호는 스턴이 걸리지 않았을 때도 레지아이스의 속도를 늦추기 위해 전체 슬로우를 제공합니다.'
        ],
        teamComposition: {
            early: ['Maractus', 'Sceptile', 'Tangrowth'],
            mid: ['Maractus', 'Sceptile', 'Tangrowth'],
            late: ['Dewgong', 'Ditto', 'Cryogonal', 'Weavile', 'Whiscash', 'Corsola']
        },
        terrainAnalysis: {
            roads: [
                { description: '다양한 지형을 통과하는 경로', length: 'Very Long', chokepoints: 4 },
                { description: '풀밭이 있는 산길', length: 'Long', chokepoints: 2 }
            ],
            water: [],
            mountains: [
                { description: '경로를 내려다보는 전략적 산봉우리', height: 'High', strategicValue: 'Very High', benefits: ['사거리 +35% 보너스', '여러 경로 섹션 제어 가능'] },
                { description: '경로를 따라 형성된 바위 언덕', height: 'Medium', strategicValue: 'High', benefits: ['사거리 +20% 보너스'] }
            ],
            grass: [
                { description: '산 사이 계곡의 풀밭', coverage: 'High', benefits: ['풀 타입 포켓몬 위력 2배 보너스'] },
                { description: '초원 구역', coverage: 'Medium', benefits: ['풀 타입 포켓몬 위력 보너스'] }
            ],
            chokepoints: [
                { location: '산길', description: '봉우리 사이의 좁은 통로', priority: 'Very High' },
                { location: '계곡 입구', description: '풀밭 계곡으로 진입하는 경로', priority: 'High' },
                { location: '경로 합류점', description: '여러 길이 만나는 곳', priority: 'High' }
            ]
        },
        seo: {
            title: 'PokePath TD 루트 3-2 가이드: 쥬레곤 스턴 락(Stun-Lock) 전략',
            description: "레지아이스를 이길 수 없나요? 비결은 데미지가 아니라 쥬레곤입니다. 100레벨 쥬레곤 무한 스턴 전략으로 루트 3-2 보스를 얼려버리는 법을 배우세요.",
            keywords: 'pokepathtd route 3-2, beat regice pokepathtd, route 3-2 guide, pokepathtd regice boss, best team route 3-2'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>루트 3-2에는 강력한 얼음 골렘 레지아이스가 등장합니다. 190,400의 방어력을 가진 이 보스는 대부분의 표준 팀을 막아서는 벽입니다.</p>
              <p>일반적인 전략은 라프라스나 전룡 같은 여러 스턴 유닛을 중첩하는 데 의존합니다. 하지만 100레벨에 도달했다면 훨씬 효율적인 전략을 사용할 수 있습니다.</p>
              <p>이 가이드는 하나의 강력한 컨트롤러에 의존하여 데미지를 극대화하는 "쥬레곤 솔로 컨트롤" 빌드를 상세히 설명합니다.</p>
              
              <h3>🛡️ 보스 분석: 레지아이스가 어려운 이유</h3>
              <ul>
                <li><strong>방어력 (190,400):</strong> 이것이 핵심 메커니즘입니다. 공격력이 이 수치보다 낮은 유닛은 사실상 데미지를 전혀 주지 못합니다. 높은 스탯의 유닛이 필요합니다.</li>
                <li><strong>면역:</strong> 레지아이스는 많은 상태 이상에 저항력이 있지만, <strong>쥬레곤의 마비에는 면역이 아닙니다</strong>.</li>
              </ul>
      
              <img src="/images/map-route/3-2-03.png" alt="Route 3-2 Map" class="route-map">
              
              <h3>🏆 최고의 팀: "아이스 브레이커" 스쿼드</h3>
              <p>우리는 프리ジオ 같은 고화력 DPS 유닛을 위한 자리를 만들기 위해 라프라스를 과감히 뺐습니다. 그 이유는 다음과 같습니다:</p>
              
              <h4>1. 핵심: 쥬레곤 (100레벨)</h4>
              <ul>
                <li><strong>역할:</strong> 솔로 크라우드 컨트롤(CC).</li>
                <li><strong>메커니즘:</strong> 쥬레곤의 공격은 30% 확률로 대상을 2초간 마비시킵니다.</li>
                <li><strong>라프라스를 안 쓰는 이유?</strong> 100레벨 쥬레곤의 스탯은 효율적인 공격과 생존을 보장합니다. 2초의 지속 시간은 보조 스턴 유닛 없이도 충분히 깁니다. 메타몽으로 쥬레곤을 복제하면 이론적으로 레지아이스를 영구적으로 기절(무한 스턴)시킬 수 있습니다.</li>
              </ul>
              
              <h4>2. 메인 딜러: 프리ジオ & 포푸니라</h4>
              <p>라프라스를 제거하여 확보한 슬롯에 순수 화력을 추가합니다.</p>
              <ul>
                <li><strong>프리ジオ (100레벨):</strong>
                  <ul>
                    <li><strong>배치:</strong> 중앙 필드 또는 물가 가장자리.</li>
                    <li><strong>이유:</strong> 100레벨 프리ジオ는 압도적인 기본 스탯을 가집니다. 높은 위력 덕분에 레지아이스의 방어력을 자연스럽게 깎아낼 수 있습니다.</li>
                  </ul>
                </li>
                <li><strong>포푸니라:</strong>
                  <ul>
                    <li><strong>역할:</strong> 방어력 관통.</li>
                    <li><strong>이유:</strong> 치명타는 두 배의 데미지를 줍니다. 포푸니라는 여전히 단일 대상 DPS의 왕입니다. 레지아이스가 쥬레곤에 의해 스턴된 동안, 포푸니라는 치명타를 꽂아 넣을 프리딜 타임을 갖게 됩니다.</li>
                  </ul>
                </li>
              </ul>
              
              <h4>3. 유틸리티: 메기끄 & 코산호</h4>
              <ul>
                <li><strong>메기끄:</strong> 땅/물 타입 커버리지를 제공하며 호수 구역의 든든한 앵커 역할을 합니다.</li>
                <li><strong>코산호:</strong> 전체 슬로우(300 사거리)를 제공합니다. 레지아이스가 스턴되지 않았을 때도 코산호 덕분에 슬로우 모션으로 움직이게 됩니다.</li>
              </ul>
      
              <img src="/images/map-route/3-2-01.png" alt="Route 3-2 Map" class="route-map">
              
              <h3>📝 상세 전략: 웨이브 100 교체</h3>
              
              <h4>1단계: 풀 타입 클리어 (1-99 웨이브)</h4>
              <p>루트 3-2는 물과 땅 타입 적들로 가득합니다.</p>
              <ul>
                <li><strong>마라카치, 나무킹, 덩쿠림보</strong>를 사용하세요.</li>
                <li>이 풀 타입 포켓몬들은 보스용 팀보다 훨씬 빠르게 웨이브를 쓸어버릴 것입니다.</li>
              </ul>
              
              <h4>2단계: 보스 설정 (웨이브 100)</h4>
              <ol>
                <li><strong>판매:</strong> 풀 타입 유닛들을 제거하세요. 그들은 레지아이스의 방어력에 기스조차 낼 수 없습니다.</li>
                <li><strong>쥬레곤 배치:</strong> 가장 중앙 위치(또는 지형 보너스를 원한다면 물 위)에 배치하세요. 중앙 필드가 루프 전체를 더 잘 커버합니다.</li>
                <li><strong>DPS 배치:</strong> 쥬레곤 근처에 프리ジオ와 포푸니라를 배치하세요.</li>
                <li><strong>승리:</strong> 레지아이스가 사거리로 들어오면 쥬레곤에게 마비되고, 여러분의 고화력 유닛들에 의해 해체될 것입니다.</li>
              </ol>
              
              <h3>💡 프로 팁: 메타몽 활용</h3>
              <p>만약 운(RNG)이 나빠서 쥬레곤이 스턴을 잘 걸지 못한다고 느껴진다면:</p>
              <ul>
                <li>메타몽을 쥬레곤으로 변신시키세요.</li>
                <li>두 마리의 쥬레곤이 한 대상을 공격하면 스턴 확률이 비약적으로 상승합니다. 이는 레지아이스를 절대 움직이지 못하게 만드는 가장 안전한 방법입니다.</li>
              </ul>
      
              <img src="/images/map-route/3-2-02.png" alt="Route 3-2 Map" class="route-map">
              
              <h3>🗺️ 지형 분석</h3>
              <p>루트 3-2는 전략적 요충지가 포함된 혼합 지형으로, 성공을 위해 배치가 매우 중요합니다.</p>
              
              <h4>도로 및 경로</h4>
              <ul>
                <li><strong>메인 경로:</strong> 다양한 지형을 지나는 경로 (매우 김, 체크포인트 4개)</li>
                <li><strong>산길:</strong> 풀밭이 섞인 산악 통로 (김, 체크포인트 2개)</li>
              </ul>
              
              <h4>산 및 고지대</h4>
              <ul>
                <li><strong>전략적 봉우리:</strong> 경로를 내려다보는 산봉우리 (전략적 가치 매우 높음) - 사거리 +35% 보너스, 여러 경로 제어 가능</li>
                <li><strong>바위 언덕:</strong> 경로 주변의 언덕 (전략적 가치 높음) - 사거리 +20% 보너스</li>
              </ul>
              
              <h4>풀 및 식생</h4>
              <ul>
                <li><strong>풀밭:</strong> 산 사이 계곡 지대 (높은 커버리지) - 풀 타입 포켓몬 위력 2배 보너스</li>
                <li><strong>초원 구역:</strong> 평탄한 초원 (커버리지 보통) - 풀 타입 포켓몬 위력 보너스</li>
              </ul>
              
              <h4>전략적 요충지</h4>
              <ul>
                <li><strong>산길 통로:</strong> 봉우리 사이의 좁은 길 (우선순위 매우 높음)</li>
                <li><strong>계곡 입구:</strong> 풀밭 계곡 진입 지점 (우선순위 높음)</li>
                <li><strong>경로 합류점:</strong> 여러 길이 교차하는 곳 (우선순위 높음)</li>
              </ul>
              
              <h3>⚔️ 팀 구성</h3>
              <h4>초중반 (1-99 웨이브)</h4>
              <p>웨이브를 효율적으로 밀기 위해 풀 타입 포켓몬(마라카치, 나무킹, 덩쿠림보)을 사용하세요. 이들은 물과 땅 타입 적에게 매우 강합니다.</p>
              
              <h4>후반 (웨이브 100)</h4>
              <p>아이스 브레이커 스쿼드로 교체하세요: 쥬레곤(핵심 컨트롤러), 메타몽(보조 스턴), 프리ジオ 및 포푸니라(DPS), 메기끄 및 코산호(유틸리티 지원).</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-3-3-registeel-wave-100-guide',
        routeNumber: '3-3',
        name: 'PokePath TD 루트 3-3 가이드: 레지스틸 격파법 (독 면역 대응)',
        mapImage: '/images/map-route/3-3.png',
        stars: 600,
        starsSecondary: 0,
        difficulty: 'Very Hard',
        difficultyLevel: 4,
        terrain: ['Field', 'Grass', 'Mountain', 'Water'],
        description: '모든 지형 타입이 포함된 궁극의 도전 경로입니다. 최종 보스 레지스틸은 독 면역을 가지고 있어 독특한 저주(Curse) 전략이 필요합니다.',
        totalWaves: 100,
        recommendedTypes: ['Ghost', 'Ground', 'Grass', 'Fire'],
        recommendedPokemon: ['Gengar', 'Ditto', 'Maractus', 'Sceptile', 'Sunflora', 'Excadrill', 'Dewgong', 'Corsola'],
        strategies: ['Swap Strategy', 'Curse Build', 'Boss Counter'],
        playstyle: 'Tactical',
        tips: [
            '교체 전략 사용: 1-99 웨이브는 풀 타입 팀으로, 레지스틸전은 저주 팀으로 전환하세요.',
            '팬텀(Gengar)은 웨이브 100의 필수 유닛입니다 - 나이트메어 데미지는 레지스틸의 238,000 방어력을 무시합니다.',
            '최대 커버리지를 위해 팬텀을 높은 지대(우측 상단 산)에 배치하세요.',
            '나이트메어 중첩을 두 배로 늘리기 위해 메타몽(Ditto)으로 팬텀을 복사하세요.',
            '쥬레곤과 코산호는 팬텀이 데미지를 쌓을 시간을 벌어주기 위해 중요한 스턴/슬로우를 제공합니다.',
            '몰드류(Excadrill)는 양쪽 팀 모두에서 유지하세요 - 엘리트 몹의 방어력을 깎고 보스전에서도 지원합니다.'
        ],
        teamComposition: {
            early: ['Maractus', 'Sceptile', 'Sunflora'],
            mid: ['Maractus', 'Sceptile', 'Sunflora', 'Excadrill'],
            late: ['Gengar', 'Ditto', 'Dewgong', 'Corsola', 'Excadrill']
        },
        terrainAnalysis: {
            roads: [
                { description: '모든 지형을 통과하는 복잡한 경로 시스템', length: 'Very Long', chokepoints: 6 },
                { description: '여러 갈래로 나뉘는 분기점 경로', length: 'Long', chokepoints: 4 },
                { description: '험난한 지형을 통과하는 비밀 경로', length: 'Medium', chokepoints: 2 }
            ],
            water: [
                { description: '대형 중앙 호수', type: 'Deep Water', strategicValue: 'Very High', benefits: ['물 타입 포켓몬 위력 2배 보너스'] },
                { description: '맵을 관통하며 흐르는 강', type: 'River', strategicValue: 'High', benefits: ['물 타입 포켓몬 위력 보너스'] },
                { description: '폭포와 웅덩이', type: 'Waterfall', strategicValue: 'Medium', benefits: ['물 타입 포켓몬 위력 보너스'] }
            ],
            mountains: [
                { description: '최고 고도를 가진 거대한 봉우리', height: 'Very High', strategicValue: 'Very High', benefits: ['사거리 +60% 보너스', '맵 전체 섹션 커버 가능'] },
                { description: '다수의 산맥 구역', height: 'High', strategicValue: 'Very High', benefits: ['사거리 +40% 보너스'] },
                { description: '바위 절벽과 능선', height: 'Medium', strategicValue: 'High', benefits: ['사거리 +25% 보너스'] }
            ],
            grass: [
                { description: '넓은 지역을 덮고 있는 울창한 숲', coverage: 'Very High', benefits: ['풀 타입 포켓몬 위력 2배 보너스'] },
                { description: '초원과 메도우 구역', coverage: 'High', benefits: ['풀 타입 포켓몬 위력 보너스'] }
            ],
            chokepoints: [
                { location: '중앙 산봉우리', description: '맵 전체가 보이는 최고 지점', priority: 'Very High' },
                { location: '호수 다리', description: '중앙 호수를 가로지르는 메인 다리', priority: 'Very High' },
                { location: '산길', description: '봉우리 사이의 좁은 통로', priority: 'Very High' },
                { location: '숲속 개활지', description: '울창한 숲 사이의 열린 공간', priority: 'High' },
                { location: '강 건너는 길', description: '경로가 강을 가로지르는 지점', priority: 'High' },
                { location: '경로 교차점', description: '여러 경로가 모이는 지점', priority: 'High' }
            ]
        },
        seo: {
            title: 'PokePath TD 루트 3-3 가이드: 레지스틸 격파법 (독 면역 대응)',
            description: '레지스틸은 238,000의 방어력을 지니며 독에 면역입니다. 무한 스케일링 데미지를 이용한 "팬텀 저주 전략"으로 루트 3-3 보스를 물리치는 법을 배워보세요.',
            keywords: 'pokepathtd route 3-3, beat registeel pokepathtd, route 3-3 guide, pokepathtd registeel boss, best team route 3-3'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>루트 3-3은 세 번째 지역의 정점입니다. 맵 자체도 길고 구불구불하지만, 진정한 시험은 최종 보스 레지스틸입니다.</p>
              <p>레지락에서 "독 전략"에 의존했던 플레이어들은 여기서 벽에 부딪힐 것입니다. 레지스틸은 강철 타입이므로 <strong>독에 100% 면역</strong>입니다.</p>
              <p>238,000의 방어력과 독 면역을 가진 그에게 어떻게 데미지를 줄 수 있을까요? 정답은 고스트 타입의 상태 이상 효과인 <strong>저주(나이트메어)</strong>에 있습니다.</p>
              
              <h3>🛡️ 보스 분석: 레지스틸</h3>
              <ul>
                <li><strong>방어력:</strong> 238,000. (물리 공격은 데미지가 1 정도만 들어갑니다).</li>
                <li><strong>면역:</strong> 독(Poison). 또도가스나 아보크를 사용하지 마세요.</li>
                <li><strong>약점:</strong>
                  <ul>
                    <li>땅: (몰드류 / 플라이곤).</li>
                    <li>불꽃: (리자몽 / 블레이범).</li>
                    <li>저주: (팬텀 / 데스니칸 / 다크펫).</li>
                  </ul>
                </li>
              </ul>
      
              <img src="/images/map-route/3-3-03.png" alt="Route 3-3 Map" class="route-map">
              
              <h3>🏆 투-팀(Two-Team) 전략</h3>
              <p>일반 웨이브는 광역 딜이 필요하고 보스는 특정 카운터가 필요하기 때문에, "교체 전략"을 사용합니다.</p>
              
              <h4>팀 1: 웨이브 클리어 (1-99 웨이브)</h4>
              <p>루트 3-3에는 바위, 땅, 강철 타입 적들이 등장합니다.</p>
              <ul>
                <li><strong>핵심: 풀 타입.</strong></li>
                <li><strong>마라카치 & 나무킹:</strong> 중앙 풀 패치에 배치하세요. 단단한 바위/땅 웨이브를 뚫어버립니다.</li>
                <li><strong>해루미:</strong> 필수적인 데미지 버프를 제공합니다.</li>
                <li><strong>몰드류:</strong> 스폰 지점 근처에 배치하여 엘리트 몹들의 방어력을 깎으세요.</li>
              </ul>
              
              <h4>팀 2: 보스 킬러 (웨이브 100)</h4>
              <p>레지스틸이 스폰되면 <strong>게임을 일시정지</strong>하세요. 풀 타입 유닛들을 팔고(공간이 있다면 해루미는 유지) 저주 스쿼드를 배치하세요.</p>
              
              <h4>1. MVP: 팬텀 (100레벨)</h4>
              <ul>
                <li><strong>역할:</strong> 무한 스케일링 데미지.</li>
                <li><strong>패시브:</strong> 나이트메어. 지속적인 데미지를 입히는 중첩을 쌓습니다.</li>
                <li><strong>승리 이유:</strong> 나이트메어 데미지는 방어력을 무시합니다. 물리 공격과 달리 전투가 길어질수록 데미지가 치솟습니다. 레지스틸은 매우 튼튼하기 때문에 팬텀이 이 데미지를 치명적인 수준까지 쌓을 시간이 충분합니다.</li>
                <li><strong>배치:</strong> 우측 상단 산 (또는 경로를 커버하는 고지대).</li>
              </ul>
              
              <h4>2. 복제: 메타몽</h4>
              <ul>
                <li><strong>역할:</strong> 제2의 팬텀.</li>
                <li><strong>전략:</strong> 메타몽을 팬텀으로 변신시키세요. 두 마리의 팬텀은 나이트메어 중첩을 두 배로 쌓아 처치 시간을 절반으로 단축합니다.</li>
              </ul>
              
              <h4>3. 지연 유닛: 쥬레곤 & 코산호</h4>
              <ul>
                <li><strong>역할:</strong> 시간 벌기.</li>
                <li><strong>전략:</strong> 팬텀은 데미지를 예열할 시간이 필요합니다.
                  <ul>
                    <li><strong>코산호:</strong> 레지스틸의 이동 속도를 늦춥니다.</li>
                    <li><strong>쥬레곤:</strong> 레지스틸을 제자리에 묶어둡니다(스턴).</li>
                  </ul>
                </li>
                <li>레지스틸이 멈춰 있는 동안에도 나이트메어 데미지는 계속해서 들어갑니다.</li>
              </ul>
              
              <h4>4. 방어력 파괴자: 몰드류</h4>
              <ul>
                <li><strong>역할:</strong> 보조 DPS.</li>
                <li><strong>전략:</strong> 몰드류는 그대로 유지하세요. 땅 타입 공격은 강철에 매우 효과적이며, 패시브로 방어력에 두 배의 데미지를 입힙니다. 팬텀의 딜을 넘어서진 못해도 상당한 보조 딜을 넣습니다.</li>
              </ul>
      
              <img src="/images/map-route/3-3-02.png" alt="Route 3-3 Map" class="route-map">
              
              <h3>📝 단계별 가이드</h3>
              <ol>
                <li><strong>1-99 웨이브:</strong> 풀/땅 팀으로 평소처럼 플레이합니다.</li>
                <li><strong>100 웨이브:</strong> 일시정지.</li>
                <li><strong>판매:</strong> 마라카치, 나무킹 등 땅 타입이 아닌 물리 유닛들을 제거합니다.</li>
                <li><strong>구매:</strong> 팬텀과 메타몽을 배치합니다.</li>
                <li><strong>지원:</strong> 쥬레곤과 코산호가 보스의 경로 사거리에 있는지 확인합니다.</li>
                <li><strong>승리:</strong> 보라색 나이트메어 숫자가 점점 커지며 레지스틸의 체력이 녹아내리는 것을 감상하세요.</li>
              </ol>
              
              <h3>🗺️ 지형 분석</h3>
              <p>루트 3-3은 모든 지형 타입을 관통하는 복잡한 경로 시스템을 가지고 있어 궁극의 도전 과제가 됩니다.</p>
              
              <h4>도로 및 경로</h4>
              <ul>
                <li><strong>메인 경로:</strong> 모든 지형을 통과하는 복잡한 길 (매우 김, 체크포인트 6개)</li>
                <li><strong>분기 경로:</strong> 여러 갈래의 분로 (김, 체크포인트 4개)</li>
                <li><strong>비밀 경로:</strong> 험난한 지형을 통과하는 길 (보통 길이, 체크포인트 2개)</li>
              </ul>
              
              <h4>물 구역</h4>
              <ul>
                <li><strong>중앙 호수:</strong> 대규모 중앙 호수 (전략적 가치 매우 높음) - 물 타입 위력 2배 보너스</li>
                <li><strong>강:</strong> 맵을 흐르는 강줄기 (전략적 가치 높음) - 물 타입 위력 보너스</li>
                <li><strong>폭포:</strong> 폭포와 풀장 (전략적 가치 보통) - 물 타입 위력 보너스</li>
              </ul>
              
              <h4>산 및 고지대</h4>
              <ul>
                <li><strong>거대 봉우리:</strong> 최고 고도 (전략적 가치 매우 높음) - 사거리 +60% 보너스, 맵 전체 섹션 커버</li>
                <li><strong>산맥:</strong> 다수의 산맥 (전략적 가치 매우 높음) - 사거리 +40% 보너스</li>
                <li><strong>바위 절벽:</strong> 절벽과 능선 (전략적 가치 높음) - 사거리 +25% 보너스</li>
              </ul>
              
              <h4>풀 및 식생</h4>
              <ul>
                <li><strong>울창한 숲:</strong> 넓은 지역 커버 (커버리지 매우 높음) - 풀 타입 위력 2배 보너스</li>
                <li><strong>초원:</strong> 들판과 메도우 (커버리지 높음) - 풀 타입 위력 보너스</li>
              </ul>
              
              <h4>전략적 요충지</h4>
              <ul>
                <li><strong>중앙 산봉우리:</strong> 맵 전체를 조망하는 최고 지점 (우선순위 매우 높음)</li>
                <li><strong>호수 다리:</strong> 호수를 가로지르는 주요 다리 (우선순위 매우 높음)</li>
                <li><strong>산길:</strong> 봉우리 사이의 좁은 길 (우선순위 매우 높음)</li>
                <li><strong>숲속 개활지:</strong> 숲속의 트인 공간 (우선순위 높음)</li>
                <li><strong>강 도하 지점:</strong> 경로가 강을 지나는 지점 (우선순위 높음)</li>
                <li><strong>경로 교차로:</strong> 여러 길이 모이는 곳 (우선순위 높음)</li>
              </ul>
      
              <img src="/images/map-route/3-3-01.png" alt="Route 3-3 Map" class="route-map">
              
              <h3>⚔️ 팀 구성 권장 사항</h3>
              <h4>초반 (1-15 레벨)</h4>
              <p>1-50레벨 포켓몬으로 시작하세요. 경제력을 키우고 초반 웨이브를 막는 데 집중합니다.</p>
              
              <h4>중반 (16-35 레벨)</h4>
              <p>50-80레벨 포켓몬으로 전환하세요. 웨이브 클리어를 위한 풀 타입 핵심 구성을 시작합니다.</p>
              
              <h4>후반 (36-100 레벨)</h4>
              <p>100레벨 메타 포켓몬을 배치하세요. 1-99웨이브는 풀 타입(마라카치, 나무킹, 해루미)과 몰드류를 사용합니다. 100웨이브는 팬텀, 메타몽, 쥬레곤, 코산호로 교체하세요.</p>
            </div>
          `
    },

    {
        id: 'how-to-beat-route-1-4-regigigas-wave-100-guide',
        routeNumber: '1-4',
        name: 'PokéPath TD 루트 1-4 가이드: 레지기가스 & 스웜(Swarm) 전략',
        mapImage: '/images/map-route/1-4.png',
        stars: 650,
        starsSecondary: 0,
        difficulty: 'Very Hard',
        difficultyLevel: 4,
        terrain: ['Field', 'Grass', 'Forest'],
        description: '루트 1의 "히로익" 버전입니다. 두 개의 스폰 지점과 노말/비행 타입의 대규모 무리가 특징입니다. 보스 레지기가스는 엄청난 DPS를 요구합니다.',
        totalWaves: 100,
        recommendedTypes: ['Fighting', 'Electric', 'Rock', 'Fire'],
        recommendedPokemon: ['Charizard', 'Raichu', 'Machamp', 'Golem', 'Lucario', 'Zapdos', 'Vileplume', 'Typhlosion'],
        strategies: ['AOE Spam', 'Dual Lane Defense', 'Rocky Helmet Meta'],
        playstyle: 'Aggressive',
        tips: [
            '탱커(딱구리/잠만보)에게 울퉁불퉁멧(Rocky Helmet)을 장착시키세요 - 몰려오는 적들이 닿자마자 자멸합니다.',
            '라이츄(Raichu)는 연쇄 번개 패시브 덕분에 비행 타입 무리를 잡는 데 MVP입니다.',
            '인텔리레온 같은 단일 타겟 스나이퍼는 사용하지 마세요. 물량에 압도당할 것입니다.',
            '보스 레지기가스는 "슬로우 스타트"가 있습니다 - 처음 10초는 느리게 움직이다가 이후 질주합니다. 빨리 잡으세요!',
            '라플레시아나 버터플을 경로 합류점에 배치하여 적 무리를 잠재우거나 스턴시키세요.',
            '괴력몬(Machamp) 같은 격투 타입은 이곳 적들의 90%에게 2배 데미지를 입힙니다.'
        ],
        teamComposition: {
            early: ['Charmeleon', 'Pikachu', 'Geodude'],
            mid: ['Charizard', 'Raichu', 'Golem', 'Machoke'],
            late: ['Charizard (Y)', 'Raichu', 'Machamp', 'Lucario', 'Zapdos', 'Vileplume']
        },
        terrainAnalysis: {
            roads: [
                { description: '두 개의 스폰 지점이 하나의 넓은 길로 합쳐지는 구조', length: 'Medium', chokepoints: 3 },
                { description: '자연적인 장애물이 거의 없는 개활지', length: 'Short', chokepoints: 1 }
            ],
            water: [
                { description: '스폰 A 근처의 작은 연못', type: 'Shallow Water', strategicValue: 'Low', benefits: ['중요한 보너스 없음'] }
            ],
            mountains: [
                { description: '고지대 보정 없음', height: 'None', strategicValue: 'Low', benefits: ['없음'] }
            ],
            grass: [
                { description: '맵의 70%를 덮고 있는 긴 풀숲', coverage: 'Very High', benefits: ['풀 타입 포켓몬이 은신 상태가 됨 (적에게 공격받지 않음)'] },
                { description: '합류점의 빽빽한 덤불', coverage: 'Medium', benefits: ['적 이동 속도 15% 감소'] }
            ],
            chokepoints: [
                { location: '합류 지점 (The Convergence Point)', description: '경로 A와 B가 만나는 곳. 광역 공격의 최적지.', priority: 'Very High' },
                { location: '마지막 방어선', description: '기지 전 직선 경로. 격투 타입의 최후 저지선.', priority: 'High' }
            ]
        },
        seo: {
            title: 'PokéPath TD 루트 1-4 가이드: 레지기가스 & 스웜 전략',
            description: '루트 1-4는 피죤투와 레트라 무리가 대거 등장합니다. 울퉁불퉁멧을 활용해 "스웜(Swarm)" 메커니즘을 카운터하고 레지기가스를 물리치는 법을 배우세요.',
            keywords: 'pokepathtd route 1-4, beat regigigas pokepathtd, route 1-4 swarm guide, best aoe pokemon, rocky helmet strategy'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>루트 1-4는 버전 1.4.1에서 추가된 첫 번째 "상급 맵"입니다. "루트 1"이라는 이름에 속지 마세요. 이곳은 여러분의 군중 제어(CC)와 광역(AOE) 데미지를 시험하는 잔혹한 장소입니다.</p>
              <p>정밀함이 필요한 다른 맵들과 달리, 여기서는 순수한 파괴력이 필요합니다. 한 번에 <strong>50마리 이상의 적</strong>이 몰려오는 웨이브를 상대하게 될 것입니다. 처치 속도가 너무 느리면 게임 오버가 되기도 전에 렉이 걸릴 수도 있습니다.</p>
              
              <h3>🛡️ 보스 분석: 레지기가스</h3>
              <ul>
                <li><strong>HP:</strong> 압도적 (수백만). 순수한 데미지 스펀지입니다.</li>
                <li><strong>특성: 슬로우 스타트.</strong> 전투 시작 후 10초 동안은 50% 속도로 움직이다가, 이후 속도가 두 배로 빨라지며 슬로우 효과를 무시합니다.</li>
                <li><strong>약점:</strong>
                  <ul>
                    <li>격투: (괴력몬 / 루카리오 / 노보청). <strong>2배 데미지</strong>.</li>
                    <li>퍼센트 데미지: (저주 / 씨뿌리기).</li>
                  </ul>
                </li>
                <li><strong>위험성:</strong> 타워를 공격하지 않고 그냥 걷습니다. 하지만 속도가 붙기 시작하면 거의 막을 수 없습니다.</li>
              </ul>
              
              <h3>🏆 "울퉁불퉁멧" & 광역 전략</h3>
              <p>"스웜" 메커니즘(많은 수, 낮은 HP) 때문에 단일 타겟 타워는 여기서 쓸모가 없습니다. 여러 타겟을 동시에 타격하는 아이템과 유닛이 필요합니다.</p>
              
              <h4>1. MVP: 라이츄 (연쇄 번개)</h4>
              <ul>
                <li><strong>역할:</strong> 대공 방어 / 무리 소탕.</li>
                <li><strong>승리 이유:</strong> 루트 1-4는 비행 타입(피죤투/깨비드릴조)으로 가득합니다. 라이츄의 공격은 주변 적들에게 튕겨 나갑니다.</li>
                <li><strong>아이템:</strong> <em>구애안경</em> (특수공격 극대화) 또는 <em>마그넷</em>.</li>
              </ul>
              
              <h4>2. 탱커: 딱구리 / 잠만보</h4>
              <ul>
                <li><strong>역할:</strong> 물리 벽.</li>
                <li><strong>전략:</strong> 딱구리를 최전방에 배치하세요. 이곳의 적들은 대부분 노말 타입 물리 공격자(레트라, 켄타로스)입니다.</li>
                <li><strong>핵심 아이템:</strong> <strong>울퉁불퉁멧 (Rocky Helmet)</strong>. 적 무리가 탱커를 공격할 때마다 반사 데미지를 입습니다. 이 패시브 데미지로 여러분이 아무것도 하지 않아도 수백 마리의 쥐들을 잡을 수 있습니다.</li>
              </ul>
              
              <h4>3. 보스 킬러: 괴력몬</h4>
              <ul>
                <li><strong>역할:</strong> 단일 타겟 폭딜.</li>
                <li><strong>전략:</strong> 라이츄가 잔몹들을 처리하는 동안, 괴력몬은 엘리트 몹과 레지기가스에게만 집중해야 합니다.</li>
                <li><strong>배치:</strong> 두 경로가 만나는 "합류 지점"에 배치하여 끊임없이 주먹을 날리게 하세요.</li>
              </ul>
              
              <h3>📝 단계별 가이드</h3>
              <ol>
                <li><strong>1-30 웨이브:</strong> <strong>리자드</strong>나 <strong>피카츄</strong>를 사용하세요. 배치 비용이 필요하다면 아직 진화시키지 마세요. 양쪽 스폰 지점을 모두 커버합니다.</li>
                <li><strong>31-60 웨이브:</strong> 비행 무리가 시작됩니다. 즉시 <strong>라이츄</strong>로 진화시키세요. 중앙에 <strong>라플레시아</strong>를 배치해 적들의 돌진을 늦춥니다.</li>
                <li><strong>61-90 웨이브:</strong> 엘리트(켄타로스/캥카)가 나타납니다. <em>검은띠</em>나 <em>근육밴드</em>를 장착한 <strong>괴력몬</strong>을 배치하세요.</li>
                <li><strong>100 웨이브 (레지기가스):</strong> 
                  <ul>
                    <li>게임을 일시정지합니다.</li>
                    <li>모든 격투 타입이 경로 시작 부분에 모여 있는지 확인하세요.</li>
                    <li><strong>점사:</strong> 괴력몬의 설정을 "타겟 우선순위: 가장 강한 적"으로 변경하여 졸개들을 무시하고 보스만 치게 합니다.</li>
                    <li>"슬로우 스타트" 단계일 때 폭딜로 녹여버리세요.</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ 지형 분석</h3>
              <p>이 맵은 두 개의 별개 스폰 지점이 하나의 넓은 대로로 합쳐지는 "Y"자 형태입니다. 이것이 전략의 핵심입니다.</p>
              
              <h4>이중 스폰</h4>
              <ul>
                <li><strong>북쪽 스폰:</strong> 대부분 비행 타입. 전기 방어가 필요합니다.</li>
                <li><strong>서쪽 스폰:</strong> 대부분 땅/노말 타입(꼬렛/모래두지). 풀/격투 방어가 필요합니다.</li>
              </ul>
              
              <h4>합류점 (최적의 장소)</h4>
              <ul>
                <li><strong>위치:</strong> 맵 중앙.</li>
                <li><strong>전략적 가치:</strong> 양쪽 스폰 지점에서 오는 적들을 광역 타워가 동시에 타격할 수 있는 유일한 장소입니다. 가장 비싼 타워(리자몽/블레이범)를 여기에 두어야 합니다.</li>
              </ul>
              
              <h4>풀숲 및 덤불</h4>
              <ul>
                <li><strong>긴 풀숲:</strong> 맵 대부분을 덮고 있습니다. 여기에 배치된 풀 타입 포켓몬은 "은신" 상태가 되어 원거리 적들이 반격할 수 없습니다. <strong>라플레시아</strong>나 <strong>이상해꽃</strong>에게 최적입니다.</li>
              </ul>
              
              <h3>⚔️ 팀 구성 권장 사항</h3>
              <h4>"전기/격투" 핵심 팀</h4>
              <p>물이나 불꽃이 유리한 다른 맵과 달리, 루트 1-4는 초반 지역의 노말/비행 타입이 100레벨로 스케일링되어 지배하고 있습니다.</p>
              <ul>
                <li><strong>라이츄 / 썬더:</strong> 전체 웨이브의 50%를 담당하는 필수 유닛.</li>
                <li><strong>괴력몬 / 루카리오:</strong> 나머지 50%와 보스를 담당하는 필수 유닛.</li>
                <li><strong>지원:</strong> 라플레시아 (적 물량이 많으므로 수면보다는 저리 가루 스턴이 더 효과적입니다).</li>
              </ul>
            </div>
          `
    },

    {
        id: 'how-to-beat-route-2-4-mega-venusaur-wave-100-guide',
        routeNumber: '2-4',
        name: 'PokéPath TD 루트 2-4 가이드: 메가이상해꽃 격파법 (독성 미로)',
        mapImage: '/images/map-route/2-4.png',
        stars: 650,
        starsSecondary: 0,
        difficulty: 'Very Hard',
        difficultyLevel: 4,
        terrain: ['Forest', 'Swamp', 'Thicket'],
        description: '상록숲의 뒤틀린 버전입니다. 나무들이 시야를 차단하며, 적들은 높은 재생력을 가지고 있습니다. 보스 메가이상해꽃은 불꽃/얼음 데미지를 감소시킵니다.',
        totalWaves: 100,
        recommendedTypes: ['Psychic', 'Flying', 'Steel', 'Ground'],
        recommendedPokemon: ['Alakazam', 'Espeon', 'Metagross', 'Braviary', 'Aerodactyl', 'Crobat', 'Slowbro', 'Skarmory'],
        strategies: ['Psychic Nuke', 'Anti-Regen', 'Drag-and-Drop Micro'],
        playstyle: 'Micromanagement',
        tips: [
            '보스 메가이상해꽃은 "두꺼운지방" 특성을 가집니다 - 불꽃과 얼음 공격 데미지가 50% 감소합니다! 리자몽에 의존하지 마세요.',
            '에스퍼 타입(후딘)을 사용하여 독 타입 적들이 재생하기 전에 한 번에 처치하세요.',
            '나무가 공격 시야를 가립니다! 비행 타입(워글)을 사용하거나 나무 그루터기 위에 배치하여 시야를 확보하세요.',
            '늪지 타일은 독 타입 적들을 치유합니다. 슬러지 구역에 진입하기 전에 처치하세요.',
            '강철 타입(메타그로스)은 맵 전체의 독 효과에 면역입니다.',
            'v1.4.1의 새로운 드래그 앤 드롭 기능을 사용하여 후딘을 보스의 이동 경로에 맞춰 미로 곳곳으로 이동시키세요.'
        ],
        teamComposition: {
            early: ['Abra', 'Spearow', 'Zubat'],
            mid: ['Kadabra', 'Fearow', 'Golbat', 'Metang'],
            late: ['Alakazam', 'Metagross', 'Braviary', 'Crobat', 'Espeon', 'Slowbro']
        },
        terrainAnalysis: {
            roads: [
                { description: '좁은 Z자형 구불구불한 경로', length: 'Very Long', chokepoints: 8 },
                { description: '경로가 독성 슬러지로 덮여 있음 (적 치유)', length: 'Medium', chokepoints: 2 }
            ],
            water: [
                { description: '독성 연못', type: 'Swamp', strategicValue: 'Negative', benefits: ['그 위에 서 있는 비 독/강철 타입에게 데미지를 입힘'] }
            ],
            mountains: [
                { description: '산은 없으나 거대 나무 그루터기가 고지대 역할을 함', height: 'Low', strategicValue: 'High', benefits: ['사거리 +15%', '나무의 시야 차단 무시'] }
            ],
            grass: [
                { description: '울창한 숲의 나무들', coverage: 'Max', benefits: ['지상 유닛의 시야를 차단'] },
                { description: '치유의 덤불', coverage: 'Low', benefits: ['여기 서 있는 적들은 초당 HP 10% 회복'] }
            ],
            chokepoints: [
                { location: '중앙 그루터기', description: '미로의 중심부. 후딘을 배치하기 가장 좋은 장소.', priority: 'Very High' },
                { location: '출구 게이트', description: '마지막 직선 구간. 브레이브버드 난사에 적합.', priority: 'High' }
            ]
        },
        seo: {
            title: 'PokéPath TD 루트 2-4 가이드: 메가이상해꽃 & 재생 카운터 전략',
            description: '루트 2-4는 재생력이 강한 독 타입들로 가득한 미로입니다. 불꽃 타입은 여기서 약합니다! 에스퍼 타입과 드래그 앤 드롭 기능을 활용해 메가이상해꽃을 이기는 법을 배우세요.',
            keywords: 'pokepathtd route 2-4, beat mega venusaur pokepathtd, route 2-4 guide, anti-regen strategy, alakazam build'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>"독성 미궁"으로 알려진 루트 2-4는 짤짤이 데미지에 의존하는 플레이어들에게 악몽 같은 곳입니다. 이 맵의 특징은 <strong>재생(Regeneration)</strong>입니다. 거의 모든 적(딱충이, 독침붕, 아보크, 질뻐기)은 치명적인 데미지를 입지 않으면 빠르게 체력을 회복합니다.</p>
              <p>게다가 울창한 숲이 타워의 시야를 가립니다. 왼쪽에 있는 리자몽은 오른쪽에 있는 적을 볼 수 없습니다. 성공하려면 <strong>v1.4.1 드래그 앤 드롭</strong> 메커니즘을 마스터해야 합니다.</p>
              
              <h3>🛡️ 보스 분석: 메가이상해꽃</h3>
              <ul>
                <li><strong>HP:</strong> 매우 높음. 탱커형 보스입니다.</li>
                <li><strong>패시브 1: 두꺼운지방.</strong> 불꽃과 얼음 기술로부터 <strong>데미지를 50% 적게</strong> 받습니다. 스타팅 리자몽은 여기서 무용지물입니다!</li>
                <li><strong>패시브 2: 광합성.</strong> 5초마다 최대 HP의 5%를 회복합니다. 이 회복량보다 높은 DPS를 뽑아내야 합니다.</li>
                <li><strong>약점:</strong>
                  <ul>
                    <li>에스퍼: (후딘 / 뮤츠 / 에브이). <strong>2배 데미지</strong>.</li>
                    <li>비행: (워글 / 프테라). <strong>2배 데미지</strong>.</li>
                  </ul>
                </li>
              </ul>
              
              <h3>🏆 "에스퍼 버스트" 전략</h3>
              <p>적들이 지속적으로 회복하기 때문에, "지속 데미지"(화상/독) 전략은 효과가 없습니다. "한 방"의 잠재력이 필요합니다.</p>
              
              <h4>1. MVP: 후딘 (유리 대포)</h4>
              <ul>
                <li><strong>역할:</strong> 버스트 암살자.</li>
                <li><strong>승리 이유:</strong> 이 루트는 독/격투 타입이 지배합니다. 후딘은 그들에게 치명적인 데미지를 입힙니다. 높은 스피드는 적들이 재생하기 전에 공격하도록 보장합니다.</li>
                <li><strong>아이템:</strong> <em>휘어진스푼</em> (에스퍼 위력 20% 증가) 또는 <em>구애안경</em> (특공 50% 증가).</li>
                <li><strong>배치:</strong> 시야 확보를 위해 "중앙 그루터기"에 배치하세요.</li>
              </ul>
              
              <h4>2. 정찰병: 워글 / 크로뱃</h4>
              <ul>
                <li><strong>역할:</strong> 시야 확보 및 잔몹 처리.</li>
                <li><strong>승리 이유:</strong> 비행 타입은 나무로 인한 "시야 차단" 패널티를 무시합니다. 벽 뒤에 숨은 적들을 공격할 수 있습니다.</li>
                <li><strong>아이템:</strong> <em>예리한부리</em>.</li>
              </ul>
              
              <h4>3. 벽: 메타그로스</h4>
              <ul>
                <li><strong>역할:</strong> 탱커.</li>
                <li><strong>승리 이유:</strong> 강철/에스퍼 타입인 메타그로스는 맵의 <strong>독구름에 면역</strong>이며, 현지 야생 포켓몬들의 거의 모든 공격에 저항합니다.</li>
                <li><strong>전략:</strong> 새나가는 적을 막기 위해 미로의 맨 끝에 배치하세요.</li>
              </ul>
              
              <h3>📝 단계별 가이드</h3>
              <ol>
                <li><strong>1-20 웨이브:</strong> 케이시와 깨비참으로 시작하세요. 케이시는 초반에 약하므로 잘 보호해야 합니다.</li>
                <li><strong>21-50 웨이브:</strong> "재생" 적들이 등장합니다(질퍽이/질뻐기). 데미지 숫자는 뜨는데 HP 바가 움직이지 않는다면 버스트 데미지가 부족한 것입니다. 가능한 한 빨리 케이시를 <strong>윤겔라</strong>로 업그레이드하세요.</li>
                <li><strong>51-90 웨이브:</strong> 미로 단계입니다. 적들이 튼튼해집니다. <strong>야도란</strong>을 사용해 적들의 속도를 늦추고 후딘의 사이코패닉 공격을 위해 한곳에 모으세요.</li>
                <li><strong>100 웨이브 (메가이상해꽃):</strong> 
                  <ul>
                    <li><strong>불꽃 타입을 쓰지 마세요.</strong> 구매했던 불꽃 타입이 있다면 파세요.</li>
                    <li><strong>마이크로 컨트롤:</strong> 이상해꽃이 Z자 미로를 이동할 때, 보스보다 앞서 있는 다음 "나무 그루터기"로 후딘을 <strong>드래그 앤 드롭</strong>하세요.</li>
                    <li>지속적으로 공격하기 위해 전투 중에 메인 DPS의 위치를 최소 3-4번 옮겨야 합니다.</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ 지형 분석</h3>
              <p>이 맵은 늪지 경로가 있는 울창한 숲입니다. 가시성이 여러분의 주적입니다.</p>
              
              <h4>숲 (시야 차단)</h4>
              <ul>
                <li><strong>나무:</strong> 지상 유닛(후딘/메타그로스 등)은 나무를 뚫고 쏠 수 없습니다. 모퉁이나 교차로에 배치해야 합니다.</li>
                <li><strong>비행 유닛:</strong> 비행 타입은 나무를 무시합니다. 배치에 어려움을 겪는다면 전체 비행 팀(새 파티)을 구성해 보세요.</li>
              </ul>
              
              <h4>독성 늪</h4>
              <ul>
                <li><strong>효과:</strong> 경로 자체가 보라색 슬러지입니다.</li>
                <li><strong>적 버프:</strong> 독 타입 적(질퍽이/또가스)은 그 위를 걸을 때 치유됩니다.</li>
                <li><strong>플레이어 디버프:</strong> 강철/독 타입이 아닌 타워를 경로 위에 직접 배치하면 지속 데미지를 입습니다. 유닛들을 풀밭에 두세요!</li>
              </ul>
              
              <h3>⚔️ 팀 구성 권장 사항</h3>
              <h4>"안티 포이즌" 핵심 팀</h4>
              <p>루트 2-4는 에스퍼 타입을 요구합니다. 케이시나 야돈의 레벨을 올리기에 완벽한 장소입니다.</p>
              <ul>
                <li><strong>후딘:</strong> 필수 DPS.</li>
                <li><strong>메타그로스:</strong> 최고의 탱커 (독 면역).</li>
                <li><strong>워글:</strong> 최고의 물리 어태커 (비행은 나무 무시).</li>
                <li><strong>야도란:</strong> 재생을 멈추기 위한 CC(군중 제어) 제공.</li>
              </ul>
            </div>
          `
    },

    {
        id: 'how-to-beat-route-3-4-mega-aggron-wave-100-guide',
        routeNumber: '3-4',
        name: 'PokéPath TD 루트 3-4 가이드: 메가보스로라 격파법 (강철의 시련)',
        mapImage: '/images/map-route/3-4.png',
        stars: 700,
        starsSecondary: 0,
        difficulty: 'Extreme',
        difficultyLevel: 5,
        terrain: ['Mountain', 'Cave', 'Ridge'],
        description: '특수공격의 궁극적인 시험대입니다. 적들은 물리 데미지를 차단하는 "헤비 아머"를 가지고 있습니다. 물리 어태커는 여기서 무용지물입니다. 보스 메가보스로라는 방어 관통이 필요합니다.',
        totalWaves: 100,
        recommendedTypes: ['Water', 'Fire', 'Special-Fighting', 'Ground'],
        recommendedPokemon: ['Starmie', 'Chandelure', 'Lucario', 'Blastoise', 'Nidoking', 'Gardevoir', 'Empoleon', 'Magnezone'],
        strategies: ['Special Attack Meta', 'Sturdy Breakers', 'Mid-Battle Item Swap'],
        playstyle: 'Loadout Optimization',
        tips: [
            '물리 어태커(괴력몬, 갸라도스, 마기라스)는 아머 때문에 여기서 0~1의 데미지만 입힙니다. 사용하지 마세요!',
            '모두에게 "박식안경"이나 "구애안경"을 장착하세요. 특수공격만이 승리할 수 있는 유일한 방법입니다.',
            '적들이 "옹골참" 특성을 가집니다 - 치명적인 타격을 입어도 HP 1로 생존합니다. 싸라기눈(눈설왕)이나 화상을 사용하여 마무리하세요.',
            '보스 메가보스로라는 "필터" 능력을 가져 효과가 굉장한 데미지를 25% 감소시킵니다.',
            '루카리오는 오직 "파동탄"(특수 기술)을 사용할 때만 MVP가 됩니다.',
            '고지대를 활용하세요! 능선 위에 스나이퍼(인텔리레온)를 배치하면 엄청난 사거리를 얻습니다.'
        ],
        teamComposition: {
            early: ['Squirtle', 'Charmander', 'Magnemite'],
            mid: ['Wartortle', 'Charmeleon', 'Magneton', 'Haunter'],
            late: ['Blastoise (Mega)', 'Chandelure', 'Starmie', 'Magnezone', 'Lucario (Special)', 'Nidoking']
        },
        terrainAnalysis: {
            roads: [
                { description: '시련의 길: 루프가 없는 단일 롱 스트레이트 경로', length: 'Long', chokepoints: 0 },
                { description: '동굴 입구: 적들이 뭉치는 좁은 터널', length: 'Short', chokepoints: 1 }
            ],
            water: [
                { description: '지하 호수', type: 'Deep Water', strategicValue: 'High', benefits: ['물 타입 위력 2배'] }
            ],
            mountains: [
                { description: '철의 능선', height: 'Max', strategicValue: 'Critical', benefits: ['사거리 +75%', '스나이퍼에게 이상적'] },
                { description: '절벽 가장자리', height: 'High', strategicValue: 'Very High', benefits: ['사거리 +50%'] }
            ],
            grass: [
                { description: '없음', coverage: 'Zero', benefits: ['은신 불가'] }
            ],
            chokepoints: [
                { location: '다리', description: '호수 위의 좁은 다리. 적들이 마치 통 안의 오리처럼 몰려있게 됩니다.', priority: 'Max' },
                { location: '정상', description: '기지 전 마지막 오르막길.', priority: 'Medium' }
            ]
        },
        seo: {
            title: 'PokéPath TD 루트 3-4 가이드: 메가보스로라 & 방어 관통 전략',
            description: '루트 3-4의 적들은 물리 데미지에 면역입니다! v1.4.1에서 아쿠스타와 샹델라를 사용하여 "특수공격 메타"를 활용하고 메가보스로라를 이기는 법을 배우세요.',
            keywords: 'pokepathtd route 3-4, beat mega aggron pokepathtd, route 3-4 guide, special attack build, armor piercing guide'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>업데이트 1.4.1에서 도입된 가장 어려운 맵인 루트 3-4, 일명 "철의 산"입니다. 이곳은 균형 잡힌 팀을 응징하기 위해 설계된 "스탯 체크" 맵입니다.</p>
              <p>여기서의 기믹은 <strong>헤비 아머(Heavy Armor)</strong>입니다. 모든 적(꼬마돌, 롱스톤, 강철톤, 보스로라)은 엄청난 방어 스탯을 가지고 있습니다. 일반적인 물리 팀(잠만보나 괴력몬 등)을 데려오면 웨이브 1에서 실패할 것입니다.</p>
              <p>승리하려면 <strong>특수공격(Sp.Atk) 메타</strong>를 받아들여야 합니다. 마법, 빔, 그리고 원소 에너지가 필요합니다.</p>
              
              <h3>🛡️ 보스 분석: 메가보스로라</h3>
              <ul>
                <li><strong>HP:</strong> 높음.</li>
                <li><strong>방어력:</strong> 무한에 가까움. 물리 데미지가 99% 감소합니다.</li>
                <li><strong>특성: 필터.</strong> 효과가 굉장한 공격(불꽃/격투/땅)으로부터 받는 데미지를 25% 줄입니다. 이로 인해 카운터 타입을 상대로도 놀라운 탱킹력을 보여줍니다.</li>
                <li><strong>약점:</strong>
                  <ul>
                    <li>특수 격투: (루카리오의 파동탄). <strong>최고의 카운터</strong>.</li>
                    <li>특수 불꽃: (샹델라 / 메가리자몽Y).</li>
                    <li>특수 땅: (니드킹의 대지의힘).</li>
                  </ul>
                </li>
              </ul>
              
              <h3>🏆 "박식안경" 전략</h3>
              <p>근육밴드는 넣어두세요. 이 루트는 <strong>박식안경</strong>(특수 데미지 증가)과 <strong>구애안경</strong>(특수 데미지 대폭 증가)이 전부입니다.</p>
              
              <h4>1. MVP: 아쿠스타 / 거북왕</h4>
              <ul>
                <li><strong>역할:</strong> 개틀링 건.</li>
                <li><strong>승리 이유:</strong> 물 타입 공격은 거의 항상 특수 공격입니다. 아쿠스타는 놀라운 스피드와 견제 폭을 가집니다. 거북왕(특히 메가진화)은 적의 단일 타겟 아머를 무시하는 광역 물 데미지를 입힙니다.</li>
                <li><strong>배치:</strong> 데미지 2배 버프를 위해 "지하 호수" 타일에 배치하세요.</li>
              </ul>
              
              <h4>2. 탱커 파괴자: 샹델라</h4>
              <ul>
                <li><strong>역할:</strong> 아머 녹이기.</li>
                <li><strong>승리 이유:</strong> 샹델라는 전설이 아닌 포켓몬 중 가장 높은 특공 스탯을 보유하고 있습니다. 불꽃 기술로 강철 타입들을 손쉽게 태워버립니다.</li>
                <li><strong>아이템:</strong> <em>구애안경</em>. 분기점이 없으므로 타겟을 자주 바꿀 필요가 없습니다.</li>
              </ul>
              
              <h4>3. 옹골참 카운터: 눈설왕 (싸라기눈)</h4>
              <ul>
                <li><strong>역할:</strong> 피니셔.</li>
                <li><strong>승리 이유:</strong> 여기의 많은 바위 타입들은 <strong>"옹골참"</strong> 패시브(한 방에 죽지 않음)를 가집니다. HP 1로 살아남아 기지로 걸어 들어올 것입니다. 눈설왕은 <strong>싸라기눈</strong>을 소환해 글로벌 짤짤이 데미지를 입혀, HP 1인 모든 적을 즉시 처치합니다.</li>
              </ul>
              
              <h3>📝 단계별 가이드</h3>
              <ol>
                <li><strong>1-20 웨이브:</strong> 생존 모드입니다. 꼬마돌들은 단단합니다. <strong>꼬부기(거품)</strong>나 <strong>파이리(불꽃세례)</strong>를 사용하세요. 구구와 꼬렛은 쓰지 마세요. 데미지가 0 들어갑니다.</li>
                <li><strong>21-60 웨이브:</strong> 강철의 물결입니다. 강철톤과 레어코일이 등장합니다. 여기서 <strong>샹델라</strong>나 <strong>니드킹</strong>이 필요합니다. 물 타입에만 의존하면 레어코일(전기)에게 전멸당할 것입니다.</li>
                <li><strong>61-90 웨이브:</strong> 고지대 단계. 드래그 앤 드롭 기능을 사용하여 스나이퍼(인텔리레온/아쿠스타)를 "철의 능선"으로 옮기세요. 사거리 버프 덕분에 스폰 지점까지 타격할 수 있습니다.</li>
                <li><strong>100 웨이브 (메가보스로라):</strong> 
                  <ul>
                    <li><strong>아이템 교체:</strong> 일시정지 후 행복의알이나 먹다남은음식을 해제하세요. 루카리오와 샹델라에게 <strong>구애안경</strong>을 장착합니다.</li>
                    <li><strong>배치:</strong> 루카리오를 다리(요충지)로 드래그하세요.</li>
                    <li><strong>집중:</strong> 보스로라의 "필터" 능력이 데미지를 줄이므로 압도적인 화력이 필요합니다. 모든 쿨다운 기술을 즉시 활성화하세요.</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ 지형 분석</h3>
              <p>루트 3-4는 "시련(Gauntlet)" 스타일의 맵입니다. 루프도 미로도 없습니다. 위에서 아래로 이어지는 죽음의 직선뿐입니다.</p>
              
              <h4>철의 능선 (고지대)</h4>
              <ul>
                <li><strong>효과:</strong> 여기 배치된 타워는 사거리가 대폭 증가합니다 (+75%).</li>
                <li><strong>활용:</strong> 경로에서 멀리 떨어져 있어야 하는 <strong>후딘</strong>이나 <strong>인텔리레온</strong> 같은 유리 대포들에게 완벽한 장소입니다.</li>
              </ul>
              
              <h4>지하 호수</h4>
              <ul>
                <li><strong>효과:</strong> 동굴 중간에 있는 물 타일입니다.</li>
                <li><strong>활용:</strong> 물/비행 타입만 배치 가능합니다. 엄청난 파워 버프를 얻습니다. 이것이 <strong>아쿠스타</strong>가 이 맵에서 S티어인 이유입니다.</li>
              </ul>
              
              <h3>⚔️ 팀 구성 권장 사항</h3>
              <h4>"특수 부대" 팀</h4>
              <p>주먹, 발톱, 몸통으로 공격하는 포켓몬이라면 박스에 넣어두세요.</p>
              <ul>
                <li><strong>샹델라:</strong> 강철 타입 대응 필수.</li>
                <li><strong>아쿠스타 / 거북왕:</strong> 바위/땅 타입 대응 필수.</li>
                <li><strong>루카리오:</strong> 반드시 특수공격형(파동탄)으로 빌드해야 합니다.</li>
                <li><strong>눈설왕:</strong> 패시브 싸라기눈으로 옹골참 적 처치.</li>
                <li><strong>자포코일:</strong> 강철 적을 묶고(자력) 특수 전기 데미지를 입힙니다.</li>
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
