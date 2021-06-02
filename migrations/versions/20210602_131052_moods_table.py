"""Moods table

Revision ID: c98075836bb4
Revises: ffdc0a98111c
Create Date: 2021-06-02 13:10:52.764089

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c98075836bb4'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('moods',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('users', sa.Column('first_name', sa.String(length=40), nullable=False))
    op.add_column('users', sa.Column('last_name', sa.String(length=40), nullable=False))
    op.add_column('users', sa.Column('picture_url', sa.String(length=500), nullable=True))
    op.drop_constraint('users_username_key', 'users', type_='unique')
    op.drop_column('users', 'username')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('username', sa.VARCHAR(length=40), autoincrement=False, nullable=False))
    op.create_unique_constraint('users_username_key', 'users', ['username'])
    op.drop_column('users', 'picture_url')
    op.drop_column('users', 'last_name')
    op.drop_column('users', 'first_name')
    op.drop_table('moods')
    # ### end Alembic commands ###
