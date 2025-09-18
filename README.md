# RefX 회사 홈페이지

레퍼런스엑스(RefX) 공식 홈페이지 - 백엔드 개발 전문 기업이자 레퍼런스커피 브랜드

## 🌐 배포 URL
- **메인 사이트**: [www.refx.kr](https://www.refx.kr)
- **GitHub Pages**: [refxteam.github.io/refx-company-hompage](https://refxteam.github.io/refx-company-hompage)

## 🛠 기술 스택

- **프레임워크**: Astro 5.13.8 (정적 사이트 생성)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **배포**: GitHub Pages + Route53
- **CI/CD**: GitHub Actions

## 🚀 개발 환경 설정

### 사전 요구사항
- Node.js 18+
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
refx-company-homepage/
├── src/
│   ├── pages/          # 페이지 파일들
│   ├── components/     # 재사용 컴포넌트
│   ├── layouts/        # 레이아웃 템플릿
│   └── content/        # 콘텐츠 파일
├── public/             # 정적 파일
│   ├── CNAME          # GitHub Pages 도메인 설정
│   └── images/        # 이미지 파일
└── .github/
    └── workflows/     # GitHub Actions 워크플로우
```

## 🌍 페이지 구성

- **홈** (`/`) - 메인 랜딩 페이지
- **회사소개** (`/about`) - 레퍼런스엑스 소개
- **개발서비스** (`/services`) - 백엔드 개발 서비스
- **레퍼런스커피** (`/coffee`) - 커피 브랜드 소개
- **포트폴리오** (`/portfolio`) - 완료 프로젝트
- **연락처** (`/contact`) - 문의 폼

## 🔧 배포 설정

### GitHub Pages 설정
1. Repository Settings → Pages
2. Source: GitHub Actions
3. Custom domain: `www.refx.kr`

### Route53 DNS 설정
```yaml
# A 레코드 설정
Type: A
Name: refx.kr
Value:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

# CNAME 레코드 설정
Type: CNAME
Name: www
Value: refxteam.github.io
```

## 💰 운영 비용

| 항목 | 월간 비용 | 연간 비용 |
|------|-----------|-----------|
| Route53 호스팅 존 | $0.50 | $6 |
| Route53 도메인 | $1.00 | $12 |
| GitHub Pages | $0 | $0 |
| **총 비용** | **$1.50** | **$18** |

## 📊 성능 최적화

- **정적 사이트 생성**: 빠른 로딩 속도
- **이미지 최적화**: WebP 포맷 사용
- **CDN**: GitHub Pages 글로벌 CDN 활용
- **SEO**: 메타 태그, 구조화된 데이터, 사이트맵

## 🤝 기여 방법

1. 이 저장소를 Fork
2. 새 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 Push (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## 📞 연락처

- **이메일**: contact@refx.kr
- **GitHub**: [@RefXTeam](https://github.com/RefXTeam)
- **레퍼런스커피**: [스마트스토어](https://smartstore.naver.com/refcoffee)

---

© 2025 RefX (레퍼런스엑스). All rights reserved.