# 🚀 RefX 회사 홈페이지

**99.5% 가동률의 백엔드 기술력과 200+ 고객이 인정한 레퍼런스커피 브랜드**

> Spring Boot 3.5.5 + Java 24 전문가가 만드는 혁신적인 가치
> 월 $1.5 초저비용 인프라로 77% 비용 절감을 달성한 실전 사례

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.refx.kr&style=for-the-badge&logo=firefox&logoColor=white)](https://www.refx.kr)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deploy-success?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RefXTeam/refx-company-hompage/actions)
[![Astro](https://img.shields.io/badge/Astro-5.13.8-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 🌟 프로젝트 하이라이트

- 🎯 **99.5% 가동률** - Spring Boot 실시간 모니터링 시스템
- 💰 **77% 비용 절감** - AWS S3+CloudFront 대비 월 $5 절약 ($6.5 → $1.5)
- ⚡ **43초 배포** - GitHub Actions 완전 자동화
- 📱 **10페이지 완전 반응형** - 모바일/태블릿/데스크톱 최적화
- 🔍 **SEO 완벽 최적화** - 메타 태그, 사이트맵, 구조화된 데이터
- ☕ **200+ 고객 서비스** - 네이버 스마트스토어 레퍼런스커피 브랜드
- ⚖️ **Facebook 앱 준수** - 완전한 법적 문서 및 데이터 삭제 정책

## 🌐 배포 URL
- **🏠 메인 사이트**: [www.refx.kr](https://www.refx.kr)
- **📄 GitHub Pages**: [refxteam.github.io/refx-company-hompage](https://refxteam.github.io/refx-company-hompage)

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

### 메인 페이지
- **홈** (`/`) - 메인 랜딩 페이지
- **회사소개** (`/about`) - 레퍼런스엑스 소개
- **개발서비스** (`/services`) - 백엔드 개발 서비스
- **레퍼런스커피** (`/coffee`) - 커피 브랜드 소개
- **포트폴리오** (`/portfolio`) - 완료 프로젝트
- **연락처** (`/contact`) - 문의 폼

### 법적 문서 (Facebook 앱 제출용)
- **개인정보처리방침** (`/privacy`) - 데이터 수집 및 처리 방침
- **서비스약관** (`/terms`) - 서비스 이용 약관
- **데이터 삭제 안내** (`/data-deletion`) - 사용자 데이터 삭제 정책

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

## 💰 운영 비용 분석

### 🏆 현재 구조 (RefX)
| 항목 | 월간 비용 | 연간 비용 | 비고 |
|------|-----------|-----------|------|
| Route53 호스팅 존 | $0.50 | $6 | DNS 관리 |
| Route53 도메인 | $1.00 | $12 | www.refx.kr |
| GitHub Pages | $0 | $0 | 무료 호스팅 ✅ |
| **총 비용** | **$1.50** | **$18** | |

### 📊 기존 대안 대비 절감액
| 구조 | 월간 비용 | 절감액 | 절감률 |
|------|-----------|--------|--------|
| AWS S3 + CloudFront | $6.50 | - | - |
| **RefX (현재)** | **$1.50** | **$5.00** | **77%** |
| Vercel Pro | $20.00 | $18.50 | 93% |
| Netlify Pro | $19.00 | $17.50 | 92% |

> 💡 **핵심 성과**: 동일한 성능과 기능을 **월 $5 절약**으로 달성

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
- **전화**: 070-4145-8080 (평일 9:00-18:00)
- **GitHub**: [@RefXTeam](https://github.com/RefXTeam)
- **레퍼런스커피**: [스마트스토어](https://smartstore.naver.com/refcoffee)

## 📝 개발 가이드라인

### 작업 후 필수 체크리스트
1. **문서 업데이트**: 새로운 기능이나 페이지 추가 시 README.md 업데이트
2. **빌드 테스트**: `npm run build` 실행하여 빌드 오류 확인
3. **배포 확인**: GitHub Actions 워크플로우 성공 및 사이트 접근 확인
4. **SEO 검증**: 새 페이지의 메타 태그 및 사이트맵 포함 확인

### Facebook 앱 제출 URL
페이스북 앱 대시보드에 제출할 법적 문서 URL:
- **개인정보처리방침**: https://www.refx.kr/privacy
- **서비스약관**: https://www.refx.kr/terms
- **사용자 데이터 삭제**: https://www.refx.kr/data-deletion

---

© 2025 RefX (레퍼런스엑스). All rights reserved.