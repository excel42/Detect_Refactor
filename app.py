from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/detect', methods=['POST'])
def detect():
    # 실제로는 YOLO/CNN 실행, 여기서는 예시 결과 반환
    return jsonify({"breed": "Jindo", "is_muzzle": True})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
