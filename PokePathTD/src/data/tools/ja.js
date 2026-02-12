export const tools = [
    {
        id: 1,
        icon: '⚡',
        title: 'DPS計算機',
        description:
            'ポケモンの一秒あたりのダメージ（DPS）を計算し比較します。威力、リチャージ時間、急所率を分析して、最強のアタッカーを見つけ出しましょう。',
        path: '/tools/dps-calculator',
        features: ['基礎DPS', '期待DPS', 'ポケモン比較', '急所分析'],
    },
    {
        id: 2,
        icon: '📋',
        title: 'ポケモンカテゴリー',
        description:
            '戦術的なカテゴリーごとにポケモンを閲覧できます。状態異常、範囲攻撃（AOE）、バーストダメージ、サポート役など、専門特化したポケモンを探せます。',
        path: '/tools/pokemon-categories',
        features: ['状態異常', '範囲攻撃', 'バーストダメージ', '地形', 'サポート'],
    },
    {
        id: 3,
        icon: '⚔️',
        title: 'エネミーカウンター',
        description:
            '特定の敵に対する最適な対策ポケモンを検索します。耐性を分析し、DPS計算に基づいたパーソナライズされた推奨情報を取得できます。',
        path: '/tools/enemy-counter',
        features: ['エネミー検索', '耐性分析', '対策推奨', 'DPSベース'],
    },
    {
        id: 4,
        icon: '🗺️',
        title: 'ルート戦略',
        description:
            '各マップルートに合わせてチーム編成を最適化します。推奨されるポケモンのタイプ、地形の利点、戦略的なヒントを確認できます。',
        path: '/tools/route-strategy',
        features: ['ルート選択', 'チーム編成', '地形分析', '戦略的ヒント'],
    }
]
