from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Habit, Habit_Completion

habit_routes = Blueprint("habits", __name__)


@habit_routes.route("/")
@login_required
def get_habits():
    habits = Habit.query.filter(Habit.user_id == current_user.id).all()
    return jsonify([habit.to_dict() for habit in habits])


@habit_routes.route("/", methods=["POST"])
@login_required
def create_habit():
    data = request.json

    habit = Habit(title=data["title"], time=data["time"], user_id=data["user_id"])

    db.session.add(habit)
    db.session.commit()
    return habit.to_dict()


@habit_routes.route("/<int:id>", methods=["POST"])
@login_required
def create_habit_completion(id):
    data = request.json

    habit_completion = Habit_Completion(
        completed=data["completed"], date=data["date"], habit_id=id
    )

    habit = Habit.query.get(id)

    db.session.add(habit_completion)
    db.session.commit()
    return habit.to_dict()


@habit_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_habit(id):
    data = request.json
    habit = Habit.query.get(id)
    habit.title = data["title"]
    db.session.add(habit)
    db.session.commit()
    return habit.to_dict()


@habit_routes.route("/<int:id>/completions/<int:completion_id>", methods=["PUT"])
@login_required
def edit_habit_completion(id, completion_id):
    data = request.json
    habit_completion = Habit_Completion.query.get(completion_id)
    db.session.delete(habit_completion)
    db.session.commit()
    habit = Habit.query.get(id)
    return habit.to_dict()


@habit_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_habit(id):
    habit = Habit.query.get(id)
    db.session.delete(habit)
    db.session.commit()
    return {"message": "deleted"}
