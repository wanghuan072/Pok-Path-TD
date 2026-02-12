export const tools = [
    {
        id: 1,
        icon: '⚡',
        title: 'DPS 계산기',
        description:
            '포켓몬의 초당 데미지(DPS)를 계산하고 비교합니다. 위력, 재충전 시간, 치명타율을 분석하여 최고의 딜러를 찾아보세요.',
        path: '/tools/dps-calculator',
        features: ['기본 DPS', '기대 DPS', '포켓몬 비교', '치명타 분석'],
    },
    {
        id: 2,
        icon: '📋',
        title: '포켓몬 카테고리',
        description:
            '전술적 카테고리별로 포켓몬을 탐색합니다. 상태 이상, 광역(AOE) 공격, 폭발적 데미지 및 서포트 역할에 특화된 포켓몬을 확인하세요.',
        path: '/tools/pokemon-categories',
        features: ['상태 이상', '광역 공격', '폭발적 데미지', '지형', '서포트'],
    },
    {
        id: 3,
        icon: '⚔️',
        title: '적 카운터',
        description:
            '특정 적을 상대하기 위한 최적의 포켓몬을 찾습니다. 내성을 분석하고 DPS 계산을 바탕으로 맞춤형 추천을 받아보세요.',
        path: '/tools/enemy-counter',
        features: ['적 검색', '내성 분석', '카운터 추천', 'DPS 기반'],
    },
    {
        id: 4,
        icon: '🗺️',
        title: '경로 전략',
        description:
            '각 맵 경로에 맞춰 팀 구성을 최적화합니다. 추천 포켓몬 타입, 지형 이점 및 전략적 팁을 제공합니다.',
        path: '/tools/route-strategy',
        features: ['경로 선택', '팀 구성', '지형 분석', '전략적 팁'],
    }
]
