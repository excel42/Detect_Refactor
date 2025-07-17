const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(cors()); 
app.use(express.json());

let detectionResults = []; // 메모리 저장 (DB 없이 테스트)

app.post('/api/detect', async (req, res) => {
  // 예시: flask 서버로 프록시 요청
  const img = req.body.img || null; // 실서비스는 파일 업로드
  const flaskRes = await axios.post('http://localhost:5001/detect', {});
  const result = { ...flaskRes.data, detected_at: new Date().toISOString() };
  detectionResults.unshift(result); // 최신순 저장
  res.json(result);
});

app.get('/api/detections', (req, res) => {
  res.json(detectionResults);
});

app.listen(5000, () => console.log('Backend listening on 5000'));
