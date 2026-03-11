// Chaos Obby - Modifiers Library (100+ Buffs & Debuffs)
// Modifiers for dynamic gameplay variations

export const modifiers = {
  buffs: [
    // Speed & Movement Buffs
    { id: 1, nameEn: 'Lightning Rush', namePt: 'Rajada Relâmpago', descEn: '+50% movement speed', descPt: '+50% de velocidade de movimento', category: 'speed', power: 0.5 },
    { id: 2, nameEn: 'Sonic Dash', namePt: 'Disparo Sônico', descEn: '+100% movement speed (temporary)', descPt: '+100% de velocidade de movimento (temporário)', category: 'speed', power: 1.0 },
    { id: 3, nameEn: 'Swift Feet', namePt: 'Pés Rápidos', descEn: '+30% acceleration', descPt: '+30% de aceleração', category: 'speed', power: 0.3 },
    { id: 4, nameEn: 'Teleport Rush', namePt: 'Teletransporte Rápido', descEn: 'Short-range teleport ability', descPt: 'Habilidade de teletransporte de curto alcance', category: 'speed', power: 0.8 },
    { id: 5, nameEn: 'Momentum Shield', namePt: 'Escudo de Momento', descEn: 'Retain speed after damage', descPt: 'Manter velocidade após dano', category: 'speed', power: 0.6 },

    // Jump & Height Buffs
    { id: 6, nameEn: 'Super Jump', namePt: 'Super Pulo', descEn: '+80% jump height', descPt: '+80% de altura de pulo', category: 'jump', power: 0.8 },
    { id: 7, nameEn: 'Moon Walker', namePt: 'Andarilho da Lua', descEn: '+150% jump height (half gravity)', descPt: '+150% de altura de pulo (meia gravidade)', category: 'jump', power: 1.5 },
    { id: 8, nameEn: 'Double Jump', namePt: 'Pulo Duplo', descEn: 'Ability to jump twice in air', descPt: 'Capacidade de pular duas vezes no ar', category: 'jump', power: 1.0 },
    { id: 9, nameEn: 'Triple Jump', namePt: 'Pulo Triplo', descEn: 'Ability to jump three times in air', descPt: 'Capacidade de pular três vezes no ar', category: 'jump', power: 1.2 },
    { id: 10, nameEn: 'Air Momentum', namePt: 'Momento Aéreo', descEn: '+40% air control', descPt: '+40% de controle aéreo', category: 'jump', power: 0.4 },

    // Defense Buffs
    { id: 11, nameEn: 'Invincibility Shield', namePt: 'Escudo de Invencibilidade', descEn: 'Temporary invulnerability', descPt: 'Invulnerabilidade temporária', category: 'defense', power: 2.0 },
    { id: 12, nameEn: 'Rubber Bounce', namePt: 'Quique de Borracha', descEn: 'Bounce off spikes without damage', descPt: 'Quique nos espinhos sem dano', category: 'defense', power: 1.0 },
    { id: 13, nameEn: 'Shield Barrier', namePt: 'Barreira de Proteção', descEn: 'Blocks 1 fatal hit', descPt: 'Bloqueia 1 golpe fatal', category: 'defense', power: 0.7 },
    { id: 14, nameEn: 'Thorny Armor', namePt: 'Armadura Com Espinhos', descEn: 'Reflect damage back to hazards', descPt: 'Reflita dano de volta para perigos', category: 'defense', power: 0.8 },
    { id: 15, nameEn: 'Healing Aura', namePt: 'Aura de Cura', descEn: 'Slowly restore health', descPt: 'Restaurar saúde lentamente', category: 'defense', power: 0.6 },

    // Size & Scale Buffs
    { id: 16, nameEn: 'Grow Giant', namePt: 'Crescer Gigante', descEn: '+100% size, +50% jump', descPt: '+100% de tamanho, +50% de pulo', category: 'scale', power: 1.0 },
    { id: 17, nameEn: 'Shrink Master', namePt: 'Mestre da Contração', descEn: '-50% size, +30% speed', descPt: '-50% de tamanho, +30% de velocidade', category: 'scale', power: 0.9 },
    { id: 18, nameEn: 'Flexible Body', namePt: 'Corpo Flexível', descEn: 'Squeeze through tight spaces', descPt: 'Espreme-se em espaços apertados', category: 'scale', power: 0.7 },
    { id: 19, nameEn: 'Width Reduction', namePt: 'Redução de Largura', descEn: '-30% width for narrow passages', descPt: '-30% de largura para passagens estreitas', category: 'scale', power: 0.5 },
    { id: 20, nameEn: 'Phantom Form', namePt: 'Forma Fantasma', descEn: 'Pass through some obstacles', descPt: 'Passe através de alguns obstáculos', category: 'scale', power: 1.0 },

    // Utility Buffs
    { id: 21, nameEn: 'Wall Climber', namePt: 'Escalador de Parede', descEn: 'Ability to climb walls', descPt: 'Capacidade de escalar paredes', category: 'utility', power: 0.8 },
    { id: 22, nameEn: 'Magnetic Grip', namePt: 'Aderência Magnética', descEn: 'Stick to metal surfaces', descPt: 'Cole-se a superfícies metálicas', category: 'utility', power: 0.7 },
    { id: 23, nameEn: 'Dash Boost', namePt: 'Impulsão de Disparo', descEn: '5 second air dash ability', descPt: 'Capacidade de disparo aéreo de 5 segundos', category: 'utility', power: 0.9 },
    { id: 24, nameEn: 'Slow Fall', namePt: 'Queda Lenta', descEn: '-50% fall speed', descPt: '-50% de velocidade de queda', category: 'utility', power: 0.6 },
    { id: 25, nameEn: 'Friction Master', namePt: 'Mestre do Atrito', descEn: 'Better grip on slippery surfaces', descPt: 'Melhor aderência em superfícies escorregadias', category: 'utility', power: 0.5 },

    // Platform & Obstacle Buffs
    { id: 26, nameEn: 'Platform Solidifier', namePt: 'Solidificador de Plataforma', descEn: 'Moving platforms slow down', descPt: 'Plataformas móveis desaceleram', category: 'platform', power: 0.7 },
    { id: 27, nameEn: 'Safe Landing', namePt: 'Pouso Seguro', descEn: '+50% platform stickiness', descPt: '+50% aderência de plataforma', category: 'platform', power: 0.5 },
    { id: 28, nameEn: 'Freeze Time', namePt: 'Congelar Tempo', descEn: 'Slow all moving obstacles by 50%', descPt: 'Desacelera todos os obstáculos móveis em 50%', category: 'platform', power: 1.2 },
    { id: 29, nameEn: 'Trap Disabler', namePt: 'Desativador de Armadilhas', descEn: 'Disable traps for 10 seconds', descPt: 'Desativar armadilhas por 10 segundos', category: 'platform', power: 1.0 },
    { id: 30, nameEn: 'Platform Extender', namePt: 'Extenssor de Plataforma', descEn: 'Platforms become 50% wider', descPt: 'Plataformas ficam 50% mais amplas', category: 'platform', power: 0.6 },

    // Vision & Awareness Buffs
    { id: 31, nameEn: 'Night Vision', namePt: 'Visão Noturna', descEn: 'See hidden paths', descPt: 'Ver caminhos ocultos', category: 'vision', power: 0.7 },
    { id: 32, nameEn: 'Danger Sense', namePt: 'Sentido de Perigo', descEn: 'Incoming hazards highlighted', descPt: 'Perigos iminentes destacados', category: 'vision', power: 0.8 },
    { id: 33, nameEn: 'Eagle Eye', namePt: 'Olho de Águia', descEn: 'See entire level map', descPt: 'Veja o mapa do nível inteiro', category: 'vision', power: 0.9 },
    { id: 34, nameEn: 'X-Ray Vision', namePt: 'Visão de Raios X', descEn: 'See through walls temporarily', descPt: 'Veja através de paredes temporariamente', category: 'vision', power: 1.0 },
    { id: 35, nameEn: 'Spotlight', namePt: 'Holofote', descEn: 'Illuminate dark areas', descPt: 'Ilumine áreas escuras', category: 'vision', power: 0.5 },

    // Time-Based Buffs
    { id: 36, nameEn: 'Time Slow', namePt: 'Tempo Lento', descEn: '50% game speed slow', descPt: 'Jogo 50% mais lento', category: 'time', power: 1.0 },
    { id: 37, nameEn: 'Time Rewind', namePt: 'Rebobina do Tempo', descEn: 'Go back 5 seconds', descPt: 'Volte 5 segundos', category: 'time', power: 1.5 },
    { id: 38, nameEn: 'Extra Time', namePt: 'Tempo Extra', descEn: '+30 seconds to complete', descPt: '+30 segundos para completar', category: 'time', power: 0.8 },
    { id: 39, nameEn: 'Perfect Moment', namePt: 'Momento Perfeito', descEn: 'Slow motion on demand', descPt: 'Câmera lenta sob demanda', category: 'time', power: 0.7 },
    { id: 40, nameEn: 'Echo Loop', namePt: 'Loop de Eco', descEn: 'Repeat last 3 seconds', descPt: 'Repita os últimos 3 segundos', category: 'time', power: 0.9 },

    // Gadget Buffs
    { id: 41, nameEn: 'Rocket Boots', namePt: 'Botas de Foguete', descEn: 'Jet propulsion for 8 seconds', descPt: 'Propulsão a jato por 8 segundos', category: 'gadget', power: 1.1 },
    { id: 42, nameEn: 'Grappling Hook', namePt: 'Gancho de Garra', descEn: 'Swing across gaps', descPt: 'Balanço através de buracos', category: 'gadget', power: 0.8 },
    { id: 43, nameEn: 'Spring Board', namePt: 'Trampolim', descEn: 'Enhanced bounce mechanic', descPt: 'Mecânica de salto aprimorada', category: 'gadget', power: 0.7 },
    { id: 44, nameEn: 'Jetpack Active', namePt: 'Mochila a Jato Ativa', descEn: 'Flight for 10 seconds', descPt: 'Voo por 10 segundos', category: 'gadget', power: 1.3 },
  ],

  debuffs: [
    // Speed Debuffs
    { id: 101, nameEn: 'Molasses', namePt: 'Melaço', descEn: '-50% movement speed', descPt: '-50% de velocidade de movimento', category: 'speed', severity: 0.5 },
    { id: 102, nameEn: 'Heavy Feet', namePt: 'Pés Pesados', descEn: '-30% walk speed', descPt: '-30% de velocidade de caminhada', category: 'speed', severity: 0.3 },
    { id: 103, nameEn: 'Frozen Limbs', namePt: 'Membros Congelados', descEn: '-80% speed (short duration)', descPt: '-80% de velocidade (duração curta)', category: 'speed', severity: 0.8 },
    { id: 104, nameEn: 'Reversed Controls', namePt: 'Controles Invertidos', descEn: 'All movement controls reversed', descPt: 'Todos os controles de movimento invertidos', category: 'speed', severity: 0.9 },
    { id: 105, nameEn: 'Quicksand', namePt: 'Areia Movediça', descEn: '+100% friction, -50% speed', descPt: '+100% de atrito, -50% de velocidade', category: 'speed', severity: 0.7 },
    { id: 106, nameEn: 'Gravity Spike', namePt: 'Pico de Gravidade', descEn: '+50% gravity pull', descPt: '+50% de puxão de gravidade', category: 'speed', severity: 0.6 },
    { id: 107, nameEn: 'Sticky Tar', namePt: 'Alcatrão Pegajoso', descEn: 'Movement speed -40%', descPt: 'Velocidade de movimento -40%', category: 'speed', severity: 0.4 },

    // Jump Debuffs
    { id: 108, nameEn: 'Weak Legs', namePt: 'Pernas Fracas', descEn: '-50% jump power', descPt: '-50% de poder de pulo', category: 'jump', severity: 0.5 },
    { id: 109, nameEn: 'Gravity Well', namePt: 'Poço de Gravidade', descEn: '+100% gravity (cannot jump high)', descPt: '+100% de gravidade (não pode pular alto)', category: 'jump', severity: 0.9 },
    { id: 110, nameEn: 'Immobilize', namePt: 'Imobilizar', descEn: 'Cannot jump at all', descPt: 'Não pode pular', category: 'jump', severity: 1.0 },
    { id: 111, nameEn: 'Slippery Feet', namePt: 'Pés Escorregadios', descEn: 'Failed jump attempts', descPt: 'Tentativas de pulo falhadas', category: 'jump', severity: 0.6 },
    { id: 112, nameEn: 'Air Resistance', namePt: 'Resistência do Ar', descEn: '-30% air time', descPt: '-30% de tempo no ar', category: 'jump', severity: 0.3 },
    { id: 113, nameEn: 'Bouncy Floor', namePt: 'Chão Elástico', descEn: 'Uncontrolled bouncing', descPt: 'Salto descontrolado', category: 'jump', severity: 0.7 },
    { id: 114, nameEn: 'Mud Shoes', namePt: 'Sapatos de Lama', descEn: '-40% jump height', descPt: '-40% de altura de pulo', category: 'jump', severity: 0.4 },

    // Damage Debuffs
    { id: 115, nameEn: 'One Hit KO', namePt: 'Nocaute em Um Golpe', descEn: 'Any damage is fatal', descPt: 'Qualquer dano é fatal', category: 'damage', severity: 1.0 },
    { id: 116, nameEn: 'Fragile', namePt: 'Frágil', descEn: '-50% health', descPt: '-50% de saúde', category: 'damage', severity: 0.5 },
    { id: 117, nameEn: 'Bleed Effect', namePt: 'Efeito Sangramento', descEn: 'Lose health over time', descPt: 'Perder saúde ao longo do tempo', category: 'damage', severity: 0.6 },
    { id: 118, nameEn: 'Poison Aura', namePt: 'Aura Venenosa', descEn: 'Damage from touching obstacles', descPt: 'Dano ao tocar obstáculos', category: 'damage', severity: 0.7 },
    { id: 119, nameEn: 'Magnetic Spikes', namePt: 'Espinhos Magnéticos', descEn: 'Attracted to hazards', descPt: 'Atraído para perigos', category: 'damage', severity: 0.8 },
    { id: 120, nameEn: 'Double Damage', namePt: 'Dano Duplo', descEn: 'All hits deal 2x damage', descPt: 'Todos os golpes causam 2x dano', category: 'damage', severity: 0.9 },
    { id: 121, nameEn: 'Cursed', namePt: 'Amaldiçoado', descEn: 'Randomly take damage', descPt: 'Aleatoriamente receber dano', category: 'damage', severity: 0.7 },

    // Size Debuffs
    { id: 122, nameEn: 'Shrink Ray', namePt: 'Raio de Encolhimento', descEn: '-50% size (easier to hit)', descPt: '-50% de tamanho (mais fácil de acertar)', category: 'size', severity: 0.6 },
    { id: 123, nameEn: 'Gigantism', namePt: 'Gigantismo', descEn: '+100% size (easier target)', descPt: '+100% de tamanho (alvo mais fácil)', category: 'size', severity: 0.7 },
    { id: 124, nameEn: 'Bloated', namePt: 'Inchado', descEn: '+50% size, -50% speed', descPt: '+50% de tamanho, -50% de velocidade', category: 'size', severity: 0.6 },
    { id: 125, nameEn: 'Squashed', namePt: 'Esmagado', descEn: '-70% height, harder to jump', descPt: '-70% de altura, mais difícil pular', category: 'size', severity: 0.7 },
    { id: 126, nameEn: 'Width Increase', namePt: 'Aumento de Largura', descEn: '+60% width (harder to fit)', descPt: '+60% de largura (mais difícil caber)', category: 'size', severity: 0.5 },

    // Control Debuffs
    { id: 127, nameEn: 'Dizziness', namePt: 'Tontura', descEn: 'Screen spinning effect', descPt: 'Efeito de tela giratória', category: 'control', severity: 0.7 },
    { id: 128, nameEn: 'Confusion', namePt: 'Confusão', descEn: 'Random control inputs', descPt: 'Entradas de controle aleatórias', category: 'control', severity: 0.8 },
    { id: 129, nameEn: 'Lag Simulation', namePt: 'Simulação de Atraso', descEn: 'Delayed input response', descPt: 'Resposta de entrada atrasada', category: 'control', severity: 0.6 },
    { id: 130, nameEn: 'Sluggish', namePt: 'Lento', descEn: '--40% responsiveness', descPt: '-40% de capacidade de resposta', category: 'control', severity: 0.4 },
    { id: 131, nameEn: 'Command Override', namePt: 'Anulação de Comando', descEn: 'Controls do opposite action', descPt: 'Controles fazem ação oposta', category: 'control', severity: 0.9 },

    // Vision Debuffs
    { id: 132, nameEn: 'Blindness', namePt: 'Cegueira', descEn: 'Black screen, sound only', descPt: 'Tela preta, apenas som', category: 'vision', severity: 0.9 },
    { id: 133, nameEn: 'Blur Vision', namePt: 'Visão Desfocada', descEn: 'Screen blur, -30% visibility', descPt: 'Tela borrada, -30% de visibilidade', category: 'vision', severity: 0.5 },
    { id: 134, nameEn: 'Tunnel Vision', namePt: 'Visão Túnel', descEn: 'Only see center 30% of screen', descPt: 'Veja apenas 30% central da tela', category: 'vision', severity: 0.7 },
    { id: 135, nameEn: 'Color Blindness', namePt: 'Daltonismo', descEn: 'Grayscale vision', descPt: 'Visão em escala de cinza', category: 'vision', severity: 0.3 },
    { id: 136, nameEn: 'Inverted Vision', namePt: 'Visão Invertida', descEn: 'Vision is upside down', descPt: 'Visão de cabeça para baixo', category: 'vision', severity: 0.8 },
    { id: 137, nameEn: 'Fog of War', namePt: 'Névoa de Guerra', descEn: 'Limited visibility radius', descPt: 'Raio de visibilidade limitado', category: 'vision', severity: 0.6 },
    { id: 138, nameEn: 'Flash Blindness', namePt: 'Cegueira de Flash', descEn: 'Random screen flashes', descPt: 'Flashes aleatórios de tela', category: 'vision', severity: 0.5 },

    // Sound Debuffs
    { id: 139, nameEn: 'Deafness', namePt: 'Surdez', descEn: 'No audio cues', descPt: 'Sem pistas de áudio', category: 'sound', severity: 0.4 },
    { id: 140, nameEn: 'Muffled Audio', namePt: 'Áudio Abafado', descEn: 'Hard to hear warnings', descPt: 'Difícil ouvir avisos', category: 'sound', severity: 0.3 },
    { id: 141, nameEn: 'Distorted Sound', namePt: 'Som Distorcido', descEn: 'Confusing audio feedback', descPt: 'Feedback de áudio confuso', category: 'sound', severity: 0.4 },

    // Platform Hazards
    { id: 142, nameEn: 'Spike Spawn', namePt: 'Geração de Espinhos', descEn: 'Random spikes appear', descPt: 'Espinhos aleatórios aparecem', category: 'hazard', severity: 0.8 },
    { id: 143, nameEn: 'Platform Crumble', namePt: 'Desintegração de Plataforma', descEn: 'Platforms disappear', descPt: 'Plataformas desaparecem', category: 'hazard', severity: 0.9 },
    { id: 144, nameEn: 'Reverse Gravity', namePt: 'Gravidade Invertida', descEn: 'Gravity flips direction', descPt: 'Gravidade se inverte', category: 'hazard', severity: 0.8 },
    { id: 145, nameEn: 'Earthquakes', namePt: 'Terremotos', descEn: 'Ground shakes constantly', descPt: 'Solo balança continuamente', category: 'hazard', severity: 0.7 },
    { id: 146, nameEn: 'Lava Floor', namePt: 'Chão de Lava', descEn: 'Floor burns over time', descPt: 'Chão queima ao longo do tempo', category: 'hazard', severity: 0.8 },
    { id: 147, nameEn: 'Ice World', namePt: 'Mundo de Gelo', descEn: 'All surfaces are slippery', descPt: 'Todas as superfícies são escorregadias', category: 'hazard', severity: 0.6 },
    { id: 148, nameEn: 'Wind Gusts', namePt: 'Rajadas de Vento', descEn: 'Random wind pushes you', descPt: 'Vento aleatório empurra você', category: 'hazard', severity: 0.5 },
    { id: 149, nameEn: 'Portal Maze', namePt: 'Labirinto de Portais', descEn: 'Teleport randomly', descPt: 'Teletransporte aleatório', category: 'hazard', severity: 0.7 },
    { id: 150, nameEn: 'Mirror World', namePt: 'Mundo Espelhado', descEn: 'Level layout is mirrored', descPt: 'Layout de nível é espelhado', category: 'hazard', severity: 0.6 },

    // Time Debuffs
    { id: 151, nameEn: 'Time Acceleration', namePt: 'Aceleração Temporal', descEn: 'Game speed +50%', descPt: 'Velocidade do jogo +50%', category: 'time', severity: 0.6 },
    { id: 152, nameEn: 'Time Limit', namePt: 'Limite de Tempo', descEn: 'Only 30 seconds to finish', descPt: 'Apenas 30 segundos para terminar', category: 'time', severity: 0.9 },
    { id: 153, nameEn: 'Countdown', namePt: 'Contagem Regressiva', descEn: 'Lose health when timer ends', descPt: 'Perder saúde quando o temporizador terminar', category: 'time', severity: 0.8 },
    { id: 154, nameEn: 'Slow Motion Damage', namePt: 'Dano em Câmera Lenta', descEn: 'Time slow = take damage', descPt: 'Tempo lento = receber dano', category: 'time', severity: 0.5 },
    { id: 155, nameEn: 'Instant Replay', namePt: 'Reprodução Instantânea', descEn: 'Replay of deaths appears', descPt: 'Repetição de mortes aparece', category: 'time', severity: 0.4 },

    // Random/Chaos Debuffs
    { id: 156, nameEn: 'Chaos Mode', namePt: 'Modo Caos', descEn: 'Multiple random effects', descPt: 'Múltiplos efeitos aleatórios', category: 'chaos', severity: 1.0 },
    { id: 157, nameEn: 'Randomizer', namePt: 'Aleatorizador', descEn: 'Random debuff every 10s', descPt: 'Debuff aleatório a cada 10s', category: 'chaos', severity: 0.8 },
    { id: 158, nameEn: 'Curse of Fortune', namePt: 'Maldição da Sorte', descEn: 'Random good or bad effects', descPt: 'Efeitos aleatórios bons ou ruins', category: 'chaos', severity: 0.7 },
    { id: 159, nameEn: 'Glitch Time', namePt: 'Tempo de Glitch', descEn: 'Physics behave unpredictably', descPt: 'Física se comporta de forma imprevisível', category: 'chaos', severity: 0.8 },
    { id: 160, nameEn: 'Reality Shift', namePt: 'Mudança de Realidade', descEn: 'Level geometry randomly changes', descPt: 'Geometria de nível muda aleatoriamente', category: 'chaos', severity: 0.9 },

    // Difficulty Debuffs
    { id: 161, nameEn: 'Permadeath Mode', namePt: 'Modo Morte Permanente', descEn: 'One death = level restart', descPt: 'Uma morte = reiniciar nível', category: 'difficulty', severity: 1.0 },
    { id: 162, nameEn: 'Hardcore', namePt: 'Hardcore', descEn: 'No checkpoints allowed', descPt: 'Sem pontos de verificação', category: 'difficulty', severity: 0.9 },
    { id: 163, nameEn: 'Iron Man', namePt: 'Homem de Ferro', descEn: 'Cannot respawn at checkpoints', descPt: 'Não pode reaparecer em pontos de verificação', category: 'difficulty', severity: 0.8 },
    { id: 164, nameEn: 'No Respawn', namePt: 'Sem Reaparecimento', descEn: 'Die once = game over', descPt: 'Morra uma vez = fim de jogo', category: 'difficulty', severity: 1.0 },
    { id: 165, nameEn: 'Limited Lives', namePt: 'Vidas Limitadas', descEn: 'Only 3 lives total', descPt: 'Apenas 3 vidas no total', category: 'difficulty', severity: 0.7 },
  ],
};

export function getBuffById(id) {
  return modifiers.buffs.find((b) => b.id === id) || null;
}

export function getDebuffById(id) {
  return modifiers.debuffs.find((d) => d.id === id) || null;
}

export function getModifiersByCategory(category) {
  const buffsInCategory = modifiers.buffs.filter((b) => b.category === category);
  const debuffsInCategory = modifiers.debuffs.filter((d) => d.category === category);
  return { buffs: buffsInCategory, debuffs: debuffsInCategory };
}

export function getAllModifiers() {
  return {
    totalBuffs: modifiers.buffs.length,
    totalDebuffs: modifiers.debuffs.length,
    totalModifiers: modifiers.buffs.length + modifiers.debuffs.length,
    buffs: modifiers.buffs,
    debuffs: modifiers.debuffs,
  };
}
