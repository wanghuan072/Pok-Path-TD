export const stages = [
    {
        id: 'how-to-beat-route-1-1-articuno',
        routeNumber: '1-1',
        name: 'ポケパスTD ルート1-1攻略ガイド：フリーザーを倒すための最強チーム',
        mapImage: '/images/map-route/1-1.png',
        stars: 13,
        difficulty: 'Easy',
        difficultyLevel: 1,
        terrain: ['Field', 'Grass', 'Water'],
        description: 'ルート1-1は、ポケパスTDにおける最初の大きな難所です。序盤のウェーブは簡単ですが、多くのプレイヤーがウェーブ100で伝説の鳥ポケモン、フリーザーが登場した際に足止めを食らいます。フリーザーは膨大なHPを持ち、タワーを凍らせてきます。攻略の鍵は、マップ固有の地形（中央の巨大な水域ゾーンと下部のU字型陸路）をマスターすることです。',
        totalWaves: 100,
        recommendedTypes: ['Water', 'Ice', 'Dark', 'Normal', 'Grass', 'Ground'],
        recommendedPokemon: ['Omastar', 'Corsola', 'Samurott', 'Feraligatr', 'Lapras', 'Octillery', 'Weavile', 'Farfetch\'d', 'Sunflora', 'Excadrill', 'Honchkrow'],
        strategies: ['Water Trap', 'Control & AOE', 'Kill Zone'],
        playstyle: 'Hybrid Water/Land',
        tips: [
            '水上ユニットを中央の湖に配置しましょう。上と下の両方のルートを攻撃できます。',
            'サニーゴ（Corsola）がMVPです。射程300のスロウ効果がマップのほぼ全域をカバーします。',
            'マニューラ（Weavile）を下部の草むらルートに配置し、カモネギ（Farfetch\'d）とキマワリ（Sunflora）でバフをかけましょう。',
            'ドンカラス（Honchkrow）は、透明な敵対策として、唯一の山タイルに配置する必要があります。',
            '湖のユニットは両方のルートをカバーすることで、実質的にDPSが2倍になります。',
            'フリーザーを止めるために、ラプラスのまひ効果を活用しましょう。'
        ],
        teamComposition: {
            early: ['Omastar', 'Corsola'],
            mid: ['Omastar', 'Corsola', 'Lapras', 'Octillery', 'Weavile'],
            late: ['Omastar', 'Corsola', 'Samurott', 'Feraligatr', 'Lapras', 'Octillery', 'Weavile', 'Farfetch\'d', 'Sunflora', 'Excadrill', 'Honchkrow']
        },
        seo: {
            title: 'ポケパスTD ルート1-1攻略ガイド：フリーザーを倒すための最強チーム',
            description: 'ルート1-1で苦戦していませんか？ウェーブ100のフリーザーを撃破するための究極ガイドです。最適な水上・陸上ユニットの配置と、透明な敵への対策を学びましょう。',
            keywords: 'pokepathtd route 1-1, beat articuno pokepathtd, route 1-1 best team, pokepathtd water strategy'
        },
        terrainAnalysis: {
            roads: [
                { description: '下部のU字型陸路 - キルゾーン', length: 'Long', chokepoints: 2 },
                { description: '中央の湖を囲む上部ルート', length: 'Medium', chokepoints: 1 },
                { description: '中央の湖を回るメインルート', length: 'Long', chokepoints: 2 }
            ],
            water: [
                { description: '中央の巨大水域ゾーン - ウォータートラップ', type: 'Deep Water', strategicValue: 'Very High', benefits: ['みずタイプポケモンのパワーが2倍ボーナス', 'ここに配置されたユニットは上下両方のルートを攻撃可能', '実質的にDPSが2倍'] },
                { description: 'ルート近くの小さな水たまり', type: 'Shallow Water', strategicValue: 'Medium', benefits: ['みずタイプポケモンのパワーボーナス'] }
            ],
            mountains: [
                { description: '右側の重要な単一山タイル', height: 'High', strategicValue: 'Very High', benefits: ['射程ボーナス +30%', '高台視界を得られる唯一のスポット', 'ドンカラスの配置が必須'] }
            ],
            grass: [
                { description: '下部U字型ルート - 陸上ユニットのキルゾーン', coverage: 'High', benefits: ['くさタイプポケモンのパワーボーナス', 'マニューラ、カモネギ、キマワリに最適'] },
                { description: '湖を囲む草地', coverage: 'High', benefits: ['くさタイプポケモンのパワーボーナス'] }
            ],
            chokepoints: [
                { location: '中央の湖 (水域ゾーン)', description: '水上ユニットが両方のルートを攻撃できる巨大水域', priority: 'Very High' },
                { location: '下部U字型ルート (キルゾーン)', description: '主力アタッカーが弱った敵を仕留める場所', priority: 'Very High' },
                { location: '山タイル (右側)', description: '高台視界を得られる唯一の場所 - ドンカラスを配置', priority: 'Very High' }
            ]
        },
        detailsHtml: `
            <div class="route-guide">
              <p>ルート1-1は、ポケパスTDにおける最初の大きな難所です。序盤のウェーブは簡単ですが、多くのプレイヤーがウェーブ100で伝説の鳥ポケモン、フリーザーが登場した際に足止めを食らいます。</p>
              <p>フリーザーは膨大なHPを持ち、タワーを凍らせてきます。攻略の鍵は、マップ固有の地形（中央の巨大な水域ゾーンと下部のU字型陸路）をマスターすることです。</p>
              <p>このガイドでは、ルート1-1を制覇するために必要な、水上と陸上のユニットを最大限に活用した10ユニットのチーム編成を紹介します。</p>
              
              <h3>🗺️ マップ分析：「ウォータートラップ」</h3>
              <p>ルート1-1の鍵は中央の湖です。</p>
              <ul>
                <li><strong>水上ユニット（青ゾーン）：</strong> ここに配置されたユニットは、上の道と下の道の両方の敵を攻撃できます。これにより実質的にDPSが2倍になります。</li>
                <li><strong>陸上ユニット（緑ゾーン）：</strong> 下の道は「キルゾーン」です。ここは、弱った敵を仕留めるための強力なアタッカーを配置すべき場所です。</li>
                <li><strong>山（赤ゾーン）：</strong> 右側に重要な山タイルが1つあります。ここは高台視界を得られる唯一のスポットです。</li>
              </ul>
              
              <h3>🏆 ルート1-1の最強チーム (10ユニット編成)</h3>
              <p>このラインナップはレベル100のアカウント向けに最適化されていますが、低レベルでも十分に機能します。</p>
              
              <h4>1. 水上部隊 (妨害 & 範囲攻撃)</h4>
              <p>以下の5ユニットを中央の湖に配置します（左から右へ）：</p>
              <ul>
                <li><strong>オムスター (左):</strong> 特性「すいすい」により、水上では攻撃速度が2倍になります。序盤ウェーブのマシンガン役です。</li>
                <li><strong>サニーゴ (中央左):</strong> MVPです。リング状の攻撃は射程が非常に広く（Lv 100で300）、マップのほぼ全域にスロウ効果を付与します。</li>
                <li><strong>ダイケンキ / オーダイル (中央):</strong> 水上のボス攻略アタッカーです。</li>
                <li><strong>ラプラス (中央右):</strong> まひ（スタン）チャンスを追加します。スロウを抜けてきたフリーザーを止めるために不可欠です。</li>
                <li><strong>オクタン (右):</strong> スナイパー役です。射程480を誇り、敵が出現した瞬間に攻撃を開始できます。</li>
              </ul>
              
              <h4>2. 陸上部隊 (「キルゾーン」)</h4>
              <p>以下のユニットを下部の草むらルートに配置します：</p>
              <ul>
                <li><strong>6. マニューラ (中央):</strong> メインDPSです。Lv 100ではクリティカル率65%を誇り、クリティカル時に2倍のダメージを与えます。</li>
                <li><strong>7. カモネギ (マニューラの左):</strong> 必須のバッファーです。マニューラのクリティカルダメージを33%強化します。</li>
                <li><strong>8. キマワリ (マニューラの右):</strong> 必須のバッファーです。マニューラと周囲の水上ユニットにダメージ+20%のオーラを付与します。</li>
                <li><strong>9. ドリュウズ (コーナー):</strong> 敵の防御力を削ります。</li>
              </ul>
              
              <h4>3. 透明な敵への対策</h4>
              <ul>
                <li><strong>ドンカラス (山タイル):</strong> 右側の唯一の山タイルにドンカラスを配置することが「必須」です。</li>
                <li><strong>なぜ？</strong> ルート1-1の後半ウェーブには透明な敵（カクレオンなど）が出現します。ドンカラスは、それらが通り抜ける前に姿を現させるのに最適なユニットです。</li>
              </ul>
              
              <h3>⚔️ ボス戦略：フリーザーを倒す方法 (ウェーブ100)</h3>
              <p>フリーザーは耐久力の高い「ひこう/こおり」タイプです。</p>
              <ul>
                <li><strong>弱点：</strong> 移動に依存しています。動きを止めることができれば、倒すことができます。</li>
              </ul>
              <p><strong>戦略：</strong></p>
              <ul>
                <li><strong>スロウをかける：</strong> フリーザーが入ってくるとすぐに、サニーゴが移動速度を低下させます。</li>
                <li><strong>スタンロック：</strong> ラプラス（および連れてきた場合はデンリュウなど）が「まひ」を狙います。</li>
                <li><strong>集中攻撃：</strong> 下の道に到達すると、マニューラの射程に入ります。キマワリとカモネギのバフを受けたマニューラは、数秒でフリーザーのHPを削り取ります。</li>
              </ul>
              <p><strong>プロのヒント：</strong> ゴールドを稼ぎたい場合は、水中でメタモンを使ってペルシアンをコピーし、フリーザーを倒す前にボーナスキャッシュを稼ぐことも可能です！</p>
              
              <img src="/images/map-route/1-1-01.png" alt="Route 1-1 Map" class="route-map">
      
              <h3>🗺️ 地形分析</h3>
              <p>ルート1-1は、中央の巨大な湖とU字型の陸路というユニークな「ウォータートラップ」レイアウトが特徴で、水上・陸上ユニットの両方に戦略的な機会を提供します。</p>
              
              <h4>道路とルート</h4>
              <ul>
                <li><strong>U字型陸路：</strong> 下部のU字型陸路 - キルゾーン (Long, チョークポイント2箇所)</li>
                <li><strong>上部ルート：</strong> 中央の湖を囲む上部の道 (Medium, チョークポイント1箇所)</li>
                <li><strong>メインルート：</strong> 中央の湖を蛇行するメインパス (Long, チョークポイント2箇所)</li>
              </ul>
              
              <h4>水域</h4>
              <ul>
                <li><strong>巨大水域ゾーン：</strong> 中央の巨大な湖 - ウォータートラップ (戦略的価値：極めて高い) - みずタイプポケモンのパワー2倍、上下両方のルートを攻撃可能、DPS実質2倍</li>
                <li><strong>小さな水たまり：</strong> ルート付近の小さな水域 (戦略的価値：中) - みずタイプポケモンのパワーボーナス</li>
              </ul>
              
              <h4>山と高台</h4>
              <ul>
                <li><strong>単一山タイル：</strong> 右側の重要な山タイル (戦略的価値：極めて高い) - 射程+30%、唯一の高台視界、ドンカラスの配置必須</li>
              </ul>
              
              <h4>草地と植生</h4>
              <ul>
                <li><strong>下部U字型ルート：</strong> 陸上ユニットのキルゾーン (カバー率：高) - くさタイプポケモンのパワーボーナス、マニューラ、カモネギ、キマワリに最適</li>
                <li><strong>草地：</strong> 湖を囲むフィールド (カバー率：高) - くさタイプポケモンのパワーボーナス</li>
              </ul>
              
              <h4>戦略的チョークポイント</h4>
              <ul>
                <li><strong>中央の湖 (水域ゾーン):</strong> 水上ユニットが両方のルートを攻撃できる巨大水域 (優先度：極めて高い)</li>
                <li><strong>下部U字型ルート (キルゾーン):</strong> 主力アタッカーが敵を仕留める場所 (優先度：極めて高い)</li>
                <li><strong>山タイル (右側):</strong> 高台視界を得られる唯一の場所 - ドンカラス必須 (優先度：極めて高い)</li>
              </ul>
              
              <h3>⚔️ チーム編成</h3>
              <h4>序盤 (ウェーブ 1-50)</h4>
              <p>中央の湖にオムスターとサニーゴを配置して始めます。オムスターの「すいすい」は攻撃速度を2倍にするため、序盤の猛攻を防ぐマシンガンになります。</p>
              
              <h4>中盤 (ウェーブ 51-99)</h4>
              <p>水上部隊にラプラスとオクタンを追加します。下の道にマニューラを配備し、妨害とDPSの能力を高めていきます。</p>
              
              <h4>終盤 (ウェーブ 100)</h4>
              <p>10ユニットのフルチームを配備：中央の湖に水上部隊（オムスター、サニーゴ、ダイケンキ/オーダイル、ラプラス、オクタン）、下の道に陸上部隊（マニューラ、カモネギ、キマワリ、ドリュウズ）、そして山タイルに透明な敵対策のドンカラスを配置します。</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-1-2-zapdos-wave-100',
        routeNumber: '1-2',
        name: 'ポケパスTD ルート1-2攻略ガイド：サンダー撃破（ウェーブ100戦略）',
        mapImage: '/images/map-route/1-2.png',
        stars: 2,
        difficulty: 'Easy',
        difficultyLevel: 1,
        terrain: ['Field', 'Grass'],
        description: 'ルート1-2は分かれ道が多く水域がないことで知られていますが、真の挑戦はウェーブ100のサンダーです。この伝説の鳥ポケモンは速く、硬く、多くの状態異常を無効化します。通常の範囲攻撃チームでウェーブ1-99はクリアできてもボスで負けてしまう場合は、戦術的な「ブロスター入れ替え」戦略を使用してください。',
        totalWaves: 100,
        recommendedTypes: ['Water', 'Ice', 'Normal', 'Grass'],
        recommendedPokemon: ['Clawitzer', 'Farfetch\'d', 'Sunflora', 'Weavile', 'Ditto', 'Corsola', 'Maractus'],
        strategies: ['Clawitzer Nuke', 'Spawn Camping', 'Tactical Swap'],
        playstyle: 'Boss Swap Strategy',
        tips: [
            '無限リトライ機能を活用しましょう。ウェーブ100で失敗しても即座にリトライ可能です。',
            'ウェーブ100でマラカッチ（Maractus）を下げ、出現ポイントにブロスター（Clawitzer）を配備しましょう。',
            'ブロスターの隣にカモネギとキマワリを配置し、最大バフをかけます。',
            'ボスは透明にならないため、最終ウェーブではドンカラスを下げてDPSユニットに変更できます。',
            'ブロスターのターゲット設定を「強い（Strong）」または「先頭（First）」にしてダメージを最適化します。',
            '保険として中央にマニューラとメタモンを配置しましょう。'
        ],
        teamComposition: {
            early: ['Maractus', 'Honchkrow'],
            mid: ['Maractus', 'Aggron', 'Corsola', 'Weavile'],
            late: ['Clawitzer', 'Farfetch\'d', 'Sunflora', 'Weavile', 'Ditto', 'Corsola']
        },
        terrainAnalysis: {
            roads: [
                { description: '中央で合流する分かれ道', length: 'Long', chokepoints: 2 },
                { description: '中央を通る直線のメインルート', length: 'Long', chokepoints: 1 },
                { description: '左側の曲線ルート', length: 'Medium', chokepoints: 0 }
            ],
            water: [],
            mountains: [
                { description: '遠距離ユニット用の山岳エリア', height: 'Medium', strategicValue: 'High', benefits: ['射程ボーナス +20%', 'ドンカラスやプテラに最適'] }
            ],
            grass: [
                { description: 'マップの大部分を占める広大な草地', coverage: 'Very High', benefits: ['くさタイプポケモンのパワー2倍ボーナス'] },
                { description: '追加の草地地形となる農地', coverage: 'Medium', benefits: ['くさタイプポケモンのパワーボーナス'] },
                { description: '左下の出現エリア', coverage: 'Low', benefits: ['ブロスターの配置に最適'] }
            ],
            chokepoints: [
                { location: '左下の出現ポイント', description: 'サンダーが出現する場所 - リスポーンキルに最適', priority: 'Very High' },
                { location: '中央の合流点', description: '道が収束する場所 - 最終防衛ライン', priority: 'Very High' },
                { location: '中央ルートの狭窄部', description: 'メインパスが中央で狭くなる場所', priority: 'High' }
            ]
        },
        seo: {
            title: 'ポケパスTD ルート1-2攻略ガイド：サンダー撃破（ウェーブ100戦略）',
            description: 'サンダーで詰まっていませんか？ルート1-2を攻略するための「ブロスター入れ替え」戦略を伝授します。無限リトライ機能と、ボスを溶かす最強チームについて解説します。',
            keywords: 'pokepathtd route 1-2, beat zapdos pokepathtd, wave 100 retry mechanic, clawitzer boss killer, pokepathtd guide'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>ルート1-2は分かれ道が多く水域がないことで知られていますが、真の挑戦はウェーブ100のサンダーです。この伝説の鳥ポケモンは速く、硬く、多くの状態異常を無効化します。</p>
              <p>もしあなたの標準的な範囲攻撃チーム（マラカッチ/ボスゴドラ）がウェーブ1-99をクリアできてもボスで失敗してしまう場合でも、心配いりません。最初からやり直す必要はありません。</p>
              <p>このガイドでは、ゲームの「無限リトライ」機能と戦術的な「ブロスター入れ替え」を使用してサンダーを粉砕します。</p>
              
              <h3>⚙️ 知っておくべき重要なゲームシステム</h3>
              <p>チームについて話す前に、ポケパスTDの2つの重要なシステムを理解する必要があります：</p>
              
              <h4>1. 「無限ボスリトライ」機能</h4>
              <ul>
                <li>ウェーブ100のボスに負けても、ゲームオーバーにはなりません。単にウェーブ100が再スタートします。</li>
                <li><strong>つまり：</strong> サンダーを倒せるまで何度でも挑戦できます。失敗したら、チームを調整したり、ユニットを移動させたりして即座に再試行してください。ペナルティはありません！</li>
              </ul>
      
              <img src="/images/map-route/1-2-02.png" alt="Route 1-2 Map" class="route-map">
              
              <h4>2. 「引退（退却）」システム</h4>
              <ul>
                <li>ユニットを入れ替える（引退させる）際、ゴールドは戻ってきません。</li>
                <li><strong>戦略：</strong> ウェーブ100までには十分なゴールドが貯まっているはずです。マラカッチのような雑魚処理用ユニットを引退させ、ブロスターのようなボス用ユニットを配置するスペースを作ることを恐れないでください。お金ではなく、パワーを買うのです。</li>
              </ul>
              
              <h4>3. ボスは「透明」ではない</h4>
              <ul>
                <li>サンダー（およびすべてのウェーブ100のボス）は「透明」特性を持っていません。</li>
                <li><strong>最適化：</strong> 最終ウェーブでは、透明対策のドンカラスを安心して引退させ、プテラやフライゴンなどの高DPSユニットに置き換えて追加ダメージを狙えます。</li>
              </ul>
              
              <h3>⚔️ 戦略：「ブロスター爆撃」</h3>
              <p>サンダーは高速です。出現直後に大ダメージを与える必要があります。左下の出現ポイントでの「出待ち（スポーンキャンプ）」に焦点を当てます。</p>
              
              <h4>ステップ 1：セットアップ (左下のコーナー)</h4>
              <p>ここがサンダーの出現場所です。彼が動き出す前に強打します。</p>
              <ul>
                <li><strong>入れ替え：</strong> マラカッチ（範囲攻撃）を下げ、ブロスター（Lv 100）を配備します。</li>
                <li><strong>なぜ？</strong> ブロスターは1,950のパワーを持ち、クリティカル時に2倍のダメージを与えます。ゲーム内で最強クラスの単体火力を誇ります。</li>
                <li><strong>バフ：</strong> ブロスターのすぐ隣にカモネギ（クリダメ+33%）とキマワリ（ダメージ+20%）を配置します。</li>
                <li><strong>結果：</strong> サンダーは出現した瞬間に強力なクリティカルロケットを受け、即座にHPの30～50%を失います。</li>
              </ul>
              
              <h4>ステップ 2：セーフティネット (中央フィールド)</h4>
              <p>もしサンダーが初期爆撃を生き延びた場合、中央の合流点へ移動します。</p>
              <ul>
                <li><strong>マニューラ:</strong> 上下の両ルートをカバーできるように、マニューラをここに配置します。</li>
                <li><strong>メタモン:</strong> マニューラをコピーして近くに配置します。マニューラ2体の方が1体より強力です。</li>
                <li><strong>サニーゴ:</strong> 射程300のスロウを提供します。サンダーは速いですが、これによりマニューラが攻撃を当てる時間を稼げます。</li>
              </ul>
              
              <h4>ステップ 3：勝てない場合の最適化</h4>
              <p>それでも勝てない場合は：</p>
              <ul>
                <li>ウェーブを再開させます（オートリトライ）。</li>
                <li><strong>ドンカラスを引退させる：</strong> サンダーは透明ではないので、ドンカラスを下げて山の上の高DPSユニットに変更します。</li>
                <li><strong>ターゲット確認：</strong> ブロスターが「強い（Strong）」または「先頭（First）」を狙っているか確認してください。</li>
              </ul>
              
              <h3>📝 まとめ：勝利へのプレイ</h3>
              <ol>
                <li>標準的な範囲攻撃チームでウェーブ1-99をクリアする。</li>
                <li>ウェーブ100で一時停止。</li>
                <li>マラカッチとドンカラスを引退させる。</li>
                <li>出現ポイントにブロスター + バフ役を配置。</li>
                <li>中央にマニューラ + メタモンを配置。</li>
                <li>再開して勝利。</li>
              </ol>
              <p>この戦略はレベル100のステータスを活用しています。これらのユニットの真の力を知りたいですか？ <a href="/wiki">Wikiデータベース</a>をチェックしてください。</p>
              
              <img src="/images/map-route/1-2-01.png" alt="Route 1-2 Map" class="route-map">
      
              <h3>🗺️ 地形分析</h3>
              <p>ルート1-2は分かれ道と広大な草地が特徴で、水域はありません。重要な戦略ポイントは出現地点と中央の合流点です。</p>
              
              <h4>道路とルート</h4>
              <ul>
                <li><strong>分かれ道：</strong> 中央で合流する分かれ道 (Long, チョークポイント2箇所)</li>
                <li><strong>メインルート：</strong> 中央を貫く直線ルート (Long, チョークポイント1箇所)</li>
                <li><strong>左ルート：</strong> 左側の曲線ルート (Medium, チョークポイント0箇所)</li>
              </ul>
              
              <h4>山と高台</h4>
              <ul>
                <li><strong>山岳エリア：</strong> 遠距離ユニット用の山 (戦略的価値：高) - 射程+20%、ドンカラスやプテラに最適</li>
              </ul>
              
              <h4>草地と植生</h4>
              <ul>
                <li><strong>広大な草地：</strong> マップの大部分をカバー (カバー率：極めて高い) - くさタイプポケモンのパワー2倍ボーナス</li>
                <li><strong>農地：</strong> 追加の草地地形 (カバー率：中) - くさタイプポケモンのパワーボーナス</li>
                <li><strong>左下出現エリア：</strong> 左下のリスポーン地点 (カバー率：低) - ブロスターの配置に最適</li>
              </ul>
              
              <h4>戦略的チョークポイント</h4>
              <ul>
                <li><strong>左下出現ポイント:</strong> サンダー出現場所 - 出待ちに最適 (優先度：極めて高い)</li>
                <li><strong>中央合流点:</strong> ルートが収束する場所 - セーフティネットゾーン (優先度：極めて高い)</li>
                <li><strong>中央ルート狭窄部:</strong> メインパスが狭くなる場所 (優先度：高)</li>
              </ul>
              
              <h3>⚔️ チーム編成</h3>
              <h4>序盤 (ウェーブ 1-50)</h4>
              <p>マラカッチを範囲攻撃用に、ドンカラスを透明な敵対策に使用します。</p>
              
              <h4>中盤 (ウェーブ 51-99)</h4>
              <p>引き続きマラカッチとボスゴドラで範囲ダメージを与えます。妨害とDPSのためにサニーゴとマニューラを追加します。</p>
              
              <h4>終盤 (ウェーブ 100)</h4>
              <p>「ブロスター入れ替え」を実行：マラカッチを引退させ、出現ポイントにブロスター + カモネギ + キマワリを配備。中央にマニューラ + メタモン + サニーゴを保険として残します。</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-1-3-moltres',
        routeNumber: '1-3',
        name: 'ポケパスTD ルート1-3攻略ガイド：ファイヤーを倒すための最強チーム',
        mapImage: '/images/map-route/1-3.png',
        stars: 300,
        starsSecondary: 0,
        difficulty: 'Medium',
        difficultyLevel: 2,
        terrain: ['Field', 'Mountain', 'Water', 'Grass'],
        description: 'ルート1-3は第1リージョンの最終ステージで、水域、草地、山岳地形が混在しています。最大の挑戦はウェーブ100の伝説の火の鳥、ファイヤーです。みずタイプが当然の選択に思えますが、このマップを攻略する真の秘訣は、特殊な「ハイブリッド・コントロールチーム」にあります。',
        totalWaves: 100,
        recommendedTypes: ['Dark', 'Ice', 'Electric', 'Steel', 'Grass'],
        recommendedPokemon: ['Absol', 'Ditto', 'Weavile', 'Corsola', 'Ferrothorn', 'Ampharos', 'Sunflora', 'Noivern', 'Honchkrow'],
        strategies: ['Double Absol Lock-On', 'Control & Burst', 'Three-Layer Defense'],
        playstyle: 'Hybrid Control',
        tips: [
            '左上の山にアブソル（Absol）とメタモン（Ditto）を配置し、早期ロックオンとダメージの蓄積を狙いましょう。',
            '中央の合流点にサニーゴ（Corsola）とナットレイ（Ferrothorn）を配置して、マップ全体にスロウをかけます。',
            '右下のキルゾーンにマニューラ（Weavile）とキマワリ（Sunflora）を配備して仕留めます。',
            'アブソルとメタモンのターゲットを「強い（Strong）」に設定し、即座にファイヤーをロックオンさせます。',
            'ダブルアブソルのセットアップにより、ファイヤーが中央に到達する前にHPを削りきることができます。'
        ],
        teamComposition: {
            early: ['Noivern', 'Corsola'],
            mid: ['Absol', 'Ditto', 'Ferrothorn', 'Ampharos'],
            late: ['Absol', 'Ditto', 'Corsola', 'Ferrothorn', 'Ampharos', 'Weavile', 'Sunflora', 'Noivern', 'Honchkrow']
        },
        terrainAnalysis: {
            roads: [
                { description: '中央の合流点を通る収束ルート', length: 'Long', chokepoints: 2 },
                { description: '出現地点からキルゾーンへの道', length: 'Medium', chokepoints: 1 }
            ],
            water: [
                { description: '地形ボーナスを提供する水域', type: 'Water', strategicValue: 'Medium', benefits: ['みずタイプポケモンのパワーボーナス'] }
            ],
            mountains: [
                { description: '山 (左上) - 遠距離スナイパーや透明対策ユニットに最適', height: 'Very High', strategicValue: 'Very High', benefits: ['射程ボーナス +40%', 'アブソルやオンバーンに最適', '敵を早期にロックオン可能'] },
                { description: 'ルート沿いの岩壁', height: 'Medium', strategicValue: 'High', benefits: ['射程ボーナス +15%'] }
            ],
            grass: [
                { description: '右下のキルゾーンを含む草地', coverage: 'Medium', benefits: ['くさタイプポケモンのパワーボーナス', 'キマワリの配置に最適'] },
                { description: '点在する植生パッチ', coverage: 'Low', benefits: ['くさタイプポケモンのパワーボーナス'] }
            ],
            chokepoints: [
                { location: 'チョークポイント (中央)', description: '道が収束し、敵を遅らせるのに理想的な場所', priority: 'Very High' },
                { location: '山 (左上)', description: '遠距離スナイパーに最適', priority: 'Very High' },
                { location: 'キルゾーン (右下)', description: '主力アタッカーがボスを仕留める最終ストレッチ', priority: 'Very High' }
            ]
        },
        seo: {
            title: 'ポケパスTD ルート1-3攻略ガイド：ファイヤーを倒すための最強チーム',
            description: 'ルート1-3で苦戦中ですか？Lv.100の最強チームガイドを使用してファイヤーを撃破しましょう。「ダブルアブソル・ロックオン」戦略と全体スロウの活用法を解説。',
            keywords: 'pokepathtd route 1-3, beat moltres pokepathtd, pokepathtd best team, absol level 100, corsola slow build'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>ルート1-3は第1リージョンの最終ステージで、水域、草地、山岳地形が混在しています。最大の挑戦はウェーブ100の伝説の火の鳥、ファイヤーです。</p>
              <p>みずタイプが当然の選択に思えますが、このマップを攻略する真の秘訣は、特殊な「ハイブリッド・コントロールチーム」にあります。</p>
              <p>このガイドでは、ダメージ蓄積と全体クラウドコントロールを駆使してファイヤーを粉砕する、レベル100推奨の「ダブルアブソル・ロックオン」戦略を公開します。</p>
              
              <h3>🗺️ マップ戦略：流れを支配する</h3>
              <p>ルート1-3には、活用すべき3つの明確なゾーンがあります：</p>
              <ul>
                <li><strong>山 (左上):</strong> 遠距離スナイパーや透明対策ユニットに最適です。</li>
                <li><strong>チョークポイント (中央):</strong> 道が収束する場所で、敵を遅らせるのに理想的です。</li>
                <li><strong>キルゾーン (右下):</strong> 主力アタッカーがボスを仕留める最終ストレッチです。</li>
              </ul>
      
               <img src="/images/map-route/1-3-01.png" alt="Route 1-3 Map" class="route-map">
              
              <h3>🏆 最強チーム編成 (10ユニットセットアップ)</h3>
              <p>ファイヤーの高い移動速度とHPに対抗するために、完璧なチームを構築しました。</p>
              
              <h4>1. 高台のスナイパー (左上の山)</h4>
              <ul>
                <li><strong>アブソル (レベル100):</strong>
                  <ul>
                    <li><strong>役割:</strong> ダメージ蓄積（スケーリング）。</li>
                    <li><strong>パッシブ:</strong> 同じターゲットに連続で攻撃を当てるほどダメージが増加します。</li>
                    <li><strong>理由:</strong> 山の上に配置することで、アブソルは早い段階からファイヤーをロックオンし、無限にダメージをスタックさせることができます。</li>
                  </ul>
                </li>
                <li><strong>メタモン (アブソルをコピー):</strong>
                  <ul>
                    <li><strong>役割:</strong> ダメージ倍増。</li>
                    <li><strong>理由:</strong> アブソルをコピーすることで、2つのユニットで同時にダメージを蓄積させます。これにより、ボスが中央に到達する前にHPバーを溶かすことができます。</li>
                  </ul>
                </li>
                <li><strong>オンバーン / ドンカラス:</strong>
                  <ul>
                    <li><strong>役割:</strong> 透明対策 / 範囲攻撃。</li>
                    <li><strong>理由:</strong> 序盤ウェーブの透明な敵を排除し、遠距離からの範囲攻撃サポートを提供するために不可欠です。</li>
                  </ul>
                </li>
              </ul>
              
              <h4>2. 中盤のコントロール (全体スロウ)</h4>
              <ul>
                <li><strong>サニーゴ:</strong>
                  <ul>
                    <li><strong>役割:</strong> 全体スロウ。</li>
                    <li><strong>パッシブ:</strong> レベル100では射程300のリング攻撃により、マップのほぼ全域をスロウ状態にします。</li>
                    <li><strong>理由:</strong> ファイヤーは高速です。サニーゴはそれを這いつくばるような速度に変えます。</li>
                  </ul>
                </li>
                <li><strong>ナットレイ:</strong>
                  <ul>
                    <li><strong>役割:</strong> 補助スロウ。</li>
                    <li><strong>パッシブ:</strong> 攻撃にスロウ効果を付与します。</li>
                    <li><strong>理由:</strong> サニーゴと重複させることで、敵を永久に妨害し続けます。</li>
                  </ul>
                </li>
                <li><strong>デンリュウ:</strong>
                  <ul>
                    <li><strong>役割:</strong> ハードスタン。</li>
                    <li><strong>パッシブ:</strong> 30%の確率で「まひ」を付与します。</li>
                    <li><strong>理由:</strong> 土壇場のスタンは、キルゾーンでファイヤーを止める決定打となります。</li>
                  </ul>
                </li>
              </ul>
              
              <h4>3. 「キルゾーン」 (右下)</h4>
              <ul>
                <li><strong>マニューラ:</strong>
                  <ul>
                    <li><strong>役割:</strong> フィニッシャー。</li>
                    <li><strong>パッシブ:</strong> クリティカル率65% + クリティカルダメージ2倍。</li>
                    <li><strong>理由:</strong> アブソルの弾幕を生き残ったボスは、マニューラのクリティカルで一撃で仕留められます。</li>
                  </ul>
                </li>
                <li><strong>キマワリ:</strong>
                  <ul>
                    <li><strong>役割:</strong> ダメージバッファー。</li>
                    <li><strong>パッシブ:</strong> ダメージ+20%のオーラ。</li>
                    <li><strong>理由:</strong> マニューラと周囲のユニットを強化し、バーストダメージを最大化します。</li>
                  </ul>
                </li>
              </ul>
              
              <h3>⚔️ 核心となる秘訣：なぜこのチームが勝てるのか</h3>
              <p>ルート1-3攻略の鍵は、単にみずタイプを連打することではありません。それは「3層防御」にあります：</p>
              <ul>
                <li><strong>第1層 (ロックオン):</strong> ダブルアブソルのセットアップにより、ファイヤーが出現した瞬間からダメージを与え始めます。アブソルのダメージは一撃ごとに増加するため、中央に到達する頃には膨大なDPSを叩き出しています。</li>
                <li><strong>第2層 (流砂):</strong> サニーゴとナットレイがマップを流砂に変えます。ファイヤーは永久にスロウをかけられ、アブソルの射程内を歩く時間が2倍になります。</li>
                <li><strong>第3層 (処刑):</strong> 万が一ファイヤーが残りHP10%で生き残っても、バフを受けたマニューラの射程に入り、最後のクリティカルで処刑されます。</li>
              </ul>
              
              <h3>📝 ステップバイステップ実行ガイド</h3>
              <h4>配置:</h4>
              <ul>
                <li>左上の山にアブソルとメタモンを配置。</li>
                <li>中央の合流点付近にサニーゴとナットレイを配置。</li>
                <li>右下の草むらパッチにマニューラとキマワリを配置。</li>
              </ul>
              
              <h4>ターゲット設定:</h4>
              <ul>
                <li>アブソルとメタモンを「強い（Strong）」に設定し、即座にファイヤーをロックオンするようにします。</li>
              </ul>
              
              <h4>ボスウェーブ (100):</h4>
              <ul>
                <li>ファイヤーが這いつくばるような速度になるのを見守りましょう。</li>
                <li>2体のアブソルによる蓄積ダメージの合計で、マニューラに到達する前に倒せる可能性が高いです。</li>
                <li>もし生き残ったとしても、マニューラが片付けてくれます。</li>
              </ul>
      
              <img src="/images/map-route/1-3-02.png" alt="Route 1-3 Map" class="route-map">
              
              <h3>🗺️ 地形分析</h3>
              <p>ルート1-3は水域、草地、山岳地形が混在しており、3つの異なる戦略ゾーンを作り出しています。</p>
              
              <h4>道路とルート</h4>
              <ul>
                <li><strong>収束ルート：</strong> 中央の合流点を通る道 (Long, チョークポイント2箇所)</li>
                <li><strong>メインパス：</strong> 出現地点からキルゾーンへの道 (Medium, チョークポイント1箇所)</li>
              </ul>
              
              <h4>水域</h4>
              <ul>
                <li><strong>水域：</strong> 地形ボーナスを提供する水エリア (戦略的価値：中) - みずタイプポケモンのパワーボーナス</li>
              </ul>
              
              <h4>山と高台</h4>
              <ul>
                <li><strong>山 (左上)：</strong> 遠距離スナイパーや透明対策ユニットに最適 (戦略的価値：極めて高い) - 射程ボーナス +40%、アブソルやオンバーンに最適、敵を早期ロックオン可能</li>
                <li><strong>岩壁：</strong> ルート沿いの岩石エリア (戦略的価値：高) - 射程ボーナス +15%</li>
              </ul>
              
              <h4>草地と植生</h4>
              <ul>
                <li><strong>草地パッチ：</strong> 右下のキルゾーンを含むエリア (カバー率：中) - くさタイプポケモンのパワーボーナス、キマワリの配置に最適</li>
                <li><strong>点在する植生：</strong> 散らばった草地 (カバー率：低) - くさタイプポケモンのパワーボーナス</li>
              </ul>
              
              <h4>戦略的チョークポイント</h4>
              <ul>
                <li><strong>中央合流点：</strong> 道が収束し、敵を遅らせるのに理想的 (優先度：極めて高い)</li>
                <li><strong>山 (左上)：</strong> 遠距離スナイパーに最適 (優先度：極めて高い)</li>
                <li><strong>キルゾーン (右下)：</strong> 主力アタッカーがボスを仕留める最終ストレッチ (優先度：極めて高い)</li>
              </ul>
              
              <h3>⚔️ チーム編成</h3>
              <h4>序盤 (ウェーブ 1-50)</h4>
              <p>オンバーンとサニーゴで範囲攻撃ダメージと早期のコントロールを開始します。</p>
              
              <h4>中盤 (ウェーブ 51-99)</h4>
              <p>ボス用アタッカーを構築：アブソル、メタモン、ナットレイ、デンリュウを配備。中央にコントロールゾーンをセットアップします。</p>
              
              <h4>終盤 (ウェーブ 100)</h4>
              <p>「ダブルアブソル・ロックオン」チームを完成させる：山岳スナイパー（アブソル＆メタモン）、中盤コントロール（サニーゴ、ナットレイ、デンリュウ）、キルゾーン（マニューラ、キマワリ）、サポート（オンバーン、ドンカラス）。</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-2-1-raikou-wave-100',
        routeNumber: '2-1',
        name: 'ポケパスTD ルート2-1攻略ガイド：ライコウを撃破するための究極戦略',
        mapImage: '/images/map-route/2-1.png',
        stars: 50,
        starsSecondary: 0,
        difficulty: 'Medium',
        difficultyLevel: 2,
        terrain: ['Field', 'Mountain'],
        description: 'ルート2-1は第2リージョンの始まりです。敵が複数の道を選択できるトリッキーな十字路レイアウトが特徴で、伝説の三聖獣の一体、ライコウとの戦いで締めくくられます。ライコウは驚異的な移動速度で知られており、防御を整える前に駆け抜けてしまうことがよくあります。',
        totalWaves: 100,
        recommendedTypes: ['Dark', 'Ice', 'Electric', 'Steel'],
        recommendedPokemon: ['Absol', 'Ditto', 'Weavile', 'Corsola', 'Ferrothorn', 'Ampharos', 'Noivern', 'Honchkrow'],
        strategies: ['Control & Burst', 'Slow & Stun', 'High Ground Sniping'],
        playstyle: 'Control/Burst Hybrid',
        tips: [
            '左上の山にアブソルを配置して早期ロックオンと蓄積ダメージを狙いましょう。',
            'メタモンでアブソルをコピーして、蓄積ダメージ出力を2倍にします。',
            'サニーゴは全体スロウを提供し、ライコウの高速度に対抗します。',
            'サニーゴとナットレイのスロウを重ねて、最大限のコントロールを実現しましょう。',
            'デンリュウはライコウをスタンさせ、DPSユニットが自由に攻撃できる隙を作ります。',
            'マニューラが高いクリティカル率で最終的なバーストダメージを叩き出します。'
        ],
        teamComposition: {
            early: ['Noivern', 'Corsola'],
            mid: ['Absol', 'Ditto', 'Weavile', 'Honchkrow'],
            late: ['Absol', 'Ditto', 'Corsola', 'Ferrothorn', 'Ampharos', 'Weavile', 'Noivern', 'Honchkrow']
        },
        terrainAnalysis: {
            roads: [
                { description: '複数の枝分かれがある十字路レイアウト', length: 'Very Long', chokepoints: 3 },
                { description: '出現地点から中央の交差点までの道', length: 'Medium', chokepoints: 1 },
                { description: '出口への収束ルート', length: 'Medium', chokepoints: 1 }
            ],
            water: [],
            mountains: [
                { description: '高台 (左上) - 遠距離スナイパーに最適な巨大山岳エリア', height: 'Very High', strategicValue: 'Very High', benefits: ['射程ボーナス +40%', '出現地点と十字路をカバー可能', 'アブソルやオンバーンに最適'] },
                { description: 'ルート沿いの岩場', height: 'Medium', strategicValue: 'High', benefits: ['射程ボーナス +20%'] }
            ],
            grass: [
                { description: '十字路周辺の草地フィールド', coverage: 'Medium', benefits: ['くさタイプポケモンのパワーボーナス'] }
            ],
            chokepoints: [
                { location: '十字路 (中央)', description: '敵が分散する中央交差点 - 最も重要なエリア', priority: 'Very High' },
                { location: '出現地点 (上部中央)', description: '敵が出現し下降してくる場所', priority: 'Very High' },
                { location: '出口 (右下)', description: 'すべての道が収束する場所 - 最終防衛線', priority: 'High' },
                { location: '高台 (左上)', description: '遠距離ユニット用の山岳エリア', priority: 'Very High' }
            ]
        },
        seo: {
            title: 'ポケパスTD ルート2-1攻略ガイド：ライコウを撃破するための究極戦略',
            description: "ルート2-1のライコウに勝てませんか？マップレイアウト、Lv.100の最強チーム編成、高速で移動するでんきタイプのボスを止めるための正確な配置を解説します。",
            keywords: 'pokepathtd route 2-1, beat raikou pokepathtd, route 2-1 guide, pokepathtd raikou boss, best team route 2-1'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>ルート2-1は、ポケパスTDの第2リージョンの始まりを告げる場所です。草が生い茂る見た目はルート1を彷彿とさせますが、難易度は格段に上がっています。</p>
              <p>マップは、敵が複数のルートを通るトリッキーな「十字路レイアウト」を採用しており、伝説の聖獣ライコウとのバトルで幕を閉じます。ライコウは驚異的な移動速度で知られ、致命的なダメージを与える前に防衛線をすり抜けてしまうことで有名です。</p>
              <p>このガイドでは、マップを分析し、ライコウの弱点を分解し、勝利を確実にするための正確な10ユニットのチーム編成を提供します。</p>
              
              <h3>🗺️ マップ分析：十字路の罠</h3>
              <p>ルート2-1の地形を理解することは、戦いの半分を制したも同然です。</p>
              <ul>
                <li><strong>出現地点 (上部中央):</strong> 敵は上から出現し、中央の交差点へと向かいます。</li>
                <li><strong>十字路 (中央):</strong> ここが最も重要なエリアです。敵はこのゾーンで分岐したり蛇行したりします。効果を上げるには、タワーでこの交差点を必ずカバーしなければなりません。</li>
                <li><strong>高台 (左上):</strong> 左側に大きな山岳エリアがあります。ここはアブソルやオンバーンのような遠距離ユニットが、敵の出現直後を狙い撃つのに最適な場所です。</li>
                <li><strong>出口 (右下):</strong> すべての道は最終的にここに収束します。ここがあなたの「最終防衛線」です。</li>
              </ul>
      
              <img src="/images/map-route/2-1-01.png" alt="Route 2-1 Map" class="route-map">
              
              <h3>⚡ ボスプロファイル：ライコウ (ウェーブ 100)</h3>
              <ul>
                <li><strong>名前:</strong> ライコウ</li>
                <li><strong>タイプ:</strong> でんき</li>
                <li><strong>ステータス:</strong> 高HP、超高速 (1.2)。</li>
                <li><strong>能力:</strong> 他のボスと異なり、ライコウは単に硬いだけでなく「速い」です。スロウやスタン効果がない場合、数秒でマップを駆け抜けられてしまいます。</li>
                <li><strong>弱点:</strong> 物理的なバーストダメージとクラウドコントロールに弱いです。</li>
              </ul>
      
              <img src="/images/map-route/2-1-03.png" alt="Route 2-1 Map" class="route-map">
              
              <h3>🏆 最強チーム編成 (レベル100メタ)</h3>
              <p>「コントロール＆バースト」のハイブリッドチームを推奨します。ライコウは速いため、まずは速度を落とし（コントロール）、その後にクリティカル攻撃（バースト）を叩き込む必要があります。</p>
              
              <h4>1. 山のスナイパー (左側面)</h4>
              <ul>
                <li><strong>アブソル (レベル100):</strong>
                  <ul>
                    <li><strong>配置:</strong> 左上の山。</li>
                    <li><strong>理由:</strong> アブソルのパッシブは、連続ヒットごとにダメージが増加します。出現地点近くの高台に配置することで、ライコウを早い段階でロックオンし、即座にダメージ蓄積を開始できます。</li>
                  </ul>
                </li>
                <li><strong>メタモン (アブソルをコピー):</strong>
                  <ul>
                    <li><strong>配置:</strong> アブソルの隣。</li>
                    <li><strong>理由:</strong> アブソル2体は1体より強力です。これにより、蓄積ダメージの出力が倍増します。</li>
                  </ul>
                </li>
                <li><strong>ツボツボ / ドンカラス:</strong>
                  <ul>
                    <li><strong>配置:</strong> 左側。</li>
                    <li><strong>理由:</strong> ドンカラスは序盤ウェーブの透明な敵に対する視界を提供し、ゴーストタイプなどの抜け出しを防ぎます。</li>
                  </ul>
                </li>
              </ul>
              
              <h4>2. 「流砂」ゾーン (中央)</h4>
              <p>ここが勝負の分かれ目です。高速な十字路を、ライコウにとってのスローモーションの悪夢に変える必要があります。</p>
              <ul>
                <li><strong>サニーゴ:</strong>
                  <ul>
                    <li><strong>配置:</strong> 中央フィールド。</li>
                    <li><strong>理由:</strong> レベル100では、サニーゴは巨大な射程300を持ちます。そのリング攻撃は全体スロウを付与し、ライコウの高い移動速度を打ち消します。</li>
                  </ul>
                </li>
                <li><strong>ナットレイ:</strong>
                  <ul>
                    <li><strong>配置:</strong> ルートの交差点付近。</li>
                    <li><strong>理由:</strong> ナットレイの攻撃は二次的なスロウ効果を付与します。これをサニーゴと重ねることで、ライコウを這いつくばらせます。</li>
                  </ul>
                </li>
                <li><strong>デンリュウ:</strong>
                  <ul>
                    <li><strong>配置:</strong> 左下 / 中央。</li>
                    <li><strong>理由:</strong> ハードスタン。デンリュウはターゲットを「まひ」させるチャンスがあります。マップ中央で運良くスタンが決まれば、アブソルやマニューラが一方的に攻撃できます。</li>
                  </ul>
                </li>
              </ul>
              
              <h4>3. 処刑部隊 (右側面)</h4>
              <p>もしライコウがスロウゾーンを生き延びた場合、右側のキルゾーンに入ります。</p>
              <ul>
                <li><strong>マニューラ:</strong>
                  <ul>
                    <li><strong>配置:</strong> 中央右。</li>
                    <li><strong>理由:</strong> マニューラはDPSの王様です。クリティカル率65%と2倍のクリティカルダメージにより、ライコウの残りHPを数秒で削り取ることができます。</li>
                  </ul>
                </li>
                <li><strong>オンバーン:</strong>
                  <ul>
                    <li><strong>配置:</strong> 右側。</li>
                    <li><strong>理由:</strong> ボスに随伴する雑魚敵を一掃するための優れた範囲攻撃を提供します。</li>
                  </ul>
                </li>
              </ul>
      
              <img src="/images/map-route/2-1-02.png" alt="Route 2-1 Map" class="route-map">
              
              <h3>📝 ステップバイステップ勝利ガイド</h3>
              <h4>フェーズ 1: 序盤 (ウェーブ 1-50)</h4>
              <p>まずはオンバーンとサニーゴを配置することに集中しましょう。彼らの範囲ダメージで、弱い敵の群れを簡単に一掃できます。</p>
              <p>透明な敵が出現するウェーブ40までに、ドンカラスを配置してください。</p>
              
              <h4>フェーズ 2: 中盤 (ウェーブ 51-99)</h4>
              <p>ボス用アタッカーを構築します。アブソル、メタモン、マニューラを配備しましょう。</p>
              <p>可能な限りアップグレードします。レベル100が理想ですが、レベル50以上でも機能します。</p>
              
              <h4>フェーズ 3: ボス戦 (ウェーブ 100)</h4>
              <ul>
                <li><strong>ライコウ出現:</strong> 非常に速く動きます。パニックにならないでください。</li>
                <li><strong>ロックオン:</strong> 山の上のアブソルコンビが攻撃を開始します。HPバーが赤く削れていくのを確認しましょう。</li>
                <li><strong>スロウ:</strong> 中央に到達すると、サニーゴとナットレイが彼の速度を落とします。</li>
                <li><strong>撃破:</strong> たとえ中央を抜けても、右側でマニューラが待ち構えてトドメを刺します。</li>
              </ul>
              
              <h3>❓ よくある質問</h3>
              <p><strong>Q: ライコウに対して「じめん」タイプを使ってもいいですか？</strong></p>
              <p>A: はい！でんきタイプに対してじめんタイプは効果抜群なため、ドリュウズやフライゴンは優れた選択肢です。ただし、我々のアブソル/マニューラ戦略は「純粋な無属性DPS」に依存しており、高レベルであればより安定した結果が得られます。</p>
              
              <p><strong>Q: レベル100のメタモンを持っていない場合は？</strong></p>
              <p>A: バンギラスやガブリアス（入手可能な場合）などの他の高DPSユニット、あるいは2体目のアブソルを配置してください。メタモンは最強ユニットを複製するための最も効率的な手段に過ぎません。</p>
              
              <h3>🗺️ 地形分析</h3>
              <p>ルート2-1は、敵が複数の道を通るトリッキーな十字路レイアウトが特徴で、戦略的な挑戦と機会を提供します。</p>
              
              <h4>道路とルート</h4>
              <ul>
                <li><strong>十字路レイアウト：</strong> 複数の分岐路があるレイアウト (Very Long, チョークポイント3箇所)</li>
                <li><strong>出現ルート：</strong> 出現地点から中央交差点までの道 (Medium, チョークポイント1箇所)</li>
                <li><strong>出口ルート：</strong> 出口へ収束する道 (Medium, チョークポイント1箇所)</li>
              </ul>
              
              <h4>山と高台</h4>
              <ul>
                <li><strong>高台 (左上)：</strong> 遠距離スナイパーに最適な巨大山岳エリア (戦略的価値：極めて高い) - 射程ボーナス +40%、出現地点と十字路をカバー可能、アブソルやオンバーンに最適</li>
                <li><strong>岩場：</strong> ルート沿いの岩石エリア (戦略的価値：高) - 射程ボーナス +20%</li>
              </ul>
              
              <h4>草地と植生</h4>
              <ul>
                <li><strong>草地フィールド：</strong> 十字路周辺のエリア (カバー率：中) - くさタイプポケモンのパワーボーナス</li>
              </ul>
              
              <h4>戦略的チョークポイント</h4>
              <ul>
                <li><strong>十字路 (中央)：</strong> 敵が分散する中央交差点 - 最も重要なエリア (優先度：極めて高い)</li>
                <li><strong>出現地点 (上部中央)：</strong> 敵が出現し下降してくる場所 (優先度：極めて高い)</li>
                <li><strong>出口 (右下)：</strong> すべての道が収束する場所 - 最終防衛線 (優先度：高)</li>
                <li><strong>高台 (左上)：</strong> 遠距離ユニット用の山岳エリア (優先度：極めて高い)</li>
              </ul>
              
              <h3>⚔️ チーム編成</h3>
              <h4>序盤 (ウェーブ 1-50)</h4>
              <p>まずは範囲攻撃のためにオンバーンとサニーゴの配置に集中します。ウェーブ40の透明な敵に備えてドンカラスを配置しましょう。</p>
              
              <h4>中盤 (ウェーブ 51-99)</h4>
              <p>ボス用アタッカーを構築：アブソル、メタモン、マニューラを配備。可能な限りアップグレードします（レベル100が理想）。</p>
              
              <h4>終盤 (ウェーブ 100)</h4>
              <p>「コントロール＆バースト」チームを完成させる：山のスナイパー（アブソル＆メタモン）、コントロールゾーン（サニーゴ、ナットレイ、デンリュウ）、処刑部隊（マニューラ、オンバーン）、透明対策（ドンカラス）。</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-2-2-entei',
        routeNumber: '2-2',
        name: 'ポケパスTD ルート2-2攻略ガイド：エンテイを倒す方法（アーマーブレイク戦略）',
        mapImage: '/images/map-route/2-2.png',
        stars: 100,
        starsSecondary: 0,
        difficulty: 'Medium',
        difficultyLevel: 2,
        terrain: ['Field', 'Water', 'Grass'],
        description: 'ルート2-2では、ゲーム内で最も過酷なギミックの一つである「極限アーマー」が登場します。最終ボスのエンテイは、ウェーブ100で驚異の23,500アーマーを纏って出現します。このルートは中央の湖をU字型の通路が囲んでおり、ダメージ蓄積戦略に最適な地形となっています。',
        totalWaves: 100,
        recommendedTypes: ['Water', 'Grass'],
        recommendedPokemon: ['Samurott', 'Corsola', 'Sunflora', 'Whiscash', 'Lapras'],
        strategies: ['Scaling Damage', 'Armor Breaking', 'Terrain Synergy'],
        playstyle: 'Scaling/Ramping',
        tips: [
            'ダイケンキ（Samurott）のパッシブは連続ヒットでダメージが上昇します。高アーマーのボスに最適です。',
            '中央の湖にみずタイプユニットを配置し、攻撃時間を最大限に確保しましょう。',
            'サニーゴ（Corsola）は全体スロウを提供し、エンテイを射程内に留めます。',
            'アーマーの閾値を突破するために、キマワリ（Sunflora）のダメージバフが不可欠です。',
            'エンテイの移動速度は遅い（0.8）ため、ダメージを蓄積させる時間は十分にあります。'
        ],
        teamComposition: {
            early: ['Maractus', 'Honchkrow'],
            mid: ['Whiscash', 'Lapras', 'Corsola'],
            late: ['Samurott', 'Corsola', 'Sunflora', 'Whiscash', 'Lapras']
        },
        terrainAnalysis: {
            roads: [
                { description: '中央の湖を囲むU字型の通路', length: 'Very Long', chokepoints: 3 },
                { description: '水域の周囲を回る道', length: 'Long', chokepoints: 2 }
            ],
            water: [
                { description: '中央の湖 - 最も価値のある配置場所', type: 'Lake', strategicValue: 'Very High', benefits: ['みずタイプポケモンのパワーが2倍ボーナス', '敵への攻撃稼働率がほぼ100%'] },
                { description: 'ルートを囲む水域', type: 'Lake', strategicValue: 'High', benefits: ['みずタイプポケモンのパワーボーナス'] }
            ],
            mountains: [
                { description: '湖を見下ろす山頂', type: 'Peak', strategicValue: 'High', benefits: ['射程ボーナス +30%', '湖エリア全体をカバー可能'] }
            ],
            grass: [
                { description: '湖の周囲の草地エリア', coverage: 'Medium', benefits: ['くさタイプポケモンのパワーボーナス'] }
            ],
            chokepoints: [
                { location: '中央湖ループ', description: '中央の湖を囲むU字型の道 - ダメージ蓄積に最適', priority: 'Very High' },
                { location: '湖の入口', description: '敵が湖エリアに進入する場所', priority: 'High' },
                { location: 'ルート合流点', description: '湖の近くで複数の道が交差する場所', priority: 'High' }
            ]
        },
        seo: {
            title: 'ポケパスTD ルート2-2攻略ガイド：エンテイを倒す方法（アーマーブレイク戦略）',
            description: 'エンテイで詰まっていますか？ルート2-2を攻略するための「アーマーブレイク」戦略を学びましょう。アーマーの仕組みを解説し、エンテイを倒すためのチーム編成を公開。',
            keywords: 'pokepathtd route 2-2, beat entei pokepathtd, route 2-2 guide, pokepathtd entei boss, best team route 2-2'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>ルート2-2では、ゲーム内で最も過酷なギミックの一つである「極限アーマー」が登場します。最終ボスのエンテイは、ウェーブ100で23,500という驚異的なアーマー値を持って現れます。</p>
              <p>多くのプレイヤーにとって、これは大きな壁となります。強力なタワーを置いても、ヒットごとに「1ダメージ」や「0ダメージ」しか与えられないことがあるからです。このガイドでは、アーマーの仕組みを解説し、エンテイを撃破するための正確なチーム編成を紹介します。</p>
              
              <h3>🛡️ 仕組みを理解する：アーマー vs パワー</h3>
              <p>エンテイを倒すには、ダメージ計算の仕組みを知る必要があります。</p>
              <ul>
                <li><strong>ルール:</strong> ユニットのパワー ＜ 敵のアーマー の場合、ダメージは大幅に軽減されます（多くの場合「1」になります）。</li>
                <li><strong>問題点:</strong> 多くの高速攻撃タワー（マニューラやマラカッチなど）は、一撃のパワーではなく攻撃速度に依存しています。これではエンテイに掠り傷も負わせられません。</li>
                <li><strong>解決策:</strong> 単発パワーが高いタワー、または「ダメージ蓄積（スケーリング）」の仕組みを持つタワーが必要です。</li>
              </ul>
      
              <img src="/images/map-route/2-2-03.png" alt="Route 2-2 Map" class="route-map">
              
              <h3>🗺️ マップ戦略：「デ死のループ」</h3>
              <p>ルート2-2は、中央の湖をU字型の通路が囲む地形が特徴です。</p>
              <ul>
                <li><strong>中央の湖:</strong> ここはマップ上で最も価値のある配置場所です。ここに置かれたユニットは、敵がループを回る間、ほぼ常に攻撃を続けられます。</li>
                <li><strong>戦略的利点:</strong> エンテイの移動速度は遅い（0.8）ため、この湖の周囲を歩くのに長い時間を要します。これは「蓄積ダメージ」戦略にとって完璧なセットアップです。</li>
              </ul>
              
              <h3>🏆 最強チーム：「蓄積型みずタイプ部隊」</h3>
              <p>マップの水地形を活用してみずタイプを強化します。彼らは本来、高いダメージを出すのが得意です。</p>
      
              <img src="/images/map-route/2-2-02.png" alt="Route 2-2 Map" class="route-map">
              
              <h4>1. ボスキラー：ダイケンキ (レベル 100)</h4>
              <ul>
                <li><strong>役割:</strong> メインDPS / アーマーブレイカー。</li>
                <li><strong>秘訣:</strong> ダイケンキのパッシブ能力は、同じターゲットに連続でヒットするたびにダメージが増加します。</li>
                <li><strong>有効な理由:</strong> エンテイは高いHPとアーマーを持っていますが、ダイケンキのパッシブが10回、20回、30回と重なるまで耐えてしまいます。最終的にダイケンキのダメージは23,500を超え、アーマーを完全に無視し始めます。</li>
              </ul>
              
              <h4>2. コントローラー：サニーゴ</h4>
              <ul>
                <li><strong>役割:</strong> 全体スロウ。</li>
                <li><strong>有効な理由:</strong> サニーゴにダメージは期待しません。役割はエンテイをダイケンキの射程に留めることです。レベル100のサニーゴは湖のループ全体をカバーし、エンテイを永続的にスロウ状態にします。</li>
              </ul>
              
              <h4>3. バッファー：キマワリ</h4>
              <ul>
                <li><strong>役割:</strong> ダメージ増幅。</li>
                <li><strong>有効な理由:</strong> キマワリは周囲のユニットのダメージを+20%します。23,500という特定のアーマー閾値を突破しようとしている時、この20%の差は数学的に巨大です。ダメージが「0」か「5,000」かの分かれ目になり得ます。</li>
              </ul>
              
              <h4>4. その他の選択肢（ダイケンキがいない場合）</h4>
              <ul>
                <li><strong>ブロスター:</strong> ゲーム内最高クラスの基礎パワー（1950+）を持ちます。クリティカルヒットでダメージが倍増するため、自然にアーマーを貫通できます。</li>
                <li><strong>ドリュウズ:</strong> パッシブによりアーマーに対して2倍のダメージを与えます。これはエンテイの防御ステータスを実質半分にするのと同じ効果です。</li>
                <li><strong>どく/やけど:</strong> マタドガスなどの「どく」状態は、アーマーを完全に無視して割合ダメージを与えます。</li>
              </ul>
              
              <h3>📝 勝利へのステップ</h3>
              <ol>
                <li><strong>配置:</strong> 中央の湖を最強のみずタイプユニット（ダイケンキ、ナマズン、ラプラス）で埋めます。</li>
                <li><strong>バフ:</strong> ダイケンキの近くの岸辺にキマワリを配置し、ダメージオーラを提供します。</li>
                <li><strong>戦闘:</strong>
                  <ul>
                    <li>エンテイが出現。山の上のドンカラスとマラカッチで雑魚敵を処理します。</li>
                    <li>エンテイがループに進入。サニーゴが速度を落とします。</li>
                    <li>ダイケンキが攻撃を開始。最初の数発は低ダメージかもしれませんが、パッシブが重なるにつれて赤いダメージ数字が大きくなっていくのを確認してください。</li>
                    <li>エンテイがループを一周する頃には、倒されているはずです。</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ 地形分析</h3>
              <p>ルート2-2は、中央の湖を囲むU字型の通路が、ダメージ蓄積戦略のための完璧な「死のループ」を作り出しています。</p>
              
              <h4>道路とルート</h4>
              <ul>
                <li><strong>U字型通路：</strong> 中央湖を囲む道 (Very Long, チョークポイント3箇所)</li>
                <li><strong>湖畔ルート：</strong> 水域の周囲を回る道 (Long, チョークポイント2箇所)</li>
              </ul>
              
              <h4>水域</h4>
              <ul>
                <li><strong>中央の湖：</strong> 最も価値のある配置エリア (戦略的価値：極めて高い) - みずタイプポケモンのパワーが2倍、敵への攻撃稼働率がほぼ100%</li>
                <li><strong>周囲の水域：</strong> 通路を囲む水 (戦略的価値：高) - みずタイプポケモンのパワーボーナス</li>
              </ul>
              
              <h4>山と高台</h4>
              <ul>
                <li><strong>山頂：</strong> 湖を見下ろす高い位置 (戦略的価値：高) - 射程ボーナス +30%、湖エリア全体をカバー可能</li>
              </ul>
              
              <h4>草地と植生</h4>
              <ul>
                <li><strong>草地エリア：</strong> 湖の周囲の草地 (カバー率：中) - くさタイプポケモンのパワーボーナス</li>
              </ul>
              
              <h4>戦略的チョークポイント</h4>
              <ul>
                <li><strong>中央湖ループ：</strong> 中央湖を囲むU字型の道 - ダメージ蓄積に最適 (優先度：極めて高い)</li>
                <li><strong>湖の入口：</strong> 敵が湖エリアに進入する場所 (優先度：高)</li>
                <li><strong>ルート合流点：</strong> 湖の近くで複数の道が交差する場所 (優先度：高)</li>
              </ul>
              
              <h3>⚔️ チーム編成</h3>
              <h4>序盤 (ウェーブ 1-40)</h4>
              <p>雑魚処理用にマラカッチを配備し、透明対策として山の高い位置にドンカラスを配置します。</p>
              
              <h4>中盤 (ウェーブ 41-99)</h4>
              <p>ナマズン、ラプラス、サニーゴなどのみずタイプユニットに移行します。蓄積ダメージの核となる体制を整え始めましょう。</p>
              
              <h4>終盤 (ウェーブ 100)</h4>
              <p>「蓄積型みずタイプ部隊」を完成させる：ダイケンキ（ボスキラー）、サニーゴ（コントロール）、キマワリ（バフ）、ナマズン＆ラプラス（サブDPS）。すべてのみずタイプを稼働率最大の中央湖に配置します。</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-2-3-suicune-wave-100',
        routeNumber: '2-3',
        name: 'ポケパスTD ルート2-3 究極ガイド：アブソルでスイクンを倒す方法',
        mapImage: '/images/map-route/2-3.png',
        stars: 500,
        starsSecondary: 0,
        difficulty: 'Hard',
        difficultyLevel: 3,
        terrain: ['Field', 'Mountain'],
        description: '複雑な道が入り組む難関の山岳ルートです。最終ボスのスイクンはその極限の速さゆえ、アブソルを用いた特殊なダメージ蓄積戦略が必要となります。',
        totalWaves: 100,
        recommendedTypes: ['Dark', 'Grass', 'Flying', 'Electric'],
        recommendedPokemon: ['Absol', 'Ditto', 'Corsola', 'Maractus', 'Sunflora', 'Staraptor', 'Hawlucha', 'Honchkrow'],
        strategies: ['Absol Swap', 'Scaling Damage', 'Speed Control'],
        playstyle: 'Tactical',
        tips: [
            '入れ替え戦略の活用：ウェーブ1-99は範囲攻撃チームで凌ぎ、スイクン戦でアブソルチームに切り替えます。',
            'ウェーブ100ではアブソルが不可欠。連続ヒットでダメージが指数関数的に増加します。',
            'スイクンへの攻撃時間を最大化するため、アブソルは最も中央の位置に配置しましょう。',
            'メタモン（Ditto）でアブソルをコピーし、蓄積ダメージを2倍にします。',
            'サニーゴは極めて重要なスロウ（射程300）を提供し、スイクンの速度1.5を0.8まで落とします。',
            'ウェーブ100で一時停止して入れ替えを実行。キマワリを売り、アブソルを買い、メタモンを設定します。'
        ],
        teamComposition: {
            early: ['Maractus', 'Honchkrow'],
            mid: ['Maractus', 'Sunflora', 'Staraptor', 'Hawlucha', 'Corsola', 'Ditto'],
            late: ['Absol', 'Ditto', 'Corsola']
        },
        terrainAnalysis: {
            roads: [
                { description: '複数の分岐を持つ複雑な山道', length: 'Very Long', chokepoints: 5 },
                { description: '地下トンネル通路', length: 'Medium', chokepoints: 1 }
            ],
            water: [],
            mountains: [
                { description: '複数の高度レベルを持つそびえ立つ峰', height: 'Very High', strategicValue: 'Very High', benefits: ['射程ボーナス +50%', '通路の全区間をカバー可能'] },
                { description: '岩だらけの崖と尾根', height: 'High', strategicValue: 'High', benefits: ['射程ボーナス +30%'] },
                { description: '山の高原地帯', height: 'Medium', strategicValue: 'Medium', benefits: ['射程ボーナス +15%'] }
            ],
            grass: [],
            chokepoints: [
                { location: '山頂', description: 'パノラマビューを持つ最高地点', priority: 'Very High' },
                { location: 'ルート交差点', description: '複数の道が合流する場所', priority: 'Very High' },
                { location: 'Z字ターン・チョークポイント', description: 'スイクンが最も無防備になる、中段と下段の通路の間の曲がり角', priority: 'Very High' },
                { location: 'トンネル入口', description: '狭いトンネルの入口', priority: 'High' },
                { location: '崖っぷちの急カーブ', description: '崖に沿った鋭い曲がり角', priority: 'High' }
            ]
        },
        seo: {
            title: 'ポケパスTD ルート2-3 究極ガイド：アブソルでスイクンを倒す方法',
            description: 'ルート2-3にはゲーム内最速のボス、スイクンが登場します。Lv.100の詳細な戦略、「アブソル・スワップ」戦術、Z字型レイアウトの制御方法を解説。',
            keywords: 'pokepathtd route 2-3, beat suicune pokepathtd, absol strategy, route 2-3 guide, best team route 2-3'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>第2リージョン最後の挑戦へようこそ。ルート2-3は欺瞞に満ちたマップです。一見シンプルな曲がりくねった道に見えますが、最終ボスのスイクンは数多くの挑戦者を葬ってきたスピードの魔物です。</p>
              <p>このガイドでは、マップ独自の地形を分析し、スイクンのステータスを分解、そして勝利を確実にする「アブソル・スワップ戦略」をステップバイステップで解説します。</p>
              
              <h3>📊 ボスプロファイル：スイクン (ウェーブ 100)</h3>
              <p>チームを組む前に、敵を知る必要があります。</p>
              <ul>
                <li><strong>名前:</strong> スイクン（オーロラポケモン）</li>
                <li><strong>タイプ:</strong> みず</li>
                <li><strong>移動速度:</strong> 1.5（極めて高速）。これは現時点で遭遇する最高値です。</li>
                <li><strong>HP:</strong> 69,000</li>
                <li><strong>アーマー:</strong> 0</li>
                <li><strong>脅威:</strong> スイクンは非常に速いため、「高ダメージ・低攻撃速度」のタワー（ラムパルドなど）は、攻撃が完全に外れるか、せいぜい1発撃てるかどうかです。</li>
              </ul>
      
              <img src="/images/map-route/2-3-03.png" alt="Route 2-3 Map" class="route-map">
              
              <h3>🗺️ マップ戦略：「Z字ターン」の罠</h3>
              <p>ルート2-3は、岩場を縫うように走るZ字型の通路が特徴です。</p>
              <ul>
                <li><strong>高台（外周）:</strong> マップは山のタイルに囲まれています。これはドンカラス、オンバーン、ネイティオのようなひこうタイプにとって理想的で、広域の視界とダメージを提供できます。</li>
                <li><strong>中央プラットフォーム（草地）:</strong> ここが防衛の要です。中央の草地に配置されたユニットは、上段の道（W1-50）、中段の曲がり角、下段の道（W51-100）すべてに攻撃を当てることができます。</li>
                <li><strong>チョークポイント:</strong> 中段と下段の間のターンこそが、スイクンが最も隙を見せる場所です。</li>
              </ul>
              
              <h3>🏆 最強チーム：「アブソル・スワップ」</h3>
              <p>この戦略では、ウェーブ1-99までは標準的な範囲攻撃チームを使い、ウェーブ100で戦術的な入れ替えを行います。</p>
              
              <h4>フェーズ 1: 雑魚処理チーム (ウェーブ 1-99)</h4>
              <p>レベルの大部分において、群がる敵を倒すための範囲攻撃（AOE）ダメージが必要です。</p>
              <ul>
                <li><strong>キマワリ (中央):</strong> 中央にいる全員にダメージ+20%のオーラを提供します。</li>
                <li><strong>マラカッチ (中央草地):</strong> メインの雑魚処理担当。くさタイプの攻撃は、このルートに多いみずタイプに効果抜群です。</li>
                <li><strong>ムクホーク / ルチャブル:</strong> 撃ち漏らしを処理するための優秀な物理アタッカーです。</li>
              </ul>
              
              <h4>フェーズ 2: ボスキラーチーム (ウェーブ 100)</h4>
              <p>スイクンが現れたら、範囲攻撃は無用です。集中した、スケーリング（蓄積型）の単体ダメージが必要です。</p>
              
              <h4>アブソル (レベル 100)</h4>
              <ul>
                <li><strong>仕組み:</strong> アブソルのパッシブ能力は「同じターゲットへの連続ヒットでダメージが増加する」です。</li>
                <li><strong>スイクン対策になる理由:</strong> スイクンはアーマーが「0」です。つまり、アブソルのダメージが軽減されません。アブソルが攻撃を当て続けるにつれ、ダメージは 200 -> 400 -> 800 -> 1600 と指数関数的に跳ね上がります。</li>
              </ul>
              
              <h4>メタモン (アブソルをコピー)</h4>
              <ul>
                <li><strong>戦略:</strong> アブソルの隣にメタモンを配置します。これでダメージを蓄積させるユニットが2体になり、スイクンを2倍の速さで溶かします。</li>
              </ul>
              
              <h4>フェーズ 3: 速度制御</h4>
              <p>ターゲットに逃げられてはダメージの意味がありません。</p>
              <ul>
                <li><strong>サニーゴ (レベル 100):</strong>
                  <ul>
                    <li><strong>理由:</strong> 射程300を持つサニーゴのスロウオーラはZ字ターン全体をカバーします。スイクンの速度1.5を約0.8まで落とし、アブソルが攻撃できる時間を実質2倍にします。</li>
                  </ul>
                </li>
              </ul>
      
              <img src="/images/map-route/2-3-02.png" alt="Route 2-3 Map" class="route-map">
              
              <h3>📝 詳細ウォークスルー</h3>
              
              <h4>序盤 (ウェーブ 1-40)</h4>
              <ul>
                <li>中央の草地にマラカッチを配置。</li>
                <li>透明ユニット対策として、左上の山にドンカラスを配置。</li>
                <li>スロウのサポート用にサニーゴを育成し始めます。</li>
              </ul>
              
              <h4>中盤 (ウェーブ 41-99)</h4>
              <ul>
                <li>マラカッチを強化するためにキマワリを追加。</li>
                <li>追加のDPSとしてムクホークやルチャブルを追加。</li>
                <li>メタモンのレベルを上げ、準備を整えておきます。</li>
              </ul>
              
              <h4>ボス戦 (ウェーブ 100)</h4>
              <ol>
                <li>ウェーブ100の警告が出たら、すぐにゲームを<strong>一時停止（PAUSE）</strong>します。</li>
                <li>キマワリを<strong>売却（SELL）</strong>します。スロットとお金が必要です。</li>
                <li>アブソルを<strong>購入（BUY）</strong>します。できるだけ中央寄りの位置に配置してください。</li>
                <li>メタモンを<strong>設定（CONFIGURE）</strong>します。必ずアブソルに変身させてください。</li>
                <li>一時停止を<strong>解除（UNPAUSE）</strong>します。</li>
                <li>スイクンがマップに進入するのを確認。</li>
                <li>サニーゴが即座にスロウをかけます。</li>
                <li>2体のアブソルがロックオン。最初は小さなダメージですが、スイクンが最初の角を曲がる頃にはダメージ数字が巨大化していきます。</li>
                <li><strong>勝利！</strong></li>
              </ol>
      
              <img src="/images/map-route/2-3-01.png" alt="Route 2-3 Map" class="route-map">
              
              <h3>❓ 代替戦略</h3>
              <p><strong>「まだアブソルを持っていません。代わりに何を使えばいいですか？」</strong></p>
              <p>アブソルがいない場合は、以下を試してください：</p>
              <ul>
                <li><strong>でんきタイプ:</strong> ライボルトやデンリュウを使用。でんきはみず（スイクン）に効果抜群です。レベル100のライボルトは莫大なダメージを与えます。</li>
                <li><strong>くさタイプバースト:</strong> キマワリを維持し、マラカッチを複数並べるかジュカインを使用します。くさタイプも効果抜群です。</li>
                <li><strong>スタンロック:</strong> デンリュウやラプラスを使ってスイクンを永続的にスタンさせ、動けなくする戦略です。</li>
              </ul>
              
              <h3>🗺️ 地形分析</h3>
              <p>ルート2-3は、戦略的な高台ポジションを備えた岩場を縫うZ字型の通路が特徴です。</p>
              
              <h4>道路とルート</h4>
              <ul>
                <li><strong>メインパス：</strong> 複数の分岐を持つ複雑な山道 (Very Long, チョークポイント5箇所)</li>
                <li><strong>地下道：</strong> 地下トンネル通路 (Medium, チョークポイント1箇所)</li>
              </ul>
              
              <h4>山と高台</h4>
              <ul>
                <li><strong>そびえ立つ峰：</strong> 複数の高度レベルを持つ高台 (戦略的価値：極めて高い) - 射程ボーナス +50%、通路の全区間をカバー可能</li>
                <li><strong>岩だらけの崖：</strong> 崖と尾根 (戦略的価値：高) - 射程ボーナス +30%</li>
                <li><strong>山の高原：</strong> 比較的なだらかな高台 (戦略的価値：中) - 射程ボーナス +15%</li>
              </ul>
              
              <h4>戦略的チョークポイント</h4>
              <ul>
                <li><strong>山頂：</strong> パノラマビューを持つ最高地点 (優先度：極めて高い)</li>
                <li><strong>ルート交差点：</strong> 複数の道が合流する場所 (優先度：極めて高い)</li>
                <li><strong>Z字ターン：</strong> スイクンが最も無防備になる、中段と下段の通路の間の曲がり角 (優先度：極めて高い)</li>
                <li><strong>トンネル入口：</strong> 狭いトンネルの入口 (優先度：高)</li>
                <li><strong>崖っぷちの急カーブ：</strong> 崖に沿った鋭い曲がり角 (優先度：高)</li>
              </ul>
              
              <h3>⚔️ チーム編成</h3>
              <h4>序盤 (ウェーブ 1-40)</h4>
              <p>中央の草地にマラカッチを、透明対策として山にドンカラスを配備します。</p>
              
              <h4>中盤 (ウェーブ 41-99)</h4>
              <p>ダメージバフ用にキマワリ、DPS用にムクホーク/ルチャブルを追加し、ボス戦に向けてサニーゴとメタモンを育成します。</p>
              
              <h4>終盤 (ウェーブ 100)</h4>
              <p>アブソルチームへスワップ：アブソル（蓄積ダメージの核）、メタモン（アブソルをコピー）、サニーゴ（速度制御）。空きを作るためにキマワリを売却します。</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-3-1-regirock-wave-100-guide',
        routeNumber: '3-1',
        name: 'ポケパスTD ルート3-1攻略ガイド：レジロックを倒す方法（100万アーマー対策）',
        mapImage: '/images/map-route/3-1.png',
        stars: 200,
        starsSecondary: 0,
        difficulty: 'Hard',
        difficultyLevel: 3,
        terrain: ['Field', 'Grass'],
        description: '密な植生が特徴の上級者向けルート。最終ボスのレジロックは約100万のアーマーを持つため、特殊な「どく」戦略が必要です。',
        totalWaves: 100,
        recommendedTypes: ['Poison', 'Fire', 'Flying', 'Grass'],
        recommendedPokemon: ['Weezing', 'Arbok', 'Swalot', 'Ariados', 'Ditto', 'Maractus', 'Hawlucha', 'Staraptor', 'Honchkrow'],
        strategies: ['Toxic Swap', 'Poison Build', 'Swap Strategy'],
        playstyle: 'Tactical',
        tips: [
            '入れ替え戦略の活用：ウェーブ1-99は標準チームで凌ぎ、レジロック戦でどくタイプチームに切り替えます。',
            'どくダメージはアーマーを無視します。レジロックの985,714アーマーを突破するために不可欠です。',
            'マタドガス（Weezing）は最高のどく付与役です。稼働率を最大化するために中央に配置しましょう。',
            'メタモン（Ditto）を使用してマタドガスをコピーし、どくの霧を2倍にします。',
            'ウェーブクリア中は、透明対策として山のドンカラス（Honchkrow）を維持してください。',
            'ウェーブ100で一時停止し「トキシック・スワップ」を実行：物理アタッカーを売り、どくユニットを購入します。'
        ],
        teamComposition: {
            early: ['Maractus', 'Hawlucha', 'Staraptor'],
            mid: ['Maractus', 'Hawlucha', 'Staraptor', 'Honchkrow'],
            late: ['Weezing', 'Arbok', 'Swalot', 'Ariados', 'Ditto', 'Honchkrow']
        },
        terrainAnalysis: {
            roads: [
                { description: 'うっそうとした森の中を通る道', length: 'Long', chokepoints: 3 },
                { description: '視認性の良い開けた道', length: 'Medium', chokepoints: 1 }
            ],
            water: [],
            mountains: [],
            grass: [
                { description: 'マップ全体を覆う密林', coverage: 'Very High', benefits: ['くさタイプポケモンのパワーが2倍ボーナス', '密な植生により敵の移動速度が低下'] },
                { description: '道沿いの厚い下草', coverage: 'High', benefits: ['くさタイプポケモンのパワーボーナス'] }
            ],
            chokepoints: [
                { location: '森の広場', description: '密林の中にある開けたエリア', priority: 'Very High' },
                { location: '細道', description: '木々の間で道が狭くなっている場所', priority: 'High' }
            ]
        },
        seo: {
            title: 'ポケパスTD ルート3-1攻略ガイド：レジロックを倒す方法（100万アーマー対策）',
            description: 'レジロックには物理ダメージが通りません。マタドガスやアーボックを使ってルート3-1のボスを倒す「どく入れ替え戦略」を学びましょう。',
            keywords: 'pokepathtd route 3-1, beat regirock pokepathtd, route 3-1 guide, pokepathtd regirock boss, best team route 3-1'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>ルート3-1では、現時点でゲーム内最も過酷な「ステータス・チェック」が行われます。最終ボスのレジロックは、まさに歩く要塞です。</p>
              <p>1,000,000近いアーマーを持つレジロックに対し、マニューラやアブソルのような標準的な物理タワーで挑むのは数学的に不可能です。彼らの攻撃は文字通り弾き返されます。</p>
              <p>勝利するには、状態異常システムの仕組みを理解し、ウェーブ100でチームを完全に総入れ替えする必要があります。</p>
              
              <h3>📊 ボスプロファイル：レジロック</h3>
              <ul>
                <li><strong>名前:</strong> レジロック（いわやまポケモン）</li>
                <li><strong>タイプ:</strong> いわ</li>
                <li><strong>アーマー:</strong> 985,714（誤植ではありません）。</li>
                <li><strong>弱点:</strong> 確定ダメージ（どく / やけど）。</li>
                <li><strong>耐性:</strong> スタンとスロウに対して非常に高い耐性を持ちます。サニーゴに頼ってはいけません。</li>
              </ul>
      
              <img src="/images/map-route/3-1-03.png" alt="Route 3-1 Map" class="route-map">
              
              <h3>🏆 戦略：「トキシック・スワップ」</h3>
              <p>この戦略では、2つの異なるゲームをプレイする必要があります。</p>
              <ul>
                <li><strong>道中クリア:</strong> ウェーブ1-99を突破するための標準チーム。</li>
                <li><strong>ボス撃破:</strong> ウェーブ100専用の特殊チーム。</li>
              </ul>
              
              <h4>フェーズ 1: ウェーブ 1-99 (範囲クリア)</h4>
              <p>最初の99ウェーブは、標準的な高レベルアタッカーを使用します。</p>
              <ul>
                <li><strong>マラカッチ (中央):</strong> くさ/みずタイプを容易に処理します。</li>
                <li><strong>ルチャブル / ムクホーク:</strong> 撃ち漏らしを処理する優秀な物理ダメージ役。</li>
                <li><strong>ドンカラス:</strong> 山の上からの透明対策として不可欠。</li>
              </ul>
              
              <h4>フェーズ 2: ウェーブ 100 (どくの入れ替え)</h4>
              <p>ウェーブ100が始まった瞬間、<strong>ゲームを一時停止（PAUSE）</strong>してください。レジロックのアーマーの前では今のチームは無力です。</p>
              <ol>
                <li>物理ダメージ役（マラカッチ、ルチャブル、アブソルなど）を<strong>すべて売却</strong>します。</li>
                <li>念のためのドンカラスとメタモンは<strong>維持</strong>します。</li>
                <li>手持ちの<strong>「どくタイプ」ユニットをすべて購入</strong>します。</li>
              </ol>
              
              <h4>どくのドリームチーム</h4>
              <p>レジロックへの攻撃時間を最大化するため、以下のユニットを中央に配置します：</p>
              <ul>
                <li><strong>マタドガス:</strong> 最高のどく付与役。どくの霧を撒き散らします。</li>
                <li><strong>アーボック:</strong> 高速攻撃でどくのスタックを素早く貯めます。</li>
                <li><strong>マルノーム:</strong> 耐久力があり、安定したDOT（継続ダメージ）を与えます。</li>
                <li><strong>アリアドス:</strong> さらなるどくの層を追加します。</li>
                <li><strong>メタモン:</strong> マタドガスをコピーしてどくの霧を2倍にします。</li>
              </ul>
      
              <img src="/images/map-route/3-1-02.png" alt="Route 3-1 Map" class="route-map">
              
              <h3>🧪 なぜ有効か：「どく」の数学</h3>
              <ul>
                <li>ポケパスTDにおいて、「どく」は1チックにつき<strong>敵の最大HPの0.1%</strong>のダメージを与えます。</li>
                <li><strong>重要：</strong> どくダメージは<strong>アーマーを無視</strong>します。</li>
                <li><strong>蓄積：</strong> どくのスタックを重ねるほど、1秒あたりのダメージが増加します。</li>
                <li><strong>結果：</strong> レジロックの100万アーマーは完全にバイパスされます。彼の膨大なHPは、割合ダメージがより強く刺さるため、むしろ仇となります。</li>
              </ul>
              
              <h3>📝 ステップバイステップ・ガイド</h3>
              <ol>
                <li><strong>経済を整える：</strong> 必要であれば序盤にペルシアン/ニャースでゴールドを稼ぎますが、Lv.100のプレイヤーなら通常は不要です。</li>
                <li><strong>生存：</strong> ウェーブ99までクリアします。</li>
                <li><strong>入れ替え：</strong> ウェーブ100で「トキシック・スワップ」を実行。</li>
                <li><strong>観察：</strong> 紫色のダメージ数字が表示されます。最初は小さいですが、数秒以内にレジロックのHPが急激に削られ始めます。</li>
                <li><strong>勝利：</strong> 彼はZ字ターンを終える前に崩れ落ちるでしょう。</li>
              </ol>
              
              <h3>🗺️ 地形分析</h3>
              <p>ルート3-1はマップ全体を覆う密林が特徴で、くさタイプポケモンがウェーブ処理に非常に有効です。</p>
              
              <h4>道路とルート</h4>
              <ul>
                <li><strong>メインパス：</strong> 密林を通る道 (Long, チョークポイント3箇所)</li>
                <li><strong>広場パス：</strong> 視認性の良い開けた道 (Medium, チョークポイント1箇所)</li>
              </ul>
              
              <h4>草地と植生</h4>
              <ul>
                <li><strong>密林：</strong> マップ全体をカバー (カバー率：極めて高い) - くさタイプポケモンのパワーが2倍、密林により敵の移動速度が低下</li>
                <li><strong>厚い下草：</strong> 道沿いの植生 (カバー率：高い) - くさタイプポケモンのパワーボーナス</li>
              </ul>
              
              <h4>戦略的チョークポイント</h4>
              <ul>
                <li><strong>森の広場：</strong> 密林の中の開けたエリア (優先度：極めて高い)</li>
                <li><strong>細道：</strong> 木々の間で道が狭くなっている場所 (優先度：高い)</li>
              </ul>
              
              <h3>⚔️ チーム編成</h3>
              <h4>序盤・中盤 (ウェーブ 1-99)</h4>
              <p>マラカッチ（中央）、ルチャブル/ムクホーク（物理ダメージ）、ドンカラス（透明対策）を使用して、効率よくウェーブをクリアします。</p>
      
              <img src="/images/map-route/3-1-01.png" alt="Route 3-1 Map" class="route-map">
              
              <h4>終盤 (ウェーブ 100)</h4>
              <p>どくのドリームチームに入れ替え：マタドガス（核）、アーボック、マルノーム、アリアドス、メタモン（マタドガスをコピー）、安全策としてドンカラスを維持。</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-3-2-regice-dewgong-strategy',
        routeNumber: '3-2',
        name: 'ポケパスTD ルート3-2攻略ガイド：ジュゴンのスタンロック戦略',
        mapImage: '/images/map-route/3-2.png',
        stars: 400,
        starsSecondary: 0,
        difficulty: 'Hard',
        difficultyLevel: 3,
        terrain: ['Field', 'Grass', 'Mountain'],
        description: '戦略的なチョークポイントを持つ混合地形ルート。最終ボスのレジアイス攻略には、ジュゴンを用いたユニークなコントロール戦略が必要です。',
        totalWaves: 100,
        recommendedTypes: ['Ice', 'Water', 'Ground', 'Grass'],
        recommendedPokemon: ['Dewgong', 'Ditto', 'Cryogonal', 'Weavile', 'Whiscash', 'Corsola', 'Maractus', 'Sceptile', 'Tangrowth'],
        strategies: ['Dewgong Solo-Control', 'Ice Breaker', 'Swap Strategy'],
        playstyle: 'Tactical',
        tips: [
            '入れ替え戦略の活用：ウェーブ1-99はくさタイプチームで、ウェーブ100のレジアイス戦でアイスブレイカーチームに切り替えます。',
            'ウェーブ100ではジュゴン（Dewgong）が不可欠。30%の確率でレジアイスを2秒間まひ（スタン）させます。',
            'カバー範囲を最大にするため、ジュゴンは最も中央の位置に配置しましょう。',
            'メタモンでジュゴンに変身し、スタンの確率を2倍（永続スタン）にします。',
            'フリージオ（Cryogonal）とマニューラ（Weavile）が、レジアイスの190,400アーマーを突破するために必要な火力を提供します。',
            'サニーゴは全体スロウを提供し、スタンしていない間もレジアイスの動きを遅くします。'
        ],
        teamComposition: {
            early: ['Maractus', 'Sceptile', 'Tangrowth'],
            mid: ['Maractus', 'Sceptile', 'Tangrowth'],
            late: ['Dewgong', 'Ditto', 'Cryogonal', 'Weavile', 'Whiscash', 'Corsola']
        },
        terrainAnalysis: {
            roads: [
                { description: '多様な地形を通る道', length: 'Very Long', chokepoints: 4 },
                { description: '草地を抜ける峠道', length: 'Long', chokepoints: 2 }
            ],
            water: [],
            mountains: [
                { description: 'ルートを見下ろす戦略的な山頂', height: 'High', strategicValue: 'Very High', benefits: ['射程ボーナス +35%', '複数の通路セクションを制御可能'] },
                { description: '道沿いの岩丘', height: 'Medium', strategicValue: 'High', benefits: ['射程ボーナス +20%'] }
            ],
            grass: [
                { description: '山間の谷にある草地', coverage: 'High', benefits: ['くさタイプポケモンのパワーが2倍ボーナス'] },
                { description: '草原エリア', coverage: 'Medium', benefits: ['くさタイプポケモンのパワーボーナス'] }
            ],
            chokepoints: [
                { location: '峠道', description: '峰に挟まれた狭い通路', priority: 'Very High' },
                { location: '谷の入口', description: '道が草地の谷に入る場所', priority: 'High' },
                { location: 'ルート合流点', description: '複数の道が交差する場所', priority: 'High' }
            ]
        },
        seo: {
            title: 'ポケパスTD ルート3-2攻略ガイド：ジュゴンのスタンロック戦略',
            description: 'レジアイスが倒せませんか？秘訣は火力ではなくジュゴンです。Lv.100ジュゴンの永続スタン戦略でルート3-2のボスを足止めする方法を学びましょう。',
            keywords: 'pokepathtd route 3-2, beat regice pokepathtd, route 3-2 guide, pokepathtd regice boss, best team route 3-2'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>ルート3-2には強力な氷の巨人、レジアイスが登場します。アーマー値190,400を誇るこのボスは、並大抵のチームでは突破できない壁となります。</p>
              <p>一般的な戦略はラプラスやデンリュウのようなスタンユニットを大量に並べることですが、レベル100に到達しているなら、より効率的な戦略が使えます。</p>
              <p>このガイドでは、単一の強力なコントローラーに頼ることで、火力を最大化する「ジュゴン・ソロコントロール」ビルドを解説します。</p>
              
              <h3>🛡️ ボス分析：なぜレジアイスは強いのか</h3>
              <ul>
                <li><strong>アーマー (190,400):</strong> これが最大のギミックです。攻撃力がこの数値を下回るユニットは、実質ダメージを与えることができません。高いステータスを持つユニットが必要です。</li>
                <li><strong>耐性:</strong> レジアイスは多くの状態異常に耐性を持ちますが、<strong>ジュゴンの「まひ」には耐性がありません</strong>。</li>
              </ul>
      
              <img src="/images/map-route/3-2-03.png" alt="Route 3-2 Map" class="route-map">
              
              <h3>🏆 最強チーム：「アイスブレイカー」部隊</h3>
              <p>火力を出すために、ラプラスの枠を削ってフリージオなどの高DPSユニットを採用します。その理由は以下の通りです：</p>
              
              <h4>1. 核：ジュゴン (レベル 100)</h4>
              <ul>
                <li><strong>役割:</strong> 単独クラウドコントロール（妨害）。</li>
                <li><strong>仕組み:</strong> ジュゴンの攻撃には30%の確率でターゲットを2秒間まひ（スタン）させる効果があります。</li>
                <li><strong>なぜラプラスを使わない？:</strong> レベル100のジュゴンは、十分な攻撃速度とステータスを持っています。2秒間のスタンがあれば、2体目のスタン役は不要です。メタモンでジュゴンをコピーすれば、理論上レジアイスを永続的にスタン（パーマスタン）させることができます。</li>
              </ul>
              
              <h4>2. 重砲：フリージオ & マニューラ</h4>
              <p>ラプラスを外して空いたスロットに、純粋な火力を追加します。</p>
              <ul>
                <li><strong>フリージオ (レベル 100):</strong>
                  <ul>
                    <li><strong>配置:</strong> 中央のフィールドまたは水辺の縁。</li>
                    <li><strong>理由:</strong> レベル100のフリージオは膨大な基礎ステータスを持ちます。その高いパワーにより、レジアイスのアーマーを自然に削り取ることができます。</li>
                  </ul>
                </li>
                <li><strong>マニューラ:</strong>
                  <ul>
                    <li><strong>役割:</strong> アーマー貫通。</li>
                    <li><strong>理由:</strong> クリティカルヒットはダメージを2倍にします。マニューラは依然として単体DPSの王者です。レジアイスがジュゴンによってスタンしている間、マニューラは確実にクリティカルを叩き込むチャンスを得ます。</li>
                  </ul>
                </li>
              </ul>
              
              <h4>3. ユーティリティ：ナマズン & サニーゴ</h4>
              <ul>
                <li><strong>ナマズン:</strong> じめん/みずの攻撃範囲を提供し、湖エリアでの安定したアタッカーとなります。</li>
                <li><strong>サニーゴ:</strong> 全体スロウ（射程300）を提供。レジアイスがスタンしていない間も、サニーゴのおかげでスローモーションで動くことになります。</li>
              </ul>
      
              <img src="/images/map-route/3-2-01.png" alt="Route 3-2 Map" class="route-map">
              
              <h3>📝 詳細戦略：ウェーブ 100 の入れ替え</h3>
              
              <h4>フェーズ 1: くさタイプでのクリア (ウェーブ 1-99)</h4>
              <p>ルート3-2は、みずタイプとじめんタイプの敵で溢れています。</p>
              <ul>
                <li><strong>マラカッチ、ジュカイン、モジャンボ</strong>を使用してください。</li>
                <li>これらのくさタイプは、ボス用のチームよりもはるかに速く道中のウェーブを粉砕します。</li>
              </ul>
              
              <h4>フェーズ 2: ボス戦のセットアップ (ウェーブ 100)</h4>
              <ol>
                <li><strong>売却：</strong> くさタイプユニットを削除します。彼らではレジアイスのアーマーに傷一つ付けられません。</li>
                <li><strong>ジュゴンを配置：</strong> 最も中央の位置（または地形で有利な水辺）に配置します。中央の方がループ全体をカバーできます。</li>
                <li><strong>DPSを配置：</strong> ジュゴンの近くにフリージオとマニューラを置きます。</li>
                <li><strong>勝利：</strong> レジアイスが射程に入るとジュゴンによってまひ状態になり、その間に高パワーユニットによって解体されます。</li>
              </ol>
              
              <h3>💡 プロのヒント：メタモンの活用</h3>
              <p>運（RNG）が悪く、ジュゴンのスタンがうまく発動しないと感じる場合は：</p>
              <ul>
                <li>メタモンをジュゴンに変身させます。</li>
                <li>同じターゲットを2体のジュゴンで攻撃することで、スタンさせる確率が大幅に向上します。これがレジアイスを確実に足止めする最も安全な方法です。</li>
              </ul>
      
              <img src="/images/map-route/3-2-02.png" alt="Route 3-2 Map" class="route-map">
              
              <h3>🗺️ 地形分析</h3>
              <p>ルート3-2は戦略的なチョークポイントが混在しており、成功のためにはポジショニングが極めて重要です。</p>
              
              <h4>道路とルート</h4>
              <ul>
                <li><strong>メインパス：</strong> 多様な地形を抜ける道 (Very Long, チョークポイント4箇所)</li>
                <li><strong>峠道：</strong> 草地を抜ける山道 (Long, チョークポイント2箇所)</li>
              </ul>
              
              <h4>山と高台</h4>
              <ul>
                <li><strong>戦略的山頂：</strong> 通路を見下ろす高い位置 (戦略的価値：極めて高い) - 射程ボーナス +35%、複数のルートを同時にカバー可能</li>
                <li><strong>岩丘：</strong> 道沿いの岩場 (戦略的価値：高) - 射程ボーナス +20%</li>
              </ul>
              
              <h4>草地と植生</h4>
              <ul>
                <li><strong>草地フィールド：</strong> 山間の谷間 (カバー率：高い) - くさタイプポケモンのパワーが2倍</li>
                <li><strong>草原エリア：</strong> 一般的な草地 (カバー率：中) - くさタイプポケモンのパワーボーナス</li>
              </ul>
              
              <h4>戦略的チョークポイント</h4>
              <ul>
                <li><strong>峠道：</strong> 山に挟まれた狭い通路 (優先度：極めて高い)</li>
                <li><strong>谷の入口：</strong> 道が谷間に入る場所 (優先度：高い)</li>
                <li><strong>ルート合流点：</strong> 複数の道が重なる場所 (優先度：高い)</li>
              </ul>
              
              <h3>⚔️ チーム編成</h3>
              <h4>序盤・中盤 (ウェーブ 1-99)</h4>
              <p>効率的なクリアのために、みず・じめんに強いくさタイプ（マラカッチ、ジュカイン、モジャンボ）を主力にします。</p>
              
              <h4>終盤 (ウェーブ 100)</h4>
              <p>アイスブレイカー部隊に入れ替え：ジュゴン（核）、メタモン（バックアップ用スタン）、フリージオ＆マニューラ（火力）、ナマズン＆サニーゴ（サポート）。</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-3-3-registeel-wave-100-guide',
        routeNumber: '3-3',
        name: 'ポケパスTD ルート3-3攻略ガイド：レジスチルを倒す方法（どく無効対策）',
        mapImage: '/images/map-route/3-3.png',
        stars: 600,
        starsSecondary: 0,
        difficulty: 'Very Hard',
        difficultyLevel: 4,
        terrain: ['Field', 'Grass', 'Mountain', 'Water'],
        description: '全地形タイプが登場する究極の挑戦ルート。最終ボスのレジスチルは「どく」が無効なため、ユニークな「のろい」戦略が必要です。',
        totalWaves: 100,
        recommendedTypes: ['Ghost', 'Ground', 'Grass', 'Fire'],
        recommendedPokemon: ['Gengar', 'Ditto', 'Maractus', 'Sceptile', 'Sunflora', 'Excadrill', 'Dewgong', 'Corsola'],
        strategies: ['Swap Strategy', 'Curse Build', 'Boss Counter'],
        playstyle: 'Tactical',
        tips: [
            '入れ替え戦略の活用：ウェーブ1-99はくさタイプチームで凌ぎ、レジスチル戦で「のろい」チームに切り替えます。',
            'ウェーブ100ではゲンガー（Gengar）が不可欠。「ナイトメア」のダメージはレジスチルの238,000アーマーを無視します。',
            'カバー範囲を最大化するため、ゲンガーは高台（右上にある山）に配置しましょう。',
            'メタモン（Ditto）を使用してゲンガーに変身し、ナイトメアのスタックを2倍にします。',
            'ジュゴンとサニーゴが重要なスタン/スロウを提供し、ゲンガーがダメージを蓄積させるための時間を稼ぎます。',
            'ドリュウズ（Excadrill）は両方のチームで維持してください。エリートのアーマーを破壊し、ボス戦をサポートします。'
        ],
        teamComposition: {
            early: ['Maractus', 'Sceptile', 'Sunflora'],
            mid: ['Maractus', 'Sceptile', 'Sunflora', 'Excadrill'],
            late: ['Gengar', 'Ditto', 'Dewgong', 'Corsola', 'Excadrill']
        },
        terrainAnalysis: {
            roads: [
                { description: '全地形を通過する複雑な経路システム', length: 'Very Long', chokepoints: 6 },
                { description: '複数の分岐ルート', length: 'Long', chokepoints: 4 },
                { description: '難解な地形を通る隠し通路', length: 'Medium', chokepoints: 2 }
            ],
            water: [
                { description: '中央の広大な湖', type: 'Deep Water', strategicValue: 'Very High', benefits: ['みずタイプポケモンのパワーが2倍ボーナス'] },
                { description: 'マップを流れる河川', type: 'River', strategicValue: 'High', benefits: ['みずタイプポケモンのパワーボーナス'] },
                { description: '滝と池', type: 'Waterfall', strategicValue: 'Medium', benefits: ['みずタイプポケモンのパワーボーナス'] }
            ],
            mountains: [
                { description: '最高高度を持つそびえ立つ峰', height: 'Very High', strategicValue: 'Very High', benefits: ['射程ボーナス +60%', 'マップの広範囲をカバー可能'] },
                { description: '連なる山脈', height: 'High', strategicValue: 'Very High', benefits: ['射程ボーナス +40%'] },
                { description: '岩だらけの崖と尾根', height: 'Medium', strategicValue: 'High', benefits: ['射程ボーナス +25%'] }
            ],
            grass: [
                { description: '広範囲を覆う密林', coverage: 'Very High', benefits: ['くさタイプポケモンのパワーが2倍ボーナス'] },
                { description: '草原と牧草地', coverage: 'High', benefits: ['くさタイプポケモンのパワーボーナス'] }
            ],
            chokepoints: [
                { location: '中央の山頂', description: 'マップ全体を見渡せる最高地点', priority: 'Very High' },
                { location: '湖の橋', description: '中央の湖を渡る主要な橋', priority: 'Very High' },
                { location: '峠道', description: '峰に挟まれた狭い通路', priority: 'Very High' },
                { location: '森の広場', description: '密林の中の開けたエリア', priority: 'High' },
                { location: '渡河点', description: 'ルートが川を横切る場所', priority: 'High' },
                { location: '経路の交差点', description: '複数の道が合流する場所', priority: 'High' }
            ]
        },
        seo: {
            title: 'ポケパスTD ルート3-3攻略ガイド：レジスチルを倒す方法（どく無効対策）',
            description: 'レジスチルは238kのアーマーを持ち、どくが無効です。ゲンガーの「のろい戦略」を使って、無限にスケールするダメージでルート3-3のボスを倒す方法を学びましょう。',
            keywords: 'pokepathtd route 3-3, beat registeel pokepathtd, route 3-3 guide, pokepathtd registeel boss, best team route 3-3'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>ルート3-3は第3リージョンのクライマックスです。マップ自体も長く入り組んでいますが、本当の試練は最終ボスのレジスチルです。</p>
              <p>レジロック戦で「どく戦略」に頼っていたプレイヤーは、ここで壁にぶつかるでしょう。レジスチルははがねタイプなので、<strong>「どく」が100%無効</strong>です。</p>
              <p>238,000のアーマーを持ち、どくも効かない彼にどうダメージを与えるか？ その答えはゴーストタイプの状態異常、<strong>「のろい（ナイトメア）」</strong>にあります。</p>
              
              <h3>🛡️ ボス分析：レジスチル</h3>
              <ul>
                <li><strong>アーマー:</strong> 238,000（物理攻撃はほぼ1ダメージになります）。</li>
                <li><strong>耐性:</strong> どく無効。マタドガスやアーボックは使用しないでください。</li>
                <li><strong>弱点:</strong>
                  <ul>
                    <li>じめん: (ドリュウズ / フライゴン)</li>
                    <li>ほのお: (リザードン / バクフーン)</li>
                    <li>のろい: (ゲンガー / デスカーン / ジュペッタ)</li>
                  </ul>
                </li>
              </ul>
      
              <img src="/images/map-route/3-3-03.png" alt="Route 3-3 Map" class="route-map">
              
              <h3>🏆 2チーム入れ替え戦略</h3>
              <p>道中のウェーブには範囲攻撃が必要で、ボスには特定のカウンターが必要なため、「入れ替え戦略」を採用します。</p>
              
              <h4>チーム 1: 道中クリア (ウェーブ 1-99)</h4>
              <p>ルート3-3には、いわ・じめん・はがねタイプが多く出現します。</p>
              <ul>
                <li><strong>核：くさタイプ。</strong></li>
                <li><strong>マラカッチ＆ジュカイン:</strong> 中央の草地に配置。強力ないわ/じめんのウェーブを粉砕します。</li>
                <li><strong>キマワリ:</strong> 不可欠なダメージバフ役。</li>
                <li><strong>ドリュウズ:</strong> 出現地点の近くに配置し、エリートモブのアーマーを破壊します。</li>
              </ul>
              
              <h4>チーム 2: ボスキラー (ウェーブ 100)</h4>
              <p>レジスチルが出現したら、<strong>ゲームを一時停止（PAUSE）</strong>してください。じめんタイプ以外のくさユニットを売り（スペースがあればキマワリは維持）、のろい部隊を配備します。</p>
              
              <h4>1. MVP: ゲンガー (レベル 100)</h4>
              <ul>
                <li><strong>役割:</strong> 無限スケールダメージ。</li>
                <li><strong>パッシブ:</strong> ナイトメア。継続ダメージを与えるスタックを付与します。</li>
                <li><strong>勝利の理由:</strong> ナイトメアのダメージはアーマーを無視します。物理攻撃とは異なり、戦闘が長引くほどダメージが増幅します。レジスチルは非常にタフなので、ゲンガーがダメージを致命的なレベルまで蓄積させる時間は十分にあります。</li>
                <li><strong>配置:</strong> 右上の山（またはルートをカバーできる高台）。</li>
              </ul>
              
              <h4>2. クローン：メタモン</h4>
              <ul>
                <li><strong>役割:</strong> 2体目のゲンガー。</li>
                <li><strong>戦略:</strong> メタモンをゲンガーに変身させます。2体のゲンガーがいればナイトメアのスタック速度が2倍になり、撃破時間を半分に短縮できます。</li>
              </ul>
              
              <h4>3. 足止め役：ジュゴン＆サニーゴ</h4>
              <ul>
                <li><strong>役割:</strong> 時間稼ぎ。</li>
                <li><strong>戦略:</strong> ゲンガーがダメージを増幅させるには時間が必要です。
                  <ul>
                    <li><strong>サニーゴ:</strong> レジスチルの足を遅くします。</li>
                    <li><strong>ジュゴン:</strong> レジスチルをその場にスタンさせます。</li>
                  </ul>
                </li>
                <li>レジスチルが止まっている間も、ナイトメアのダメージは刻々と入り続けます。</li>
              </ul>
              
              <h4>4. アーマー破壊：ドリュウズ</h4>
              <ul>
                <li><strong>役割:</strong> サポートDPS。</li>
                <li><strong>戦略:</strong> ドリュウズは維持します。はじめんタイプの攻撃ははがねタイプに効果抜群であり、パッシブでアーマーに2倍のダメージを与えます。ゲンガーほどの火力は出ませんが、重要な削り役となります。</li>
              </ul>
      
              <img src="/images/map-route/3-3-02.png" alt="Route 3-3 Map" class="route-map">
              
              <h3>📝 ステップバイステップ・ガイド</h3>
              <ol>
                <li><strong>ウェーブ 1-99:</strong> くさ/じめんチームで通常通りプレイします。</li>
                <li><strong>ウェーブ 100:</strong> 一時停止。</li>
                <li><strong>売却：</strong> マラカッチ、ジュカイン、およびじめんタイプ以外の物理ユニットを削除します。</li>
                <li><strong>購入：</strong> ゲンガーとメタモンを配備します。</li>
                <li><strong>サポート：</strong> ジュゴンとサニーゴがボスの経路上に配置されているか確認します。</li>
                <li><strong>勝利：</strong> 紫色のナイトメアの数字が大きくなるにつれ、レジスチルの体力が溶けていくのを見守りましょう。</li>
              </ol>
              
              <h3>🗺️ 地形分析</h3>
              <p>ルート3-3は全地形を網羅した複雑な経路システムを特徴とする、究極の挑戦ルートです。</p>
              
              <h4>道路とルート</h4>
              <ul>
                <li><strong>メインパス：</strong> 全地形を横断する複雑な経路 (Very Long, チョークポイント6箇所)</li>
                <li><strong>分岐パス：</strong> 複数の分岐ルート (Long, チョークポイント4箇所)</li>
                <li><strong>隠しパス：</strong> 難所を抜ける秘密の通路 (Medium, チョークポイント2箇所)</li>
              </ul>
              
              <h4>水域</h4>
              <ul>
                <li><strong>中央湖：</strong> 広大な中央の湖 (戦略的価値：極めて高い) - みずタイプポケモンのパワーが2倍</li>
                <li><strong>河川：</strong> マップを流れる川 (戦略的価値：高い) - みずタイプポケモンのパワーボーナス</li>
                <li><strong>滝：</strong> 滝と滝つぼ (戦略的価値：中) - みずタイプポケモンのパワーボーナス</li>
              </ul>
              
              <h4>山と高台</h4>
              <ul>
                <li><strong>そびえ立つ峰：</strong> 最高高度 (戦略的価値：極めて高い) - 射程ボーナス +60%、マップ全域をカバー可能</li>
                <li><strong>山脈：</strong> 連なる山々 (戦略的価値：極めて高い) - 射程ボーナス +40%</li>
                <li><strong>岩壁：</strong> 岩だらけの崖 (戦略的価値：高い) - 射程ボーナス +25%</li>
              </ul>
              
              <h4>草地と植生</h4>
              <ul>
                <li><strong>密林：</strong> 広範囲をカバー (カバー率：極めて高い) - くさタイプポケモンのパワーが2倍</li>
                <li><strong>草原：</strong> 牧草地と草原 (カバー率：高い) - くさタイプポケモンのパワーボーナス</li>
              </ul>
              
              <h4>戦略的チョークポイント</h4>
              <ul>
                <li><strong>中央山頂：</strong> マップ全体を見渡せる最高地点 (優先度：極めて高い)</li>
                <li><strong>湖の橋：</strong> 中央湖を横断する主要な橋 (優先度：極めて高い)</li>
                <li><strong>峠道：</strong> 峰に挟まれた狭い通路 (優先度：極めて高い)</li>
                <li><strong>森の広場：</strong> 密林の中の開けた場所 (優先度：高い)</li>
                <li><strong>渡河点：</strong> ルートが川を渡る場所 (優先度：高い)</li>
                <li><strong>経路交差点：</strong> 複数の道が合流する場所 (優先度：高い)</li>
              </ul>
      
              <img src="/images/map-route/3-3-01.png" alt="Route 3-3 Map" class="route-map">
              
              <h3>⚔️ チーム編成の推奨</h3>
              <h4>序盤 (レベル 1-15)</h4>
              <p>レベル1-50の任意のポケモンで開始。経済を構築し、序盤のウェーブをクリアすることに集中します。</p>
              
              <h4>中盤 (レベル 16-35)</h4>
              <p>レベル50-80のポケモンに移行。道中クリアのためのくさタイプ核を構築し始めます。</p>
              
              <h4>終盤 (レベル 36-100)</h4>
              <p>レベル100のメタポケモンを配備。ウェーブ1-99はくさタイプ（マラカッチ、ジュカイン、キマワリ）とドリュウズを使用。ウェーブ100ではゲンガー、メタモン、ジュゴン、サニーゴに入れ替えます。</p>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-1-4-regigigas-wave-100-guide',
        routeNumber: '1-4',
        name: 'ポケパスTD ルート1-4攻略ガイド：レジギガスと大群（Swarm）を倒す方法',
        mapImage: '/images/map-route/1-4.png',
        stars: 650,
        starsSecondary: 0,
        difficulty: 'Very Hard',
        difficultyLevel: 4,
        terrain: ['Field', 'Grass', 'Forest'],
        description: 'ルート1の「ヒロイック」バージョン。2つの出現地点と、ノーマル/ひこうタイプの大群が特徴。ボスのレジギガスには圧倒的なDPSが必要です。',
        totalWaves: 100,
        recommendedTypes: ['Fighting', 'Electric', 'Rock', 'Fire'],
        recommendedPokemon: ['Charizard', 'Raichu', 'Machamp', 'Golem', 'Lucario', 'Zapdos', 'Vileplume', 'Typhlosion'],
        strategies: ['AOE Spam', 'Dual Lane Defense', 'Rocky Helmet Meta'],
        playstyle: 'Aggressive',
        tips: [
            'タンク（ゴローニャ/カビゴン）に「ゴツゴツメット」を装備：大群が接触するだけで自滅していきます。',
            'ライチュウはパッシブの連鎖雷（Chain Lightning）により、ひこうタイプの大群対策のMVPです。',
            '単体攻撃のスナイパー（インテレオンなど）は使わないでください。数に押し切られます。',
            'ボスのレジギガスは「スロースタート」持ち：最初の10秒は遅いですが、その後ダッシュします。素早く倒しましょう！',
            '道の合流点にラフレシアやバタフリーを配置し、大群をねむり/まひ状態で足止めします。',
            'カイリキーのようなかくとうタイプは、ここに出現する敵の90%に対して2倍のダメージを与えます。'
        ],
        teamComposition: {
            early: ['Charmeleon', 'Pikachu', 'Geodude'],
            mid: ['Charizard', 'Raichu', 'Golem', 'Machoke'],
            late: ['Charizard (Y)', 'Raichu', 'Machamp', 'Lucario', 'Zapdos', 'Vileplume']
        },
        terrainAnalysis: {
            roads: [
                { description: '2つの出現地点が1つの広い道に合流', length: 'Medium', chokepoints: 3 },
                { description: '自然の遮蔽物が少ない開けたフィールド', length: 'Short', chokepoints: 1 }
            ],
            water: [
                { description: '出現地点Aの近くにある小さな池', type: 'Shallow Water', strategicValue: 'Low', benefits: ['特になし'] }
            ],
            mountains: [
                { description: '高台の補正なし', height: 'None', strategicValue: 'Low', benefits: ['なし'] }
            ],
            grass: [
                { description: 'マップの70%を覆う背の高い草むら', coverage: 'Very High', benefits: ['くさタイプが「隠密」状態になる（敵から狙われない）'] },
                { description: '合流地点の密集した藪', coverage: 'Medium', benefits: ['敵の速度を15%低下させる'] }
            ],
            chokepoints: [
                { location: '合流地点（The Convergence Point）', description: 'ルートAとルートBが交わる場所。範囲攻撃に最適なスポット。', priority: 'Very High' },
                { location: '最終防衛線（End of the Line）', description: '拠点直前の直線。かくとうタイプの最後の踏ん張りどころ。', priority: 'High' }
            ]
        },
        seo: {
            title: 'ポケパスTD ルート1-4攻略ガイド：レジギガスと大群対策',
            description: 'ルート1-4は、ピジョットやラッタの巨大な群れが特徴です。「大群（Swarm）」ギミックの対策と、ゴツゴツメットを使ったレジギガスの倒し方を学びましょう。',
            keywords: 'pokepathtd route 1-4, beat regigigas pokepathtd, route 1-4 swarm guide, best aoe pokemon, rocky helmet strategy'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>ルート1-4は、バージョン1.4.1で追加された最初の「上級マップ」です。「ルート1」という名前に騙されてはいけません。ここはクラウドコントロール（妨害）と範囲攻撃（AOE）能力が試される過酷な試練の場です。</p>
              <p>精密さが求められる他のマップとは異なり、ここでは「破壊力」が重要です。一度に<strong>50体以上の敵</strong>が押し寄せます。処理速度が遅いと、敗北する前にゲームがラグで止まることさえあります。</p>
              
              <h3>🛡️ ボス分析：レジギガス</h3>
              <ul>
                <li><strong>HP:</strong> 膨大（数百万）。純粋な耐久力の塊です。</li>
                <li><strong>特性：スロースタート。</strong> 戦闘開始から10秒間は移動速度が50%に低下しますが、その後速度が2倍になり、スロウ効果を無視します。</li>
                <li><strong>弱点:</strong>
                  <ul>
                    <li>かくとう: (カイリキー / ルカリオ / ローブシン) <strong>ダメージ2倍</strong>。</li>
                    <li>割合ダメージ: (のろい / やどりぎのたね)。</li>
                  </ul>
                </li>
                <li><strong>脅威:</strong> 彼はタワーを攻撃せず、ただ歩きます。加速が始まると、止めるのはほぼ不可能です。</li>
              </ul>
              
              <h3>🏆 「ゴツゴツメット」＆範囲攻撃戦略</h3>
              <p>「大群（Swarm）」ギミック（低HP・高密度の敵）のため、単体攻撃のタワーはここでは役に立ちません。複数のターゲットを攻撃できるユニットやアイテムが必要です。</p>
              
              <h4>1. MVP: ライチュウ (連鎖雷)</h4>
              <ul>
                <li><strong>役割:</strong> 対空 / 大群処理。</li>
                <li><strong>勝利の理由:</strong> ルート1-4はひこうタイプ（ピジョット/オニドリル）で埋め尽くされます。ライチュウの攻撃は周囲の敵に跳ね返るため、効率よく処理できます。</li>
                <li><strong>推奨アイテム:</strong> <em>こだわりメガネ</em>（特攻最大化）または<em>じしゃく</em>。</li>
              </ul>
              
              <h4>2. タンク：ゴローニャ / カビゴン</h4>
              <ul>
                <li><strong>役割:</strong> 物理の壁。</li>
                <li><strong>戦略:</strong> ゴローニャを最前線に配置します。ここの敵の多くはノーマルタイプの物理アタッカー（ラッタ、ケンタロス）です。</li>
                <li><strong>重要アイテム:</strong> <strong>ゴツゴツメット</strong>。敵の群れがタンクを攻撃するたびに、彼らはダメージを受けます。このパッシブダメージだけで、操作せずとも何百匹ものネズミを倒せます。</li>
              </ul>
              
              <h4>3. ボスキラー：カイリキー</h4>
              <ul>
                <li><strong>役割:</strong> 単体高火力。</li>
                <li><strong>戦略:</strong> ライチュウが雑魚を処理している間、カイリキーはエリートモブとレジギガスだけに集中させる必要があります。</li>
                <li><strong>配置:</strong> 両方のルートが合流する「合流地点」に配置し、常にパンチを繰り出せるようにします。</li>
              </ul>
              
              <h3>📝 ステップバイステップ・ガイド</h3>
              <ol>
                <li><strong>ウェーブ 1-30:</strong> <strong>リザード</strong>や<strong>ピカチュウ</strong>を使用。配置費用を節約するため、まだ進化させないのも手です。両方の出現地点をカバーしてください。</li>
                <li><strong>ウェーブ 31-60:</strong> ひこうタイプの大群が始まります。すぐに<strong>ライチュウ</strong>に進化させてください。中央に<strong>ラフレシア</strong>を配置し、敵の突撃を遅らせます。</li>
                <li><strong>ウェーブ 61-90:</strong> エリート（ケンタロス/ガルーラ）が登場します。<em>くろおび</em>または<em>ちからのハチマキ</em>を装備した<strong>カイリキー</strong>を配備します。</li>
                <li><strong>ウェーブ 100 (レジギガス):</strong> 
                  <ul>
                    <li>ゲームを一時停止。</li>
                    <li>すべてのかくとうタイプを経路の開始地点に集結させます。</li>
                    <li><strong>集中砲火：</strong> カイリキーの「ターゲット設定」を「最強」に変更し、取り巻きを無視してボスを叩くようにします。</li>
                    <li>「スロースタート」期間中に一気に削りきりましょう。</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ 地形分析</h3>
              <p>このマップは2つの出現地点が1つの広い道に合流する「Y字型」をしています。これが戦略の鍵です。</p>
              
              <h4>デュアル・スポーン（2つの出現地点）</h4>
              <ul>
                <li><strong>北側の出現地点:</strong> 主にひこうタイプ。でんきタイプの防御が必要です。</li>
                <li><strong>西側の出現地点:</strong> 主にじめん/ノーマルタイプ（コラッタ/サンド）。くさ/かくとうタイプの防御が必要です。</li>
              </ul>
              
              <h4>合流地点（チョークポイント）</h4>
              <ul>
                <li><strong>場所:</strong> マップ中央。</li>
                <li><strong>戦略的価値:</strong> ここは範囲攻撃タワーが両方の出現地点からの敵を同時に攻撃できる唯一の場所です。最も高価なタワー（リザードン/バクフーン）はここに配置すべきです。</li>
              </ul>
              
              <h4>草むらと藪</h4>
              <ul>
                <li><strong>背の高い草むら:</strong> マップの大部分をカバー。ここに配置されたくさタイプは「隠密」を得るため、遠距離の敵から反撃されません。<strong>ラフレシア</strong>や<strong>フシギバナ</strong>に最適です。</li>
              </ul>
              
              <h3>⚔️ チーム編成の推奨</h3>
              <h4>「でんき / かくとう」核</h4>
              <p>みずやほのおが有利な他のマップとは異なり、ルート1-4は序盤ポケモンのタイプ（ノーマル/ひこう）がレベル100スケールで支配しています。</p>
              <ul>
                <li><strong>ライチュウ / サンダー:</strong> ウェーブの50%に対処するために不可欠。</li>
                <li><strong>カイリキー / ルカリオ:</strong> 残り50%のウェーブとボスに対処するために不可欠。</li>
                <li><strong>サポート:</strong> ラフレシア（敵の数が多いため、ねむり粉より「しびれごな」の方が有効です）。</li>
              </ul>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-2-4-mega-venusaur-wave-100-guide',
        routeNumber: '2-4',
        name: 'ポケパスTD ルート2-4攻略ガイド：メガフシギバナを倒す方法（毒の迷路）',
        mapImage: '/images/map-route/2-4.png',
        stars: 650,
        starsSecondary: 0,
        difficulty: 'Very Hard',
        difficultyLevel: 4,
        terrain: ['Forest', 'Swamp', 'Thicket'],
        description: 'トキワの森がねじ曲がったようなステージ。木々が視線を遮り、敵は高い再生能力を持っています。ボスのメガフシギバナは「ほのお」「こおり」ダメージを軽減します。',
        totalWaves: 100,
        recommendedTypes: ['Psychic', 'Flying', 'Steel', 'Ground'],
        recommendedPokemon: ['Alakazam', 'Espeon', 'Metagross', 'Braviary', 'Aerodactyl', 'Crobat', 'Slowbro', 'Skarmory'],
        strategies: ['Psychic Nuke', 'Anti-Regen', 'Drag-and-Drop Micro'],
        playstyle: 'Micromanagement',
        tips: [
            'ボス「メガフシギバナ」は特性「あついしぼう」持ち：ほのおとこおりの攻撃ダメージが50%カットされます！リザードンに頼りすぎないように。',
            'エスパータイプ（フーディン）を使用して、再生される前に毒タイプの敵をワンパンで倒しましょう。',
            '木々が攻撃の視界を遮ります！ひこうタイプ（ウォーグル）を使用するか、視界を確保するために切り株の上に配置してください。',
            '沼地タイルは毒タイプの敵を回復させます。泥沼に入る前に仕留めましょう。',
            'はがねタイプ（メタグロス）は、マップ全体の毒効果を無効化できます。',
            'v1.4.1の新機能「ドラッグ＆ドロップ」を使い、フーディンを迷路内で移動させてボスを追いかけましょう。'
        ],
        teamComposition: {
            early: ['Abra', 'Spearow', 'Zubat'],
            mid: ['Kadabra', 'Fearow', 'Golbat', 'Metang'],
            late: ['Alakazam', 'Metagross', 'Braviary', 'Crobat', 'Espeon', 'Slowbro']
        },
        terrainAnalysis: {
            roads: [
                { description: '狭いZ字型の曲がりくねった道', length: 'Very Long', chokepoints: 8 },
                { description: '道が毒のヘドロで覆われている（敵を回復させる）', length: 'Medium', chokepoints: 2 }
            ],
            water: [
                { description: '毒の池', type: 'Swamp', strategicValue: 'Negative', benefits: ['その場に立つ毒/はがねタイプ以外のポケモンにダメージを与える'] }
            ],
            mountains: [
                { description: '山はないが、巨大な切り株が高台として機能する', height: 'Low', strategicValue: 'High', benefits: ['射程 +15%', '木の視界遮蔽を無視する'] }
            ],
            grass: [
                { description: '生い茂る森の木々', coverage: 'Max', benefits: ['地上ユニットの視線を遮る'] },
                { description: '回復の茂み', coverage: 'Low', benefits: ['ここに立つ敵は毎秒HPの10%を回復する'] }
            ],
            chokepoints: [
                { location: '中央の切り株', description: '迷路の中心。フーディンに最適なスポット。', priority: 'Very High' },
                { location: '出口ゲート', description: '最後の直線。ブレイブバードの連打に有効。', priority: 'High' }
            ]
        },
        seo: {
            title: 'ポケパスTD ルート2-4攻略ガイド：メガフシギバナと再生対策戦略',
            description: 'ルート2-4は再生能力を持つ毒タイプの迷路です。ここでは炎は弱点となります！エスパータイプとドラッグ＆ドロップ機能を駆使してメガフシギバナを倒す方法を学びましょう。',
            keywords: 'pokepathtd route 2-4, beat mega venusaur pokepathtd, route 2-4 guide, anti-regen strategy, alakazam build'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>「毒のラビリンス」として知られるルート2-4は、少しずつダメージを与える戦術に頼るプレイヤーにとって悪夢のような場所です。このマップのギミックは<strong>「再生（Regeneration）」</strong>です。出現するほぼすべての敵（コクーン、スピアー、アーボック、ベトベトン）は、致命傷を与えない限り急速に回復します。</p>
              <p>さらに、鬱蒼とした森がタワーの視界を遮ります。左側にいるリザードンは、右側にいる敵を見ることができません。このマップを攻略するには、<strong>v1.4.1で実装された「ドラッグ＆ドロップ」</strong>メカニズムをマスターする必要があります。</p>
              
              <h3>🛡️ ボス分析：メガフシギバナ</h3>
              <ul>
                <li><strong>HP:</strong> 非常に高い。タンク役のボス。</li>
                <li><strong>パッシブ1：あついしぼう。</strong> ほのおとこおりの技から受けるダメージを<strong>50%軽減</strong>します。最初のリザードンはここでは役に立ちません！</li>
                <li><strong>パッシブ2：こうせいせい。</strong> 5秒ごとに最大HPの5%を回復します。この回復量を上回るDPS（秒間ダメージ）が必要です。</li>
                <li><strong>弱点:</strong>
                  <ul>
                    <li>エスパー: (フーディン / ミュウツー / エーフィ)。<strong>ダメージ2倍</strong>。</li>
                    <li>ひこう: (ウォーグル / プテラ)。<strong>ダメージ2倍</strong>。</li>
                  </ul>
                </li>
              </ul>
              
              <h3>🏆 「サイキック・バースト」戦略</h3>
              <p>敵が時間経過で回復するため、「継続ダメージ」（火傷や毒）戦略は効果的ではありません。一撃で仕留める「ワンショット」のポテンシャルが必要です。</p>
              
              <h4>1. MVP: フーディン (ガラスの砲台)</h4>
              <ul>
                <li><strong>役割:</strong> バースト・アサシン。</li>
                <li><strong>勝利の理由:</strong> このルートは毒・かくとうタイプが中心です。フーディンはそれらに対して効果抜群のダメージを与えます。また、高い素早さにより、敵が再生する前に攻撃を叩き込めます。</li>
                <li><strong>推奨アイテム:</strong> <em>まがったスプーン</em>（エスパー20%強化）または<em>こだわりメガネ</em>（特攻50%強化）。</li>
                <li><strong>配置:</strong> 最大の視界を確保するため「中央の切り株」の上に配置。</li>
              </ul>
              
              <h4>2. スカウト：ウォーグル / クロバット</h4>
              <ul>
                <li><strong>役割:</strong> 視界確保 ＆ 残敵処理。</li>
                <li><strong>勝利の理由:</strong> ひこうタイプは木々による「視線遮蔽」のペナルティを無視します。壁の裏に隠れている敵も攻撃可能です。</li>
                <li><strong>推奨アイテム:</strong> <em>するどいくちばし</em>。</li>
              </ul>
              
              <h4>3. 壁：メタグロス</h4>
              <ul>
                <li><strong>役割:</strong> タンク。</li>
                <li><strong>勝利の理由:</strong> はがね/エスパータイプであるメタグロスは、マップ上の<strong>毒の霧を無効化</strong>し、現地の野生ポケモンのほぼすべての攻撃に耐性があります。</li>
                <li><strong>戦略:</strong> 撃ち漏らした敵を捕まえるため、迷路の最終地点に配置します。</li>
              </ul>
              
              <h3>📝 ステップバイステップ・ガイド</h3>
              <ol>
                <li><strong>ウェーブ 1-20:</strong> ケーシィとオニスズメで開始します。ケーシィは序盤弱いので、しっかり保護しましょう。</li>
                <li><strong>ウェーブ 21-50:</strong> 「再生」持ちの敵（ベトベター/ベトベトン）が出現します。ダメージ表記は出ているのにHPバーが動かない場合は、バーストダメージが不足しています。早急に<strong>ユンゲラー</strong>へ進化させましょう。</li>
                <li><strong>ウェーブ 51-90:</strong> 迷路フェーズ。敵が硬くなります。ヤドランで敵を遅延させ、フーディンのサイコキネシスでまとめて吹き飛ばしましょう。</li>
                <li><strong>ウェーブ 100 (メガフシギバナ):</strong> 
                  <ul>
                    <li><strong>炎タイプは使わないこと。</strong> 配置している炎タイプがいれば売却します。</li>
                    <li><strong>マイクロマネジメント:</strong> フシギバナがZ字の迷路を進むのに合わせ、ボスの先にある次の「切り株」へフーディンを<strong>ドラッグ＆ドロップ</strong>で移動させます。</li>
                    <li>攻撃を絶え間なく続けるために、この戦闘中にメインDPSを少なくとも3～4回は再配置する必要があります。</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ 地形分析</h3>
              <p>マップは深い森と湿った道で構成されています。視界の悪さが最大の敵です。</p>
              
              <h4>森（視界遮蔽）</h4>
              <ul>
                <li><strong>木々：</strong> 地上ユニット（フーディンやメタグロスなど）は木を透かして撃つことができません。角や交差点に配置する必要があります。</li>
                <li><strong>飛行ユニット：</strong> ひこうタイプは木を無視します。配置に苦労する場合は、ひこうタイプ中心のチーム（鳥ラッシュ）を組むのも手です。</li>
              </ul>
              
              <h4>毒の沼地</h4>
              <ul>
                <li><strong>効果：</strong> 道自体が紫色のヘドロになっています。</li>
                <li><strong>敵へのバフ：</strong> 毒タイプ（ベトベター/ドガース）は、その上を歩いている間回復します。</li>
                <li><strong>プレイヤーへのデバフ：</strong> はがね/毒タイプ以外のタワーを道に直接置くと、継続ダメージを受けます。ユニットは草の上に置きましょう！</li>
              </ul>
              
              <h3>⚔️ 推奨チーム編成</h3>
              <h4>「アンチ・ポイズン」コア</h4>
              <p>ルート2-4はエスパータイプが必須です。ケーシィやヤドンをレベルアップさせるのに最適な場所です。</p>
              <ul>
                <li><strong>フーディン：</strong> 必須DPS。</li>
                <li><strong>メタグロス：</strong> 最強のタンク（毒無効）。</li>
                <li><strong>ウォーグル：</strong> 最強の物理アタッカー（飛行は木を無視）。</li>
                <li><strong>ヤドラン：</strong> 再生を止めるためのCC（クラウドコントロール）を提供。</li>
              </ul>
            </div>
          `,
    },

    {
        id: 'how-to-beat-route-3-4-mega-aggron-wave-100-guide',
        routeNumber: '3-4',
        name: 'ポケパスTD ルート3-4攻略ガイド：メガボスゴドラを倒す方法（鉄のガントレット）',
        mapImage: '/images/map-route/3-4.png',
        stars: 700,
        starsSecondary: 0,
        difficulty: 'Extreme',
        difficultyLevel: 5,
        terrain: ['Mountain', 'Cave', 'Ridge'],
        description: '特殊攻撃の究極のテスト。敵は物理ダメージをブロックする「ヘビーアーマー」を装備しています。物理アタッカーはここでは無力です。ボスのメガボスゴドラにはアーマー貫通が必要です。',
        totalWaves: 100,
        recommendedTypes: ['Water', 'Fire', 'Special-Fighting', 'Ground'],
        recommendedPokemon: ['Starmie', 'Chandelure', 'Lucario', 'Blastoise', 'Nidoking', 'Gardevoir', 'Empoleon', 'Magnezone'],
        strategies: ['Special Attack Meta', 'Sturdy Breakers', 'Mid-Battle Item Swap'],
        playstyle: 'Loadout Optimization',
        tips: [
            '物理アタッカー（カイリキー、ギャラドス、バンギラス）はアーマーにより0〜1ダメージしか与えられません。絶対に使用しないでください！',
            '全員に「ものしりメガネ」または「こだわりメガネ」を装備させましょう。特殊攻撃（特攻）こそが唯一の勝利への道です。',
            '敵は特性「がんじょう」持ちです。致命傷を受けてもHP1で耐えます。あられ（ユキノオー）や火傷でトドメを刺しましょう。',
            'ボス「メガボスゴドラ」は特性「フィルター」持ち：効果抜群ダメージを25%軽減します。',
            'ルカリオは「はどうだん」（特殊技）を使う場合のみMVPとなります。',
            '高台を利用しましょう！スナイパー（インテレオン）を尾根に配置すると、広大な射程が得られます。'
        ],
        teamComposition: {
            early: ['Squirtle', 'Charmander', 'Magnemite'],
            mid: ['Wartortle', 'Charmeleon', 'Magneton', 'Haunter'],
            late: ['Blastoise (Mega)', 'Chandelure', 'Starmie', 'Magnezone', 'Lucario (Special)', 'Nidoking']
        },
        terrainAnalysis: {
            roads: [
                { description: 'ガントレット：ループのない一本の長い直線ルート', length: 'Long', chokepoints: 0 },
                { description: '洞窟の入り口：敵が密集する狭いトンネル', length: 'Short', chokepoints: 1 }
            ],
            water: [
                { description: '地下湖', type: 'Deep Water', strategicValue: 'High', benefits: ['みずタイプが攻撃力2倍'] }
            ],
            mountains: [
                { description: '鉄の尾根', height: 'Max', strategicValue: 'Critical', benefits: ['射程 +75%', 'スナイパーに最適'] },
                { description: '崖の縁', height: 'High', strategicValue: 'Very High', benefits: ['射程 +50%'] }
            ],
            grass: [
                { description: 'なし', coverage: 'Zero', benefits: ['隠密（ステルス）は使用不可'] }
            ],
            chokepoints: [
                { location: '橋', description: '湖に架かる狭い橋。敵を一網打尽にするチャンス。', priority: 'Max' },
                { location: 'ピーク', description: '拠点前の最後の登り坂。', priority: 'Medium' }
            ]
        },
        seo: {
            title: 'ポケパスTD ルート3-4攻略ガイド：メガボスゴドラとアーマー貫通戦略',
            description: 'ルート3-4の敵は物理ダメージ無効です！「特攻メタ」を学び、v1.4.1でスターミーやシャンデラを使ってメガボスゴドラを倒す方法を解説します。',
            keywords: 'pokepathtd route 3-4, beat mega aggron pokepathtd, route 3-4 guide, special attack build, armor piercing guide'
        },
        detailsHtml: `
            <div class="route-guide">
              <p>「アイアン・マウンテン」と呼ばれるルート3-4は、アップデート1.4.1で導入された中で最も難易度の高いマップです。これは、バランスの取れたチームをあえて罰するように設計された「ステータス・チェック」マップです。</p>
              <p>ここでのギミックは<strong>「ヘビーアーマー」</strong>です。出現するすべての敵（イシツブテ、イワーク、ハガネール、ボスゴドラ）は、膨大な防御ステータスを持っています。カビゴンやカイリキーのような標準的な物理チームを連れてくると、ウェーブ1で敗北するでしょう。</p>
              <p>勝つためには、<strong>「特殊攻撃（特攻）メタ」</strong>を受け入れる必要があります。魔法、ビーム、そして元素エネルギーが必要です。</p>
              
              <h3>🛡️ ボス分析：メガボスゴドラ</h3>
              <ul>
                <li><strong>HP:</strong> 高い。</li>
                <li><strong>防御:</strong> 無限。物理ダメージは99%カットされます。</li>
                <li><strong>特性：フィルター。</strong> 効果抜群の攻撃（ほのお/かくとう/じめん）によるダメージを25%軽減します。これにより、弱点をついても驚くほどタフです。</li>
                <li><strong>弱点:</strong>
                  <ul>
                    <li>特殊かくとう: (ルカリオの はどうだん)。<strong>最高の対策</strong>。</li>
                    <li>特殊ほのお: (シャンデラ / リザードンY)。</li>
                    <li>特殊じめん: (ニドキングの だいちのちから)。</li>
                  </ul>
                </li>
              </ul>
              
              <h3>🏆 「ものしりメガネ」戦略</h3>
              <p>「ちからのハチマキ」はしまってください。このルートは<strong>「ものしりメガネ」</strong>（特殊ダメージ増加）と<strong>「こだわりメガネ」</strong>（特殊ダメージ大幅増加）がすべてです。</p>
              
              <h4>1. MVP: スターミー / カメックス</h4>
              <ul>
                <li><strong>役割:</strong> ガトリングガン。</li>
                <li><strong>勝利の理由:</strong> みずタイプの攻撃はほぼ常に特殊扱いです。スターミーは圧倒的な速さと技範囲を持っています。カメックス（特にメガカメックス）は、敵の単体アーマーを無視する範囲攻撃を繰り出します。</li>
                <li><strong>配置:</strong> ダメージ2倍のボーナスを得るため「地下湖」タイルに配置。</li>
              </ul>
              
              <h4>2. タンクバスター：シャンデラ</h4>
              <ul>
                <li><strong>役割:</strong> アーマー溶かし。</li>
                <li><strong>勝利の理由:</strong> シャンデラは非伝説ポケモンの中で最高クラスの特攻ステータスを持っています。その炎の技は、はがねタイプをたやすく焼き尽くします。</li>
                <li><strong>推奨アイテム:</strong> <em>こだわりメガネ</em>。分岐道がないため、頻繁にターゲットを切り替える必要はありません。</li>
              </ul>
              
              <h4>3. 「がんじょう」カウンター：ユキノオー (あられ)</h4>
              <ul>
                <li><strong>役割:</strong> フィニッシャー。</li>
                <li><strong>勝利の理由:</strong> ここに出現する岩タイプの多くはパッシブ<strong>「がんじょう」</strong>を持っており、一撃で倒すことができません。HP1で生き残り、拠点へ侵入してきます。ユキノオーは<strong>「あられ」</strong>を降らせ、全体に微小ダメージを与え続けることで、HP1の敵を即座に一掃します。</li>
              </ul>
              
              <h3>📝 ステップバイステップ・ガイド</h3>
              <ol>
                <li><strong>ウェーブ 1-20:</strong> 生存モード。イシツブテは非常に硬いです。<strong>ゼニガメ（あわ）</strong>や<strong>ヒトカゲ（ひの粉）</strong>を使用してください。ポッポやコラッタは使わないでください。ダメージが0になります。</li>
                <li><strong>ウェーブ 21-60:</strong> アイアン・ウェーブ。ハガネールやレアコイルが登場します。ここでは<strong>シャンデラ</strong>や<strong>ニドキング</strong>が必要です。水タイプだけに頼っていると、レアコイル（電気）に全滅させられます。</li>
                <li><strong>ウェーブ 61-90:</strong> 高台の活用。ドラッグ＆ドロップ機能を使って、スナイパー（インテレオン/スターミー）を「鉄の尾根」に移動させます。射程ブーストにより、出現地点まで攻撃が届くようになります。</li>
                <li><strong>ウェーブ 100 (メガボスゴドラ):</strong> 
                  <ul>
                    <li><strong>アイテム交換:</strong> ゲームを一時停止。「しあわせタマゴ」や「たべのこし」を外します。ルカリオとシャンデラに<strong>こだわりメガネ</strong>を装備させます。</li>
                    <li><strong>ポジショニング:</strong> ルカリオを橋（チョークポイント）にドラッグします。</li>
                    <li><strong>集中攻撃:</strong> ボスゴドラの「フィルター」によりダメージが軽減されるため、圧倒的な火力が必要です。すべてのクールダウン技を即座に発動してください。</li>
                  </ul>
                </li>
              </ol>
              
              <h3>🗺️ 地形分析</h3>
              <p>ルート3-4は「ガントレット（試練）」形式のマップです。ループも迷路もなく、上から下へと続く死の直線です。</p>
              
              <h4>鉄の尾根（高台）</h4>
              <ul>
                <li><strong>効果：</strong> 配置されたタワーの射程が大幅に増加します（+75%）。</li>
                <li><strong>活用法：</strong> 道から離れる必要がある<strong>フーディン</strong>や<strong>インテレオン</strong>のような「ガラスの砲台」ユニットに最適です。</li>
              </ul>
              
              <h4>地下湖</h4>
              <ul>
                <li><strong>効果：</strong> 洞窟の中央にある水タイル。</li>
                <li><strong>活用法：</strong> みず/ひこうタイプのみ配置可能です。絶大なパワーブーストを得られるため、このマップで<strong>スターミー</strong>はSティアとなります。</li>
              </ul>
              
              <h3>⚔️ 推奨チーム編成</h3>
              <h4>「特殊部隊」チーム</h4>
              <p>拳、爪、あるいは体当たりで攻撃するポケモンは、ボックスに置いておきましょう。</p>
              <ul>
                <li><strong>シャンデラ：</strong> はがねタイプ対策に必須。</li>
                <li><strong>スターミー / カメックス：</strong> 岩/地面タイプ対策に必須。</li>
                <li><strong>ルカリオ：</strong> 特攻ビルド（はどうだん型）にする必要があります。</li>
                <li><strong>ユキノオー：</strong> パッシブの「あられ」で頑丈持ちを処理。</li>
                <li><strong>ジバコイル：</strong> はがねの敵を捕らえ（じりょく）、特殊電気ダメージを与えます。</li>
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
