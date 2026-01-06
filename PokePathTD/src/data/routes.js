// Route/Stage Data for PokéPath TD
// 每个地图有100关，每关有不同的小怪（不需要全写上）
// 这里只展示地图的基本信息

// 关卡数据结构：每个地图是一个大关卡，包含100个波次
export const stages = [
  {
    id: 'route-1-1',
    routeNumber: '1-1',
    name: 'ROUTE 1-1',
    mapImage: '/images/map-route/1-1.png',
    stars: 13,
    difficulty: 'Easy',
    difficultyLevel: 1,
    terrain: ['Field', 'Grass', 'Water'],
    description: 'Beginner route with a large lake in the center. Features winding paths around water obstacles.',
    totalWaves: 100,
    recommendedTypes: ['Fire', 'Flying', 'Ice'],
    recommendedPokemon: ['Charmander', 'Pidgey', 'Vulpix'],
    strategies: ['Beginner Friendly', 'Water Counter'],
    playstyle: 'Balanced',
    tips: [
      'Place Fire-type Pokémon near water areas for terrain advantage',
      'Use Flying types to cover multiple paths',
      'Focus on early game economy with low-cost units'
    ],
    teamComposition: {
      early: ['Charmander', 'Pidgey'],
      mid: ['Charmeleon', 'Pidgeotto', 'Vulpix'],
      late: ['Charizard', 'Pidgeot', 'Ninetales']
    }
  },
  
  {
    id: 'route-1-2',
    routeNumber: '1-2',
    name: 'ROUTE 1-2',
    mapImage: '/images/map-route/1-2.png',
    stars: 2,
    difficulty: 'Easy',
    difficultyLevel: 1,
    terrain: ['Field', 'Grass'],
    description: 'Grassy field with scattered trees and paths. Features crop fields and mushroom patches.',
    totalWaves: 100,
    recommendedTypes: ['Fire', 'Flying'],
    recommendedPokemon: ['Charmander', 'Pidgey'],
    strategies: ['Rush', 'Economy'],
    playstyle: 'Aggressive',
    tips: [
      'Grass terrain benefits Grass-type Pokémon',
      'Fire types excel in clearing grass areas',
      'Build economy early for late game scaling'
    ],
    teamComposition: {
      early: ['Charmander', 'Pidgey'],
      mid: ['Charmeleon', 'Pidgeotto'],
      late: ['Charizard', 'Pidgeot']
    }
  },
  
  {
    id: 'route-1-3',
    routeNumber: '1-3',
    name: 'ROUTE 1-3',
    mapImage: '/images/map-route/1-3.png',
    stars: 300,
    starsSecondary: 0,
    difficulty: 'Medium',
    difficultyLevel: 2,
    terrain: ['Field', 'Mountain'],
    description: 'Mountainous terrain with brown paths and scattered vegetation.',
    totalWaves: 100,
    recommendedTypes: ['Water', 'Grass'],
    recommendedPokemon: ['Squirtle', 'Bulbasaur'],
    strategies: ['Defensive', 'Terrain Control'],
    playstyle: 'Defensive',
    tips: [
      'Mountain terrain provides range bonuses',
      'Water types counter Fire enemies effectively',
      'Use Grass types for terrain synergy',
      'Position units at chokepoints for maximum efficiency'
    ],
    teamComposition: {
      early: ['Squirtle', 'Bulbasaur'],
      mid: ['Wartortle', 'Ivysaur'],
      late: ['Blastoise', 'Venusaur']
    }
  },
  
  {
    id: 'route-2-1',
    routeNumber: '2-1',
    name: 'ROUTE 2-1',
    mapImage: '/images/map-route/2-1.png',
    stars: 50,
    starsSecondary: 0,
    difficulty: 'Medium',
    difficultyLevel: 2,
    terrain: ['Field', 'Mountain'],
    description: 'Mountain route with challenging terrain.',
    totalWaves: 100,
    recommendedTypes: ['Water', 'Fighting'],
    recommendedPokemon: ['Squirtle', 'Machop'],
    strategies: ['Tank Frontline', 'DPS Backline'],
    playstyle: 'Balanced',
    tips: [
      'Fighting types excel in close combat',
      'Water types provide ranged support',
      'Balance tank and DPS units',
      'Use terrain advantages strategically'
    ],
    teamComposition: {
      early: ['Squirtle', 'Machop'],
      mid: ['Wartortle', 'Machoke'],
      late: ['Blastoise', 'Machamp']
    }
  },
  
  {
    id: 'route-2-2',
    routeNumber: '2-2',
    name: 'ROUTE 2-2',
    mapImage: '/images/map-route/2-2.png',
    stars: 100,
    starsSecondary: 0,
    difficulty: 'Medium',
    difficultyLevel: 2,
    terrain: ['Field', 'Water', 'Grass'],
    description: 'Mixed terrain with water and grass areas.',
    totalWaves: 100,
    recommendedTypes: ['Electric', 'Grass'],
    recommendedPokemon: ['Pikachu', 'Bulbasaur'],
    strategies: ['Type Coverage', 'Terrain Synergy'],
    playstyle: 'Versatile',
    tips: [
      'Electric types counter Water enemies',
      'Grass types benefit from terrain',
      'Mix different types for coverage',
      'Adapt team based on enemy waves'
    ],
    teamComposition: {
      early: ['Pikachu', 'Bulbasaur'],
      mid: ['Raichu', 'Ivysaur'],
      late: ['Raichu', 'Venusaur']
    }
  },
  
  {
    id: 'route-2-3',
    routeNumber: '2-3',
    name: 'ROUTE 2-3',
    mapImage: '/images/map-route/2-3.png',
    stars: 500,
    starsSecondary: 0,
    difficulty: 'Hard',
    difficultyLevel: 3,
    terrain: ['Field', 'Mountain'],
    description: 'Challenging mountain route with complex paths.',
    totalWaves: 100,
    recommendedTypes: ['Water', 'Rock'],
    recommendedPokemon: ['Squirtle', 'Geodude'],
    strategies: ['Tank Heavy', 'Sustain'],
    playstyle: 'Defensive',
    tips: [
      'Rock types provide excellent defense',
      'Water types for consistent DPS',
      'Focus on tanky units for survival',
      'Position units at strategic chokepoints'
    ],
    teamComposition: {
      early: ['Squirtle', 'Geodude'],
      mid: ['Wartortle', 'Graveler'],
      late: ['Blastoise', 'Golem']
    }
  },
  
  {
    id: 'route-3-1',
    routeNumber: '3-1',
    name: 'ROUTE 3-1',
    mapImage: '/images/map-route/3-1.png',
    stars: 200,
    starsSecondary: 0,
    difficulty: 'Hard',
    difficultyLevel: 3,
    terrain: ['Field', 'Grass'],
    description: 'Advanced route with dense vegetation.',
    totalWaves: 100,
    recommendedTypes: ['Fire', 'Flying'],
    recommendedPokemon: ['Charmander', 'Pidgeot'],
    strategies: ['Burst Damage', 'AOE Clear'],
    playstyle: 'Aggressive',
    tips: [
      'Fire types excel against Grass terrain',
      'Flying types provide area coverage',
      'Focus on high DPS units',
      'Clear waves quickly before they stack'
    ],
    teamComposition: {
      early: ['Charmander', 'Pidgey'],
      mid: ['Charmeleon', 'Pidgeotto'],
      late: ['Charizard', 'Pidgeot']
    }
  },
  
  {
    id: 'route-3-2',
    routeNumber: '3-2',
    name: 'ROUTE 3-2',
    mapImage: '/images/map-route/3-2.png',
    stars: 400,
    starsSecondary: 0,
    difficulty: 'Hard',
    difficultyLevel: 3,
    terrain: ['Field', 'Grass', 'Mountain'],
    description: 'Mixed terrain route with strategic chokepoints.',
    totalWaves: 100,
    recommendedTypes: ['Water', 'Electric'],
    recommendedPokemon: ['Squirtle', 'Pikachu'],
    strategies: ['Control', 'Positioning'],
    playstyle: 'Tactical',
    tips: [
      'Use chokepoints to maximize damage',
      'Electric types for burst damage',
      'Water types for sustained DPS',
      'Position units strategically at key points'
    ],
    teamComposition: {
      early: ['Squirtle', 'Pikachu'],
      mid: ['Wartortle', 'Raichu'],
      late: ['Blastoise', 'Raichu']
    }
  },
  
  {
    id: 'route-3-3',
    routeNumber: '3-3',
    name: 'ROUTE 3-3',
    mapImage: '/images/map-route/3-3.png',
    stars: 600,
    starsSecondary: 0,
    difficulty: 'Very Hard',
    difficultyLevel: 4,
    terrain: ['Field', 'Grass', 'Mountain', 'Water'],
    description: 'Ultimate challenge route with all terrain types.',
    totalWaves: 100,
    recommendedTypes: ['All Types'],
    recommendedPokemon: ['Any Maxed Pokémon'],
    strategies: ['Max Level', 'Full Coverage', 'Meta Team'],
    playstyle: 'Elite',
    tips: [
      'Requires max level Pokémon (Level 100)',
      'Use diverse type coverage',
      'Optimize team composition for all terrains',
      'Focus on highest DPS Pokémon',
      'Perfect positioning is crucial'
    ],
    teamComposition: {
      early: ['Any Level 1-50'],
      mid: ['Any Level 50-80'],
      late: ['Level 100 Meta Pokémon']
    }
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
