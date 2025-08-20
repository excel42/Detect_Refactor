<img width="1536" height="1024" alt="Image" src="https://github.com/user-attachments/assets/0aa82a48-f372-45c9-ba39-e5fc5a6955ed" />


---
# 맹탐정: 맹견탐지 지능형 CCTV(Dog Muzzle Detection System)

## 1. 프로젝트 개요

맹탐정은 AI(딥러닝)과 IoT, 클라우드 기술을 활용하여  
개 물림 사고를 예방하고 맹견의 입마개 미착용 사례를 실시간으로 탐지하는 
지능형 CCTV 시스템입니다.

---

## 2. 주요 기술 및 아키텍처

![다운로드](https://user-images.githubusercontent.com/77565332/131991397-3aeeabd8-9320-44c8-9c8d-04ec2301927e.png)

- 라즈베리파이 카메라에서 실시간 영상을 송출받아  
- YOLO 및 CNN 기반 AI 모델이 개 객체, 품종, 입마개 착용 여부를 판별  
- 탐지 결과(이미지, 품종, 입마개 여부, 시간 등)는 서버와 DB에 저장  
- 웹페이지에서 실시간/이력 확인 및 관리자 기능 제공

- **IoT 디바이스**: Raspberry Pi Camera, AWS Kinesis Video Stream  
- **AI 딥러닝 서버**: Python(Flask), CNN, YOLO
- **백엔드**: Node.js(Express), RESTful API, RDS, MySQL
- **프론트엔드**: Javascript, Vue.js  
- **클라우드 인프라**: AWS(EC2, S3, RDS)

---

## 3. 기능별 상세 설명

### 1) 실시간 탐지 및 분석  
- IoT 카메라에서 송출되는 영상을 Python Flask 서버에서 수신  
- YOLO로 개 객체, 얼굴 탐지 → CNN으로 품종·입마개 여부 분류  
- 탐지 결과를 이미지, 텍스트, 시간 정보와 함께 DB에 저장

### 2) 웹 서비스 및 관리자 기능  
- 웹 페이지에서 실시간 탐지 결과 조회  
- 관리자/사용자 권한 구분 
- 탐지 기록 검색/필터, 실시간 경고/알림


## 5. 실행 및 사용법(로컬 기준)

1. **Flask 서버 실행**  
   - `python app.py` (기본 포트 5001)
2. **Express 백엔드 실행**  
   - `node server.js` (기본 포트 5000)
3. **React 프론트엔드 실행**  
   - `npm start` (기본 포트 3000)
4. **브라우저 접속**  
   - `http://localhost:3000` → “탐지 시뮬레이션 실행” → 결과 확인

---
