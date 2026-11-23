// 프로젝트 정보는 첨부한 '프로젝트 참여실적' PDF를 기반으로 정리했습니다.
// 본인 사진/프로젝트 실제 캡처와 미확인 링크는 배포 전에 추가하세요.
export const identity = {
  name: '김지민', english: 'Jimin Kim', brand: 'JIMIN.',
  tagline: 'Embedded Systems · Edge AI · Robotics',
  bio: '하드웨어와 소프트웨어의 경계에서, 실제로 동작하는 시스템을 만들고 있습니다.',
  about: '컴퓨터공학을 공부하며 MCU·RTOS 기반 개발과 온디바이스 AI 성능 분석을 경험했습니다. 작은 시스템에서도 효율적으로 작동하는 소프트웨어와, 현실의 문제를 해결하는 기술에 관심이 있습니다.',
  github: 'https://github.com/Jimin-K04', // 실제 사용 계정에 맞는지 배포 전 확인
  email: '', // 이메일 공개를 원하면 입력
  resume: '', // public/resume.pdf를 추가한 뒤 '/resume.pdf' 입력
  avatar: '/avatar.svg' // 실제 프로필 사진으로 바꿀 때 '/profile.jpg'
};

export const projects = [
  { id:'ondevice', number:'01', name:'On-Device AI', category:'Embedded AI', year:'2026', date:'2026.07 — 2026.10', description:'MCU 환경에서 CPU/NPU 추론 성능과 전력을 측정하고 비교한 연구', problem:'자원이 제한된 MCU 환경에서 AI 모델을 효율적으로 실행하고, 성능 및 전력 특성을 확인하는 것이 목표였습니다.', role:'Renesas RA8P1 및 STM32N6 환경에서 추론 실행 환경을 구성하고 CPU/NPU 성능과 전력 특성을 측정·분석했습니다.', outcome:'추론 시간과 실행 구간별 특성을 비교하고, 하드웨어 구성에 따른 실험 결과를 정리했습니다.', stack:['C/C++','FreeRTOS','RA8P1','STM32N6','Ethos-U55'], link:'', kind:'chip', featured:true },
  { id:'ugv', number:'02', name:'UGV Robot', category:'Embedded · Robotics', year:'2026', date:'2026.05 — 2026.06', description:'RTOS 태스크와 센서 연동 기반 무인 지상 로봇 제어 시스템', problem:'여러 센서와 제어 기능이 함께 동작하는 정찰 로봇의 실시간 제어 시스템을 구축했습니다.', role:'STM32 및 uC/OS-III 환경에서 로봇 제어, 센서 연동과 USART 기반 통신, Queue와 Semaphore 활용 기능을 구현했습니다.', outcome:'실시간 운영체제 기반의 태스크 구성과 주변장치 제어를 통합했습니다.', stack:['C','STM32','uC/OS-III','USART','Queue','Semaphore'], link:'https://github.com/naminjuda/rtos-scout-robot', kind:'rover', featured:true },
  { id:'drilling', number:'03', name:'Drilling', category:'Game Development', year:'2025–26', date:'2025.07 — 2026.01', description:'Unity로 개발해 Steam에 출시한 2D 게임 팀 프로젝트', problem:'동아리 팀 프로젝트로 플레이 가능한 게임을 제작하고 실제로 출시하는 것을 목표로 했습니다.', role:'게임 맵과 주요 시스템 구현에 참여했습니다.', outcome:'팀과 함께 게임을 완성하고 Steam에 출시했습니다.', stack:['Unity','C#','JSON'], link:'https://store.steampowered.com/app/4304980/Drilling/', linkLabel:'Steam 출시 페이지', kind:'game', featured:true },
  { id:'galmaegi', number:'04', name:'갈매기 (Galmaegi)', category:'AI Service · Web', year:'2025', date:'2025.08', description:'부산 특화 대화형 다중 경유 내비게이션 서비스', problem:'부산의 지역 정보를 활용한 대화형 경로 탐색 경험을 제안했습니다.', role:'서비스 기획과 React 기반 프론트엔드 개발을 담당했습니다. AI 경로 추천 알고리즘 및 백엔드는 직접 구현하지 않았습니다.', outcome:'DIVE 2025 카카오모빌리티 트랙 3위에 선정되었습니다.', stack:['React','JavaScript','HTML','CSS','Kakao API'], link:'', kind:'map', featured:true },
  { id:'archive', number:'05', name:'AI Decision Archive', category:'Android · AI', year:'2026', date:'2026.05 — 2026.06', description:'AI를 활용해 의사결정 과정을 기록하고 분석하는 Android 앱', problem:'개인의 의사결정 과정과 맥락을 기록·분석할 수 있는 앱을 개발했습니다.', role:'Kotlin/Java, Room(SQLite), 외부 API를 활용한 Android 앱 개발에 참여했습니다.', outcome:'의사결정 기록·분석 기능을 갖춘 앱을 구현했습니다.', stack:['Kotlin','Java','Room','ChatGPT API','Weather API'], link:'https://github.com/Jimin-K04/AI-Decision-Archive', kind:'archive', featured:false },
  { id:'fpga', number:'06', name:'Logic Bomb Defusal', category:'FPGA · Digital Logic', year:'2025', date:'2025.11 — 2025.12', description:'Verilog HDL로 설계한 FPGA 기반 폭탄 해제 게임', problem:'FPGA 하드웨어에서 게임 규칙과 사용자 입력에 따른 동작을 구현했습니다.', role:'Verilog로 게임 로직 및 하드웨어 제어 기능을 설계했습니다.', outcome:'Xilinx Vivado를 활용한 디지털 회로와 게임 동작을 구현했습니다.', stack:['Verilog HDL','FPGA','Vivado'], link:'https://github.com/Jimin-K04/logic-bomb-defusal-game', kind:'fpga', featured:false },
  { id:'arduino', number:'07', name:'Safety System', category:'Embedded · IoT', year:'2024', date:'2024.11 — 2024.12', description:'센서와 입출력 장치를 연동한 아두이노 음주운전 예방 시스템', problem:'음주 상태 확인과 사용자 인증, 경고를 결합한 장치를 제작했습니다.', role:'알코올·지문 센서, 키패드, 버튼, LED, LCD, 부저의 입출력 제어와 블루투스 모듈 연동을 담당했습니다.', outcome:'여러 센서 및 입출력 장치가 연동되는 프로토타입을 구현했습니다.', stack:['Arduino','C/C++','Bluetooth','Sensors'], link:'', kind:'board', featured:false }
];

export const skillGroups = [
  {name:'Languages', items:['C','C++','Python','JavaScript','Kotlin','Java','C#','Verilog']},
  {name:'Embedded & Hardware', items:['STM32','Renesas RA8P1','FreeRTOS','uC/OS-III','MCU/NPU','FPGA']},
  {name:'Software & Tools', items:['React','Vite','Git','Unity','Android Studio','Vivado','J-Link']}
];
