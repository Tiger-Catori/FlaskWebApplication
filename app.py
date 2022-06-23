"""
 Application of Programming Principles
 Assignment Template 2021 - Flask & Python
"""
from flask import Flask, render_template, jsonify, request, make_response, redirect
import sys, json

app = Flask(__name__)


""" @app.route('/')
def hello_world():
    return 'Hello World!'
"""


@app.route('/')
def home():
    return render_template('index.html')


@app.route("/api/add", methods=['POST', 'GET'])
def add():
    """
    Write a function to
        receive values from the request object
        complete the calculation
        format the result into JSON
        return the JSON response object
    """
    num1 = request.args.get('num1')
    num2 = request.args.get('num2')
    total = float(num1) + float(num2)
    response = make_response(
        jsonify(
            {"result": str(total)}
        ), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route("/api/subtract", methods=['POST', 'GET'])
def subtract():
    """
    Write a function to
        receive values from the request object
        complete the calculation
        format the result into JSON
        return the JSON response object
    """
    num1 = request.args.get('num1')
    num2 = request.args.get('num2')
    total = float(num1) - float(num2)
    response = make_response(
        jsonify(
            {"result": str(total)}
        ), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route("/api/multiply", methods=['GET'])
def multiply():
    """
    Write a function to
        receive values from the request object
        complete the calculation
        format the result into JSON
        return the JSON response object
    """
    num1 = request.args.get('num1')
    num2 = request.args.get('num2')
    total = float(num1) * float(num2)
    response = make_response(
        jsonify(
            {"result": str(total)}
        ), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route("/api/divide", methods=['GET'])
def divide():
    """
    Write a function to
        receive values from the request object
        complete the calculation
        format the result into JSON
        return the JSON response object
    """
    num1 = float(request.args.get('num1'))
    num2 = float(request.args.get('num2'))
    if num2 == 0.0:
        total = "Divisor is Invalid Try Again."
        response = make_response(
            jsonify(
                {"result": str(total)}
            ), 200)
        response.headers["Content-Type"] = "application/json"
        return response
    else:
        total = float(num1) / float(num2)
        response = make_response(
            jsonify(
                {"result": str(total)}
            ), 200)
        response.headers["Content-Type"] = "application/json"
        return response


@app.route("/api/journal", methods=['GET', 'PUT'])
def journal():
    """
    Write a function to
        read the entries in the file containing the journal entries in the data folder
        format the result into JSON response object
        return the JSON response object
    """
    if request.method == 'GET':
        file = open("data/journal.json")
        str_data = file.read()
        response = make_response(
            jsonify(
                {"result": str_data}
            ), 200
        )
        response.headers["Content-Type"] = "application/json"
        print("after response made: " + str(response))
        return response
    else:
        data = request.json
        with open("data/journal.json", "w", encoding="utf-8") as journalFile:
            json.dump(data, journalFile)
            response = make_response(
                jsonify(
                    {"result": "Journal Saved"}
                ), 200
            )
            print("Journal Saved" + str(response))
            response.headers["Content-Type"] = "application/json"
            return response


if __name__ == '__main__':
    app.run(debug=True)
