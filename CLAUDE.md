# Claude Code 개발 가이드라인

이 파일은 Claude Code가 RefX 회사 홈페이지 프로젝트에서 작업할 때 따라야 할 가이드라인을 정의합니다.

## 📋 작업 후 필수 체크리스트

### 1. 문서 업데이트 (필수)
모든 작업 완료 후 반드시 다음을 수행:
- **README.md 업데이트**: 새로운 기능, 페이지, 설정 변경사항 반영
- **페이지 수 업데이트**: 새 페이지 추가 시 총 페이지 수 수정
- **프로젝트 하이라이트 갱신**: 중요한 기능 추가 시 하이라이트 섹션 업데이트

### 2. 빌드 및 배포 검증
```bash
# 빌드 테스트
npm run build

# 로컬 미리보기 (선택사항)
npm run preview
```

### 3. Git 커밋 규칙
- **커밋 메시지**: 한글로 작성
- **상세 설명**: 변경사항의 목적과 영향 명시
- **Claude 서명**: 모든 커밋에 Claude Code 서명 포함

### 4. 배포 후 확인사항
- GitHub Actions 워크플로우 성공 확인
- 사이트 접근 가능성 테스트
- 새 페이지의 SEO 메타태그 확인

## 🔧 프로젝트 특정 정보

### 연락처 정보
- **이메일**: contact@refx.kr
- **전화**: 070-4145-8080
- **도메인**: www.refx.kr

### Facebook 앱 관련 URL
- **개인정보처리방침**: https://www.refx.kr/privacy
- **서비스약관**: https://www.refx.kr/terms
- **데이터 삭제 안내**: https://www.refx.kr/data-deletion

### 기술 스택
- **프레임워크**: Astro 5.13.8
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **호스팅**: GitHub Pages
- **DNS**: AWS Route53
- **CI/CD**: GitHub Actions
- **백엔드**: Spring Boot 4.x.x, Java 25 LTS
- **AI 개발 도구**: Claude Code (AI 페어 프로그래밍)
- **터미널 자동화**: tmux, Git Worktree
- **AI 프로토콜**: MCP (Model Context Protocol)

## 📊 프로젝트 현황

### 페이지 구성 (총 10페이지)
1. 홈 (`/`)
2. 회사소개 (`/about`)
3. 개발서비스 (`/services`)
4. 레퍼런스커피 (`/coffee`)
5. 포트폴리오 (`/portfolio`)
6. 연락처 (`/contact`)
7. 개인정보처리방침 (`/privacy`)
8. 서비스약관 (`/terms`)
9. 데이터 삭제 안내 (`/data-deletion`)
10. 404 페이지 (`/404`)

### 핵심 성과 지표
- **가동률**: 99.5%
- **고객 수**: 200+
- **비용 절감**: 77% (월 $1.5)
- **배포 시간**: 43초
- **페이지 수**: 10개
- **Java 버전**: Java 25 LTS
- **Spring Boot 버전**: 4.0.3
- **AI 자동화 도구**: Claude Code + Git Worktree + tmux + MCP

## ⚠️ 주의사항

### 보안 관련
- 개인정보나 민감한 정보를 커밋에 포함하지 않음
- API 키나 비밀번호를 코드에 하드코딩하지 않음

### 성능 최적화
- 이미지는 WebP 포맷 사용
- 불필요한 JavaScript 라이브러리 추가 금지
- SEO 메타태그 누락 방지

### 법적 준수
- Facebook 앱 정책 준수
- 개인정보보호법 준수
- 서비스약관 일관성 유지

---

**마지막 업데이트**: 2026년 2월 23일
**버전**: 1.1.0