
# 맹탐정: 개 입마개 인식 AI CCTV 시스템 (Dog Muzzle Detection System)

---

## 1. 프로젝트 개요

**목적**  
반려견 및 맹견에 의한 물림 사고 예방을 위해,  
AI 딥러닝(객체탐지/분류)과 IoT(라즈베리파이 카메라), 클라우드 기반 웹 기술을 활용해  
“입마개 미착용 맹견”을 실시간으로 탐지·분석·알림하는 지능형 CCTV 시스템을 개발하였습니다.

**주요 기능**  
- 라즈베리파이 IoT 카메라로 실시간 영상 스트리밍
- YOLO/CNN 딥러닝 기반 개·입마개 객체 탐지 및 품종 분류
- 클라우드 서버에서 탐지 결과(이미지/시간/품종/입마개여부) DB 저장
- 웹페이지(React/Vue)에서 탐지 이력·실시간 영상 조회
- 관리자는 전체 이력/알림/로그인 등 확장 가능

---

## 2. 시스템 전체 아키텍처

```plaintext
[IoT 카메라]
  |
  v
[Mjpg-streamer/AWS KVS]
  |
  v
[딥러닝 서버(Flask, YOLO, CNN)]
  |
  v
[Express 백엔드 API] <----> [DB(MySQL)] <----> [S3/로컬 Storage]
  |
  v
[웹프론트(React/Vue): 실시간 탐지 결과 표출, 이력 조회, 관리자]

```

---

> **Requirements**

* Python : 3.7.11
* Tensorflow-gpu : 1.15.2
* Keras : 2.3.0
* Cudatoolkit : 10.0.130
* cuDNN : 7.6.5

<br />

> **Data**

본 연구에 활용한 데이터

<br />


> **System Architecture**

본 연구에서는 두 개의 Convolutional Neural Network(CNN)와 두 개의 You Only Look Once(YOLO) 모델을 활용하여 입력된 이미지 속 개의 품종과 입마개 착용 여부를 판별한다.

<br />

> **Result**

![다운로드](https://user-images.githubusercontent.com/77565332/131991397-3aeeabd8-9320-44c8-9c8d-04ec2301927e.png)

