class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }
    validates :email, presence: true
    validates :email, uniqueness: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
    enum role: { super_admin: 0, head_nurse: 1, nurse: 2}
    has_one :detail
    scope :super_admin, -> { where(role: ["super_admin"]) }
    scope :head_nurse, -> { where(role: ["head_nurse"]) }
    scope :nurse, -> { where(role: ["nurse"]) }

    def personnel
        if self.role == 'super_admin'
            User.where.not(role: 'super_admin')

        elsif self.role == "head_nurse"
            User.where(role: 'nurse')
        else 
            []
        end
    end
end
