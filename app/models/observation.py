from .db import db


class Observation(db.Model):
    __tablename__ = "observations"

    id = db.Column(db.Integer, primary_key=True)
    picture_url = db.Column(db.String(500), nullable=False)
    body = db.Column(db.String(500))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="observations")

    def to_dict(self):
        return {
            "id": self.id,
            "picture_url": self.picture_url,
            "body": self.body,
            "user_id": self.user_id,
        }
