from app.api.auth_routes import login
from logging import log
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Goal, Step

goal_routes = Blueprint("goals", __name__)


@goal_routes.route("/")
@login_required
def get_goals():
    goals = Goal.query.filter(Goal.user_id == current_user.id).all()
    return jsonify([goal.to_dict() for goal in goals])


@goal_routes.route("/", methods=["POST"])
@login_required
def create_goal():
    data = request.json

    goal = Goal(
        created_at=data["created_at"],
        completed_at=None,
        title=data["title"],
        user_id=data["user_id"],
    )

    db.session.add(goal)
    db.session.commit()
    return goal.to_dict()


@goal_routes.route("/<int:id>/steps", methods=["POST"])
@login_required
def create_steps(id):
    data = request.json
    stepsData = data["steps"]
    steps = [
        Step(body=step, completed=False, goal_id=id)
        for step in stepsData
    ]
    db.session.bulk_save_objects(steps)
    db.session.commit()
    return jsonify([step.to_dict() for step in steps])
