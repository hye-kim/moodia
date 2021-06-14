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


@goal_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_goal(id):
    data = request.json
    goal = Goal.query.get(id)
    goal.title = data["title"]
    db.session.add(goal)
    db.session.commit()
    return goal.to_dict()


@goal_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_goal(id):
    goal = Goal.query.get(id)
    db.session.delete(goal)
    db.session.commit()
    return {"message": "deleted"}


@goal_routes.route("/<int:id>/steps", methods=["POST"])
@login_required
def create_steps(id):
    data = request.json
    stepsData = data["steps"]
    steps = [Step(body=step, completed=False, goal_id=id) for step in stepsData]
    db.session.bulk_save_objects(steps)
    db.session.commit()
    goal = Goal.query.get(id)
    return goal.to_dict()


@goal_routes.route("/<int:id>/steps/<int:step_id>", methods=["PUT"])
@login_required
def edit_step(id, step_id):
    data = request.json
    step = Step.query.get(step_id)
    step.body = data["body"]
    step.completed = data["completed"]
    db.session.add(step)
    db.session.commit()
    goal = Goal.query.get(id)
    return goal.to_dict()

@goal_routes.route("/<int:id>/steps/<int:step_id>", methods=["DELETE"])
@login_required
def delete_step(id, step_id):
    step = Step.query.get(step_id)
    db.session.delete(step)
    db.session.commit()
    goal = Goal.query.get(id)
    return goal.to_dict()
