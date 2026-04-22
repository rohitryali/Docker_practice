from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    project = request.form.get('project')
    budget = request.form.get('budget')

    return render_template("index.html", message=f"Saved project for {name}")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
