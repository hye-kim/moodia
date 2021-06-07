from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Observation

observation_routes = Blueprint("observations", __name__)


@observation_routes.route("/")
@login_required
def get_observations():
    observations = Observation.query.filter(
        Observation.user_id == current_user.id
    ).all()
    return jsonify([observation.to_dict() for observation in observations])


@observation_routes.route("/", methods=["POST"])
@login_required
def create_observation():
    data = request.json

    observation = Observation(
        picture_url=data["picture_url"],
        body=data["body"],
        user_id=current_user.id,
    )

    db.session.add(observation)
    db.session.commit()
    return observation.to_dict()


@observation_routes.route("/<int:id>", methods=["POST"])
@login_required
def create_observation_body(id):
    data = request.json
    observation = Observation.query.get(id)
    observation.body = data["body"]
    db.session.add(observation)
    db.session.commit()
    return observation.to_dict()


@observation_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_observation_body(id):
    data = request.json
    observation = Observation.query.get(id)
    observation.body = data["body"]
    db.session.add(observation)
    db.session.commit()
    return observation.to_dict()


@observation_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_observation(id):
    observation = Observation.query.get(id)
    db.session.delete(observation)
    db.session.commit()
    return {"message": "deleted"}
