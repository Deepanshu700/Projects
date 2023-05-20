from flask import Flask , render_template,redirect,url_for,request
app = Flask(__name__)

todos = [{"task":"sample task" , "price": "42$" ,"date": "05/07/10", "done": False}]

@app.route("/")
def index():
    return render_template("index.html",todos = todos)

@app.route("/add", methods = ["POST"])
def add():
    todo = request.form['tname']
    todo1 = request.form['tprice']
    todo2 = request.form['tdate']
    todos.append({'task': todo, 'price':todo1 ,"date": todo2 ,"done" : False})

    return redirect(url_for("index"))


@app.route("/edit/<int:index>" , methods = ["GET" , "POST"])
def edit(index):
    todo = todos[index]
    
    if request.method == "POST":
        todo['task'] = request.form["todo"]
        todo['price'] = request.form["todo1"]
        todo['date'] = request.form["todo2"]
        return redirect(url_for("index"))
    else:
        return render_template("edit.html" , todo = todo , index = index)

@app.route("/delete/<int:index>")
def delete(index):
    del todos[index]

    return redirect(url_for("index"))


if __name__ == '__main__':
    app.run(debug=True)
