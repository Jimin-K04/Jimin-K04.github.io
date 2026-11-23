# JIMIN Portfolio — Future Interface

GitHub Pages에 배포할 수 있는 React + Vite 포트폴리오입니다. Dark Sapphire 외곽 배경, 화이트 내부 패널, 원형 프로필, 2열 프로젝트 카드, 반응형 레이아웃을 사용합니다.

## 1. 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 터미널에 표시되는 주소(일반적으로 http://localhost:5173)를 엽니다.

## 2. 본인 정보 수정

- `src/data.js` — 이름, 자기소개, 프로젝트, 링크 수정
- `public/avatar.svg` — 임시 프로필 이미지. 실제 사진을 `public/profile.jpg`에 넣고 `src/data.js`의 `avatar`를 `/profile.jpg`로 바꾸세요.
- `src/data.js`의 `email` — 공개할 이메일 주소를 입력하면 복사 버튼이 활성화됩니다.
- 이력서 PDF를 `public/resume.pdf`에 넣은 뒤 `resume: '/resume.pdf'`로 설정하면 다운로드 버튼이 활성화됩니다.
- `src/Visuals.jsx` — 카드 이미지는 실제 사진이 아닌 **스타일링된 예시 일러스트**입니다. 실제 프로젝트 스크린샷으로 대체하는 것을 권장합니다.
- 공개 GitHub 프로젝트 URL과 내용은 배포 전에 한 번 더 확인하세요.

## 3. GitHub Pages 배포 (GitHub Actions 권장)

1. GitHub에서 새 저장소를 만들고 전체 프로젝트를 업로드합니다.
2. 저장소 `Settings → Pages → Build and deployment → Source`를 `GitHub Actions`로 변경합니다.
3. 포함된 `.github/workflows/deploy.yml`이 `main` 브랜치에 push될 때 자동으로 빌드해 배포합니다.
4. `https://<username>.github.io/<repository>/` 형태의 URL에서 확인합니다.

> `vite.config.js`가 `base: './'`를 사용하므로 저장소명이 무엇이든 정적 리소스 경로가 작동하도록 구성했습니다. 다만 루트 저장소를 사용하는 경우에도 정상 동작합니다.

## 4. 과제 제출

배포 완료 후 사이트 URL **한 줄만** 들어간 `김지민-공작과제-06.txt` 파일을 만듭니다. URL이 정해지기 전에는 임의 주소를 적지 마세요.

## 기술 스택

React · Vite · CSS · Lucide React. 외부 API나 백엔드 없이 정적 배포 가능합니다.
