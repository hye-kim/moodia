from flask_wtf import FlaskForm
from wtforms import RadioField
from wtforms.validators import DataRequired, ValidationError
from app.models import Mood


class MoodForm(FlaskForm):
    rating = RadioField(
        "Rating",
        choices=[
            ("rating_one", "frown"),
            ("rating_two", "sad"),
            ("rating_three", "neutral"),
            ("rating_four", "happy"),
            ("rating_five", "excited"),
        ],
        validators=[DataRequired()],
    )
