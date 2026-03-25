# Daily Log Landing Page

Daily Log의 대외용 랜딩 웹사이트입니다. 이 프로젝트는 모바일 앱 본서비스를 대체하는 웹앱이 아니라, 서비스 소개, 신뢰 형성, Android 설치 유도, 정책 및 지원 허브 역할을 담당합니다.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- react-qr-code

## Pages

- `/` : 메인 랜딩 페이지
- `/download` : Android 설치 유도 및 디바이스별 다운로드 허브
- `/roadmap` : 제품 가치와 다음 단계 로드맵
- `/support` : 설치, 계정, 삭제 요청, 문의 안내
- `/privacy` : 개인정보처리방침 초안
- `/terms` : 이용약관 초안

## Project Structure

```text
src/
  app/          App Router page routes and metadata
  components/   Shared landing UI components
  lib/          Site config and content contracts
  assets/       Local fonts and visual assets
public/
  images/       App screenshots used in the landing site
  downloads/    Demo APK asset
```

## Local Development

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 확인할 수 있습니다.

## Production Notes

- Android APK는 현재 데모용 파일을 사용합니다.
- iOS 다운로드는 실제 링크 연결 전까지 `준비 중` 상태로 표시됩니다.
- 개인정보처리방침과 이용약관은 공개 전 최종 운영 문구로 교체해야 합니다.
- 실제 운영 시에는 APK를 Git 저장소보다 GitHub Releases 또는 별도 스토리지로 옮기는 것을 권장합니다.
