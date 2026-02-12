export default [
    {
        id: 'status-effects',
        name: '状態異常',
        icon: '🛡️',
        description: '妨害 ＆ 継続ダメージ',
        tacticalUse: 'ボスのHPを削る、または移動速度の速い敵を足止めする。',
        subCategories: [
            {
                id: 'burn',
                name: '火傷',
                description: '継続的なHP減少',
                pokemon: [
                    {
                        name: 'CHARIZARD',
                        power: 485,
                        recharge: 0.74,
                        range: 165,
                        shape: 'Circle',
                        ability: '攻撃した相手を10秒間「火傷」状態にし、1秒ごとに最大HPの0.5%のダメージを与える。',
                        abilityDesc: '火傷ダメージを与える（継続的なHP減少）'
                    },
                    {
                        name: 'INFERNAPE',
                        power: 360,
                        recharge: 0.50,
                        range: 120,
                        shape: 'Circle',
                        ability: '攻撃した相手を10秒間「火傷」状態にし、1秒ごとに最大HPの0.5%のダメージを与える。',
                        abilityDesc: '火傷ダメージを与える（継続的なHP減少）'
                    },
                    {
                        name: 'TORKOAL',
                        power: 607,
                        recharge: 3.00,
                        range: 160,
                        shape: 'Circle',
                        ability: '50%の確率で相手を10秒間「火傷」状態にし、1秒ごとに最大HPの0.5%のダメージを与える。',
                        abilityDesc: '50%の確率で火傷状態にする'
                    }
                ]
            },
            {
                id: 'poison',
                name: '毒',
                description: '割合HP減少',
                pokemon: [
                    {
                        name: 'WEEZING',
                        power: 860,
                        recharge: 1.82,
                        range: 140,
                        shape: 'Circle',
                        ability: '最大2体の敵を同時に攻撃し、毒を1スタック付与する。対象は1スタックにつき毎秒0.1%のHPを失う。',
                        abilityDesc: '2体の敵を攻撃 ＋ 毒を付与'
                    },
                    {
                        name: 'ARBOK',
                        power: 670,
                        recharge: 1.50,
                        range: 120,
                        shape: 'Circle',
                        ability: '攻撃時に毒を1スタック付与する。対象は1スタックにつき毎秒0.1%のHPを失う。',
                        abilityDesc: '毒を付与（スタックごとにHP減少）'
                    },
                    {
                        name: 'ARIADOS',
                        power: 283,
                        recharge: 0.75,
                        range: 110,
                        shape: 'Circle',
                        ability: '攻撃時に毒を1スタック付与する。対象は1スタックにつき毎秒0.1%のHPを失う。',
                        abilityDesc: '毒を付与（スタックごとにHP減少）'
                    },
                    {
                        name: 'SWALOT',
                        power: 120,
                        recharge: 1.20,
                        range: 140,
                        shape: 'Circle',
                        ability: '攻撃時に毒を1スタック付与する。対象は1スタックにつき毎秒0.1%のHPを失う。',
                        abilityDesc: '毒を付与（スタックごとにHP減少）'
                    }
                ]
            },
            {
                id: 'paralyze',
                name: '麻痺',
                description: '行動不能',
                pokemon: [
                    {
                        name: 'CRYOGONAL',
                        power: 1208,
                        recharge: 1.90,
                        range: 348,
                        shape: 'X Shape',
                        ability: '30%の確率で相手を2秒間「麻痺」状態にする。',
                        abilityDesc: '30%の確率で麻痺（高ダメージ ＋ 妨害）'
                    },
                    {
                        name: 'DEWGONG',
                        power: 810,
                        recharge: 1.15,
                        range: 400,
                        shape: 'Cross',
                        ability: '30%の確率で相手を2秒間「麻痺」状態にする。',
                        abilityDesc: '30%の確率で麻痺'
                    },
                    {
                        name: 'LAPRAS',
                        power: 670,
                        recharge: 5.72,
                        range: 200,
                        shape: 'Circle',
                        ability: '30%の確率で相手を1.5秒間「麻痺」状態にする。',
                        abilityDesc: '30%の確率で麻痺'
                    },
                    {
                        name: 'AMPHAROS',
                        power: 395,
                        recharge: 3.40,
                        range: 185,
                        shape: 'Circle',
                        ability: '30%の確率で相手を1.5秒間「麻痺」状態にする。',
                        abilityDesc: '30%の確率で麻痺'
                    },
                    {
                        name: 'ELECTRODE',
                        power: 140,
                        recharge: 0.35,
                        range: 115,
                        shape: 'Circle',
                        ability: '5%の確率で相手を1.5秒間「麻痺」状態にする。',
                        abilityDesc: '5%の確率で麻痺（超高速攻撃）'
                    }
                ]
            },
            {
                id: 'slow',
                name: '減速',
                description: '移動速度の低下',
                pokemon: [
                    {
                        name: 'TANGROWTH',
                        power: 1010,
                        recharge: 1.55,
                        range: 150,
                        shape: 'Circle',
                        ability: '攻撃した相手を2秒間「減速」状態にする。',
                        abilityDesc: '攻撃により移動速度を低下（高い基礎ダメージ）'
                    },
                    {
                        name: 'WHISCASH',
                        power: 553,
                        recharge: 2.40,
                        range: 280,
                        shape: 'Circle',
                        ability: '弾丸が範囲内で爆発し、周囲の敵に半分のダメージを与え、2秒間「減速」状態にする。',
                        abilityDesc: '範囲爆発 ＋ 減速'
                    },
                    {
                        name: 'FERROTHORN',
                        power: 312,
                        recharge: 2.17,
                        range: 130,
                        shape: 'Circle',
                        ability: '攻撃した相手を2秒間「減速」状態にする。',
                        abilityDesc: '攻撃により移動速度を低下'
                    },
                    {
                        name: 'SHUCKLE',
                        power: 150,
                        recharge: 2.00,
                        range: 140,
                        shape: 'Circle',
                        ability: '攻撃した相手を2秒間「減速」状態にする。',
                        abilityDesc: '攻撃により移動速度を低下'
                    }
                ]
            },
            {
                id: 'curse',
                name: '呪い/悪夢',
                description: '特殊継続ダメージ',
                pokemon: [
                    {
                        name: 'GENGAR',
                        power: 700,
                        recharge: 1.40,
                        range: 130,
                        shape: 'Circle',
                        ability: '攻撃時に「悪夢」を1スタック付与する。1スタックにつき、このポケモンの攻撃力の20%に相当するダメージを毎秒与える。',
                        abilityDesc: '悪夢によるスタックダメージ（耐久力の高い敵に有効）'
                    },
                    {
                        name: 'COFAGRIGUS',
                        power: 440,
                        recharge: 1.90,
                        range: 250,
                        shape: 'Cross',
                        ability: '敵を「呪い」状態にし、呪われた全ての敵にダメージを与える。',
                        abilityDesc: '敵を呪い、連鎖ダメージを与える'
                    },
                    {
                        name: 'SABLEYE',
                        power: 165,
                        recharge: 0.75,
                        range: 130,
                        shape: 'Circle',
                        ability: '敵を「呪い」状態にし、呪われた全ての敵にダメージを与える。',
                        abilityDesc: '敵を呪い、連鎖ダメージを与える'
                    },
                    {
                        name: 'GIRAFARIG',
                        power: 103,
                        recharge: 2.00,
                        range: 135,
                        shape: 'Circle',
                        ability: '最大2体の敵を同時に攻撃して「呪い」状態にする。呪われた全ての敵にダメージを与える。',
                        abilityDesc: '2体攻撃 ＋ 呪い連鎖ダメージ'
                    }
                ]
            }
        ]
    },
    {
        id: 'aoe',
        name: '範囲攻撃',
        icon: '💣',
        description: '集団制御のエキスパート',
        tacticalUse: '低HPの敵が密集している群れに対処する。',
        subCategories: [
            {
                id: 'ricochet',
                name: '跳ね返り（リコシェ）',
                description: '',
                pokemon: [
                    {
                        name: 'MAROWAK',
                        power: 630,
                        recharge: 1.60,
                        range: 350,
                        shape: 'Cross',
                        ability: '攻撃が敵の間を跳ね返る（ダメージは減少する）。（最大4回）',
                        abilityDesc: '跳ね返り攻撃（4回） - 最強の物理リコシェ'
                    },
                    {
                        name: 'ARMALDO',
                        power: 420,
                        recharge: 0.90,
                        range: 115,
                        shape: 'Circle',
                        ability: 'クリティカル時の弾丸が敵の間を跳ね返る。クリティカルが続く限り跳ね返り続ける。',
                        abilityDesc: 'クリティカル時に無限リコシェ（高クリティカル率）'
                    },
                    {
                        name: 'GRENINJA',
                        power: 165,
                        recharge: 0.30,
                        range: 130,
                        shape: 'Circle',
                        ability: '攻撃が敵の間を跳ね返る（ダメージは減少する）。（最大5回）',
                        abilityDesc: '跳ね返り攻撃（5回） - 非常に速い攻撃速度'
                    }
                ]
            },
            {
                id: 'explode',
                name: '爆発/スプラッシュ',
                description: '',
                pokemon: [
                    {
                        name: 'GARDEVOIR',
                        power: 900,
                        recharge: 1.60,
                        range: 120,
                        shape: 'Circle',
                        ability: '弾丸が範囲内で爆発し、周囲の敵に半分のダメージを与え、メイン対象の状態異常を拡散させる。',
                        abilityDesc: '範囲爆発 ＋ 状態異常拡散'
                    },
                    {
                        name: 'DRUDDIGON',
                        power: 902,
                        recharge: 2.00,
                        range: 230,
                        shape: 'Circle',
                        ability: '弾丸が範囲内で爆発し、周囲の敵に半分のダメージを与える。',
                        abilityDesc: '範囲爆発ダメージ'
                    },
                    {
                        name: 'OCTILLERY',
                        power: 860,
                        recharge: 2.50,
                        range: 480,
                        shape: 'Ring',
                        ability: '弾丸が範囲内で爆発し、周囲の敵に半分のダメージを与える。',
                        abilityDesc: '範囲爆発ダメージ（超広範囲）'
                    },
                    {
                        name: 'DUNSPARCE',
                        power: 715,
                        recharge: 1.70,
                        range: 500,
                        shape: 'Cross',
                        ability: '弾丸が範囲内で爆発し、周囲の敵に半分のダメージを与え、2秒間「減速」状態にする。',
                        abilityDesc: '範囲爆発 ＋ 減速'
                    },
                    {
                        name: 'CORSOLA',
                        power: 460,
                        recharge: 1.30,
                        range: 300,
                        shape: 'Ring',
                        ability: '弾丸が範囲内で爆発し、周囲の敵に半分のダメージを与え、2秒間「減速」状態にする。',
                        abilityDesc: '範囲爆発 ＋ 減速'
                    },
                    {
                        name: 'LUCARIO',
                        power: 400,
                        recharge: 0.70,
                        range: 160,
                        shape: 'Circle',
                        ability: '弾丸が範囲内で爆発し、周囲の敵に半分のダメージを与える。',
                        abilityDesc: '範囲爆発ダメージ'
                    }
                ]
            },
            {
                id: 'multi-target',
                name: 'マルチターゲット',
                description: '',
                pokemon: [
                    {
                        name: 'LILLIGANT',
                        power: 655,
                        recharge: 1.70,
                        range: 250,
                        shape: 'Ring',
                        ability: '最大3体の敵に同時に弾丸を発射する。',
                        abilityDesc: '3体同時攻撃'
                    },
                    {
                        name: 'SANDSLASH',
                        power: 600,
                        recharge: 0.95,
                        range: 145,
                        shape: 'Circle',
                        ability: '最大2体の敵に同時に弾丸を発射する。',
                        abilityDesc: '2体同時攻撃'
                    },
                    {
                        name: 'BARBARACLE',
                        power: 460,
                        recharge: 1.73,
                        range: 140,
                        shape: 'Circle',
                        ability: '最大4体の敵に同時に弾丸を発射する。',
                        abilityDesc: '4体同時攻撃'
                    },
                    {
                        name: 'KABUTOPS',
                        power: 455,
                        recharge: 0.72,
                        range: 100,
                        shape: 'Circle',
                        ability: '最大2体の敵に同時に弾丸を発射する。',
                        abilityDesc: '2体同時攻撃'
                    },
                    {
                        name: 'CRADILY',
                        power: 410,
                        recharge: 1.92,
                        range: 160,
                        shape: 'Circle',
                        ability: 'チーム内の「カセキ」ポケモンの数だけ弾丸を発射する。攻撃は相手を2秒間「減速」状態にする。',
                        abilityDesc: 'カセキポケモンの数に応じて弾丸を発射'
                    },
                    {
                        name: 'STARAPTOR',
                        power: 250,
                        recharge: 0.70,
                        range: 280,
                        shape: 'Circle',
                        ability: '最大2体の敵に同時に弾丸を発射する。',
                        abilityDesc: '2体同時攻撃'
                    }
                ]
            }
        ]
    },
    {
        id: 'burst',
        name: 'バーストダメージ',
        icon: '⚔️',
        description: 'ボス・キラー',
        tacticalUse: '高HPや高防御のボス、またはエリート敵を瞬時に撃破する。',
        subCategories: [
            {
                id: 'pure-damage',
                name: '純粋ダメージ/クリティカル',
                description: '',
                pokemon: [
                    {
                        name: 'CLAWITZER',
                        power: 5100,
                        recharge: 6.00,
                        range: 300,
                        shape: 'Cross',
                        ability: 'クリティカル時のダメージが2倍になる。',
                        abilityDesc: 'クリティカルで2倍ダメージ - 単発火力で最高値を誇る'
                    },
                    {
                        name: 'RAMPARDOS',
                        power: 1150,
                        recharge: 1.90,
                        range: 110,
                        shape: 'Circle',
                        ability: '失ったハート（ライフ）1つにつき、ダメージが5%増加する。',
                        abilityDesc: 'HPが減少しているほどダメージが上昇'
                    },
                    {
                        name: 'WEAVILE',
                        power: 425,
                        recharge: 0.40,
                        range: 115,
                        shape: 'Circle',
                        ability: 'クリティカル時のダメージが2倍になる。',
                        abilityDesc: 'クリティカルで2倍ダメージ（超高クリティカル率）'
                    },
                    {
                        name: 'CLEFABLE',
                        power: 455,
                        recharge: 0.90,
                        range: 140,
                        shape: 'Circle',
                        ability: '星（ランク）の数だけ攻撃に追加ダメージを与える。',
                        abilityDesc: 'ランクが高いほどダメージが増加'
                    }
                ]
            },
            {
                id: 'anti-armor',
                name: 'アンチアーマー',
                description: '装甲破壊',
                pokemon: [
                    {
                        name: 'MACHAMP',
                        power: 1520,
                        recharge: 1.50,
                        range: 125,
                        shape: 'Circle',
                        ability: 'アーマー（装甲）に対して2倍のダメージを与える。',
                        abilityDesc: '装甲へのダメージ2倍 - 最強の装甲ブレイカー'
                    },
                    {
                        name: 'PRIMEAPE',
                        power: 705,
                        recharge: 0.85,
                        range: 100,
                        shape: 'Circle',
                        ability: 'アーマー（装甲）に対して2倍のダメージを与える。',
                        abilityDesc: '装甲へのダメージ2倍'
                    },
                    {
                        name: 'HAWLUCHA',
                        power: 642,
                        recharge: 0.83,
                        range: 235,
                        shape: 'Circle',
                        ability: 'アーマー（装甲）に対して2倍のダメージを与える。',
                        abilityDesc: '装甲へのダメージ2倍'
                    },
                    {
                        name: 'EXCADRILL',
                        power: 180,
                        recharge: 0.50,
                        range: 130,
                        shape: 'Circle',
                        ability: 'アーマー（装甲）に対して2倍のダメージを与える。',
                        abilityDesc: '装甲へのダメージ2倍'
                    }
                ]
            },
            {
                id: 'stacking',
                name: 'スタック強化',
                description: '',
                pokemon: [
                    {
                        name: 'NOIVERN',
                        power: 1210,
                        recharge: 1.42,
                        range: 400,
                        shape: 'Ring',
                        ability: '同じターゲットを攻撃し続けるたびに、追加ダメージが発生する。',
                        abilityDesc: '連続攻撃によりダメージが蓄積・増加'
                    },
                    {
                        name: 'SAMUROTT',
                        power: 530,
                        recharge: 0.54,
                        range: 140,
                        shape: 'Circle',
                        ability: '同じターゲットを攻撃し続けるたびに、追加ダメージが発生する。',
                        abilityDesc: '連続攻撃によりダメージが蓄積・増加'
                    },
                    {
                        name: 'ALAKAZAM',
                        power: 430,
                        recharge: 0.70,
                        range: 110,
                        shape: 'Circle',
                        ability: '可能な限り定期的にテレポートする。テレポートするたびに、次の攻撃のダメージが100%増加（スタック可能）する。',
                        abilityDesc: 'テレポートするごとに次の攻撃力が大幅に上昇'
                    },
                    {
                        name: 'ABSOL',
                        power: 335,
                        recharge: 0.37,
                        range: 130,
                        shape: 'Circle',
                        ability: '同じターゲットを攻撃し続けるたびに、追加ダメージが発生する。',
                        abilityDesc: '連続攻撃によりダメージが蓄積・増加'
                    }
                ]
            }
        ]
    },
    {
        id: 'terrain',
        name: '地形適応',
        icon: '🏔️',
        description: '地形スペシャリスト',
        tacticalUse: 'マップのタイプに合わせて選択することで、強力なボーナスを得る。',
        subCategories: [
            {
                id: 'mountain',
                name: '山（射程 2倍）',
                description: '',
                pokemon: [
                    {
                        name: 'FLYGON',
                        power: 755,
                        recharge: 1.00,
                        range: 150,
                        shape: 'Circle',
                        ability: '山に配置されている場合、射程が2倍になる。',
                        abilityDesc: '山での射程が倍増（射程 300）'
                    },
                    {
                        name: 'PIDGEOT',
                        power: 440,
                        recharge: 0.70,
                        range: 180,
                        shape: 'Circle',
                        ability: '山に配置されている場合、射程が2倍になる。',
                        abilityDesc: '山での射程が倍増（射程 360）'
                    },
                    {
                        name: 'AGGRON',
                        power: 365,
                        recharge: 2.25,
                        range: 145,
                        shape: 'Circle',
                        ability: '山に配置されている場合、射程が2倍になる。',
                        abilityDesc: '山での射程が倍増（射程 290）'
                    }
                ]
            },
            {
                id: 'water',
                name: '水（速度 2倍）',
                description: '',
                pokemon: [
                    {
                        name: 'OMASTAR',
                        power: 890,
                        recharge: 3.00,
                        range: 155,
                        shape: 'Circle',
                        ability: '水中に配置されている場合、攻撃速度が2倍になる。',
                        abilityDesc: '水中での速度が倍増（攻撃間隔 1.50秒）'
                    },
                    {
                        name: 'GOLDUCK',
                        power: 402,
                        recharge: 0.85,
                        range: 155,
                        shape: 'Circle',
                        ability: '水中に配置されている場合、攻撃速度が2倍になる。',
                        abilityDesc: '水中での速度が倍増（攻撃間隔 0.42秒）'
                    },
                    {
                        name: 'STARMIE',
                        power: 355,
                        recharge: 0.50,
                        range: 240,
                        shape: 'X Shape',
                        ability: '水中に配置されている場合、攻撃速度が2倍になる。',
                        abilityDesc: '水中での速度が倍増（攻撃間隔 0.25秒）'
                    },
                    {
                        name: 'MASQUERAIN',
                        power: 190,
                        recharge: 0.37,
                        range: 130,
                        shape: 'Circle',
                        ability: '水中に配置されている場合、攻撃速度が2倍になる。',
                        abilityDesc: '水中での速度が倍増（攻撃間隔 0.18秒）'
                    }
                ]
            },
            {
                id: 'grass',
                name: '草むら（威力 2倍）',
                description: '',
                pokemon: [
                    {
                        name: 'SCEPTILE',
                        power: 540,
                        recharge: 0.85,
                        range: 145,
                        shape: 'Circle',
                        ability: '草むらに配置されている場合、威力が2倍になる。',
                        abilityDesc: '草むらでの威力が倍増（威力 1080）'
                    },
                    {
                        name: 'MARACTUS',
                        power: 306,
                        recharge: 1.15,
                        range: 170,
                        shape: 'Circle',
                        ability: '草むらに配置されている場合、威力が2倍になる。',
                        abilityDesc: '草むらでの威力が倍増（威力 612）'
                    },
                    {
                        name: 'JUMPLUFF',
                        power: 230,
                        recharge: 0.50,
                        range: 170,
                        shape: 'Circle',
                        ability: '草むらに配置されている場合、威力が2倍になる。',
                        abilityDesc: '草むらでの威力が倍増（威力 460）'
                    }
                ]
            },
            {
                id: 'all-terrain',
                name: '全地形対応',
                description: '',
                pokemon: [
                    {
                        name: 'CASTFORM',
                        power: 501,
                        recharge: 0.90,
                        range: 150,
                        shape: 'Circle',
                        ability: '草むらでは威力が2倍、水中では速度が2倍、山では射程が2倍になる。',
                        abilityDesc: '草/水/山の各地形で異なるボーナスを得る'
                    }
                ]
            }
        ]
    },
    {
        id: 'support',
        name: 'サポート ＆ ユーティリティ',
        icon: '💊',
        description: '',
        tacticalUse: '回復、対潜伏、資金獲得、またはチームバフを提供する。',
        subCategories: [
            {
                id: 'heal',
                name: '回復',
                description: '',
                pokemon: [
                    {
                        name: 'MEGANIUM',
                        power: 920,
                        recharge: 1.70,
                        range: 130,
                        shape: 'Circle',
                        ability: '攻撃時にわずかな確率でハートを1つ回復する。',
                        abilityDesc: '攻撃時にHP（ハート1つ）回復のチャンス'
                    },
                    {
                        name: 'BRELOOM',
                        power: 825,
                        recharge: 1.55,
                        range: 110,
                        shape: 'Circle',
                        ability: '攻撃時にわずかな確率でハートを1つ回復する。',
                        abilityDesc: '攻撃時にHP（ハート1つ）回復のチャンス'
                    },
                    {
                        name: 'WHIMSICOTT',
                        power: 225,
                        recharge: 0.59,
                        range: 140,
                        shape: 'Circle',
                        ability: '攻撃時にわずかな確率でハートを1つ回復する。',
                        abilityDesc: '攻撃時にHP（ハート1つ）回復のチャンス'
                    }
                ]
            },
            {
                id: 'anti-invisible',
                name: '対潜伏（アンチ・インビジブル）',
                description: '',
                pokemon: [
                    {
                        name: 'GRUMPIG',
                        power: 690,
                        recharge: 1.10,
                        range: 140,
                        shape: 'Circle',
                        ability: '透明状態の敵に攻撃を当てることができる。',
                        abilityDesc: 'ステルス（透明）ユニットを攻撃可能'
                    },
                    {
                        name: 'XATU',
                        power: 435,
                        recharge: 0.80,
                        range: 210,
                        shape: 'Circle',
                        ability: '透明状態の敵に攻撃を当てることができる。',
                        abilityDesc: 'ステルス（透明）ユニットを攻撃可能'
                    },
                    {
                        name: 'HONCHKROW',
                        power: 365,
                        recharge: 0.69,
                        range: 190,
                        shape: 'Circle',
                        ability: '透明状態の敵に攻撃を当てることができる。',
                        abilityDesc: 'ステルス（透明）ユニットを攻撃可能'
                    }
                ]
            },
            {
                id: 'buff',
                name: 'オーラ/バフ',
                description: '',
                pokemon: [
                    {
                        name: 'FARFETCH\'D',
                        power: 207,
                        recharge: 1.00,
                        range: 130,
                        shape: 'Circle',
                        ability: '射程内にいるポケモンのクリティカルダメージを33%増加させる。',
                        abilityDesc: 'オーラ：範囲内の味方のクリティカルダメージを強化'
                    },
                    {
                        name: 'SUNFLORA',
                        power: 0,
                        recharge: 0.00,
                        range: 170,
                        shape: 'Circle',
                        ability: '射程内にいるポケモンが与えるダメージを20%増加させる。',
                        abilityDesc: 'オーラ：範囲内の味方のダメージを強化'
                    },
                    {
                        name: 'BASTIODON',
                        power: 1400,
                        recharge: 6.50,
                        range: 140,
                        shape: 'Circle',
                        ability: 'チーム内の「カセキ」ポケモンの数だけ、リチャージ時間を0.5秒短縮する。',
                        abilityDesc: 'カセキポケモンのクールタイムを短縮'
                    }
                ]
            },
            {
                id: 'special',
                name: '特殊/エコノミー',
                description: '',
                pokemon: [
                    {
                        name: 'PERSIAN',
                        power: 305,
                        recharge: 0.60,
                        range: 130,
                        shape: 'Circle',
                        ability: '攻撃時、対象の所持金の10%に相当するゴールドを獲得する。',
                        abilityDesc: '攻撃によりゴールドを獲得'
                    },
                    {
                        name: 'DITTO',
                        power: 0,
                        recharge: 0.00,
                        range: 100,
                        shape: 'Circle',
                        ability: 'パーティの1番目のポケモンに変身し、メタモンのレベルに合わせてステータスと特性をコピーする。',
                        abilityDesc: 'パーティ先頭のポケモンに変身'
                    },
                    {
                        name: 'SPINDA',
                        power: 101,
                        recharge: 0.20,
                        range: 400,
                        shape: 'Circle',
                        ability: '集中するのが苦手（攻撃がランダムになる）。',
                        abilityDesc: 'ランダム攻撃（フラフラして狙いが定まらない）'
                    }
                ]
            }
        ]
    }
]