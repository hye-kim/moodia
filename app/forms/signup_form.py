from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("Email is already registered.")


def password_matches(form, field):
    if form.data["password"] != field.data:
        raise ValidationError("Password does not match.")


class SignUpForm(FlaskForm):
    first_name = StringField("first_name", validators=[DataRequired()])
    last_name = StringField("last_name", validators=[DataRequired()])
    email = StringField("email", validators=[DataRequired(), Email(), user_exists])
    password = StringField("password", validators=[DataRequired()])
    repeat_password = StringField(
        "repeat_password", validators=[DataRequired(), password_matches]
    )
