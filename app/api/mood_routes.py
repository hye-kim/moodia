from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Mood
from datetime import datetime, date

mood_routes = Blueprint("moods", __name__)


@mood_routes.route("/")
@login_required
def get_moods():
    data = request.args
    start = date(year=int(data["year"]), month=int(data["month"]), day=1)
    end = date(year=int(data["year"]), month=(int(data["month"]) + 1), day=1)
    moods = (
        Mood.query.filter(Mood.date < end)
        .filter(Mood.date >= start)
        .filter(Mood.user_id == current_user.id)
        .all()
    )
    return jsonify([mood.to_dict() for mood in moods])


@mood_routes.route("/", methods=["POST"])
@login_required
def create_mood():
    data = request.json

    mood = Mood(date=data["date"], rating=data["rating"], user_id=current_user.id)
    db.session.add(mood)
    db.session.commit()
    return mood.to_dict()


@mood_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_mood(id):
    data = request.json
    mood = Mood.query.get(id)
    mood.rating = data["rating"]
    db.session.add(mood)
    db.session.commit()
    return mood.to_dict()


@mood_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_mood(id):
    mood = Mood.query.get(id)
    db.session.delete(mood)
    db.session.commit()
    return {"message": "deleted"}
