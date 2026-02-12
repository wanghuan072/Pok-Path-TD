export default [
    {
        id: 'status-effects',
        name: '상태 이상',
        icon: '🛡️',
        description: '제어 및 지속 데미지(DoT)',
        tacticalUse: '보스의 HP를 약화시키거나 이동 속도가 빠른 적을 저지합니다.',
        subCategories: [
            {
                id: 'burn',
                name: '화상',
                description: '지속적인 HP 감소',
                pokemon: [
                    {
                        name: 'CHARIZARD',
                        power: 485,
                        recharge: 0.74,
                        range: 165,
                        shape: 'Circle',
                        ability: '공격 시 대상을 10초 동안 화상 상태로 만들며, 매초 최대 체력의 0.5%를 잃게 합니다.',
                        abilityDesc: '화상 데미지 부여 (지속적인 HP 감소)'
                    },
                    {
                        name: 'INFERNAPE',
                        power: 360,
                        recharge: 0.50,
                        range: 120,
                        shape: 'Circle',
                        ability: '공격 시 대상을 10초 동안 화상 상태로 만들며, 매초 최대 체력의 0.5%를 잃게 합니다.',
                        abilityDesc: '화상 데미지 부여 (지속적인 HP 감소)'
                    },
                    {
                        name: 'TORKOAL',
                        power: 607,
                        recharge: 3.00,
                        range: 160,
                        shape: 'Circle',
                        ability: '공격 시 50% 확률로 대상을 10초 동안 화상 상태로 만들며, 매초 0.5%의 HP를 잃게 합니다.',
                        abilityDesc: '50% 확률로 화상 부여'
                    }
                ]
            },
            {
                id: 'poison',
                name: '독',
                description: '비율 기반 HP 감소',
                pokemon: [
                    {
                        name: 'WEEZING',
                        power: 860,
                        recharge: 1.82,
                        range: 140,
                        shape: 'Circle',
                        ability: '최대 2마리의 적에게 발사체를 발사하고 독을 1중첩 적용합니다. 대상은 중첩당 매초 0.1%의 체력을 잃습니다.',
                        abilityDesc: '적 2마리 공격 + 독 부여'
                    },
                    {
                        name: 'ARBOK',
                        power: 670,
                        recharge: 1.50,
                        range: 120,
                        shape: 'Circle',
                        ability: '공격 시 독을 1중첩 적용합니다. 대상은 중첩당 매초 0.1%의 체력을 잃습니다.',
                        abilityDesc: '독 부여 (중첩당 체력 감소)'
                    },
                    {
                        name: 'ARIADOS',
                        power: 283,
                        recharge: 0.75,
                        range: 110,
                        shape: 'Circle',
                        ability: '공격 시 독을 1중첩 적용합니다. 대상은 중첩당 매초 0.1%의 체력을 잃습니다.',
                        abilityDesc: '독 부여 (중첩당 체력 감소)'
                    },
                    {
                        name: 'SWALOT',
                        power: 120,
                        recharge: 1.20,
                        range: 140,
                        shape: 'Circle',
                        ability: '공격 시 독을 1중첩 적용합니다. 대상은 중첩당 매초 0.1%의 체력을 잃습니다.',
                        abilityDesc: '독 부여 (중첩당 체력 감소)'
                    }
                ]
            },
            {
                id: 'paralyze',
                name: '마비',
                description: '행동 불가',
                pokemon: [
                    {
                        name: 'CRYOGONAL',
                        power: 1208,
                        recharge: 1.90,
                        range: 348,
                        shape: 'X Shape',
                        ability: '공격 시 30% 확률로 대상을 2초 동안 마비시킵니다.',
                        abilityDesc: '30% 확률로 마비 (높은 데미지 + 군중 제어)'
                    },
                    {
                        name: 'DEWGONG',
                        power: 810,
                        recharge: 1.15,
                        range: 400,
                        shape: 'Cross',
                        ability: '공격 시 30% 확률로 대상을 2초 동안 마비시킵니다.',
                        abilityDesc: '30% 확률로 마비'
                    },
                    {
                        name: 'LAPRAS',
                        power: 670,
                        recharge: 5.72,
                        range: 200,
                        shape: 'Circle',
                        ability: '공격 시 30% 확률로 대상을 1.5초 동안 마비시킵니다.',
                        abilityDesc: '30% 확률로 마비'
                    },
                    {
                        name: 'AMPHAROS',
                        power: 395,
                        recharge: 3.40,
                        range: 185,
                        shape: 'Circle',
                        ability: '공격 시 30% 확률로 대상을 1.5초 동안 마비시킵니다.',
                        abilityDesc: '30% 확률로 마비'
                    },
                    {
                        name: 'ELECTRODE',
                        power: 140,
                        recharge: 0.35,
                        range: 115,
                        shape: 'Circle',
                        ability: '공격 시 5% 확률로 대상을 1.5초 동안 마비시킵니다.',
                        abilityDesc: '5% 확률로 마비 (초고속 공격 속도)'
                    }
                ]
            },
            {
                id: 'slow',
                name: '감속',
                description: '이동 속도 감소',
                pokemon: [
                    {
                        name: 'TANGROWTH',
                        power: 1010,
                        recharge: 1.55,
                        range: 150,
                        shape: 'Circle',
                        ability: '공격 시 대상을 2초 동안 둔화시킵니다.',
                        abilityDesc: '공격 시 둔화 부여 (높은 기본 데미지)'
                    },
                    {
                        name: 'WHISCASH',
                        power: 553,
                        recharge: 2.40,
                        range: 280,
                        shape: 'Circle',
                        ability: '발사체가 범위 내에서 폭발하며 주변 적들에게 절반의 데미지를 입히고 2초 동안 둔화시킵니다.',
                        abilityDesc: '범위 폭발 + 둔화'
                    },
                    {
                        name: 'FERROTHORN',
                        power: 312,
                        recharge: 2.17,
                        range: 130,
                        shape: 'Circle',
                        ability: '공격 시 대상을 2초 동안 둔화시킵니다.',
                        abilityDesc: '공격 시 둔화 부여'
                    },
                    {
                        name: 'SHUCKLE',
                        power: 150,
                        recharge: 2.00,
                        range: 140,
                        shape: 'Circle',
                        ability: '공격 시 대상을 2초 동안 둔화시킵니다.',
                        abilityDesc: '공격 시 둔화 부여'
                    }
                ]
            },
            {
                id: 'curse',
                name: '저주/악몽',
                description: '특수 지속 데미지',
                pokemon: [
                    {
                        name: 'GENGAR',
                        power: 700,
                        recharge: 1.40,
                        range: 130,
                        shape: 'Circle',
                        ability: '공격 시 악몽을 1중첩 적용합니다. 중첩당 매초 이 포켓몬 위력의 20%만큼 데미지를 입힙니다.',
                        abilityDesc: '악몽 중첩 데미지 (탱커형 적에게 효과적)'
                    },
                    {
                        name: 'COFAGRIGUS',
                        power: 440,
                        recharge: 1.90,
                        range: 250,
                        shape: 'Cross',
                        ability: '적에게 저주를 걸고 모든 저주받은 적들에게 데미지를 입힙니다.',
                        abilityDesc: '저주 부여 및 연쇄 데미지'
                    },
                    {
                        name: 'SABLEYE',
                        power: 165,
                        recharge: 0.75,
                        range: 130,
                        shape: 'Circle',
                        ability: '적에게 저주를 걸고 모든 저주받은 적들에게 데미지를 입힙니다.',
                        abilityDesc: '저주 부여 및 연쇄 데미지'
                    },
                    {
                        name: 'GIRAFARIG',
                        power: 103,
                        recharge: 2.00,
                        range: 135,
                        shape: 'Circle',
                        ability: '최대 2마리의 적에게 발사체를 쏘아 저주를 겁니다. 모든 저주받은 적들에게 데미지를 입힙니다.',
                        abilityDesc: '적 2마리 공격 + 저주 연쇄 데미지'
                    }
                ]
            }
        ]
    },
    {
        id: 'aoe',
        name: '범위 공격',
        icon: '💣',
        description: '다수의 적 제어 전문가',
        tacticalUse: '체력이 낮은 다수의 적을 처리하는 데 효과적입니다.',
        subCategories: [
            {
                id: 'ricochet',
                name: '도탄',
                description: '',
                pokemon: [
                    {
                        name: 'MAROWAK',
                        power: 630,
                        recharge: 1.60,
                        range: 350,
                        shape: 'Cross',
                        ability: '공격이 적들 사이를 튕겨 다니며 감소된 데미지를 입힙니다. (4회 도탄)',
                        abilityDesc: '도탄 공격 (4회) - 가장 강력한 물리 도탄'
                    },
                    {
                        name: 'ARMALDO',
                        power: 420,
                        recharge: 0.90,
                        range: 115,
                        shape: 'Circle',
                        ability: '치명타 발사체가 적들 사이를 튕기며, 치명타가 유지되는 한 계속해서 도탄됩니다.',
                        abilityDesc: '치명타 시 무한 도탄 (높은 치명타율)'
                    },
                    {
                        name: 'GRENINJA',
                        power: 165,
                        recharge: 0.30,
                        range: 130,
                        shape: 'Circle',
                        ability: '공격이 적들 사이를 튕겨 다니며 감소된 데미지를 입힙니다. (5회 도탄)',
                        abilityDesc: '도탄 공격 (5회) - 매우 빠른 공격 속도'
                    }
                ]
            },
            {
                id: 'explode',
                name: '폭발/스플래시',
                description: '',
                pokemon: [
                    {
                        name: 'GARDEVOIR',
                        power: 900,
                        recharge: 1.60,
                        range: 120,
                        shape: 'Circle',
                        ability: '발사체가 범위 내에서 폭발하며 주변 적들에게 절반의 데미지를 입히고 주 대상의 효과(prejudices)를 퍼뜨립니다.',
                        abilityDesc: '범위 폭발 + 효과 전이'
                    },
                    {
                        name: 'DRUDDIGON',
                        power: 902,
                        recharge: 2.00,
                        range: 230,
                        shape: 'Circle',
                        ability: '발사체가 범위 내에서 폭발하여 주변 적들에게 절반의 데미지를 입힙니다.',
                        abilityDesc: '범위 폭발 데미지'
                    },
                    {
                        name: 'OCTILLERY',
                        power: 860,
                        recharge: 2.50,
                        range: 480,
                        shape: 'Ring',
                        ability: '발사체가 범위 내에서 폭발하여 주변 적들에게 절반의 데미지를 입힙니다.',
                        abilityDesc: '범위 폭발 데미지 (광활한 사거리)'
                    },
                    {
                        name: 'DUNSPARCE',
                        power: 715,
                        recharge: 1.70,
                        range: 500,
                        shape: 'Cross',
                        ability: '발사체가 범위 내에서 폭발하며 주변 적들에게 절반의 데미지를 입히고 2초 동안 둔화시킵니다.',
                        abilityDesc: '범위 폭발 + 둔화'
                    },
                    {
                        name: 'CORSOLA',
                        power: 460,
                        recharge: 1.30,
                        range: 300,
                        shape: 'Ring',
                        ability: '발사체가 범위 내에서 폭발하며 주변 적들에게 절반의 데미지를 입히고 2초 동안 둔화시킵니다.',
                        abilityDesc: '범위 폭발 + 둔화'
                    },
                    {
                        name: 'LUCARIO',
                        power: 400,
                        recharge: 0.70,
                        range: 160,
                        shape: 'Circle',
                        ability: '발사체가 범위 내에서 폭발하여 주변 적들에게 절반의 데미지를 입힙니다.',
                        abilityDesc: '범위 폭발 데미지'
                    }
                ]
            },
            {
                id: 'multi-target',
                name: '다중 타겟',
                description: '',
                pokemon: [
                    {
                        name: 'LILLIGANT',
                        power: 655,
                        recharge: 1.70,
                        range: 250,
                        shape: 'Ring',
                        ability: '동시에 최대 3마리의 적에게 발사체를 발사합니다.',
                        abilityDesc: '동시 3인 공격'
                    },
                    {
                        name: 'SANDSLASH',
                        power: 600,
                        recharge: 0.95,
                        range: 145,
                        shape: 'Circle',
                        ability: '동시에 최대 2마리의 적에게 발사체를 발사합니다.',
                        abilityDesc: '동시 2인 공격'
                    },
                    {
                        name: 'BARBARACLE',
                        power: 460,
                        recharge: 1.73,
                        range: 140,
                        shape: 'Circle',
                        ability: '동시에 최대 4마리의 적에게 발사체를 발사합니다.',
                        abilityDesc: '동시 4인 공격'
                    },
                    {
                        name: 'KABUTOPS',
                        power: 455,
                        recharge: 0.72,
                        range: 100,
                        shape: 'Circle',
                        ability: '동시에 최대 2마리의 적에게 발사체를 발사합니다.',
                        abilityDesc: '동시 2인 공격'
                    },
                    {
                        name: 'CRADILY',
                        power: 410,
                        recharge: 1.92,
                        range: 160,
                        shape: 'Circle',
                        ability: '팀 내 "카세키(화석)" 포켓몬 수만큼 발사체를 발사합니다. 공격 시 대상을 2초 동안 둔화시킵니다.',
                        abilityDesc: '화석 팀원 수에 비례한 발사체 발사'
                    },
                    {
                        name: 'STARAPTOR',
                        power: 250,
                        recharge: 0.70,
                        range: 280,
                        shape: 'Circle',
                        ability: '동시에 최대 2마리의 적에게 발사체를 발사합니다.',
                        abilityDesc: '동시 2인 공격'
                    }
                ]
            }
        ]
    },
    {
        id: 'burst',
        name: '폭발적 데미지',
        icon: '⚔️',
        description: '보스 킬러',
        tacticalUse: '높은 HP와 방어력을 가진 보스나 엘리트 적을 즉시 처치합니다.',
        subCategories: [
            {
                id: 'pure-damage',
                name: '고정 데미지/치명타',
                description: '',
                pokemon: [
                    {
                        name: 'CLAWITZER',
                        power: 5100,
                        recharge: 6.00,
                        range: 300,
                        shape: 'Cross',
                        ability: '치명타 발생 시 데미지가 2배로 적용됩니다.',
                        abilityDesc: '치명타 시 데미지 2배 - 단일 공격 중 가장 강력한 데미지'
                    },
                    {
                        name: 'RAMPARDOS',
                        power: 1150,
                        recharge: 1.90,
                        range: 110,
                        shape: 'Circle',
                        ability: '잃은 하트 하나당 데미지가 5%씩 증가합니다.',
                        abilityDesc: 'HP를 많이 잃을수록 더 강한 데미지 부여'
                    },
                    {
                        name: 'WEAVILE',
                        power: 425,
                        recharge: 0.40,
                        range: 115,
                        shape: 'Circle',
                        ability: '치명타 발생 시 데미지가 2배로 적용됩니다.',
                        abilityDesc: '치명타 시 데미지 2배 (매우 높은 치명타율)'
                    },
                    {
                        name: 'CLEFABLE',
                        power: 455,
                        recharge: 0.90,
                        range: 140,
                        shape: 'Circle',
                        ability: '보유한 스타(별) 개수당 1의 추가 데미지를 입힙니다.',
                        abilityDesc: '스타 개수에 비례하여 데미지 증가'
                    }
                ]
            },
            {
                id: 'anti-armor',
                name: '방어 관통',
                description: '아머 브레이커',
                pokemon: [
                    {
                        name: 'MACHAMP',
                        power: 1520,
                        recharge: 1.50,
                        range: 125,
                        shape: 'Circle',
                        ability: '방어력이 있는 대상에게 2배의 데미지를 입힙니다.',
                        abilityDesc: '아머 대상 2배 데미지 - 최강의 아머 브레이커'
                    },
                    {
                        name: 'PRIMEAPE',
                        power: 705,
                        recharge: 0.85,
                        range: 100,
                        shape: 'Circle',
                        ability: '방어력이 있는 대상에게 2배의 데미지를 입힙니다.',
                        abilityDesc: '아머 대상 2배 데미지'
                    },
                    {
                        name: 'HAWLUCHA',
                        power: 642,
                        recharge: 0.83,
                        range: 235,
                        shape: 'Circle',
                        ability: '방어력이 있는 대상에게 2배의 데미지를 입힙니다.',
                        abilityDesc: '아머 대상 2배 데미지'
                    },
                    {
                        name: 'EXCADRILL',
                        power: 180,
                        recharge: 0.50,
                        range: 130,
                        shape: 'Circle',
                        ability: '방어력이 있는 대상에게 2배의 데미지를 입힙니다.',
                        abilityDesc: '아머 대상 2배 데미지'
                    }
                ]
            },
            {
                id: 'stacking',
                name: '중첩형 데미지',
                description: '',
                pokemon: [
                    {
                        name: 'NOIVERN',
                        power: 1210,
                        recharge: 1.42,
                        range: 400,
                        shape: 'Ring',
                        ability: '동일한 대상을 공격할 때마다 추가 데미지를 입힙니다.',
                        abilityDesc: '동일 대상 연속 공격 시 데미지 증가'
                    },
                    {
                        name: 'SAMUROTT',
                        power: 530,
                        recharge: 0.54,
                        range: 140,
                        shape: 'Circle',
                        ability: '동일한 대상을 공격할 때마다 추가 데미지를 입힙니다.',
                        abilityDesc: '동일 대상 연속 공격 시 데미지 증가'
                    },
                    {
                        name: 'ALAKAZAM',
                        power: 430,
                        recharge: 0.70,
                        range: 110,
                        shape: 'Circle',
                        ability: '주기적으로 순간이동을 사용합니다. 순간이동할 때마다 다음 공격의 데미지가 100%씩 중첩되어 증가합니다.',
                        abilityDesc: '순간이동 시 다음 공격 데미지 대폭 증가'
                    },
                    {
                        name: 'ABSOL',
                        power: 335,
                        recharge: 0.37,
                        range: 130,
                        shape: 'Circle',
                        ability: '동일한 대상을 공격할 때마다 추가 데미지를 입힙니다.',
                        abilityDesc: '동일 대상 연속 공격 시 데미지 증가'
                    }
                ]
            }
        ]
    },
    {
        id: 'terrain',
        name: '지형 적응',
        icon: '🏔️',
        description: '지형 전문가',
        tacticalUse: '맵의 특성에 맞춰 배치하여 막대한 보너스 효과를 얻습니다.',
        subCategories: [
            {
                id: 'mountain',
                name: '산악 (사거리 2배)',
                description: '',
                pokemon: [
                    {
                        name: 'FLYGON',
                        power: 755,
                        recharge: 1.00,
                        range: 150,
                        shape: 'Circle',
                        ability: '산악 지형에 배치될 경우 사거리가 2배로 증가합니다.',
                        abilityDesc: '산악 사거리 2배 증가 (사거리 300)'
                    },
                    {
                        name: 'PIDGEOT',
                        power: 440,
                        recharge: 0.70,
                        range: 180,
                        shape: 'Circle',
                        ability: '산악 지형에 배치될 경우 사거리가 2배로 증가합니다.',
                        abilityDesc: '산악 사거리 2배 증가 (사거리 360)'
                    },
                    {
                        name: 'AGGRON',
                        power: 365,
                        recharge: 2.25,
                        range: 145,
                        shape: 'Circle',
                        ability: '산악 지형에 배치될 경우 사거리가 2배로 증가합니다.',
                        abilityDesc: '산악 사거리 2배 증가 (사거리 290)'
                    }
                ]
            },
            {
                id: 'water',
                name: '물 (공격 속도 2배)',
                description: '',
                pokemon: [
                    {
                        name: 'OMASTAR',
                        power: 890,
                        recharge: 3.00,
                        range: 155,
                        shape: 'Circle',
                        ability: '물 지형에 배치될 경우 공격 속도가 2배로 증가합니다.',
                        abilityDesc: '물 공격 속도 2배 증가 (공격 간격 1.50초)'
                    },
                    {
                        name: 'GOLDUCK',
                        power: 402,
                        recharge: 0.85,
                        range: 155,
                        shape: 'Circle',
                        ability: '물 지형에 배치될 경우 공격 속도가 2배로 증가합니다.',
                        abilityDesc: '물 공격 속도 2배 증가 (공격 간격 0.42초)'
                    },
                    {
                        name: 'STARMIE',
                        power: 355,
                        recharge: 0.50,
                        range: 240,
                        shape: 'X Shape',
                        ability: '물 지형에 배치될 경우 공격 속도가 2배로 증가합니다.',
                        abilityDesc: '물 공격 속도 2배 증가 (공격 간격 0.25초)'
                    },
                    {
                        name: 'MASQUERAIN',
                        power: 190,
                        recharge: 0.37,
                        range: 130,
                        shape: 'Circle',
                        ability: '물 지형에 배치될 경우 공격 속도가 2배로 증가합니다.',
                        abilityDesc: '물 공격 속도 2배 증가 (공격 간격 0.18초)'
                    }
                ]
            },
            {
                id: 'grass',
                name: '풀숲 (위력 2배)',
                description: '',
                pokemon: [
                    {
                        name: 'SCEPTILE',
                        power: 540,
                        recharge: 0.85,
                        range: 145,
                        shape: 'Circle',
                        ability: '풀숲 지형에 배치될 경우 위력이 2배로 증가합니다.',
                        abilityDesc: '풀숲 위력 2배 증가 (위력 1080)'
                    },
                    {
                        name: 'MARACTUS',
                        power: 306,
                        recharge: 1.15,
                        range: 170,
                        shape: 'Circle',
                        ability: '풀숲 지형에 배치될 경우 위력이 2배로 증가합니다.',
                        abilityDesc: '풀숲 위력 2배 증가 (위력 612)'
                    },
                    {
                        name: 'JUMPLUFF',
                        power: 230,
                        recharge: 0.50,
                        range: 170,
                        shape: 'Circle',
                        ability: '풀숲 지형에 배치될 경우 위력이 2배로 증가합니다.',
                        abilityDesc: '풀숲 위력 2배 증가 (위력 460)'
                    }
                ]
            },
            {
                id: 'all-terrain',
                name: '범용 지형',
                description: '',
                pokemon: [
                    {
                        name: 'CASTFORM',
                        power: 501,
                        recharge: 0.90,
                        range: 150,
                        shape: 'Circle',
                        ability: '풀숲에서는 위력이 2배, 물에서는 공격 속도가 2배, 산악에서는 사거리가 2배로 증가합니다.',
                        abilityDesc: '풀숲/물/산악 지형별 각각의 보너스 획득'
                    }
                ]
            }
        ]
    },
    {
        id: 'support',
        name: '지원 및 유틸리티',
        icon: '💊',
        description: '',
        tacticalUse: '회복, 은신 감지, 경제적 지원 또는 팀 버프를 제공합니다.',
        subCategories: [
            {
                id: 'heal',
                name: '회복',
                description: '',
                pokemon: [
                    {
                        name: 'MEGANIUM',
                        power: 920,
                        recharge: 1.70,
                        range: 130,
                        shape: 'Circle',
                        ability: '공격 시 낮은 확률로 하트를 1개 회복합니다.',
                        abilityDesc: '공격 시 낮은 확률로 HP(하트 1개) 회복'
                    },
                    {
                        name: 'BRELOOM',
                        power: 825,
                        recharge: 1.55,
                        range: 110,
                        shape: 'Circle',
                        ability: '공격 시 낮은 확률로 하트를 1개 회복합니다.',
                        abilityDesc: '공격 시 낮은 확률로 HP(하트 1개) 회복'
                    },
                    {
                        name: 'WHIMSICOTT',
                        power: 225,
                        recharge: 0.59,
                        range: 140,
                        shape: 'Circle',
                        ability: '공격 시 낮은 확률로 하트를 1개 회복합니다.',
                        abilityDesc: '공격 시 낮은 확률로 HP(하트 1개) 회복'
                    }
                ]
            },
            {
                id: 'anti-invisible',
                name: '은신 감지',
                description: '',
                pokemon: [
                    {
                        name: 'GRUMPIG',
                        power: 690,
                        recharge: 1.10,
                        range: 140,
                        shape: 'Circle',
                        ability: '투명 상태인 적을 타격할 수 있습니다.',
                        abilityDesc: '은신 유닛 공격 가능'
                    },
                    {
                        name: 'XATU',
                        power: 435,
                        recharge: 0.80,
                        range: 210,
                        shape: 'Circle',
                        ability: '투명 상태인 적을 타격할 수 있습니다.',
                        abilityDesc: '은신 유닛 공격 가능'
                    },
                    {
                        name: 'HONCHKROW',
                        power: 365,
                        recharge: 0.69,
                        range: 190,
                        shape: 'Circle',
                        ability: '투명 상태인 적을 타격할 수 있습니다.',
                        abilityDesc: '은신 유닛 공격 가능'
                    }
                ]
            },
            {
                id: 'buff',
                name: '오라/버프',
                description: '',
                pokemon: [
                    {
                        name: 'FARFETCH\'D',
                        power: 207,
                        recharge: 1.00,
                        range: 130,
                        shape: 'Circle',
                        ability: '범위 내에 있는 포켓몬의 치명타 데미지를 33% 증가시킵니다.',
                        abilityDesc: '오라: 범위 내 아군의 치명타 데미지 증가'
                    },
                    {
                        name: 'SUNFLORA',
                        power: 0,
                        recharge: 0.00,
                        range: 170,
                        shape: 'Circle',
                        ability: '범위 내에 있는 포켓몬이 입히는 데미지를 20% 증가시킵니다.',
                        abilityDesc: '오라: 주변 아군의 데미지 증가'
                    },
                    {
                        name: 'BASTIODON',
                        power: 1400,
                        recharge: 6.50,
                        range: 140,
                        shape: 'Circle',
                        ability: '팀 내 "카세키(화석)" 포켓몬 한 마리당 재충전 시간을 0.5초씩 단축합니다.',
                        abilityDesc: '화석 팀원의 쿨타임 단축'
                    }
                ]
            },
            {
                id: 'special',
                name: '특수/경제',
                description: '',
                pokemon: [
                    {
                        name: 'PERSIAN',
                        power: 305,
                        recharge: 0.60,
                        range: 130,
                        shape: 'Circle',
                        ability: '공격 시 대상 골드의 10%에 해당하는 금액을 획득합니다.',
                        abilityDesc: '공격 시 골드 획득'
                    },
                    {
                        name: 'DITTO',
                        power: 0,
                        recharge: 0.00,
                        range: 100,
                        shape: 'Circle',
                        ability: '파티의 첫 번째 포켓몬으로 변신하여, 메타몽의 레벨에 맞춰 조정된 능력치와 기술을 복사합니다.',
                        abilityDesc: '파티 첫 번째 포켓몬으로 변신'
                    },
                    {
                        name: 'SPINDA',
                        power: 101,
                        recharge: 0.20,
                        range: 400,
                        shape: 'Circle',
                        ability: '집중하는 데 어려움이 있습니다.',
                        abilityDesc: '무작위 공격 (집중력 부족)'
                    }
                ]
            }
        ]
    }
]