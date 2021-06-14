from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Habit

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

    habit = Habit(title=data["title"], user_id=data["user_id"])

    db.session.add(habit)
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


@habit_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_habit(id):
    habit = Habit.query.get(id)
    db.session.delete(habit)
    db.session.commit()
    return {"message": "deleted"}
